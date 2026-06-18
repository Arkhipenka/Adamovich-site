import type { Work } from "../works";

export const partisanStoriesWork: Work = {
  id: "work-partisan-stories",
  slug: "partisan-stories",
  type: "book",
  year: 1977,
  firstPublicationYear: 1977,
  featured: true,
  priority: 7,
  status: "published",
  title: {
    ru: "Партизанские повести",
    be: "Партызанскія аповесці",
    en: "Partisan Stories",
  },
  authors: ["Алесь Адамовіч"],
  descriptionShort: {
    ru: "Собрание прозы о партизанском опыте, войне и человеческом выборе.",
    be: "Збор прозы пра партызанскі досвед, вайну і чалавечы выбар.",
    en: "A collection of prose about partisan experience, war and human choice.",
  },
  shortDescription: {
    ru: "Собрание прозы о партизанском опыте, войне и человеческом выборе.",
    be: "Збор прозы пра партызанскі досвед, вайну і чалавечы выбар.",
    en: "A collection of prose about partisan experience, war and human choice.",
  },
  descriptionFull: {
    ru: "Материал подготовлен для последующего наполнения библиографическими данными и связанными источниками.",
    be: "Матэрыял падрыхтаваны для наступнага напаўнення бібліяграфічнымі данымі і звязанымі крыніцамі.",
    en: "This record is prepared for future bibliographic data and related sources.",
  },
  cover: "/assets/images/bibliography/covers/partisan-stories.webp",
  coverImage: "/assets/images/bibliography/covers/partisan-stories.webp",
  coverAlt: {
    ru: "Обложка «Партизанские повести»",
    be: "Вокладка «Партызанскія аповесці»",
    en: "Cover of Partisan Stories",
  },
  languages: ["be", "ru"],
  originalLanguages: ["be", "ru"],
  tags: ["prose", "partisans"],
  themes: ["war", "choice"],
};
