import Image from "next/image";
import Link from "next/link";

import styles from "./WorkDetail.module.css";
import { WorksGrid } from "./WorksGrid";
import { assetPath, type Locale } from "@/config/site";
import type {
  ExternalLink,
  LocalizedText,
  MaybeLocalizedText,
  RelatedMaterial,
  Work,
  WorkEdition,
  WorkMaterial,
  WorkQuote,
  WorkResearch,
  WorkReview,
  WorkTranslation,
  WorkType,
} from "@/data/works";
import { localizedHref } from "@/lib/localizedHref";
import { getWorkCover, getWorkYear } from "@/lib/works";

type WorkDetailProps = {
  locale: Locale;
  relatedWorks: Work[];
  work: Work;
};

type LocalizedInput = MaybeLocalizedText | Partial<LocalizedText> | undefined;

type RenderMaterial = {
  id: string;
  type: string;
  title: string;
  description?: string;
  image?: string;
  href?: string;
  source?: string;
  year?: string;
};

type EditionView = {
  id?: string;
  year?: number;
  publisher?: string;
  city?: string;
  country?: string;
  language?: string;
  isbn?: string;
  pages?: number;
  cover?: string;
  coverImage?: string;
  notes?: string;
  link?: string;
  title?: string;
  translator?: string;
  isTranslation?: boolean;
};

const labels = {
  ru: {
    annotation: "Аннотация",
    archive: "Архив",
    authors: "Авторы",
    back: "К библиографии",
    city: "Город",
    coAuthors: "Соавторы",
    context: "Контекст произведения",
    country: "Страна",
    creationHistory: "История создания",
    dates: "Даты",
    editions: "Издания и переводы",
    externalLinks: "Внешние ссылки",
    findBook: "Найти книгу",
    firstPublication: "Первое издание",
    galleryItem: "Архивный материал",
    genre: "Жанр",
    isbn: "ISBN",
    language: "Язык",
    languages: "Языки",
    libraries: "Библиотеки",
    materials: "Материалы",
    noCover: "Обложка будет добавлена",
    notes: "Примечание",
    onlineReading: "Онлайн-чтение",
    open: "Открыть",
    pages: "Страницы",
    people: "Люди",
    places: "Места",
    publisher: "Издательство",
    quotes: "Цитаты из произведения",
    related: "Связанные произведения",
    research: "Исследования",
    reviews: "Рецензии и восприятие",
    role: "Роль",
    secondHand: "Букинистика",
    stores: "Магазины",
    themes: "Темы",
    translator: "Перевод",
    year: "Год",
  },
  be: {
    annotation: "Анатацыя",
    archive: "Архіў",
    authors: "Аўтары",
    back: "Да бібліяграфіі",
    city: "Горад",
    coAuthors: "Суаўтары",
    context: "Кантэкст твора",
    country: "Краіна",
    creationHistory: "Гісторыя стварэння",
    dates: "Даты",
    editions: "Выданні і пераклады",
    externalLinks: "Знешнія спасылкі",
    findBook: "Знайсці кнігу",
    firstPublication: "Першае выданне",
    galleryItem: "Архіўны матэрыял",
    genre: "Жанр",
    isbn: "ISBN",
    language: "Мова",
    languages: "Мовы",
    libraries: "Бібліятэкі",
    materials: "Матэрыялы",
    noCover: "Вокладка будзе дададзена",
    notes: "Заўвага",
    onlineReading: "Анлайн-чытанне",
    open: "Адкрыць",
    pages: "Старонкі",
    people: "Людзі",
    places: "Месцы",
    publisher: "Выдавецтва",
    quotes: "Цытаты з твора",
    related: "Звязаныя творы",
    research: "Даследаванні",
    reviews: "Рэцэнзіі і ўспрыманне",
    role: "Роля",
    secondHand: "Букіністыка",
    stores: "Крамы",
    themes: "Тэмы",
    translator: "Пераклад",
    year: "Год",
  },
  en: {
    annotation: "Annotation",
    archive: "Archive",
    authors: "Authors",
    back: "Back to bibliography",
    city: "City",
    coAuthors: "Co-authors",
    context: "Work Context",
    country: "Country",
    creationHistory: "Creation History",
    dates: "Dates",
    editions: "Editions and Translations",
    externalLinks: "External links",
    findBook: "Find the book",
    firstPublication: "First publication",
    galleryItem: "Archive material",
    genre: "Genre",
    isbn: "ISBN",
    language: "Language",
    languages: "Languages",
    libraries: "Libraries",
    materials: "Materials",
    noCover: "Cover will be added",
    notes: "Note",
    onlineReading: "Online reading",
    open: "Open",
    pages: "Pages",
    people: "People",
    places: "Places",
    publisher: "Publisher",
    quotes: "Quotes from the work",
    related: "Related works",
    research: "Research",
    reviews: "Reviews and Reception",
    role: "Role",
    secondHand: "Second-hand",
    stores: "Stores",
    themes: "Themes",
    translator: "Translation",
    year: "Year",
  },
} satisfies Record<Locale, Record<string, string>>;

const typeLabels: Record<Locale, Partial<Record<WorkType, string>>> = {
  ru: {
    archive: "Архив",
    article: "Статья",
    book: "Книга",
    "documentary-prose": "Документальная проза",
    documentary_prose: "Документальная проза",
    essay: "Публицистика",
    film: "Фильм",
    interview: "Интервью",
    novel: "Роман",
    novella: "Повесть",
    research: "Исследование",
    script: "Сценарий",
    story: "Рассказ",
  },
  be: {
    archive: "Архіў",
    article: "Артыкул",
    book: "Кніга",
    "documentary-prose": "Дакументальная проза",
    documentary_prose: "Дакументальная проза",
    essay: "Публіцыстыка",
    film: "Фільм",
    interview: "Інтэрв'ю",
    novel: "Раман",
    novella: "Аповесць",
    research: "Даследаванне",
    script: "Сцэнар",
    story: "Апавяданне",
  },
  en: {
    archive: "Archive",
    article: "Article",
    book: "Book",
    "documentary-prose": "Documentary prose",
    documentary_prose: "Documentary prose",
    essay: "Essay",
    film: "Film",
    interview: "Interview",
    novel: "Novel",
    novella: "Novella",
    research: "Research",
    script: "Script",
    story: "Story",
  },
};

const materialTypeLabels: Record<Locale, Record<string, string>> = {
  ru: {
    archive: "Архив",
    article: "Статья",
    audio: "Аудио",
    document: "Документ",
    external_link: "Ссылка",
    interview: "Интервью",
    photo: "Фото",
    research: "Исследование",
    video: "Видео",
  },
  be: {
    archive: "Архіў",
    article: "Артыкул",
    audio: "Аўдыя",
    document: "Дакумент",
    external_link: "Спасылка",
    interview: "Інтэрв'ю",
    photo: "Фота",
    research: "Даследаванне",
    video: "Відэа",
  },
  en: {
    archive: "Archive",
    article: "Article",
    audio: "Audio",
    document: "Document",
    external_link: "Link",
    interview: "Interview",
    photo: "Photo",
    research: "Research",
    video: "Video",
  },
};

const languageLabels: Record<Locale, Record<string, string>> = {
  ru: {
    be: "бел.",
    de: "нем.",
    en: "англ.",
    fr: "фр.",
    ja: "яп.",
    lt: "лит.",
    pl: "пол.",
    ru: "рус.",
    uk: "укр.",
    zh: "кит.",
  },
  be: {
    be: "бел.",
    de: "ням.",
    en: "англ.",
    fr: "фр.",
    ja: "яп.",
    lt: "літ.",
    pl: "пол.",
    ru: "рус.",
    uk: "укр.",
    zh: "кіт.",
  },
  en: {
    be: "Bel.",
    de: "Ger.",
    en: "Eng.",
    fr: "Fr.",
    ja: "Jap.",
    lt: "Lith.",
    pl: "Pol.",
    ru: "Rus.",
    uk: "Ukr.",
    zh: "Ch.",
  },
};

const linkLabels = {
  archive: "Archive",
  imdb: "IMDb",
  kinopoisk: "Кинопоиск",
  letterboxd: "Letterboxd",
  source: "Source",
  tmdb: "TMDb",
  wikidata: "Wikidata",
  wikipedia: "Wikipedia",
} as const;

function localized(value: LocalizedInput, locale: Locale) {
  if (!value) return "";
  if (typeof value === "string") return value;

  return value[locale] ?? value.ru ?? value.be ?? value.en ?? "";
}

function localizedList(values: LocalizedInput[] | undefined, locale: Locale) {
  return (values ?? []).map((value) => localized(value, locale)).filter(Boolean);
}

function hasItems<T>(items?: T[] | null): items is T[] {
  return Boolean(items?.length);
}

function uniqueList(items: string[]) {
  return [...new Set(items.filter(Boolean))];
}

function formatLanguages(languages: string[] | undefined, locale: Locale) {
  if (!languages?.length) return "";

  return uniqueList(languages)
    .map((language) => languageLabels[locale][language] ?? language)
    .join(" / ");
}

function getLanguageSource(work: Work) {
  if (hasItems(work.languages)) return work.languages;
  if (hasItems(work.originalLanguages)) return work.originalLanguages;
  if (hasItems(work.editions)) return work.editions.map((edition) => edition.language);
  if (hasItems(work.translations)) {
    return work.translations.map((translation) => translation.language);
  }

  return undefined;
}

function getPublisher(work: Work) {
  return (
    work.editions?.find((edition) => edition.publisher)?.publisher ??
    work.translations?.find((translation) => translation.publisher)?.publisher ??
    ""
  );
}

function getHeroDescription(work: Work, locale: Locale) {
  return (
    localized(work.shortDescription, locale) ||
    localized(work.descriptionShort, locale) ||
    localized(work.descriptionFull, locale) ||
    localized(work.longDescription, locale)
  );
}

function getAnnotation(work: Work, locale: Locale) {
  const short =
    localized(work.annotation?.short, locale) ||
    localized(work.descriptionShort, locale) ||
    localized(work.shortDescription, locale);

  const fallbackFull = localized(work.descriptionFull, locale) || localized(work.longDescription, locale);
  const full = localizedList(work.annotation?.full, locale);

  if (!full.length && fallbackFull && fallbackFull !== short) {
    return { short, full: [fallbackFull] };
  }

  return { short, full };
}

function getEditionItems(work: Work): EditionView[] {
  const editions: EditionView[] = (work.editions ?? []).map((edition: WorkEdition) => ({
    ...edition,
    language: edition.language,
  }));

  const translations: EditionView[] = (work.translations ?? []).map(
    (translation: WorkTranslation) => ({
      ...translation,
      isTranslation: true,
      language: translation.language,
    }),
  );

  return [...editions, ...translations];
}

function getMaterials(work: Work, locale: Locale) {
  const explicitMaterials: RenderMaterial[] = (work.materials ?? []).map(
    (material: WorkMaterial) => ({
      ...material,
      description: localized(material.description, locale),
      title: localized(material.title, locale),
    }),
  );

  const galleryMaterials: RenderMaterial[] = (work.gallery ?? []).map((image, index) => ({
    id: `gallery-${index}`,
    image,
    title: `${labels[locale].galleryItem} ${index + 1}`,
    type: "photo",
  }));

  const relatedMaterials: RenderMaterial[] = (work.relatedMaterials ?? []).map(
    (material: RelatedMaterial, index) => ({
      description: localized(material.description, locale),
      href: material.href ?? material.link,
      id: material.id ?? `related-material-${index}`,
      title: localized(material.title, locale),
      type: material.type,
    }),
  );

  return [...explicitMaterials, ...galleryMaterials, ...relatedMaterials].filter(
    (material) => material.title || material.image || material.href,
  );
}

function externalLinks(work: Work) {
  return Object.entries(work.links ?? {}).filter(
    (entry): entry is [keyof typeof linkLabels, string] => Boolean(entry[1]),
  );
}

function availabilityGroups(work: Work, locale: Locale) {
  const copy = labels[locale];
  const availability = work.availability;

  if (!availability) return [];

  const groups: { id: string; title: string; items: ExternalLink[] | undefined }[] = [
    { id: "libraries", items: availability.libraries, title: copy.libraries },
    { id: "archives", items: availability.archives, title: copy.archive },
    { id: "onlineReading", items: availability.onlineReading, title: copy.onlineReading },
    { id: "stores", items: availability.stores, title: copy.stores },
    { id: "secondHand", items: availability.secondHand, title: copy.secondHand },
  ];

  return groups.filter((group): group is { id: string; title: string; items: ExternalLink[] } =>
    hasItems(group.items),
  );
}

function Section({
  children,
  id,
  lead,
  title,
}: {
  children: React.ReactNode;
  id?: string;
  lead?: string;
  title: string;
}) {
  return (
    <section className={styles.workSection} id={id}>
      <div className={styles.workSectionInner}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.workSectionTitle}>{title}</h2>
          {lead ? <p className={styles.sectionLead}>{lead}</p> : null}
        </div>
        {children}
      </div>
    </section>
  );
}

export function WorkDetail({ locale, relatedWorks, work }: WorkDetailProps) {
  const copy = labels[locale];
  const title = localized(work.title, locale);
  const cover = getWorkCover(work);
  const coverAlt = localized(work.coverAlt, locale) || title;
  const year = getWorkYear(work);
  const typeLabel = typeLabels[locale][work.type] ?? work.type;
  const heroDescription = getHeroDescription(work, locale);
  const annotation = getAnnotation(work, locale);
  const role = localized(work.role, locale);
  const languageLine = formatLanguages(getLanguageSource(work), locale);
  const genre = localized(work.genre, locale) || typeLabel;
  const publisher = getPublisher(work);
  const editionItems = getEditionItems(work);
  const materialItems = getMaterials(work, locale);
  const availability = availabilityGroups(work, locale);
  const external = externalLinks(work);
  const pageLinks = (work.pageLinks ?? []).map((link) => ({
    href: link.href,
    label: localized(link.label, locale),
  }));
  const findLinks = [
    ...pageLinks,
    ...external.map(([key, href]) => ({
      href,
      label: linkLabels[key],
    })),
  ];
  const contextText = localizedList(work.context?.text, locale);
  const contextTitle = localized(work.context?.title, locale) || copy.context;
  const hasContext =
    contextText.length > 0 ||
    hasItems(work.themes) ||
    hasItems(work.tags) ||
    hasItems(work.relatedWorks);
  const hasFindBook = availability.length > 0 || findLinks.length > 0;
  const heroFacts = [
    work.authors.length ? [copy.authors, work.authors.join(", ")] : null,
    hasItems(work.coAuthors) ? [copy.coAuthors, work.coAuthors.join(", ")] : null,
    role ? [copy.role, role] : null,
    languageLine ? [copy.language, languageLine] : null,
    genre ? [copy.genre, genre] : null,
    year ? [copy.firstPublication, String(year)] : null,
    publisher ? [copy.publisher, publisher] : null,
  ].filter((fact): fact is [string, string] => Boolean(fact));

  return (
    <main className={styles.page}>
      <section className={styles.workHero} aria-labelledby="work-title">
        <div className={styles.workHeroInner}>
          <Link className={styles.backLink} href={localizedHref(locale, "/bibliography")}>
            ← {copy.back}
          </Link>

          <figure className={styles.workCover}>
            {cover ? (
              <Image
                alt={coverAlt}
                className={styles.coverImage}
                fill
                priority
                sizes="(max-width: 900px) 72vw, 420px"
                src={assetPath(cover)}
              />
            ) : (
              <div className={styles.coverPlaceholder}>
                <span>{typeLabel}</span>
                <strong>{title}</strong>
                <small>{copy.noCover}</small>
              </div>
            )}
          </figure>

          <div className={styles.workIntro}>
            <p className={styles.workMeta}>
              <span>{typeLabel}</span>
              {year ? <span>{year}</span> : null}
            </p>
            <h1 className={styles.workTitle} id="work-title">
              {title}
            </h1>
            {work.originalTitle && work.originalTitle !== title ? (
              <p className={styles.originalTitle}>{work.originalTitle}</p>
            ) : null}
            <p className={styles.workLead}>{heroDescription}</p>

            {heroFacts.length ? (
              <dl className={styles.heroFacts}>
                {heroFacts.map(([label, value]) => (
                  <div key={label}>
                    <dt>{label}</dt>
                    <dd>{value}</dd>
                  </div>
                ))}
              </dl>
            ) : null}

            <div className={styles.ctaRow}>
              <a className={styles.heroButton} href="#annotation">
                {copy.annotation}
              </a>
              {materialItems.length ? (
                <a className={styles.heroButtonSecondary} href="#materials">
                  {copy.materials}
                </a>
              ) : null}
              {hasFindBook ? (
                <a className={styles.heroButtonSecondary} href="#find-book">
                  {copy.findBook}
                </a>
              ) : null}
            </div>
          </div>
        </div>
      </section>

      <Section id="annotation" lead={annotation.short} title={copy.annotation}>
        {annotation.full.length ? (
          <div className={styles.textColumns}>
            {annotation.full.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        ) : null}
      </Section>

      {work.creationHistory ? (
        <Section id="creation-history" title={copy.creationHistory}>
          <div className={styles.splitSection}>
            <div className={styles.sectionText}>
              <h3>{localized(work.creationHistory.title, locale)}</h3>
              {localizedList(work.creationHistory.text, locale).map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              {hasItems(work.creationHistory.dates) ||
              hasItems(work.creationHistory.places) ||
              hasItems(work.creationHistory.people) ? (
                <dl className={styles.archiveFacts}>
                  {hasItems(work.creationHistory.dates) ? (
                    <div>
                      <dt>{copy.dates}</dt>
                      <dd>{work.creationHistory.dates.join(", ")}</dd>
                    </div>
                  ) : null}
                  {hasItems(work.creationHistory.places) ? (
                    <div>
                      <dt>{copy.places}</dt>
                      <dd>{work.creationHistory.places.join(", ")}</dd>
                    </div>
                  ) : null}
                  {hasItems(work.creationHistory.people) ? (
                    <div>
                      <dt>{copy.people}</dt>
                      <dd>{work.creationHistory.people.join(", ")}</dd>
                    </div>
                  ) : null}
                </dl>
              ) : null}
            </div>
            {work.creationHistory.image ? (
              <figure className={styles.archiveImage}>
                <Image
                  alt={localized(work.creationHistory.imageAlt, locale)}
                  fill
                  sizes="(max-width: 900px) 100vw, 520px"
                  src={assetPath(work.creationHistory.image)}
                />
              </figure>
            ) : null}
          </div>
        </Section>
      ) : null}

      {hasContext ? (
        <Section id="context" title={contextTitle}>
          {contextText.length ? (
            <div className={styles.textColumns}>
              {contextText.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          ) : null}
          {hasItems(work.themes) || hasItems(work.tags) ? (
            <div className={styles.chipList} aria-label={copy.themes}>
              {uniqueList([...(work.themes ?? []), ...(work.tags ?? [])]).map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          ) : null}
        </Section>
      ) : null}

      {editionItems.length ? (
        <Section id="editions" title={copy.editions}>
          <div className={styles.editionsScroller}>
            {editionItems.map((edition, index) => {
              const editionCover = edition.coverImage ?? edition.cover;
              const editionTitle = edition.title ?? title;

              return (
                <article className={styles.editionCard} key={edition.id ?? `${editionTitle}-${index}`}>
                  <div className={styles.editionCover}>
                    {editionCover ? (
                      <Image
                        alt={editionTitle}
                        fill
                        sizes="280px"
                        src={assetPath(editionCover)}
                      />
                    ) : (
                      <span>{edition.year ?? copy.year}</span>
                    )}
                  </div>
                  <div className={styles.editionBody}>
                    <p className={styles.editionYear}>{edition.year}</p>
                    <h3>{editionTitle}</h3>
                    <dl className={styles.editionMeta}>
                      {edition.language ? (
                        <div>
                          <dt>{copy.language}</dt>
                          <dd>{formatLanguages([edition.language], locale)}</dd>
                        </div>
                      ) : null}
                      {edition.city ? (
                        <div>
                          <dt>{copy.city}</dt>
                          <dd>{edition.city}</dd>
                        </div>
                      ) : null}
                      {edition.country ? (
                        <div>
                          <dt>{copy.country}</dt>
                          <dd>{edition.country}</dd>
                        </div>
                      ) : null}
                      {edition.publisher ? (
                        <div>
                          <dt>{copy.publisher}</dt>
                          <dd>{edition.publisher}</dd>
                        </div>
                      ) : null}
                      {edition.translator ? (
                        <div>
                          <dt>{copy.translator}</dt>
                          <dd>{edition.translator}</dd>
                        </div>
                      ) : null}
                      {edition.isbn ? (
                        <div>
                          <dt>{copy.isbn}</dt>
                          <dd>{edition.isbn}</dd>
                        </div>
                      ) : null}
                      {edition.pages ? (
                        <div>
                          <dt>{copy.pages}</dt>
                          <dd>{edition.pages}</dd>
                        </div>
                      ) : null}
                    </dl>
                    {edition.notes ? <p className={styles.cardText}>{edition.notes}</p> : null}
                    {edition.link ? (
                      <a
                        className={styles.inlineLink}
                        href={edition.link}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        {copy.open} →
                      </a>
                    ) : null}
                  </div>
                </article>
              );
            })}
          </div>
        </Section>
      ) : null}

      {materialItems.length ? (
        <Section id="materials" title={copy.materials}>
          <div className={styles.materialsGrid}>
            {materialItems.map((material) => (
              <article className={styles.materialCard} key={material.id}>
                {material.image ? (
                  <div className={styles.materialImage}>
                    <Image
                      alt={material.title}
                      fill
                      sizes="(max-width: 760px) 100vw, 360px"
                      src={assetPath(material.image)}
                    />
                  </div>
                ) : (
                  <div className={styles.materialIcon}>{materialTypeLabels[locale][material.type] ?? material.type}</div>
                )}
                <div className={styles.materialBody}>
                  <p className={styles.cardKicker}>{materialTypeLabels[locale][material.type] ?? material.type}</p>
                  <h3>{material.title}</h3>
                  {material.description ? <p>{material.description}</p> : null}
                  {material.source || material.year ? (
                    <p className={styles.cardMeta}>
                      {[material.source, material.year].filter(Boolean).join(", ")}
                    </p>
                  ) : null}
                  {material.href ? (
                    <a
                      className={styles.inlineLink}
                      href={material.href}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {copy.open} →
                    </a>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </Section>
      ) : null}

      {hasItems(work.reviews) ? (
        <Section id="reviews" title={copy.reviews}>
          <div className={styles.reviewsGrid}>
            {work.reviews.map((review: WorkReview) => (
              <article className={styles.reviewCard} key={review.id}>
                {review.quote ? (
                  <blockquote>{localized(review.quote, locale)}</blockquote>
                ) : null}
                {review.title ? <h3>{localized(review.title, locale)}</h3> : null}
                <p className={styles.cardMeta}>
                  {[review.author, review.source, review.year].filter(Boolean).join(", ")}
                </p>
                {review.href ? (
                  <a
                    className={styles.inlineLink}
                    href={review.href}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {copy.open} →
                  </a>
                ) : null}
              </article>
            ))}
          </div>
        </Section>
      ) : null}

      {hasItems(work.research) ? (
        <Section id="research" title={copy.research}>
          <div className={styles.researchGrid}>
            {work.research.map((item: WorkResearch, index) => (
              <article className={styles.researchCard} key={item.id ?? `${item.title}-${index}`}>
                <h3>{item.title}</h3>
                <p className={styles.cardMeta}>
                  {[item.author, item.publication, item.year, item.language]
                    .filter(Boolean)
                    .join(", ")}
                </p>
                {item.description ? <p>{item.description}</p> : null}
                {item.href || item.link ? (
                  <a
                    className={styles.inlineLink}
                    href={item.href ?? item.link}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {copy.open} →
                  </a>
                ) : null}
              </article>
            ))}
          </div>
        </Section>
      ) : null}

      {hasItems(work.quotes) ? (
        <Section id="quotes" title={copy.quotes}>
          <div className={styles.quotesGrid}>
            {work.quotes.map((quote: WorkQuote) => (
              <blockquote className={styles.quoteCard} key={quote.id}>
                <p>{localized(quote.text, locale)}</p>
                {quote.sourceNote ? <cite>{localized(quote.sourceNote, locale)}</cite> : null}
              </blockquote>
            ))}
          </div>
        </Section>
      ) : null}

      {hasFindBook ? (
        <Section id="find-book" title={copy.findBook}>
          <div className={styles.findGrid}>
            {availability.map((group) => (
              <article className={styles.findGroup} key={group.id}>
                <h3>{group.title}</h3>
                <ul>
                  {group.items.map((item) => (
                    <li key={`${group.id}-${item.url}`}>
                      <a href={item.url} rel="noopener noreferrer" target="_blank">
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
            {findLinks.length ? (
              <article className={styles.findGroup}>
                <h3>{copy.externalLinks}</h3>
                <ul>
                  {findLinks.map((link) => (
                    <li key={link.href}>
                      <a href={link.href} rel="noopener noreferrer" target="_blank">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </article>
            ) : null}
          </div>
        </Section>
      ) : null}

      {relatedWorks.length ? (
        <Section id="related-works" title={copy.related}>
          <WorksGrid compact locale={locale} works={relatedWorks} />
        </Section>
      ) : null}
    </main>
  );
}
