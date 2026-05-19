import type { LocalizedText } from "./common.types";

export type { LocalizedText } from "./common.types";

export type WorkCategory =
  | "fiction"
  | "documentary-prose"
  | "publicism"
  | "essay"
  | "screenplay"
  | "interview"
  | "coauthored"
  | "chernobyl"
  | "war-memory"
  | "literary-criticism"
  | "violence"
  | "other";

export type Work = {
  slug: string;

  title: {
    be: string;
    ru: string;
    en?: string;
  };

  originalTitle?: string;
  year?: string;

  categories: WorkCategory[];

  description?: LocalizedText;

  shortDescription?: LocalizedText;

  coauthors?: string[];

  cover?: string;

  firstPublication?: {
    title?: string;
    year?: string;
    place?: string;
    publisher?: string;
    notes?: string;
  };

  editions?: {
    year?: string;
    title?: string;
    publisher?: string;
    place?: string;
    language?: string;
    notes?: string;
  }[];

  relatedQuotes?: string[];

  relatedPlaces?: string[];

  featured?: boolean;

  sourceNote?: string;
};
