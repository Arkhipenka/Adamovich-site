import type { Locale } from "@/types/common.types";

export const siteConfig = {
  name: {
    be: "Алесь Адамовіч",
    ru: "Алесь Адамович",
    en: "Ales Adamovich",
  },
  description: {
    be: "Культурная лічбавая платформа пра Алеся Адамовіча, яго спадчыну, кнігі, памяць і дакументальную культуру.",
    ru: "Культурная цифровая платформа об Алесе Адамовиче, его наследии, книгах, памяти и документальной культуре.",
    en: "A cultural digital platform about Ales Adamovich, his legacy, books, memory and documentary culture.",
  },
  url: "https://arkhipenka.github.io/Adamovich-site",
  defaultLocale: "ru" as Locale,
  supportedLocales: ["be", "ru", "en"] as Locale[],
  contacts: {
    email: "info@adamovich.eu",
  },
};
