import Link from "next/link";

import {
  WorkCoverSwitcher,
  type WorkCoverSwitcherItem,
} from "./WorkCoverSwitcher";
import {
  WorkDetailSections,
  type WorkDetailSection,
} from "./WorkDetailSections";
import styles from "./WorkDetail.module.css";

import { assetPath, type Locale } from "@/config/site";
import type { MaybeLocalizedText, Work } from "@/data/works";
import { getLocalizedText } from "@/lib/getLocalizedText";
import { localizedHref } from "@/lib/localizedHref";
import { formatLanguages, getWorkCover, getWorkYear } from "@/lib/works";

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
    primaryCover: "Асноўная вокладка",
    editions: "Вокладкі выданняў",
    editionsLead: "На старонцы сабраны вядомыя вокладкі і пераклады гэтага твора.",
    type: "Тып",
    year: "Год",
  },
  en: {
    authors: "Authors",
    back: "Back to bibliography",
    noCover: "Cover will be added",
    originalTitle: "Original title",
    pageLabel: "Basic page",
    primaryCover: "Main cover",
    editions: "Edition Covers",
    editionsLead: "Known covers and translations of this work are collected here.",
    type: "Type",
    year: "Year",
  },
  ru: {
    authors: "Авторы",
    back: "К библиографии",
    noCover: "Обложка будет добавлена",
    originalTitle: "Оригинальное название",
    pageLabel: "Базовая страница",
    primaryCover: "Основная обложка",
    editions: "Обложки изданий",
    editionsLead: "Здесь собраны известные обложки и переводы этого произведения.",
    type: "Тип",
    year: "Год",
  },
} satisfies Record<Locale, Record<string, string>>;

const recommendationLabels = {
  be: {
    recommendations: "Рэкамендацыі",
    readNext: "Што пачытаць",
  },
  en: {
    recommendations: "Recommendations",
    readNext: "What to read",
  },
  ru: {
    recommendations: "Рекомендации",
    readNext: "Что почитать",
  },
} satisfies Record<Locale, Record<string, string>>;

const detailLabels = {
  be: {
    genre: "Жанр",
    originalLanguage: "Мова арыгіналу",
    themes: "Тэмы",
    translations: "Пераклады",
  },
  en: {
    genre: "Genre",
    originalLanguage: "Original language",
    themes: "Themes",
    translations: "Translations",
  },
  ru: {
    genre: "Жанр",
    originalLanguage: "Язык оригинала",
    themes: "Темы",
    translations: "Переводы",
  },
} satisfies Record<Locale, Record<string, string>>;

const detailLanguageLabels: Record<Locale, Record<string, string>> = {
  be: {
    be: "беларуская",
    de: "нямецкая",
    en: "англійская",
    fr: "французская",
    it: "італьянская",
    ja: "японская",
    lt: "літоўская",
    pl: "польская",
    ru: "руская",
    sk: "славацкая",
    uk: "украінская",
    zh: "кітайская",
  },
  en: {
    be: "Belarusian",
    de: "German",
    en: "English",
    fr: "French",
    it: "Italian",
    ja: "Japanese",
    lt: "Lithuanian",
    pl: "Polish",
    ru: "Russian",
    sk: "Slovak",
    uk: "Ukrainian",
    zh: "Chinese",
  },
  ru: {
    be: "белорусский",
    de: "немецкий",
    en: "английский",
    fr: "французский",
    it: "итальянский",
    ja: "японский",
    lt: "литовский",
    pl: "польский",
    ru: "русский",
    sk: "словацкий",
    uk: "украинский",
    zh: "китайский",
  },
};

const themeLabels: Record<Locale, Record<string, string>> = {
  be: {
    "burned-villages": "спаленыя вёскі",
    choice: "выбар",
    history: "гісторыя",
    memory: "памяць",
    responsibility: "адказнасць",
    testimony: "сведчанне",
    violence: "гвалт",
    war: "вайна",
  },
  en: {
    "burned-villages": "burned villages",
    choice: "choice",
    history: "history",
    memory: "memory",
    responsibility: "responsibility",
    testimony: "testimony",
    violence: "violence",
    war: "war",
  },
  ru: {
    "burned-villages": "сожжённые деревни",
    choice: "выбор",
    history: "история",
    memory: "память",
    responsibility: "ответственность",
    testimony: "свидетельство",
    violence: "насилие",
    war: "война",
  },
};

const sectionLabels = {
  be: {
    annotation: "Анатацыя",
    history: "Гісторыя кнігі",
    meaning: "Значэнне",
    materials: "Матэрыялы",
    quotes: "Цытаты",
    reviews: "Рэцэнзіі",
    sources: "Крыніцы",
  },
  en: {
    annotation: "Annotation",
    history: "Book History",
    meaning: "Meaning",
    materials: "Materials",
    quotes: "Quotes",
    reviews: "Reviews",
    sources: "Sources",
  },
  ru: {
    annotation: "Аннотация",
    history: "История книги",
    meaning: "Значение",
    materials: "Материалы",
    quotes: "Цитаты",
    reviews: "Рецензии",
    sources: "Источники",
  },
} satisfies Record<Locale, Record<string, string>>;

const sectionEmptyLabels = {
  be: "Раздзел падрыхтаваны для напаўнення.",
  en: "This section is prepared for future content.",
  ru: "Раздел подготовлен для наполнения.",
} satisfies Record<Locale, string>;

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

function getMaybeText(value: MaybeLocalizedText | undefined, locale: Locale) {
  if (!value) return "";
  return typeof value === "string" ? value : getLocalizedText(value, locale);
}

function getUniqueValues<T extends string>(values: T[]) {
  return [...new Set(values.filter(Boolean))];
}

function formatDetailLanguages(languages: string[] | undefined, locale: Locale) {
  if (!languages?.length) return "";

  return getUniqueValues(languages)
    .map((language) => detailLanguageLabels[locale][language] ?? language)
    .join(" / ");
}

function formatThemes(themes: string[] | undefined, locale: Locale) {
  if (!themes?.length) return "";

  return themes.map((theme) => themeLabels[locale][theme] ?? theme).join(", ");
}

function getEditionCoverItems(work: Work, locale: Locale) {
  const primaryCover = getWorkCover(work);
  const items: WorkCoverSwitcherItem[] = [];
  const usedImages = new Set<string>();

  if (primaryCover) {
    items.push({
      id: "primary",
      image: primaryCover,
      meta: [getWorkYear(work)].filter(Boolean).join(" · "),
      title: labels[locale].primaryCover,
    });
    usedImages.add(primaryCover);
  }

  work.editions?.forEach((edition) => {
    const image = edition.coverImage ?? edition.cover;

    if (!image || usedImages.has(image)) return;

    const title = edition.title
      ? typeof edition.title === "string"
        ? edition.title
        : getLocalizedText(edition.title, locale)
      : [edition.publisher, edition.year].filter(Boolean).join(", ");
    const meta = [
      edition.year,
      formatLanguages([edition.language], locale),
      edition.publisher,
      edition.city,
    ]
      .filter(Boolean)
      .join(" · ");

    items.push({
      id: edition.id ?? image,
      image,
      meta,
      title: title || meta || labels[locale].editions,
    });
    usedImages.add(image);
  });

  work.gallery?.forEach((image, index) => {
    if (usedImages.has(image)) return;

    items.push({
      id: `gallery-${index}`,
      image,
      meta: "",
      title: labels[locale].editions,
    });
    usedImages.add(image);
  });

  return items;
}

function getSourceItems(work: Work, locale: Locale) {
  const linkLabels: Record<string, string> = {
    archive: "Archive",
    imdb: "IMDb",
    kinopoisk: "Kinopoisk",
    letterboxd: "Letterboxd",
    source: "Source",
    tmdb: "TMDb",
    wikidata: "Wikidata",
    wikipedia: "Wikipedia",
  };

  const linkItems = Object.entries(work.links ?? {}).map(([key, href]) => ({
    href,
    title: linkLabels[key] ?? key,
  }));
  const pageLinkItems =
    work.pageLinks?.map((link) => ({
      href: link.href,
      title: getMaybeText(link.label, locale),
    })) ?? [];
  const researchItems =
    work.research?.map((item) => ({
      href: item.href ?? item.link,
      title: [item.title, item.publication, item.year].filter(Boolean).join(", "),
    })) ?? [];
  const availabilityItems = Object.values(work.availability ?? {})
    .flat()
    .map((link) => ({
      href: link.url,
      title: link.label,
    }));

  return [...linkItems, ...pageLinkItems, ...researchItems, ...availabilityItems].filter(
    (item) => item.title || item.href,
  );
}

export function WorkDetail({ locale, relatedWorks = [], work }: WorkDetailProps) {
  const t = labels[locale];
  const recommendationT = recommendationLabels[locale];
  const title = getLocalizedText(work.title, locale);
  const description = getLocalizedText(
    work.descriptionFull ?? work.descriptionShort,
    locale,
  );
  const cover = getWorkCover(work);
  const year = getWorkYear(work);
  const authors = getAuthors(work);
  const typeLabel = getTypeLabel(work.type, locale);
  const editionCoverItems = getEditionCoverItems(work, locale);
  const detailT = detailLabels[locale];
  const originalLanguageCodes = getUniqueValues(
    work.originalLanguages?.length ? work.originalLanguages : (work.languages ?? []),
  );
  const editionLanguageCodes = work.editions?.map((edition) => edition.language) ?? [];
  const translationLanguageCodes = work.translations?.map((translation) => translation.language) ?? [];
  const translatedLanguageCodes = getUniqueValues([
    ...(work.translatedLanguages ?? []),
    ...translationLanguageCodes,
    ...editionLanguageCodes.filter(
      (language) => !originalLanguageCodes.includes(language),
    ),
  ]);
  const originalLanguages = formatDetailLanguages(originalLanguageCodes, locale);
  const translatedLanguages = formatDetailLanguages(translatedLanguageCodes, locale);
  const genre = work.genre
    ? typeof work.genre === "string"
      ? work.genre
      : getLocalizedText(work.genre, locale)
    : "";
  const themes = formatThemes(work.themes, locale);
  const recommendedWorks = relatedWorks.slice(0, 3);
  const sectionT = sectionLabels[locale];
  const annotationTexts = (
    work.annotation?.full?.length
      ? work.annotation.full.map((text) => getMaybeText(text, locale))
      : [getMaybeText(work.annotation?.short, locale) || description]
  ).filter(Boolean);
  const historyTexts = work.creationHistory?.text
    ?.map((text) => getMaybeText(text, locale))
    .filter(Boolean) ?? [];
  const quoteItems = work.quotes ?? [];
  const reviewItems = work.reviews ?? [];
  const materialItems = [
    ...(work.materials ?? []).map((material) => ({
      description: getMaybeText(material.description, locale),
      href: material.href,
      id: material.id,
      title: getMaybeText(material.title, locale),
    })),
    ...(work.relatedMaterials ?? []).map((material) => ({
      description: material.description
        ? getLocalizedText(material.description, locale)
        : "",
      href: material.href ?? material.link,
      id: material.id ?? getLocalizedText(material.title, locale),
      title: getLocalizedText(material.title, locale),
    })),
  ].filter((item) => item.title || item.description);
  const sourceItems = getSourceItems(work, locale);
  const detailSections: WorkDetailSection[] = [
    {
      id: "annotation",
      paragraphs: annotationTexts,
      title: sectionT.annotation,
    },
    {
      id: "history",
      paragraphs: historyTexts,
      title: sectionT.history,
    },
    {
      id: "meaning",
      paragraphs: work.context?.text
        ?.map((item) => getMaybeText(item, locale))
        .filter(Boolean),
      title: sectionT.meaning,
    },
    {
      id: "quotes",
      quotes: quoteItems
        .map((quote) => ({
          id: quote.id,
          sourceNote: getMaybeText(quote.sourceNote, locale),
          text: getMaybeText(quote.text, locale),
        }))
        .filter((quote) => quote.text),
      title: sectionT.quotes,
    },
    {
      entries: reviewItems.map((review) => ({
        description: getMaybeText(review.quote, locale),
        href: review.href,
        id: review.id,
        meta: [review.author, review.source, review.year]
          .filter(Boolean)
          .join(" / "),
        title: getMaybeText(review.title, locale),
      })),
      id: "reviews",
      title: sectionT.reviews,
    },
    {
      entries: materialItems.map((material) => ({
        description: material.description,
        href: material.href,
        id: material.id,
        title: material.title,
      })),
      id: "materials",
      title: sectionT.materials,
    },
    {
      id: "sources",
      sources: sourceItems.map((source, index) => ({
        href: source.href,
        id: source.title + "-" + index,
        title: source.title || source.href || "",
      })),
      title: sectionT.sources,
    },
  ];

  return (
    <main className={styles.page}>
      <div className={styles.inner}>
        <Link className={styles.backLink} href={localizedHref(locale, "/bibliography")}>
          <span aria-hidden="true">←</span>
          {t.back}
        </Link>

        <section className={styles.hero} aria-labelledby="work-title">
          <div className={styles.coverTrack}>
            <aside className={styles.coverPanel} aria-label={title}>
              {editionCoverItems.length > 1 ? (
                <WorkCoverSwitcher items={editionCoverItems} />
              ) : cover ? (
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
          </div>

          <div className={styles.mainColumn}>
            <div className={styles.content}>
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

                {originalLanguages ? (
                  <div>
                    <dt>{detailT.originalLanguage}</dt>
                    <dd>{originalLanguages}</dd>
                  </div>
                ) : null}

                {genre ? (
                  <div>
                    <dt>{detailT.genre}</dt>
                    <dd>{genre}</dd>
                  </div>
                ) : null}

                {themes ? (
                  <div>
                    <dt>{detailT.themes}</dt>
                    <dd>{themes}</dd>
                  </div>
                ) : null}

                {translatedLanguages ? (
                  <div>
                    <dt>{detailT.translations}</dt>
                    <dd>{translatedLanguages}</dd>
                  </div>
                ) : null}
              </dl>

            </div>

            <WorkDetailSections
              ariaLabel={title}
              emptyLabel={sectionEmptyLabels[locale]}
              sections={detailSections}
            />
          </div>
        </section>
      </div>
    </main>
  );
}
