import Image from "next/image";

import { assetPath } from "@/config/site";
import { biographyTimelineCopy, type BiographyPeriod } from "@/data/biography";
import type { Locale } from "@/types/common.types";

import styles from "./BiographyPeriodSections.module.css";

type BiographyPeriodSectionsProps = {
  locale: Locale;
  periods: BiographyPeriod[];
};

function getSectionId(periodId: string) {
  return `section-${periodId}`;
}

function getCardClassName(featured?: boolean) {
  return [styles.eventCard, featured ? styles.eventCardFeatured : ""]
    .filter(Boolean)
    .join(" ");
}

export function BiographyPeriodSections({ locale, periods }: BiographyPeriodSectionsProps) {
  const copy = biographyTimelineCopy[locale] ?? biographyTimelineCopy.be;

  if (!periods.length) {
    return null;
  }

  return (
    <div className={styles.periodSections}>
      {periods.map((period) => (
        <section className={styles.periodSection} id={getSectionId(period.id)} key={period.id}>
          <div className={styles.periodIntro}>
            <p className={styles.periodYear}>{period.year}</p>
            <h3>{period.sectionTitle}</h3>
            <p className={styles.periodLead}>{period.sectionLead}</p>
            <div className={styles.periodText}>
              {period.sectionText.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          {period.image ? (
            <figure className={styles.periodMedia}>
              <Image
                alt={period.imageAlt ?? copy.imageFallback}
                className={styles.periodImage}
                fill
                loading="lazy"
                sizes="(max-width: 760px) calc(100vw - 32px), (max-width: 1200px) 52vw, 620px"
                src={assetPath(period.image)}
              />
              {period.imageCaption ? <figcaption>{period.imageCaption}</figcaption> : null}
            </figure>
          ) : null}

          <div className={styles.periodSide}>
            {period.aside ? (
              <aside className={styles.periodAside}>
                {period.aside.label ? <p>{period.aside.label}</p> : null}
                {period.aside.title ? <h4>{period.aside.title}</h4> : null}
                <span>{period.aside.text}</span>
              </aside>
            ) : null}

            {period.anchors?.length ? (
              <div className={styles.anchorList}>
                {period.anchors.map((anchor) => (
                  <aside className={styles.thematicAnchor} id={anchor.id} key={anchor.id}>
                    <p className={styles.anchorLabel}>
                      {locale === "en" ? "Theme" : locale === "ru" ? "Тема" : "Тэма"}
                    </p>
                    <h4>{anchor.title}</h4>
                    <span>{anchor.text}</span>
                  </aside>
                ))}
              </div>
            ) : null}

            {period.events?.length ? (
              <div className={styles.eventList}>
                {period.events.map((event) => (
                  <article className={getCardClassName(event.featured)} key={event.id}>
                    <p className={styles.eventYear}>{event.date ?? event.year}</p>
                    <h4>{event.title}</h4>
                    <p>{event.description}</p>
                  </article>
                ))}
              </div>
            ) : null}
          </div>
        </section>
      ))}
    </div>
  );
}
