import Link from "next/link";

import styles from "./WorkDetail.module.css";

import { assetPath, type Locale } from "@/config/site";
import type { Work } from "@/data/works";
import { getLocalizedText } from "@/lib/getLocalizedText";
import { localizedHref } from "@/lib/localizedHref";
import { getWorkCover, getWorkYear } from "@/lib/works";

type WorkDetailProps = {
  locale: Locale;
  relatedWorks?: Work[];
  work: Work;
};

const labels = {
  be: {
    authors: "Аўтары",
    back: "Да бібліяграфіі",
    noCover: "Вокладка будзе дададзена",
    originalTitle: "Арыгінальная назва",
    pageLabel: "Базавая старонка",
    type: "Тып",
    year: "Год",
  },
  en: {
    authors: "Authors",
    back: "Back to bibliography",
    noCover: "Cover will be added",
    originalTitle: "Original title",
    pageLabel: "Basic page",
    type: "Type",
    year: "Year",
  },
  ru: {
    authors: "Авторы",
    back: "К библиографии",
    noCover: "Обложка будет добавлена",
    originalTitle: "Оригинальное название",
    pageLabel: "Базовая страница",
    type: "Тип",
    year: "Год",
  },
} satisfies Record<Locale, Record<string, string>>;

const workTypeLabels: Record<string, Record<Locale, string>> = {
  archive: { be: "Архіў", en: "Archive", ru: "Архив" },
  article: { be: "Артыкул", en: "Article", ru: "Статья" },
  book: { be: "Кніга", en: "Book", ru: "Книга" },
  "documentary-prose": {
    be: "Дакументальная проза",
    en: "Documentary prose",
    ru: "Документальная проза",
  },
  documentary_prose: {
    be: "Дакументальная проза",
    en: "Documentary prose",
    ru: "Документальная проза",
  },
  essay: { be: "Эсэ", en: "Essay", ru: "Эссе" },
  film: { be: "Фільм", en: "Film", ru: "Фильм" },
  interview: { be: "Інтэрв'ю", en: "Interview", ru: "Интервью" },
  novel: { be: "Раман", en: "Novel", ru: "Роман" },
  novella: { be: "Навела", en: "Novella", ru: "Новелла" },
  research: { be: "Даследаванне", en: "Research", ru: "Исследование" },
  script: { be: "Сцэнар", en: "Script", ru: "Сценарий" },
  story: { be: "Аповесць", en: "Story", ru: "Повесть" },
};

function getTypeLabel(type: string, locale: Locale) {
  return workTypeLabels[type]?.[locale] ?? type;
}

function getAuthors(work: Work) {
  return [...work.authors, ...(work.coAuthors ?? [])].filter(Boolean).join(", ");
}

export function WorkDetail({ locale, work }: WorkDetailProps) {
  const t = labels[locale];
  const title = getLocalizedText(work.title, locale);
  const description = getLocalizedText(
    work.descriptionFull ?? work.descriptionShort,
    locale,
  );
  const cover = getWorkCover(work);
  const year = getWorkYear(work);
  const authors = getAuthors(work);
  const typeLabel = getTypeLabel(work.type, locale);

  return (
    <main className={styles.page}>
      <div className={styles.inner}>
        <Link className={styles.backLink} href={localizedHref(locale, "/bibliography")}>
          <span aria-hidden="true">←</span>
          {t.back}
        </Link>

        <section className={styles.hero} aria-labelledby="work-title">
          <div className={styles.content}>
            <p className={styles.eyebrow}>{t.pageLabel}</p>
            <h1 className={styles.title} id="work-title">
              {title}
            </h1>

            {work.originalTitle ? (
              <p className={styles.originalTitle}>
                <span>{t.originalTitle}</span>
                {work.originalTitle}
              </p>
            ) : null}

            <dl className={styles.meta}>
              <div>
                <dt>{t.type}</dt>
                <dd>{typeLabel}</dd>
              </div>

              {year ? (
                <div>
                  <dt>{t.year}</dt>
                  <dd>{year}</dd>
                </div>
              ) : null}

              {authors ? (
                <div>
                  <dt>{t.authors}</dt>
                  <dd>{authors}</dd>
                </div>
              ) : null}
            </dl>

            {description ? <p className={styles.description}>{description}</p> : null}
          </div>

          <aside className={styles.coverPanel} aria-label={title}>
            {cover ? (
              <img className={styles.cover} src={assetPath(cover)} alt={title} />
            ) : (
              <div className={styles.coverPlaceholder}>
                <span>{typeLabel}</span>
                <strong>{title}</strong>
                {year ? <small>{year}</small> : null}
                <em>{t.noCover}</em>
              </div>
            )}
          </aside>
        </section>
      </div>
    </main>
  );
}
