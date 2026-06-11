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
      be: "адзнака грамадзянскай ініцыятывы",
      ru: "отметка гражданской инициативы",
      en: "Civic initiative recognition",
    },
    description: {
      be: "Адзнака працы ініцыятывы як прыкладу грамадзянскай дзейнасці ў сферы памяці, культуры і вяртання спадчыны ў публічную прастору.",
      ru: "Отметка работы инициативы как примера гражданского действия в сфере памяти, культуры и возвращения наследия в публичное пространство.",
      en: "Recognition of the initiative as an example of civic action in memory, culture and the return of heritage to public space.",
    },
    year: "2020",
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
      be: "ICOM Belarus",
      ru: "ICOM Belarus",
      en: "ICOM Belarus",
    },
    subtitle: {
      be: "прафесійнае прызнанне",
      ru: "профессиональное признание",
      en: "Professional recognition",
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
      be: "Пра нас ад Цэнтра гарадскіх ініцыятыў",
      ru: "«Про нас» от Центра городских инициатив",
      en: "About Us by the Center for Urban Initiatives",
    },
    subtitle: {
      be: "публічная ўвага да праекта",
      ru: "публичное внимание к проекту",
      en: "Public attention to the project",
    },
    description: {
      be: "Матэрыял пра ініцыятыву і яе значэнне для культурнай памяці Глушы.",
      ru: "Материал об инициативе и ее значении для культурной памяти Глуши.",
      en: "A publication about the initiative and its meaning for the cultural memory of Glusha.",
    },
    year: "2018",
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
    year: "2018-2024",
    type: "media",
    level: "secondary",
    order: 21,
  },
  {
    id: "public-presentations",
    title: {
      be: "Публічныя прэзентацыі",
      ru: "Публичные презентации",
      en: "Public presentations",
    },
    subtitle: {
      be: "размова пра памяць і спадчыну",
      ru: "разговор о памяти и наследии",
      en: "Conversation about memory and heritage",
    },
    description: {
      be: "Сустрэчы і прэзентацыі, дзе ініцыятыва расказвала пра Глушу, маршрут і працу з памяццю.",
      ru: "Встречи и презентации, где инициатива рассказывала о Глуше, маршруте и работе с памятью.",
      en: "Meetings and presentations where the initiative spoke about Glusha, the route and memory work.",
    },
    year: "2017-2019",
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
    year: "2018-2024",
    type: "community",
    level: "secondary",
    order: 23,
  },
];
