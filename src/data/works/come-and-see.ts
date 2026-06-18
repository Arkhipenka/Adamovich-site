import type { Work } from "../works";

export const comeAndSeeWork: Work = {
  id: "work-come-and-see",
  slug: "come-and-see",
  type: "film",
  year: 1985,
  firstReleaseYear: 1985,
  featured: true,
  priority: 5,
  status: "published",
  title: {
    ru: "Иди и смотри",
    be: "Ідзі і глядзі",
    en: "Come and See",
  },
  originalTitle: "Иди и смотри",
  authors: ["Элем Климов", "Алесь Адамовіч"],
  role: {
    ru: "сценарий",
    be: "сцэнар",
    en: "screenplay",
  },
  descriptionShort: {
    ru: "Фильм по сценарию Алеся Адамовича и Элема Климова о войне и памяти.",
    be: "Фільм паводле сцэнарыя Алеся Адамовіча і Элема Клімава пра вайну і памяць.",
    en: "A film based on a screenplay by Ales Adamovich and Elem Klimov about war and memory.",
  },
  shortDescription: {
    ru: "Фильм по сценарию Алеся Адамовича и Элема Климова о войне и памяти.",
    be: "Фільм паводле сцэнарыя Алеся Адамовіча і Элема Клімава пра вайну і памяць.",
    en: "A film based on a screenplay by Ales Adamovich and Elem Klimov about war and memory.",
  },
  descriptionFull: {
    ru: "Фильм стал одним из самых сильных художественных высказываний о войне.",
    be: "Фільм стаў адным з наймацнейшых мастацкіх выказванняў пра вайну.",
    en: "The film became one of the strongest artistic statements about war.",
  },
  cover: "/assets/images/works/come-and-see.jpg",
  coverImage: "/assets/images/works/come-and-see.jpg",
  coverAlt: {
    ru: "Постер фильма «Иди и смотри»",
    be: "Постар фільма «Ідзі і глядзі»",
    en: "Poster of Come and See",
  },
  languages: ["ru"],
  originalLanguages: ["ru"],
  mediaCredits: {
    director: ["Элем Климов"],
    screenwriters: ["Алесь Адамовіч", "Элем Климов"],
    releaseYear: 1985,
  },
  links: {
    imdb: "https://www.imdb.com/title/tt0091251/",
  },
  relatedWorks: ["i-am-from-fire-village", "khatyn-story", "punishmenters"],
  tags: ["film", "screenplay", "war"],
  themes: ["war", "memory", "violence"],
};
