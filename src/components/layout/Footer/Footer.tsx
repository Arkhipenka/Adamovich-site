import Image from "next/image";
import Link from "next/link";

import styles from "./Footer.module.css";
import {
  defaultLocale,
  localizedPath,
  assetPath,
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
  be: assetPath("/assets/brand/logo-footer-by.svg"),
  en: assetPath("/assets/brand/logo-footer-en.svg"),
  ru: assetPath("/assets/brand/logo-footer-ru.svg"),
};

const footerLogoFallbackByLocale: Record<Locale, string> = {
  be: assetPath("/assets/brand/adamovich-logo-be-dark.png"),
  en: assetPath("/assets/brand/adamovich-logo-en-dark.png"),
  ru: assetPath("/assets/brand/adamovich-logo-ru-dark.png"),
};

const availableFooterLogos = new Set<string>();

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
    location: string;
    navigation: FooterNavItem[];
  }
> = {
  be: {
    brandTitle: "Алесь Адамовіч",
    copyright: "© 2026 Ініцыатыўная группа Прыпынак Адамовіча",
    navigationTitle: "Навігацыя",
    contactsTitle: "Кантакты",
    followTitle: "Сацыяльныя сеткі",
    supportedTitle: "Пры падтрымцы",
    rights: "Усе правы абаронены",
    privacy: "Палітыка прыватнасці",
    terms: "Умовы выкарыстання",
    location: "Польшча",
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
    copyright: "© 2026 Ales Adamovich Initiative Group",
    navigationTitle: "Navigation",
    contactsTitle: "Contacts",
    followTitle: "Follow us",
    supportedTitle: "Supported by",
    rights: "All rights reserved",
    privacy: "Privacy Policy",
    terms: "Terms of Use",
    location: "Poland",
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
    copyright: "© 2026 Инициативная группа Прыпынак Адамовіча",
    navigationTitle: "Навигация",
    contactsTitle: "Контакты",
    followTitle: "Социальные сети",
    supportedTitle: "При поддержке",
    rights: "Все права защищены",
    privacy: "Политика конфиденциальности",
    terms: "Условия использования",
    location: "Польшча",
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
  { label: "Telegram", shortLabel: "TG", href: "#" },
  { label: "Facebook", shortLabel: "FB", href: "#" },
  { label: "Instagram", shortLabel: "IG", href: "#" },
  { label: "YouTube", shortLabel: "YT", href: "#" },
];

const supportLogos = [
  {
    alt: "Funded by the European Union",
    height: 919,
    src: assetPath("/assets/brand/eu-logo.png"),
    width: 4125,
  },
  {
    alt: "ArtPower Belarus",
    height: 731,
    src: assetPath("/assets/brand/artpower-logo.svg"),
    width: 731,
  },
];

function getFooterLogoSrc(locale: Locale) {
  const candidate = footerLogoByLocale[locale];

  return availableFooterLogos.has(candidate)
    ? candidate
    : footerLogoFallbackByLocale[locale];
}

export function Footer({ locale = defaultLocale }: FooterProps) {
  const content = footerContentByLocale[locale];

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.columns}>
          <div className={styles.brand}>
            <Link href={localizedPath(locale)} aria-label={content.brandTitle}>
              <Image
                alt={content.brandTitle}
                className={styles.logo}
                height={256}
                src={getFooterLogoSrc(locale)}
                width={767}
              />
            </Link>
            <div className={styles.brandText}>
              <p>{content.copyright}</p>
            </div>
          </div>

          <nav className={styles.column} aria-label={content.navigationTitle}>
            <h2 className={styles.columnTitle}>{content.navigationTitle}</h2>
            <ul className={styles.navList}>
              {content.navigation.map((item) => (
                <li key={item.segment}>
                  <Link className={styles.navLink} href={localizedPath(locale, item.segment)}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className={styles.column}>
            <h2 className={styles.columnTitle}>{content.contactsTitle}</h2>
            <ul className={styles.contactList}>
              <li>
                <a className={styles.contactLink} href={`mailto:${siteConfig.contactEmail}`}>
                  {siteConfig.contactEmail}
                </a>
              </li>
              <li>
                <a className={styles.contactLink} href="tel:+48733259097">
                  +48 733 259 097
                </a>
              </li>
              <li>{content.location}</li>
            </ul>
          </div>

          <div className={styles.column}>
            <h2 className={styles.columnTitle}>{content.followTitle}</h2>
            <ul className={styles.socialList}>
              {socialLinks.map((item) => (
                <li key={item.label}>
                  <a
                    aria-label={item.label}
                    className={styles.socialLink}
                    href={item.href}
                  >
                    {item.shortLabel}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.column}>
            <h2 className={styles.columnTitle}>{content.supportedTitle}</h2>
            <div className={styles.supportLogos}>
              {supportLogos.map((item) => (
                <div className={styles.supportLogo} key={item.alt}>
                  <Image
                    alt={item.alt}
                    height={item.height}
                    src={item.src}
                    unoptimized
                    width={item.width}
                  />
                </div>
              ))}
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
      </div>
    </footer>
  );
}
