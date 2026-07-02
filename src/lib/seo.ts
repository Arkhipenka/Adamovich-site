import type { Metadata } from "next";

import { locales, type Locale } from "@/config/site";

export function localePath(locale: Locale, segment = "") {
  const normalizedSegment = segment.replace(/^\/+|\/+$/g, "");

  return normalizedSegment
    ? `/${locale}/${normalizedSegment}/`
    : `/${locale}/`;
}

export function localizedAlternates(locale: Locale, segment = "") {
  return {
    canonical: localePath(locale, segment),
    languages: Object.fromEntries(
      locales.map((alternateLocale) => [
        alternateLocale,
        localePath(alternateLocale, segment),
      ]),
    ),
  } satisfies Metadata["alternates"];
}
