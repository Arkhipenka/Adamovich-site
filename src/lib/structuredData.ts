import { siteConfig, type Locale } from "@/config/site";
import { getLocalizedText } from "@/lib/getLocalizedText";
import { localePath } from "@/lib/seo";
import { getWorkBySlug } from "@/lib/works";

type JsonLdObject = Record<string, unknown>;

const personNames: Record<Locale, string> = {
  be: "Алесь Адамовіч",
  en: "Ales Adamovich",
  ru: "Алесь Адамович",
};

const countryNames: Record<Locale, string> = {
  be: "Беларусь",
  en: "Belarus",
  ru: "Беларусь",
};

const writerOccupation: Record<Locale, string> = {
  be: "пісьменнік",
  en: "writer",
  ru: "писатель",
};

const screenwriterOccupation: Record<Locale, string> = {
  be: "кінасцэнарыст",
  en: "screenwriter",
  ru: "киносценарист",
};

const civicOccupation: Record<Locale, string> = {
  be: "грамадскі дзеяч",
  en: "public figure",
  ru: "общественный деятель",
};

const initiativeNames: Record<Locale, string> = {
  be: "Ініцыятыва «Прыпынак Адамовіча»",
  en: "Prypynak Adamovicha Initiative",
  ru: "Инициатива «Прыпынак Адамовіча»",
};

const notableWorkSlugs = [
  "i-am-from-fire-village",
  "khatyn-story",
  "blockade-book",
  "come-and-see",
  "war-under-rooftops",
] as const;

function absoluteUrl(path: string) {
  return new URL(path, siteConfig.url).toString();
}

function compactStrings(values: Array<string | undefined>) {
  return values.filter((value): value is string => Boolean(value));
}

function createNotableWork(locale: Locale, slug: string) {
  const work = getWorkBySlug(slug);

  if (!work) return null;

  return {
    "@type": work.type === "film" ? "Movie" : "CreativeWork",
    name: getLocalizedText(work.title, locale),
    url: absoluteUrl(localePath(locale, `bibliography/${slug}`)),
  };
}

export function createPersonJsonLd(locale: Locale): JsonLdObject {
  const notableWork = notableWorkSlugs
    .map((slug) => createNotableWork(locale, slug))
    .filter((work): work is JsonLdObject => work !== null);

  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteConfig.url}/#ales-adamovich`,
    name: personNames[locale],
    alternateName: [
      "Алесь Адамовіч",
      "Алесь Адамович",
      "Ales Adamovich",
      "Аляксандр Міхайлавіч Адамовіч",
      "Александр Михайлович Адамович",
    ],
    birthDate: "1927-09-03",
    deathDate: "1994-01-26",
    birthPlace: {
      "@type": "Place",
      name: "Канюхі, Беларусь",
    },
    deathPlace: {
      "@type": "Place",
      name: "Moscow, Russia",
    },
    nationality: {
      "@type": "Country",
      name: countryNames[locale],
    },
    jobTitle: writerOccupation[locale],
    hasOccupation: [
      {
        "@type": "Occupation",
        name: writerOccupation[locale],
      },
      {
        "@type": "Occupation",
        name: screenwriterOccupation[locale],
      },
      {
        "@type": "Occupation",
        name: civicOccupation[locale],
      },
    ],
    notableWork,
    url: absoluteUrl(localePath(locale, "biography")),
  };
}

export function createOrganizationJsonLd(locale: Locale): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteConfig.url}/#prypynak-adamovicha`,
    name: initiativeNames[locale],
    alternateName: [
      "Прыпынак Адамовіча",
      "Prypynak Adamovicha",
      "Adamovich Stop",
    ],
    url: absoluteUrl(localePath(locale, "initiative")),
    logo: absoluteUrl("/assets/brand/adamovich-logo-portrait.png"),
    sameAs: compactStrings([
      siteConfig.contacts.instagramUrl,
      siteConfig.contacts.youtubeUrl,
      siteConfig.supportUrl,
      siteConfig.patreonUrl,
      siteConfig.contacts.telegramUrl,
    ]),
    funder: [
      {
        "@type": "Organization",
        name: "ArtPower Belarus",
        url: "https://byculture.org/en/artpower-belarus-eng/",
      },
      {
        "@type": "Organization",
        name: "European Union",
        url: "https://european-union.europa.eu/",
      },
    ],
  };
}
