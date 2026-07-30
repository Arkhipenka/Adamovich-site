import type { Metadata } from "next";
import Image from "next/image";

import { WorksCatalog } from "@/components/WorksCatalog";
import { assetPath } from "@/config/site";
import type { Work } from "@/data/works";
import { localizedAlternates } from "@/lib/seo";
import type { Locale } from "@/types/common.types";

import styles from "./BibliographyPage.module.css";

const heroCollageImage = assetPath(
  "/assets/images/bibliography/bibliography-hero-collage.webp",
);

const bibliographyPageContent = {
  be: {
    eyebrow: "Бібліяграфія",
    title: "Спадчына Адамовіча",
    description:
      "Кнігі, фільмы, сцэнары, публіцыстыка, інтэрв’ю і архіўныя матэрыялы, звязаныя з жыццём, працай і спадчынай Алеся Адамовіча.",
  },
  en: {
    eyebrow: "Bibliography",
    title: "Adamovich’s Legacy",
    description:
      "Books, films, screenplays, essays, interviews, and archival materials connected with the life, work, and legacy of writer Ales Adamovich.",
  },
  ru: {
    eyebrow: "Библиография",
    title: "Наследие Адамовича",
    description:
      "Книги, фильмы, сценарии, публицистика, интервью и архивные материалы, связанные с жизнью, работой и наследием Алеся Адамовича.",
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
    alternates: localizedAlternates(locale, "bibliography"),
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
        <section
          className={styles.bibliographyHero}
          aria-labelledby="bibliography-title"
        >
          <div className={styles.heroVisual} aria-hidden="true">
            <Image
              alt=""
              className={styles.heroImage}
              fill
              priority
              sizes="100vw"
              src={heroCollageImage}
            />
          </div>

          <div className={styles.heroContent}>
            <p className={styles.heroEyebrow}>{copy.eyebrow}</p>
            <h1 className={styles.heroTitle} id="bibliography-title">
              {copy.title}
            </h1>
            <p className={styles.heroLead}>{copy.description}</p>
          </div>
        </section>

        <WorksCatalog locale={locale} works={works} />
      </div>
    </main>
  );
}
