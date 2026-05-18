import Image from "next/image";
import Link from "next/link";

import styles from "./BibliographyPreview.module.css";
import { assetPath, localizedPath, type Locale } from "@/config/site";

type BibliographyPreviewProps = {
  locale?: Locale;
};

type BibliographyContent = {
  eyebrow: string;
  title: string;
  description: string;
  viewAllLabel: string;
};

type Work = {
  slug: string;
  title: Record<Locale, string>;
  year: string;
  image: string;
  href: string;
};

const contentByLocale: Record<Locale, BibliographyContent> = {
  be: {
    eyebrow: "Бібліяграфія",
    title: "Кнігі, што захоўваюць праўду",
    description:
      "Дакументальная проза, сведчанні і творы, якія сталі часткай маральнай памяці XX стагоддзя.",
    viewAllLabel: "Усе кнігі",
  },
  en: {
    eyebrow: "Bibliography",
    title: "Books that preserve truth",
    description:
      "Documentary prose, testimonies and works that became part of the moral memory of the 20th century.",
    viewAllLabel: "View all",
  },
  ru: {
    eyebrow: "Библиография",
    title: "Книги, сохраняющие правду",
    description:
      "Документальная проза, свидетельства и произведения, ставшие частью моральной памяти XX века.",
    viewAllLabel: "Смотреть всё",
  },
};

const works: Work[] = [
  {
    slug: "i-am-from-fire-village",
    title: {
      be: "Я з вогненнай вёскі",
      en: "I Am from the Fiery Village",
      ru: "Я из огненной деревни",
    },
    year: "1975",
    image: assetPath("/assets/images/bibliography/covers/i-am-from-fire-village.webp"),
    href: "/bibliography/i-am-from-fire-village",
  },
  {
    slug: "partisan-stories",
    title: {
      be: "Партызанскія аповесці",
      en: "Partisan Stories",
      ru: "Партизанские повести",
    },
    year: "1977",
    image: assetPath("/assets/images/bibliography/covers/partisan-stories.webp"),
    href: "/bibliography/partisan-stories",
  },
  {
    slug: "khatyn-story",
    title: {
      be: "Хатынская аповесць",
      en: "The Khatyn Tale",
      ru: "Хатынская повесть",
    },
    year: "1977",
    image: assetPath("/assets/images/bibliography/covers/khatyn-story.webp"),
    href: "/bibliography/khatyn-story",
  },
  {
    slug: "three-winters",
    title: {
      be: "Тры зімы",
      en: "Three Winters",
      ru: "Три зимы",
    },
    year: "1978",
    image: assetPath("/assets/images/bibliography/covers/three-winters.webp"),
    href: "/bibliography/three-winters",
  },
  {
    slug: "war-under-rooftops",
    title: {
      be: "Вайна пад стрэхамі",
      en: "War under the Rooftops",
      ru: "Война под крышами",
    },
    year: "1984",
    image: assetPath("/assets/images/bibliography/covers/war-under-rooftops.webp"),
    href: "/bibliography/war-under-rooftops",
  },
  {
    slug: "blockade-book",
    title: {
      be: "Блакадная кніга",
      en: "The Blockade Book",
      ru: "Блокадная книга",
    },
    year: "1989",
    image: assetPath("/assets/images/bibliography/covers/blockade-book.webp"),
    href: "/bibliography/blockade-book",
  },
  {
    slug: "blue-palaces",
    title: {
      be: "Я з блакітных палацаў...",
      en: "I Am from the Blue Palaces...",
      ru: "Я с голубых дворцов...",
    },
    year: "1994",
    image: assetPath("/assets/images/bibliography/covers/blue-palaces.webp"),
    href: "/bibliography/blue-palaces",
  },
];

function localizeWorkHref(locale: Locale, href: string) {
  return `/${locale}${href}`;
}

export function BibliographyPreview({ locale = "en" }: BibliographyPreviewProps) {
  const content = contentByLocale[locale];

  return (
    <section className={styles.section} aria-labelledby="bibliography-preview-title">
      <div className={styles.inner}>
        <div className={styles.header}>
          <div className={styles.headingGroup}>
            <p className={styles.eyebrow}>{content.eyebrow}</p>
            <h2 id="bibliography-preview-title" className={styles.title}>
              {content.title}
            </h2>
            <p className={styles.description}>{content.description}</p>
          </div>

          <Link className={styles.viewAll} href={localizedPath(locale, "bibliography")}>
            {content.viewAllLabel}
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className={styles.works}>
          {works.map((work) => {
            const title = work.title[locale];

            return (
              <Link
                className={styles.workCard}
                href={localizeWorkHref(locale, work.href)}
                key={work.slug}
              >
                <span className={styles.coverWrap}>
                  <Image
                    alt={`${title}, ${work.year}`}
                    className={styles.cover}
                    fill
                    sizes="(max-width: 480px) calc((100vw - 56px) / 2), (max-width: 800px) calc((100vw - 64px) / 2), (max-width: 1200px) calc((100vw - 120px) / 4), 150px"
                    src={work.image}
                  />
                  <span className={styles.arrowButton} aria-hidden="true">
                    →
                  </span>
                </span>
                <span className={styles.workTitle}>{title}</span>
                <span className={styles.workYear}>{work.year}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
