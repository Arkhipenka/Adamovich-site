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
        be: "Чалавек Еўрапейскага маштабу",
        ru: "Человек Европейского масштаба",
        en: "A figure of European stature",
      },
      quoteAuthor: {
        be: "Васіль Быкаў пра Алеся Адамовіча",
        ru: "Василий Быков про Алеся Адамовича",
        en: "Vasil Bykov on Ales Adamovich",
      },
      image: {
        src: "/assets/images/hero/adamovich-speech-microphone.webp",
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
        src: "/assets/images/hero/glusha-pharmacy-1985.webp",
        alt: {
          be: "Алесь Адамовіч каля глушанскай аптэкі ў 1985 годзе",
          ru: "Алесь Адамович возле глушанской аптеки в 1985 году",
          en: "Ales Adamovich near the pharmacy in Glusha in 1985",
        },
      },
      imageCredit: {
        be: "Каля глушанскай аптэкі, 1985",
        ru: "Возле глушанской аптеки, 1985",
        en: "Near the pharmacy in Glusha, 1985",
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
        be: "Спадчына Адамовіча",
        ru: "Наследие Адамовича",
        en: "Legacy Adamovich",
      },
      subtitle: {
        be: "Кнігі, дакументальная проза, публіцыстыка, фільмы звязанныя з Алесем Адамовічам.",
        ru: "Документальное аудиопутешествие по местам, связанным с жизнью, книгами и памятью об Адамовиче.",
        en: "A documentary audio journey through places connected with Adamovich’s life, books and memory.",
      },
      image: {
        src: "/assets/images/hero/hero-bibliography-collage.webp",
        alt: {
          be: "Калаж з кнігамі, перакладамі і архіўнымі матэрыяламі Алеся Адамовіча",
          ru: "Коллаж с книгами, переводами и архивными материалами Алеся Адамовича",
          en: "Collage of Ales Adamovich books, translations and archival materials",
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
        src: "/assets/images/hero/hero-initiative-collage.webp",
        alt: {
          be: "Калаж пра ініцыятыву «Прыпынак Адамовіча» ў Глушы",
          ru: "Коллаж об инициативе «Прыпынак Адамовіча» в Глуше",
          en: "Collage about the Prypynak Adamovich initiative in Glusha",
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
      be: "Алесь Адамовіч, Данііл Гранін",
      ru: "Алесь Адамович, Даниил Гранин",
      en: "Ales Adamovich, Daniil Granin",
    },
    quoteSource: {
      be: "«Блакадная кніга», 1977–1982",
      ru: "«Блокадная книга», 1977–1982",
      en: "The Blockade Book, 1977–1982",
    },
    image: {
      src: "/assets/images/portraits/adamovich-desk-minsk-1989.webp",
      alt: {
        be: "Алесь Адамовіч за рабочым сталом. Мінск, 1989",
        ru: "Алесь Адамович за рабочим столом. Минск, 1989",
        en: "Ales Adamovich writing at his desk. Minsk, 1989",
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
      be: "Аўдыягід вядзе па мясцінах Глушы, звязаных з жыццём, сям’ёй, творчасцю і памяццю Алеся Адамовіча. Маршрут адкрывае прастору, дзе асабістая гісторыя пісьменніка сустракаецца з гісторыяй Беларусі. Гэта жывы спосаб даведацца пра Адамовіча праз месца, якое сфармавала ягоны досвед.",
      ru: "Аудиогид ведёт по местам Глуши, связанным с жизнью, семьёй, творчеством и памятью Алеся Адамовича. Маршрут открывает пространство, где личная история писателя встречается с историей Беларуси. Это живой способ узнать Адамовича через место, которое сформировало его опыт.",
      en: "The audio guide leads through the places of Hluša connected with the life, family, work, and memory of Ales Adamovich. The route opens a space where the writer’s personal story meets the history of Belarus. It is a living way to discover Adamovich through the place that shaped his experience.",
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
      be: "Прыпынак Адамовіча",
      ru: "Прыпынак Адамовича",
      en: "Prypynak Adamovich",
    },
    description: {
      be: "«Прыпынак Адамовіча» — культурная ініцыятыва, якая вырасла з працы па ўвекавечванню памяці Алеся Адамовіча ў Глушы. Мы вяртаем імя пісьменніка ў публічную прастору праз памятныя месцы, лічбавыя праекты, даследаванні, аўдыягід і адукацыйныя матэрыялы.",
      ru: "«Прыпынак Адамовіча» — культурная инициатива, выросшая из работы по увековечиванию памяти Алеся Адамовича в Глуше. Мы возвращаем имя писателя в публичное пространство через памятные места, цифровые проекты, исследования, аудиогид и образовательные материалы.",
      en: "Prypynak Adamovich is a cultural initiative that grew out of work to commemorate Ales Adamovich in Glusha. We bring the writer’s name back into the public space through memorial sites, digital projects, research, an audio guide and educational materials.",
    },
    linkLabel: {
      be: "Даведацца больш",
      ru: "Подробнее",
      en: "Learn more",
    },
    linkHref: "/initiative",
    image: {
      src: "/assets/images/initiative/adamovich-stop-illustration.webp",
      alt: {
        be: "Месца, звязанае з ініцыятывай пра Алеся Адамовіча",
        ru: "Место, связанное с инициативой об Алесе Адамовиче",
        en: "Landscape connected with Ales Adamovich initiative",
      },
    },
    features: [
      {
        id: "memorial",
        title: {
          be: "Помнік Адамовічу",
          ru: "Памятник Адамовичу",
          en: "Memorial to Adamovich",
        },
        text: {
          be: "Помнік у Глушы, на малой радзіме пісьменніка.",
          ru: "Памятник в Глуше, на малой радзіме пісьменніка.",
          en: "Memorial in Glusha, on the small square of the writer.",
        },
      },
      {
        id: "art-project",
        title: {
          be: "Aрт-аб'ект",
          ru: "Арт-объект",
          en: "Art object",
        },
        text: {
          be: "Арт-аб'ект Прыпынак Адамовіча ў Глушы.",
          ru: "Арт-объект Прыпынак Адамовича в Глуше.",
          en: "The art object Prypynak Adamovich in Glusha.",
        },
      },
      {
        id: "audio-guide",
        title: {
          be: "Aўдыягід",
          ru: "Аудиогид",
          en: "Audio guide",
        },
        text: {
          be: "Аўдыягід па Глушы, малой радзіме пісьменніка.",
          ru: "Аудиогид по Глуше, малой родине писателя.",
          en: "Audio guide to Glusha, the small homeland of the writer.",
        },
      },
      {
        id: "archive",
        title: {
          be: "Архіў",
          ru: "Архив",
          en: "Archive",
        },
        text: {
          be: "Віртуальны архіў Адамовіча (у распрацоўцы).",
          ru: "Виртуальный архив Адамовича (в разработке).",
          en: "Virtual Adamovich archive (in development).",
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
