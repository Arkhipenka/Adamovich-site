"use client";

import { biographyThemesCopy, type BiographyTheme } from "@/data/biography";
import type { Locale } from "@/types/common.types";

import styles from "./BiographyThemes.module.css";

type BiographyThemesProps = {
  locale: Locale;
  themes: BiographyTheme[];
};

const PERIOD_CHANGE_EVENT = "biography-period-change";

function scrollToTarget(targetId: string) {
  const target = document.getElementById(targetId);

  if (!target) return;

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  target.scrollIntoView({
    behavior: reduceMotion ? "auto" : "smooth",
    block: "start",
  });
}

export function BiographyThemes({ locale, themes }: BiographyThemesProps) {
  const copy = biographyThemesCopy[locale] ?? biographyThemesCopy.be;

  if (!themes.length) {
    return null;
  }

  return (
    <section className={styles.themesSection} aria-labelledby="biography-themes-title">
      <div className={styles.inner}>
        <div className={styles.heading}>
          <p className={styles.eyebrow}>
            {locale === "en" ? "Navigation" : locale === "ru" ? "Навигация" : "Навігацыя"}
          </p>
          <h2 id="biography-themes-title">{copy.title}</h2>
          <p>{copy.lead}</p>
        </div>

        <div className={styles.grid}>
          {themes.map((theme) => (
            <a
              className={styles.card}
              href={`#${theme.targetId}`}
              key={theme.id}
              onClick={(event) => {
                event.preventDefault();

                if (theme.periodId) {
                  window.dispatchEvent(
                    new CustomEvent(PERIOD_CHANGE_EVENT, {
                      detail: { periodId: theme.periodId },
                    }),
                  );
                }

                scrollToTarget(theme.targetId);
              }}
            >
              {theme.tag ? <span className={styles.tag}>{theme.tag}</span> : null}
              <h3>{theme.title}</h3>
              <p>{theme.description}</p>
              <span className={styles.arrow} aria-hidden="true">
                →
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
