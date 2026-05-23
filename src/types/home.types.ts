import type { ImageAsset, RequiredLocalizedText } from "./common.types";

export type HomeHeroSlide = {
  id: string;
  eyebrow: RequiredLocalizedText;
  title: RequiredLocalizedText;
  subtitle?: RequiredLocalizedText;
  text?: RequiredLocalizedText;
  quote?: RequiredLocalizedText;
  quoteAuthor?: RequiredLocalizedText;
  image: ImageAsset;
  imageCredit?: RequiredLocalizedText;
  primaryLink: {
    label: RequiredLocalizedText;
    href: string;
  };
  secondaryLink?: {
    label: RequiredLocalizedText;
    href: string;
  };
  tertiaryLink?: {
    label: RequiredLocalizedText;
    href: string;
  };
};

export type AboutWriterContent = {
  eyebrow: RequiredLocalizedText;
  title: RequiredLocalizedText;
  text: RequiredLocalizedText;
  linkLabel: RequiredLocalizedText;
  linkHref: string;
  quote: RequiredLocalizedText;
  quoteAuthor: RequiredLocalizedText;
  quoteSource?: RequiredLocalizedText;
  image: ImageAsset;
};

export type AudioGuideCard = {
  id: string;
  title: RequiredLocalizedText;
  text: RequiredLocalizedText;
  image: ImageAsset;
};

export type AudioGuidePreviewContent = {
  eyebrow: RequiredLocalizedText;
  title: RequiredLocalizedText;
  description: RequiredLocalizedText;
  telegramLabel: RequiredLocalizedText;
  telegramHref: string;
  appLabel: RequiredLocalizedText;
  appHref: string;
  detailsLabel: RequiredLocalizedText;
  detailsHref: string;
  cards: AudioGuideCard[];
};

export type BibliographyPreviewContent = {
  eyebrow: RequiredLocalizedText;
  title: RequiredLocalizedText;
  description: RequiredLocalizedText;
  viewAllLabel: RequiredLocalizedText;
  viewAllHref: string;
};

export type InitiativeFeature = {
  id: string;
  title: RequiredLocalizedText;
  text: RequiredLocalizedText;
};

export type InitiativePreviewContent = {
  eyebrow: RequiredLocalizedText;
  title: RequiredLocalizedText;
  description: RequiredLocalizedText;
  linkLabel: RequiredLocalizedText;
  linkHref: string;
  image: ImageAsset;
  features: InitiativeFeature[];
};

export type HomePageContent = {
  heroSlides: HomeHeroSlide[];
  aboutWriter: AboutWriterContent;
  audioGuidePreview: AudioGuidePreviewContent;
  bibliographyPreview: BibliographyPreviewContent;
  initiativePreview: InitiativePreviewContent;
};
