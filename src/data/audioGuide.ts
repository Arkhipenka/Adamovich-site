import type { RequiredLocalizedText } from "@/types/common.types";

export type AudioGuideImage = {
  src: string;
  alt: RequiredLocalizedText;
};

export type AudioGuideAction = {
  label: RequiredLocalizedText;
  href: string;
  variant?: "primary" | "secondary";
};

export type AudioGuideFeature = {
  id: string;
  title: RequiredLocalizedText;
  text: RequiredLocalizedText;
};

export type AudioGuideProcessStep = {
  id: string;
  number: string;
  title: RequiredLocalizedText;
  text: RequiredLocalizedText;
};

export type AudioGuideVoiceFeature = {
  eyebrow: RequiredLocalizedText;
  name: RequiredLocalizedText;
  role: RequiredLocalizedText;
  text: RequiredLocalizedText;
  image: AudioGuideImage;
};

export type AudioGuideRoutePoint = {
  id: string;
  number: string;
  title: RequiredLocalizedText;
  text: RequiredLocalizedText;
  image: AudioGuideImage;
};

export type AudioGuideListenOption = {
  id: string;
  title: RequiredLocalizedText;
  text: RequiredLocalizedText;
  href: string;
  label: RequiredLocalizedText;
  tone: "telegram" | "app";
};

export type AudioGuidePartner = {
  id: string;
  name: RequiredLocalizedText;
  text: RequiredLocalizedText;
  logo: string;
  href?: string;
};

export type AudioGuidePageContent = {
  hero: {
    eyebrow: RequiredLocalizedText;
    title: RequiredLocalizedText;
    description: RequiredLocalizedText;
    image: AudioGuideImage;
    actions: AudioGuideAction[];
    status: RequiredLocalizedText;
  };
  intro: {
    title: RequiredLocalizedText;
    paragraphs: RequiredLocalizedText[];
    image: AudioGuideImage;
    features: AudioGuideFeature[];
  };
  creation: {
    eyebrow: RequiredLocalizedText;
    title: RequiredLocalizedText;
    lead: RequiredLocalizedText[];
    voice: AudioGuideVoiceFeature;
    note: RequiredLocalizedText;
  };
  usage: {
    title: RequiredLocalizedText;
    steps: AudioGuideProcessStep[];
  };
  route: {
    title: RequiredLocalizedText;
    points: AudioGuideRoutePoint[];
  };
  listen: {
    title: RequiredLocalizedText;
    options: AudioGuideListenOption[];
  };
  partners: {
    eyebrow: RequiredLocalizedText;
    title: RequiredLocalizedText;
    supportLabel: RequiredLocalizedText;
    technicalLabel: RequiredLocalizedText;
    items: AudioGuidePartner[];
    technicalItems: AudioGuidePartner[];
  };
};

export const audioGuideContent: AudioGuidePageContent = {
  hero: {
    eyebrow: {
      be: "Аўдыягід па Глушы",
      ru: "Аудиогид по Глуше",
      en: "Audio guide through Glusha",
    },
    title: {
      be: "Сцежкамі Адамовіча",
      ru: "Тропами Адамовича",
      en: "The Adamovich paths",
    },
    description: {
      be: "Аўдыягід па мясцінах Алеся Адамовіча ў Глушы — які вядзе праз вуліцы, помнік, арт-аб’ект і гісторыі людзей.",
      ru: "Аудиогид по местам Алеся Адамовича в Глуше — маршрут через улицы, памятник, арт-объект и истории людей.",
      en: "An audio guide through Ales Adamovich’s places in Glusha — a route through streets, a monument, an art object and people’s stories.",
    },
    image: {
      src: "/assets/images/audioguide/adamovich-glusha-forest-mushrooms.jpg",
      alt: {
        be: "Аўдыягід па Глушы з прыпынкам Адамовіча, помнікам і маршрутам",
        ru: "Аудиогид по Глуше с остановкой Адамовича, памятником и маршрутом",
        en: "Glusha audio guide with the Adamovich stop, monument and route",
      },
    },
    actions: [
      {
        label: {
          be: "Адкрыць у Telegram",
          ru: "Открыть в Telegram",
          en: "Open in Telegram",
        },
        href: "telegram",
        variant: "primary",
      },
      {
        label: {
          be: "Паглядзець маршрут",
          ru: "Посмотреть маршрут",
          en: "View route",
        },
        href: "#route-title",
        variant: "secondary",
      },
    ],
    status: {
      be: "Даступна ў Telegram-боце · мабільны дадатак рыхтуецца",
      ru: "Доступно в Telegram-боте · мобильное приложение готовится",
      en: "Available in the Telegram bot · mobile app in preparation",
    },
  },
  intro: {
    title: {
      be: "Што такое аўдыягід",
      ru: "Что такое аудиогид",
      en: "What the audio guide is",
    },
    paragraphs: [
      {
        be: "Гэта аўдыяпадарожжа па Глушы — пасёлку, дзе прайшло яго дзіцінства і прайшоў свой шлях Алесь Адамовіч. Вы пачуеце рэальныя гісторыі, успаміны, радкі яго кніг агучаныя прафесійным акторвм.",
        ru: "Это аудиопутешествие по Глуше — месту, где родился и к которому возвращался Алесь Адамович. Вы услышите реальные истории, воспоминания, строки его книг озвученные професиональным актером.",
        en: "It is an audio journey through Glusha, the place where Ales Adamovich was born and to which his memory returns. You will hear stories, recollections, book fragments .",
      },
      {
        be: "Кожная кропка маршруту адкрывае новы пласт жыцця і спадчыны пісьменніка — праз месца, людзей і ідэі.",
        ru: "Каждая точка маршрута открывает новый слой жизни и наследия писателя через место, людей и идеи.",
        en: "Each route point opens a new layer of the writer’s life and legacy through place, people and ideas.",
      },
      {
        be: "На дадзены момант даступны толькі на беларускай мове.",
        ru: "На данный момент доступен только на белорусском языке.",
        en: "At the moment, it is available only in Belarusian.",
      },
    ],
    image: {
      src: "/assets/images/audioguide/audio-guide-phone-mockup.png",
      alt: {
        be: "Экран мабільнага аўдыягіда па Глушы",
        ru: "Экран мобильного аудиогида по Глуше",
        en: "Mobile audio guide screen for Glusha",
      },
    },
    features: [
      {
        id: "five-stops",
        title: {
          be: "7 кропак маршруту",
          ru: "7 точек маршрута",
          en: "7 route stops",
        },
        text: {
          be: "Мясціны, звязаныя з Алесем Адамовічам.",
          ru: "Места, связанные с Алесем Адамовичем.",
          en: "Places connected with Ales Adamovich.",
        },
      },
      {
        id: "stories",
        title: {
          be: "Розныя гісторыі",
          ru: "Разные истории",
          en: "Many stories",
        },
        text: {
          be: "Успаміны, цытаты і правераныя факты.",
          ru: "Воспоминания, цитаты и подлинные факты.",
          en: "Memories, quotations and authentic facts.",
        },
      },
      {
        id: "easy",
        title: {
          be: "Лёгка і зручна",
          ru: "Легко и удобно",
          en: "Easy to use",
        },
        text: {
          be: "Слухайце ў зручным тэмпе на месцы ці здалёк.",
          ru: "Слушайте в удобном темпе на месте или издалека.",
          en: "Listen at your own pace, on location or remotely.",
        },
      },
    ],
  },
  creation: {
    eyebrow: {
      be: "Стварэнне",
      ru: "Создание",
      en: "Creation",
    },
    title: {
      be: "Як ствараўся аўдыягід",
      ru: "Как создавался аудиогид",
      en: "How the audio guide was created",
    },
    lead: [
      {
        be: "Аўдыягід нарадзіўся з жадання зрабіць памяць пра Алеся Адамовіча ў Глушы жывой і даступнай.",
        ru: "Аудиогид родился из желания сделать память об Алесе Адамовиче в Глуше живой и доступной.",
        en: "The audio guide grew from the wish to make the memory of Ales Adamovich in Glusha alive and accessible.",
      },
      {
        be: "Мы збіралі матэрыялы, удакладнялі факты, працавалі з тэкстамі маршруту і даволі хутка знайшлі голас, які змог перадаць не толькі інфармацыю, але і атмасферу месца. Даўжэйшым быў шлях ад ідэі да рэалізацыі: трэба было знайсці падтрымку, захаваць задуму і дачакацца моманту, калі праект можна будзе зрабіць якасна.",
        ru: "Мы собирали материалы, уточняли факты, работали с текстами маршрута и довольно быстро нашли голос, который смог передать не только информацию, но и атмосферу места. Дольше занял путь от идеи к реализации: нужно было найти поддержку, сохранить замысел и дождаться момента, когда проект можно будет сделать качественно.",
        en: "We gathered materials, checked facts, worked on the route texts, and quite quickly found a voice that could convey not only information, but also the atmosphere of the place. The path from idea to implementation took longer: we had to find support, preserve the concept, and wait for the moment when the project could be done properly.",
      },
      {
        be: "Нам было важна, каб гэта была не сухая экскурсія, а спакойная і ўважлівая сустрэча з Глушай — з яе памяццю, дарогамі, людзьмі і слядамі жыцця пісьменніка.",
        ru: "Нам было важно, чтобы это была не сухая экскурсия, а спокойная и внимательная встреча с Глушей — с её памятью, дорогами, людьми и следами жизни писателя.",
        en: "It was important to us that this would not be a dry tour, but a calm and attentive encounter with Glusha: its memory, roads, people, and traces of the writer's life.",
      },
      {
        be: "Так з'явіўся аўдыягід — маршрут, які дапамагае пачуць гісторыю Алеся Адамовіча там, дзе яна пачалася.",
        ru: "Так появился аудиогид — маршрут, который помогает услышать историю Алеся Адамовича там, где она началась.",
        en: "This is how the audio guide appeared: a route that helps listeners hear the story of Ales Adamovich where it began.",
      },
    ],
    voice: {
      eyebrow: {
        be: "Голас аўдыягіда",
        ru: "Голос аудиогида",
        en: "Audio guide voice",
      },
      name: {
        be: "Маляваныч",
        ru: "Маляваныч",
        en: "Malyavanych",
      },
      role: {
        be: "акцёр, голас маршруту",
        ru: "актёр, голос маршрута",
        en: "actor, voice of the route",
      },
      text: {
        be: "Менавіта яго голас вядзе слухача па мясцінах Алеся Адамовіча ў Глушы: ад помніка і прыпынку да гісторый людзей, памяці і вяртання да малой радзімы.",
        ru: "Именно его голос ведёт слушателя по местам Алеся Адамовича в Глуше: от памятника и остановки до историй людей, памяти и возвращения к малой родине.",
        en: "His voice guides listeners through Ales Adamovich’s places in Glusha: from the monument and the stop to stories of people, memory and return to the small homeland.",
      },
      image: {
        src: "/assets/images/initiative/people/malyavanych.jpg",
        alt: {
          be: "Маляваныч",
          ru: "Маляваныч",
          en: "Malyavanych",
        },
      },
    },
    note: {
      be: "Аўдыягід будзе даступны ў Telegram-боце, пазней — у мабільным дадатку.",
      ru: "Аудиогид будет доступен в Telegram-боте, позже — в мобильном приложении.",
      en: "The audio guide will be available in the Telegram bot and later in the mobile app.",
    },
  },
  usage: {
    title: {
      be: "Як карыстацца",
      ru: "Как пользоваться",
      en: "How to use it",
    },
    steps: [
      {
        id: "activate",
        number: "1",
        title: {
          be: "Перайдзіце ў бот або ўсталюйце APK",
          ru: "Перейдите в бот или установите APK",
          en: "Open the bot or install the APK",
        },
        text: {
          be: "Адкрыйце аўдыягід у Telegram-боце або спампуйце і ўсталюйце APK-версію.",
          ru: "Откройте аудиогид в Telegram-боте или скачайте и установите APK-версию.",
          en: "Open the audio guide in the Telegram bot, or download and install the APK version.",
        },
      },
      {
        id: "choose",
        number: "2",
        title: {
          be: "Выберыце кропку",
          ru: "Выберите точку",
          en: "Choose a stop",
        },
        text: {
          be: "Адкрыйце спіс маршруту, выберыце патрэбную кропку і ўключыце аўдыя.",
          ru: "Откройте список маршрута, выберите нужную точку и включите аудио.",
          en: "Open the route list, choose the stop you need, and start the audio.",
        },
      },
      {
        id: "arrive",
        number: "3",
        title: {
          be: "Ідзіце ад месца да месца",
          ru: "Передвигайтесь от места к месту",
          en: "Move from place to place",
        },
        text: {
          be: "Калі вы ў Глушы, рухайцеся па кропках маршруту і слухайце гісторыі там, дзе яны звязаныя з месцам.",
          ru: "Если вы в Глуше, переходите по точкам маршрута и слушайте истории там, где они связаны с местом.",
          en: "If you are in Glusha, move through the route points and listen to each story where it belongs.",
        },
      },
      {
        id: "listen",
        number: "4",
        title: {
          be: "Слухайце і атрымлівайце асалоду",
          ru: "Слушайте и наслаждайтесь",
          en: "Listen and enjoy",
        },
        text: {
          be: "Надзеньце навушнікі, выберыце зручны тэмп і дазвольце гісторыі Глушы гучаць побач.",
          ru: "Наденьте наушники, выберите удобный темп и позвольте истории Глуши звучать рядом.",
          en: "Put on your headphones, choose a comfortable pace, and let Glusha’s story unfold around you.",
        },
      },
    ],
  },
  route: {
    title: {
      be: "Кропкі маршруту",
      ru: "Точки маршрута",
      en: "Route points",
    },
    points: [
      {
        id: "adamovich-stop",
        number: "01",
        title: {
          be: "Арт-аб’ект «Прыпынак Адамовіча»",
          ru: "Арт-объект «Прыпынак Адамовіча»",
          en: "Art object “Prypynak Adamoviča”",
        },
        text: {
          be: "Пачатак маршруту і адзін з самых пазнавальных знакаў памяці пра Алеся Адамовіча ў Глушы.",
          ru: "Начало маршрута и один из самых узнаваемых знаков памяти об Алесе Адамовиче в Глуше.",
          en: "The beginning of the route and one of the most recognizable signs of memory for Ales Adamovich in Glusha.",
        },
        image: {
          src: "/assets/images/initiative/prypynak-adamovich-stop.jpg",
          alt: {
            be: "Арт-аб’ект «Прыпынак Адамовіча» ў Глушы",
            ru: "Арт-объект «Прыпынак Адамовіча» в Глуше",
            en: "The art object “Prypynak Adamoviča” in Glusha",
          },
        },
      },
      {
        id: "adamovich-street",
        number: "02",
        title: {
          be: "Вуліца Алеся Адамовіча",
          ru: "Улица Алеся Адамовича",
          en: "Ales Adamovich Street",
        },
        text: {
          be: "Вуліца, якая захоўвае імя пісьменніка ў штодзённай прасторы пасёлка.",
          ru: "Улица, которая сохраняет имя писателя в повседневном пространстве посёлка.",
          en: "A street that keeps the writer’s name within the everyday space of the village.",
        },
        image: {
          src: "/assets/images/audioguide/route-point-glusha.jpg",
          alt: {
            be: "Вуліца ў Глушы",
            ru: "Улица в Глуше",
            en: "A street in Glusha",
          },
        },
      },
      {
        id: "adamovich-house",
        number: "03",
        title: {
          be: "Дом Адамовічаў",
          ru: "Дом Адамовичей",
          en: "The Adamovich Family House",
        },
        text: {
          be: "Месца, звязанае з сямейнай гісторыяй і вяртаннем Алеся Адамовіча да малой радзімы.",
          ru: "Место, связанное с семейной историей и возвращением Алеся Адамовича к малой родине.",
          en: "A place connected with family history and Ales Adamovich’s return to his small homeland.",
        },
        image: {
          src: "/assets/images/hero/glusha-pharmacy-1985.jpg",
          alt: {
            be: "Гістарычны будынак у Глушы",
            ru: "Историческое здание в Глуше",
            en: "A historic building in Glusha",
          },
        },
      },
      {
        id: "crafts-center",
        number: "04",
        title: {
          be: "Цэнтр рамёстваў",
          ru: "Центр ремёсел",
          en: "Crafts Center",
        },
        text: {
          be: "Кропка пра жывую культуру Глушы, мясцовыя традыцыі і супольнасць.",
          ru: "Точка о живой культуре Глуши, местных традициях и сообществе.",
          en: "A stop about Glusha’s living culture, local traditions, and community.",
        },
        image: {
          src: "/assets/images/initiative/theatrical-excursion.png",
          alt: {
            be: "Культурная падзея ў Глушы",
            ru: "Культурное событие в Глуше",
            en: "A cultural event in Glusha",
          },
        },
      },
      {
        id: "old-pharmacy",
        number: "05",
        title: {
          be: "Старая аптэка",
          ru: "Старая аптека",
          en: "Old Pharmacy",
        },
        text: {
          be: "Будынак, звязаны з гісторыяй сям’і Адамовічаў і памяццю пра Глушу.",
          ru: "Здание, связанное с историей семьи Адамовичей и памятью о Глуше.",
          en: "A building connected with the Adamovich family story and the memory of Glusha.",
        },
        image: {
          src: "/assets/images/audioguide/route-point-glusha.jpg",
          alt: {
            be: "Старая аптэка ў Глушы",
            ru: "Старая аптека в Глуше",
            en: "The old pharmacy in Glusha",
          },
        },
      },
      {
        id: "adamovich-bust",
        number: "06",
        title: {
          be: "Бюст Алеся Адамовіча",
          ru: "Бюст Алеся Адамовича",
          en: "Bust of Ales Adamovich",
        },
        text: {
          be: "Матэрыяльны знак памяці пра пісьменніка ў яго роднай Глушы.",
          ru: "Материальный знак памяти о писателе в его родной Глуше.",
          en: "A tangible sign of memory for the writer in his native Glusha.",
        },
        image: {
          src: "/assets/images/initiative/adamovich-monument-bust.png",
          alt: {
            be: "Бюст Алеся Адамовіча",
            ru: "Бюст Алеся Адамовича",
            en: "Bust of Ales Adamovich",
          },
        },
      },
      {
        id: "cemetery",
        number: "07",
        title: {
          be: "Могілкі",
          ru: "Кладбище",
          en: "Cemetery",
        },
        text: {
          be: "Месца памяці пра блізкіх, настаўнікаў, сяброў і землякоў.",
          ru: "Место памяти о близких, учителях, друзьях и земляках.",
          en: "A place of memory for family, teachers, friends and neighbours.",
        },
        image: {
          src: "/assets/images/initiative/memorial-illustration.png",
          alt: {
            be: "Мемарыяльны вобраз маршруту",
            ru: "Мемориальный образ маршрута",
            en: "Memorial image of the route",
          },
        },
      },
    ],
  },
  listen: {
    title: {
      be: "Дзе слухаць",
      ru: "Где слушать",
      en: "Where to listen",
    },
    options: [
      {
        id: "telegram",
        title: {
          be: "Telegram-бот",
          ru: "Telegram-бот",
          en: "Telegram bot",
        },
        text: {
          be: "Слухайце аўдыягід праз Telegram без усталёўкі дадатковых праграм.",
          ru: "Слушайте аудиогид через Telegram без установки дополнительных программ.",
          en: "Listen through Telegram without installing extra software.",
        },
        href: "telegram",
        label: {
          be: "Слухаць у Telegram",
          ru: "Слушать в Telegram",
          en: "Listen in Telegram",
        },
        tone: "telegram",
      },
      {
        id: "app",
        title: {
          be: "Мабільны дадатак",
          ru: "Мобильное приложение",
          en: "Mobile app",
        },
        text: {
          be: "Зручны дадатак з картай, афлайн-доступам і поўным маршрутам.",
          ru: "Удобное приложение с картой, офлайн-доступом и полным маршрутом.",
          en: "A convenient app with a map, offline access and the full route.",
        },
        href: "app",
        label: {
          be: "Спампаваць",
          ru: "Скачать",
          en: "Download",
        },
        tone: "app",
      },
    ],
  },
  partners: {
    eyebrow: {
      be: "Партнёры",
      ru: "Партнёры",
      en: "Partners",
    },
    title: {
      be: "Партнёры праекта",
      ru: "Партнёры проекта",
      en: "Project partners",
    },
    supportLabel: {
      be: "Праект рэалізуецца пры падтрымцы",
      ru: "Проект реализуется при поддержке",
      en: "The project is implemented with support from",
    },
    technicalLabel: {
      be: "Мабільная версія рэалізавана пры падтрымцы",
      ru: "Техническая поддержка APK-версии",
      en: "Technical support for the APK version",
    },
    items: [
      {
        id: "artpower",
        name: {
          be: "ArtPower Belarus",
          ru: "ArtPower Belarus",
          en: "ArtPower Belarus",
        },
        text: {
          be: "Платформа для развіцця культуры, супольнасцяў і творчасці.",
          ru: "Платформа для развития культуры, сообществ и творчества.",
          en: "A platform supporting culture, communities and creativity.",
        },
        logo: "/assets/partners/red-artpower-logo.png",
      },
      {
        id: "eu",
        name: {
          be: "Еўрапейскі Саюз",
          ru: "Европейский Союз",
          en: "European Union",
        },
        text: {
          be: "Праект рэалізуецца пры падтрымцы Еўрапейскага Саюза.",
          ru: "Проект реализуется при поддержке Европейского союза.",
          en: "The project is implemented with support from the European Union.",
        },
        logo: "/assets/partners/EU_POG.png",
      },
    ],
    technicalItems: [
      {
        id: "Belarusian Mecenats Club",
        name: {
          be: "Клуб Беларускіх меценатаў",
          ru: "Клуб Беларуских меценатов",
          en: "Belarusian mecenats club",
        },
        text: {
          be: "Падтрымка ў рэалізацыі APK-версіі аўдыягіда",
          ru: "Техническая поддержка Android APK-версии аудиогида.",
          en: "Technical support for the Android APK version of the audio guide.",
        },
        logo: "",
      },
    ],
  },
};
