import Image from "next/image";
import Link from "next/link";

import styles from "./WorkCard.module.css";
import { assetPath, type Locale } from "@/config/site";
import type { Work, WorkType } from "@/data/works";
import { getLocalizedText } from "@/lib/getLocalizedText";
import { getWorkCover, getWorkYear } from "@/lib/works";
import { localizedHref } from "@/lib/localizedHref";

type WorkCardProps = {
  compact?: boolean;
  locale: Locale;
  work: Work;
};

const detailsLabels = {
  ru: "Подробнее",
  be: "Даведвацца больш",
  en: "Read more",
} satisfies Record<Locale, string>;

const typeLabels = {
  ru: {
    book: "Книга",
    story: "Рассказ",
    novella: "Повесть",
    film: "Фильм",
    script: "Сценарий",
    article: "Статья",
    essay: "Публицистика",
    interview: "Интервью",
    archive: "Архив",
    research: "Исследование",
    documentary_prose: "Документальная проза",
  },
  be: {
    book: "Кніга",
    story: "Апавяданне",
    novella: "Аповесць",
    film: "Фільм",
    script: "Сцэнар",
    article: "Артыкул",
    essay: "Публіцыстыка",
    interview: "Інтэрв'ю",
    archive: "Архіў",
    research: "Даследаванне",
    documentary_prose: "Дакументальная проза",
  },
  en: {
    book: "Book",
    story: "Story",
    novella: "Novella",
    film: "Film",
    script: "Script",
    article: "Article",
    essay: "Essay",
    interview: "Interview",
    archive: "Archive",
    research: "Research",
    documentary_prose: "Documentary prose",
  },
} satisfies Record<Locale, Record<WorkType, string>>;

function getAuthors(work: Work) {
  return [...work.authors, ...(work.coAuthors ?? [])].filter(Boolean).join(", ");
}

export function WorkCard({ compact = false, locale, work }: WorkCardProps) {
  const title = getLocalizedText(work.title, locale);
  const description = getLocalizedText(
    work.shortDescription ?? work.descriptionShort,
    locale,
  );
  const typeLabel = typeLabels[locale][work.type];
  const year = getWorkYear(work);
  const cover = getWorkCover(work);
  const coverAlt = work.coverAlt ? getLocalizedText(work.coverAlt, locale) : title;
  const authors = getAuthors(work);

  return (
    <article className={`${styles.card} ${compact ? styles.compact : ""}`}>
      <Link
        className={styles.cardLink}
        href={localizedHref(locale, `/bibliography/${work.slug}`)}
      >
        <div className={styles.coverWrap}>
          {cover ? (
            <Image
              alt={coverAlt}
              className={styles.coverImage}
              fill
              sizes="(max-width: 680px) calc(100vw - 40px), (max-width: 1100px) calc((100vw - 72px) / 2), (max-width: 1500px) calc((100vw - 120px) / 3), 380px"
              src={assetPath(cover)}
            />
          ) : (
            <span className={styles.placeholder}>
              <span className={styles.placeholderType}>{typeLabel}</span>
              <span className={styles.placeholderTitle}>{title}</span>
            </span>
          )}

          <span className={styles.typeBadge}>{typeLabel}</span>
          {year ? <span className={styles.yearBadge}>{year}</span> : null}
        </div>

        <div className={styles.infoPanel}>
          <div className={styles.defaultInfo}>
            <h3 className={styles.title}>{title}</h3>
            {authors ? <p className={styles.authors}>{authors}</p> : null}
          </div>

          <div className={styles.revealInfo}>
            {description ? (
              <p className={styles.description}>{description}</p>
            ) : null}

            <span className={styles.more}>
              {detailsLabels[locale]}
              <span aria-hidden="true">→</span>
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}
