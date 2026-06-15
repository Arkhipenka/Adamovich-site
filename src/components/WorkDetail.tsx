import Link from "next/link";

import {
  WorkCoverSwitcher,
  type WorkCoverSwitcherItem,
} from "./WorkCoverSwitcher";
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
    materials: "Матэрыялы",
    quotes: "Цытаты",
    reviews: "Рэцэнзіі",
    sources: "Крыніцы",
  },
  en: {
    annotation: "Annotation",
    history: "Book History",
    materials: "Materials",
    quotes: "Quotes",
    reviews: "Reviews",
    sources: "Sources",
  },
  ru: {
    annotation: "Аннотация",
    history: "История книги",
    materials: "Материалы",
    quotes: "Цитаты",
    reviews: "Рецензии",
    sources: "Источники",
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
      title: getMaybeText(material.title, locale),
    })),
    ...(work.relatedMaterials ?? []).map((material) => ({
      description: material.description
        ? getLocalizedText(material.description, locale)
        : "",
      href: material.href ?? material.link,
      title: getLocalizedText(material.title, locale),
    })),
  ].filter((item) => item.title || item.description);
  const sourceItems = getSourceItems(work, locale);
  const detailSections = [
    annotationTexts.length ? { id: "annotation", title: sectionT.annotation } : null,
    historyTexts.length ? { id: "history", title: sectionT.history } : null,
    quoteItems.length ? { id: "quotes", title: sectionT.quotes } : null,
    reviewItems.length ? { id: "reviews", title: sectionT.reviews } : null,
    materialItems.length ? { id: "materials", title: sectionT.materials } : null,
    sourceItems.length ? { id: "sources", title: sectionT.sources } : null,
  ].filter((section): section is { id: string; title: string } => Boolean(section));
  const heroClassName = [
    styles.hero,
    recommendedWorks.length ? "" : styles.heroNoRecommendations,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <main className={styles.page}>
      <div className={styles.inner}>
        <Link className={styles.backLink} href={localizedHref(locale, "/bibliography")}>
          <span aria-hidden="true">←</span>
          {t.back}
        </Link>

        <section className={heroClassName} aria-labelledby="work-title">
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

            {description ? <p className={styles.description}>{description}</p> : null}
          </div>

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

          {recommendedWorks.length ? (
            <aside
              className={styles.recommendations}
              aria-labelledby="work-recommendations-title"
            >
              <p className={styles.recommendationsEyebrow}>
                {recommendationT.readNext}
              </p>
              <h2
                className={styles.recommendationsTitle}
                id="work-recommendations-title"
              >
                {recommendationT.recommendations}
              </h2>

              <div className={styles.recommendationList}>
                {recommendedWorks.map((relatedWork) => {
                  const relatedTitle = getLocalizedText(relatedWork.title, locale);
                  const relatedCover = getWorkCover(relatedWork);
                  const relatedYear = getWorkYear(relatedWork);
                  const relatedMeta = [
                    relatedYear,
                    getTypeLabel(relatedWork.type, locale),
                  ]
                    .filter(Boolean)
                    .join(" / ");

                  return (
                    <Link
                      className={styles.recommendationCard}
                      href={localizedHref(locale, `/bibliography/${relatedWork.slug}`)}
                      key={relatedWork.slug}
                    >
                      {relatedCover ? (
                        <span className={styles.recommendationCover}>
                          <img src={assetPath(relatedCover)} alt="" loading="lazy" />
                        </span>
                      ) : null}
                      <span className={styles.recommendationBody}>
                        {relatedMeta ? (
                          <span className={styles.recommendationMeta}>
                            {relatedMeta}
                          </span>
                        ) : null}
                        <strong>{relatedTitle}</strong>
                      </span>
                    </Link>
                  );
                })}
              </div>
            </aside>
          ) : null}
        </section>

        {detailSections.length ? (
          <section className={styles.detailSections} aria-label={title}>
            <nav className={styles.sectionNav} aria-label={title}>
              {detailSections.map((section) => (
                <a href={`#${section.id}`} key={section.id}>
                  {section.title}
                </a>
              ))}
            </nav>

            {annotationTexts.length ? (
              <article className={styles.detailSection} id="annotation">
                <h2>{sectionT.annotation}</h2>
                {annotationTexts.map((text) => (
                  <p key={text}>{text}</p>
                ))}
              </article>
            ) : null}

            {historyTexts.length ? (
              <article className={styles.detailSection} id="history">
                <h2>{sectionT.history}</h2>
                {historyTexts.map((text) => (
                  <p key={text}>{text}</p>
                ))}
              </article>
            ) : null}

            {quoteItems.length ? (
              <article className={styles.detailSection} id="quotes">
                <h2>{sectionT.quotes}</h2>
                <div className={styles.entryList}>
                  {quoteItems.map((quote) => (
                    <blockquote className={styles.quote} key={quote.id}>
                      <p>{getMaybeText(quote.text, locale)}</p>
                      {quote.sourceNote ? (
                        <cite>{getMaybeText(quote.sourceNote, locale)}</cite>
                      ) : null}
                    </blockquote>
                  ))}
                </div>
              </article>
            ) : null}

            {reviewItems.length ? (
              <article className={styles.detailSection} id="reviews">
                <h2>{sectionT.reviews}</h2>
                <div className={styles.entryList}>
                  {reviewItems.map((review) => (
                    <div className={styles.entryCard} key={review.id}>
                      {review.title ? (
                        <strong>{getMaybeText(review.title, locale)}</strong>
                      ) : null}
                      {review.quote ? <p>{getMaybeText(review.quote, locale)}</p> : null}
                      <span>
                        {[review.author, review.source, review.year]
                          .filter(Boolean)
                          .join(" / ")}
                      </span>
                    </div>
                  ))}
                </div>
              </article>
            ) : null}

            {materialItems.length ? (
              <article className={styles.detailSection} id="materials">
                <h2>{sectionT.materials}</h2>
                <div className={styles.entryList}>
                  {materialItems.map((material) => {
                    const content = (
                      <>
                        <strong>{material.title}</strong>
                        {material.description ? <p>{material.description}</p> : null}
                      </>
                    );

                    return material.href ? (
                      <a
                        className={styles.entryCard}
                        href={material.href}
                        key={`${material.title}-${material.href}`}
                      >
                        {content}
                      </a>
                    ) : (
                      <div className={styles.entryCard} key={material.title}>
                        {content}
                      </div>
                    );
                  })}
                </div>
              </article>
            ) : null}

            {sourceItems.length ? (
              <article className={styles.detailSection} id="sources">
                <h2>{sectionT.sources}</h2>
                <div className={styles.sourceList}>
                  {sourceItems.map((source) =>
                    source.href ? (
                      <a href={source.href} key={`${source.title}-${source.href}`}>
                        {source.title || source.href}
                      </a>
                    ) : (
                      <span key={source.title}>{source.title}</span>
                    ),
                  )}
                </div>
              </article>
            ) : null}
          </section>
        ) : null}
      </div>
    </main>
  );
}
