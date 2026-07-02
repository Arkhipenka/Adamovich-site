import type { Work } from "../works";

export const nyamkoWork: Work = {
  id: "work-nyamko",
  slug: "nyamko",
  type: "novella",
  year: 1992,
  firstPublicationYear: 1992,
  featured: false,
  priority: 14,
  status: "published",
  title: {
    ru: "Нямко",
    be: "Нямко",
    en: "Nyamko",
  },
  originalTitle: "Нямко",
  authors: ["Алесь Адамовіч"],
  descriptionShort: {
    ru: "Повесть о встрече и любви белорусской девушки Палины и немецкого солдата Франца.",
    be: "Аповесць пра сустрэчу і каханне беларускай дзяўчыны Паліны і нямецкага салдата Франца.",
    en: "A novella about the meeting and love of the Belarusian girl Palina and the German soldier Franz.",
  },
  shortDescription: {
    ru: "История любви во время кровавого военного пекла.",
    be: "Гісторыя кахання ў час крывавага ваеннага пекла.",
    en: "A love story in the bloodshed of war.",
  },
  descriptionFull: {
    ru: "Материал подготовлен для дальнейшего библиографического наполнения.",
    be: "Матэрыял падрыхтаваны для далейшага бібліяграфічнага напаўнення.",
    en: "This record is prepared for further bibliographic content.",
  },
  annotation: {
    full: [
      "Аповесць «Нямко» (часопіс «Знамя», 1992, № 12). Пра сустрэчу і каханне беларускай 16-гадовай дзяўчыны Паліны і нямецкага маладога салдата Франца, які ў імя іх выратавання на гады вайны стаў «нямым». Каханне дзяцей двух народаў, якія ваявалі адзін з адным, забівалі адзін аднаго, пра сапраўднае каханне ў час крывавага пекла.",
      "У 2006 выйшаў на экраны кінафільм «Франц + Паліна» па сцэнарыі Алеся Адамовіча (1993), рэжысёр-пастаноўшчык — Міхаіл Сегал, вытворчасць — кінакампанія «Югра-фільм» (РФ), кінакампанія «Solivs» (РФ).",
      "Спецыальны дыплом журы кінапрэсы «За творчы сінтэз літаратуры і кіно» на ХІІІ Мінскім міжнародным кінафестывалі «Лістапад». Мінск, 2006. Спектакль «Не мой» паводле аповесці пастаўлены ў Нацыянальным тэатры імя Я. Купалы (рэжысёр Аляксандр Гарцуеў, 2008).",
    ],
  },
  cover: "/assets/images/works/editions/nyamko-minsk-2024.webp",
  coverImage: "/assets/images/works/editions/nyamko-minsk-2024.webp",
  coverAlt: {
    ru: "Обложка издания «Хатынская аповесть. Нямко»",
    be: "Вокладка выдання «Хатынская аповесць. Нямко»",
    en: "Cover of the Khatyn Story. Nyamko edition",
  },
  languages: ["be", "ru"],
  originalLanguages: ["be", "ru"],
  editions: [
    {
      id: "minsk-2024",
      title: {
        ru: "Минское издание",
        be: "Мінскае выданне",
        en: "Minsk edition",
      },
      year: 2024,
      publisher: "Попурри",
      city: "Минск",
      language: "ru",
      isbn: "978-985-15-5860-1",
      coverImage: "/assets/images/works/editions/nyamko-minsk-2024.webp",
    },
    {
      id: "minsk-2024-back",
      title: {
        ru: "Минское издание, оборот обложки",
        be: "Мінскае выданне, адварот вокладкі",
        en: "Minsk edition, back cover",
      },
      year: 2024,
      publisher: "Попурри",
      city: "Минск",
      language: "ru",
      isbn: "978-985-15-5860-1",
      coverImage: "/assets/images/works/editions/nyamko-minsk-2024-back.webp",
    },
  ],
  relatedWorks: ["venera", "vixi"],
  tags: ["prose", "war", "love"],
  themes: ["war", "memory", "choice"],
};
