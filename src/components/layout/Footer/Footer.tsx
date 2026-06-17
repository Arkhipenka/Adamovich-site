import Image from "next/image";
import Link from "next/link";

import styles from "./Footer.module.css";
import {
  assetPath,
  defaultLocale,
  localizedPath,
  siteConfig,
  type Locale,
  type RouteSegment,
} from "@/config/site";

type FooterProps = {
  locale?: Locale;
};

type FooterNavItem = {
  label: string;
  segment: RouteSegment;
};

const footerLogoByLocale: Record<Locale, string> = {
  be: assetPath("/assets/brand/adamovich-logo-portrait.png"),
  en: assetPath("/assets/brand/adamovich-logo-portrait.png"),
  ru: assetPath("/assets/brand/adamovich-logo-portrait.png"),
};

const footerBrandLabelByLocale: Record<Locale, string> = {
  be: "Алесь Адамовіч",
  en: "Ales Adamovich",
  ru: "Алесь Адамович",
};

const footerBrandTextByLocale: Record<Locale, string> = {
  be: "Алесь\nАдамовіч",
  en: "Ales\nAdamovich",
  ru: "Алесь\nАдамович",
};

const footerContentByLocale: Record<
  Locale,
  {
    brandTitle: string;
    copyright: string;
    navigationTitle: string;
    contactsTitle: string;
    followTitle: string;
    supportedTitle: string;
    rights: string;
    privacy: string;
    terms: string;
    navigation: FooterNavItem[];
  }
> = {
  be: {
    brandTitle: "Алесь Адамовіч",
    copyright: "© 2026 Ініцыятыўная група «Прыпынак Адамовіча»",
    navigationTitle: "Навігацыя",
    contactsTitle: "Кантакты",
    followTitle: "Сацыяльныя сеткі",
    supportedTitle: "Пры падтрымцы",
    rights: "Усе правы абаронены",
    privacy: "Палітыка прыватнасці",
    terms: "Умовы выкарыстання",
    navigation: [
      { label: "Біяграфія", segment: "biography" },
      { label: "Бібліяграфія", segment: "bibliography" },
      { label: "Аўдыягід", segment: "audio-guide" },
      { label: "Аб ініцыятыве", segment: "initiative" },
      { label: "Кантакты", segment: "contacts" },
      { label: "Падтрымаць праект", segment: "support" },
    ],
  },
  en: {
    brandTitle: "Ales Adamovich",
    copyright: "© 2026 Prypynak Adamovich Initiative Group",
    navigationTitle: "Navigation",
    contactsTitle: "Contacts",
    followTitle: "Follow us",
    supportedTitle: "Supported by",
    rights: "All rights reserved",
    privacy: "Privacy Policy",
    terms: "Terms of Use",
    navigation: [
      { label: "Biography", segment: "biography" },
      { label: "Bibliography", segment: "bibliography" },
      { label: "Audio Guide", segment: "audio-guide" },
      { label: "Initiative", segment: "initiative" },
      { label: "Contacts", segment: "contacts" },
      { label: "Support Project", segment: "support" },
    ],
  },
  ru: {
    brandTitle: "Алесь Адамович",
    copyright: "© 2026 Инициативная группа «Прыпынак Адамовіча»",
    navigationTitle: "Навигация",
    contactsTitle: "Контакты",
    followTitle: "Социальные сети",
    supportedTitle: "При поддержке",
    rights: "Все права защищены",
    privacy: "Политика конфиденциальности",
    terms: "Условия использования",
    navigation: [
      { label: "Биография", segment: "biography" },
      { label: "Библиография", segment: "bibliography" },
      { label: "Аудиогид", segment: "audio-guide" },
      { label: "Об инициативе", segment: "initiative" },
      { label: "Контакты", segment: "contacts" },
      { label: "Поддержать проект", segment: "support" },
    ],
  },
};

const socialLinks = [
  { label: "Telegram", icon: "telegram", href: "#" },
  { label: "Facebook", icon: "facebook", href: "#" },
  { label: "Instagram", icon: "instagram", href: "#" },
  { label: "YouTube", icon: "youtube", href: "#" },
];

type SocialIconName = (typeof socialLinks)[number]["icon"];

function SocialIcon({ name }: { name: SocialIconName }) {
  const commonProps = {
    "aria-hidden": true,
    fill: "none",
    height: 18,
    stroke: "currentColor",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    strokeWidth: 1.8,
    viewBox: "0 0 24 24",
    width: 18,
  };

  switch (name) {
    case "telegram":
      return (
        <svg {...commonProps}>
          <path d="M21 3 3 10.2l7.2 2.4L17 7.4l-5.1 6.4.2 6.2 3.5-4 4.4 3L21 3Z" />
        </svg>
      );
    case "facebook":
      return (
        <svg {...commonProps}>
          <path d="M14 8h2V4h-2.4A4.6 4.6 0 0 0 9 8.6V11H6v4h3v5h4v-5h3l.5-4H13V8.8c0-.5.4-.8 1-.8Z" />
        </svg>
      );
    case "instagram":
      return (
        <svg {...commonProps}>
          <rect height="16" rx="4" width="16" x="4" y="4" />
          <circle cx="12" cy="12" r="3.2" />
          <path d="M16.8 7.2h.01" />
        </svg>
      );
    case "youtube":
      return (
        <svg {...commonProps}>
          <path d="M21 12s0-3.1-.4-4.4a2.6 2.6 0 0 0-1.8-1.8C17.4 5.4 12 5.4 12 5.4s-5.4 0-6.8.4a2.6 2.6 0 0 0-1.8 1.8C3 8.9 3 12 3 12s0 3.1.4 4.4a2.6 2.6 0 0 0 1.8 1.8c1.4.4 6.8.4 6.8.4s5.4 0 6.8-.4a2.6 2.6 0 0 0 1.8-1.8C21 15.1 21 12 21 12Z" />
          <path d="m10.4 9.3 4.2 2.7-4.2 2.7V9.3Z" />
        </svg>
      );
  }
}

export function Footer({ locale = defaultLocale }: FooterProps) {
  const content = footerContentByLocale[locale];

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brandBlock}>
          <Link
            aria-label={footerBrandLabelByLocale[locale]}
            className={styles.brand}
            href={localizedPath(locale)}
          >
            <span className={styles.logoComposition}>
              <Image
                alt={footerBrandLabelByLocale[locale]}
                className={styles.logoPortrait}
                height={256}
                priority={false}
                src={footerLogoByLocale[locale]}
                width={256}
              />
              <span className={styles.logoDivider} aria-hidden="true" />
              <span className={styles.logoText}>{footerBrandTextByLocale[locale]}</span>
            </span>
          </Link>
          <p className={styles.brandText}>{content.copyright}</p>
        </div>

        <nav className={styles.column} aria-label={content.navigationTitle}>
          <h2 className={styles.columnTitle}>{content.navigationTitle}</h2>
          <ul className={styles.links}>
            {content.navigation.map((item) => (
              <li key={item.segment}>
                <Link
                  className={styles.footerLink}
                  href={localizedPath(locale, item.segment)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.column}>
          <h2 className={styles.columnTitle}>{content.contactsTitle}</h2>
          <ul className={styles.contactsList}>
            <li>
              <a className={styles.footerLink} href={`mailto:${siteConfig.contacts.email}`}>
                {siteConfig.contacts.email}
              </a>
            </li>
            <li>
              <a className={styles.footerLink} href={`tel:${siteConfig.contacts.phoneHref}`}>
                {siteConfig.contacts.phone}
              </a>
            </li>
            <li>{siteConfig.contacts.location[locale]}</li>
          </ul>

          <h2 className={styles.socialTitle}>{content.followTitle}</h2>
          <ul className={styles.socials}>
            {socialLinks.map((item) => (
              <li key={item.label}>
                <a
                  aria-label={item.label}
                  className={styles.socialLink}
                  href={item.href}
                >
                  <SocialIcon name={item.icon} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.column}>
          <h2 className={styles.columnTitle}>{content.supportedTitle}</h2>
          <div className={styles.supportLogos}>
            <Image
              alt="Funded by the European Union"
              className={styles.supportLogoEu}
              height={919}
              src={assetPath("/assets/brand/eu-logo.png")}
              unoptimized
              width={4125}
            />
            <Image
              alt="ArtPower Belarus"
              className={styles.supportLogoArtpower}
              height={731}
              src={assetPath("/assets/brand/artpower-logo.svg")}
              unoptimized
              width={731}
            />
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>{content.rights}</p>
        <div className={styles.legalLinks}>
          <a className={styles.legalLink} href="#">
            {content.privacy}
          </a>
          <a className={styles.legalLink} href="#">
            {content.terms}
          </a>
        </div>
      </div>
    </footer>
  );
}
