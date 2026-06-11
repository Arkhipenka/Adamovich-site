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
    lead: RequiredLocalizedText;
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
    ],
    image: {
      src: "/assets/images/portraits/adamovich-desk-minsk-1989.jpg",
      alt: {
        be: "Алесь Адамовіч за рабочым сталом",
        ru: "Алесь Адамович за рабочим столом",
        en: "Ales Adamovich at his writing desk",
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
    lead: {
      be: "Аўдыягід нарадзіўся з жадання зрабіць памяць пра Алеся Адамовіча ў Глушы жывой і даступнай. Мы збіралі матэрыялы, працавалі з тэкстамі маршруту і шукалі голас, які зможа перадаць не толькі факты, але і атмасферу месца.",
      ru: "Аудиогид родился из желания сделать память об Алесе Адамовиче в Глуше живой и доступной. Мы собирали материалы, работали с текстами маршрута и искали голос, который сможет передать не только факты, но и атмосферу места.",
      en: "The audio guide grew from the wish to make the memory of Ales Adamovich in Glusha alive and accessible. We gathered materials, worked with route texts and searched for a voice able to carry not only facts, but the atmosphere of the place.",
    },
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
          be: "Актывуйце гід",
          ru: "Запустите гид",
          en: "Start the guide",
        },
        text: {
          be: "Адкрыйце маршрут праз Telegram-бот ці мабільны дадатак.",
          ru: "Откройте маршрут через Telegram-бот или мобильное приложение.",
          en: "Open the route through the Telegram bot or mobile app.",
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
          be: "Паглядзіце карту або спіс і абярыце адну з кропак маршруту.",
          ru: "Посмотрите карту или список и выберите одну из точек маршрута.",
          en: "Use the map or list to select one of the route points.",
        },
      },
      {
        id: "arrive",
        number: "3",
        title: {
          be: "Прыйдзіце на месца",
          ru: "Придите на место",
          en: "Arrive there",
        },
        text: {
          be: "Прыйдзіце да пазначанай кропкі — і гід будзе гатовы расказаць гісторыю.",
          ru: "Подойдите к отмеченной точке, и гид расскажет её историю.",
          en: "Come to the marked place and the guide will tell its story.",
        },
      },
      {
        id: "listen",
        number: "4",
        title: {
          be: "Слухайце і адчувайце",
          ru: "Слушайте и чувствуйте",
          en: "Listen and feel",
        },
        text: {
          be: "Надзеньце навушнікі і паглыбіцеся ў гісторыю Глушы.",
          ru: "Наденьте наушники и погрузитесь в историю Глуши.",
          en: "Put on headphones and enter Glusha’s memory landscape.",
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
        id: "pharmacy",
        number: "01",
        title: {
          be: "Глушанская аптэка",
          ru: "Глушанская аптека",
          en: "The Glusha pharmacy",
        },
        text: {
          be: "Месца памяці і адзін з пазнавальных вобразаў маршруту.",
          ru: "Место памяти и один из узнаваемых образов маршрута.",
          en: "A place of memory and one of the route’s key images.",
        },
        image: {
          src: "/assets/images/audioguide/route-point-glusha.jpg",
          alt: {
            be: "Глушанская аптэка",
            ru: "Глушанская аптека",
            en: "The Glusha pharmacy",
          },
        },
      },
      {
        id: "writer",
        number: "02",
        title: {
          be: "Памяць пра пісьменніка",
          ru: "Память о писателе",
          en: "The writer’s memory",
        },
        text: {
          be: "Пункт маршруту пра жыццё, словы і маральны выбар Адамовіча.",
          ru: "Точка маршрута о жизни, слове и моральном выборе Адамовича.",
          en: "A stop about Adamovich’s life, words and moral choice.",
        },
        image: {
          src: "/assets/images/portraits/adamovich-desk-minsk-1989.jpg",
          alt: {
            be: "Алесь Адамовіч за працай",
            ru: "Алесь Адамович за работой",
            en: "Ales Adamovich at work",
          },
        },
      },
      {
        id: "stop",
        number: "03",
        title: {
          be: "Прыпынак Адамовіча",
          ru: "Остановка Адамовича",
          en: "Adamovich stop",
        },
        text: {
          be: "Арт-аб’ект з тэкстамі і вобразамі, што вяртаюць памяць у прастору.",
          ru: "Арт-объект с текстами и образами, возвращающими память в пространство.",
          en: "An art object returning memory to the public space.",
        },
        image: {
          src: "/assets/images/initiative/initiative-stop-layer.png",
          alt: {
            be: "Прыпынак Адамовіча ў Глушы",
            ru: "Остановка Адамовича в Глуше",
            en: "The Adamovich stop in Glusha",
          },
        },
      },
      {
        id: "forest",
        number: "04",
        title: {
          be: "Глушанскі лес",
          ru: "Глушанский лес",
          en: "Glusha forest",
        },
        text: {
          be: "Лес як прастора памяці, цішыні і асабістых вяртанняў Адамовіча.",
          ru: "Лес как пространство памяти, тишины и личных возвращений Адамовича.",
          en: "The forest as a place of memory, quiet and Adamovich’s personal returns.",
        },
        image: {
          src: "/assets/images/audioguide/adamovich-glusha-forest-mushrooms.jpg",
          alt: {
            be: "Алесь Адамовіч у глушанскім лесе за грыбамі",
            ru: "Алесь Адамович в глушанском лесу за грибами",
            en: "Ales Adamovich in the Glusha forest with a mushroom basket",
          },
        },
      },
      {
        id: "cemetery",
        number: "05",
        title: {
          be: "Мясцовыя могілкі",
          ru: "Местное кладбище",
          en: "Local cemetery",
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
