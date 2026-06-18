import type { Work } from "../works";

export const khatynStoryWork: Work = {
  id: "work-khatyn-story",
  slug: "khatyn-story",
  type: "novella",
  year: 1973,
  firstPublicationYear: 1973,
  featured: true,
  priority: 2,
  status: "published",
  title: {
    ru: "Хатынская повесть",
    be: "Хатынская аповесць",
    en: "The Khatyn Tale",
  },
  originalTitle: "Хатынская аповесць",
  authors: ["Алесь Адамовіч"],
  descriptionShort: {
    ru: "Одно из ключевых произведений Адамовича о войне, памяти и нравственном испытании.",
    be: "Адзін з ключавых твораў Адамовіча пра вайну, памяць і маральнае выпрабаванне.",
    en: "One of Adamovich's key works about war, memory and moral trial.",
  },
  shortDescription: {
    ru: "Одно из ключевых произведений Адамовича о войне, памяти и нравственном испытании.",
    be: "Адзін з ключавых твораў Адамовіча пра вайну, памяць і маральнае выпрабаванне.",
    en: "One of Adamovich's key works about war, memory and moral trial.",
  },
  descriptionFull: {
    ru: "Произведение связано с темой Хатыни, памятью о сожжённых деревнях и нравственной ответственностью свидетеля.",
    be: "Твор звязаны з тэмай Хатыні, памяццю пра спаленыя вёскі і маральнай адказнасцю сведкі.",
    en: "The work is connected with Khatyn, the memory of burned villages and the moral responsibility of testimony.",
  },
  cover: "/assets/images/works/khatyn-story.jpg",
  coverImage: "/assets/images/works/khatyn-story.jpg",
  coverAlt: {
    ru: "Обложка книги «Хатынская повесть»",
    be: "Вокладка кнігі «Хатынская аповесць»",
    en: "Cover of The Khatyn Tale",
  },
  languages: ["be", "ru"],
  originalLanguages: ["be", "ru"],
  relatedWorks: ["i-am-from-fire-village", "come-and-see"],
  tags: ["prose", "khatyn", "war memory"],
  themes: ["war", "memory", "responsibility"],
};
