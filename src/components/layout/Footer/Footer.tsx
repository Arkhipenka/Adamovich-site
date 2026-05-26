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
  be: assetPath("/assets/brand/adamovich-logo-be-dark.png"),
  en: assetPath("/assets/brand/adamovich-logo-en-dark.png"),
  ru: assetPath("/assets/brand/adamovich-logo-ru-dark.png"),
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
    location: string;
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
    copyright: "© 2026 Prypynak Adamovich Initiative Group",
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
    copyright: "© 2026 Инициативная группа «Прыпынак Адамовіча»",
    navigationTitle: "Навигация",
    contactsTitle: "Контакты",
    followTitle: "Социальные сети",
    supportedTitle: "При поддержке",
    rights: "Все права защищены",
    privacy: "Политика конфиденциальности",
    terms: "Условия использования",
    location: "Польша",
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

export function Footer({ locale = defaultLocale }: FooterProps) {
  const content = footerContentByLocale[locale];

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brandBlock}>
          <Link
            aria-label={content.brandTitle}
            className={styles.brand}
            href={localizedPath(locale)}
          >
            <Image
              alt={content.brandTitle}
              className={styles.logo}
              height={256}
              priority={false}
              src={footerLogoByLocale[locale]}
              width={767}
            />
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
              <a className={styles.footerLink} href={`mailto:${siteConfig.contactEmail}`}>
                {siteConfig.contactEmail}
              </a>
            </li>
            <li>
              <a className={styles.footerLink} href="tel:+48733259097">
                +48 733 259 097
              </a>
            </li>
            <li>{content.location}</li>
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
                  {item.shortLabel}
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
