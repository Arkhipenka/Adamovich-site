import {
  works,
  type Locale,
  type Work,
  type WorkLanguage,
  type WorkType,
} from "@/data/works";

export type WorkSortType = "priority" | "year" | "title";

const languageLabels: Record<Locale, Record<string, string>> = {
  ru: {
    be: "бел.",
    ru: "рус.",
    en: "англ.",
    pl: "пол.",
    de: "нем.",
    fr: "фр.",
    uk: "укр.",
    lt: "лит.",
    ja: "яп.",
    zh: "кит.",
    it: "ит.",
    sk: "словац.",
  },
  be: {
    be: "бел.",
    ru: "рус.",
    en: "англ.",
    pl: "пол.",
    de: "ням.",
    fr: "фр.",
    uk: "укр.",
    lt: "літ.",
    ja: "яп.",
    zh: "кіт.",
    it: "італ.",
    sk: "славац.",
  },
  en: {
    be: "Bel.",
    ru: "Rus.",
    en: "Eng.",
    pl: "Pol.",
    de: "Ger.",
    fr: "Fr.",
    uk: "Ukr.",
    lt: "Lith.",
    ja: "Jap.",
    zh: "Ch.",
    it: "It.",
    sk: "Slovak",
  },
};

export function formatLanguages(
  languages: WorkLanguage[] | undefined,
  locale: Locale,
) {
  if (!languages?.length) return "";

  return [...new Set(languages)]
    .map((language) => languageLabels[locale][language] ?? language)
    .join(" / ");
}

export function getWorkYear(work: Work) {
  return (
    work.firstPublicationYear ??
    work.firstReleaseYear ??
    work.mediaCredits?.releaseYear ??
    work.year
  );
}

export function getWorkCover(work: Work) {
  return work.coverImage ?? work.cover;
}

export function getPublishedWorks() {
  return works
    .filter((work) => work.status === "published")
    .sort((a, b) => a.priority - b.priority);
}

export function getFeaturedWorks(limit = 7) {
  return works
    .filter((work) => work.featured && work.status === "published")
    .sort((a, b) => a.priority - b.priority)
    .slice(0, limit);
}

export function getWorkBySlug(slug: string) {
  return works.find((work) => work.slug === slug);
}

export function getWorksByType(type: WorkType) {
  return works.filter((work) => work.type === type);
}

export function getRelatedWorks(work: Work) {
  if (!work.relatedWorks?.length) return [];

  return work.relatedWorks
    .map((slug) => getWorkBySlug(slug))
    .filter((relatedWork): relatedWork is Work => Boolean(relatedWork))
    .filter((relatedWork) => relatedWork.status === "published");
}

export function sortWorks(list: Work[], sortType: WorkSortType) {
  const sortedWorks = [...list];

  switch (sortType) {
    case "year":
      return sortedWorks.sort(
        (a, b) => (getWorkYear(b) ?? 0) - (getWorkYear(a) ?? 0) || a.priority - b.priority,
      );
    case "title":
      return sortedWorks.sort((a, b) => a.title.ru.localeCompare(b.title.ru));
    case "priority":
    default:
      return sortedWorks.sort(
        (a, b) => a.priority - b.priority || (getWorkYear(b) ?? 0) - (getWorkYear(a) ?? 0),
      );
  }
}
