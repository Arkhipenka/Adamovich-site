import type { Work } from "../works";

export const punishmentersWork: Work = {
  id: "work-punishmenters",
  slug: "punishmenters",
  type: "documentary_prose",
  year: 1980,
  firstPublicationYear: 1980,
  featured: true,
  priority: 4,
  status: "published",
  title: {
    ru: "Каратели",
    be: "Карнікі",
    en: "The Punishmenters",
  },
  originalTitle: "Карнікі",
  authors: ["Алесь Адамовіч"],
  descriptionShort: {
    ru: "Произведение о механизмах насилия, соучастии и преступлениях против человека.",
    be: "Твор пра механізмы гвалту, саўдзел і злачынствы супраць чалавека.",
    en: "A work about mechanisms of violence, complicity and crimes against humanity.",
  },
  shortDescription: {
    ru: "Произведение о механизмах насилия, соучастии и преступлениях против человека.",
    be: "Твор пра механізмы гвалту, саўдзел і злачынствы супраць чалавека.",
    en: "A work about mechanisms of violence, complicity and crimes against humanity.",
  },
  descriptionFull: {
    ru: "Материал посвящён теме насилия, соучастия и ответственности.",
    be: "Матэрыял прысвечаны тэме гвалту, саўдзелу і адказнасці.",
    en: "This entry is dedicated to violence, complicity and responsibility.",
  },
  cover: "/assets/images/works/punishmenters.webp",
  coverImage: "/assets/images/works/punishmenters.webp",
  coverAlt: {
    ru: "Обложка книги «Каратели»",
    be: "Вокладка кнігі «Карнікі»",
    en: "Cover of The Punishmenters",
  },
  languages: ["be", "ru"],
  originalLanguages: ["be", "ru"],
  relatedWorks: ["khatyn-story", "come-and-see"],
  tags: ["violence", "occupation", "documentary prose"],
  themes: ["war", "violence", "responsibility"],
};
