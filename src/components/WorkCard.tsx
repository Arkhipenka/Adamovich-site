import { MaterialCard, type MaterialCardType } from "./MaterialCard";
import type { Locale } from "@/config/site";
import type { Work } from "@/data/works";
import { getLocalizedText } from "@/lib/getLocalizedText";
import { localizedHref } from "@/lib/localizedHref";

type WorkCardProps = {
  compact?: boolean;
  locale: Locale;
  work: Work;
};

const detailsLabels = {
  ru: "Подробнее",
  be: "Даведацца больш",
  en: "Read more",
} satisfies Record<Locale, string>;

const categoryLabels = {
  ru: {
    book: "Библиография",
    film: "Кино",
    script: "Сценарии",
    article: "Публицистика",
    essay: "Публицистика",
    interview: "Интервью",
    archive: "Архив",
    research: "Исследования",
  },
  be: {
    book: "Бібліяграфія",
    film: "Кіно",
    script: "Сцэнары",
    article: "Публіцыстыка",
    essay: "Публіцыстыка",
    interview: "Інтэрв'ю",
    archive: "Архіў",
    research: "Даследаванні",
  },
  en: {
    book: "Bibliography",
    film: "Cinema",
    script: "Scripts",
    article: "Publicism",
    essay: "Publicism",
    interview: "Interview",
    archive: "Archive",
    research: "Research",
  },
} satisfies Record<Locale, Record<MaterialCardType, string>>;

function getLanguageLabel(work: Work) {
  return work.languages?.length ? work.languages.join(", ") : undefined;
}

export function WorkCard({ locale, work }: WorkCardProps) {
  const title = getLocalizedText(work.title, locale);
  const description = getLocalizedText(work.descriptionShort, locale);
  const role = work.role ? getLocalizedText(work.role, locale) : "";

  return (
    <MaterialCard
      detailsLabel={detailsLabels[locale]}
      locale={locale}
      material={{
        id: work.id,
        type: work.type,
        title,
        authors: work.authors,
        director: work.type === "film" ? work.authors[0] : undefined,
        year: work.year,
        language: getLanguageLabel(work),
        category: categoryLabels[locale][work.type],
        description: role ? `${description} ${role}.` : description,
        image: work.cover,
        href: localizedHref(locale, `/bibliography/${work.slug}`),
      }}
    />
  );
}
