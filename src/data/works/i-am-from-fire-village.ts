import type { Work } from "../works";

export const iAmFromFireVillageWork: Work = {
  id: "work-i-am-from-fire-village",
  slug: "i-am-from-fire-village",
  type: "documentary_prose",
  year: 1975,
  firstPublicationYear: 1975,
  featured: true,
  priority: 1,
  status: "published",
  title: {
    ru: "Я из огненной деревни",
    be: "Я з вогненнай вёскі",
    en: "I Am from the Fiery Village",
  },
  originalTitle: "Я з вогненнай вёскі",
  authors: ["Алесь Адамовіч", "Янка Брыль", "Уладзімір Калеснік"],
  role: {
    ru: "соавтор, составитель свидетельств",
    be: "суаўтар, укладальнік сведчанняў",
    en: "co-author and compiler of testimonies",
  },
  genre: {
    ru: "документальная проза / свидетельства",
    be: "дакументальная проза / сведчанні",
    en: "documentary prose / testimonies",
  },
  descriptionShort: {
    ru: "Документальная книга свидетельств о сожжённых белорусских деревнях.",
    be: "Дакументальная кніга сведчанняў пра спаленыя беларускія вёскі.",
    en: "A documentary book of testimonies about burned Belarusian villages.",
  },
  shortDescription: {
    ru: "Документальная книга свидетельств о сожжённых белорусских деревнях.",
    be: "Дакументальная кніга сведчанняў пра спаленыя беларускія вёскі.",
    en: "A documentary book of testimonies about burned Belarusian villages.",
  },
  descriptionFull: {
    ru: "Книга построена на голосах свидетелей и сохраняет память о трагедии белорусских деревень, уничтоженных во время войны.",
    be: "Кніга пабудавана на галасах сведкаў і захоўвае памяць пра трагедыю беларускіх вёсак, знішчаных падчас вайны.",
    en: "The book is built on witnesses' voices and preserves the memory of Belarusian villages destroyed during the war.",
  },
  cover: "/assets/images/works/i-am-from-fire-village-1975.webp",
  coverImage: "/assets/images/works/i-am-from-fire-village-1975.webp",
  coverAlt: {
    ru: "Обложка книги «Я из огненной деревни»",
    be: "Вокладка кнігі «Я з вогненнай вёскі»",
    en: "Cover of I Am from the Fiery Village",
  },
  languages: ["be", "ru"],
  originalLanguages: ["be"],
  translatedLanguages: ["ru", "en", "de", "pl"],
  editions: [
    {
      id: "first-edition",
      title: {
        ru: "Первое издание",
        be: "Першае выданне",
        en: "First edition",
      },
      year: 1975,
      language: "be",
      coverImage: "/assets/images/works/i-am-from-fire-village-1975.webp",
      notes: "Bibliographic details need further verification.",
    },
    {
      id: "later-russian-edition",
      title: {
        ru: "Позднее издание",
        be: "Пазнейшае выданне",
        en: "Later edition",
      },
      language: "ru",
      coverImage: "/assets/images/works/i-am-from-fire-village.webp",
    },
  ],
  relatedWorks: ["come-and-see", "khatyn-story", "punishmenters"],
  tags: ["documentary prose", "testimony", "village memory"],
  themes: ["war", "memory", "testimony", "burned-villages"],
};
