"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

import { assetPath, type Locale } from "@/config/site";
import type { AudioGuideRoutePoint } from "@/data/audioGuide";
import { getLocalizedText } from "@/lib/getLocalizedText";

import styles from "./AudioGuidePage.module.css";

type AudioGuideRouteSliderProps = {
  locale: Locale;
  points: AudioGuideRoutePoint[];
};

const sliderLabels: Record<
  Locale,
  {
    next: string;
    previous: string;
    region: string;
  }
> = {
  be: {
    next: "Наступная кропка маршруту",
    previous: "Папярэдняя кропка маршруту",
    region: "Кропкі маршруту",
  },
  ru: {
    next: "Следующая точка маршрута",
    previous: "Предыдущая точка маршрута",
    region: "Точки маршрута",
  },
  en: {
    next: "Next route point",
    previous: "Previous route point",
    region: "Route points",
  },
};

function formatCounter(value: number) {
  return String(value).padStart(2, "0");
}

export function AudioGuideRouteSlider({
  locale,
  points,
}: AudioGuideRouteSliderProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [canScrollPrevious, setCanScrollPrevious] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const labels = sliderLabels[locale] ?? sliderLabels.be;

  const updateSliderState = useCallback(() => {
    const track = trackRef.current;

    if (!track) {
      return;
    }

    const cards = Array.from(
      track.querySelectorAll<HTMLElement>("[data-route-card]"),
    );
    const maxScrollLeft = track.scrollWidth - track.clientWidth;

    setCanScrollPrevious(track.scrollLeft > 2);
    setCanScrollNext(track.scrollLeft < maxScrollLeft - 2);

    if (cards.length === 0) {
      setCurrentIndex(0);
      return;
    }

    const closestIndex = cards.reduce(
      (closest, card, index) => {
        const distance = Math.abs(card.offsetLeft - track.scrollLeft);

        if (distance < closest.distance) {
          return { distance, index };
        }

        return closest;
      },
      { distance: Number.POSITIVE_INFINITY, index: 0 },
    ).index;

    setCurrentIndex(closestIndex);
  }, []);

  const scrollToPoint = useCallback(
    (direction: "next" | "previous") => {
      const track = trackRef.current;

      if (!track) {
        return;
      }

      const cards = Array.from(
        track.querySelectorAll<HTMLElement>("[data-route-card]"),
      );

      if (cards.length === 0) {
        return;
      }

      const nextIndex =
        direction === "next"
          ? Math.min(currentIndex + 1, cards.length - 1)
          : Math.max(currentIndex - 1, 0);

      cards[nextIndex]?.scrollIntoView({
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "auto"
          : "smooth",
        block: "nearest",
        inline: "start",
      });
    },
    [currentIndex],
  );

  useEffect(() => {
    const track = trackRef.current;

    if (!track) {
      return;
    }

    updateSliderState();

    const resizeObserver = new ResizeObserver(updateSliderState);
    resizeObserver.observe(track);

    track.addEventListener("scroll", updateSliderState, { passive: true });

    return () => {
      resizeObserver.disconnect();
      track.removeEventListener("scroll", updateSliderState);
    };
  }, [points.length, updateSliderState]);

  return (
    <div className={styles.routeSlider}>
      <div className={styles.routeSliderControls}>
        <p className={styles.routeCounter} aria-live="polite">
          <span>{formatCounter(currentIndex + 1)}</span>
          <span aria-hidden="true">/</span>
          <span>{formatCounter(points.length)}</span>
        </p>

        <div className={styles.routeArrowControls}>
          <button
            aria-label={labels.previous}
            className={styles.routeSliderButton}
            disabled={!canScrollPrevious}
            onClick={() => scrollToPoint("previous")}
            type="button"
          >
            <span aria-hidden="true">{"\u2190"}</span>
          </button>
          <button
            aria-label={labels.next}
            className={styles.routeSliderButton}
            disabled={!canScrollNext}
            onClick={() => scrollToPoint("next")}
            type="button"
          >
            <span aria-hidden="true">{"\u2192"}</span>
          </button>
        </div>
      </div>

      <div
        aria-label={labels.region}
        className={styles.routeTrack}
        ref={trackRef}
        role="list"
        tabIndex={0}
      >
        {points.map((point) => (
          <article
            className={styles.routeCard}
            data-route-card
            key={point.id}
            role="listitem"
          >
            <div className={styles.routeImageWrap}>
              <Image
                alt={getLocalizedText(point.image.alt, locale)}
                className={styles.routeImage}
                fill
                loading="lazy"
                sizes="(max-width: 700px) calc(100vw - 40px), (max-width: 1180px) 32vw, 20vw"
                src={assetPath(point.image.src)}
              />
              <span className={styles.routeNumber}>{point.number}</span>
            </div>
            <div className={styles.routeBody}>
              <h3>{getLocalizedText(point.title, locale)}</h3>
              <p>{getLocalizedText(point.text, locale)}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
