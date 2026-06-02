import Image from "next/image";
import Link from "next/link";

import styles from "./AboutWriter.module.css";
import { homePageContent } from "@/data/home";
import { assetPath, type Locale } from "@/config/site";
import { getLocalizedText } from "@/lib/getLocalizedText";
import { localizedHref } from "@/lib/localizedHref";

type AboutWriterProps = {
  locale?: Locale;
};

const imageCaptionByLocale: Record<Locale, string> = {
  be: "Алесь Адамовіч за працай. Архіўны фотаздымак.",
  en: "Ales Adamovich at work. Archival photograph.",
  ru: "Алесь Адамович за работой. Архивная фотография.",
};

export function AboutWriter({ locale = "ru" }: AboutWriterProps) {
  const content = homePageContent.aboutWriter;

  return (
    <section className={styles.section} aria-labelledby="about-writer-title">
      <div className={styles.inner}>
        <div className={styles.imageColumn}>
          <div className={styles.imageFrame}>
            <Image
              alt={getLocalizedText(content.image.alt, locale)}
              className={styles.image}
              height={630}
              sizes="(max-width: 700px) calc(100vw - 40px), (max-width: 1024px) 42vw, 420px"
              src={assetPath(content.image.src)}
              width={1200}
            />
            <p className={styles.imageCaption}>{imageCaptionByLocale[locale]}</p>
          </div>
        </div>

        <div className={styles.content}>
          <p className={styles.eyebrow}>
            {getLocalizedText(content.eyebrow, locale)}
          </p>
          <h2 id="about-writer-title" className={styles.title}>
            {getLocalizedText(content.title, locale)}
          </h2>
          <p className={styles.text}>{getLocalizedText(content.text, locale)}</p>
          <Link
            className={styles.link}
            href={localizedHref(locale, content.linkHref)}
          >
            {getLocalizedText(content.linkLabel, locale)}
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        <aside className={styles.quoteColumn}>
          <div className={styles.quoteMark} aria-hidden="true">
            ”
          </div>
          <blockquote className={styles.quoteText}>
            {getLocalizedText(content.quote, locale)}
          </blockquote>
          <p className={styles.quoteAuthor}>
            {getLocalizedText(content.quoteAuthor, locale)}
            {content.quoteSource ? (
              <span className={styles.quoteSource}>
                {getLocalizedText(content.quoteSource, locale)}
              </span>
            ) : null}
          </p>
        </aside>
      </div>
    </section>
  );
}
