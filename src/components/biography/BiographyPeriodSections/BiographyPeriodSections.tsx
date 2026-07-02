"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, type ReactElement } from "react";

import { assetPath } from "@/config/site";
import { works, type Work } from "@/data/works";
import type { BiographyPeriod } from "@/data/biography";
import { localizedHref } from "@/lib/localizedHref";
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
  images: ModalImage[];
  index: number;
};

type ModalImage = {
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

const manualWorkAliases: Record<string, string[]> = {
  "asiya": ["Вікторыя", "Виктория", "Victoria", "Асія", "Асия", "Asiya"],
  "blockade-book": [
    "Блакадная кніга",
    "Блакаднай кнігі",
    "Блокадная книга",
    "Блокадной книги",
    "The Blockade Book",
  ],
  "come-and-see": [
    "Ідзі і глядзі",
    "Иди и смотри",
    "Come and See",
    "Забіце Гітлера!",
    "Убейте Гитлера!",
    "Kill Hitler!",
  ],
  "i-am-from-fire-village": [
    "Я з вогненнай вёскі",
    "Я з вогненнай вёскі...",
    "Я з вогненнай вёскі…",
    "Я из огненной деревни",
    "I Am from the Fiery Village",
  ],
  "khatyn-story": [
    "Хатынская аповесць",
    "Хатынскую аповесць",
    "Хатынскай аповесці",
    "Хатынская повесть",
    "Хатынскую повесть",
    "Khatyn Story",
  ],
  "last-pastoral": [
    "Апошняя пастараль",
    "Последняя пастораль",
    "The Last Pastoral",
  ],
  "last-vacation": [
    "Апошні адпачынак",
    "Последний отдых",
    "The Last Vacation",
  ],
  "nyamko": ["Нямко", "Nemko"],
  "punishmenters": ["Карнікі", "Каратели", "The Punishmenters"],
  "sons-go-to-battle": [
    "Сыны ідуць у бой",
    "Сыновья уходят в бой",
    "Sons Go to Battle",
  ],
  "venera": [
    "Венера, або Як я быў прыгоннікам",
    "Венера, или Как я был крепостным",
    "Venera",
  ],
  "vixi": ["Vixi", "Пражыта", "Прожито"],
  "war-under-rooftops": [
    "Вайна пад стрэхамі",
    "Война под крышами",
    "War under the Rooftops",
  ],
};

function getWorkAliases(work: Work) {
  const aliases = new Set<string>();

  Object.values(work.title).forEach((title) => aliases.add(title));
  if (work.originalTitle) {
    aliases.add(work.originalTitle);
  }
  manualWorkAliases[work.slug]?.forEach((alias) => aliases.add(alias));

  return [...aliases].filter(Boolean);
}

const workMentionRules = works
  .flatMap((work) =>
    getWorkAliases(work).map((alias) => ({
      alias,
      slug: work.slug,
    })),
  )
  .sort((a, b) => b.alias.length - a.alias.length);

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function renderLinkedBiographyText(text: string, locale: Locale) {
  const parts: (string | ReactElement)[] = [];
  let remainingText = text;
  let key = 0;

  while (remainingText) {
    const match = workMentionRules
      .map((rule) => {
        const result = new RegExp(escapeRegExp(rule.alias), "iu").exec(
          remainingText,
        );

        return result
          ? {
              index: result.index,
              text: result[0],
              rule,
            }
          : null;
      })
      .filter(
        (
          item,
        ): item is {
          index: number;
          text: string;
          rule: { alias: string; slug: string };
        } => Boolean(item),
      )
      .sort((a, b) => a.index - b.index || b.text.length - a.text.length)[0];

    if (!match) {
      parts.push(remainingText);
      break;
    }

    if (match.index > 0) {
      parts.push(remainingText.slice(0, match.index));
    }

    parts.push(
      <Link
        className={styles.workTextLink}
        href={localizedHref(locale, `/bibliography/${match.rule.slug}`)}
        key={`${match.rule.slug}-${key}`}
      >
        {match.text}
      </Link>,
    );

    remainingText = remainingText.slice(match.index + match.text.length);
    key += 1;
  }

  return parts;
}

function getYouTubeEmbedUrl(src: string) {
  try {
    const url = new URL(src);
    const isShortUrl = url.hostname.includes("youtu.be");
    const videoId = isShortUrl
      ? url.pathname.replace("/", "")
      : url.searchParams.get("v");

    if (!videoId) {
      return null;
    }

    const timeParam = url.searchParams.get("t") ?? url.searchParams.get("start");
    const start = timeParam
      ? Number.parseInt(timeParam.replace(/\D/g, ""), 10)
      : 0;
    const params = new URLSearchParams({
      rel: "0",
      modestbranding: "1",
    });

    if (Number.isFinite(start) && start > 0) {
      params.set("start", String(start));
    }

    return `https://www.youtube.com/embed/${videoId}?${params.toString()}`;
  } catch {
    return null;
  }
}

export function BiographyPeriodSections({
  locale,
  periods,
}: BiographyPeriodSectionsProps) {
  const copy = periodCopy[locale] ?? periodCopy.be;
  const modalCopy = imageModalCopy[locale] ?? imageModalCopy.be;
  const [expandedPeriods, setExpandedPeriods] = useState<string[]>([]);
  const [selectedImage, setSelectedImage] = useState<SelectedImage | null>(null);
  const activeImage = selectedImage?.images[selectedImage.index] ?? null;

  useEffect(() => {
    if (!selectedImage) return;

    const previousOverflow = document.body.style.overflow;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setSelectedImage(null);
      }

      if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
        setSelectedImage((current) => {
          if (!current || current.images.length < 2) return current;

          const step = event.key === "ArrowRight" ? 1 : -1;
          const nextIndex =
            (current.index + step + current.images.length) %
            current.images.length;

          return { ...current, index: nextIndex };
        });
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

  function getPeriodImages(period: BiographyPeriod): ModalImage[] {
    if (!period.image) return [];

    return [
      {
        src: period.image,
        alt: period.imageAlt ?? copy.imageFallback,
        caption: period.imageCaption,
      },
      ...(period.media ?? [])
        .filter((item) => item.type === "image")
        .map((item) => ({
          src: item.src,
          alt: item.alt ?? copy.imageFallback,
          caption: item.caption ?? item.title,
        })),
    ];
  }

  function openPeriodImage(period: BiographyPeriod, index = 0) {
    const images = getPeriodImages(period);
    if (!images.length) return;

    setSelectedImage({
      images,
      index: Math.min(index, images.length - 1),
    });
  }

  function showModalImage(step: number) {
    setSelectedImage((current) => {
      if (!current || current.images.length < 2) return current;

      const nextIndex =
        (current.index + step + current.images.length) %
        current.images.length;

      return { ...current, index: nextIndex };
    });
  }

  return (
    <div className={styles.periodSections}>
      {periods.map((period, index) => {
        const sectionId = getSectionId(period.id);
        const events = period.events?.slice(0, 2) ?? [];
        const lead = period.shortDescription || period.sectionLead;
        const isExpanded = expandedPeriods.includes(period.id);
        const isPlaceholder = index > 6;
        const imageMediaItems =
          period.media?.filter((item) => item.type === "image") ?? [];
        const visibleDetailMedia = imageMediaItems.slice(0, 1);
        const videoMediaItems =
          period.media?.filter((item) => item.type === "video") ?? [];
        const mainImage = period.image;

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
              !isPlaceholder ? styles.periodSectionFeatured : "",
              isPlaceholder ? styles.periodSectionPlaceholder : "",
              !isPlaceholder && !mainImage ? styles.periodSectionNoMedia : "",
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
                    <p className={styles.periodLead}>
                      {renderLinkedBiographyText(lead, locale)}
                    </p>
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
              ) : mainImage ? (
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
                    onClick={() => openPeriodImage(period)}
                    type="button"
                  >
                    <span className={styles.periodImageFrame}>
                      <Image
                        alt={period.imageAlt ?? copy.imageFallback}
                        className={styles.periodImage}
                        fill
                        loading="lazy"
                        sizes="(max-width: 760px) calc(100vw - 32px), (max-width: 1100px) 48vw, 560px"
                        src={assetPath(mainImage)}
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
                      <h3>
                        {renderLinkedBiographyText(period.aside.title, locale)}
                      </h3>
                    ) : null}
                    <p>{renderLinkedBiographyText(period.aside.text, locale)}</p>
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
                          <h3>
                            {renderLinkedBiographyText(event.title, locale)}
                          </h3>
                          <p>
                            {renderLinkedBiographyText(
                              event.description,
                              locale,
                            )}
                          </p>
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
                      <p key={paragraph}>
                        {renderLinkedBiographyText(paragraph, locale)}
                      </p>
                    ))}
                  </div>

                  {period.anchors?.length ? (
                    <div className={styles.detailThemes}>
                      {period.anchors.map((anchor) => (
                        <article className={styles.detailTheme} key={anchor.id}>
                          <span>{copy.themes}</span>
                          <h3>
                            {renderLinkedBiographyText(anchor.title, locale)}
                          </h3>
                          <p>{renderLinkedBiographyText(anchor.text, locale)}</p>
                        </article>
                      ))}
                    </div>
                  ) : null}

                  {visibleDetailMedia.length ? (
                    <div
                      className={[
                        styles.detailMediaGrid,
                        styles.detailMediaGridAside,
                      ]
                        .filter(Boolean)
                        .join(" ")}
                    >
                      {visibleDetailMedia.map((item) => {
                        const modalIndex = Math.max(
                          0,
                          getPeriodImages(period).findIndex(
                            (image) => image.src === item.src,
                          ),
                        );

                        return (
                          <figure
                            className={[
                              styles.detailMedia,
                              item.id === "mother-and-brother" ||
                              item.id === "award-sheet-1943"
                                ? styles.detailMediaPortrait
                                : "",
                            ]
                              .filter(Boolean)
                              .join(" ")}
                            key={item.id}
                          >
                            <button
                              aria-label={modalCopy.open}
                              className={styles.detailMediaButton}
                              onClick={() => openPeriodImage(period, modalIndex)}
                              type="button"
                            >
                              <span className={styles.detailMediaFrame}>
                                <Image
                                  alt={item.alt ?? copy.imageFallback}
                                  className={styles.detailMediaImage}
                                  fill
                                  loading="lazy"
                                  sizes="(max-width: 760px) calc(100vw - 64px), (max-width: 1100px) 70vw, 720px"
                                  src={assetPath(item.src)}
                                />
                              </span>
                            </button>
                            {item.caption || item.title ? (
                              <figcaption>
                                {item.caption ?? item.title}
                              </figcaption>
                            ) : null}
                          </figure>
                        );
                      })}
                      {videoMediaItems.map((item) => {
                        const embedUrl = getYouTubeEmbedUrl(item.src);

                        return embedUrl ? (
                          <figure className={styles.detailVideo} key={item.id}>
                            <div className={styles.detailVideoFrame}>
                              <iframe
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="strict-origin-when-cross-origin"
                                src={embedUrl}
                                title={item.title ?? "YouTube video"}
                              />
                            </div>
                            {item.caption || item.title ? (
                              <figcaption>
                                {item.caption ?? item.title}
                              </figcaption>
                            ) : null}
                          </figure>
                        ) : (
                          <a
                            className={styles.detailVideoLink}
                            href={item.src}
                            key={item.id}
                            rel="noreferrer"
                            target="_blank"
                          >
                            <span className={styles.detailVideoLabel}>
                              {item.title}
                            </span>
                            {item.caption ? <span>{item.caption}</span> : null}
                          </a>
                        );
                      })}
                    </div>
                  ) : (
                    <div
                      className={[
                        styles.detailMediaGrid,
                        styles.detailMediaGridAside,
                      ]
                        .filter(Boolean)
                        .join(" ")}
                    >
                      <div className={styles.detailMediaPlaceholder}>
                        <span>{copy.noImage}</span>
                      </div>
                    </div>
                  )}
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

      {selectedImage && activeImage ? (
        <div
          aria-label={activeImage.alt}
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
                alt={activeImage.alt}
                className={styles.imageModalImage}
                fill
                sizes="100vw"
                src={assetPath(activeImage.src)}
              />
              {selectedImage.images.length > 1 ? (
                <div
                  aria-label="Image navigation"
                  className={styles.imageModalControls}
                >
                  <button
                    aria-label="Previous image"
                    onClick={() => showModalImage(-1)}
                    type="button"
                  >
                    <span aria-hidden="true">&lsaquo;</span>
                  </button>
                  <button
                    aria-label="Next image"
                    onClick={() => showModalImage(1)}
                    type="button"
                  >
                    <span aria-hidden="true">&rsaquo;</span>
                  </button>
                </div>
              ) : null}
            </div>
            {activeImage.caption ? (
              <p className={styles.imageModalCaption}>
                {activeImage.caption}
              </p>
            ) : null}
          </div>
        </div>
      ) : null}
    </div>
  );
}
