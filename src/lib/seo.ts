import type { Metadata } from "next";

import { defaultLocale, locales, type Locale } from "@/config/site";

export function localePath(locale: Locale, segment = "") {
  const normalizedSegment = segment.replace(/^\/+|\/+$/g, "");

  return normalizedSegment
    ? `/${locale}/${normalizedSegment}/`
    : `/${locale}/`;
}

export function localizedAlternates(locale: Locale, segment = "") {
  const languages = {
    ...Object.fromEntries(
      locales.map((alternateLocale) => [
        alternateLocale,
        localePath(alternateLocale, segment),
      ]),
    ),
    "x-default": localePath(defaultLocale, segment),
  };

  return {
    canonical: localePath(locale, segment),
    languages,
  } satisfies Metadata["alternates"];
}
