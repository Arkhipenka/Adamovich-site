export type Locale = "be" | "ru" | "en";

export type LocalizedText = {
  be?: string;
  ru?: string;
  en?: string;
};

export type RequiredLocalizedText = {
  be: string;
  ru: string;
  en: string;
};

export type LinkItem = {
  label: RequiredLocalizedText;
  href: string;
};

export type ImageAsset = {
  src: string;
  alt: RequiredLocalizedText;
};
