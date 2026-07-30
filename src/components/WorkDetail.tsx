import Link from "next/link";
import Image from "next/image";

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
import type { Work } from "@/data/works";
import { formatWorkAuthors } from "@/lib/formatWorkAuthors";
import { getLocalizedText } from "@/lib/getLocalizedText";
import { localizedHref } from "@/lib/localizedHref";
import { formatLanguages, getWorkCover, getWorkYear } from "@/lib/works";

type WorkDetailProps = {
  locale: Locale;
  work: Work;
};

const labels = {
  be: {
    authors: "Аўтары",
    back: "Да бібліяграфіі",
    noCover: "No cover available",
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
    noCover: "No cover available",
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
    noCover: "No cover available",
    originalTitle: "Оригинальное название",
    pageLabel: "Базовая страница",
    primaryCover: "Основная обложка",
    editions: "Обложки изданий",
    editionsLead: "Здесь собраны известные обложки и переводы этого произведения.",
    type: "Тип",
    year: "Год",
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
    history: "Гісторыя",
    awards: "Узнагароды",
    materials: "Матэрыялы",
    quotes: "Цытаты",
    reviews: "Рэцэнзіі",
    sources: "Крыніцы",
  },
  en: {
    annotation: "Annotation",
    history: "History",
    awards: "Awards",
    materials: "Materials",
    quotes: "Quotes",
    reviews: "Reviews",
    sources: "Sources",
  },
  ru: {
    annotation: "Аннотация",
    history: "История",
    awards: "Награды",
    materials: "Материалы",
    quotes: "Цитаты",
    reviews: "Рецензии",
    sources: "Источники",
  },
} satisfies Record<Locale, Record<string, string>>;

const awardResultLabels = {
  be: {
    nominee: "Намінацыя",
    selected: "Адбор",
    winner: "Перамога",
  },
  en: {
    nominee: "Nominee",
    selected: "Selected",
    winner: "Winner",
  },
  ru: {
    nominee: "Номинация",
    selected: "Отбор",
    winner: "Победа",
  },
} satisfies Record<Locale, Record<string, string>>;

const sectionEmptyLabels = {
  be: "Раздзел падрыхтаваны для напаўнення.",
  en: "This section is prepared for future content.",
  ru: "Раздел подготовлен для наполнения.",
} satisfies Record<Locale, string>;

const materialEmptyLabels = {
  be: "Матэрыялы пакуль не дададзены.",
  en: "Materials have not been added yet.",
  ru: "Материалы пока не добавлены.",
} satisfies Record<Locale, string>;

const materialImageModalLabels = {
  be: {
    close: "Закрыць матэрыял",
    next: "Наступны матэрыял",
    open: "Адкрыць матэрыял",
    previous: "Папярэдні матэрыял",
  },
  en: {
    close: "Close material",
    next: "Next material",
    open: "Open material",
    previous: "Previous material",
  },
  ru: {
    close: "Закрыть материал",
    next: "Следующий материал",
    open: "Открыть материал",
    previous: "Предыдущий материал",
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

    const title =
      getLocalizedText(edition.title, locale) ||
      [edition.publisher, edition.year].filter(Boolean).join(", ");
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
  const trailerItems = work.trailer?.href
    ? [
        {
          href: work.trailer.href,
          title: [
            getLocalizedText(work.trailer.title, locale),
            work.trailer.source,
          ]
            .filter(Boolean)
            .join(" / "),
        },
      ]
    : [];
  const pageLinkItems =
    work.pageLinks?.map((link) => ({
      href: link.href,
      title: getLocalizedText(link.label, locale),
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

  return [
    ...linkItems,
    ...trailerItems,
    ...pageLinkItems,
    ...researchItems,
    ...availabilityItems,
  ].filter((item) => item.title || item.href);
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
  const authors = formatWorkAuthors(work, locale);
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
  const genre = getLocalizedText(work.genre, locale);
  const themes = formatThemes(work.themes, locale);
  const sectionT = sectionLabels[locale];
  const trailer = work.trailer
    ? {
        description: getLocalizedText(work.trailer.description, locale),
        embedUrl: work.trailer.embedUrl,
        href: work.trailer.href,
        source: work.trailer.source,
        title: getLocalizedText(work.trailer.title, locale),
      }
    : null;
  const annotationTexts = (
    work.annotation?.full?.length
      ? work.annotation.full.map((text) => getLocalizedText(text, locale))
      : [getLocalizedText(work.annotation?.short, locale) || description]
  ).filter(Boolean);
  const historyTexts = work.creationHistory?.text
    ?.map((text) => getLocalizedText(text, locale))
    .filter(Boolean) ?? [];
  const quoteItems = work.quotes ?? [];
  const reviewItems = work.reviews ?? [];
  const materialItems = [
    ...(work.materials ?? []).map((material) => ({
      description: getLocalizedText(material.description, locale),
      href: material.href,
      id: material.id,
      image: material.image,
      imageAlt: getLocalizedText(material.title, locale),
      meta: [material.source, material.year].filter(Boolean).join(" / "),
      title: getLocalizedText(material.title, locale),
    })),
    ...(work.relatedMaterials ?? []).map((material) => ({
      description: getLocalizedText(material.description, locale),
      href: material.href ?? material.link,
      id: material.id ?? getLocalizedText(material.title, locale),
      image: undefined,
      imageAlt: undefined,
      meta: "",
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
      entries: (work.awards ?? []).map((award, index) => ({
        href: award.link,
        id: `${award.name}-${award.year ?? index}`,
        meta: [
          award.year,
          award.category,
          award.organization,
          award.result ? awardResultLabels[locale][award.result] : "",
        ]
          .filter(Boolean)
          .join(" / "),
        title: award.name,
      })),
      id: "awards",
      title: sectionT.awards,
    },
    {
      id: "quotes",
      quotes: quoteItems
        .map((quote) => ({
          id: quote.id,
          sourceNote: getLocalizedText(quote.sourceNote, locale),
          text: getLocalizedText(quote.text, locale),
        }))
        .filter((quote) => quote.text),
      title: sectionT.quotes,
    },
    {
      entries: reviewItems.map((review) => ({
        author: review.author,
        authorRole: getLocalizedText(review.authorRole, locale),
        description: review.body?.[locale]?.length
          ? undefined
          : getLocalizedText(review.quote, locale),
        href: review.href,
        id: review.id,
        image: review.image,
        imageAlt: getLocalizedText(review.imageAlt, locale),
        meta: [review.source, review.year]
          .filter(Boolean)
          .join(" / "),
        paragraphs: review.body?.[locale] ?? review.body?.be,
        title: getLocalizedText(review.title, locale),
      })),
      id: "reviews",
      title: sectionT.reviews,
    },
    {
      emptyLabel: materialEmptyLabels[locale],
      entries: materialItems.map((material) => ({
        description: material.description,
        href: material.href,
        id: material.id,
        image: material.image,
        imageAlt: material.imageAlt,
        meta: material.meta,
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
                <Image
                  alt={title}
                  className={styles.cover}
                  height={1300}
                  priority
                  sizes="(max-width: 1180px) 100vw, 360px"
                  src={assetPath(cover)}
                  width={900}
                />
              ) : (
                <div className={styles.coverPlaceholder}>
                  <span className={styles.coverPlaceholderMark} aria-hidden="true">
                    <span className={styles.coverPlaceholderIcon}>?</span>
                  </span>
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
                <div className={styles.metaItem}>
                  <dt>{t.type}</dt>
                  <dd>{typeLabel}</dd>
                </div>

                {year ? (
                  <div className={styles.metaItem}>
                    <dt>{t.year}</dt>
                    <dd>{year}</dd>
                  </div>
                ) : null}

                {authors ? (
                  <div className={styles.metaItemWide}>
                    <dt>{t.authors}</dt>
                    <dd>{authors}</dd>
                  </div>
                ) : null}

                {originalLanguages ? (
                  <div className={styles.metaItem}>
                    <dt>{detailT.originalLanguage}</dt>
                    <dd>{originalLanguages}</dd>
                  </div>
                ) : null}

                {genre ? (
                  <div className={styles.metaItem}>
                    <dt>{detailT.genre}</dt>
                    <dd>{genre}</dd>
                  </div>
                ) : null}

                {themes ? (
                  <div className={styles.metaItemWide}>
                    <dt>{detailT.themes}</dt>
                    <dd>{themes}</dd>
                  </div>
                ) : null}

                {translatedLanguages ? (
                  <div className={styles.metaItemWide}>
                    <dt>{detailT.translations}</dt>
                    <dd>{translatedLanguages}</dd>
                  </div>
                ) : null}
              </dl>

            </div>

            {trailer ? (
              <section
                aria-labelledby="work-trailer-title"
                className={styles.trailerBlock}
              >
                <h2 className={styles.trailerTitle} id="work-trailer-title">
                  {trailer.title}
                </h2>
                <div className={styles.videoFrame}>
                  <iframe
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                    src={trailer.embedUrl}
                    title={trailer.title}
                  />
                </div>

                {trailer.description || trailer.href || trailer.source ? (
                  <div className={styles.videoMeta}>
                    {trailer.description ? <p>{trailer.description}</p> : null}
                    {trailer.href ? (
                      <a href={trailer.href}>
                        {trailer.source ?? trailer.title}
                      </a>
                    ) : trailer.source ? (
                      <span>{trailer.source}</span>
                    ) : null}
                  </div>
                ) : null}
              </section>
            ) : null}
          </div>

          <WorkDetailSections
            ariaLabel={title}
            emptyLabel={sectionEmptyLabels[locale]}
            imageModalLabels={materialImageModalLabels[locale]}
            sections={detailSections}
          />
        </section>
      </div>
    </main>
  );
}
