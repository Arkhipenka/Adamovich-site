import Image from "next/image";

import { assetPath } from "@/config/site";
import type { BiographyPeriod } from "@/data/biography";
import type { Locale } from "@/types/common.types";

import styles from "./BiographyPeriodSections.module.css";

type BiographyPeriodSectionsProps = {
  locale: Locale;
  periods: BiographyPeriod[];
};

type PeriodCopy = {
  imageFallback: string;
  noImage: string;
  readMore: string;
  themes: string;
};

const periodCopy: Record<Locale, PeriodCopy> = {
  be: {
    imageFallback: "Архіўны фотаздымак",
    noImage: "Матэрыялы будуць дададзены",
    readMore: "Даведацца больш пра перыяд",
    themes: "Тэмы",
  },
  ru: {
    imageFallback: "Архивная фотография",
    noImage: "Материалы будут добавлены",
    readMore: "Подробнее о периоде",
    themes: "Темы",
  },
  en: {
    imageFallback: "Archive photograph",
    noImage: "Materials will be added",
    readMore: "Read more about the period",
    themes: "Themes",
  },
};

function getPeriodYears(period: BiographyPeriod) {
  return period.years ?? period.year;
}

function getSectionId(periodId: string) {
  return `bio-period-${periodId}`;
}

export function BiographyPeriodSections({
  locale,
  periods,
}: BiographyPeriodSectionsProps) {
  const copy = periodCopy[locale] ?? periodCopy.be;

  return (
    <div className={styles.periodSections}>
      {periods.map((period) => {
        const sectionId = getSectionId(period.id);
        const events = period.events?.slice(0, 2) ?? [];
        const lead = period.shortDescription || period.sectionLead;

        return (
          <section
            aria-labelledby={`${sectionId}-title`}
            className={styles.periodSection}
            id={sectionId}
            key={period.id}
          >
            <div className={styles.periodInner}>
              <div className={styles.periodIntro}>
                <p className={styles.periodYear}>{getPeriodYears(period)}</p>
                <h2 id={`${sectionId}-title`}>{period.sectionTitle}</h2>
                <span className={styles.accentLine} aria-hidden="true" />
                <p className={styles.periodLead}>{lead}</p>
                <a className={styles.periodLink} href={`#${sectionId}`}>
                  {copy.readMore}
                  <span aria-hidden="true">→</span>
                </a>
              </div>

              {period.image ? (
                <figure className={styles.periodMedia}>
                  <Image
                    alt={period.imageAlt ?? copy.imageFallback}
                    className={styles.periodImage}
                    fill
                    loading="lazy"
                    sizes="(max-width: 760px) calc(100vw - 32px), (max-width: 1100px) 48vw, 560px"
                    src={assetPath(period.image)}
                  />
                  {period.imageCaption ? (
                    <figcaption className={styles.periodCaption}>
                      {period.imageCaption}
                    </figcaption>
                  ) : null}
                </figure>
              ) : (
                <div className={styles.periodMediaPlaceholder}>
                  <span>{copy.noImage}</span>
                </div>
              )}

              <aside className={styles.periodSide}>
                {period.aside ? (
                  <div className={styles.periodAside}>
                    <span className={styles.quoteMark} aria-hidden="true">
                      “
                    </span>
                    {period.aside.label ? (
                      <span className={styles.asideLabel}>
                        {period.aside.label}
                      </span>
                    ) : null}
                    {period.aside.title ? (
                      <h3>{period.aside.title}</h3>
                    ) : null}
                    <p>{period.aside.text}</p>
                    {period.aside.meta ? (
                      <span className={styles.asideMeta}>
                        {period.aside.meta}
                      </span>
                    ) : null}
                  </div>
                ) : null}

                {period.anchors?.length ? (
                  <div className={styles.anchorList} aria-label={copy.themes}>
                    {period.anchors.slice(0, 3).map((anchor) => (
                      <a
                        className={styles.thematicAnchor}
                        href={`#${sectionId}`}
                        key={anchor.id}
                      >
                        <span className={styles.anchorLabel}>{copy.themes}</span>
                        <strong>{anchor.title}</strong>
                      </a>
                    ))}
                  </div>
                ) : null}

                {events.length ? (
                  <div className={styles.eventList}>
                    {events.map((event) => (
                      <article
                        className={[
                          styles.eventCard,
                          event.featured ? styles.eventCardFeatured : "",
                        ]
                          .filter(Boolean)
                          .join(" ")}
                        key={event.id}
                      >
                        <p className={styles.eventYear}>{event.date ?? event.year}</p>
                        <h3>{event.title}</h3>
                        <p>{event.description}</p>
                      </article>
                    ))}
                  </div>
                ) : null}
              </aside>
            </div>
          </section>
        );
      })}
    </div>
  );
}
