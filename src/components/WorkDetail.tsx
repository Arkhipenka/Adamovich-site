import Image from "next/image";
import Link from "next/link";

import styles from "./WorkDetail.module.css";
import { WorksGrid } from "./WorksGrid";
import { assetPath, type Locale } from "@/config/site";
import type { ExternalLink, Work, WorkType } from "@/data/works";
import { getLocalizedText } from "@/lib/getLocalizedText";
import { localizedHref } from "@/lib/localizedHref";

type WorkDetailProps = {
  locale: Locale;
  relatedWorks: Work[];
  work: Work;
};

const typeLabels: Record<Locale, Partial<Record<WorkType, string>>> = {
  ru: {
    book: "Книга",
    film: "Фильм",
    script: "Сценарий",
    article: "Статья",
    essay: "Публицистика",
    interview: "Интервью",
    archive: "Архив",
    research: "Исследование",
  },
  be: {
    book: "Кніга",
    film: "Фільм",
    script: "Сцэнар",
    article: "Артыкул",
    essay: "Публіцыстыка",
    interview: "Інтэрв'ю",
    archive: "Архіў",
    research: "Даследаванне",
  },
  en: {
    book: "Book",
    film: "Film",
    script: "Script",
    article: "Article",
    essay: "Essay",
    interview: "Interview",
    archive: "Archive",
    research: "Research",
  },
};

const expandedTypeLabels: Record<Locale, Partial<Record<WorkType, string>>> = {
  ru: {
    story: "Рассказ",
    novella: "Повесть",
    documentary_prose: "Документальная проза",
  },
  be: {
    story: "Апавяданне",
    novella: "Аповесць",
    documentary_prose: "Дакументальная проза",
  },
  en: {
    story: "Story",
    novella: "Novella",
    documentary_prose: "Documentary prose",
  },
};

const labels = {
  ru: {
    back: "К библиографии",
    authors: "Авторы",
    role: "Роль",
    languages: "Языки",
    editions: "Издания и переводы",
    where: "Где найти",
    research: "Исследования и критика",
    mentions: "Упоминания",
    awards: "Награды и признание",
    ratings: "Оценки на внешних платформах",
    related: "Связанные произведения",
    materials: "Связанные материалы",
    links: "Внешние ссылки",
    libraries: "Библиотеки",
    archives: "Архивы",
    onlineReading: "Онлайн-чтение",
    stores: "Магазины",
    secondHand: "Букинистика",
  },
  be: {
    back: "Да бібліяграфіі",
    authors: "Аўтары",
    role: "Роля",
    languages: "Мовы",
    editions: "Выданні і пераклады",
    where: "Дзе знайсці",
    research: "Даследаванні і крытыка",
    mentions: "Згадкі",
    awards: "Узнагароды і прызнанне",
    ratings: "Ацэнкі на знешніх платформах",
    related: "Звязаныя творы",
    materials: "Звязаныя матэрыялы",
    links: "Знешнія спасылкі",
    libraries: "Бібліятэкі",
    archives: "Архівы",
    onlineReading: "Анлайн-чытанне",
    stores: "Крамы",
    secondHand: "Букіністыка",
  },
  en: {
    back: "Back to bibliography",
    authors: "Authors",
    role: "Role",
    languages: "Languages",
    editions: "Editions and translations",
    where: "Where to find",
    research: "Research and Criticism",
    mentions: "Mentions",
    awards: "Awards and Recognition",
    ratings: "Ratings on External Platforms",
    related: "Related works",
    materials: "Related materials",
    links: "External links",
    libraries: "Libraries",
    archives: "Archives",
    onlineReading: "Online reading",
    stores: "Stores",
    secondHand: "Second-hand",
  },
} satisfies Record<Locale, Record<string, string>>;

const linkLabels = {
  imdb: "IMDb",
  wikipedia: "Wikipedia",
  wikidata: "Wikidata",
  tmdb: "TMDb",
  letterboxd: "Letterboxd",
  kinopoisk: "Кинопоиск",
  archive: "Archive",
  source: "Source",
} as const;

function hasItems<T>(items?: T[]) {
  return Boolean(items?.length);
}

function externalLinks(work: Work) {
  return Object.entries(work.links ?? {}).filter((entry): entry is [keyof typeof linkLabels, string] =>
    Boolean(entry[1]),
  );
}

function availabilityGroups(work: Work, locale: Locale) {
  const copy = labels[locale];
  const availability = work.availability;

  if (!availability) return [];

  const groups: [string, string, ExternalLink[] | undefined][] = [
    ["libraries", copy.libraries, availability.libraries],
    ["archives", copy.archives, availability.archives],
    ["onlineReading", copy.onlineReading, availability.onlineReading],
    ["stores", copy.stores, availability.stores],
    ["secondHand", copy.secondHand, availability.secondHand],
  ];

  return groups.filter((group): group is [string, string, ExternalLink[]] =>
    hasItems(group[2]),
  );
}

export function WorkDetail({ locale, relatedWorks, work }: WorkDetailProps) {
  const copy = labels[locale];
  const title = getLocalizedText(work.title, locale);
  const typeLabel =
    expandedTypeLabels[locale][work.type] ??
    typeLabels[locale][work.type] ??
    work.type;
  const description = work.descriptionFull
    ? getLocalizedText(work.descriptionFull, locale)
    : getLocalizedText(work.descriptionShort, locale);
  const role = work.role ? getLocalizedText(work.role, locale) : "";
  const links = externalLinks(work);
  const availability = availabilityGroups(work, locale);

  return (
    <main className={styles.page}>
      <div className={styles.inner}>
        <Link className={styles.backLink} href={localizedHref(locale, "/bibliography")}>
          ← {copy.back}
        </Link>

        <section className={styles.hero} aria-labelledby="work-title">
          <div className={styles.coverWrap}>
            {work.cover ? (
              <Image
                alt={title}
                className={styles.cover}
                fill
                priority
                sizes="(max-width: 860px) 320px, 380px"
                src={assetPath(work.cover)}
              />
            ) : (
              <span className={styles.placeholder}>
                <span className={styles.placeholderLabel}>{typeLabel}</span>
                <span className={styles.placeholderTitle}>{title}</span>
                {work.year ? (
                  <span className={styles.placeholderYear}>{work.year}</span>
                ) : null}
              </span>
            )}
          </div>

          <div className={styles.content}>
            <div className={styles.meta}>
              <span>{typeLabel}</span>
              {work.year ? <span>{work.year}</span> : null}
            </div>
            <h1 className={styles.title} id="work-title">
              {title}
            </h1>
            <p className={styles.description}>{description}</p>

            <dl className={styles.facts}>
              {work.authors.length ? (
                <div>
                  <dt>{copy.authors}</dt>
                  <dd>{work.authors.join(", ")}</dd>
                </div>
              ) : null}
              {role ? (
                <div>
                  <dt>{copy.role}</dt>
                  <dd>{role}</dd>
                </div>
              ) : null}
              {work.languages?.length ? (
                <div>
                  <dt>{copy.languages}</dt>
                  <dd>{work.languages.join(", ")}</dd>
                </div>
              ) : null}
            </dl>
          </div>
        </section>

        <div className={styles.sections}>
          {hasItems(work.editions) ? (
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>{copy.editions}</h2>
              <div className={styles.list}>
                {work.editions?.map((edition, index) => (
                  <article className={styles.item} key={`${edition.language}-${edition.year ?? index}`}>
                    <strong>
                      {edition.language}
                      {edition.year ? `, ${edition.year}` : ""}
                    </strong>
                    {edition.publisher ? <p>{edition.publisher}</p> : null}
                    {edition.country ? <p>{edition.country}</p> : null}
                    {edition.notes ? <p>{edition.notes}</p> : null}
                  </article>
                ))}
              </div>
            </section>
          ) : null}

          {availability.length ? (
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>{copy.where}</h2>
              <div className={styles.list}>
                {availability.map(([key, label, items]) => (
                  <article className={styles.item} key={key}>
                    <strong>{label}</strong>
                    <div className={styles.linkList}>
                      {items.map((item) => (
                        <a
                          href={item.url}
                          key={item.url}
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          {item.label}
                        </a>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ) : null}

          {hasItems(work.research) ? (
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>{copy.research}</h2>
              <div className={styles.list}>
                {work.research?.map((item) => (
                  <article className={styles.item} key={`${item.title}-${item.year ?? ""}`}>
                    <strong>{item.title}</strong>
                    <p>
                      {[item.author, item.year, item.language].filter(Boolean).join(", ")}
                    </p>
                    {item.description ? <p>{item.description}</p> : null}
                    {item.link ? (
                      <a href={item.link} rel="noopener noreferrer" target="_blank">
                        {item.link}
                      </a>
                    ) : null}
                  </article>
                ))}
              </div>
            </section>
          ) : null}

          {hasItems(work.mentions) ? (
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>{copy.mentions}</h2>
              <div className={styles.list}>
                {work.mentions?.map((item) => (
                  <article className={styles.item} key={`${item.title}-${item.year ?? ""}`}>
                    <strong>{item.title}</strong>
                    <p>{[item.source, item.year, item.language].filter(Boolean).join(", ")}</p>
                    {item.link ? (
                      <a href={item.link} rel="noopener noreferrer" target="_blank">
                        {item.link}
                      </a>
                    ) : null}
                  </article>
                ))}
              </div>
            </section>
          ) : null}

          {hasItems(work.awards) ? (
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>{copy.awards}</h2>
              <div className={styles.list}>
                {work.awards?.map((item) => (
                  <article className={styles.item} key={`${item.name}-${item.year ?? ""}`}>
                    <strong>{item.name}</strong>
                    <p>
                      {[item.year, item.category, item.organization, item.result]
                        .filter(Boolean)
                        .join(", ")}
                    </p>
                  </article>
                ))}
              </div>
            </section>
          ) : null}

          {hasItems(work.ratings) ? (
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>{copy.ratings}</h2>
              <div className={styles.list}>
                {work.ratings?.map((item) => (
                  <article className={styles.item} key={item.platform}>
                    <strong>{item.platform}</strong>
                    <p>
                      {[item.value, item.max ? `/ ${item.max}` : "", item.lastChecked]
                        .filter(Boolean)
                        .join(" ")}
                    </p>
                    {item.link ? (
                      <a href={item.link} rel="noopener noreferrer" target="_blank">
                        {item.link}
                      </a>
                    ) : null}
                  </article>
                ))}
              </div>
            </section>
          ) : null}

          {relatedWorks.length ? (
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>{copy.related}</h2>
              <WorksGrid compact locale={locale} works={relatedWorks} />
            </section>
          ) : null}

          {hasItems(work.relatedMaterials) ? (
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>{copy.materials}</h2>
              <div className={styles.list}>
                {work.relatedMaterials?.map((item) => {
                  const itemTitle = getLocalizedText(item.title, locale);
                  const itemDescription = item.description
                    ? getLocalizedText(item.description, locale)
                    : "";

                  return (
                    <article className={styles.item} key={itemTitle}>
                      <strong>{itemTitle}</strong>
                      {itemDescription ? <p>{itemDescription}</p> : null}
                      {item.link ? (
                        <a href={item.link} rel="noopener noreferrer" target="_blank">
                          {item.link}
                        </a>
                      ) : null}
                    </article>
                  );
                })}
              </div>
            </section>
          ) : null}

          {links.length ? (
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>{copy.links}</h2>
              <div className={styles.externalLinks}>
                {links.map(([key, url]) => (
                  <a
                    className={styles.externalLink}
                    href={url}
                    key={key}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {linkLabels[key]}
                  </a>
                ))}
              </div>
            </section>
          ) : null}
        </div>
      </div>
    </main>
  );
}
