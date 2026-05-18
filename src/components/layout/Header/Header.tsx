"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

import styles from "./Header.module.css";
import { MobileNavigation } from "@/components/layout/MobileNavigation";
import {
  localeLabels,
  locales,
  localizedPath,
  assetPath,
  type Locale,
  type RouteSegment,
} from "@/config/site";
import type { Dictionary } from "@/i18n/dictionaries";

type HeaderProps = {
  locale: Locale;
  dictionary: Dictionary;
};

const navigationSegments = [
  "biography",
  "bibliography",
  "audio-guide",
  "initiative",
  "contacts",
] as const satisfies readonly RouteSegment[];

const headerLogoByLocale: Record<Locale, string> = {
  be: assetPath("/assets/brand/adamovich-logo-be-dark.png"),
  en: assetPath("/assets/brand/adamovich-logo-en-dark.png"),
  ru: assetPath("/assets/brand/adamovich-logo-ru-dark.png"),
};

const headerLogoAltByLocale: Record<Locale, string> = {
  be: "\u0410\u043b\u0435\u0441\u044c \u0410\u0434\u0430\u043c\u043e\u0432\u0456\u0447",
  en: "Ales Adamovich",
  ru: "\u0410\u043b\u0435\u0441\u044c \u0410\u0434\u0430\u043c\u043e\u0432\u0438\u0447",
};

const compactLogoTextByLocale: Record<Locale, string> = {
  be: "Алесь Адамовіч",
  en: "Ales Adamovich",
  ru: "Алесь Адамович",
};

function getCurrentSegment(pathname: string, locale: Locale) {
  const pathWithoutLocale = pathname.replace(new RegExp(`^/${locale}`), "");

  return pathWithoutLocale.split("/").filter(Boolean)[0] ?? "";
}

function getLocaleHref(pathname: string, currentLocale: Locale, nextLocale: Locale) {
  const pathWithoutLocale = pathname.replace(new RegExp(`^/${currentLocale}`), "");

  return `/${nextLocale}${pathWithoutLocale || ""}`;
}

export function Header({ locale, dictionary }: HeaderProps) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const currentSegment = useMemo(
    () => getCurrentSegment(pathname, locale),
    [locale, pathname],
  );

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
  const handleScroll = () => {
    setIsScrolled(window.scrollY > 80);
  };

  handleScroll();

  window.addEventListener("scroll", handleScroll, { passive: true });

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);

  useEffect(() => {
    document.body.dataset.menuOpen = menuOpen ? "true" : "false";

    return () => {
      delete document.body.dataset.menuOpen;
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.headerScrolled : ""}`}>
      <div className={styles.inner}>
        <Link
          aria-label={headerLogoAltByLocale[locale]}
          className={styles.brand}
          href={localizedPath(locale)}
          onClick={closeMenu}
        >
          <span className={styles.fullLogoWrap} aria-hidden={isScrolled}>
            <Image
              alt={headerLogoAltByLocale[locale]}
              className={styles.logo}
              height={256}
              priority
              src={headerLogoByLocale[locale]}
              width={767}
            />
          </span>
          <span className={styles.compactLogo} aria-hidden={!isScrolled}>
            {compactLogoTextByLocale[locale]}
          </span>
        </Link>

        <nav className={styles.nav} aria-label={dictionary.common.primaryNavigation}>
          {navigationSegments.map((segment) => (
            <Link
              aria-current={currentSegment === segment ? "page" : undefined}
              className={styles.navLink}
              href={localizedPath(locale, segment)}
              key={segment}
            >
              {dictionary.navigation[segment]}
            </Link>
          ))}
        </nav>

        <div className={styles.actions}>
          <Link
            aria-current={currentSegment === "support" ? "page" : undefined}
            className={styles.supportLink}
            href={localizedPath(locale, "support")}
          >
            {dictionary.common.supportProject}
          </Link>
          <div className={styles.localeSwitcher} aria-label={dictionary.common.languageSwitcher}>
            {locales.map((item) => (
              <Link
                aria-current={item === locale ? "page" : undefined}
                href={getLocaleHref(pathname, locale, item)}
                key={item}
              >
                {localeLabels[item]}
              </Link>
            ))}
          </div>
        </div>

        <button
          aria-controls="mobile-navigation"
          aria-expanded={menuOpen}
          aria-label={
            menuOpen
              ? dictionary.common.closeNavigation
              : dictionary.common.openNavigation
          }
          className={styles.menuToggle}
          onClick={() => setMenuOpen((value) => !value)}
          type="button"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <MobileNavigation
        currentSegment={currentSegment}
        dictionary={dictionary}
        id="mobile-navigation"
        locale={locale}
        navigationSegments={navigationSegments}
        onNavigate={closeMenu}
        open={menuOpen}
        pathname={pathname}
      />
    </header>
  );
}
