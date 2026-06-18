"use client";

import { useEffect, useRef, useState } from "react";

import { BiographyPeriodSections } from "@/components/biography/BiographyPeriodSections";
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

  return (
    <section className={styles.explorer} aria-label={copy.ariaLabel}>
      <nav
        className={styles.stickyNav}
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
            aria-labelledby="biography-theme-placeholder-title"
            className={styles.thematicPlaceholder}
          >
            <div className={styles.placeholderInner}>
              <p className={styles.eyebrow}>{copy.thematicEyebrow}</p>
              <h2 id="biography-theme-placeholder-title">{copy.thematicTitle}</h2>
              <p>{copy.thematicLead}</p>
              {activeTheme ? (
                <span className={styles.placeholderMeta}>{activeTheme.title}</span>
              ) : null}
              <small>{copy.thematicNote}</small>
            </div>
          </section>
        )}
      </div>
    </section>
  );
}
