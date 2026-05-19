import type { Quote, QuoteTheme } from "@/types/quote.types";

// Temporary quote database.
// Quotes marked verified: false must be checked against reliable sources before publication.
export const quotes: Quote[] = [
  {
    id: "memory-resists-oblivion",
    text: {
      ru: "Память — это сопротивление забвению.",
      be: "Памяць — гэта супраціў забыццю.",
      en: "Memory is resistance to oblivion.",
    },
    author: {
      ru: "Алесь Адамович",
      be: "Алесь Адамовіч",
      en: "Ales Adamovich",
    },
    themes: ["memory", "responsibility"],
    featured: true,
    verified: false,
    sourceNote: "Source needs verification.",
  },
  {
    id: "truth-and-war",
    text: {
      ru: "Правда о войне не может быть удобной.",
      be: "Праўда пра вайну не можа быць зручнай.",
      en: "The truth about war cannot be comfortable.",
    },
    author: {
      ru: "Алесь Адамович",
      be: "Алесь Адамовіч",
      en: "Ales Adamovich",
    },
    themes: ["war", "truth", "testimony"],
    featured: true,
    verified: false,
    sourceNote: "Source needs verification.",
  },
  {
    id: "human-memory-stronger-than-fear",
    text: {
      ru: "Человеческая память сильнее страха.",
      be: "Чалавечая памяць мацнейшая за страх.",
      en: "Human memory is stronger than fear.",
    },
    author: {
      ru: "Алесь Адамович",
      be: "Алесь Адамовіч",
      en: "Ales Adamovich",
    },
    themes: ["memory", "humanism"],
    featured: true,
    verified: false,
    sourceNote: "Source needs verification.",
  },
  {
    id: "literature-as-testimony",
    text: {
      ru: "Литература становится свидетельством, когда молчание становится преступлением.",
      be: "Літаратура становіцца сведчаннем, калі маўчанне становіцца злачынствам.",
      en: "Literature becomes testimony when silence becomes a crime.",
    },
    author: {
      ru: "Алесь Адамович",
      be: "Алесь Адамовіч",
      en: "Ales Adamovich",
    },
    themes: ["literature", "testimony", "responsibility"],
    featured: false,
    verified: false,
    sourceNote: "Source needs verification.",
  },
  {
    id: "conscience-and-history",
    text: {
      ru: "История требует не только знания, но и совести.",
      be: "Гісторыя патрабуе не толькі ведаў, але і сумлення.",
      en: "History requires not only knowledge, but also conscience.",
    },
    author: {
      ru: "Алесь Адамович",
      be: "Алесь Адамовіч",
      en: "Ales Adamovich",
    },
    themes: ["history", "conscience", "responsibility"],
    featured: false,
    verified: false,
    sourceNote: "Source needs verification.",
  },
];

export const featuredQuotes = quotes.filter((quote) => quote.featured);

export function getQuoteById(id: string) {
  return quotes.find((quote) => quote.id === id);
}

export function getQuotesByTheme(theme: QuoteTheme) {
  return quotes.filter((quote) => quote.themes.includes(theme));
}
