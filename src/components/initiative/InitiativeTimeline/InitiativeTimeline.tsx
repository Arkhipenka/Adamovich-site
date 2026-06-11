import Image from "next/image";

import { assetPath } from "@/config/site";
import {
  initiativeTimeline,
  initiativeTimelineCopy,
  type InitiativeTimelineText,
  type InitiativeTimelineItem,
} from "@/data/initiativeTimeline";
import { getLocalizedText } from "@/lib/getLocalizedText";
import type { Locale } from "@/types/common.types";

import styles from "./InitiativeTimeline.module.css";

type InitiativeTimelineProps = {
  items?: InitiativeTimelineItem[];
  locale: Locale;
};

function localizeTimelineText(text: InitiativeTimelineText | undefined, locale: Locale) {
  if (!text) return "";
  return typeof text === "string" ? text : getLocalizedText(text, locale);
}

function chunkItems(items: InitiativeTimelineItem[], size: number) {
  const rows: InitiativeTimelineItem[][] = [];

  for (let index = 0; index < items.length; index += size) {
    rows.push(items.slice(index, index + size));
  }

  return rows;
}

function TimelineCard({
  item,
  locale,
  moreLabel,
}: {
  item: InitiativeTimelineItem;
  locale: Locale;
  moreLabel: string;
}) {
  const title = localizeTimelineText(item.title, locale);
  const date = localizeTimelineText(item.date, locale);
  const description = localizeTimelineText(item.description, locale);
  const imageAlt = localizeTimelineText(item.imageAlt, locale) || title;

  return (
    <article
      className={[
        styles.timelineCard,
        item.featured ? styles.timelineCardFeatured : "",
      ].join(" ")}
    >
      <span className={styles.timelineDot} aria-hidden="true" />
      <div className={styles.dateGroup}>
        <span className={styles.year}>{date || item.year}</span>
      </div>
      <h3 className={styles.cardTitle}>{title}</h3>

      {item.image ? (
        <div className={styles.cardImage}>
          <Image
            alt={imageAlt}
            className={styles.image}
            fill
            loading="lazy"
            sizes="(max-width: 760px) calc(100vw - 76px), (max-width: 1180px) 30vw, 18vw"
            src={assetPath(item.image)}
          />
        </div>
      ) : null}

      <p className={styles.description}>{description}</p>

      {item.href ? (
        <a className={styles.link} href={item.href}>
          {moreLabel}
          <span aria-hidden="true">→</span>
        </a>
      ) : null}
    </article>
  );
}

function TimelineRows({
  items,
  locale,
  moreLabel,
  rowSize,
  className,
}: {
  items: InitiativeTimelineItem[];
  locale: Locale;
  moreLabel: string;
  rowSize: number;
  className: string;
}) {
  const rows = chunkItems(items, rowSize);

  return (
    <div className={`${styles.timelineRows} ${className}`}>
      {rows.map((row, rowIndex) => (
        <div className={styles.timelineRow} key={`timeline-row-${rowIndex}`}>
          {row.map((item) => (
            <TimelineCard
              item={item}
              key={item.id}
              locale={locale}
              moreLabel={moreLabel}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export function InitiativeTimeline({
  items = initiativeTimeline,
  locale,
}: InitiativeTimelineProps) {
  const section = initiativeTimelineCopy[locale] ?? initiativeTimelineCopy.be;

  return (
    <section className={styles.section} aria-labelledby="initiative-timeline-title">
      <div className={styles.inner}>
        <p className={styles.eyebrow}>{section.eyebrow}</p>
        <h2 id="initiative-timeline-title" className={styles.title}>
          {section.title}
        </h2>

        <TimelineRows
          className={styles.timelineRowsDesktop}
          items={items}
          locale={locale}
          moreLabel={section.moreLabel}
          rowSize={5}
        />
        <TimelineRows
          className={styles.timelineRowsTablet}
          items={items}
          locale={locale}
          moreLabel={section.moreLabel}
          rowSize={3}
        />
        <div className={styles.timelineMobile}>
          {items.map((item) => (
            <TimelineCard
              item={item}
              key={item.id}
              locale={locale}
              moreLabel={section.moreLabel}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
