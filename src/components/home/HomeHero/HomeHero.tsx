"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, type CSSProperties } from "react";

import styles from "./HomeHero.module.css";
import { homeHeroControlLabels, homePageContent } from "@/data/home";
import { assetPath, type Locale } from "@/config/site";
import { getLocalizedText } from "@/lib/getLocalizedText";
import { localizedHref } from "@/lib/localizedHref";

type HomeHeroProps = {
  locale?: Locale;
};

function formatSlideNumber(value: number) {
  return value.toString().padStart(2, "0");
}

const slideImageClassById: Record<string, string> = {
  writer: styles["slide--writer"],
  "audio-guide": styles["slide--audio-guide"],
  books: styles["slide--books"],
  initiative: styles["slide--initiative"],
};

export function HomeHero({ locale = "ru" }: HomeHeroProps) {
  const slides = homePageContent.heroSlides;
  const labels = homeHeroControlLabels[locale];
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const currentSlide = slides[currentSlideIndex];
  const eyebrowText = getLocalizedText(currentSlide.eyebrow, locale);
  const totalSlides = slides.length;
  const progressWidth = `${((currentSlideIndex + 1) / totalSlides) * 100}%`;

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncPreference = () => setPrefersReducedMotion(mediaQuery.matches);

    syncPreference();
    mediaQuery.addEventListener("change", syncPreference);

    return () => mediaQuery.removeEventListener("change", syncPreference);
  }, []);

  useEffect(() => {
    if (isPaused || prefersReducedMotion) return;

    const interval = window.setInterval(() => {
      setCurrentSlideIndex((index) => (index + 1) % totalSlides);
    }, 7000);

    return () => window.clearInterval(interval);
  }, [isPaused, prefersReducedMotion, totalSlides]);

  const nextSlide = () => {
    setCurrentSlideIndex((index) => (index + 1) % totalSlides);
  };

  const previousSlide = () => {
    setCurrentSlideIndex((index) => (index - 1 + totalSlides) % totalSlides);
  };

  return (
    <section
      aria-label={labels.slider}
      className={styles.hero}
      onBlurCapture={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className={styles.background} aria-hidden="true">
        {slides.map((slide, index) => {
          const isActive = index === currentSlideIndex;

          return (
            <Image
              alt={isActive ? getLocalizedText(slide.image.alt, locale) : ""}
              aria-hidden={!isActive}
              className={[
                styles.backgroundImage,
                slideImageClassById[slide.id] ?? "",
                isActive ? styles.backgroundImageActive : "",
              ]
                .filter(Boolean)
                .join(" ")}
              fill
              key={slide.id}
              preload={index === 0}
              sizes="100vw"
              src={assetPath(slide.image.src)}
            />
          );
        })}
        <div className={styles.overlay} />
      </div>

      <div className={styles.inner}>
        <div className={styles.content} key={currentSlide.id}>
          {eyebrowText ? (
            <p className={styles.eyebrow}>{eyebrowText}</p>
          ) : null}
          <h1 className={styles.title}>
            {getLocalizedText(currentSlide.title, locale)}
          </h1>
          {currentSlide.subtitle ? (
            <p className={styles.subtitle}>
              {getLocalizedText(currentSlide.subtitle, locale)}
            </p>
          ) : null}
          {currentSlide.quote ? (
            <figure className={styles.quote}>
              <blockquote>
                &ldquo;{getLocalizedText(currentSlide.quote, locale)}&rdquo;
              </blockquote>
              {currentSlide.quoteAuthor ? (
                <figcaption className={styles.quoteAuthor}>
                  {getLocalizedText(currentSlide.quoteAuthor, locale)}
                </figcaption>
              ) : null}
            </figure>
          ) : null}
          {currentSlide.text ? (
            <p className={styles.textBlock}>
              {getLocalizedText(currentSlide.text, locale)}
            </p>
          ) : null}

          
        </div>
<div className={styles.actions}>
            <Link
              className={styles.buttonPrimary}
              href={localizedHref(locale, currentSlide.primaryLink.href)}
            >
              {getLocalizedText(currentSlide.primaryLink.label, locale)}
              <span aria-hidden="true">&#8594;</span>
            </Link>
            {currentSlide.secondaryLink ? (
              <Link
                className={styles.buttonSecondary}
                href={localizedHref(locale, currentSlide.secondaryLink.href)}
              >
                {getLocalizedText(currentSlide.secondaryLink.label, locale)}
                <span aria-hidden="true">&#8594;</span>
              </Link>
            ) : null}
            {currentSlide.tertiaryLink ? (
              <Link
                className={styles.buttonText}
                href={localizedHref(locale, currentSlide.tertiaryLink.href)}
              >
                {getLocalizedText(currentSlide.tertiaryLink.label, locale)}
                <span aria-hidden="true">&#8594;</span>
              </Link>
            ) : null}
          </div>
        <div
          className={styles.controls}
          style={
            {
              "--progress-width": progressWidth,
            } as CSSProperties
          }
        >
          <div className={styles.progress} aria-hidden="true">
            <span className={styles.progressNumber}>
              {formatSlideNumber(currentSlideIndex + 1)}
            </span>
            <span className={styles.progressDivider}>/</span>
            <span className={styles.progressTotal}>
              {formatSlideNumber(totalSlides)}
            </span>
            <span className={styles.progressLine} />
          </div>

          <div className={styles.arrowControls}>
            <button
              aria-label={labels.previous}
              className={styles.arrowButton}
              onClick={previousSlide}
              type="button"
            >
              &#8592;
            </button>
            <span className={styles.arrowDivider} aria-hidden="true" />
            <button
              aria-label={labels.next}
              className={styles.arrowButton}
              onClick={nextSlide}
              type="button"
            >
              &#8594;
            </button>
          </div>
        </div>

        {currentSlide.imageCredit ? (
          <p className={styles.imageCredit}>
            {getLocalizedText(currentSlide.imageCredit, locale)}
          </p>
        ) : null}
      </div>
    </section>
  );
}
