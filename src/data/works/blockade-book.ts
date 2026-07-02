import type { Work } from "../works";

export const blockadeBookWork: Work = {
  id: "work-blockade-book",
  slug: "blockade-book",
  type: "documentary_prose",
  year: 1979,
  firstPublicationYear: 1979,
  featured: true,
  priority: 3,
  status: "published",
  title: {
    ru: "Блокадная книга",
    be: "Блакадная кніга",
    en: "The Blockade Book",
  },
  originalTitle: "Блокадная книга",
  authors: ["Алесь Адамовіч", "Даниил Гранин"],
  role: {
    ru: "соавтор документальной книги",
    be: "суаўтар дакументальнай кнігі",
    en: "co-author of the documentary book",
  },
  descriptionShort: {
    ru: "Документальная книга о блокаде Ленинграда, созданная на основе свидетельств.",
    be: "Дакументальная кніга пра блакаду Ленінграда, створаная на аснове сведчанняў.",
    en: "A documentary book about the Siege of Leningrad, based on testimonies.",
  },
  shortDescription: {
    ru: "Документальная книга о блокаде Ленинграда, созданная на основе свидетельств.",
    be: "Дакументальная кніга пра блакаду Ленінграда, створаная на аснове сведчанняў.",
    en: "A documentary book about the Siege of Leningrad, based on testimonies.",
  },
  descriptionFull: {
    ru: "Книга фиксирует опыт блокадного города через свидетельства людей и стала одним из важнейших документальных текстов о войне.",
    be: "Кніга фіксуе досвед блакаднага горада праз сведчанні людзей і стала адным з найважнейшых дакументальных тэкстаў пра вайну.",
    en: "The book records the experience of the besieged city through human testimonies and became a major documentary text about war.",
  },
  annotation: {
    full: [
      "«Блакадная кніга» (1979, 1982). Суровая кніга праўды пра блакадны Ленінград. Яе старонкі — ажыўшыя ўспаміны блакаднікаў пра пакуты, пра голад і холад у абложаным горадзе, пра смерць і прагу жыцця.",
      "Гераізм і мужнасць, слава і бессмяротнасць ленінградцаў, якія выстаялі ў нечалавечых умовах і абаранілі сваю годнасць, свой горад, праз дзесяцігоддзі ўражваюць розумы і сэрцы людзей, якія жывуць на Зямлі.",
      "Працуючы над кнігай, А. Адамовіч і Д. Гранін выкарыстоўвалі дзённікі (у прыватнасці загінуўшага падлетка Юрыя Рабінкіна, вучонага-гісторыка Г. А. Князева) і апавяданні ленінградцаў-блакаднікаў.",
    ],
  },
  cover: "/assets/images/works/blockade-book.jpg",
  coverImage: "/assets/images/works/blockade-book.jpg",
  coverAlt: {
    ru: "Обложка книги «Блокадная книга»",
    be: "Вокладка кнігі «Блакадная кніга»",
    en: "Cover of The Blockade Book",
  },
  languages: ["ru"],
  originalLanguages: ["ru"],
  editions: [
    {
      id: "german-2019",
      title: {
        ru: "Немецкое издание",
        be: "Нямецкае выданне",
        en: "German edition",
      },
      year: 2019,
      publisher: "Aufbau",
      language: "de",
      coverImage: "/assets/images/works/editions/blockade-book-german-2019.webp",
    },
    {
      id: "german-2019-back",
      title: {
        ru: "Немецкое издание, задняя обложка",
        be: "Нямецкае выданне, задняя вокладка",
        en: "German edition, back cover",
      },
      year: 2019,
      publisher: "Aufbau",
      language: "de",
      coverImage: "/assets/images/works/editions/blockade-book-german-back.webp",
    },
    {
      id: "japanese-edition",
      title: {
        ru: "Японское издание",
        be: "Японскае выданне",
        en: "Japanese edition",
      },
      language: "ja",
      coverImage: "/assets/images/works/editions/blockade-book-japanese.webp",
    },
    {
      id: "slovak-edition",
      title: {
        ru: "Словацкое издание",
        be: "Славацкае выданне",
        en: "Slovak edition",
      },
      language: "sk",
      coverImage: "/assets/images/works/editions/blockade-book-slovak.webp",
    },
    {
      id: "italian-edition",
      title: {
        ru: "Итальянское издание",
        be: "Італьянскае выданне",
        en: "Italian edition",
      },
      language: "it",
      coverImage: "/assets/images/works/editions/blockade-book-italian.webp",
    },
  ],
  relatedWorks: ["i-am-from-fire-village"],
  tags: ["documentary prose", "siege", "testimony"],
  themes: ["war", "memory", "testimony"],
};
