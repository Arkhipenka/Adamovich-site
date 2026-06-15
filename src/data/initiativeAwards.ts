import type { RequiredLocalizedText } from "@/types/common.types";

export type InitiativeAwardType =
  | "award"
  | "finalist"
  | "recognition"
  | "media"
  | "publication"
  | "community";

export type InitiativeAwardLevel = "primary" | "secondary";

export type InitiativeAward = {
  id: string;
  title: RequiredLocalizedText;
  subtitle?: RequiredLocalizedText;
  description: RequiredLocalizedText;
  year?: string;
  location?: RequiredLocalizedText;
  logo?: string;
  image?: string;
  imageAlt?: RequiredLocalizedText;
  href?: string;
  type: InitiativeAwardType;
  level?: InitiativeAwardLevel;
  featured?: boolean;
  order?: number;
};

export const initiativeAwardsCopy = {
  eyebrow: {
    be: "Прызнанне",
    ru: "Признание",
    en: "Recognition",
  },
  title: {
    be: "Прызнанне і ўзнагароды",
    ru: "Признание и награды",
    en: "Recognition and Awards",
  },
  lead: {
    be: "Праца ініцыятывы атрымала публічную ўвагу і прафесійнае прызнанне. Для нас гэта не фінальная кропка, а пацверджанне, што справа памяці можа аб'ядноўваць людзей і мець значэнне далёка за межамі аднаго мястэчка.",
    ru: "Работа инициативы получила публичное внимание и профессиональное признание. Для нас это не финальная точка, а подтверждение, что дело памяти может объединять людей и иметь значение далеко за пределами одного местечка.",
    en: "The initiative has received public attention and professional recognition. For us, this is not an endpoint, but a sign that the work of memory can unite people and matter far beyond one town.",
  },
  note: {
    be: "Гэты спіс не поўны. Мы ўдзячныя кожнаму, хто падтрымлівае справу памяці Алеся Адамовіча.",
    ru: "Этот список не полный. Мы благодарны каждому, кто поддерживает дело памяти Алеся Адамовича.",
    en: "This list is not exhaustive. We are grateful to everyone who supports the work of preserving Ales Adamovich's memory.",
  },
} satisfies Record<string, RequiredLocalizedText>;

const minskLocation = {
  be: "Мінск, Беларусь",
  ru: "Минск, Беларусь",
  en: "Minsk, Belarus",
} satisfies RequiredLocalizedText;

export const initiativeAwards: InitiativeAward[] = [
  {
    id: "champions-civic-activism",
    title: {
      be: "Чэмпіёны грамадзянскага актывізму",
      ru: "Чемпионы гражданского активизма",
      en: "Champions of Civic Activism",
    },
    subtitle: {
      be: "Партнёрства года",
      ru: "Партнёрство года",
      en: "Partnership of the Year",
    },
    description: {
      be: "Адзнака працы ініцыятывы як прыкладу грамадзянскай дзейнасці і прыклад супрацоўніцтва паміж дзяржавай, бізнесам і грамадскім сектарам.",
      ru: "Отметка работы инициативы как примера гражданской деятельности и сотрудничества между государством, бизнесом и общественным сектором.",
      en: "Recognition of the initiative as an example of civic action and cooperation between the state, business, and civil society.",
    },
    year: "2019",
    location: minskLocation,
    type: "award",
    level: "primary",
    featured: true,
    order: 1,
  },
  {
    id: "social-weekend",
    title: {
      be: "Social Weekend",
      ru: "Social Weekend",
      en: "Social Weekend",
    },
    subtitle: {
      be: "фіналіст конкурсу",
      ru: "финалист конкурса",
      en: "Competition finalist",
    },
    description: {
      be: "Ідэя маршруту і тэатралізаванай экскурсіі па мясцінах Алеся Адамовіча атрымала падтрымку і ўвагу экспертнай супольнасці.",
      ru: "Идея маршрута и театрализованной экскурсии по местам Алеся Адамовича получила поддержку и внимание экспертного сообщества.",
      en: "The idea of a route and theatrical excursion through Ales Adamovich's places received support and expert attention.",
    },
    year: "2019",
    location: minskLocation,
    type: "finalist",
    level: "primary",
    order: 2,
  },
  {
    id: "rada-awards",
    title: {
      be: "RADA Awards",
      ru: "RADA Awards",
      en: "RADA Awards",
    },
    subtitle: {
      be: "лепшы моладзевы праект у сферы культуры",
      ru: "лучший молодежный проект в сфере культуры",
      en: "Best youth project in culture",
    },
    description: {
      be: "Адзнака за кампанію па ўшанаванні памяці Алеся Адамовіча і вяртанне яго спадчыны ў грамадскую прастору.",
      ru: "Отметка за кампанию по увековечению памяти Алеся Адамовича и возвращению его наследия в общественное пространство.",
      en: "Recognition for the campaign to honor Ales Adamovich and return his legacy to public space.",
    },
    year: "2019",
    location: minskLocation,
    type: "award",
    level: "primary",
    featured: true,
    order: 3,
  },
  {
    id: "icom-belarus",
    title: {
      be: "'Спадчына ў Дзеянні' ICOM Belarus",
      ru: "«Наследие в действии» ICOM Belarus",
      en: "Heritage in Action by ICOM Belarus",
    },
    subtitle: {
      be: "фіналіст",
      ru: "финалист",
      en: "Finalist",
    },
    description: {
      be: "Прызнанне працы па захаванні памяці і стварэнні мемарыяльнай прасторы ў кантэксце музейнай і культурнай супольнасці.",
      ru: "Признание работы по сохранению памяти и созданию мемориального пространства в контексте музейного и культурного сообщества.",
      en: "Recognition of the work of preserving memory and creating a memorial space within the museum and cultural community.",
    },
    year: "2019",
    location: minskLocation,
    type: "recognition",
    level: "primary",
    order: 4,
  },
  {
    id: "city-initiatives-about-us",
    title: {
      be: "Пра нас",
      ru: "Про нас",
      en: "About Us",
    },
    subtitle: {
      be: "Лаўрэат прэміі ад Цэнтра гарадскіх ініцыатыў",
      ru: "лауреат премии Центра городских инициатив",
      en: "Award winner from the Center for Urban Initiatives",
    },
    description: {
      be: "Матэрыял пра ініцыятыву і яе значэнне для культурнай памяці Глушы.",
      ru: "Материал об инициативе и ее значении для культурной памяти Глуши.",
      en: "A publication about the initiative and its meaning for the cultural memory of Glusha.",
    },
    year: "2019",
    type: "publication",
    level: "secondary",
    order: 20,
  },
  {
    id: "media-publications",
    title: {
      be: "Публікацыі ў СМІ",
      ru: "Публикации в СМИ",
      en: "Media publications",
    },
    subtitle: {
      be: "інфармацыйная падтрымка і бачнасць",
      ru: "информационная поддержка и видимость",
      en: "Information support and visibility",
    },
    description: {
      be: "Публікацыі, інтэрв'ю і згадкі, якія дапамагалі распавядаць пра праект шырэйшай аўдыторыі.",
      ru: "Публикации, интервью и упоминания, которые помогали рассказывать о проекте более широкой аудитории.",
      en: "Publications, interviews and mentions that helped tell the story of the project to a wider audience.",
    },
    year: "2018-2026",
    type: "media",
    level: "secondary",
    order: 21,
  },
  {
    id: "public-presentations",
    title: {
      be: "Публічная падтрымка",
      ru: "Публичная поддержка",
      en: "Public Support",
    },
    subtitle: {
      be: "Падтрымка праекта публічнымі асобамі",
      ru: "поддержка проекта публичными фигурами",
      en: "Support from public figures",
    },
    description: {
      be: "Публічная падтрымка людзей, якія дапамагалі прыцягваць увагу да ініцыятывы, збору сродкаў і справы ўшанавання памяці Алеся Адамовіча.",
      ru: "Публичная поддержка людей, которые помогали привлекать внимание к инициативе, сбору средств и делу увековечения памяти Алеся Адамовича.",
      en: "Public support from people who helped draw attention to the initiative, fundraising, and the work of honoring Ales Adamovich's memory.",
    },
    year: "2018-2019",
    type: "recognition",
    level: "secondary",
    order: 22,
  },
  {
    id: "community-recognition",
    title: {
      be: "Падтрымка супольнасці",
      ru: "Поддержка сообщества",
      en: "Community support",
    },
    subtitle: {
      be: "увага і ўдзел людзей",
      ru: "внимание и участие людей",
      en: "Attention and participation",
    },
    description: {
      be: "Удзел людзей, якія падтрымлівалі ініцыятыву словам, прысутнасцю, распаўсюдам інфармацыі і працай.",
      ru: "Участие людей, которые поддерживали инициативу словом, присутствием, распространением информации и работой.",
      en: "The participation of people who supported the initiative with words, presence, outreach and work.",
    },
    year: "2018-2026",
    type: "community",
    level: "secondary",
    order: 23,
  },
];
