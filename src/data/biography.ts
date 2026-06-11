import type { Locale } from "@/types/common.types";

export type BiographyAside = {
  label?: string;
  title?: string;
  text: string;
  meta?: string;
};

export type BiographyThematicAnchor = {
  id: string;
  title: string;
  text: string;
};

export type BiographyEvent = {
  id: string;
  year: string;
  date?: string;
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
  featured?: boolean;
};

export type BiographyThemeId = string;

export type BiographyMediaItem = {
  id: string;
  type: "image" | "video" | "audio" | "document";
  src: string;
  title?: string;
  alt?: string;
  caption?: string;
};

export type BiographyLink = {
  label: string;
  href: string;
};

export type BiographyPeriod = {
  id: string;
  year: string;
  years?: string;
  title: string;
  shortTitle?: string;
  shortDescription: string;
  detail: string;
  detailLead?: string;
  detailText?: string[];
  sectionTitle: string;
  sectionLead: string;
  sectionText: string[];
  image?: string;
  imageAlt?: string;
  imageCaption?: string;
  icon?: string;
  events?: BiographyEvent[];
  aside?: BiographyAside;
  anchors?: BiographyThematicAnchor[];
  themes?: BiographyThemeId[];
  media?: BiographyMediaItem[];
  links?: BiographyLink[];
};

export type BiographyTheme = {
  id: string;
  title: string;
  description: string;
  targetId: string;
  tag?: string;
  periodId?: string;
};

type BiographyTimelineCopy = {
  datesTitle: string;
  detailLabel: string;
  readSection: string;
  eventsLabel: string;
  imageFallback: string;
};

type BiographyThemesCopy = {
  title: string;
  lead: string;
};

export const biographyTimelineCopy = {
  be: {
    datesTitle: "Ключавыя даты жыцця",
    detailLabel: "Перыяд",
    readSection: "Чытаць раздзел",
    eventsLabel: "Даты і факты",
    imageFallback: "Архіўны матэрыял",
  },
  en: {
    datesTitle: "Key Dates",
    detailLabel: "Period",
    readSection: "Read Section",
    eventsLabel: "Dates and Facts",
    imageFallback: "Archive material",
  },
  ru: {
    datesTitle: "Ключевые даты жизни",
    detailLabel: "Период",
    readSection: "Читать раздел",
    eventsLabel: "Даты и факты",
    imageFallback: "Архивный материал",
  },
} satisfies Record<Locale, BiographyTimelineCopy>;

export const biographyThemesCopy = {
  be: {
    title: "Тэмы жыцця і творчасці",
    lead: "Біяграфія Алеся Адамовіча — гэта не толькі паслядоўнасць дат. Гэта некалькі вялікіх тэм, якія праходзяць праз яго кнігі, сцэнарыі, публіцыстыку і грамадзянскую пазіцыю.",
  },
  en: {
    title: "Themes of Life and Work",
    lead: "Ales Adamovich’s biography is more than a sequence of dates. It is shaped by several major themes that run through his books, screenplays, essays, and civic voice.",
  },
  ru: {
    title: "Темы жизни и творчества",
    lead: "Биография Алеся Адамовича — это не только последовательность дат. Это несколько больших тем, которые проходят через его книги, сценарии, публицистику и гражданскую позицию.",
  },
} satisfies Record<Locale, BiographyThemesCopy>;

export const biographyPeriodsBe: BiographyPeriod[] = [
  {
    id: "childhood",
    year: "1927–1940",
    title: "Дзяцінства і Глуша",
    shortDescription:
      "Пачатак жыцця, сям’я і месца, якое стала сапраўднай малой радзімай пісьменніка.",
    detail:
      "Біяграфія Алеся Адамовіча пачынаецца з сямейнай гісторыі і пераезду ў Глушу. Менавіта гэтае месца пазней стане для яго прасторай памяці, вяртання і маральнага вытоку.",
    sectionTitle: "Дзяцінства і Глуша",
    sectionLead:
      "Глуша была для Адамовіча не проста пасёлкам дзяцінства. Яна стала ўнутранай кропкай вяртання, праз якую ён глядзеў на чалавека, вайну і памяць.",
    sectionText: [
      "Алесь Адамовіч нарадзіўся ў сям’і служачых. У дакументах замацавалася дата 3 верасня 1927 года, але ў біяграфічных матэрыялах згадваецца і сапраўдная дата — 3 жніўня 1926 года.",
      "У 1928 годзе сям’я пераехала ў Глушу. Тут прайшлі школьныя гады, першыя чытанні і першыя назіранні за жыццём людзей, якія пазней стануць галоўнай мерай яго літаратуры.",
    ],
    image: "/assets/images/hero/glusha-pharmacy-1985.jpg",
    imageAlt: "Глуша, месца памяці Алеся Адамовіча",
    imageCaption: "Глуша — месца, да якога Адамовіч вяртаўся ў памяці і тэкстах.",
    events: [
      {
        id: "birth-date",
        year: "1926 / 1927",
        title: "Нараджэнне",
        description:
          "Пашпартная дата — 3 верасня 1927 года; сапраўдная дата ў біяграфічных матэрыялах — 3 жніўня 1926 года.",
      },
      {
        id: "hlusha-move",
        year: "1928",
        title: "Пераезд у Глушу",
        description:
          "Сям’я пераехала ў пасёлак Глуша, які пазней Адамовіч называў сваёй сапраўднай малой радзімай.",
        featured: true,
      },
    ],
    aside: {
      label: "З архіва",
      title: "Малая радзіма",
      text: "Глуша ў біяграфіі Адамовіча — гэта не толькі геаграфія, але і асабістая памяць, з якой вырастала яго разуменне адказнасці перад людзьмі.",
    },
    anchors: [
      {
        id: "anchor-repressions",
        title: "Рэпрэсіі і сямейная памяць",
        text: "У 1930 годзе дзеда Алеся Адамовіча, Мітрафана Фаміча Тычыну, раскулачылі і выслалі ў Якуцію. Гэтая сямейная траўма стала часткай памяці, якая пазней адгукнулася ў творах і грамадзянскай пазіцыі Адамовіча.",
      },
    ],
  },
  {
    id: "war",
    year: "1941–1945",
    title: "Вайна і падполле",
    shortDescription:
      "Партызанскі досвед, небяспека і першае сутыкненне з тым, што пазней стане галоўнай тэмай творчасці.",
    detail:
      "У гады вайны Адамовіч разам з маці і братам быў звязаны з партызанскім рухам. Гэта быў досвед, які зрабіў вайну не абстрактнай тэмай, а асабістай ранай і маральным абавязкам сведчыць.",
    sectionTitle: "Вайна. Памяць. Чалавек на мяжы",
    sectionLead:
      "Вайна стала для Адамовіча не матэрыялам з мінулага, а жывой праўдай пра чалавека ў крайняй сітуацыі.",
    sectionText: [
      "Глушанскае падполле, партызанскі атрад, небяспека і смерць побач сталі часткай яго асабістай памяці.",
      "Пазней гэты досвед вернецца ў прозе, сцэнарыях і дакументальных кнігах — не як героіка, а як цяжкае сведчанне пра чалавека і яго выбар.",
    ],
    image: "/assets/images/works/i-am-from-fire-village.webp",
    imageAlt: "Вокладка кнігі пра сведчанні вайны",
    imageCaption: "Ваенная памяць стала галоўным нервам дакументальнай прозы Адамовіча.",
    events: [
      {
        id: "war-begins",
        year: "1941",
        title: "Пачатак вайны",
        description:
          "Вайна перарвала юнацтва і зрабіла тэму чалавечага выпрабавання асабістай.",
      },
      {
        id: "partisan-unit",
        year: "1943",
        title: "Партызанскі атрад",
        description:
          "Разам з маці і братам Адамовіч пайшоў у партызанскі атрад імя Кірава.",
        featured: true,
      },
    ],
    aside: {
      label: "Факт",
      title: "Сведчанне замест легенды",
      text: "У сваіх ваенных тэкстах Адамовіч пастаянна вяртаўся да галасоў сведкаў — людзей, якія бачылі катастрофу ўласнымі вачыма.",
    },
  },
  {
    id: "postwar",
    year: "1946–1959",
    title: "Пасля вайны. Пошук голасу",
    shortDescription:
      "Навучанне, філалогія, літаратуразнаўства і пачатак шляху даследчыка.",
    detail:
      "Пасля вайны Адамовіч вярнуўся да вучобы, скончыў філалагічны факультэт БДУ і паступова ўваходзіў у літаратурную і навуковую працу.",
    sectionTitle: "Літаратура і навука",
    sectionLead:
      "Пасляваенныя гады сталі часам інтэлектуальнага станаўлення: ад вучобы да даследавання беларускай літаратуры.",
    sectionText: [
      "Адамовіч вывучаў беларускую прозу, працаваў як крытык і даследчык, пісаў пра літаратуру як пра сферу маральнага выбару.",
      "Навуковая праца не аддзялялася для яго ад грамадзянскай пазіцыі: літаратура павінна была гаварыць пра праўду часу.",
    ],
    image: "/assets/images/portraits/adamovich-writing-desk.jpg",
    imageAlt: "Алесь Адамовіч за рабочым сталом",
    imageCaption: "Літаратурная праца для Адамовіча была формай адказнасці.",
    events: [
      {
        id: "bsu",
        year: "1950",
        title: "БДУ і філалогія",
        description:
          "Скончыў філалагічны факультэт БДУ і працягнуў шлях у літаратуразнаўстве.",
        featured: true,
      },
      {
        id: "research",
        year: "1950-я",
        title: "Даследчык літаратуры",
        description:
          "Пачаў працу крытыка і даследчыка беларускай прозы.",
      },
    ],
    aside: {
      label: "З архіва",
      title: "Пошук мовы",
      text: "Пасляваенная літаратура патрабавала новай мовы — такой, якая здольная вытрымаць памяць пра катастрофу.",
    },
  },
  {
    id: "sixties",
    year: "1960-я",
    title: "Проза і дакумент",
    shortDescription:
      "Пераход да прозы, у якой асабістая памяць і дакументальная праўда становяцца галоўным матэрыялам.",
    detail:
      "У 1960-я гады Адамовіч усё больш збліжае літаратуру з дакументам, сведчаннем і жывой гаворкай людзей.",
    sectionTitle: "Проза і дакументальная праўда",
    sectionLead:
      "Гэты перыяд падрыхтаваў галоўны прынцып яго творчасці: слухаць чалавека і не падмяняць яго голас літаратурнай позай.",
    sectionText: [
      "Адамовіч шукаў форму, у якой мастацкі тэкст мог бы захаваць дакладнасць жывога сведчання.",
      "Менавіта тут складваецца яго будучая праца з галасамі сведкаў вайны і трагедый XX стагоддзя.",
    ],
    image: "/assets/images/portraits/adamovich-writing.webp",
    imageAlt: "Алесь Адамовіч піша",
    imageCaption: "Дакумент у яго прозе становіцца не дадаткам, а этычным цэнтрам.",
    events: [
      {
        id: "early-prose",
        year: "1960-я",
        title: "Пошук формы",
        description:
          "Складаецца цікавасць да дакументальнай прозы і сведчанняў людзей.",
      },
    ],
    aside: {
      label: "Тэма",
      title: "Голас сведкі",
      text: "Адамовічу было важна, каб літаратура не заглушала чалавека, а дапамагала яму быць пачутым.",
    },
  },
  {
    id: "seventies",
    year: "1970-я",
    title: "Кнігі сведчанняў",
    shortDescription:
      "«Хатынская аповесць», «Я з вогненнай вёскі…» і праца над «Блакаднай кнігай».",
    detail:
      "1970-я сталі часам вялікіх дакументальных кніг, дзе вайна паказана праз галасы людзей, якія яе перажылі.",
    sectionTitle: "Кнігі, якія захоўваюць праўду",
    sectionLead:
      "У гэты перыяд Адамовіч стварае і рыхтуе тэксты, якія стануць аднымі з галоўных дакументальных сведчанняў пра вайну.",
    sectionText: [
      "«Хатынская аповесць» і «Я з вогненнай вёскі…» пераносяць у цэнтр літаратуры не падзею, а чалавека, які нясе памяць.",
      "Праца з Даніілам Граніным над «Блакаднай кнігай» працягнула гэты прынцып: дакументальная праўда павінна гучаць праз асабістыя галасы.",
    ],
    image: "/assets/images/works/blockade-book.jpg",
    imageAlt: "Вокладка Блакаднай кнігі",
    imageCaption: "Дакументальныя кнігі Адамовіча захоўваюць галасы сведкаў.",
    events: [
      {
        id: "khatyn-story",
        year: "1971",
        title: "«Хатынская аповесць»",
        description:
          "Важны твор пра вайну, спаленыя вёскі і маральную памяць.",
      },
      {
        id: "fiery-village",
        year: "1975",
        title: "«Я з вогненнай вёскі…»",
        description:
          "Кніга сведчанняў, створаная разам з Янкам Брылём і Уладзімірам Калеснікам.",
        featured: true,
      },
      {
        id: "blockade",
        year: "1979",
        title: "«Блакадная кніга»",
        description:
          "Першая частка кнігі, створанай разам з Даніілам Граніным.",
      },
    ],
    aside: {
      label: "Факт",
      title: "Літаратура памяці",
      text: "Гэтыя кнігі пабудаваныя на сведчаннях і дакументах, але іх сіла — у чалавечай інтанацыі.",
    },
  },
  {
    id: "eighties",
    year: "1980-я",
    title: "Кіно, Чарнобыль, грамадзянскі голас",
    shortDescription:
      "Фільм «Ідзі і глядзі», Чарнобыль і актыўная грамадзянская пазіцыя.",
    detail:
      "У 1980-я Адамовіч становіцца не толькі пісьменнікам і сцэнарыстам, але і выразным грамадскім голасам.",
    sectionTitle: "Кіно і грамадзянская адказнасць",
    sectionLead:
      "Гэты перыяд аб’яднаў мастацтва, публіцыстыку і грамадзянскую смеласць.",
    sectionText: [
      "Фільм «Ідзі і глядзі», створаны паводле сцэнарыя Адамовіча і Элема Клімава, стаў адным з самых моцных антываенных выказванняў у сусветным кіно.",
      "Пасля Чарнобыля Адамовіч выступаў супраць замоўчвання наступстваў катастрофы і настойваў на праўдзе як форме абароны людзей.",
    ],
    image: "/assets/images/hero/adamovich-come-and-see-crew.jpg",
    imageAlt: "Алесь Адамовіч і кіно",
    imageCaption: "Кіно і публіцыстыка ў 1980-я сталі працягам яго размовы пра праўду.",
    events: [
      {
        id: "come-and-see",
        year: "1985",
        title: "«Ідзі і глядзі»",
        description:
          "Фільм па сцэнарыі Адамовіча і Элема Клімава атрымаў міжнароднае прызнанне.",
        featured: true,
      },
      {
        id: "chernobyl",
        year: "1986",
        title: "Чарнобыль",
        description:
          "Выступаў супраць замоўчвання праўды пра наступствы катастрофы.",
      },
      {
        id: "deputy",
        year: "1989",
        title: "Народны дэпутат СССР",
        description:
          "Выкарыстоўваў публічную трыбуну для размовы пра перабудову, галоснасць і адказнасць.",
      },
    ],
    aside: {
      label: "Пазіцыя",
      title: "Праўда як абавязак",
      text: "Для Адамовіча маўчанне перад катастрофай было не нейтральнасцю, а формай небяспекі.",
    },
    anchors: [
      {
        id: "anchor-chernobyl",
        title: "Чарнобыль",
        text: "Пасля катастрофы на Чарнобыльскай АЭС Адамовіч выступаў супраць замоўчвання яе наступстваў, звяртаўся да ўладаў і пісаў пра сапраўдны маштаб бяды.",
      },
    ],
  },
  {
    id: "legacy",
    year: "1990-я–2000-я",
    title: "Апошнія гады і спадчына",
    shortDescription:
      "Апошняе вяртанне ў Глушу і жыццё спадчыны ў кнігах, кіно, памяці і новых ініцыятывах.",
    detail:
      "Апошнія гады Адамовіча былі звязаныя з публічнай пазіцыяй, праваабарончай і культурнай працай. Пасля смерці яго спадчына працягнула жыць у кнігах, фільмах, даследаваннях і ініцыятывах памяці.",
    sectionTitle: "Спадчына, якая працягваецца",
    sectionLead:
      "Адамовіч пакінуў не толькі тэксты, але і прыклад маральнай прысутнасці ў грамадскім жыцці.",
    sectionText: [
      "У студзені 1994 года Алесь Адамовіч памёр пасля інфаркту і быў пахаваны ў Глушы побач з роднымі.",
      "Яго спадчына працягвае адкрывацца ў даследаваннях, выданнях, аўдыягідах, мемарыяльных ініцыятывах і новых размовах пра памяць.",
    ],
    image: "/assets/images/portraits/adamovich-desk-minsk-1989.jpg",
    imageAlt: "Алесь Адамовіч у Мінску, 1989 год",
    imageCaption: "Спадчына Адамовіча застаецца жывой часткай культурнай памяці.",
    events: [
      {
        id: "death",
        year: "1994",
        title: "Апошняе вяртанне",
        description: "Памёр у студзені 1994 года і быў пахаваны ў Глушы.",
        featured: true,
      },
      {
        id: "memory",
        year: "2000-я",
        title: "Жыццё спадчыны",
        description:
          "Кнігі, фільмы, даследаванні і грамадскія ініцыятывы працягваюць размову, якую пачаў Адамовіч.",
      },
    ],
    aside: {
      label: "Памяць",
      title: "Не завершаная гісторыя",
      text: "Спадчына Адамовіча патрабуе не толькі захавання, але і новага чытання — для сённяшняга часу.",
    },
  },
];

export const biographyPeriodsRu: BiographyPeriod[] = [
  {
    id: "childhood",
    year: "1927–1940",
    title: "Детство и Глуша",
    shortDescription:
      "Начало жизни, семья и место, которое стало настоящей малой родиной писателя.",
    detail:
      "Биография Алеся Адамовича начинается с семейной истории и переезда в Глушу. Именно это место позже станет для него пространством памяти, возвращения и нравственного истока.",
    sectionTitle: "Детство и Глуша",
    sectionLead:
      "Глуша была для Адамовича не просто посёлком детства. Она стала внутренней точкой возвращения, через которую он смотрел на человека, войну и память.",
    sectionText: [
      "Алесь Адамович родился в семье служащих. В документах закрепилась дата 3 сентября 1927 года, но в биографических материалах упоминается и настоящая дата — 3 августа 1926 года.",
      "В 1928 году семья переехала в Глушу. Здесь прошли школьные годы, первые чтения и первые наблюдения за жизнью людей, которые позже станут главной мерой его литературы.",
    ],
    image: "/assets/images/hero/glusha-pharmacy-1985.jpg",
    imageAlt: "Глуша, место памяти Алеся Адамовича",
    imageCaption: "Глуша — место, к которому Адамович возвращался в памяти и текстах.",
    events: [
      {
        id: "birth-date",
        year: "1926 / 1927",
        title: "Рождение",
        description:
          "Паспортная дата — 3 сентября 1927 года; настоящая дата в биографических материалах — 3 августа 1926 года.",
      },
      {
        id: "hlusha-move",
        year: "1928",
        title: "Переезд в Глушу",
        description:
          "Семья переехала в посёлок Глуша, который позже Адамович называл своей настоящей малой родиной.",
        featured: true,
      },
    ],
    aside: {
      label: "Из архива",
      title: "Малая родина",
      text: "Глуша в биографии Адамовича — это не только география, но и личная память, из которой вырастало его понимание ответственности перед людьми.",
    },
    anchors: [
      {
        id: "anchor-repressions",
        title: "Репрессии и семейная память",
        text: "В 1930 году деда Алеся Адамовича, Митрофана Фомича Тычину, раскулачили и выслали в Якутию. Эта семейная травма стала частью памяти, которая позже отозвалась в произведениях и гражданской позиции Адамовича.",
      },
    ],
  },
  {
    id: "war",
    year: "1941–1945",
    title: "Война и подполье",
    shortDescription:
      "Партизанский опыт, опасность и первое столкновение с тем, что позже станет главной темой творчества.",
    detail:
      "В годы войны Адамович вместе с матерью и братом был связан с партизанским движением. Это был опыт, который сделал войну не абстрактной темой, а личной раной и нравственным долгом свидетельствовать.",
    sectionTitle: "Война. Память. Человек на границе",
    sectionLead:
      "Война стала для Адамовича не материалом из прошлого, а живой правдой о человеке в крайней ситуации.",
    sectionText: [
      "Глушанское подполье, партизанский отряд, опасность и смерть рядом стали частью его личной памяти.",
      "Позже этот опыт вернётся в прозе, сценариях и документальных книгах — не как героика, а как тяжёлое свидетельство о человеке и его выборе.",
    ],
    image: "/assets/images/works/i-am-from-fire-village.webp",
    imageAlt: "Обложка книги о свидетельствах войны",
    imageCaption: "Военная память стала главным нервом документальной прозы Адамовича.",
    events: [
      {
        id: "war-begins",
        year: "1941",
        title: "Начало войны",
        description:
          "Война прервала юность и сделала тему человеческого испытания личной.",
      },
      {
        id: "partisan-unit",
        year: "1943",
        title: "Партизанский отряд",
        description:
          "Вместе с матерью и братом Адамович ушёл в партизанский отряд имени Кирова.",
        featured: true,
      },
    ],
    aside: {
      label: "Факт",
      title: "Свидетельство вместо легенды",
      text: "В своих военных текстах Адамович постоянно возвращался к голосам свидетелей — людей, которые видели катастрофу собственными глазами.",
    },
  },
  {
    id: "postwar",
    year: "1946–1959",
    title: "После войны. Поиск голоса",
    shortDescription:
      "Учёба, филология, литературоведение и начало пути исследователя.",
    detail:
      "После войны Адамович вернулся к учёбе, окончил филологический факультет БГУ и постепенно входил в литературную и научную работу.",
    sectionTitle: "Литература и наука",
    sectionLead:
      "Послевоенные годы стали временем интеллектуального становления: от учёбы до исследования белорусской литературы.",
    sectionText: [
      "Адамович изучал белорусскую прозу, работал как критик и исследователь, писал о литературе как о сфере нравственного выбора.",
      "Научная работа не отделялась для него от гражданской позиции: литература должна была говорить о правде времени.",
    ],
    image: "/assets/images/portraits/adamovich-writing-desk.jpg",
    imageAlt: "Алесь Адамович за рабочим столом",
    imageCaption: "Литературная работа для Адамовича была формой ответственности.",
    events: [
      {
        id: "bsu",
        year: "1950",
        title: "БГУ и филология",
        description:
          "Окончил филологический факультет БГУ и продолжил путь в литературоведении.",
        featured: true,
      },
      {
        id: "research",
        year: "1950-е",
        title: "Исследователь литературы",
        description:
          "Начал работу критика и исследователя белорусской прозы.",
      },
    ],
    aside: {
      label: "Из архива",
      title: "Поиск языка",
      text: "Послевоенная литература требовала нового языка — такого, который способен выдержать память о катастрофе.",
    },
  },
  {
    id: "sixties",
    year: "1960-е",
    title: "Проза и документ",
    shortDescription:
      "Переход к прозе, в которой личная память и документальная правда становятся главным материалом.",
    detail:
      "В 1960-е годы Адамович всё больше сближает литературу с документом, свидетельством и живой речью людей.",
    sectionTitle: "Проза и документальная правда",
    sectionLead:
      "Этот период подготовил главный принцип его творчества: слушать человека и не подменять его голос литературной позой.",
    sectionText: [
      "Адамович искал форму, в которой художественный текст мог бы сохранить точность живого свидетельства.",
      "Именно здесь складывается его будущая работа с голосами свидетелей войны и трагедий XX века.",
    ],
    image: "/assets/images/portraits/adamovich-writing.webp",
    imageAlt: "Алесь Адамович пишет",
    imageCaption: "Документ в его прозе становится не дополнением, а этическим центром.",
    events: [
      {
        id: "early-prose",
        year: "1960-е",
        title: "Поиск формы",
        description:
          "Складывается интерес к документальной прозе и свидетельствам людей.",
      },
    ],
    aside: {
      label: "Тема",
      title: "Голос свидетеля",
      text: "Адамовичу было важно, чтобы литература не заглушала человека, а помогала ему быть услышанным.",
    },
  },
  {
    id: "seventies",
    year: "1970-е",
    title: "Книги свидетельств",
    shortDescription:
      "«Хатынская повесть», «Я из огненной деревни…» и работа над «Блокадной книгой».",
    detail:
      "1970-е стали временем больших документальных книг, где война показана через голоса людей, которые её пережили.",
    sectionTitle: "Книги, которые сохраняют правду",
    sectionLead:
      "В этот период Адамович создаёт и готовит тексты, которые станут одними из главных документальных свидетельств о войне.",
    sectionText: [
      "«Хатынская повесть» и «Я из огненной деревни…» переносят в центр литературы не событие, а человека, который несёт память.",
      "Работа с Даниилом Граниным над «Блокадной книгой» продолжила этот принцип: документальная правда должна звучать через личные голоса.",
    ],
    image: "/assets/images/works/blockade-book.jpg",
    imageAlt: "Обложка Блокадной книги",
    imageCaption: "Документальные книги Адамовича сохраняют голоса свидетелей.",
    events: [
      {
        id: "khatyn-story",
        year: "1971",
        title: "«Хатынская повесть»",
        description:
          "Важный текст о войне, сожжённых деревнях и нравственной памяти.",
      },
      {
        id: "fiery-village",
        year: "1975",
        title: "«Я из огненной деревни…»",
        description:
          "Книга свидетельств, созданная вместе с Янкой Брылём и Владимиром Колесником.",
        featured: true,
      },
      {
        id: "blockade",
        year: "1979",
        title: "«Блокадная книга»",
        description:
          "Первая часть книги, созданной вместе с Даниилом Граниным.",
      },
    ],
    aside: {
      label: "Факт",
      title: "Литература памяти",
      text: "Эти книги построены на свидетельствах и документах, но их сила — в человеческой интонации.",
    },
  },
  {
    id: "eighties",
    year: "1980-е",
    title: "Кино, Чернобыль, гражданский голос",
    shortDescription:
      "Фильм «Иди и смотри», Чернобыль и активная гражданская позиция.",
    detail:
      "В 1980-е Адамович становится не только писателем и сценаристом, но и выразительным общественным голосом.",
    sectionTitle: "Кино и гражданская ответственность",
    sectionLead:
      "Этот период объединил искусство, публицистику и гражданскую смелость.",
    sectionText: [
      "Фильм «Иди и смотри», созданный по сценарию Адамовича и Элема Климова, стал одним из самых сильных антивоенных высказываний в мировом кино.",
      "После Чернобыля Адамович выступал против замалчивания последствий катастрофы и настаивал на правде как форме защиты людей.",
    ],
    image: "/assets/images/hero/adamovich-come-and-see-crew.jpg",
    imageAlt: "Алесь Адамович и кино",
    imageCaption: "Кино и публицистика в 1980-е стали продолжением его разговора о правде.",
    events: [
      {
        id: "come-and-see",
        year: "1985",
        title: "«Иди и смотри»",
        description:
          "Фильм по сценарию Адамовича и Элема Климова получил международное признание.",
        featured: true,
      },
      {
        id: "chernobyl",
        year: "1986",
        title: "Чернобыль",
        description:
          "Выступал против замалчивания правды о последствиях катастрофы.",
      },
      {
        id: "deputy",
        year: "1989",
        title: "Народный депутат СССР",
        description:
          "Использовал публичную трибуну для разговора о перестройке, гласности и ответственности.",
      },
    ],
    aside: {
      label: "Позиция",
      title: "Правда как обязанность",
      text: "Для Адамовича молчание перед катастрофой было не нейтральностью, а формой опасности.",
    },
    anchors: [
      {
        id: "anchor-chernobyl",
        title: "Чернобыль",
        text: "После катастрофы на Чернобыльской АЭС Адамович выступал против замалчивания её последствий, обращался к властям и писал о настоящем масштабе беды.",
      },
    ],
  },
  {
    id: "legacy",
    year: "1990-е–2000-е",
    title: "Последние годы и наследие",
    shortDescription:
      "Последнее возвращение в Глушу и жизнь наследия в книгах, кино, памяти и новых инициативах.",
    detail:
      "Последние годы Адамовича были связаны с публичной позицией, правозащитной и культурной работой. После смерти его наследие продолжило жить в книгах, фильмах, исследованиях и инициативах памяти.",
    sectionTitle: "Наследие, которое продолжается",
    sectionLead:
      "Адамович оставил не только тексты, но и пример нравственного присутствия в общественной жизни.",
    sectionText: [
      "В январе 1994 года Алесь Адамович умер после инфаркта и был похоронен в Глуше рядом с родными.",
      "Его наследие продолжает открываться в исследованиях, изданиях, аудиогидах, мемориальных инициативах и новых разговорах о памяти.",
    ],
    image: "/assets/images/portraits/adamovich-desk-minsk-1989.jpg",
    imageAlt: "Алесь Адамович в Минске, 1989 год",
    imageCaption: "Наследие Адамовича остаётся живой частью культурной памяти.",
    events: [
      {
        id: "death",
        year: "1994",
        title: "Последнее возвращение",
        description: "Умер в январе 1994 года и был похоронен в Глуше.",
        featured: true,
      },
      {
        id: "memory",
        year: "2000-е",
        title: "Жизнь наследия",
        description:
          "Книги, фильмы, исследования и общественные инициативы продолжают разговор, который начал Адамович.",
      },
    ],
    aside: {
      label: "Память",
      title: "Не завершённая история",
      text: "Наследие Адамовича требует не только сохранения, но и нового чтения — для сегодняшнего времени.",
    },
  },
];

export const biographyPeriodsEn: BiographyPeriod[] = [
  {
    id: "childhood",
    year: "1927–1940",
    title: "Childhood and Hlusha",
    shortDescription:
      "Family, early years, and the place that became Adamovich’s true home ground.",
    detail:
      "Ales Adamovich’s biography begins with family history and the move to Hlusha, a place that later became a space of memory and return.",
    sectionTitle: "Childhood and Hlusha",
    sectionLead:
      "Hlusha was more than a childhood settlement. It became an inner point of return from which Adamovich thought about people, war, and memory.",
    sectionText: [
      "Adamovich was born into a family of employees. Archival and biographical materials preserve the story of two dates: the official date and the date remembered in family history.",
      "In 1928, the family moved to Hlusha. His school years, first readings, and first observations of people’s lives happened there.",
    ],
    image: "/assets/images/hero/glusha-pharmacy-1985.jpg",
    imageAlt: "Hlusha, a place of memory for Ales Adamovich",
    imageCaption: "Hlusha remained a point of return in Adamovich’s memory and writing.",
    events: [
      {
        id: "birth-date",
        year: "1926 / 1927",
        title: "Birth",
        description:
          "Biographical materials preserve the story of Adamovich’s official and actual birth dates.",
      },
      {
        id: "hlusha-move",
        year: "1928",
        title: "Move to Hlusha",
        description:
          "The family moved to Hlusha, which Adamovich later called his true home ground.",
        featured: true,
      },
    ],
    aside: {
      label: "Archive",
      title: "Home Ground",
      text: "In Adamovich’s biography, Hlusha is not only geography but also personal memory.",
    },
    anchors: [
      {
        id: "anchor-repressions",
        title: "Repression and Family Memory",
        text: "The family memory of dispossession and exile became part of the moral background that later echoed in Adamovich’s writing and civic position.",
      },
    ],
  },
  {
    id: "war",
    year: "1941–1945",
    title: "War and Underground Resistance",
    shortDescription:
      "Partisan experience and the first encounter with what would become the central theme of his work.",
    detail:
      "During the war, Adamovich and his family were connected with the partisan movement. War became not an abstract theme but a personal wound and a moral duty to testify.",
    sectionTitle: "War, Memory, and the Human Limit",
    sectionLead:
      "For Adamovich, war was not a subject from the past, but a living truth about people in extreme situations.",
    sectionText: [
      "The underground movement in Hlusha, the partisan unit, danger, and death nearby became part of Adamovich’s personal memory.",
      "This experience later returned in his prose, screenplays, and documentary books.",
    ],
    image: "/assets/images/works/i-am-from-fire-village.webp",
    imageAlt: "Cover of a documentary book about war testimonies",
    imageCaption: "War memory became the central nerve of Adamovich’s documentary prose.",
    events: [
      {
        id: "war-begins",
        year: "1941",
        title: "War Begins",
        description:
          "The war interrupted youth and made the question of human endurance personal.",
      },
      {
        id: "partisan-unit",
        year: "1943",
        title: "Partisan Unit",
        description:
          "Adamovich joined the Kirov partisan unit together with his mother and brother.",
        featured: true,
      },
    ],
    aside: {
      label: "Fact",
      title: "Witness Instead of Legend",
      text: "In his war texts, Adamovich constantly returned to the voices of witnesses.",
    },
  },
  {
    id: "postwar",
    year: "1946–1959",
    title: "After the War. Finding a Voice",
    shortDescription:
      "Studies, philology, literary criticism, and the beginning of his research path.",
    detail:
      "After the war, Adamovich returned to education, graduated from the philology faculty of Belarusian State University, and entered literary and scholarly work.",
    sectionTitle: "Literature and Scholarship",
    sectionLead:
      "The postwar years shaped Adamovich intellectually, from university study to literary research.",
    sectionText: [
      "He studied Belarusian prose and worked as a critic and researcher.",
      "For him, literary scholarship was not separate from civic responsibility.",
    ],
    image: "/assets/images/portraits/adamovich-writing-desk.jpg",
    imageAlt: "Ales Adamovich at a desk",
    imageCaption: "For Adamovich, literary work was a form of responsibility.",
    events: [
      {
        id: "bsu",
        year: "1950",
        title: "BSU and Philology",
        description:
          "Graduated from the philology faculty and continued literary research.",
        featured: true,
      },
      {
        id: "research",
        year: "1950s",
        title: "Literary Researcher",
        description:
          "Began his work as a critic and researcher of Belarusian prose.",
      },
    ],
    aside: {
      label: "Archive",
      title: "A Search for Language",
      text: "Postwar literature needed a language capable of carrying the memory of catastrophe.",
    },
  },
  {
    id: "sixties",
    year: "1960s",
    title: "Prose and Document",
    shortDescription:
      "A move toward prose where personal memory and documentary truth become central.",
    detail:
      "In the 1960s, Adamovich increasingly brought literature closer to document, testimony, and living speech.",
    sectionTitle: "Prose and Documentary Truth",
    sectionLead:
      "This period prepared a central principle of his work: to listen to a human voice without replacing it with literary posture.",
    sectionText: [
      "Adamovich searched for a form in which literature could preserve the accuracy of living testimony.",
      "This is where his later work with voices of war witnesses began to take shape.",
    ],
    image: "/assets/images/portraits/adamovich-writing.webp",
    imageAlt: "Ales Adamovich writing",
    imageCaption: "In his prose, the document became an ethical center.",
    events: [
      {
        id: "early-prose",
        year: "1960s",
        title: "Searching for Form",
        description:
          "A growing interest in documentary prose and testimony.",
      },
    ],
    aside: {
      label: "Theme",
      title: "The Witness’s Voice",
      text: "Adamovich wanted literature to help people be heard.",
    },
  },
  {
    id: "seventies",
    year: "1970s",
    title: "Books of Testimony",
    shortDescription:
      "The Khatyn Story, I Am from the Fiery Village, and work on The Blockade Book.",
    detail:
      "The 1970s became the decade of major documentary books that showed war through the voices of people who survived it.",
    sectionTitle: "Books That Preserve Truth",
    sectionLead:
      "During this period, Adamovich created texts that became major documentary testimonies about war.",
    sectionText: [
      "The Khatyn Story and I Am from the Fiery Village placed the witness at the center of literature.",
      "The work on The Blockade Book with Daniil Granin continued this principle.",
    ],
    image: "/assets/images/works/blockade-book.jpg",
    imageAlt: "Cover of The Blockade Book",
    imageCaption: "Adamovich’s documentary books preserve voices of witnesses.",
    events: [
      {
        id: "khatyn-story",
        year: "1971",
        title: "The Khatyn Story",
        description:
          "An important text about war, burned villages, and moral memory.",
      },
      {
        id: "fiery-village",
        year: "1975",
        title: "I Am from the Fiery Village",
        description:
          "A book of testimonies created with Yanka Bryl and Uladzimir Kalesnik.",
        featured: true,
      },
      {
        id: "blockade",
        year: "1979",
        title: "The Blockade Book",
        description:
          "The first part of the book created with Daniil Granin.",
      },
    ],
    aside: {
      label: "Fact",
      title: "Literature of Memory",
      text: "These books are built on documents and testimonies, but their power lies in human intonation.",
    },
  },
  {
    id: "eighties",
    year: "1980s",
    title: "Cinema, Chernobyl, Civic Voice",
    shortDescription:
      "Come and See, Chernobyl, and Adamovich’s active public stance.",
    detail:
      "In the 1980s, Adamovich became not only a writer and screenwriter, but also a strong public voice.",
    sectionTitle: "Cinema and Civic Responsibility",
    sectionLead:
      "This period united art, journalism, and civic courage.",
    sectionText: [
      "Come and See, based on a screenplay by Adamovich and Elem Klimov, became one of the strongest antiwar statements in world cinema.",
      "After Chernobyl, Adamovich opposed the silence around the catastrophe and insisted on truth as a form of protection.",
    ],
    image: "/assets/images/hero/adamovich-come-and-see-crew.jpg",
    imageAlt: "Ales Adamovich and cinema",
    imageCaption: "Cinema and journalism continued Adamovich’s conversation about truth.",
    events: [
      {
        id: "come-and-see",
        year: "1985",
        title: "Come and See",
        description:
          "The film based on a screenplay by Adamovich and Elem Klimov received international recognition.",
        featured: true,
      },
      {
        id: "chernobyl",
        year: "1986",
        title: "Chernobyl",
        description:
          "Adamovich opposed silence about the consequences of the catastrophe.",
      },
      {
        id: "deputy",
        year: "1989",
        title: "People’s Deputy",
        description:
          "Used a public platform to speak about openness, responsibility, and reform.",
      },
    ],
    aside: {
      label: "Position",
      title: "Truth as Duty",
      text: "For Adamovich, silence in the face of catastrophe was a form of danger.",
    },
    anchors: [
      {
        id: "anchor-chernobyl",
        title: "Chernobyl",
        text: "After the Chernobyl disaster, Adamovich spoke against silence about its consequences and wrote about the true scale of the catastrophe.",
      },
    ],
  },
  {
    id: "legacy",
    year: "1990s–2000s",
    title: "Final Years and Legacy",
    shortDescription:
      "The final return to Hlusha and the continuing life of his legacy.",
    detail:
      "Adamovich’s final years were connected with public, human rights, and cultural work. After his death, his legacy continued in books, films, research, and initiatives of memory.",
    sectionTitle: "A Legacy That Continues",
    sectionLead:
      "Adamovich left not only texts, but also an example of moral presence in public life.",
    sectionText: [
      "In January 1994, Ales Adamovich died after a heart attack and was buried in Hlusha next to his relatives.",
      "His legacy continues through research, editions, audio guides, memorial initiatives, and new conversations about memory.",
    ],
    image: "/assets/images/portraits/adamovich-desk-minsk-1989.jpg",
    imageAlt: "Ales Adamovich in Minsk, 1989",
    imageCaption: "Adamovich’s legacy remains a living part of cultural memory.",
    events: [
      {
        id: "death",
        year: "1994",
        title: "Final Return",
        description: "Died in January 1994 and was buried in Hlusha.",
        featured: true,
      },
      {
        id: "memory",
        year: "2000s",
        title: "Life of the Legacy",
        description:
          "Books, films, research, and public initiatives continue the conversation Adamovich began.",
      },
    ],
    aside: {
      label: "Memory",
      title: "An Unfinished Story",
      text: "Adamovich’s legacy needs not only preservation, but new readings for the present.",
    },
  },
];

export const biographyThemesBe: BiographyTheme[] = [
  {
    id: "literature",
    title: "Літаратура",
    description:
      "Ад першых крытычных артыкулаў да дакументальнай прозы і даследаванняў беларускай літаратуры.",
    targetId: "section-postwar",
    tag: "слова",
    periodId: "postwar",
  },
  {
    id: "cinema",
    title: "Кіно",
    description:
      "Сцэнарыі, дакументальнае кіно і фільм «Ідзі і глядзі» як сусветнае антываеннае выказванне.",
    targetId: "section-eighties",
    tag: "экран",
    periodId: "eighties",
  },
  {
    id: "civic",
    title: "Грамадзянская дзейнасць",
    description:
      "Публіцыстыка, выступы, дэпутацкая праца, Мемарыял, ПЭН і праваабарончая пазіцыя.",
    targetId: "section-eighties",
    tag: "голас",
    periodId: "eighties",
  },
  {
    id: "chernobyl",
    title: "Чарнобыль",
    description:
      "Праўда пра катастрофу, адказнасць перад людзьмі і супраціў замоўчванню.",
    targetId: "anchor-chernobyl",
    tag: "праўда",
    periodId: "eighties",
  },
  {
    id: "repressions",
    title: "Палітычныя рэпрэсіі",
    description:
      "Сямейная памяць пра раскулачванне, савецкі ціск і пазнейшая праваабарончая пазіцыя.",
    targetId: "anchor-repressions",
    tag: "памяць",
    periodId: "childhood",
  },
  {
    id: "war-memory",
    title: "Вайна і памяць",
    description:
      "Асабісты досвед вайны і сведчанні людзей як аснова ягонай прозы і дакументальнай літаратуры.",
    targetId: "section-war",
    tag: "сведчанне",
    periodId: "war",
  },
];

export const biographyThemesRu: BiographyTheme[] = [
  {
    id: "literature",
    title: "Литература",
    description:
      "От первых критических статей до документальной прозы и исследований белорусской литературы.",
    targetId: "section-postwar",
    tag: "слово",
    periodId: "postwar",
  },
  {
    id: "cinema",
    title: "Кино",
    description:
      "Сценарии, документальное кино и фильм «Иди и смотри» как мировое антивоенное высказывание.",
    targetId: "section-eighties",
    tag: "экран",
    periodId: "eighties",
  },
  {
    id: "civic",
    title: "Гражданская деятельность",
    description:
      "Публицистика, выступления, депутатская работа, Мемориал, ПЭН и правозащитная позиция.",
    targetId: "section-eighties",
    tag: "голос",
    periodId: "eighties",
  },
  {
    id: "chernobyl",
    title: "Чернобыль",
    description:
      "Правда о катастрофе, ответственность перед людьми и сопротивление замалчиванию.",
    targetId: "anchor-chernobyl",
    tag: "правда",
    periodId: "eighties",
  },
  {
    id: "repressions",
    title: "Политические репрессии",
    description:
      "Семейная память о раскулачивании, советское давление и позднейшая правозащитная позиция.",
    targetId: "anchor-repressions",
    tag: "память",
    periodId: "childhood",
  },
  {
    id: "war-memory",
    title: "Война и память",
    description:
      "Личный опыт войны и свидетельства людей как основа его прозы и документальной литературы.",
    targetId: "section-war",
    tag: "свидетельство",
    periodId: "war",
  },
];

export const biographyThemesEn: BiographyTheme[] = [
  {
    id: "literature",
    title: "Literature",
    description:
      "From early criticism to documentary prose and studies of Belarusian literature.",
    targetId: "section-postwar",
    tag: "word",
    periodId: "postwar",
  },
  {
    id: "cinema",
    title: "Cinema",
    description:
      "Screenplays, documentary cinema, and Come and See as a major antiwar statement.",
    targetId: "section-eighties",
    tag: "screen",
    periodId: "eighties",
  },
  {
    id: "civic",
    title: "Civic Voice",
    description:
      "Essays, public speeches, deputy work, Memorial, PEN, and a human rights position.",
    targetId: "section-eighties",
    tag: "voice",
    periodId: "eighties",
  },
  {
    id: "chernobyl",
    title: "Chernobyl",
    description:
      "Truth about the catastrophe, responsibility to people, and resistance to silence.",
    targetId: "anchor-chernobyl",
    tag: "truth",
    periodId: "eighties",
  },
  {
    id: "repressions",
    title: "Political Repression",
    description:
      "Family memory of dispossession, Soviet pressure, and later human rights work.",
    targetId: "anchor-repressions",
    tag: "memory",
    periodId: "childhood",
  },
  {
    id: "war-memory",
    title: "War and Memory",
    description:
      "Personal wartime experience and human testimony as the basis of his documentary literature.",
    targetId: "section-war",
    tag: "testimony",
    periodId: "war",
  },
];

export const biographyPeriods = {
  be: biographyPeriodsBe,
  en: biographyPeriodsEn,
  ru: biographyPeriodsRu,
} satisfies Record<Locale, BiographyPeriod[]>;

export const biographyThemes = {
  be: biographyThemesBe,
  en: biographyThemesEn,
  ru: biographyThemesRu,
} satisfies Record<Locale, BiographyTheme[]>;

export function getBiographyPeriods(locale: Locale) {
  return biographyPeriods[locale] ?? biographyPeriods.be;
}

export function getBiographyThemes(locale: Locale) {
  return biographyThemes[locale] ?? biographyThemes.be;
}
