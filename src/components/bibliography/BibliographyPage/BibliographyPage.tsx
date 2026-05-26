import type { Metadata } from "next";

import { WorksCatalog } from "@/components/WorksCatalog";
import type { Work } from "@/data/works";
import type { Locale } from "@/types/common.types";

import styles from "./BibliographyPage.module.css";

const bibliographyPageContent = {
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
} satisfies Record<
  Locale,
  {
    description: string;
    eyebrow: string;
    title: string;
  }
>;

type BibliographyPageProps = {
  locale: Locale;
  works: Work[];
};

export function getBibliographyPageMetadata(locale: Locale): Metadata {
  const copy = bibliographyPageContent[locale];

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

export function BibliographyPage({ locale, works }: BibliographyPageProps) {
  const copy = bibliographyPageContent[locale];

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

        <WorksCatalog locale={locale} works={works} />
      </div>
    </main>
  );
}
