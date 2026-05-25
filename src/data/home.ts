import type { HomePageContent } from "@/types/home.types";

export const homePageContent: HomePageContent = {
  heroSlides: [
    {
      id: "memory",
      eyebrow: {
        be: "Пісьменнік. Публіцыст. Грамадскі дзеяч.",
        ru: "Писатель. Публицист. Гражданский деятель.",
        en: "Writer. Witness. Citizen.",
      },
      title: {
        be: "Алесь Адамовіч",
        ru: "Алесь Адамович",
        en: "Ales Adamovich",
      },
      quote: {
        be: "Чалавек Еўрапескага маштабу",
        ru: "Человек Европейского масштаба",
        en: "A figure of European stature",
      },
      quoteAuthor: {
        be: "Васіль Быкаў аб Алесю Адамовічу",
        ru: "Василий Быков об Алесю Адамовиче",
        en: "Vasily Bystrov on Ales Adamovich",
      },
      image: {
        src: "/assets/images/hero/adamovich-speech-microphone.png",
        alt: {
          be: "Партрэт Алеся Адамовіча за трыбунай",
          ru: "Портрет Алеся Адамовича за трибуной",
          en: "Ales Adamovich portrait at the podium",
        },
      },
      imageCredit: {
        be: "Архіўны вобраз пісьменніка і дакументальных матэрыялаў",
        ru: "Архивный образ писателя и документальных материалов",
        en: "Archival image of the writer and documentary materials",
      },
      primaryLink: {
        label: {
          be: "Біяграфія",
          ru: "Биография",
          en: "Biography",
        },
        href: "/biography",
      },
      secondaryLink: {
        label: {
          be: "Аўдыягід",
          ru: "Аудиогид",
          en: "Audio Guide",
        },
        href: "/audio-guide",
      },
      tertiaryLink: {
        label: {
          be: "Падтрымаць",
          ru: "Поддержать",
          en: "Support",
        },
        href: "/support",
      },
    },
    {
      id: "audio-guide",
      eyebrow: {
        be: "Аўдыягід",
        ru: "Аудиогид",
        en: "Audio Guide",
      },
      title: {
        be: "Сцежкамі Адамовіча",
        ru: "Тропами Адамовича",
        en: "On Adamovich’s paths",
      },
      subtitle: {
        be: "Прайдзіце маршрутам па Глушы і пачуйце гісторыі месцаў, звязаных з жыццём і творчайсцю Алеся Адамовіча.",
        ru: "Пройдите маршрутом по Глуше и услышите истории мест, связанных с жизнью и творчеством Алеся Адамовича.",
        en: "Take a route through Glusha and hear the stories of places connected with Ales Adamovich’s life and creativity.",
      },
      image: {
        src: "/assets/images/hero/hero-audio-guide-glusha.png",
        alt: {
          be: "Аптэкарскі дом у Глушы, гдзе працавала маці Алеся Адамовіча",
          ru: "Аптекарский дом в Глуше, где работала мать Алеся Адамовича",
          en: "The pharmacy house in Glusha, where Ales Adamovich’s mother worked",
        },
      },
      imageCredit: {
        be: "Аптэкарскі дом у Глушы, гдзе працавала маці Алеся Адамовіча",
        ru: "Аптекарский дом в Глуше, где работала мать Алеся Адамовича",
        en: "The pharmacy house in Glusha, where Ales Adamovich’s mother worked",
      },
      primaryLink: {
        label: {
          be: "Аўдыягід",
          ru: "Аудиогид",
          en: "Audio Guide",
        },
        href: "/audio-guide",
      },
      secondaryLink: {
        label: {
          be: "Пра нас",
          ru: "Про нас",
          en: "About Us",
        },
        href: "/initiative",
      },
      tertiaryLink: {
        label: {
          be: "Падтрымаць",
          ru: "Поддержать",
          en: "Support",
        },
        href: "/support",
      },
    },
    {
      id: "bibliography",
      eyebrow: {
        be: "Бібліяграфія",
        ru: "Библиография",
        en: "Bibliography",
      },
      title: {
        be: "Сведчанні, што сталі літаратурай.",
        ru: "Свидетельства, ставшие литературой.",
        en: "Testimonies that became literature.",
      },
      subtitle: {
        be: "Кнігі, дакументальная проза, публіцыстыка, фільмы звязанныя з Алесем Адамовічам.",
        ru: "Документальное аудиопутешествие по местам, связанным с жизнью, книгами и памятью об Адамовиче.",
        en: "A documentary audio journey through places connected with Adamovich’s life, books and memory.",
      },
      image: {
        src: "/assets/images/hero/hero-books-manuscripts.png",
        alt: {
          be: "Цёмная аўдыявізуальная сцэна з архіўнымі матэрыяламі",
          ru: "Тёмная аудиовизуальная сцена с архивными материалами",
          en: "Dark audio guide scene with archival materials",
        },
      },
      imageCredit: {
        be: "Рукапісы і архіўныя матэрыялы",
        ru: "Рукописи и архивные материалы",
        en: "Manuscripts and archival materials",
      },
      primaryLink: {
        label: {
          be: "Бібяграфія",
          ru: "Библиография",
          en: "Bibliography",
        },
        href: "/bibliography",
      },
      secondaryLink: {
        label: {
          be: "Біяграфія",
          ru: "Биография",
          en: "Biography",
        },
        href: "/biography",
      },
      tertiaryLink: {
        label: {
          be: "Падтрымаць",
          ru: "Поддержать",
          en: "Support",
        },
        href: "/support",
      },
    },
    {
      id: "Initiative",
      eyebrow: {
        be: "Аб нас",
        ru: "О нас",
        en: "About Us",
      },
      title: {
        be: "Прыпынак Адамовіча",
        ru: "Прыпынак Адамовіча",
        en: "Prypynak Adamovich",
      },
      subtitle: {
        be: "Кнігі, дакументальная проза, публіцыстыка, фільмы звязанныя з Алесем Адамовічам.",
        ru: "Книги, документальная проза, публицистика, фильмы, связанные с Алесям Адамовичем.",
        en: "Books, documentary prose, journalism, films related to Ales Adamovich.",
      },
      image: {
        src: "/assets/images/hero/hero-initiative-glusha.png",
        alt: {
          be: "Кнігі і дакументальная проза Алеся Адамовіча",
          ru: "Книги и документальная проза Алеся Адамовича",
          en: "Books and documentary prose by Ales Adamovich",
        },
      },
      imageCredit: {
        be: "Арт-аб'ект «Прыпынак Адамовіча» і помнік у Глушы",
        ru: "Арт-объект «Прыпынак Адамовіча» и памятник в Глуше",
        en: "Art object 'Prypynak Adamovich' and monument in Glusha",
      },
      primaryLink: {
        label: {
          be: "Пра нас",
          ru: "О нас",
          en: "About Us",
        },
        href: "/initiative",
      },
      secondaryLink: {
        label: {
          be: "Аўдыягід",
          ru: "Аудиогид",
          en: "Audio Guide",
        },
        href: "/audio-guide",
      },
      tertiaryLink: {
        label: {
          be: "Падтрымаць",
          ru: "Поддержать",
          en: "Support",
        },
        href: "/support",
      },
    },
  ],
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
      be: "Шляхамі Адамовіча па Глушы",
      ru: "Тропами Адамовича по Глуше",
      en: " Adamovich’s paths through Glusha",
    },
    description: {
      be: "Аўдыягід па мясцінах, звязаных з жыццём, творчасцю Алеся Адамовіча y фармаце жывога маршруту.",
      ru: "Аудиогид по местам, связанным с жизнью, творчеством Алеся Адамовича в формате живого маршрута.",
      en: "An audio guide to places connected with the life, work Ales Adamovich in the format of a live route.",
    },
    telegramLabel: {
      be: "Telegram",
      ru: "Telegram",
      en: "Telegram",
    },
    telegramHref: "#",
    appLabel: {
      be: "Спампаваць",
      ru: "Скачать",
      en: "Download",
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
          be: "Глуша Адамовіча",
          ru: "Глуша Адамовича",
          en: "Adamovich’s Glusha",
        },
        text: {
          be: "Аўдыягід па малой радзіме пісьменніка.",
          ru: "Аудиогид по малой родине писателя.",
          en: "An audio guide to the small radzima of the writer.",
        },
        image: {
          src: "/assets/images/audioguide/route-point-glusha.jpg",
          alt: {
            be: "Блакітны дом у Глушы на маршруце аўдыягіда",
            ru: "Голубой дом в Глуше на маршруте аудиогида",
            en: "Blue house in Glusha on the audio guide route",
          },
        },
      },
      {
        id: "books-and-ideas",
        title: {
          be: "Як ствараўся аўдыягід",
          ru: "Как создавался аудиогид",
          en: "How the audio guide was created",
        },
        text: {
          be: "Праца з архівамі, месцамі памяці і сведчаннямі.",
          ru: "Работа с архивами, местами памяти и свидетельствами.",
          en: "Work with archives, places of memory and testimonies.",
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
          be: "Голас аўдыягіда",
          ru: "Голос аудиогида",
          en: "Voice of the audio guide",
        },
        text: {
          be: "Аляксандр Ждановіч. Голас, які дапамагае ажывіць маршрут.",
          ru: "Александр Жданович. Голос, который помогает оживить маршрут.",
          en: "Alexander Zhdanovich. The voice that helps bring the route to life.",
        },
        image: {
          src: "/assets/images/audioguide/voice-actor.jpg",
          alt: {
            be: "Акцёр агучкі аўдыягіда",
            ru: "Актёр озвучки аудиогида",
            en: "Audio guide voice actor",
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
      be: "Творчая спадчына Алеся Адамовіча",
      ru: "Творческое наследие Алеся Адамовича",
      en: "The creative legacy of Ales Adamovich",
    },
    description: {
      be: "Кнігі, фільмы, артыкулы і дакументальныя тэксты Алеся Адамовіча раскрываюць яго размову пра вайну, памяць, праўду і чалавечую адказнасць.",
      ru: "Книги, фильмы, статьи и документальные тексты Алеся Адамовича раскрывают его разговор о войне, памяти, правде и человеческой ответственности.",
      en: "Books, films, articles and documentary texts by Ales Adamovich reveal his conversation about war, memory, truth and human responsibility.",
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
