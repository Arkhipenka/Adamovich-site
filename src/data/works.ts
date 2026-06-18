import { blockadeBookWork } from "./works/blockade-book";
import { chernobylMaterialsWork } from "./works/chernobyl-materials";
import { comeAndSeeWork } from "./works/come-and-see";
import { iAmFromFireVillageWork } from "./works/i-am-from-fire-village";
import { khatynStoryWork } from "./works/khatyn-story";
import { partisanStoriesWork } from "./works/partisan-stories";
import { punishmentersWork } from "./works/punishmenters";
import { vixiWork } from "./works/vixi";
import { warUnderRooftopsWork } from "./works/war-under-rooftops";

export type WorkType =
  | "book"
  | "story"
  | "novel"
  | "novella"
  | "film"
  | "script"
  | "article"
  | "essay"
  | "interview"
  | "archive"
  | "research"
  | "documentary-prose"
  | "documentary_prose";

export type WorkStatus = "published" | "draft" | "in-progress";

export type Locale = "ru" | "be" | "en";

export type LocalizedText = {
  ru: string;
  be: string;
  en: string;
};

export type WorkLanguage =
  | "be"
  | "ru"
  | "en"
  | "pl"
  | "de"
  | "fr"
  | "uk"
  | "lt"
  | "ja"
  | "zh"
  | "it"
  | "sk"
  | string;

export type ExternalLink = {
  label: string;
  url: string;
};

export type MaybeLocalizedText = LocalizedText | string;

export type WorkMaterial = {
  id: string;
  type: "photo" | "document" | "video" | "audio" | "article" | "archive";
  title: MaybeLocalizedText;
  description?: MaybeLocalizedText;
  image?: string;
  href?: string;
  source?: string;
  year?: string;
};

export type WorkReview = {
  id: string;
  quote?: MaybeLocalizedText;
  title?: MaybeLocalizedText;
  author?: string;
  source?: string;
  year?: string;
  href?: string;
};

export type WorkQuote = {
  id: string;
  text: MaybeLocalizedText;
  sourceNote?: MaybeLocalizedText;
};

export type WorkLink = {
  label: MaybeLocalizedText;
  href: string;
};

export type WorkAnnotation = {
  short: MaybeLocalizedText;
  full?: MaybeLocalizedText[];
};

export type WorkCreationHistory = {
  title: MaybeLocalizedText;
  text: MaybeLocalizedText[];
  dates?: string[];
  places?: string[];
  people?: string[];
  image?: string;
  imageAlt?: MaybeLocalizedText;
};

export type WorkContext = {
  title: MaybeLocalizedText;
  text: MaybeLocalizedText[];
  relatedThemeIds?: string[];
};

export type WorkEdition = {
  id?: string;
  title?: MaybeLocalizedText;
  year?: number;
  publisher?: string;
  city?: string;
  country?: string;
  language: WorkLanguage;
  isbn?: string;
  pages?: number;
  cover?: string;
  coverImage?: string;
  notes?: string;
  link?: string;
};

export type WorkTranslation = {
  id: string;
  language: WorkLanguage;
  title?: string;
  year?: number;
  translator?: string;
  publisher?: string;
  country?: string;
  isbn?: string;
  pages?: number;
  notes?: string;
};

export type WorkMediaCredits = {
  director?: string[];
  screenwriters?: string[];
  studio?: string;
  releaseYear?: number;
  durationMinutes?: number;
};

export type WorkRating = {
  platform: string;
  value?: string;
  max?: string;
  link?: string;
  lastChecked?: string;
};

export type WorkAward = {
  name: string;
  year?: number;
  category?: string;
  result?: "winner" | "nominee" | "selected";
  organization?: string;
  link?: string;
};

export type WorkResearch = {
  id?: string;
  title: string;
  author?: string;
  year?: number;
  type?: "article" | "book" | "thesis" | "conference" | "review";
  language?: string;
  link?: string;
  href?: string;
  publication?: string;
  description?: string;
};

export type WorkResearchItem = WorkResearch;

export type WorkPageData = Work;

export type WorkMention = {
  title: string;
  source?: string;
  year?: number;
  type?: "media" | "review" | "interview" | "festival" | "encyclopedia";
  language?: string;
  link?: string;
};

export type RelatedMaterial = {
  id?: string;
  type:
    | "photo"
    | "audio"
    | "video"
    | "document"
    | "interview"
    | "article"
    | "archive"
    | "research"
    | "external_link";
  title: LocalizedText;
  href?: string;
  link?: string;
  description?: LocalizedText;
};

export type Work = {
  id: string;
  slug: string;
  type: WorkType;
  year?: number;
  date?: string;
  firstPublicationYear?: number;
  firstReleaseYear?: number;
  featured: boolean;
  priority: number;
  status: WorkStatus;
  title: LocalizedText;
  originalTitle?: string;
  subtitle?: LocalizedText;
  authors: string[];
  coAuthors?: string[];
  editors?: string[];
  translators?: string[];
  role?: LocalizedText;
  genre?: MaybeLocalizedText;
  descriptionShort: LocalizedText;
  shortDescription?: LocalizedText;
  descriptionFull?: LocalizedText;
  longDescription?: Partial<LocalizedText>;
  annotation?: WorkAnnotation;
  creationHistory?: WorkCreationHistory;
  context?: WorkContext;
  cover?: string;
  coverImage?: string;
  coverAlt?: LocalizedText;
  gallery?: string[];
  languages?: WorkLanguage[];
  originalLanguages?: WorkLanguage[];
  translatedLanguages?: WorkLanguage[];
  editions?: WorkEdition[];
  translations?: WorkTranslation[];
  mediaCredits?: WorkMediaCredits;
  availability?: {
    libraries?: ExternalLink[];
    archives?: ExternalLink[];
    onlineReading?: ExternalLink[];
    stores?: ExternalLink[];
    secondHand?: ExternalLink[];
  };
  links?: {
    imdb?: string;
    wikipedia?: string;
    wikidata?: string;
    tmdb?: string;
    letterboxd?: string;
    kinopoisk?: string;
    archive?: string;
    source?: string;
  };
  ratings?: WorkRating[];
  awards?: WorkAward[];
  research?: WorkResearch[];
  materials?: WorkMaterial[];
  reviews?: WorkReview[];
  quotes?: WorkQuote[];
  pageLinks?: WorkLink[];
  mentions?: WorkMention[];
  relatedWorks?: string[];
  relatedMaterials?: RelatedMaterial[];
  tags?: string[];
  themes?: string[];
};

export const works: Work[] = [
  iAmFromFireVillageWork,
  khatynStoryWork,
  blockadeBookWork,
  punishmentersWork,
  comeAndSeeWork,
  warUnderRooftopsWork,
  partisanStoriesWork,
  vixiWork,
  chernobylMaterialsWork,
];

export const featuredWorks = works
  .filter((work) => work.featured && work.status === "published")
  .sort((a, b) => a.priority - b.priority);

export const publishedWorks = works
  .filter((work) => work.status === "published")
  .sort((a, b) => a.priority - b.priority);
