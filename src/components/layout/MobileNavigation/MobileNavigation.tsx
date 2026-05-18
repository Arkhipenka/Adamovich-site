import Link from "next/link";

import styles from "./MobileNavigation.module.css";
import {
  localeLabels,
  locales,
  localizedPath,
  siteConfig,
  type Locale,
  type RouteSegment,
} from "@/config/site";
import type { Dictionary } from "@/i18n/dictionaries";

type MobileNavigationProps = {
  id: string;
  open: boolean;
  locale: Locale;
  pathname: string;
  currentSegment: string;
  dictionary: Dictionary;
  navigationSegments: readonly RouteSegment[];
  onNavigate: () => void;
};

function getLocaleHref(pathname: string, currentLocale: Locale, nextLocale: Locale) {
  const pathWithoutLocale = pathname.replace(new RegExp(`^/${currentLocale}`), "");

  return `/${nextLocale}${pathWithoutLocale || ""}`;
}

export function MobileNavigation({
  currentSegment,
  dictionary,
  id,
  locale,
  navigationSegments,
  onNavigate,
  open,
  pathname,
}: MobileNavigationProps) {
  return (
    <div
      className={`${styles.mobileNavigation} ${
        open ? styles.mobileNavigationOpen : ""
      }`}
      id={id}
    >
      <nav aria-label={dictionary.common.mobileNavigation} className={styles.links}>
        {navigationSegments.map((segment) => (
          <Link
            aria-current={currentSegment === segment ? "page" : undefined}
            href={localizedPath(locale, segment)}
            key={segment}
            onClick={onNavigate}
          >
            {dictionary.navigation[segment]}
          </Link>
        ))}
        <Link
          aria-current={currentSegment === "support" ? "page" : undefined}
          href={localizedPath(locale, "support")}
          onClick={onNavigate}
        >
          {dictionary.common.supportProject}
        </Link>
      </nav>

      <div className={styles.meta}>
        <div aria-label={dictionary.common.languageSwitcher}>
          {locales.map((item) => (
            <Link
              aria-current={item === locale ? "page" : undefined}
              href={getLocaleHref(pathname, locale, item)}
              key={item}
              onClick={onNavigate}
            >
              {localeLabels[item]}
            </Link>
          ))}
        </div>
        <p>{siteConfig.contactEmail}</p>
      </div>
    </div>
  );
}
