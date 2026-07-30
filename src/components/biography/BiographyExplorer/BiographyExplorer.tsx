"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { BiographyPeriodSections } from "@/components/biography/BiographyPeriodSections";
import { assetPath } from "@/config/site";
import type { BiographyPeriod, BiographyTheme } from "@/data/biography";
import type { Locale } from "@/types/common.types";

import styles from "./BiographyExplorer.module.css";

type BiographyExplorerProps = {
  locale: Locale;
  periods: BiographyPeriod[];
  themes: BiographyTheme[];
};

type BiographyMode = "chronology" | "theme";

type ExplorerCopy = {
  ariaLabel: string;
  datesLabel: string;
  themesLabel: string;
  thematicEyebrow: string;
  thematicTitle: string;
  thematicLead: string;
  thematicNote: string;
};

const explorerCopy: Record<Locale, ExplorerCopy> = {
  be: {
    ariaLabel: "Навігацыя па біяграфіі",
    datesLabel: "Перыяды жыцця",
    themesLabel: "Тэматычныя раздзелы",
    thematicEyebrow: "Тэматычныя раздзелы",
    thematicTitle: "Раздзел рыхтуецца",
    thematicLead:
      "Тэматычная навігацыя па біяграфіі будзе дададзена пазней: вайна, літаратура, кіно, памяць, грамадская пазіцыя і Глуша.",
    thematicNote: "Пакуль можна рухацца па храналогіі вышэй.",
  },
  ru: {
    ariaLabel: "Навигация по биографии",
    datesLabel: "Периоды жизни",
    themesLabel: "Тематические разделы",
    thematicEyebrow: "Тематические разделы",
    thematicTitle: "Раздел готовится",
    thematicLead:
      "Тематическая навигация по биографии будет добавлена позже: война, литература, кино, память, гражданская позиция и Глуша.",
    thematicNote: "Пока можно двигаться по хронологии выше.",
  },
  en: {
    ariaLabel: "Biography navigation",
    datesLabel: "Life periods",
    themesLabel: "Thematic sections",
    thematicEyebrow: "Thematic sections",
    thematicTitle: "Section in preparation",
    thematicLead:
      "The thematic biography navigation will be added later: war, literature, cinema, memory, civic voice and Glusha.",
    thematicNote: "For now, use the chronology above.",
  },
};

function getPeriodYears(period: BiographyPeriod) {
  return period.years ?? period.year;
}

function getSectionId(periodId: string) {
  return `bio-period-${periodId}`;
}

function scrollToElement(id: string) {
  const target = document.getElementById(id);

  if (!target) {
    return;
  }

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  target.scrollIntoView({
    behavior: reduceMotion ? "auto" : "smooth",
    block: "start",
  });
}

export function BiographyExplorer({
  locale,
  periods,
  themes,
}: BiographyExplorerProps) {
  const copy = explorerCopy[locale] ?? explorerCopy.be;
  const [mode, setMode] = useState<BiographyMode>("chronology");
  const [activePeriodId, setActivePeriodId] = useState(periods[0]?.id ?? "");
  const [activeThemeId, setActiveThemeId] = useState(themes[0]?.id ?? "");
  const [isNearFooter, setIsNearFooter] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (mode !== "chronology") {
      return;
    }

    let frameId = 0;

    const updateActivePeriod = () => {
      frameId = 0;

      const headerHeight =
        Number.parseFloat(
          getComputedStyle(document.documentElement).getPropertyValue(
            "--header-height-scrolled",
          ),
        ) || 62;
      const navigationHeight = navRef.current?.offsetHeight ?? 0;
      const activationLine = headerHeight + navigationHeight + 24;
      let nextPeriodId = periods[0]?.id ?? "";

      for (const period of periods) {
        const section = document.getElementById(getSectionId(period.id));

        if (section && section.getBoundingClientRect().top <= activationLine) {
          nextPeriodId = period.id;
        }
      }

      setActivePeriodId((currentId) =>
        currentId === nextPeriodId ? currentId : nextPeriodId,
      );
    };

    const handleScroll = () => {
      if (!frameId) {
        frameId = window.requestAnimationFrame(updateActivePeriod);
      }
    };

    updateActivePeriod();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);

      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, [mode, periods]);

  useEffect(() => {
    const footer = document.querySelector("[data-site-footer]");

    if (!footer) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsNearFooter(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: "0px 0px 180px 0px",
        threshold: 0,
      },
    );

    observer.observe(footer);

    return () => {
      observer.disconnect();
    };
  }, []);

  if (!periods.length) {
    return null;
  }

  function handlePeriodClick(periodId: string) {
    setMode("chronology");
    setActivePeriodId(periodId);
    window.requestAnimationFrame(() => scrollToElement(getSectionId(periodId)));
  }

  function handleThemeClick(themeId: string) {
    setMode("theme");
    setActiveThemeId(themeId);
    window.requestAnimationFrame(() => scrollToElement("biography-content"));
  }

  const activeTheme = themes.find((theme) => theme.id === activeThemeId);
  const hasThemeContent = Boolean(
    activeTheme?.articleTitle ||
      activeTheme?.lead ||
      activeTheme?.article?.length ||
      activeTheme?.text?.length ||
      activeTheme?.aside,
  );
  const hasThemeArticle = Boolean(activeTheme?.article?.length);

  return (
    <section className={styles.explorer} aria-label={copy.ariaLabel}>
      <nav
        className={[
          styles.stickyNav,
          isNearFooter ? styles.stickyNavNearFooter : "",
        ]
          .filter(Boolean)
          .join(" ")}
        aria-label={copy.ariaLabel}
        ref={navRef}
      >
        <div className={styles.stickyInner}>
          <div className={styles.navRow} aria-label={copy.datesLabel} role="tablist">
            {periods.map((period) => {
              const isActive = mode === "chronology" && period.id === activePeriodId;

              return (
                <button
                  aria-selected={isActive}
                  className={[
                    styles.dateButton,
                    isActive ? styles.activeDateButton : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                  key={period.id}
                  onClick={() => handlePeriodClick(period.id)}
                  role="tab"
                  type="button"
                >
                  {getPeriodYears(period)}
                </button>
              );
            })}
          </div>

          {themes.length ? (
            <div className={styles.themeRow} aria-label={copy.themesLabel}>
              {themes.map((theme) => {
                const isActive = mode === "theme" && theme.id === activeThemeId;

                return (
                  <button
                    aria-pressed={isActive}
                    className={[
                      styles.themeButton,
                      isActive ? styles.activeThemeButton : "",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                    key={theme.id}
                    onClick={() => handleThemeClick(theme.id)}
                    type="button"
                  >
                    {theme.title}
                  </button>
                );
              })}
            </div>
          ) : null}
        </div>
      </nav>

      <div className={styles.biographyContent} id="biography-content">
        {mode === "chronology" ? (
          <BiographyPeriodSections locale={locale} periods={periods} />
        ) : (
          <section
            aria-labelledby="biography-theme-title"
            className={styles.thematicPlaceholder}
          >
            <div className={styles.placeholderInner}>
              <p className={styles.eyebrow}>{copy.thematicEyebrow}</p>
              <h2 id="biography-theme-title">
                {activeTheme?.articleTitle ?? activeTheme?.title ?? copy.thematicTitle}
              </h2>
              {activeTheme?.articleTitle && activeTheme.title ? (
                <span className={styles.placeholderMeta}>{activeTheme.title}</span>
              ) : null}
              <p className={styles.themeLead}>
                {activeTheme?.lead ?? activeTheme?.description ?? copy.thematicLead}
              </p>
              {activeTheme?.article?.length ? (
                <div className={styles.themeArticle}>
                  {activeTheme.article.map((block, index) =>
                    block.type === "image" ? (
                      <figure className={styles.themeFigure} key={`${block.type}-${index}`}>
                        <span className={styles.themeImageFrame}>
                          <Image
                            alt={block.alt}
                            className={styles.themeImage}
                            fill
                            loading="lazy"
                            sizes="(max-width: 760px) calc(100vw - 64px), 820px"
                            src={assetPath(block.src)}
                          />
                        </span>
                        {block.caption ? (
                          <figcaption>{block.caption}</figcaption>
                        ) : null}
                      </figure>
                    ) : block.type === "pullquote" ? (
                      <blockquote className={styles.themePullQuote} key={`${block.type}-${index}`}>
                        <span aria-hidden="true">“</span>
                        <p>{block.text}</p>
                        {block.meta ? <cite>{block.meta}</cite> : null}
                      </blockquote>
                    ) : (
                      <p className={styles.themeParagraph} key={`${block.type}-${index}`}>
                        {block.text}
                      </p>
                    ),
                  )}
                </div>
              ) : null}
              {!hasThemeArticle && activeTheme?.text?.length ? (
                <div className={styles.themeText}>
                  {activeTheme.text.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              ) : null}
              {!hasThemeArticle && activeTheme?.aside ? (
                <blockquote className={styles.themeQuote}>
                  <span aria-hidden="true">“</span>
                  <p>{activeTheme.aside.text}</p>
                  {activeTheme.aside.meta ? (
                    <cite>{activeTheme.aside.meta}</cite>
                  ) : null}
                </blockquote>
              ) : null}
              {!hasThemeContent && activeTheme ? (
                <span className={styles.placeholderMeta}>{activeTheme.title}</span>
              ) : null}
              {!hasThemeContent ? <small>{copy.thematicNote}</small> : null}
            </div>
          </section>
        )}
      </div>
    </section>
  );
}
