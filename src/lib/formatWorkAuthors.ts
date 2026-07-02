import type { Locale, MaybeLocalizedText, Work } from "@/data/works";
import { getLocalizedText } from "@/lib/getLocalizedText";

const knownAuthorNames: Record<string, Record<Locale, string>> = {
  "Алесь Адамовіч": {
    be: "Алесь Адамовіч",
    en: "Ales Adamovich",
    ru: "Алесь Адамович",
  },
  "Даниил Гранин": {
    be: "Данііл Гранін",
    en: "Daniil Granin",
    ru: "Даниил Гранин",
  },
  "Уладзімір Калеснік": {
    be: "Уладзімір Калеснік",
    en: "Uladzimir Kalesnik",
    ru: "Владимир Колесник",
  },
  "Янка Брыль": {
    be: "Янка Брыль",
    en: "Yanka Bryl",
    ru: "Янка Брыль",
  },
  "Элем Климов": {
    be: "Элем Клімаў",
    en: "Elem Klimov",
    ru: "Элем Климов",
  },
};

export function getLocalizedAuthorName(
  author: MaybeLocalizedText,
  locale: Locale,
) {
  if (typeof author !== "string") {
    return getLocalizedText(author, locale);
  }

  return knownAuthorNames[author]?.[locale] ?? author;
}

export function getWorkAuthorNames(work: Work, locale: Locale) {
  return [...work.authors, ...(work.coAuthors ?? [])]
    .map((author) => getLocalizedAuthorName(author, locale))
    .filter(Boolean);
}

export function formatWorkAuthors(work: Work, locale: Locale) {
  return getWorkAuthorNames(work, locale).join(", ");
}

export function getWorkAuthorSearchText(work: Work) {
  return [...work.authors, ...(work.coAuthors ?? []), ...(work.editors ?? []), ...(work.translators ?? [])]
    .flatMap((author) => {
      if (typeof author === "string") {
        const known = knownAuthorNames[author];

        return known ? [author, ...Object.values(known)] : [author];
      }

      return Object.values(author);
    })
    .filter(Boolean)
    .join(" ");
}
