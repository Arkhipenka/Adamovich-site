import Link from "next/link";

import styles from "./FeaturedWorks.module.css";
import { WorksGrid } from "./WorksGrid";
import type { Locale } from "@/config/site";
import { localizedHref } from "@/lib/localizedHref";
import { getFeaturedWorks } from "@/lib/works";

type FeaturedWorksProps = {
  locale?: Locale;
};

const content = {
  ru: {
    eyebrow: "Библиография",
    title: "Творческое наследие",
    description:
      "Книги, фильмы, сценарии, статьи и документальные тексты Алеся Адамовича раскрывают его разговор о войне, памяти, правде и человеческой ответственности.",
    viewAll: "Смотреть всё",
  },
  be: {
    eyebrow: "Бібліяграфія",
    title: "Творчая спадчына",
    description:
      "Кнігі, фільмы, сцэнары, артыкулы і дакументальныя тэксты Алеся Адамовіча раскрываюць яго размову пра вайну, памяць, праўду і чалавечую адказнасць.",
    viewAll: "Глядзець усё",
  },
  en: {
    eyebrow: "Bibliography",
    title: "Creative Legacy",
    description:
      "Books, films, screenplays, articles and documentary texts by Ales Adamovich reveal his conversation about war, memory, truth and human responsibility.",
    viewAll: "View all",
  },
} satisfies Record<Locale, Record<string, string>>;

export function FeaturedWorks({ locale = "ru" }: FeaturedWorksProps) {
  const works = getFeaturedWorks(7);
  const copy = content[locale];

  return (
    <section className={styles.section} aria-labelledby="featured-works-title">
      <div className={styles.inner}>
        <div className={styles.header}>
          <div className={styles.headingGroup}>
            <p className={styles.eyebrow}>{copy.eyebrow}</p>
            <h2 className={styles.title} id="featured-works-title">
              {copy.title}
            </h2>
            <p className={styles.description}>{copy.description}</p>
          </div>
          <Link className={styles.viewAll} href={localizedHref(locale, "/bibliography")}>
            {copy.viewAll}
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        <WorksGrid locale={locale} singleRow works={works} />
      </div>
    </section>
  );
}
