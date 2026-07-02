export const locales = ["be", "en", "ru"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "be";

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
  "privacy",
] as const;

export type RouteSegment = (typeof routeSegments)[number];

const contactEmail =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "adamovich1926@gmail.com";
const contactPhone = process.env.NEXT_PUBLIC_CONTACT_PHONE ?? "+48 733-25-90-97";
const contactPhoneHref = process.env.NEXT_PUBLIC_CONTACT_PHONE_HREF ?? "+48733259097";
const contactTelegram =
  process.env.NEXT_PUBLIC_CONTACT_TELEGRAM ?? "t.me/+bXNYZ8mj_mlkNjAy";
const telegramBotUrl =
  process.env.NEXT_PUBLIC_TELEGRAM_BOT_URL ?? "https://t.me/+bXNYZ8mj_mlkNjAy";
const instagramUrl =
  process.env.NEXT_PUBLIC_INSTAGRAM_URL ??
  "https://www.instagram.com/adamovich.ales";
const youtubeUrl =
  process.env.NEXT_PUBLIC_YOUTUBE_URL ??
  "https://www.youtube.com/@AdamovichAles";

export const siteConfig = {
  name: "Ales Adamovich",
  domain: "adamovich.eu",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://adamovich.eu",
  contactEmail,
  contactPhone,
  contactPhoneHref,
  contactTelegram,
  telegramBotUrl,
  audioAppUrl: process.env.NEXT_PUBLIC_AUDIO_APP_URL ?? "",
  supportUrl: process.env.NEXT_PUBLIC_SUPPORT_URL ?? "",
  patreonUrl: process.env.NEXT_PUBLIC_PATREON_URL ?? "",
  contacts: {
    email: contactEmail,
    phone: contactPhone,
    phoneHref: contactPhoneHref,
    telegram: contactTelegram,
    telegramUrl: telegramBotUrl,
    instagramUrl,
    youtubeUrl,
    location: {
      be: "Адрас будзе дададзена пазней",
      en: "Address will be added later",
      ru: "Адрес будет добавлен позже",
    } satisfies Record<Locale, string>,
  },
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
