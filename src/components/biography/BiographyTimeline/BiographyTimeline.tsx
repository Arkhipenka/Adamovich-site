"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

import { assetPath } from "@/config/site";
import { biographyTimelineCopy, type BiographyPeriod } from "@/data/biography";
import type { Locale } from "@/types/common.types";

import styles from "./BiographyTimeline.module.css";

type BiographyTimelineProps = {
  locale: Locale;
  periods: BiographyPeriod[];
};

const PERIOD_SECTION_PREFIX = "section-";
const PERIOD_CHANGE_EVENT = "biography-period-change";

function getSectionId(periodId: string) {
  return `${PERIOD_SECTION_PREFIX}${periodId}`;
}

function getPeriodIdFromSectionId(sectionId: string) {
  return sectionId.replace(PERIOD_SECTION_PREFIX, "");
}

function scrollToId(targetId: string) {
  const target = document.getElementById(targetId);

  if (!target) return;

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  target.scrollIntoView({
    behavior: reduceMotion ? "auto" : "smooth",
    block: "start",
  });
}

export function BiographyTimeline({ locale, periods }: BiographyTimelineProps) {
  const copy = biographyTimelineCopy[locale] ?? biographyTimelineCopy.be;
  const [activeId, setActiveId] = useState(periods[0]?.id ?? "");

  const activePeriod = useMemo(
    () => periods.find((period) => period.id === activeId) ?? periods[0],
    [activeId, periods],
  );

  useEffect(() => {
    const periodIds = new Set(periods.map((period) => period.id));

    function handlePeriodChange(event: Event) {
      const { periodId } = (event as CustomEvent<{ periodId?: string }>).detail ?? {};

      if (periodId && periodIds.has(periodId)) {
        setActiveId(periodId);
      }
    }

    window.addEventListener(PERIOD_CHANGE_EVENT, handlePeriodChange);

    return () => window.removeEventListener(PERIOD_CHANGE_EVENT, handlePeriodChange);
  }, [periods]);

  useEffect(() => {
    const targets = periods
      .map((period) => document.getElementById(getSectionId(period.id)))
      .filter((target): target is HTMLElement => Boolean(target));

    if (!targets.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry?.target.id) {
          setActiveId(getPeriodIdFromSectionId(visibleEntry.target.id));
        }
      },
      {
        rootMargin: "-28% 0px -52% 0px",
        threshold: [0.12, 0.24, 0.4],
      },
    );

    targets.forEach((target) => observer.observe(target));

    return () => observer.disconnect();
  }, [periods]);

  if (!activePeriod) {
    return null;
  }

  function scrollToActiveSection() {
    scrollToId(getSectionId(activePeriod.id));
  }

  function handlePeriodClick(periodId: string) {
    setActiveId(periodId);
    scrollToId(getSectionId(periodId));
  }

  return (
    <section className={styles.timelineSection} aria-labelledby="biography-timeline-title">
      <h2 className={styles.visuallyHidden} id="biography-timeline-title">
        {copy.datesTitle}
      </h2>

      <div className={styles.timelineSticky}>
        <div className={styles.timelineInner}>
          <div
            className={styles.timelineScroller}
            role="tablist"
            aria-label={copy.datesTitle}
          >
            {periods.map((period) => {
              const isActive = period.id === activePeriod.id;

              return (
                <button
                  aria-controls={`panel-${period.id}`}
                  aria-selected={isActive}
                  className={[
                    styles.timelineButton,
                    isActive ? styles.timelineButtonActive : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                  id={`tab-${period.id}`}
                  key={period.id}
                  onClick={() => handlePeriodClick(period.id)}
                  role="tab"
                  type="button"
                >
                  <span className={styles.buttonYear}>{period.year}</span>
                  <span className={styles.buttonTitle}>{period.shortDescription}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className={styles.detailWrap}>
        <article
          aria-labelledby={`panel-title-${activePeriod.id}`}
          className={styles.timelineDetail}
          id={`panel-${activePeriod.id}`}
          key={activePeriod.id}
          role="tabpanel"
        >
          <div className={styles.detailCopy}>
            <p className={styles.detailEyebrow}>{copy.detailLabel}</p>
            <p className={styles.detailYear}>{activePeriod.year}</p>
            <h3 className={styles.detailTitle} id={`panel-title-${activePeriod.id}`}>
              {activePeriod.title}
            </h3>
            <p className={styles.detailText}>{activePeriod.detail}</p>

            {activePeriod.events?.length ? (
              <div className={styles.detailEvents}>
                <p className={styles.detailEventsTitle}>{copy.eventsLabel}</p>
                <ul className={styles.detailEventsList}>
                  {activePeriod.events.slice(0, 3).map((event) => (
                    <li key={event.id}>
                      <span>{event.year}</span>
                      {event.title}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            <button className={styles.readButton} onClick={scrollToActiveSection} type="button">
              {copy.readSection}
              <span aria-hidden="true">→</span>
            </button>
          </div>

          {activePeriod.image ? (
            <figure className={styles.detailMedia}>
              <Image
                alt={activePeriod.imageAlt ?? copy.imageFallback}
                className={styles.detailImage}
                fill
                sizes="(max-width: 760px) calc(100vw - 40px), (max-width: 1200px) 46vw, 560px"
                src={assetPath(activePeriod.image)}
              />
              {activePeriod.imageCaption ? (
                <figcaption>{activePeriod.imageCaption}</figcaption>
              ) : null}
            </figure>
          ) : null}

          {activePeriod.aside ? (
            <aside className={styles.detailAside}>
              {activePeriod.aside.label ? (
                <p className={styles.asideLabel}>{activePeriod.aside.label}</p>
              ) : null}
              {activePeriod.aside.title ? <h4>{activePeriod.aside.title}</h4> : null}
              <p>{activePeriod.aside.text}</p>
              {activePeriod.aside.meta ? <span>{activePeriod.aside.meta}</span> : null}
            </aside>
          ) : null}
        </article>
      </div>
    </section>
  );
}
