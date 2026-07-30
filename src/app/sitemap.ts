import type { MetadataRoute } from "next";

import {
  defaultLocale,
  locales,
  routeSegments,
  siteConfig,
  type Locale,
} from "@/config/site";
import { localePath } from "@/lib/seo";
import { getPublishedWorks } from "@/lib/works";

export const dynamic = "force-static";

const lastModified = new Date("2026-06-28");

function absoluteUrl(path: string) {
  return new URL(path, siteConfig.url).toString();
}

function localizedAbsoluteUrl(locale: Locale, segment = "") {
  return absoluteUrl(localePath(locale, segment));
}

function languageAlternates(segment = "") {
  return {
    ...Object.fromEntries(
      locales.map((locale) => [locale, localizedAbsoluteUrl(locale, segment)]),
    ),
    "x-default": localizedAbsoluteUrl(defaultLocale, segment),
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = routeSegments.flatMap((segment) =>
    locales.map((locale) => ({
      url: localizedAbsoluteUrl(locale, segment),
      lastModified,
      changeFrequency: segment ? "monthly" : "weekly",
      priority: segment ? 0.75 : 1,
      alternates: {
        languages: languageAlternates(segment),
      },
    })),
  ) satisfies MetadataRoute.Sitemap;

  const workPages = getPublishedWorks().flatMap((work) =>
    locales.map((locale) => {
      const segment = `bibliography/${work.slug}`;

      return {
        url: localizedAbsoluteUrl(locale, segment),
        lastModified,
        changeFrequency: "monthly",
        priority: 0.64,
        alternates: {
          languages: languageAlternates(segment),
        },
      };
    }),
  ) satisfies MetadataRoute.Sitemap;

  return [...staticPages, ...workPages];
}
