"use client";

import Image from "next/image";
import { useMemo, useRef, useState } from "react";

import { assetPath } from "@/config/site";
import type { BiographyPeriod, BiographyTheme } from "@/data/biography";
import type { Locale } from "@/types/common.types";

import styles from "./BiographyExplorer.module.css";

type BiographyMode = { type: "chronology" } | { type: "theme"; themeId: string };

type BiographyExplorerProps = {
  locale: Locale;
  periods: BiographyPeriod[];
  themes: BiographyTheme[];
};

type ExplorerCopy = {
  backToChronology: string;
  collapse: string;
  datesLabel: string;
  detailLabel: string;
  detailsButton: string;
  galleryLabel: string;
  imageFallback: string;
  periodsLead: string;
  periodsTitle: string;
  relatedPeriods: string;
  relatedThemes: string;
  themeArticleEyebrow: string;
  themesLabel: string;
};

const explorerCopy = {
  be: {
    backToChronology: "Вярнуцца да перыядаў",
    collapse: "Згарнуць",
    datesLabel: "Даты",
    detailLabel: "Падрабязна",
    detailsButton: "Падрабязней",
    galleryLabel: "Матэрыялы перыяду",
    imageFallback: "Архіўны фотаздымак",
    periodsLead:
      "Кароткая навігацыя па асноўных этапах жыцця. Выберыце перыяд, каб раскрыць яго падрабязней.",
    periodsTitle: "Перыяды жыцця",
    relatedPeriods: "Звязаныя перыяды",
    relatedThemes: "Тэмы",
    themeArticleEyebrow: "Тэма жыцця і творчасці",
    themesLabel: "Тэмы",
  },
  en: {
    backToChronology: "Back to periods",
    collapse: "Collapse",
    datesLabel: "Dates",
    detailLabel: "Details",
    detailsButton: "Read more",
    galleryLabel: "Period materials",
    imageFallback: "Archive photograph",
    periodsLead:
      "A compact guide to the main stages of Adamovich’s life. Choose a period to open the full story.",
    periodsTitle: "Periods of Life",
    relatedPeriods: "Related periods",
    relatedThemes: "Themes",
    themeArticleEyebrow: "Theme of Life and Work",
    themesLabel: "Themes",
  },
  ru: {
    backToChronology: "Вернуться к периодам",
    collapse: "Свернуть",
    datesLabel: "Даты",
    detailLabel: "Подробно",
    detailsButton: "Подробнее",
    galleryLabel: "Материалы периода",
    imageFallback: "Архивная фотография",
    periodsLead:
      "Короткая навигация по основным этапам жизни. Выберите период, чтобы раскрыть его подробнее.",
    periodsTitle: "Периоды жизни",
    relatedPeriods: "Связанные периоды",
    relatedThemes: "Темы",
    themeArticleEyebrow: "Тема жизни и творчества",
    themesLabel: "Темы",
  },
} satisfies Record<Locale, ExplorerCopy>;

const themeIconMap: Record<string, string> = {
  chernobyl: "☢",
  cinema: "◈",
  civic: "✦",
  literature: "✎",
  repressions: "⌁",
  "war-memory": "◌",
};

function getThemeIcon(themeId: string) {
  return themeIconMap[themeId] ?? "•";
}

function getPeriodYears(period: BiographyPeriod) {
  return period.years ?? period.year;
}

function getPeriodDetailLead(period: BiographyPeriod) {
  return period.detailLead ?? period.sectionLead;
}

function getPeriodDetailText(period: BiographyPeriod) {
  return period.detailText ?? period.sectionText;
}

function getPeriodThemes(period: BiographyPeriod, themes: BiographyTheme[]) {
  if (period.themes?.length) {
    return themes.filter((theme) => period.themes?.includes(theme.id));
  }

  return themes.filter((theme) => {
    if (theme.periodId === period.id) return true;
    if (theme.targetId === `section-${period.id}`) return true;

    return Boolean(period.anchors?.some((anchor) => anchor.id === theme.targetId));
  });
}

function getThemePeriods(theme: BiographyTheme, periods: BiographyPeriod[]) {
  return periods.filter((period) => {
    if (theme.periodId === period.id) return true;
    if (theme.targetId === `section-${period.id}`) return true;

    return Boolean(period.anchors?.some((anchor) => anchor.id === theme.targetId));
  });
}

function getThemeAnchorText(theme: BiographyTheme, periods: BiographyPeriod[]) {
  for (const period of periods) {
    const anchor = period.anchors?.find((item) => item.id === theme.targetId);

    if (anchor) {
      return anchor.text;
    }
  }

  return "";
}

function scrollToContent() {
  const target = document.getElementById("biography-content");

  if (!target) return;

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  target.scrollIntoView({
    behavior: reduceMotion ? "auto" : "smooth",
    block: "start",
  });
}

export function BiographyExplorer({ locale, periods, themes }: BiographyExplorerProps) {
  const copy = explorerCopy[locale] ?? explorerCopy.be;
  const [mode, setMode] = useState<BiographyMode>({ type: "chronology" });
  const [activePeriodId, setActivePeriodId] = useState(periods[0]?.id ?? "");
  const [expandedPeriodId, setExpandedPeriodId] = useState<string | null>(null);
  const cardRefs = useRef<Record<string, HTMLElement | null>>({});

  const activePeriod = useMemo(
    () => periods.find((period) => period.id === activePeriodId) ?? periods[0],
    [activePeriodId, periods],
  );

  const expandedPeriod = useMemo(
    () => periods.find((period) => period.id === expandedPeriodId) ?? null,
    [expandedPeriodId, periods],
  );

  const selectedTheme = useMemo(
    () =>
      mode.type === "theme"
        ? themes.find((theme) => theme.id === mode.themeId) ?? null
        : null,
    [mode, themes],
  );

  if (!periods.length || !activePeriod) {
    return null;
  }

  function scrollCardIntoView(periodId: string) {
    requestAnimationFrame(() => {
      cardRefs.current[periodId]?.scrollIntoView({
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "auto"
          : "smooth",
        block: "center",
        inline: "nearest",
      });
    });
  }

  function handlePeriodClick(periodId: string) {
    setMode({ type: "chronology" });
    setActivePeriodId(periodId);
    setExpandedPeriodId(null);
    scrollCardIntoView(periodId);
  }

  function handleDateClick(periodId: string) {
    handlePeriodClick(periodId);
    scrollToContent();
  }

  function handleThemeClick(themeId: string) {
    const theme = themes.find((item) => item.id === themeId);

    setMode({ type: "theme", themeId });
    setExpandedPeriodId(null);

    if (theme?.periodId) {
      setActivePeriodId(theme.periodId);
    }

    scrollToContent();
  }

  function handleExpandPeriod(periodId: string) {
    setMode({ type: "chronology" });
    setActivePeriodId(periodId);
    setExpandedPeriodId(periodId);
  }

  return (
    <>
      <nav className={styles.stickyNav} aria-label={copy.datesLabel}>
        <div className={styles.stickyInner}>
          <div className={styles.navRow} aria-label={copy.datesLabel} role="tablist">
            {periods.map((period) => {
              const isActive = mode.type === "chronology" && period.id === activePeriodId;

              return (
                <button
                  aria-selected={isActive}
                  className={[styles.dateButton, isActive ? styles.activeDateButton : ""]
                    .filter(Boolean)
                    .join(" ")}
                  key={period.id}
                  onClick={() => handleDateClick(period.id)}
                  role="tab"
                  type="button"
                >
                  {getPeriodYears(period)}
                </button>
              );
            })}
          </div>

          <div className={styles.themeRow} aria-label={copy.themesLabel}>
            {themes.map((theme) => {
              const isActive = mode.type === "theme" && theme.id === mode.themeId;

              return (
                <button
                  aria-pressed={isActive}
                  className={[styles.themeButton, isActive ? styles.activeThemeButton : ""]
                    .filter(Boolean)
                    .join(" ")}
                  key={theme.id}
                  onClick={() => handleThemeClick(theme.id)}
                  type="button"
                >
                  <span className={styles.themeIcon} aria-hidden="true">
                    {getThemeIcon(theme.id)}
                  </span>
                  <span>{theme.title}</span>
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      <section className={styles.biographyContent} id="biography-content">
        {mode.type === "chronology" ? (
          <>
            <div className={styles.periodsCarouselSection}>
              <div className={styles.periodsCarouselInner}>
                <header className={styles.periodsCarouselHeader}>
                  <div>
                    <p className={styles.eyebrow}>{copy.datesLabel}</p>
                    <h2>{copy.periodsTitle}</h2>
                  </div>
                  <p>{copy.periodsLead}</p>
                </header>

                <div className={styles.periodsCarousel} aria-label={copy.periodsTitle}>
                  {periods.map((period) => {
                    const periodThemes = getPeriodThemes(period, themes);
                    const isActive = period.id === activePeriodId;

                    return (
                      <article
                        className={[styles.periodCard, isActive ? styles.periodCardActive : ""]
                          .filter(Boolean)
                          .join(" ")}
                        key={period.id}
                        onClick={() => handlePeriodClick(period.id)}
                        onKeyDown={(event) => {
                          if (event.key === "Enter" || event.key === " ") {
                            event.preventDefault();
                            handlePeriodClick(period.id);
                          }
                        }}
                        ref={(node) => {
                          cardRefs.current[period.id] = node;
                        }}
                        tabIndex={0}
                      >
                        <figure className={styles.periodCardImage}>
                          <Image
                            alt={period.imageAlt ?? copy.imageFallback}
                            className={styles.periodCardImg}
                            fill
                            loading="lazy"
                            sizes="(max-width: 640px) 88vw, (max-width: 1200px) 46vw, 520px"
                            src={assetPath(period.image ?? "/assets/images/biography/biography-hero-cinema.png")}
                          />
                        </figure>

                        <div className={styles.periodCardContent}>
                          <p className={styles.periodCardYears}>{getPeriodYears(period)}</p>
                          <h3>{period.title}</h3>
                          <p>{period.shortDescription}</p>

                          {periodThemes.length ? (
                            <div className={styles.periodThemeList} aria-label={copy.relatedThemes}>
                              {periodThemes.map((theme) => (
                                <span key={theme.id}>{theme.title}</span>
                              ))}
                            </div>
                          ) : null}

                          <button
                            className={styles.periodCardButton}
                            onClick={(event) => {
                              event.stopPropagation();
                              handleExpandPeriod(period.id);
                            }}
                            type="button"
                          >
                            {copy.detailsButton}
                            <span aria-hidden="true">→</span>
                          </button>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </div>
            </div>

            {expandedPeriod ? (
              <article className={styles.periodDetail} aria-labelledby="period-detail-title">
                <div className={styles.periodDetailGrid}>
                  <div className={styles.periodDetailCopy}>
                    <p className={styles.eyebrow}>{copy.detailLabel}</p>
                    <p className={styles.periodDetailYears}>{getPeriodYears(expandedPeriod)}</p>
                    <h2 id="period-detail-title">{expandedPeriod.sectionTitle}</h2>
                    <p className={styles.periodDetailLead}>{getPeriodDetailLead(expandedPeriod)}</p>
                    <div className={styles.periodDetailText}>
                      {getPeriodDetailText(expandedPeriod).map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>

                    {expandedPeriod.anchors?.length ? (
                      <div className={styles.periodDetailAnchors}>
                        {expandedPeriod.anchors.map((anchor) => (
                          <section className={styles.inlineTheme} key={anchor.id}>
                            <h3>{anchor.title}</h3>
                            <p>{anchor.text}</p>
                          </section>
                        ))}
                      </div>
                    ) : null}

                    {expandedPeriod.links?.length ? (
                      <div className={styles.periodDetailLinks}>
                        {expandedPeriod.links.map((link) => (
                          <a href={link.href} key={link.href}>
                            {link.label}
                          </a>
                        ))}
                      </div>
                    ) : null}

                    <button
                      className={styles.collapseButton}
                      onClick={() => setExpandedPeriodId(null)}
                      type="button"
                    >
                      {copy.collapse}
                    </button>
                  </div>

                  <div className={styles.periodDetailMedia}>
                    <figure className={styles.periodDetailMainImage}>
                      <Image
                        alt={expandedPeriod.imageAlt ?? copy.imageFallback}
                        className={styles.periodDetailImg}
                        fill
                        loading="lazy"
                        sizes="(max-width: 900px) calc(100vw - 64px), 620px"
                        src={assetPath(
                          expandedPeriod.image ?? "/assets/images/biography/biography-hero-cinema.png",
                        )}
                      />
                      {expandedPeriod.imageCaption ? (
                        <figcaption>{expandedPeriod.imageCaption}</figcaption>
                      ) : null}
                    </figure>

                    {expandedPeriod.events?.length ? (
                      <div className={styles.periodDetailMediaGrid}>
                        {expandedPeriod.events.map((event) => (
                          <article className={styles.detailEventCard} key={event.id}>
                            <p>{event.date ?? event.year}</p>
                            <h3>{event.title}</h3>
                            <span>{event.description}</span>
                          </article>
                        ))}
                      </div>
                    ) : null}

                    {expandedPeriod.media?.length ? (
                      <div className={styles.periodDetailMediaGrid}>
                        {expandedPeriod.media.map((item) => (
                          <article className={styles.mediaItem} key={item.id}>
                            {item.type === "image" ? (
                              <figure>
                                <Image
                                  alt={item.alt ?? item.title ?? copy.imageFallback}
                                  className={styles.mediaItemImage}
                                  fill
                                  loading="lazy"
                                  sizes="(max-width: 900px) 45vw, 300px"
                                  src={assetPath(item.src)}
                                />
                              </figure>
                            ) : (
                              <div className={styles.mediaItemPlaceholder}>
                                {item.type}
                              </div>
                            )}
                            {item.title ? <h3>{item.title}</h3> : null}
                            {item.caption ? <p>{item.caption}</p> : null}
                          </article>
                        ))}
                      </div>
                    ) : null}
                  </div>
                </div>
              </article>
            ) : null}
          </>
        ) : selectedTheme ? (
          <article className={styles.themeArticle} aria-labelledby="theme-article-title">
            <button
              className={styles.backButton}
              onClick={() => setMode({ type: "chronology" })}
              type="button"
            >
              ← {copy.backToChronology}
            </button>

            <div className={styles.themeArticleGrid}>
              <div>
                <p className={styles.eyebrow}>{copy.themeArticleEyebrow}</p>
                <h2 id="theme-article-title">{selectedTheme.title}</h2>
                <p className={styles.themeLead}>{selectedTheme.description}</p>
                {getThemeAnchorText(selectedTheme, periods) ? (
                  <p className={styles.themeText}>{getThemeAnchorText(selectedTheme, periods)}</p>
                ) : null}
              </div>

              <aside className={styles.relatedBox}>
                <p className={styles.eyebrow}>{copy.relatedPeriods}</p>
                <div className={styles.relatedList}>
                  {getThemePeriods(selectedTheme, periods).map((period) => (
                    <button
                      key={period.id}
                      onClick={() => handleDateClick(period.id)}
                      type="button"
                    >
                      <span>{getPeriodYears(period)}</span>
                      {period.title}
                    </button>
                  ))}
                </div>
              </aside>
            </div>
          </article>
        ) : null}
      </section>
    </>
  );
}
