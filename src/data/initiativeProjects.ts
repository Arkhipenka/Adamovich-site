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
      "Ініцыятыва вырасла з ідэі ўшанаваць памяць Алеся Адамовіча ў Глушы і паступова ператварылася ў некалькі самастойных праектаў: арт-аб’ект, помнік, тэатралізаваную экскурсію і іншыя фарматы працы з памяццю пісьменніка.",
    moreLabel: "Падрабязней",
  },
  ru: {
    eyebrow: "ПРОЕКТЫ ИНИЦИАТИВЫ",
    title: "Реализованные проекты",
    lead:
      "Инициатива выросла из идеи увековечить память Алеся Адамовича в Глуше и постепенно превратилась в несколько самостоятельных проектов: арт-объект, памятник, театрализованную экскурсию и другие форматы работы с памятью писателя.",
    moreLabel: "Подробнее",
  },
  en: {
    eyebrow: "INITIATIVE PROJECTS",
    title: "Implemented Projects",
    lead:
      "The initiative grew out of the idea of commemorating Ales Adamovich in Hluša and gradually developed into several independent projects: an art object, a monument, a theatrical tour, and other formats of working with the writer’s memory.",
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
      be: "Арт-аб’ект у Глушы, які ператварыў звычайны аўтобусны прыпынак у заўважную турыстычную кропку і прыцягнуў увагу да пасёлка і постаці Адамовіча. Мастак Аляксандр Благій.",
      ru: "Арт-объект в Глуше, который превратил обычную автобусную остановку в заметную туристическую точку и привлёк внимание к посёлку и фигуре Адамовича. Художник Александр Благий.",
      en: "An art object in Hluša that transformed an ordinary bus stop into a visible tourist landmark and drew attention to the village and the figure of Adamovich. Artist: Aliaksandr Blahiy",
    },
    image: "/assets/images/initiative/prypynak-adamovich-stop.jpg",
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
      be: "Першы ў свеце помнік Алесю Адамовічу, усталяваны ў Глушы — на малой радзіме пісьменніка. Ён з’явіўся да 25-й гадавіны з дня смерці Адамовіча і заслужана лічыцца народным помнікам. Скульптар Генік Лойка.",
      ru: "Первый в мире памятник Алесю Адамовичу, установленный в Глуше — на малой родине писателя. Он появился к 25-й годовщине со дня смерти Адамовича и заслуженно считается народным памятником. Скульптор Геник Лойка.",
      en: "The world’s first monument to Ales Adamovich, installed in Hluša — the writer’s small homeland. It was unveiled on the 25th anniversary of Adamovich’s death and is rightly considered a people’s monument. Sculptor: Henik Loika.",
    },
    image: "/assets/images/initiative/adamovich-monument-bust.png",
    imageAlt: {
      be: "Помнік Алесю Адамовічу ў Глушы",
      ru: "Памятник Алесю Адамовичу в Глуше",
      en: "The monument to Ales Adamovich in Glusha",
    },
    order: 2,
  },
  {
    id: "theatrical-route",
    year: "2019",
    title: {
      be: "Тэатралізаваная экскурсія",
      ru: "Театрализованная экскурсия",
      en: "Theatrical Excursion",
    },
    description: {
      be: "Тэатралізаваная экскурсія па мясцінах Алеся Адамовіча ў Глушы, падчас якой героі ягоных твораў ажылі ў выкананні актораў Бабруйскага тэатра імя Вінцэнта Дуніна-Марцінкевіча.",
      ru: "Театрализованная экскурсия по местам Алеся Адамовича в Глуше, во время которой герои его произведений ожили в исполнении актёров Бобруйского театра имени Винцента Дунина-Марцинкевича.",
      en: "A theatrical tour through the places connected with Ales Adamovich in Hluša, where characters from his works came to life through performances by actors of the Babrujsk Vincent Dunin-Marcinkievič Theatre.",
    },
    image: "/assets/images/initiative/theatrical-excursion.png",
    imageAlt: {
      be: "Сустрэча і прэзентацыя ініцыятывы",
      ru: "Встреча и презентация инициативы",
      en: "A meeting and presentation of the initiative",
    },
    order: 3,
  },
];
