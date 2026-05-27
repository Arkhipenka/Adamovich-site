import Link from "next/link";

import styles from "./MobileNavigation.module.css";
import {
  localeOptions,
  type NavigationChromeLabels,
  supportNavigationItem,
} from "@/data/navigation";
import {
  localizedPath,
  siteConfig,
  type Locale,
  type RouteSegment,
} from "@/config/site";
import { getLocalizedText } from "@/lib/getLocalizedText";

type MobileNavigationLink = {
  segment: RouteSegment;
  label: string;
};

type MobileNavigationProps = {
  id: string;
  open: boolean;
  locale: Locale;
  pathname: string;
  currentSegment: string;
  isScrolled?: boolean;
  labels: NavigationChromeLabels;
  navigationLinks: readonly MobileNavigationLink[];
  onNavigate: () => void;
};

function getLocaleHref(pathname: string, currentLocale: Locale, nextLocale: Locale) {
  const pathWithoutLocale = pathname.replace(new RegExp(`^/${currentLocale}`), "");

  return `/${nextLocale}${pathWithoutLocale || ""}`;
}

export function MobileNavigation({
  currentSegment,
  id,
  locale,
  labels,
  navigationLinks,
  onNavigate,
  isScrolled,
  open,
  pathname,
}: MobileNavigationProps) {
  return (
    <div
      className={[
        styles.mobileNavigation,
        open ? styles.mobileNavigationOpen : "",
        isScrolled ? styles.mobileNavigationScrolled : "",
      ].join(" ")}
      id={id}
    >
      <nav aria-label={labels.mobileNavigation} className={styles.links}>
        {navigationLinks.map((item) => (
          <Link
            aria-current={currentSegment === item.segment ? "page" : undefined}
            href={localizedPath(locale, item.segment)}
            key={item.segment}
            onClick={onNavigate}
          >
            {item.label}
          </Link>
        ))}
        <Link
          aria-current={currentSegment === "support" ? "page" : undefined}
          href={localizedPath(locale, "support")}
          onClick={onNavigate}
        >
          {getLocalizedText(supportNavigationItem.label, locale)}
        </Link>
      </nav>

      <div className={styles.meta}>
        <div aria-label={labels.languageSwitcher}>
          {localeOptions.map((item) => (
            <Link
              aria-current={item.locale === locale ? "page" : undefined}
              href={getLocaleHref(pathname, locale, item.locale)}
              key={item.locale}
              onClick={onNavigate}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <p>{siteConfig.contactEmail}</p>
      </div>
    </div>
  );
}
