export const locales = ["be", "en", "ru"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "ru";

export const localeLabels: Record<Locale, string> = {
  be: "BY",
  en: "EN",
  ru: "RU",
};

export const basePath =
  process.env.NEXT_PUBLIC_BASE_PATH?.replace(/\/$/, "") ?? "";

export const routeSegments = [
  "",
  "biography",
  "bibliography",
  "audio-guide",
  "initiative",
  "contacts",
  "support",
] as const;

export type RouteSegment = (typeof routeSegments)[number];

export const siteConfig = {
  name: "Ales Adamovich",
  domain: "adamovich.eu",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://adamovich.eu",
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "info@adamovich.eu",
  telegramBotUrl: process.env.NEXT_PUBLIC_TELEGRAM_BOT_URL ?? "",
  audioAppUrl: process.env.NEXT_PUBLIC_AUDIO_APP_URL ?? "",
  supportUrl: process.env.NEXT_PUBLIC_SUPPORT_URL ?? "",
};

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function localizedPath(locale: Locale, segment: RouteSegment = "") {
  return segment ? `/${locale}/${segment}` : `/${locale}`;
}

export function assetPath(path: string) {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  return basePath ? `${basePath}${normalizedPath}` : normalizedPath;
}
