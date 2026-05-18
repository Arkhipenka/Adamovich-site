import "server-only";

import type { Locale, RouteSegment } from "@/config/site";
import { isLocale } from "@/config/site";

export type Dictionary = {
  metadata: {
    title: string;
    description: string;
  };
  navigation: Record<RouteSegment, string>;
  common: {
    platform: string;
    supportProject: string;
    currentStage: string;
    primaryNavigation: string;
    mobileNavigation: string;
    languageSwitcher: string;
    openNavigation: string;
    closeNavigation: string;
  };
  pages: Record<
    RouteSegment,
    {
      eyebrow: string;
      title: string;
      description: string;
    }
  >;
};

const dictionaries = {
  ru: () => import("./locales/ru").then((module) => module.dictionary),
  be: () => import("./locales/be").then((module) => module.dictionary),
  en: () => import("./locales/en").then((module) => module.dictionary),
} satisfies Record<Locale, () => Promise<Dictionary>>;

export async function getDictionary(locale: string) {
  if (!isLocale(locale)) return null;
  return dictionaries[locale]();
}
