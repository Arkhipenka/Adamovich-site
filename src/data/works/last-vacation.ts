import type { Work } from "../works";

export const lastVacationWork: Work = {
  id: "work-last-vacation",
  slug: "last-vacation",
  type: "novella",
  year: 1975,
  firstPublicationYear: 1975,
  featured: false,
  priority: 11,
  status: "published",
  title: {
    ru: "Последний отпуск",
    be: "Апошні адпачынак",
    en: "The Last Vacation",
  },
  originalTitle: "Апошні адпачынак",
  authors: ["Алесь Адамовіч"],
  descriptionShort: {
    ru: "Повесть о враче-онкологе и опасном медицинском эксперименте над собой.",
    be: "Аповесць пра ўрача-анколага і небяспечны медыцынскі эксперымент над сабой.",
    en: "A novella about an oncologist and a dangerous medical experiment on himself.",
  },
  shortDescription: {
    ru: "История опасного эксперимента врача над собой.",
    be: "Гісторыя небяспечнага эксперымента ўрача над сабой.",
    en: "A story of a doctor's dangerous experiment on himself.",
  },
  descriptionFull: {
    ru: "Материал подготовлен для дальнейшего библиографического наполнения.",
    be: "Матэрыял падрыхтаваны для далейшага бібліяграфічнага напаўнення.",
    en: "This record is prepared for further bibliographic content.",
  },
  annotation: {
    full: [
      "Аповесць «Апошні адпачынак» (1975). Аповесць пра тое, як урач-анколаг, правяраючы некаторыя свае гіпотэзы, ажыццяўляе небяспечны медыцынскі эксперымент над сабой.",
    ],
  },
  languages: ["be", "ru"],
  originalLanguages: ["be", "ru"],
  tags: ["prose", "medicine", "experiment"],
  themes: ["choice", "responsibility"],
};
