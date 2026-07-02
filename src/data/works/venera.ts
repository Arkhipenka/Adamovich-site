import type { Work } from "../works";

export const veneraWork: Work = {
  id: "work-venera",
  slug: "venera",
  type: "novella",
  year: 1992,
  firstPublicationYear: 1992,
  featured: false,
  priority: 13,
  status: "published",
  title: {
    ru: "Венера, или Как я был крепостником",
    be: "Венера, або Як я быў прыгоннікам",
    en: "Venera, or How I Was a Serf Owner",
  },
  originalTitle: "Венера, або Як я быў прыгоннікам",
  authors: ["Алесь Адамовіч"],
  descriptionShort: {
    ru: "Повесть о трагической судьбе молодой крестьянки Венеры Станкевич.",
    be: "Аповесць пра трагічны лёс маладой сялянкі Венеры Станкевіч.",
    en: "A novella about the tragic fate of the young peasant woman Venera Stankevich.",
  },
  shortDescription: {
    ru: "Трагическая история деревни конца 1940-х годов.",
    be: "Трагічная гісторыя вёскі канца 1940-х гадоў.",
    en: "A tragic story of village life in the late 1940s.",
  },
  descriptionFull: {
    ru: "Материал подготовлен для дальнейшего библиографического наполнения.",
    be: "Матэрыял падрыхтаваны для далейшага бібліяграфічнага напаўнення.",
    en: "This record is prepared for further bibliographic content.",
  },
  annotation: {
    full: [
      "Аповесць «Венера, або Як я быў прыгоннікам» (часопіс «Нёман», 1992, №№ 6, 7). Аповесць пра трагічны лёс, кароткае жыццё маладой сялянкі Венеры Станкевіч у час вайны і ў першыя пасляваенныя гады.",
      "Паказана страшнае жыццё вёскі ў канцы 40-х гадоў ХХ стагоддзя: усеўладдзе дзяржавы, калгаснай улады і прыніжэнне сялян, якія ў той час былі па сутнасці прыгоннымі. У аповесці шмат аўтабіяграфічнага, дакументальнага ў споведзі безыменного героя.",
    ],
  },
  languages: ["be", "ru"],
  originalLanguages: ["be", "ru"],
  relatedWorks: ["vixi", "nyamko"],
  tags: ["prose", "village", "postwar"],
  themes: ["memory", "responsibility", "history"],
};
