import type { Locale, RequiredLocalizedText } from "@/types/common.types";

export type SupportEntryType =
  | "general-thanks"
  | "public-support"
  | "cultural-contribution"
  | "voice-contribution"
  | "crowdfunding-platform"
  | "stage-support"
  | "media-support"
  | "current-funder"
  | "fiscal-partner";

export type SupportVisibility = "public" | "anonymous" | "hidden";

export type InitiativeSupportEntry = {
  id: string;
  name: RequiredLocalizedText;
  type: SupportEntryType;
  title?: RequiredLocalizedText;
  role?: RequiredLocalizedText;
  contribution: RequiredLocalizedText;
  period?: RequiredLocalizedText;
  logo?: string;
  image?: string;
  imageAlt?: RequiredLocalizedText;
  href?: string;
  visibility: SupportVisibility;
  isCurrent?: boolean;
  showLogo?: boolean;
  featured?: boolean;
  order?: number;
};

export type InitiativeTeamMember = {
  id: string;
  name: RequiredLocalizedText;
  role: RequiredLocalizedText;
  contribution: RequiredLocalizedText;
  image?: string;
  imageAlt?: RequiredLocalizedText;
  order?: number;
};

export type InitiativeSupportCopy = {
  peopleEyebrow: string;
  teamTitle: string;
  teamText: string;
  collectiveNote: string;
  featuredEyebrow: string;
  previousContribution: string;
  nextContribution: string;
  supportEyebrow: string;
  supportTitle: string;
  supportText: string;
  specialThanksTitle: string;
  helpersTitle: string;
  mediaTitle: string;
  currentPartnersTitle: string;
  partnersEyebrow: string;
  partnersTitle: string;
  partnersText: string;
  strategicPartnersTitle: string;
  informationPartnersTitle: string;
  culturalPartnersTitle: string;
  platformPartnersTitle: string;
  communityTitle: string;
  fiscalTitle: string;
  currentText: string;
  communityText: string;
  closingText: string;
  contactLabel: string;
  supportLabel: string;
  becomePartnerLabel: string;
  helpers: string[];
  media: string[];
};

export const initiativeSupportCopy = {
  be: {
    peopleEyebrow: "Людзі ініцыятывы",
    teamTitle: "Людзі ініцыатывы",
    teamText:
      "Ініцыятыву «Прыпынак Адамовіча» сёння развіваюць і падтрымліваюць людзі, якія працягваюць працу над новымі праектамі і захаваннем спадчыны.",
    collectiveNote:
      "У розныя гады да ініцыятывы далучаліся розныя людзі. Дзякуем кожнаму, хто быў з намі на гэтым шляху.",
    featuredEyebrow: "Асобны ўклад",
    previousContribution: "Папярэдні ўклад",
    nextContribution: "Наступны ўклад",
    supportEyebrow: "Падтрымка і ўдзячнасць",
    supportTitle: "Каму мы ўдзячныя",
    supportText:
      "Гэтая ініцыятыва стала магчымай дзякуючы людзям і арганізацыям, якія падтрымалі нас ідэямі, словам, камунікацыяй, грашыма, публічнасцю і салідарнасцю.",
    specialThanksTitle: "Асобная падзяка",
    helpersTitle: "Людзі, якія дапамагалі",
    mediaTitle: "Медыя і культурная супольнасць",
    currentPartnersTitle: "Партнёры сёння",
    partnersEyebrow: "Партнёры і падтрымка",
    partnersTitle: "Разам мы захоўваем памяць",
    partnersText:
      "Ініцыятыва існуе дзякуючы партнёрам, сябрам і супольнасці. Мы адкрытыя да супрацы і рады новым аднадумцам на гэтым шляху.",
    strategicPartnersTitle: "Стратэгічныя партнёры",
    informationPartnersTitle: "Інфармацыйная падтрымка",
    culturalPartnersTitle: "Культурная падтрымка",
    platformPartnersTitle: "Платформы і падтрымка праекта",
    communityTitle: "Сябры і супольнасць",
    fiscalTitle: "Фіскальны партнёр",
    currentText:
      "Праект рэалізуецца пры падтрымцы ArtPower Belarus і Еўрапейскага Саюза.",
    communityText:
      "Людзі, якія падтрымліваюць праект сэрцам, словам, распаўсюдам інфармацыі і штодзённай салідарнасцю.",
    closingText:
      "Гэта не толькі праект ініцыятыўнай каманды. Гэта агульная справа і памяць, якую мы ствараем разам — цяпер і для будучых пакаленняў.",
    contactLabel: "Звязацца з намі",
    supportLabel: "Падтрымаць праект",
    becomePartnerLabel: "Стаць партнёрам",
    helpers: [
      "удзельнікі краўдфандынгу",
      "жыхары Глушы",
      "падпісанты зваротаў",
      "валанцёры і сябры ініцыятывы",
      "усе, хто падтрымліваў словам, справай і ўдзелам",
    ],
    media: [
      "журналісты і незалежныя медыя",
      "культурныя прасторы і ініцыятывы",
      "даследчыкі, архівісты, настаўнікі",
      "усе, хто распавядае гісторыю пра Алеся Адамовіча",
    ],
  },
  ru: {
    peopleEyebrow: "Люди инициативы",
    teamTitle: "Команда сегодня",
    teamText:
      "Инициативу «Прыпынак Адамовіча» сегодня развивают люди, которые продолжают работу над новыми проектами и сохранением наследия.",
    collectiveNote:
      "В разные годы к инициативе присоединялись десятки людей: от авторов и исследователей до волонтёров и помощников на местах. Спасибо каждому, кто был с нами на этом пути.",
    featuredEyebrow: "Особый вклад",
    previousContribution: "Предыдущий вклад",
    nextContribution: "Следующий вклад",
    supportEyebrow: "Поддержка и благодарность",
    supportTitle: "Кому мы благодарны",
    supportText:
      "Эта инициатива стала возможной благодаря людям и организациям, которые поддержали нас идеями, словом, коммуникацией, средствами, публичностью и солидарностью.",
    specialThanksTitle: "Особая благодарность",
    helpersTitle: "Люди, которые помогали",
    mediaTitle: "Медиа и культурное сообщество",
    currentPartnersTitle: "Партнёры сегодня",
    partnersEyebrow: "Партнёры и поддержка",
    partnersTitle: "Вместе мы сохраняем память",
    partnersText:
      "Инициатива существует благодаря партнёрам, друзьям и сообществу. Мы открыты к сотрудничеству и рады новым единомышленникам на этом пути.",
    strategicPartnersTitle: "Стратегические партнёры",
    informationPartnersTitle: "Информационная поддержка",
    culturalPartnersTitle: "Культурная поддержка",
    platformPartnersTitle: "Платформы и поддержка проекта",
    communityTitle: "Друзья и сообщество",
    fiscalTitle: "Фискальный партнёр",
    currentText:
      "Проект реализуется при поддержке ArtPower Belarus и Европейского Союза.",
    communityText:
      "Люди, которые поддерживают проект сердцем, словом, распространением информации и повседневной солидарностью.",
    closingText:
      "Это не только проект инициативной команды. Это общее дело и память, которую мы создаём вместе — сейчас и для будущих поколений.",
    contactLabel: "Связаться с нами",
    supportLabel: "Поддержать проект",
    becomePartnerLabel: "Стать партнёром",
    helpers: [
      "участники краудфандинга",
      "жители Глуши",
      "подписанты обращений",
      "волонтёры и друзья инициативы",
      "все, кто поддерживал словом, делом и участием",
    ],
    media: [
      "журналисты и независимые медиа",
      "культурные пространства и инициативы",
      "исследователи, архивисты, учителя",
      "все, кто рассказывает историю об Алесе Адамовиче",
    ],
  },
  en: {
    peopleEyebrow: "People of the initiative",
    teamTitle: "Team Today",
    teamText:
      "The Prypynak Adamovicha initiative is now developed by people who continue working on new projects and preserving the legacy.",
    collectiveNote:
      "Over the years, dozens of people have joined the initiative: from authors and researchers to volunteers and helpers on the ground. We thank everyone who has walked this path with us.",
    featuredEyebrow: "Individual contribution",
    previousContribution: "Previous contribution",
    nextContribution: "Next contribution",
    supportEyebrow: "Support and gratitude",
    supportTitle: "Who We Are Grateful To",
    supportText:
      "This initiative became possible thanks to people and organizations who supported it with ideas, words, communication, donations, publicity and solidarity.",
    specialThanksTitle: "Special thanks",
    helpersTitle: "People who helped",
    mediaTitle: "Media and cultural community",
    currentPartnersTitle: "Partners today",
    partnersEyebrow: "Partners and support",
    partnersTitle: "Together We Preserve Memory",
    partnersText:
      "The initiative exists thanks to partners, friends and the community. We are open to cooperation and welcome new allies on this path.",
    strategicPartnersTitle: "Strategic partners",
    informationPartnersTitle: "Information support",
    culturalPartnersTitle: "Cultural support",
    platformPartnersTitle: "Platforms and project support",
    communityTitle: "Friends and community",
    fiscalTitle: "Fiscal partner",
    currentText:
      "The project is implemented with support from ArtPower Belarus and the European Union.",
    communityText:
      "People who support the project with care, words, sharing information and everyday solidarity.",
    closingText:
      "This is not only the work of an initiative team. It is a shared act of memory that we create together, now and for future generations.",
    contactLabel: "Contact Us",
    supportLabel: "Support the Project",
    becomePartnerLabel: "Become a Partner",
    helpers: [
      "crowdfunding participants",
      "residents of Glusha",
      "appeal signatories",
      "volunteers and friends of the initiative",
      "everyone who supported the work with words, action and presence",
    ],
    media: [
      "journalists and independent media",
      "cultural spaces and initiatives",
      "researchers, archivists and teachers",
      "everyone who tells the story of Ales Adamovich",
    ],
  },
} satisfies Record<Locale, InitiativeSupportCopy>;

export const initiativeSupportGroups: {
  individualContributionTypes: SupportEntryType[];
  publicThanksTypes: SupportEntryType[];
  platformTypes: SupportEntryType[];
  stageTypes: SupportEntryType[];
} = {
  individualContributionTypes: [
    "cultural-contribution",
    "voice-contribution",
    "public-support",
  ],
  publicThanksTypes: ["public-support", "voice-contribution"],
  platformTypes: ["crowdfunding-platform"],
  stageTypes: ["stage-support"],
};

export const supportFallbackLabels: Record<SupportEntryType, string> = {
  "general-thanks": "TH",
  "public-support": "PS",
  "cultural-contribution": "ART",
  "voice-contribution": "VO",
  "crowdfunding-platform": "CF",
  "stage-support": "ST",
  "media-support": "ME",
  "current-funder": "FD",
  "fiscal-partner": "FP",
};

export const initiativeTeam: InitiativeTeamMember[] = [
  {
    id: "andrus-arkhipenka",
    name: {
      be: "Андрусь Архіпенка",
      ru: "Андрусь Архипенко",
      en: "Andrus Arkhipenka",
    },
    role: {
      be: "ініцыятар і кіраўнік праекта",
      ru: "инициатор и руководитель проекта",
      en: "project initiator and lead",
    },
    contribution: {
      be: "Каардынуе развіццё ініцыятывы, працу з партнёрамі, лічбавую платформу і падрыхтоўку новых этапаў праекта.",
      ru: "Координирует развитие инициативы, работу с партнёрами, цифровую платформу и подготовку новых этапов проекта.",
      en: "Coordinates the initiative, partner work, the digital platform and preparation of the project's next stages.",
    },
    image: "/assets/images/initiative/people/andrus-arkhipenka.jpg",
    imageAlt: {
      be: "Андрусь Архіпенка",
      ru: "Андрусь Архипенко",
      en: "Andrus Arkhipenka",
    },
    order: 1,
  },
  {
    id: "maryna-malchanava",
    name: {
      be: "Марына Малчанава",
      ru: "Марина Малчанова",
      en: "Maryna Malchanava",
    },
    role: {
      be: "каардынатарка",
      ru: "координаторка",
      en: "coordinator",
    },
    contribution: {
      be: "Дапамагае з арганізацыяй, камунікацыяй, матэрыяламі і штодзённай працай ініцыятывы.",
      ru: "Помогает с организацией, коммуникацией, материалами и ежедневной работой инициативы.",
      en: "Supports organization, communication, materials and the initiative's day-to-day work.",
    },
    order: 2,
  },
];

export const initiativeSupport: InitiativeSupportEntry[] = [
  {
    id: "general-community-thanks",
    name: {
      be: "Людзі і супольнасці, якія былі побач",
      ru: "Люди и сообщества, которые были рядом",
      en: "People and communities who stood nearby",
    },
    type: "general-thanks",
    contribution: {
      be: "Мы ўдзячныя ўсім, хто ў розныя гады падтрымліваў ініцыятыву: падпісваў звароты, ахвяраваў сродкі, дапамагаў з распаўсюдам інфармацыі, прыходзіў на сустрэчы, удзельнічаў у падзеях і верыў, што памяць пра Алеся Адамовіча павінна жыць. З меркаванняў бяспекі мы не называем усіх людзей і супольнасці, якія дапамагалі праекту. Але іх удзел застаецца важнай часткай гэтай гісторыі.",
      ru: "Мы благодарны всем, кто в разные годы поддерживал инициативу: подписывал обращения, жертвовал средства, помогал распространять информацию, приходил на встречи, участвовал в событиях и верил, что память об Алесе Адамовиче должна жить. Из соображений безопасности мы не называем всех людей и сообщества, которые помогали проекту. Но их участие остаётся важной частью этой истории.",
      en: "We are grateful to everyone who supported the initiative over the years: signing appeals, donating, helping share information, attending meetings, taking part in events and believing that the memory of Ales Adamovich must live on. For safety reasons, we do not name every person or community that helped the project. Their participation remains an important part of this story.",
    },
    visibility: "anonymous",
    order: 1,
  },
  {
    id: "henik-loika",
    name: {
      be: "Генік Лойка",
      ru: "Геник Лойка",
      en: "Henik Loika",
    },
    type: "cultural-contribution",
    role: {
      be: "скульптар бюста",
      ru: "скульптор бюста",
      en: "bust sculptor",
    },
    contribution: {
      be: "Стварэнне бюста Алеся Адамовіча ў Глушы — матэрыяльнага знака памяці пра пісьменніка на яго малой радзіме.",
      ru: "Создание бюста Алеся Адамовича в Глуше — материального знака памяти о писателе на его малой родине.",
      en: "Created the bust of Ales Adamovich in Glusha, a tangible sign of memory for the writer in his native place.",
    },
    image: "/assets/images/initiative/people/henik-loika.jpg",
    imageAlt: {
      be: "Генік Лойка з макетам бюста Алеся Адамовіча",
      ru: "Геник Лойка с макетом бюста Алеся Адамовича",
      en: "Henik Loika with a model of the Ales Adamovich bust",
    },
    visibility: "public",
    featured: true,
    order: 10,
  },
  {
    id: "malyavanych",
    name: {
      be: "Маляваныч",
      ru: "Маляваныч",
      en: "Malyavanych",
    },
    type: "voice-contribution",
    role: {
      be: "голас аўдыягіда",
      ru: "голос аудиогида",
      en: "audio guide voice",
    },
    contribution: {
      be: "Удзел у агучванні аўдыягіда па мясцінах Алеся Адамовіча ў Глушы. Яго голас дапамагае ажывіць гісторыі маршруту.",
      ru: "Участие в озвучивании аудиогида по местам Алеся Адамовича в Глуше. Его голос помогает оживить истории маршрута.",
      en: "Voiced the audio guide through places connected with Ales Adamovich in Glusha, helping bring the route's stories to life.",
    },
    image: "/assets/images/initiative/people/malyavanych.jpg",
    imageAlt: {
      be: "Маляваныч",
      ru: "Маляваныч",
      en: "Malyavanych",
    },
    visibility: "public",
    order: 20,
  },
  {
    id: "alexievich",
    name: {
      be: "Святлана Алексіевіч",
      ru: "Светлана Алексиевич",
      en: "Svetlana Alexievich",
    },
    type: "public-support",
    role: {
      be: "публічная падтрымка",
      ru: "публичная поддержка",
      en: "public support",
    },
    contribution: {
      be: "Падтрымка збору сродкаў на помнік Алесю Адамовічу і ўвага да справы ўшанавання яго памяці.",
      ru: "Поддержка сбора средств на памятник Алесю Адамовичу и внимание к делу увековечения его памяти.",
      en: "Supported fundraising for the Ales Adamovich monument and drew attention to the work of honoring his memory.",
    },
    image: "/assets/images/initiative/people/alexievich.jpg",
    imageAlt: {
      be: "Святлана Алексіевіч",
      ru: "Светлана Алексиевич",
      en: "Svetlana Alexievich",
    },
    visibility: "public",
    order: 30,
  },
  {
    id: "zisser",
    name: {
      be: "Юрый Зісер",
      ru: "Юрий Зиссер",
      en: "Yury Zisser",
    },
    type: "public-support",
    role: {
      be: "падтрымка і камунікацыя",
      ru: "поддержка и коммуникация",
      en: "support and communication",
    },
    contribution: {
      be: "Падтрымка ініцыятывы і дапамога ў камунікацыі, якая стала важнай для рэалізацыі помніка.",
      ru: "Поддержка инициативы и помощь в коммуникации, которая стала важной для реализации памятника.",
      en: "Supported the initiative and helped with communication that became important for making the monument possible.",
    },
    image: "/assets/images/initiative/people/zisser.jpg",
    imageAlt: {
      be: "Юрый Зісер",
      ru: "Юрий Зиссер",
      en: "Yury Zisser",
    },
    visibility: "public",
    order: 40,
  },
  {
    id: "talaka",
    name: {
      be: "Talaka",
      ru: "Talaka",
      en: "Talaka",
    },
    type: "crowdfunding-platform",
    contribution: {
      be: "Краўдфандынгавая пляцоўка, праз якую людзі падтрымлівалі збор сродкаў на помнік і развіццё ініцыятывы.",
      ru: "Краудфандинговая площадка, через которую люди поддерживали сбор средств на памятник и развитие инициативы.",
      en: "A crowdfunding platform through which people supported fundraising for the monument and the initiative's development.",
    },
    visibility: "public",
    showLogo: true,
    order: 50,
  },
  {
    id: "molamola",
    name: {
      be: "MolaMola",
      ru: "MolaMola",
      en: "MolaMola",
    },
    type: "crowdfunding-platform",
    contribution: {
      be: "Краўдфандынгавая пляцоўка, якая дапамагла сабраць недастатковую суму на фінальным этапе.",
      ru: "Краудфандинговая площадка, которая помогла собрать недостающую сумму на финальном этапе.",
      en: "A crowdfunding platform that helped collect the remaining amount at the final stage.",
    },
    visibility: "public",
    showLogo: true,
    order: 60,
  },
  {
    id: "social-weekend",
    name: {
      be: "Social Weekend",
      ru: "Social Weekend",
      en: "Social Weekend",
    },
    type: "stage-support",
    contribution: {
      be: "Падтрымка ідэі маршруту і тэатралізаванай экскурсіі па мясцінах Алеся Адамовіча ў Глушы.",
      ru: "Поддержка идеи маршрута и театрализованной экскурсии по местам Алеся Адамовича в Глуше.",
      en: "Supported the idea of a route and a theatrical excursion through places connected with Ales Adamovich in Glusha.",
    },
    visibility: "public",
    showLogo: true,
    order: 70,
  },
  {
    id: "pen-belarus",
    name: {
      be: "PEN Belarus",
      ru: "PEN Belarus",
      en: "PEN Belarus",
    },
    type: "stage-support",
    contribution: {
      be: "Культурная і публічная падтрымка справы ўшанавання памяці Алеся Адамовіча.",
      ru: "Культурная и публичная поддержка дела увековечения памяти Алеся Адамовича.",
      en: "Cultural and public support for the work of honoring Ales Adamovich's memory.",
    },
    visibility: "public",
    showLogo: true,
    order: 80,
  },
  {
    id: "media-support-general",
    name: {
      be: "Інфармацыйная падтрымка",
      ru: "Информационная поддержка",
      en: "Media and Information Support",
    },
    type: "media-support",
    contribution: {
      be: "Асвятленне ініцыятывы, публікацыі, распаўсюд інфармацыі і падтрымка бачнасці праекта ў медыя і культурных прасторах.",
      ru: "Освещение инициативы, публикации, распространение информации и поддержка видимости проекта в медиа и культурных пространствах.",
      en: "Coverage of the initiative, publications, information sharing and support for the project's visibility in media and cultural spaces.",
    },
    visibility: "anonymous",
    order: 90,
  },
  {
    id: "artpower-belarus",
    name: {
      be: "ArtPower Belarus",
      ru: "ArtPower Belarus",
      en: "ArtPower Belarus",
    },
    type: "current-funder",
    contribution: {
      be: "Падтрымка стварэння лічбавай платформы, аўдыягіда і падрыхтоўкі да 100-годдзя Алеся Адамовіча.",
      ru: "Поддержка создания цифровой платформы, аудиогида и подготовки к 100-летию Алеся Адамовича.",
      en: "Supports the creation of the digital platform, audio guide and preparation for Ales Adamovich's 100th anniversary.",
    },
    logo: "/assets/partners/artpower-logo.svg",
    href: "https://byculture.org/en/artpower-belarus-eng/",
    visibility: "public",
    isCurrent: true,
    showLogo: true,
    order: 100,
  },
  {
    id: "european-union",
    name: {
      be: "European Union",
      ru: "European Union",
      en: "European Union",
    },
    type: "current-funder",
    contribution: {
      be: "Фінансавая падтрымка праграмы ArtPower Belarus, у межах якой рэалізуецца цяперашні этап праекта.",
      ru: "Финансовая поддержка программы ArtPower Belarus, в рамках которой реализуется текущий этап проекта.",
      en: "Financial support for the ArtPower Belarus programme, within which the current stage of the project is being implemented.",
    },
    logo: "/assets/partners/eu-logo.png",
    visibility: "public",
    isCurrent: true,
    showLogo: true,
    order: 110,
  },
  {
    id: "fiscal-partner",
    name: {
      be: "Фіскальны партнёр праекта",
      ru: "Фискальный партнёр проекта",
      en: "Project fiscal partner",
    },
    type: "fiscal-partner",
    contribution: {
      be: "Праект рэалізуецца праз фіскальнага партнёра, які забяспечвае фінансавую і прававую падтрымку.",
      ru: "Проект реализуется через фискального партнёра, который обеспечивает финансовую и правовую поддержку.",
      en: "The project is implemented through a fiscal partner that provides financial and legal support.",
    },
    visibility: "public",
    showLogo: false,
    order: 120,
  },
];
