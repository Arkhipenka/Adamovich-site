"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";

import styles from "./Header.module.css";
import { MobileNavigation } from "@/components/layout/MobileNavigation";
import {
  localeOptions,
  navigationItems,
  supportNavigationItem,
} from "@/data/navigation";
import {
  localizedPath,
  assetPath,
  type Locale,
  type RouteSegment,
} from "@/config/site";
import type { Dictionary } from "@/i18n/dictionaries";
import { getLocalizedText } from "@/lib/getLocalizedText";

type HeaderProps = {
  locale: Locale;
  dictionary: Dictionary;
};

type HeaderNavigationLink = {
  segment: HeaderRouteSegment;
  label: string;
};

const headerRouteSegments = [
  "biography",
  "bibliography",
  "audio-guide",
  "initiative",
  "contacts",
] as const satisfies readonly RouteSegment[];

type HeaderRouteSegment = (typeof headerRouteSegments)[number];

function getRouteSegmentFromHref(href: string) {
  const segment = href.replace(/^\//, "").split("/")[0] ?? "";

  return headerRouteSegments.includes(segment as HeaderRouteSegment)
    ? (segment as HeaderRouteSegment)
    : null;
}

function getHeaderNavigationLinks(locale: Locale): HeaderNavigationLink[] {
  return navigationItems
    .flatMap((item) => item.children ?? [item])
    .map((item) => {
      const segment = getRouteSegmentFromHref(item.href);

      if (!segment) return null;

      return {
        segment,
        label: getLocalizedText(item.label, locale),
      };
    })
    .filter((item): item is HeaderNavigationLink => Boolean(item));
}

const headerLogoByLocale: Record<Locale, string> = {
  be: assetPath("/assets/brand/adamovich-logo-portrait.png"),
  en: assetPath("/assets/brand/adamovich-logo-portrait.png"),
  ru: assetPath("/assets/brand/adamovich-logo-portrait.png"),
};

const headerLogoAltByLocale: Record<Locale, string> = {
  be: "Алесь Адамовіч",
  en: "Ales Adamovich",
  ru: "Алесь Адамович",
};

const compactLogoTextByLocale: Record<Locale, string> = {
  be: "Алесь Адамовіч",
  en: "Ales Adamovich",
  ru: "Алесь Адамович",
};

const headerBrandLabelByLocale: Record<Locale, string> = {
  be: "Алесь Адамовіч",
  en: "Ales Adamovich",
  ru: "Алесь Адамович",
};

const headerBrandTextByLocale: Record<Locale, string> = {
  be: "Алесь\nАдамовіч",
  en: "Ales\nAdamovich",
  ru: "Алесь\nАдамович",
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
  const [isScrolled, setIsScrolled] = useState(false);
  const menuOpenRef = useRef(menuOpen);
  const currentSegment = useMemo(
    () => getCurrentSegment(pathname, locale),
    [locale, pathname],
  );
  const isHeroHeader = currentSegment === "audio-guide";
  const isPaperHeader = currentSegment !== "" && currentSegment !== "audio-guide";
  const navigationLinks = useMemo(
    () => getHeaderNavigationLinks(locale),
    [locale],
  );

  useEffect(() => {
    menuOpenRef.current = menuOpen;
  }, [menuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      if (menuOpenRef.current) return;

      setIsScrolled(window.scrollY > 80);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!menuOpen) {
      document.body.removeAttribute("data-menu-open");
      document.body.style.overflow = "";

      return;
    }

    const scrollY = window.scrollY;
    const previousHtmlOverflow = document.documentElement.style.overflow;
    const previousBodyOverflow = document.body.style.overflow;
    const previousBodyPosition = document.body.style.position;
    const previousBodyTop = document.body.style.top;
    const previousBodyLeft = document.body.style.left;
    const previousBodyRight = document.body.style.right;
    const previousBodyWidth = document.body.style.width;

    document.body.setAttribute("data-menu-open", "true");
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.left = "0";
    document.body.style.right = "0";
    document.body.style.width = "100%";

    return () => {
      document.body.removeAttribute("data-menu-open");
      document.documentElement.style.overflow = previousHtmlOverflow;
      document.body.style.overflow = previousBodyOverflow;
      document.body.style.position = previousBodyPosition;
      document.body.style.top = previousBodyTop;
      document.body.style.left = previousBodyLeft;
      document.body.style.right = previousBodyRight;
      document.body.style.width = previousBodyWidth;
      window.scrollTo(0, scrollY);
    };
  }, [menuOpen]);

  useEffect(() => {
    const desktopQuery = window.matchMedia("(min-width: 1181px)");
    const handleDesktopChange = () => {
      if (desktopQuery.matches) {
        setMenuOpen(false);
      }
    };

    handleDesktopChange();
    desktopQuery.addEventListener("change", handleDesktopChange);

    return () => {
      desktopQuery.removeEventListener("change", handleDesktopChange);
    };
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={[
        styles.header,
        isHeroHeader ? styles.headerOnHero : "",
        isPaperHeader ? styles.headerOnPaper : "",
        isScrolled ? styles.headerScrolled : "",
      ].join(" ")}
    >
      <div className={styles.inner}>
        <Link
          aria-label={headerBrandLabelByLocale[locale]}
          className={styles.brand}
          href={localizedPath(locale)}
          onClick={closeMenu}
        >
          <span className={styles.logoComposition}>
            <Image
              alt={headerBrandLabelByLocale[locale]}
              className={styles.logoPortrait}
              height={256}
              priority
              src={headerLogoByLocale[locale]}
              width={256}
            />
            <span className={styles.logoDivider} aria-hidden="true" />
            <span className={styles.logoText}>{headerBrandTextByLocale[locale]}</span>
          </span>
        </Link>

        <nav className={styles.nav} aria-label={dictionary.common.primaryNavigation}>
          {navigationLinks.map((item) => (
            <Link
              aria-current={currentSegment === item.segment ? "page" : undefined}
              className={styles.navLink}
              href={localizedPath(locale, item.segment)}
              key={item.segment}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className={styles.actions}>
          <Link
            aria-current={currentSegment === "support" ? "page" : undefined}
            className={styles.supportLink}
            href={localizedPath(locale, "support")}
          >
            {getLocalizedText(supportNavigationItem.label, locale)}
          </Link>
          <div className={styles.localeSwitcher} aria-label={dictionary.common.languageSwitcher}>
            {localeOptions.map((item) => (
              <Link
                aria-current={item.locale === locale ? "page" : undefined}
                href={getLocaleHref(pathname, locale, item.locale)}
                key={item.locale}
              >
                {item.label}
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
        isScrolled={isScrolled}
        locale={locale}
        navigationLinks={navigationLinks}
        onNavigate={closeMenu}
        open={menuOpen}
        pathname={pathname}
      />
    </header>
  );
}
