import Image from "next/image";

import { assetPath, siteConfig, type Locale } from "@/config/site";
import { audioGuideContent } from "@/data/audioGuide";
import type { Dictionary } from "@/i18n/dictionaries";
import { getLocalizedText } from "@/lib/getLocalizedText";

import { AudioGuideRouteSlider } from "./AudioGuideRouteSlider";
import styles from "./AudioGuidePage.module.css";

type AudioGuidePageProps = {
  dictionary: Dictionary;
  locale: Locale;
};

type IconName =
  | "book"
  | "compass"
  | "headphones"
  | "map"
  | "microphone"
  | "phone"
  | "send";

type PartnerLogoSize = {
  height: number;
  sizes: string;
  width: number;
};

const supportLogoSizes = {
  default: {
    height: 150,
    sizes: "240px",
    width: 240,
  },
  eu: {
    height: 120,
    sizes: "440px",
    width: 440,
  },
} satisfies Record<"default" | "eu", PartnerLogoSize>;

const technicalLogoSize = {
  height: 120,
  sizes: "291px",
  width: 291,
} satisfies PartnerLogoSize;

function Icon({ name }: { name: IconName }) {
  const commonProps = {
    "aria-hidden": true,
    fill: "none",
    height: 24,
    stroke: "currentColor",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    strokeWidth: 1.65,
    viewBox: "0 0 24 24",
    width: 24,
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
    case "compass":
      return (
        <svg {...commonProps}>
          <circle cx="12" cy="12" r="9" />
          <path d="m15.2 8.8-2 4.4-4.4 2 2-4.4 4.4-2Z" />
        </svg>
      );
    case "headphones":
      return (
        <svg {...commonProps}>
          <path d="M4 14v-2a8 8 0 0 1 16 0v2" />
          <path d="M4 14h3v6H5a1 1 0 0 1-1-1v-5Z" />
          <path d="M20 14h-3v6h2a1 1 0 0 0 1-1v-5Z" />
        </svg>
      );
    case "map":
      return (
        <svg {...commonProps}>
          <path d="M12 21s6-5.2 6-11a6 6 0 0 0-12 0c0 5.8 6 11 6 11Z" />
          <circle cx="12" cy="10" r="2.2" />
        </svg>
      );
    case "microphone":
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

function resolveHref(href: string) {
  if (href === "telegram") {
    return siteConfig.telegramBotUrl;
  }

  if (href === "app") {
    return siteConfig.audioAppUrl;
  }

  return href;
}

function isExternalHref(href: string) {
  return href.startsWith("http://") || href.startsWith("https://");
}

function getPartnerLogo(
  logo: string | Record<Locale, string>,
  locale: Locale,
) {
  return typeof logo === "string" ? logo : getLocalizedText(logo, locale);
}

function getSupportLogoSize(partnerId: string) {
  return partnerId === "eu" ? supportLogoSizes.eu : supportLogoSizes.default;
}

function PartnerLogoImage({
  alt,
  className,
  size,
  src,
}: {
  alt: string;
  className: string;
  size: PartnerLogoSize;
  src: string;
}) {
  return (
    <Image
      alt={alt}
      className={className}
      height={size.height}
      loading="lazy"
      sizes={size.sizes}
      src={assetPath(src)}
      width={size.width}
    />
  );
}

function getFeatureIcon(index: number): IconName {
  if (index === 0) return "headphones";
  if (index === 1) return "book";
  return "map";
}

function getUsageIcon(index: number): IconName {
  if (index === 0) return "phone";
  if (index === 1) return "map";
  if (index === 2) return "compass";
  return "headphones";
}

export function AudioGuidePage({ locale }: AudioGuidePageProps) {
  const content = audioGuideContent;

  return (
    <main className={styles.page}>
      <section className={styles.hero} aria-labelledby="audio-guide-title">
        <div className={styles.heroVisual} aria-hidden="true">
          <Image
            alt=""
            className={styles.heroImage}
            fill
            priority
            sizes="100vw"
            src={assetPath(content.hero.image.src)}
          />
        </div>

        <div className={styles.heroInner}>
          <div className={styles.heroContent}>
            <p className={styles.eyebrow}>
              {getLocalizedText(content.hero.eyebrow, locale)}
            </p>
            <h1 id="audio-guide-title" className={styles.heroTitle}>
              {getLocalizedText(content.hero.title, locale)}
            </h1>
            <p className={styles.heroDescription}>
              {getLocalizedText(content.hero.description, locale)}
            </p>

            <div className={styles.heroActions}>
              {content.hero.actions.map((action) => {
                const href = resolveHref(action.href);
                if (!href) return null;

                return (
                  <a
                    className={
                      action.variant === "primary"
                        ? styles.primaryButton
                        : styles.secondaryButton
                    }
                    href={href}
                    key={getLocalizedText(action.label, locale)}
                    rel={isExternalHref(href) ? "noopener noreferrer" : undefined}
                    target={isExternalHref(href) ? "_blank" : undefined}
                  >
                    {action.variant === "primary" ? <Icon name="send" /> : null}
                    {getLocalizedText(action.label, locale)}
                  </a>
                );
              })}
            </div>
            <p className={styles.heroStatus}>
              {getLocalizedText(content.hero.status, locale)}
            </p>
          </div>
        </div>
      </section>

      <section
        className={styles.intro}
        id="about-audio-guide"
        aria-labelledby="audio-guide-intro-title"
      >
        <div className={styles.introInner}>
          <div className={styles.introContent}>
            <h2 id="audio-guide-intro-title" className={styles.sectionTitle}>
              {getLocalizedText(content.intro.title, locale)}
            </h2>
            {content.intro.paragraphs.map((paragraph) => (
              <p key={getLocalizedText(paragraph, locale)}>
                {getLocalizedText(paragraph, locale)}
              </p>
            ))}

            <div className={styles.featureGrid}>
              {content.intro.features.map((feature, index) => (
                <div className={styles.feature} key={feature.id}>
                  <span className={styles.featureIcon}>
                    <Icon name={getFeatureIcon(index)} />
                  </span>
                  <strong>{getLocalizedText(feature.title, locale)}</strong>
                  <span>{getLocalizedText(feature.text, locale)}</span>
                </div>
              ))}
            </div>
          </div>

          <figure className={styles.introFigure}>
            <Image
              alt={getLocalizedText(content.intro.image.alt, locale)}
              className={styles.introImage}
              fill
              sizes="(max-width: 900px) calc(100vw - 40px), 560px"
              src={assetPath(content.intro.image.src)}
            />
          </figure>
        </div>
      </section>

      <section className={styles.creation} aria-labelledby="creation-title">
        <div className={`${styles.sectionInner} ${styles.creationInner}`}>
          <div className={styles.creationIntro}>
            <p className={styles.eyebrow}>
              {getLocalizedText(content.creation.eyebrow, locale)}
            </p>
            <h2 id="creation-title" className={styles.sectionTitle}>
              {getLocalizedText(content.creation.title, locale)}
            </h2>
            <div className={styles.creationLead}>
              {content.creation.lead.map((paragraph) => (
                <p key={getLocalizedText(paragraph, locale)}>
                  {getLocalizedText(paragraph, locale)}
                </p>
              ))}
            </div>
          </div>

          <article className={styles.voiceFeature}>
            <div className={styles.voicePhoto}>
              <Image
                alt={getLocalizedText(content.creation.voice.image.alt, locale)}
                className={styles.voiceImage}
                fill
                loading="lazy"
                sizes="(max-width: 900px) calc(100vw - 40px), 360px"
                src={assetPath(content.creation.voice.image.src)}
              />
            </div>

            <div className={styles.voiceContent}>
              <p className={styles.eyebrow}>
                {getLocalizedText(content.creation.voice.eyebrow, locale)}
              </p>
              <h3>{getLocalizedText(content.creation.voice.name, locale)}</h3>
              <p className={styles.voiceRole}>
                {getLocalizedText(content.creation.voice.role, locale)}
              </p>
              <p className={styles.voiceText}>
                {getLocalizedText(content.creation.voice.text, locale)}
              </p>
            </div>
          </article>

          <p className={styles.audioGuideNote}>
            {getLocalizedText(content.creation.note, locale)}
          </p>
        </div>
      </section>

      <section className={styles.usage} aria-labelledby="usage-title">
        <div className={styles.sectionInner}>
          <h2 id="usage-title" className={styles.sectionTitle}>
            {getLocalizedText(content.usage.title, locale)}
          </h2>
          <div className={styles.usageGrid}>
            {content.usage.steps.map((step, index) => (
              <article className={styles.usageCard} key={step.id}>
                <span className={styles.usageNumber}>{step.number}</span>
                <span className={styles.usageIcon}>
                  <Icon name={getUsageIcon(index)} />
                </span>
                <h3>{getLocalizedText(step.title, locale)}</h3>
                <p>{getLocalizedText(step.text, locale)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.route} aria-labelledby="route-title">
        <div className={styles.sectionInner}>
          <h2 id="route-title" className={styles.sectionTitle}>
            {getLocalizedText(content.route.title, locale)}
          </h2>
          <AudioGuideRouteSlider locale={locale} points={content.route.points} />
        </div>
      </section>

      <section className={styles.listen} id="listen" aria-labelledby="listen-title">
        <div className={styles.sectionInner}>
          <h2 id="listen-title" className={styles.sectionTitle}>
            {getLocalizedText(content.listen.title, locale)}
          </h2>
          <div className={styles.listenGrid}>
            {content.listen.options.map((option) => {
              const href = resolveHref(option.href);
              return (
                <article
                  className={[
                    styles.listenCard,
                    option.tone === "telegram" ? styles.listenCardTelegram : "",
                    option.tone === "app" ? styles.listenCardApp : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                  key={option.id}
                >
                  <div className={styles.listenIcon}>
                    <Icon name={option.tone === "telegram" ? "send" : "phone"} />
                  </div>
                  <div className={styles.listenText}>
                    <h3>{getLocalizedText(option.title, locale)}</h3>
                    <p>{getLocalizedText(option.text, locale)}</p>
                    {href ? (
                      <a
                        className={styles.listenLink}
                        href={href}
                        rel={isExternalHref(href) ? "noopener noreferrer" : undefined}
                        target={isExternalHref(href) ? "_blank" : undefined}
                      >
                        {getLocalizedText(option.label, locale)}
                      </a>
                    ) : (
                      <span className={styles.listenPending}>
                        {getLocalizedText(content.listen.unavailableLabel, locale)}
                      </span>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className={styles.partners} aria-labelledby="partners-title">
        <div className={`${styles.sectionInner} ${styles.partnersInner}`}>
          <p className={styles.eyebrow}>
            {getLocalizedText(content.partners.eyebrow, locale)}
          </p>
          <h2 id="partners-title" className={styles.partnersTitle}>
            {getLocalizedText(content.partners.title, locale)}
          </h2>

          <div className={styles.partnerSupportGroup}>
            <p className={styles.partnerLabel}>
              {getLocalizedText(content.partners.supportLabel, locale)}
            </p>
            <div className={styles.partnerLogoRow}>
              {content.partners.items.map((partner) => {
                const isEuPartner = partner.id === "eu";

                return (
                  <article
                    className={[
                      styles.partnerLogoItem,
                      isEuPartner ? styles.partnerLogoItemEu : "",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                    key={partner.id}
                  >
                    <PartnerLogoImage
                      alt={getLocalizedText(partner.name, locale)}
                      className={styles.partnerLogoImage}
                      size={getSupportLogoSize(partner.id)}
                      src={getPartnerLogo(partner.logo, locale)}
                    />
                  </article>
                );
              })}
            </div>
          </div>

          <div className={styles.partnerDivider} aria-hidden="true" />

          <div className={styles.partnerSupportGroup}>
            <p className={styles.partnerLabel}>
              {getLocalizedText(content.partners.technicalLabel, locale)}
            </p>
            <div className={styles.technicalLogoRow}>
              {content.partners.technicalItems.map((partner) => {
                const logo = getPartnerLogo(partner.logo, locale);

                return (
                  <article className={styles.technicalLogoItem} key={partner.id}>
                    {logo ? (
                      <PartnerLogoImage
                        alt={getLocalizedText(partner.name, locale)}
                        className={styles.technicalLogoImage}
                        size={technicalLogoSize}
                        src={logo}
                      />
                    ) : (
                      <span className={styles.technicalLogoName}>
                        {getLocalizedText(partner.name, locale)}
                      </span>
                    )}
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
