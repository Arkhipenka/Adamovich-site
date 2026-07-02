import type { Work } from "../works";

export const asiyaWork: Work = {
  id: "work-asiya",
  slug: "asiya",
  type: "novella",
  year: 1975,
  firstPublicationYear: 1975,
  featured: false,
  priority: 10,
  status: "published",
  title: {
    ru: "Асия",
    be: "Асія",
    en: "Asiya",
  },
  originalTitle: "Асія",
  authors: ["Алесь Адамовіч"],
  descriptionShort: {
    ru: "Повесть о любви и человеческом таланте делать друг друга счастливее.",
    be: "Аповесць пра каханне і чалавечы талент рабіць адзін аднаго больш шчаслівым.",
    en: "A novella about love and the human talent for making one another happier.",
  },
  shortDescription: {
    ru: "История одного послевоенного кахання.",
    be: "Гісторыя аднаго пасляваеннага кахання.",
    en: "A story of postwar love.",
  },
  descriptionFull: {
    ru: "Материал подготовлен для дальнейшего библиографического наполнения.",
    be: "Матэрыял падрыхтаваны для далейшага бібліяграфічнага напаўнення.",
    en: "This record is prepared for further bibliographic content.",
  },
  annotation: {
    full: [
      "Аповесць «Асія» (1975). Гэта гісторыя аднаго кахання, аповесць пра няпросты чалавечы талент «рабіць адзін аднаго больш шчаслівым». Час дзеяння — пасляваенныя гады.",
    ],
  },
  languages: ["be", "ru"],
  originalLanguages: ["be", "ru"],
  tags: ["prose", "love", "postwar"],
  themes: ["memory", "choice"],
};
