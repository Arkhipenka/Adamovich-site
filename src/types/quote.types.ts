export type QuoteTheme =
  | "memory"
  | "war"
  | "truth"
  | "conscience"
  | "humanism"
  | "chernobyl"
  | "literature"
  | "responsibility"
  | "violence"
  | "testimony"
  | "history"
  | "other";

export type LocalizedQuoteText = {
  be?: string;
  ru?: string;
  en?: string;
};

export type Quote = {
  id: string;

  text: LocalizedQuoteText;

  author: {
    be: string;
    ru: string;
    en?: string;
  };

  source?: {
    workSlug?: string;
    title?: string;
    year?: string;
    page?: string;
    notes?: string;
  };

  themes: QuoteTheme[];

  featured?: boolean;

  verified?: boolean;

  sourceNote?: string;
};
