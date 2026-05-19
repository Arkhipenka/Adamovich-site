import { localizedPath, type Locale } from "@/config/site";

export function localizedHref(locale: Locale, href: string) {
  if (
    !href ||
    href === "#" ||
    href.startsWith("http") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:")
  ) {
    return href;
  }

  const normalizedHref = href.startsWith("/") ? href : `/${href}`;

  if (normalizedHref === "/") {
    return localizedPath(locale);
  }

  return `/${locale}${normalizedHref}`;
}
