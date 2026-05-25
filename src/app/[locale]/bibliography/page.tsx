import type { Metadata } from "next";

import styles from "./page.module.css";
import { WorksCatalog } from "@/components/WorksCatalog";
import type { Locale } from "@/config/site";
import { getPublishedWorks } from "@/lib/works";
import { resolveLocalePage, type LocalePageProps } from "@/lib/page";

const content = {
  ru: {
    eyebrow: "Библиография",
    title: "Творческое наследие Алеся Адамовича",
    description:
      "Книги, фильмы, сценарии, публицистика, интервью и архивные материалы, связанные с жизнью и работой Алеся Адамовича.",
  },
  be: {
    eyebrow: "Бібліяграфія",
    title: "Творчая спадчына Алеся Адамовіча",
    description:
      "Кнігі, фільмы, сцэнары, публіцыстыка, інтэрв'ю і архіўныя матэрыялы, звязаныя з жыццём і працай Алеся Адамовіча.",
  },
  en: {
    eyebrow: "Bibliography",
    title: "Creative Legacy of Ales Adamovich",
    description:
      "Books, films, screenplays, essays, interviews and archival materials connected with the life and work of Ales Adamovich.",
  },
} satisfies Record<Locale, Record<string, string>>;

type BibliographyMetadataProps = {
  params: Promise<{
    locale: string;
  }>;
};

export async function generateMetadata({
  params,
}: BibliographyMetadataProps): Promise<Metadata> {
  const { locale } = await resolveLocalePage(params);
  const copy = content[locale];

  return {
    title: copy.title,
    description: copy.description,
    openGraph: {
      title: copy.title,
      description: copy.description,
    },
    twitter: {
      title: copy.title,
      description: copy.description,
    },
  };
}

export default async function BibliographyPage({ params }: LocalePageProps) {
  const { locale } = await resolveLocalePage(params);
  const copy = content[locale];

  return (
    <main className={styles.page}>
      <div className={styles.inner}>
        <section className={styles.hero} aria-labelledby="bibliography-title">
          <p className={styles.eyebrow}>{copy.eyebrow}</p>
          <h1 className={styles.title} id="bibliography-title">
            {copy.title}
          </h1>
          <p className={styles.description}>{copy.description}</p>
        </section>

        <WorksCatalog locale={locale} works={getPublishedWorks()} />
      </div>
    </main>
  );
}
