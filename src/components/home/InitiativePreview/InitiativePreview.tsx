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
          <path d="M4 7h16" />
          <path d="M6 7v13h12V7" />
          <path d="M8 4h8l2 3H6l2-3Z" />
          <path d="M9 11h6" />
          <path d="M9 15h4" />
        </svg>
      );
    case "audio":
      return (
        <svg {...commonProps}>
          <path d="M5 12v.01" />
          <path d="M9 9v6" />
          <path d="M13 6v12" />
          <path d="M17 9v6" />
          <path d="M21 12v.01" />
          <path d="M3 17a9 9 0 0 0 18 0" />
        </svg>
      );
    case "memorial":
      return (
        <svg {...commonProps}>
          <path d="M12 4v12" />
          <path d="M8 16h8" />
          <path d="M6 20h12" />
          <path d="M9 8h6" />
          <path d="M10 4h4" />
        </svg>
      );
    case "stop":
      return (
        <svg {...commonProps}>
          <path d="M5 20V8a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v12" />
          <path d="M3 20h18" />
          <path d="M7 10h10" />
          <path d="M8 14h8" />
          <path d="M8 5V3" />
          <path d="M16 5V3" />
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
