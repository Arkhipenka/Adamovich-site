import type { Work } from "../works";

export const vixiWork: Work = {
  id: "work-vixi",
  slug: "vixi",
  type: "book",
  year: 2002,
  firstPublicationYear: 2002,
  featured: false,
  priority: 8,
  status: "published",
  title: {
    ru: "Vixi",
    be: "Vixi",
    en: "Vixi",
  },
  originalTitle: "Vixi",
  authors: ["Алесь Адамовіч"],
  descriptionShort: {
    ru: "Минское издание книги Алеся Адамовича 2002 года.",
    be: "Мінскае выданне кнігі Алеся Адамовіча 2002 года.",
    en: "A 2002 Minsk edition of a book by Ales Adamovich.",
  },
  shortDescription: {
    ru: "Минское издание книги Алеся Адамовича 2002 года.",
    be: "Мінскае выданне кнігі Алеся Адамовіча 2002 года.",
    en: "A 2002 Minsk edition of a book by Ales Adamovich.",
  },
  descriptionFull: {
    ru: "Издание подготовлено для библиографического раздела и будет дополнено уточнёнными данными.",
    be: "Выданне падрыхтавана для бібліяграфічнага раздзела і будзе дапоўнена ўдакладненымі звесткамі.",
    en: "This edition is prepared for the bibliography section and will be expanded with verified details.",
  },
  cover: "/assets/images/works/editions/vixi-minsk-2002.webp",
  coverImage: "/assets/images/works/editions/vixi-minsk-2002.webp",
  coverAlt: {
    ru: "Обложка книги «Vixi»",
    be: "Вокладка кнігі «Vixi»",
    en: "Cover of Vixi",
  },
  languages: ["be"],
  originalLanguages: ["be"],
  tags: ["book"],
  themes: ["memory"],
};
