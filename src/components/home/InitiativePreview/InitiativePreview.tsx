import Image from "next/image";
import Link from "next/link";

import styles from "./InitiativePreview.module.css";
import { assetPath, localizedPath, type Locale } from "@/config/site";

type InitiativePreviewProps = {
  locale?: Locale;
};

type FeatureIcon = "archive" | "book" | "map" | "voice";

type InitiativeFeature = {
  title: string;
  text: string;
  icon: FeatureIcon;
};

type InitiativeContent = {
  eyebrow: string;
  title: string;
  description: string;
  linkLabel: string;
  imageAlt: string;
  features: InitiativeFeature[];
};

const contentByLocale: Record<Locale, InitiativeContent> = {
  be: {
    eyebrow: "Ініцыятыва",
    title: "Захоўваць. Даследаваць. Натхняць.",
    description:
      "Наша місія — захоўваць літаратурную і культурную спадчыну Алеся Адамовіча, рабіць яе даступнай новым пакаленням і развіваць лічбавыя інструменты для адукацыі, даследаванняў і памяці.",
    linkLabel: "Даведацца больш",
    imageAlt: "Месца, звязанае з ініцыятывай пра Алеся Адамовіча",
    features: [
      {
        title: "Лічбавы архіў",
        text: "Творы, дакументы і архіўныя матэрыялы.",
        icon: "archive",
      },
      {
        title: "Інтэрактыўная мапа",
        text: "Месцы, маршруты і падзеі, звязаныя з Адамовічам.",
        icon: "map",
      },
      {
        title: "Вусная гісторыя",
        text: "Галасы, сведчанні і ўспаміны.",
        icon: "voice",
      },
      {
        title: "Адукацыйныя матэрыялы",
        text: "Матэрыялы для студэнтаў, выкладчыкаў і даследчыкаў.",
        icon: "book",
      },
    ],
  },
  en: {
    eyebrow: "The initiative",
    title: "Preserve. Research. Inspire.",
    description:
      "Our mission is to preserve the literary and cultural heritage of Ales Adamovich, make it accessible to new generations and develop digital tools for education, research and remembrance.",
    linkLabel: "Learn more",
    imageAlt: "Landscape connected with Ales Adamovich initiative",
    features: [
      {
        title: "Digital archive",
        text: "Works, documents and archival materials.",
        icon: "archive",
      },
      {
        title: "Interactive map",
        text: "Places, routes and events connected with Adamovich.",
        icon: "map",
      },
      {
        title: "Oral histories",
        text: "Voices, testimonies and memories.",
        icon: "voice",
      },
      {
        title: "Educational resources",
        text: "Materials for students, teachers and researchers.",
        icon: "book",
      },
    ],
  },
  ru: {
    eyebrow: "Инициатива",
    title: "Сохранять. Исследовать. Вдохновлять.",
    description:
      "Наша миссия — сохранять литературное и культурное наследие Алеся Адамовича, делать его доступным новым поколениям и развивать цифровые инструменты для образования, исследований и памяти.",
    linkLabel: "Подробнее",
    imageAlt: "Место, связанное с инициативой об Алесе Адамовиче",
    features: [
      {
        title: "Цифровой архив",
        text: "Произведения, документы и архивные материалы.",
        icon: "archive",
      },
      {
        title: "Интерактивная карта",
        text: "Места, маршруты и события, связанные с Адамовичем.",
        icon: "map",
      },
      {
        title: "Устная история",
        text: "Голоса, свидетельства и воспоминания.",
        icon: "voice",
      },
      {
        title: "Образовательные материалы",
        text: "Материалы для студентов, преподавателей и исследователей.",
        icon: "book",
      },
    ],
  },
};

const initiativeImage = assetPath("/assets/images/initiative/initiative-preview.webp");

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

export function InitiativePreview({ locale = "en" }: InitiativePreviewProps) {
  const content = contentByLocale[locale];

  return (
    <section className={styles.section} aria-labelledby="initiative-preview-title">
      <div className={styles.inner}>
        <div className={styles.imageColumn}>
          <div className={styles.imageFrame}>
            <Image
              alt={content.imageAlt}
              className={styles.image}
              fill
              sizes="(max-width: 900px) calc(100vw - 40px), (max-width: 1180px) 42vw, 420px"
              src={initiativeImage}
            />
          </div>
        </div>

        <div className={styles.content}>
          <p className={styles.eyebrow}>{content.eyebrow}</p>
          <h2 id="initiative-preview-title" className={styles.title}>
            {content.title}
          </h2>
          <p className={styles.description}>{content.description}</p>
          <Link className={styles.link} href={localizedPath(locale, "initiative")}>
            {content.linkLabel}
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        <ul className={styles.features}>
          {content.features.map((feature) => (
            <li className={styles.feature} key={feature.title}>
              <span className={styles.featureIcon}>
                <Icon name={feature.icon} />
              </span>
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureText}>{feature.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
