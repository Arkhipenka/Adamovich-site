import type { Locale, RequiredLocalizedText } from "@/types/common.types";

export type InitiativeProject = {
  id: string;
  year: string;
  title: RequiredLocalizedText;
  description: RequiredLocalizedText;
  image: string;
  imageAlt: RequiredLocalizedText;
  href?: string;
  order?: number;
};

export const initiativeProjectsCopy = {
  be: {
    eyebrow: "ПРАЕКТЫ ІНІЦЫЯТЫВЫ",
    title: "Рэалізаваныя праекты",
    lead:
      "Ініцыятыва вырасла з ідэі ўшанаваць памяць Алеся Адамовіча ў Глушы і паступова ператварылася ў некалькі самастойных праектаў: арт-аб’ект, помнік і жывы маршрут па мясцінах пісьменніка.",
    moreLabel: "Падрабязней",
  },
  ru: {
    eyebrow: "ПРОЕКТЫ ИНИЦИАТИВЫ",
    title: "Реализованные проекты",
    lead:
      "Инициатива выросла из идеи увековечить память Алеся Адамовича в Глуше и постепенно превратилась в несколько самостоятельных проектов: арт-объект, памятник и живой маршрут по местам писателя.",
    moreLabel: "Подробнее",
  },
  en: {
    eyebrow: "INITIATIVE PROJECTS",
    title: "Implemented Projects",
    lead:
      "The initiative grew from an idea to honour Ales Adamovich in Glusha and gradually became several distinct projects: an art object, a monument and a living route through the writer’s places.",
    moreLabel: "Learn more",
  },
} satisfies Record<
  Locale,
  {
    eyebrow: string;
    title: string;
    lead: string;
    moreLabel: string;
  }
>;

export const initiativeProjects: InitiativeProject[] = [
  {
    id: "adamovich-stop",
    year: "2018",
    title: {
      be: "Прыпынак Адамовіча",
      ru: "Остановка Адамовича",
      en: "Adamovich Stop",
    },
    description: {
      be: "Мастацкі аб’ект у Глушы, які ператварыў звычайны прыпынак у месца памяці, размовы і вяртання да спадчыны пісьменніка.",
      ru: "Художественный объект в Глуше, который превратил обычную остановку в место памяти, разговора и возвращения к наследию писателя.",
      en: "An art object in Glusha that turned an ordinary stop into a place of memory, conversation and return to the writer’s legacy.",
    },
    image: "/assets/images/initiative/art-object.jpg",
    imageAlt: {
      be: "Прыпынак Адамовіча ў Глушы",
      ru: "Остановка Адамовича в Глуше",
      en: "The Adamovich Stop in Glusha",
    },
    order: 1,
  },
  {
    id: "adamovich-monument",
    year: "2019",
    title: {
      be: "Помнік / бюст",
      ru: "Памятник / бюст",
      en: "Monument / Bust",
    },
    description: {
      be: "Першы ў свеце помнік Алесю Адамовічу, усталяваны ў Глушы — на малой радзіме пісьменніка.",
      ru: "Первый в мире памятник Алесю Адамовичу, установленный в Глуше — на малой родине писателя.",
      en: "The first monument to Ales Adamovich in the world, installed in Glusha, the writer’s native place.",
    },
    image: "/assets/images/initiative/memorial-illustration.png",
    imageAlt: {
      be: "Помнік Алесю Адамовічу ў Глушы",
      ru: "Памятник Алесю Адамовичу в Глуше",
      en: "The monument to Ales Adamovich in Glusha",
    },
    order: 2,
  },
  {
    id: "theatrical-route",
    year: "2018",
    title: {
      be: "Тэатралізаваная экскурсія",
      ru: "Театрализованная экскурсия",
      en: "Theatrical Excursion",
    },
    description: {
      be: "Жывы маршрут па мясцінах Адамовіча, які злучае гісторыю, літаратуру, мясцовую памяць і ўдзел людзей.",
      ru: "Живой маршрут по местам Адамовича, который соединяет историю, литературу, местную память и участие людей.",
      en: "A living route through Adamovich’s places, connecting history, literature, local memory and people’s participation.",
    },
    image: "/assets/images/initiative/Kirmash-2018.jpg",
    imageAlt: {
      be: "Сустрэча і прэзентацыя ініцыятывы",
      ru: "Встреча и презентация инициативы",
      en: "A meeting and presentation of the initiative",
    },
    order: 3,
  },
];
