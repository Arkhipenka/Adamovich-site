import Image from "next/image";
import Link from "next/link";

import styles from "./InitiativePreview.module.css";
import { homePageContent } from "@/data/home";
import { assetPath, type Locale } from "@/config/site";
import { getLocalizedText } from "@/lib/getLocalizedText";
import { localizedHref } from "@/lib/localizedHref";

type InitiativePreviewProps = {
  locale?: Locale;
};

type FeatureIcon = "archive" | "book" | "map" | "voice";

function getFeatureIcon(featureId: string): FeatureIcon {
  switch (featureId) {
    case "interactive-map":
      return "map";
    case "oral-history":
      return "voice";
    case "educational-resources":
      return "book";
    default:
      return "archive";
  }
}

function Icon({ name }: { name: FeatureIcon }) {
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
    case "archive":
      return (
        <svg {...commonProps}>
          <path d="M4 6h16" />
          <path d="M6 6v14h12V6" />
          <path d="M9 10h6" />
          <path d="M9 14h6" />
          <path d="M8 3h8l1 3H7l1-3Z" />
        </svg>
      );
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
    case "voice":
      return (
        <svg {...commonProps}>
          <path d="M4 12v.01" />
          <path d="M8 9v6" />
          <path d="M12 6v12" />
          <path d="M16 9v6" />
          <path d="M20 12v.01" />
        </svg>
      );
  }
}

export function InitiativePreview({ locale = "ru" }: InitiativePreviewProps) {
  const content = homePageContent.initiativePreview;

  return (
    <section className={styles.section} aria-labelledby="initiative-preview-title">
      <div className={styles.inner}>
        <div className={styles.imageColumn}>
          <div className={styles.imageFrame}>
            <Image
              alt={getLocalizedText(content.image.alt, locale)}
              className={styles.image}
              fill
              sizes="(max-width: 900px) calc(100vw - 40px), (max-width: 1180px) 42vw, 500px"
              src={assetPath(content.image.src)}
            />
          </div>
        </div>

        <div className={styles.content}>
          <p className={styles.eyebrow}>
            {getLocalizedText(content.eyebrow, locale)}
          </p>
          <h2 id="initiative-preview-title" className={styles.title}>
            {getLocalizedText(content.title, locale)}
          </h2>
          <p className={styles.description}>
            {getLocalizedText(content.description, locale)}
          </p>
          <Link
            className={styles.link}
            href={localizedHref(locale, content.linkHref)}
          >
            {getLocalizedText(content.linkLabel, locale)}
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        <ul className={styles.features}>
          {content.features.map((feature) => (
            <li className={styles.feature} key={feature.id}>
              <span className={styles.featureIcon}>
                <Icon name={getFeatureIcon(feature.id)} />
              </span>
              <h3 className={styles.featureTitle}>
                {getLocalizedText(feature.title, locale)}
              </h3>
              <p className={styles.featureText}>
                {getLocalizedText(feature.text, locale)}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
