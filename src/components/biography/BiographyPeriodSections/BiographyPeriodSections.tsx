"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

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
  readLess: string;
  facts: string;
  themes: string;
  placeholderText: string;
};

type SelectedImage = {
  src: string;
  alt: string;
  caption?: string;
};

const imageModalCopy: Record<
  Locale,
  { open: string; close: string }
> = {
  be: {
    open: "Адкрыць фатаграфію",
    close: "Закрыць фатаграфію",
  },
  ru: {
    open: "Открыть фотографию",
    close: "Закрыть фотографию",
  },
  en: {
    open: "Open photograph",
    close: "Close photograph",
  },
};

const periodCopy: Record<Locale, PeriodCopy> = {
  be: {
    imageFallback: "Архіўны фотаздымак",
    noImage: "Матэрыялы будуць дададзены",
    readMore: "Даведацца больш пра перыяд",
    readLess: "Згарнуць падрабязнасці",
    facts: "Важныя факты",
    themes: "Тэмы",
    placeholderText: "Раздзел у распрацоўцы.",
  },
  ru: {
    imageFallback: "Архивная фотография",
    noImage: "Материалы будут добавлены",
    readMore: "Подробнее о периоде",
    readLess: "Свернуть подробности",
    facts: "Важные факты",
    themes: "Темы",
    placeholderText: "Раздел в разработке.",
  },
  en: {
    imageFallback: "Archive photograph",
    noImage: "Materials will be added",
    readMore: "Read more about the period",
    readLess: "Hide details",
    facts: "Key facts",
    themes: "Themes",
    placeholderText: "Section in progress.",
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
  const modalCopy = imageModalCopy[locale] ?? imageModalCopy.be;
  const [expandedPeriods, setExpandedPeriods] = useState<string[]>([]);
  const [selectedImage, setSelectedImage] = useState<SelectedImage | null>(null);

  useEffect(() => {
    if (!selectedImage) return;

    const previousOverflow = document.body.style.overflow;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setSelectedImage(null);
      }
    }

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImage]);

  function togglePeriod(periodId: string) {
    setExpandedPeriods((current) =>
      current.includes(periodId)
        ? current.filter((id) => id !== periodId)
        : [...current, periodId],
    );
  }

  return (
    <div className={styles.periodSections}>
      {periods.map((period, index) => {
        const sectionId = getSectionId(period.id);
        const events = period.events?.slice(0, 2) ?? [];
        const lead = period.shortDescription || period.sectionLead;
        const isExpanded = expandedPeriods.includes(period.id);
        const isPlaceholder = index > 1;

        return (
          <section
            aria-label={
              isPlaceholder
                ? `${getPeriodYears(period)}. ${copy.placeholderText}`
                : undefined
            }
            aria-labelledby={isPlaceholder ? undefined : `${sectionId}-title`}
            className={[
              styles.periodSection,
              period.id === "childhood" ? styles.periodSectionFeatured : "",
              isPlaceholder ? styles.periodSectionPlaceholder : "",
            ]
              .filter(Boolean)
              .join(" ")}
            id={sectionId}
            key={period.id}
          >
            <div className={styles.periodInner}>
              <div className={styles.periodIntro}>
                <p className={styles.periodYear}>{getPeriodYears(period)}</p>
                {!isPlaceholder ? (
                  <>
                    <h2 id={`${sectionId}-title`}>{period.sectionTitle}</h2>
                    <span className={styles.accentLine} aria-hidden="true" />
                    <p className={styles.periodLead}>{lead}</p>
                    {period.tags?.length ? (
                      <ul className={styles.tagList} aria-label={copy.themes}>
                        {period.tags.map((tag) => (
                          <li key={tag}>#{tag}</li>
                        ))}
                      </ul>
                    ) : null}
                  </>
                ) : null}
                {!isPlaceholder ? (
                  <button
                    aria-controls={`${sectionId}-details`}
                    aria-expanded={isExpanded}
                    className={`${styles.periodLink} ${styles.periodLinkDesktop}`}
                    onClick={() => togglePeriod(period.id)}
                    type="button"
                  >
                    {isExpanded ? copy.readLess : copy.readMore}
                    <span
                      aria-hidden="true"
                      className={isExpanded ? styles.linkArrowExpanded : ""}
                    >
                      ↓
                    </span>
                  </button>
                ) : null}
              </div>

              {isPlaceholder ? (
                <div className={styles.periodPlaceholderPanel}>
                  <p>{copy.placeholderText}</p>
                </div>
              ) : period.image ? (
                <figure
                  className={[
                    styles.periodMedia,
                    period.id === "childhood" ? styles.periodMediaPortrait : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                >
                  <button
                    aria-label={modalCopy.open}
                    className={styles.periodImageButton}
                    onClick={() =>
                      setSelectedImage({
                        src: period.image!,
                        alt: period.imageAlt ?? copy.imageFallback,
                        caption: period.imageCaption,
                      })
                    }
                    type="button"
                  >
                    <span className={styles.periodImageFrame}>
                      <Image
                        alt={period.imageAlt ?? copy.imageFallback}
                        className={styles.periodImage}
                        fill
                        loading="lazy"
                        sizes="(max-width: 760px) calc(100vw - 32px), (max-width: 1100px) 48vw, 560px"
                        src={assetPath(period.image)}
                      />
                    </span>
                  </button>
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

              {!isPlaceholder ? (
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

                {events.length ? (
                  <div className={styles.eventGroup}>
                    <p className={styles.factHeading}>{copy.facts}</p>
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
                          <p className={styles.eventYear}>
                            {event.date ?? event.year}
                          </p>
                          <h3>{event.title}</h3>
                          <p>{event.description}</p>
                        </article>
                      ))}
                    </div>
                  </div>
                ) : null}
              </aside>
              ) : null}

              {!isPlaceholder ? (
              <div
                className={[
                  styles.periodDetails,
                  isExpanded ? styles.periodDetailsExpanded : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
                id={`${sectionId}-details`}
              >
                <div className={styles.periodDetailsInner}>
                  <div className={styles.detailText}>
                    {period.sectionText.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>

                  {period.anchors?.length ? (
                    <div className={styles.detailThemes}>
                      {period.anchors.map((anchor) => (
                        <article className={styles.detailTheme} key={anchor.id}>
                          <span>{copy.themes}</span>
                          <h3>{anchor.title}</h3>
                          <p>{anchor.text}</p>
                        </article>
                      ))}
                    </div>
                  ) : null}

                  {period.media?.some((item) => item.type === "image") ? (
                    <div
                      className={[
                        styles.detailMediaGrid,
                        period.media.some(
                          (item) => item.id === "mother-and-brother",
                        )
                          ? styles.detailMediaGridAside
                          : "",
                      ]
                        .filter(Boolean)
                        .join(" ")}
                    >
                      {period.media
                        .filter((item) => item.type === "image")
                        .map((item) => (
                          <figure
                            className={[
                              styles.detailMedia,
                              item.id === "mother-and-brother"
                                ? styles.detailMediaPortrait
                                : "",
                            ]
                              .filter(Boolean)
                              .join(" ")}
                            key={item.id}
                          >
                            <div className={styles.detailMediaFrame}>
                              <Image
                                alt={item.alt ?? copy.imageFallback}
                                className={styles.detailMediaImage}
                                fill
                                loading="lazy"
                                sizes="(max-width: 760px) calc(100vw - 64px), (max-width: 1100px) 70vw, 720px"
                                src={assetPath(item.src)}
                              />
                            </div>
                            {item.caption || item.title ? (
                              <figcaption>
                                {item.caption ?? item.title}
                              </figcaption>
                            ) : null}
                          </figure>
                        ))}
                    </div>
                  ) : null}
                </div>
              </div>
              ) : null}

              {!isPlaceholder ? (
                <button
                  aria-controls={`${sectionId}-details`}
                  aria-expanded={isExpanded}
                  className={`${styles.periodLink} ${styles.periodLinkMobile}`}
                  onClick={() => togglePeriod(period.id)}
                  type="button"
                >
                  {isExpanded ? copy.readLess : copy.readMore}
                  <span
                    aria-hidden="true"
                    className={isExpanded ? styles.linkArrowExpanded : ""}
                  >
                    ↓
                  </span>
                </button>
              ) : null}
            </div>
          </section>
        );
      })}

      {selectedImage ? (
        <div
          aria-label={selectedImage.alt}
          aria-modal="true"
          className={styles.imageModal}
          onClick={() => setSelectedImage(null)}
          role="dialog"
        >
          <div
            className={styles.imageModalContent}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              aria-label={modalCopy.close}
              autoFocus
              className={styles.imageModalClose}
              onClick={() => setSelectedImage(null)}
              type="button"
            >
              <span aria-hidden="true">×</span>
            </button>
            <div className={styles.imageModalFrame}>
              <Image
                alt={selectedImage.alt}
                className={styles.imageModalImage}
                fill
                sizes="100vw"
                src={assetPath(selectedImage.src)}
              />
            </div>
            {selectedImage.caption ? (
              <p className={styles.imageModalCaption}>
                {selectedImage.caption}
              </p>
            ) : null}
          </div>
        </div>
      ) : null}
    </div>
  );
}
