import Image from "next/image";
import Link from "next/link";

import styles from "./BibliographyPreview.module.css";
import { homePageContent } from "@/data/home";
import { featuredWorks } from "@/data/works";
import { assetPath, type Locale } from "@/config/site";
import { getLocalizedText } from "@/lib/getLocalizedText";
import { localizedHref } from "@/lib/localizedHref";

type BibliographyPreviewProps = {
  locale?: Locale;
};

const fallbackCover = "/assets/images/bibliography/covers/placeholder.webp";

export function BibliographyPreview({ locale = "ru" }: BibliographyPreviewProps) {
  const content = homePageContent.bibliographyPreview;

  return (
    <section className={styles.section} aria-labelledby="bibliography-preview-title">
      <div className={styles.inner}>
        <div className={styles.header}>
          <div className={styles.headingGroup}>
            <p className={styles.eyebrow}>
              {getLocalizedText(content.eyebrow, locale)}
            </p>
            <h2 id="bibliography-preview-title" className={styles.title}>
              {getLocalizedText(content.title, locale)}
            </h2>
            <p className={styles.description}>
              {getLocalizedText(content.description, locale)}
            </p>
          </div>

          <Link
            className={styles.viewAll}
            href={localizedHref(locale, content.viewAllHref)}
          >
            {getLocalizedText(content.viewAllLabel, locale)}
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className={styles.works}>
          {featuredWorks.map((work) => {
            const title = getLocalizedText(work.title, locale);
            const cover = work.cover ?? fallbackCover;

            return (
              <Link
                className={styles.workCard}
                href={localizedHref(locale, `/bibliography/${work.slug}`)}
                key={work.slug}
              >
                <span className={styles.coverWrap}>
                  <Image
                    alt={`${title}, ${work.year ?? ""}`.trim()}
                    className={styles.cover}
                    fill
                    sizes="(max-width: 480px) calc((100vw - 56px) / 2), (max-width: 800px) calc((100vw - 64px) / 2), (max-width: 1200px) calc((100vw - 120px) / 4), 150px"
                    src={assetPath(cover)}
                  />
                  <span className={styles.arrowButton} aria-hidden="true">
                    →
                  </span>
                </span>
                <span className={styles.workTitle}>{title}</span>
                {work.year ? (
                  <span className={styles.workYear}>{work.year}</span>
                ) : null}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
