import Image from "next/image";
import Link from "next/link";

import styles from "./AudioGuidePreview.module.css";
import { homePageContent } from "@/data/home";
import { assetPath, siteConfig, type Locale } from "@/config/site";
import { getLocalizedText } from "@/lib/getLocalizedText";
import { localizedHref } from "@/lib/localizedHref";

type AudioGuidePreviewProps = {
  locale?: Locale;
};

type IconName = "book" | "map" | "mic" | "phone" | "send";

function getCardIcon(cardId: string): IconName {
  switch (cardId) {
    case "books-and-ideas":
      return "book";
    case "voices-of-time":
      return "mic";
    default:
      return "map";
  }
}

function Icon({ name }: { name: IconName }) {
  const commonProps = {
    "aria-hidden": true,
    fill: "none",
    height: 22,
    stroke: "currentColor",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    strokeWidth: 1.7,
    viewBox: "0 0 24 24",
    width: 22,
  };

  switch (name) {
    case "book":
      return (
        <svg {...commonProps}>
          <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H7a3 3 0 0 0-3 3V5.5Z" />
          <path d="M4 19V5.5" />
          <path d="M8 7h8" />
          <path d="M8 11h7" />
        </svg>
      );
    case "map":
      return (
        <svg {...commonProps}>
          <path d="M12 21s6-5.2 6-11a6 6 0 0 0-12 0c0 5.8 6 11 6 11Z" />
          <circle cx="12" cy="10" r="2.2" />
        </svg>
      );
    case "mic":
      return (
        <svg {...commonProps}>
          <rect height="11" rx="3.5" width="7" x="8.5" y="3" />
          <path d="M5 11a7 7 0 0 0 14 0" />
          <path d="M12 18v3" />
          <path d="M9 21h6" />
        </svg>
      );
    case "phone":
      return (
        <svg {...commonProps}>
          <rect height="18" rx="2.5" width="10" x="7" y="3" />
          <path d="M11 17h2" />
        </svg>
      );
    case "send":
      return (
        <svg {...commonProps}>
          <path d="m21 3-7.5 18-4-8.5L1 9l20-6Z" />
          <path d="m9.5 12.5 5-5" />
        </svg>
      );
  }
}

export function AudioGuidePreview({ locale = "ru" }: AudioGuidePreviewProps) {
  const content = homePageContent.audioGuidePreview;
  const detailsHref = localizedHref(locale, content.detailsHref);
  const telegramHref = siteConfig.telegramBotUrl || content.telegramHref;
  const appHref = siteConfig.audioAppUrl || content.appHref;

  return (
    <section className={styles.section} aria-labelledby="audio-guide-preview-title">
      <div className={styles.inner}>
        <div className={styles.content}>
          <p className={styles.eyebrow}>
            {getLocalizedText(content.eyebrow, locale)}
          </p>
          <h2 id="audio-guide-preview-title" className={styles.title}>
            {getLocalizedText(content.title, locale)}
          </h2>
          <p className={styles.description}>
            {getLocalizedText(content.description, locale)}
          </p>

          <div className={styles.actions}>
            <Link className={styles.buttonPrimary} href={telegramHref}>
              <Icon name="send" />
              {getLocalizedText(content.telegramLabel, locale)}
            </Link>
            <Link className={styles.buttonSecondary} href={appHref}>
              <Icon name="phone" />
              {getLocalizedText(content.appLabel, locale)}
            </Link>
          </div>
        </div>

        <div className={styles.cards}>
          {content.cards.map((card) => (
            <Link className={styles.card} href={detailsHref} key={card.id}>
              <span className={styles.cardImageWrap}>
                <Image
                  alt={getLocalizedText(card.image.alt, locale)}
                  className={styles.cardImage}
                  fill
                  sizes="(max-width: 800px) calc(100vw - 40px), (max-width: 1100px) 33vw, 300px"
                  src={assetPath(card.image.src)}
                />
                <span className={styles.cardOverlay} />
              </span>
              <span className={styles.cardContent}>
                <span className={styles.cardIcon}>
                  <Icon name={getCardIcon(card.id)} />
                </span>
                <span className={styles.cardTitle}>
                  {getLocalizedText(card.title, locale)}
                </span>
                <span className={styles.cardText}>
                  {getLocalizedText(card.text, locale)}
                </span>
                <span className={styles.detailsLink}>
                  {getLocalizedText(content.detailsLabel, locale)}
                  <span aria-hidden="true">→</span>
                </span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
