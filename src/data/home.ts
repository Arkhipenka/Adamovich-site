import type { HomeHeroSlide, HomePageContent } from "@/types/home.types";

export const homePageContent: HomePageContent = {
  // HomeHero uses activeHomeHeroSlides below; keep this empty to avoid a second editable source.
  heroSlides: [],

  aboutWriter: {
    eyebrow: {
      be: "Пра пісьменніка",
      ru: "О писателе",
      en: "About the writer",
    },
    title: {
      be: "Сумленне нaцыi",
      ru: "Совесть нации",
      en: "The conscience of a nation",
    },
    text: {
      be: "Для Алеся Адамовіча літаратура была не толькі мастацтвам, але і спосабам адказнасці перад чалавекам і гісторыяй. Ён слухаў сведкаў, вяртаўся да памяці вайны, пісаў пра Хатынь, Чарнобыль і небяспеку маўчання. Яго творчасць і грамадзянская дзейнасць нагадвае: праўда пра катастрофу патрэбная не толькі мінуламу — яна патрэбная жывым.",
      ru: "Для Алеся Адамовича литература была не только искусством, но и способом ответственности перед человеком и историей. Он слушал свидетелей, возвращался к памяти войны, писал про Хатынь, Чернобыль и опасность молчания. Его творчество и общественная деятельность напоминают: правда о катастрофе нужна не только прошлому — она нужна живым.",
      en: "For Ales Adamovich, literature was not only an art but also a way of taking responsibility for people and history. He listened to witnesses, returned to the memory of war, wrote about Khatyn, Chernobyl and the danger of silence. His work and activism serve as a reminder: the truth about catastrophe is needed not only for the past — it is needed for the living.",
    },
    linkLabel: {
      be: "Даведацца больш",
      ru: "Подробнее",
      en: "Read more",
    },
    linkHref: "/biography",
    quote: {
      be: "Вялікая гэта справа — прымусіць сябе зразумець іншага чалавека.",
      ru: "Великое это дело — заставить себя понять другого человека.",
      en: "It is a great thing to make yourself understand another human being.",
    },
    quoteAuthor: {
      be: "Данііл Гранін, Алесь Адамовіч",
      ru: "Даниил Гранин, Алесь Адамович",
      en: "Daniil Granin, Ales Adamovich",
    },
    quoteSource: {
      be: "«Блакадная кніга», 1977–1982",
      ru: "«Блокадная книга», 1977–1982",
      en: "The Blockade Book, 1977–1982",
    },
    image: {
      src: "/assets/images/portraits/adamovich-writing-desk.jpg",
      alt: {
        be: "Ales Adamovich writing at his desk",
        ru: "Ales Adamovich writing at his desk",
        en: "Ales Adamovich writing at his desk",
      },
    },
  },
  audioGuidePreview: {
    eyebrow: {
      be: "Аўдыягід",
      ru: "Аудиогид",
      en: "Audio guide",
    },
    title: {
      be: "Пачуць яго словы. Адчуць яго час.",
      ru: "Услышать его слова. Почувствовать его время.",
      en: "Hear his words. Feel his time.",
    },
    description: {
      be: "Аўдыягід па жыцці, кнігах і думках Алеся Адамовіча. Гісторыі, сведчанні і разважанні ў новым фармаце.",
      ru: "Аудиогид по жизни, книгам и мыслям Алеся Адамовича. Истории, свидетельства и размышления в новом формате.",
      en: "An audio guide through the life, books and thoughts of Ales Adamovich. Stories, testimonies and reflections in a new format.",
    },
    telegramLabel: {
      be: "Telegram-бот",
      ru: "Telegram-бот",
      en: "Telegram bot",
    },
    telegramHref: "#",
    appLabel: {
      be: "Адкрыць праграму",
      ru: "Открыть приложение",
      en: "Open application",
    },
    appHref: "#",
    detailsLabel: {
      be: "Даведацца больш",
      ru: "Подробнее",
      en: "Learn more",
    },
    detailsHref: "/audio-guide",
    cards: [
      {
        id: "life-and-path",
        title: {
          be: "Жыццё і шлях",
          ru: "Жизнь и путь",
          en: "Life and path",
        },
        text: {
          be: "Аўдыягісторыі пра ключавыя падзеі і людзей.",
          ru: "Аудиоистории о ключевых событиях и людях.",
          en: "Audio stories about key events and people.",
        },
        image: {
          src: "/assets/images/audioguide/life-and-path.webp",
          alt: {
            be: "Пейзаж з маршруту аўдыягіда",
            ru: "Пейзаж из маршрута аудиогида",
            en: "Landscape from the audio guide route",
          },
        },
      },
      {
        id: "books-and-ideas",
        title: {
          be: "Кнігі і ідэі",
          ru: "Книги и идеи",
          en: "Books and ideas",
        },
        text: {
          be: "Галоўныя творы пісьменніка ў яго ўласных словах.",
          ru: "Главные произведения писателя в его собственных словах.",
          en: "The main works of the writer in his own words.",
        },
        image: {
          src: "/assets/images/audioguide/books-and-ideas.webp",
          alt: {
            be: "Аркуш рукапісу і друкарская машынка",
            ru: "Лист рукописи и печатная машинка",
            en: "Manuscript page and typewriter",
          },
        },
      },
      {
        id: "voices-of-time",
        title: {
          be: "Галасы часу",
          ru: "Голоса времени",
          en: "Voices of the time",
        },
        text: {
          be: "Сведчанні сучаснікаў і рэдкія архіўныя запісы.",
          ru: "Свидетельства современников и редкие архивные записи.",
          en: "Testimonies of contemporaries and rare archival recordings.",
        },
        image: {
          src: "/assets/images/audioguide/voices-of-time.webp",
          alt: {
            be: "Навушнікі і архіўныя аўдыяматэрыялы",
            ru: "Наушники и архивные аудиоматериалы",
            en: "Headphones and archival audio materials",
          },
        },
      },
    ],
  },
  bibliographyPreview: {
    eyebrow: {
      be: "Бібліяграфія",
      ru: "Библиография",
      en: "Bibliography",
    },
    title: {
      be: "Кнігі, што захоўваюць праўду",
      ru: "Книги, сохраняющие правду",
      en: "Books that preserve truth",
    },
    description: {
      be: "Дакументальная проза, сведчанні і творы, якія сталі часткай маральнай памяці XX стагоддзя.",
      ru: "Документальная проза, свидетельства и произведения, ставшие частью моральной памяти XX века.",
      en: "Documentary prose, testimonies and works that became part of the moral memory of the 20th century.",
    },
    viewAllLabel: {
      be: "Усе кнігі",
      ru: "Смотреть всё",
      en: "View all",
    },
    viewAllHref: "/bibliography",
  },
  initiativePreview: {
    eyebrow: {
      be: "Ініцыятыва",
      ru: "Инициатива",
      en: "The initiative",
    },
    title: {
      be: "Захоўваць. Даследаваць. Натхняць.",
      ru: "Сохранять. Исследовать. Вдохновлять.",
      en: "Preserve. Research. Inspire.",
    },
    description: {
      be: "Наша місія — захоўваць літаратурную і культурную спадчыну Алеся Адамовіча, рабіць яе даступнай новым пакаленням і развіваць лічбавыя інструменты для адукацыі, даследаванняў і памяці.",
      ru: "Наша миссия — сохранять литературное и культурное наследие Алеся Адамовича, делать его доступным новым поколениям и развивать цифровые инструменты для образования, исследований и памяти.",
      en: "Our mission is to preserve the literary and cultural heritage of Ales Adamovich, make it accessible to new generations and develop digital tools for education, research and remembrance.",
    },
    linkLabel: {
      be: "Даведацца больш",
      ru: "Подробнее",
      en: "Learn more",
    },
    linkHref: "/initiative",
    image: {
      src: "/assets/images/initiative/initiative-preview.webp",
      alt: {
        be: "Месца, звязанае з ініцыятывай пра Алеся Адамовіча",
        ru: "Место, связанное с инициативой об Алесе Адамовиче",
        en: "Landscape connected with Ales Adamovich initiative",
      },
    },
    features: [
      {
        id: "digital-archive",
        title: {
          be: "Лічбавы архіў",
          ru: "Цифровой архив",
          en: "Digital archive",
        },
        text: {
          be: "Творы, дакументы і архіўныя матэрыялы.",
          ru: "Произведения, документы и архивные материалы.",
          en: "Works, documents and archival materials.",
        },
      },
      {
        id: "interactive-map",
        title: {
          be: "Інтэрактыўная мапа",
          ru: "Интерактивная карта",
          en: "Interactive map",
        },
        text: {
          be: "Месцы, маршруты і падзеі, звязаныя з Адамовічам.",
          ru: "Места, маршруты и события, связанные с Адамовичем.",
          en: "Places, routes and events connected with Adamovich.",
        },
      },
      {
        id: "oral-history",
        title: {
          be: "Вусная гісторыя",
          ru: "Устная история",
          en: "Oral histories",
        },
        text: {
          be: "Галасы, сведчанні і ўспаміны.",
          ru: "Голоса, свидетельства и воспоминания.",
          en: "Voices, testimonies and memories.",
        },
      },
      {
        id: "educational-resources",
        title: {
          be: "Адукацыйныя матэрыялы",
          ru: "Образовательные материалы",
          en: "Educational resources",
        },
        text: {
          be: "Матэрыялы для студэнтаў, выкладчыкаў і даследчыкаў.",
          ru: "Материалы для студентов, преподавателей и исследователей.",
          en: "Materials for students, teachers and researchers.",
        },
      },
    ],
  },
};

export const homeHeroSlides: HomeHeroSlide[] = [
  {
    id: "writer",
    eyebrow: {
      be: "",
      ru: "",
      en: "",
    },
    title: {
      be: "АЛЕСЬ АДАМОВІЧ",
      ru: "АЛЕСЬ АДАМОВИЧ",
      en: "ALES ADAMOVICH",
    },
    subtitle: {
      be: "ПІСЬМЕННІК. СВЕДКА. МАРАЛЬНЫ ГОЛАС.",
      ru: "ПИСАТЕЛЬ. СВИДЕТЕЛЬ. НРАВСТВЕННЫЙ ГОЛОС.",
      en: "WRITER. WITNESS. MORAL VOICE.",
    },
    quote: {
      be: "Памяць — гэта супраціў забыццю.",
      ru: "Память — это сопротивление забвению.",
      en: "To remember means to resist oblivion.",
    },
    quoteAuthor: {
      be: "АЛЕСЬ АДАМОВІЧ",
      ru: "АЛЕСЬ АДАМОВИЧ",
      en: "ALES ADAMOVICH",
    },
    image: {
      src: "/assets/images/hero/adamovich-writer-desk.jpg",
      alt: {
        be: "Алесь Адамовіч піша за сваім сталом",
        ru: "Алесь Адамович пишет за своим столом",
        en: "Ales Adamovich writing at his desk",
      },
    },
    primaryLink: {
      label: {
        be: "БІЯГРАФІЯ",
        ru: "БИОГРАФИЯ",
        en: "BIOGRAPHY",
      },
      href: "/biography",
    },
    secondaryLink: {
      label: {
        be: "АЎДЫЯГІД",
        ru: "АУДИОГИД",
        en: "AUDIO GUIDE",
      },
      href: "/audio-guide",
    },
    tertiaryLink: {
      label: {
        be: "ПАДТРЫМАЦЬ ПРАЕКТ",
        ru: "ПОДДЕРЖАТЬ ПРОЕКТ",
        en: "SUPPORT PROJECT",
      },
      href: "/support",
    },
  },
  {
    id: "audio-guide",
    eyebrow: {
      be: "",
      ru: "",
      en: "",
    },
    title: {
      be: "АЎДЫЯГІД",
      ru: "АУДИОГИД",
      en: "AUDIO GUIDE",
    },
    subtitle: {
      be: "МЕСЦЫ ПАМЯЦІ Ў ГЛУШЫ.",
      ru: "МЕСТА ПАМЯТИ В ГЛУШЕ.",
      en: "PLACES OF MEMORY IN GLUSHA.",
    },
    text: {
      be: "Прайдзіце маршрутам па мясцінах, звязаных з Алесем Адамовічам: вёска, аптэка, прыпынак памяці, помнік, скансэн і могілкі.",
      ru: "Пройдите маршрут по местам, связанным с Алесем Адамовичем: деревня, аптека, памятная остановка, памятник, скансен и кладбище.",
      en: "Walk through the places connected with Ales Adamovich: the village, the pharmacy, the memorial stop, the monument, the skansen, and the cemetery.",
    },
    image: {
      src: "/assets/images/hero/hero-audio-guide-glusha.png",
      alt: {
        be: "Блакітны драўляны будынак аптэкі ў Глушы, звязаны з аўдыягідам пра Адамовіча",
        ru: "Голубое деревянное здание аптеки в Глуше, связанное с аудиогидом об Адамовиче",
        en: "Blue wooden pharmacy building in Glusha connected with the Adamovich audio guide",
      },
    },
    primaryLink: {
      label: {
        be: "АДКРЫЦЬ АЎДЫЯГІД",
        ru: "ОТКРЫТЬ АУДИОГИД",
        en: "OPEN AUDIO GUIDE",
      },
      href: "/audio-guide",
    },
    secondaryLink: {
      label: {
        be: "ПАГЛЯДЗЕЦЬ МАРШРУТ",
        ru: "ПОСМОТРЕТЬ МАРШРУТ",
        en: "VIEW ROUTE",
      },
      href: "/audio-guide",
    },
    tertiaryLink: {
      label: {
        be: "TELEGRAM-БОТ",
        ru: "TELEGRAM-БОТ",
        en: "TELEGRAM BOT",
      },
      href: "/audio-guide",
    },
  },
  {
    id: "books",
    eyebrow: {
      be: "",
      ru: "",
      en: "",
    },
    title: {
      be: "КНІГІ, ШТО ЗАХОЎВАЮЦЬ ПРАЎДУ",
      ru: "КНИГИ, СОХРАНЯЮЩИЕ ПРАВДУ",
      en: "BOOKS THAT PRESERVE TRUTH",
    },
    subtitle: {
      be: "РУКАПІСЫ. СВЕДЧАННЕ. ПАМЯЦЬ.",
      ru: "РУКОПИСИ. СВИДЕТЕЛЬСТВО. ПАМЯТЬ.",
      en: "MANUSCRIPTS. TESTIMONY. MEMORY.",
    },
    text: {
      be: "Кнігі Адамовіча захоўваюць галасы сведкаў, памяць вайны і маральную адказнасць літаратуры.",
      ru: "Книги Адамовича сохраняют голоса свидетелей, память войны и нравственную ответственность литературы.",
      en: "Adamovich's books preserve the voices of witnesses, the memory of war, and the moral responsibility of literature.",
    },
    image: {
      src: "/assets/images/hero/hero-books-manuscripts.png",
      alt: {
        be: "Рукапіс і кнігі, якія прадстаўляюць літаратурную спадчыну Алеся Адамовіча",
        ru: "Рукопись и книги, представляющие литературное наследие Алеся Адамовича",
        en: "Handwritten manuscript and books representing Ales Adamovich's literary legacy",
      },
    },
    primaryLink: {
      label: {
        be: "БІБЛІЯГРАФІЯ",
        ru: "БИБЛИОГРАФИЯ",
        en: "BIBLIOGRAPHY",
      },
      href: "/bibliography",
    },
    secondaryLink: {
      label: {
        be: "ЧЫТАЦЬ БОЛЬШ",
        ru: "ЧИТАТЬ ДАЛЬШЕ",
        en: "READ MORE",
      },
      href: "/bibliography",
    },
    tertiaryLink: {
      label: {
        be: "АРХІЎ",
        ru: "АРХИВ",
        en: "ARCHIVE",
      },
      href: "/archive",
    },
  },
];

export const optionalHomeHeroSlides: HomeHeroSlide[] = [
  {
    id: "initiative",
    eyebrow: {
      be: "",
      ru: "",
      en: "",
    },
    title: {
      be: "ІНІЦЫЯТЫВА",
      ru: "ИНИЦИАТИВА",
      en: "THE INITIATIVE",
    },
    subtitle: {
      be: "ЗАХОЎВАЦЬ. ДАСЛЕДАВАЦЬ. НАТХНЯЦЬ.",
      ru: "СОХРАНЯТЬ. ИССЛЕДОВАТЬ. ВДОХНОВЛЯТЬ.",
      en: "PRESERVE. RESEARCH. INSPIRE.",
    },
    text: {
      be: "Культурная лічбавая платформа, прысвечаная захаванню спадчыны Алеся Адамовіча і сувязі яго памяці з новымі пакаленнямі.",
      ru: "Культурная цифровая платформа, посвящённая сохранению наследия Алеся Адамовича и связи его памяти с новыми поколениями.",
      en: "A cultural digital platform dedicated to preserving the legacy of Ales Adamovich and connecting his memory with new generations.",
    },
    image: {
      src: "/assets/images/hero/hero-initiative-glusha.png",
      alt: {
        be: "Прыпынак памяці і помнік Алесю Адамовічу ў Глушы",
        ru: "Памятная остановка и памятник Алесю Адамовичу в Глуше",
        en: "Memorial stop and monument to Ales Adamovich in Glusha",
      },
    },
    primaryLink: {
      label: {
        be: "ПРА ІНІЦЫЯТЫВУ",
        ru: "ОБ ИНИЦИАТИВЕ",
        en: "ABOUT INITIATIVE",
      },
      href: "/initiative",
    },
    secondaryLink: {
      label: {
        be: "ПАДТРЫМАЦЬ ПРАЕКТ",
        ru: "ПОДДЕРЖАТЬ ПРОЕКТ",
        en: "SUPPORT PROJECT",
      },
      href: "/support",
    },
    tertiaryLink: {
      label: {
        be: "ЗВЯЗАЦЦА",
        ru: "СВЯЗАТЬСЯ",
        en: "CONTACT US",
      },
      href: "/contacts",
    },
  },
];

export const activeHomeHeroSlides: HomeHeroSlide[] = [
  ...homeHeroSlides,
  ...optionalHomeHeroSlides,
];

export const homeHeroControlLabels = {
  be: {
    slider: "Галоўны слайдар",
    previous: "Папярэдні слайд",
    next: "Наступны слайд",
    goToSlide: (index: number) => `Перайсці да слайда ${index}`,
  },
  ru: {
    slider: "Главный слайдер",
    previous: "Предыдущий слайд",
    next: "Следующий слайд",
    goToSlide: (index: number) => `Перейти к слайду ${index}`,
  },
  en: {
    slider: "Home hero slider",
    previous: "Previous slide",
    next: "Next slide",
    goToSlide: (index: number) => `Go to slide ${index}`,
  },
};
