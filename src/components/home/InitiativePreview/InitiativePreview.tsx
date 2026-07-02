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

type FeatureIcon = "archive" | "audio" | "memorial" | "stop";

function getFeatureIcon(featureId: string): FeatureIcon {
  switch (featureId) {
    case "memorial":
      return "memorial";
    case "art-project":
      return "stop";
    case "audio-guide":
      return "audio";
    case "archive":
    default:
      return "archive";
  }
}

function Icon({ name }: { name: FeatureIcon }) {
  const commonProps = {
    "aria-hidden": true,
    fill: "none",
    height: 28,
    stroke: "currentColor",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    strokeWidth: 1.55,
    viewBox: "0 0 24 24",
    width: 28,
  };

  switch (name) {
    case "archive":
      return (
        <svg {...commonProps}>
          <path d="M4 7.5h6l1.6 2H20v9.5H4z" />
          <path d="M4 7.5v-2h5l1.6 2" />
          <path d="M7.5 13h8.5" />
          <path d="M7.5 16h5.5" />
        </svg>
      );
    case "audio":
      return (
        <svg {...commonProps}>
          <path d="M5 14v-2a7 7 0 0 1 14 0v2" />
          <path d="M5 14.5c0-1.1.9-2 2-2h1v5H7c-1.1 0-2-.9-2-2z" />
          <path d="M19 14.5c0-1.1-.9-2-2-2h-1v5h1c1.1 0 2-.9 2-2z" />
          <path d="M10.5 11.5 14.5 14l-4 2.5z" />
        </svg>
      );
    case "memorial":
      return (
        <svg {...commonProps}>
          <path d="M9 7.3a3 3 0 0 1 6 0c0 1.6-1 2.8-3 2.8s-3-1.2-3-2.8Z" />
          <path d="M7.7 14.3c.7-2 2.1-3 4.3-3s3.6 1 4.3 3" />
          <path d="M8 14.3h8" />
          <path d="M7 17h10" />
          <path d="M5.5 20h13" />
          <path d="M8.5 17v3" />
          <path d="M15.5 17v3" />
        </svg>
      );
    case "stop":
      return (
        <svg {...commonProps}>
          <path d="M4 20h16" />
          <path d="M6 20V10.5" />
          <path d="M18 20V10.5" />
          <path d="M3.5 10.5h17L17.5 5h-11z" />
          <path d="M7.5 14h9" />
          <path d="M8.5 17h7" />
          <path d="M12 5V3" />
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
