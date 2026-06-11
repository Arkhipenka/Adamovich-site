import type { Locale, RequiredLocalizedText } from "@/types/common.types";

export type InitiativeTimelineText = string | RequiredLocalizedText;

export type InitiativeTimelineItem = {
  id: string;
  year: string;
  date?: InitiativeTimelineText;
  title: InitiativeTimelineText;
  description: InitiativeTimelineText;
  image?: string;
  imageAlt?: InitiativeTimelineText;
  category:
    | "idea"
    | "public"
    | "documents"
    | "fundraising"
    | "art-object"
    | "monument"
    | "award"
    | "pause"
    | "return"
    | "future";
  href?: string;
  featured?: boolean;
};

export const initiativeTimelineCopy = {
  be: {
    eyebrow: "Шлях ініцыятывы",
    title: "2016–2027",
    moreLabel: "Даведацца больш",
  },
  ru: {
    eyebrow: "Путь инициативы",
    title: "2016–2027",
    moreLabel: "Узнать больше",
  },
  en: {
    eyebrow: "Initiative Timeline",
    title: "2016–2027",
    moreLabel: "Learn more",
  },
} satisfies Record<
  Locale,
  {
    eyebrow: string;
    title: string;
    moreLabel: string;
  }
>;

export const initiativeTimeline: InitiativeTimelineItem[] = [
  {
    id: "beginning-2016",
    year: "2016",
    date: "Восень 2016",
    title: "Пачатак",
    description:
      "Падчас выбарчай кампаніі адбылося знаёмства са старшынёй глушанскага сельсавета Марынай Сушчанка, і ў размове нарадзілася ідэя ўшанаваць памяць Алеся Адамовіча.",
    
    category: "idea",
    featured: true
  },
  {
    id: "project-fair-2017",
    year: "2017",
    date: "26 студзеня 2017",
    title: "Кірмаш праектаў",
    description:
      "Публічная прэзентацыя ідэі помніка. Эксперты палічылі ідэю немагчымай ў рэалізацыі",
    image: "/assets/images/initiative/market.png",
    imageAlt: "Кірмаш праектаў",
    category: "public",
  },
  {
    id: "first-steps-2018",
    year: "2018",
    date: "24 студзеня 2018",
    title: "Збор подпісаў",
    description:
      "Разпачалі збор подпісаў пад зваротам да ўладаў з просьбай ушанаваць памяць Алеся Адамовіча ў Глушы. Адбылася першая сустрэча ў Бабруйскім райвыканкаме. Подпісы збіраліся ў Глушы, Бабруйску, Мінску і іншых гарадах.",
    category: "documents",
    featured: true,
  },
  {
    id: "petition-support-2018",
    year: "2018",
    date: "1 сакавіка 2018",
    title: "Адпраўка подпісаў",
    description:
      "У Міністрэрства Культуры і Магілёўскі аблвыканкам былі перададзены 625 подпісаў і 311 чалавек падтрымалі электронную петыцыю",
    image: "/assets/images/initiative/petition.jpg",
    imageAlt: "Кірмаш праектаў",
    category: "documents",
  },
  {
    id: "art-object-idea-2018",
    year: "2018",
    date: "Сакавік 2018",
    title: "Ідэя Арт-аб’екта",
    description:
      "Падчас трэнінгу Цэнтру гарадскіх ініцыятыў у Бабруйску нарадзілася ідэя стварыць арт-аб’ект Прыпынак Адамовіча. І сфарміравалася каманда, якая пачала працаваць над гэтай ідэяй і называцца ініцыятывай Прыпынак Адамовіча.",
    category: "art-object",
    featured: true,
  },
  {
    id: "ministry-response-2018",
    year: "2018",
    date: "11 красавіка 2018",
    title: "Адказ Міністэрства",
    description:
      "Атрыманы пазітыўны адказ ад Міністэрства Культуры",
    image: "/assets/images/initiative/ministry-response.png",
    imageAlt: "Адказ Міністэрства Культуры",
    category: "documents",
    featured: true,
  },

  {
    id: "art-object-contest-2018",
    year: "2018",
    date: "23 красавіка 2018",
    title: "Пачатак конкурса",
    description:
      "Пачатак конкурсу на стварэнне арт-аб’екта. Прыём заявак і ідэй прадаўжаўся да канца мая 2018 года",
    image: "/assets/images/initiative/art-object.jpg",
    imageAlt: "Афіша конкурса на стварэнне арт-аб’екта",
    category: "art-object",
    
  },
  {
    id: "fundraising-2018",
    year: "2018",
    date: "6 мая 2018",
    title: "Збор сродкаў",
    description:
      "Пачатак збору сродкаў на помнік праз краўдфандынгавую платформу Talaka. Першапачаткова скульптарам помніка быў абраны Уладзімір Мелехаў, і мэтай было сабраць 8",
    image: "/assets/images/initiative/Melehau.jpg",
    imageAlt: "Эскіз помніка ад Уладзіміра Мелехава",
    category: "fundraising",
    featured: true,
  },
  {
    id: "letter-to-sony-pictures-2018",
    year: "2018",
    date: "15 мая 2018",
    title: "Пісьмо ў Sony Pictures",
    description:
      "Пісьмо ў Sony Pictures, каб прыцягнуць увагу да сбору сродкаў і нагадаць пра сцэнарый пра Чарнобыль, які быў напісаны Алесем Адамовічам для ніх у 1986 годзе. Прыцягвалі ўвагу, так як збор сродкаў ішоў павольна, а час ішоў.",
    category: "public",
  },
  {
    id: "lukashuk-donation-2018",
    year: "2018",
    date: "28 мая 2018",
    title: "Алесю ад Алеся",
    description:
      "Падчас узнагоджэння прэміі Алеся Адамовіча, Алесь Лукашук перадаў грашовы прыз дачцэ Алеся Адамовіча на помнік са словамі «Алесю ад Алеся»",
    image: "/assets/images/initiative/lukashuk.jpg",
    imageAlt: "Алесь Лукашук перадае грашовы прыз дачцэ Алеся Адамовіча на помнік са словамі «Алесю ад Алеся»",
    category: "fundraising",
    featured: true,
  },
  {
    id: "Zisser-donation-2018",
    year: "2018",
    date: "30 мая 2018",
    title: "Юрый Зісер",
    description:
      "Падчас збору сродкаў на помнік былі праблемы з тым што не збор сродкаў ішоў павольна і была рызыка што не збярэм мы пачалі пісаць да вядомых асобаў з просьбай падтрымаць збор сродкаў. Адзін з тых хто адгукнуўся гэта быў Юрый Зісер, які перавёў 3000 рублёў і публічна патрымаў праект",
    image: "/assets/images/initiative/people/zisser.jpg",
    imageAlt: "Ціхі краявід як вобраз паўзы ў працы ініцыятывы",
    category: "fundraising",
    featured:true
  },
  {
  id: "chytayem-adamovicha-flashmob-2018",
  year: "2018",
  date: "10 чэрвеня 2018",
  title: "#ЧытаемАдамовіча",
  description:
    "Флэшмоб публічнага чытання твораў Алеся Адамовіча. Адзін з першых культурных фарматаў ініцыятывы, які вяртаў тэксты пісьменніка ў жывую прастору.",
  category: "public",
},
    {
    id: "kirmash-2018",
    year: "2018",
    date: "28 чэрвеня 2018",
    title: "Кірмаш праектаў",
    description:
      "Прэзентацыя праекта арт-аб'екта Прыпынак Адамовіча. Дзе экспертаў пераканалі што нават немагчымае можа стаць магчымым і атрымалі падтрымку",
    image: "/assets/images/initiative/Kirmash-2018.jpg",
    imageAlt: "Ціхі краявід як вобраз паўзы ў працы ініцыятывы",
    category: "art-object",
  },
  {
    id: "fundraising-finish-2018",
    year: "2018",
    date: "21 чэрвеня 2018",
    title: "Сабралі сродкі",
    description:
      "Паспяховае завяршэнне збору сродкаў, дзе асноўным меценатам выступіў Юрый Зісер, агулам мы сабралі 8057 рублёў, ахвяравал",
    category: "fundraising",
    featured: true,
  },
  {
    id: "Zisser-donation-2018",
    year: "2018",
    date: "30 мая 2018",
    title: "Святлана Алексіевіч",
    description:
      "Падчас збору сродкаў на помнік былі праблемы з тым што не збор сродкаў ішоў павольна і была рызыка што не збярэм мы пачалі пісаць да вядомых асобаў з просьбай падтрымаць збор сродкаў. Адзін з тых хто адгукнуўся гэта быў Юрый Зісер, які перавёў 3000 рублёў і публічна патрымаў праект",
    image: "/assets/images/initiative/people/alexievich.jpg",
    imageAlt: "Ціхі краявід як вобраз паўзы ў працы ініцыятывы",
    category: "fundraising",
    featured:true
  },
  {
  id: "meeting-daughter-adamovich-2018",
  year: "2018",
  date: "Жнівень 2018",
  title: "Сустрэча з дачкой Адамовіча",
  description:
    "У Бабруйску адбылася сустрэча з дачкой Алеся Адамовіча.",
  category: "public",
  featured: true,
},
{
  id: "chytayem-adamovicha-readings-2018",
  year: "2018",
  date: "6 верасня 2018",
  title: "#ЧытаемАдамовіча",
  description:
    "У Галерэі TUT.BY адбыліся публічныя чытанні #ЧытаемАдамовіча. Гэта быў культурны фармат ініцыятывы, які вяртаў тэксты пісьменніка ў жывую прастору і дапамагаў гаварыць пра Адамовіча не толькі праз помнік, але і праз яго слова.",
  image: "/assets/images/initiative/chytaem-adamovicha.jpg",
  imageAlt: "Афіша публічных чытанняў #ЧытаемАдамовіча ў Галерэі TUT.BY",
  category: "public",
},
{
  id: "bus-stop-opening-2018",
  year: "2018",
  date: "6 кастрычніка 2018",
  title: "Адкрыццё «Прыпынку Адамовіча»",
  description:
    "У Глушы быў прэзентаваны арт-аб’ект «Прыпынак Адамовіча», створаны мастаком Аляксандрам Благім. На адкрыццё прыехала дачка пісьменніка Натальля Адамовіч, якая выбрала фотаздымак бацькі і ўрывак з аповесці «Vixi» для прыпынку.",
  image: "/assets/images/initiative/bus-stop-opening.jpg",
  imageAlt: "Арт-аб’ект «Прыпынак Адамовіча» ў Глушы",
  category: "art-object",
  href: "https://www.svaboda.org/a/29529266.html",
  featured: true,
},
{
  id: "booktrailer-contest-2019",
  year: "2019",
  date: "3 красавіка 2019",
  title: "Конкурс буктрэйлераў",
  description:
    "Ініцыятыва «Прыпынак Адамовіча» разам з бабруйскай суполкай ГА «БАЖ» распачала конкурс буктрэйлераў «Глядзі і чытай» па творах Алеся Адамовіча. Праект аб’ядноўваў літаратуру, відэа і тэхналогіі, каб прыцягнуць увагу моладзі да тэкстаў пісьменніка.",
  image: "/assets/images/initiative/booktrailer-contest.jpg",
  imageAlt: "Конкурс буктрэйлераў «Глядзі і чытай» па творах Алеся Адамовіча",
  category: "public",
  href: "https://penbelarus.org/2019/04/03/babruychane-raspachal-konkurs-buktreylera-glyadz-chytay-pa-tvorah-alesya-adamovcha.html",
},
{
  id: "social-weekend-2019",
  year: "2019",
  date: "10 сакавіка 2019",
  title: "Фінал Social Weekend",
  description:
    "Праект «Глуша Адамовіча» трапіў у дваццатку лепшых праектаў Social Weekend і атрымаў 512 галасоў у народным галасаванні. Гэта стала важнай падтрымкай і пацверджаннем цікавасці да ідэі.",
  image: "/assets/images/initiative/awards/social-weekend.jpg",
  imageAlt: "Праект «Глуша Адамовіча» ў Social Weekend",
  category: "award",
},
{
  id: "social-weekend-award-2019",
  year: "2019",
  date: "16 траўня 2019",
  title: "Перамога ў Social Weekend",
  description:
    "Праект «Глуша Адамовіча» атрымаў узнагароду Social Weekend у намінацыі «Добрая ініцыятыва» і «Малая радзіма» ад Беларусбанка. Гэта падтрымала далейшую працу ў Глушы.",
  image: "/assets/images/initiative/awards/social-weekend-certificate.jpg",
  imageAlt: "Сертыфікат Social Weekend праекта «Глуша Адамовіча»",
  category: "award",
  featured: true,
},
{
  id: "letter-to-hbo-2019",
  year: "2019",
  date: "16 чэрвеня 2019",
  title: "Пісьмо ў HBO",
  description:
    "Ініцыятыва накіравала ліст у HBO з запрашэннем каманды серыяла «Чарнобыль» на адкрыццё бюста Алесю Адамовічу і з напамінам пра ролю пісьменніка ў асэнсаванні Чарнобыльскай катастрофы.",
  category: "public",
},
{
  id: "monument-opening-2019",
  year: "2019",
  date: "9 лістапада 2019",
  title: "Адкрыццё бюста",
  description:
    "У Глушы адкрыўся бюст Алесю Адамовічу — першы помнік пісьменніку. Скульптар Генік Лойка стварыў вобраз, у якім Адамовіч выглядае жывым і сапраўдным. Гэта стала кульмінацыяй працы, што пачалася з ідэі, подпісаў, зваротаў і краўдфандынгу.",
  image: "/assets/images/initiative/monument-opening.jpg",
  imageAlt: "Адкрыццё першага помніка Алесю Адамовічу ў Глушы",
  category: "monument",
  featured: true,
},
{
  id: "theatrical-excursion-2019",
  year: "2019",
  date: "10 лістапада 2019",
  title: "Тэатралізаваная экскурсія",
  description:
    "У Глушы прайшла тэатралізаваная экскурсія па творах Алеся Адамовіча — адзін з фарматаў жывой працы з яго тэкстамі, мясцовай памяццю і прасторай малой радзімы.",
  image: "/assets/images/initiative/theatrical-excursion.jpg",
  imageAlt: "Тэатралізаваная экскурсія ў Глушы па творах Алеся Адамовіча",
  category: "public",
},
{
  id: "rada-awards-2019",
  year: "2019",
  date: "20 снежня 2019",
  title: "RADA Awards",
  description:
    "Ініцыятыва «Прыпынак Адамовіча» атрымала ўзнагароду RADA Awards у намінацыі «Лепшы моладзевы праект / ініцыятыва ў сферы захавання культурнай спадчыны».",
  image: "/assets/images/initiative/awards/rada-awards-2019.jpg",
  imageAlt: "Узнагарода RADA Awards 2019 для ініцыятывы «Прыпынак Адамовіча»",
  category: "award",
  featured: true,
},
{
  id: "heritage-in-action-shortlist-2019",
  year: "2019",
  date: "18 красавіка 2019",
  title: "Прызнанне ICOMOS",
  description:
    "«Прыпынак Адамовіча» ўвайшоў у шорт-ліст намінацыі «Лепшы культурны праект» конкурсу ICOMOS «Спадчына ў дзеянні».",
  image: "/assets/images/initiative/awards/heritage-in-action.jpg",
  imageAlt:
    "Шорт-ліст конкурсу ICOMOS «Спадчына ў дзеянні» з праектам «Прыпынак Адамовіча»",
  category: "award",
},
{
  id: "booktrailer-contest-2019",
  year: "2019",
  date: "3 красавіка 2019",
  title: "Конкурс буктрэйлераў",
  description:
    "Ініцыятыва «Прыпынак Адамовіча» разам з бабруйскай суполкай ГА «БАЖ» распачала конкурс буктрэйлераў «Глядзі і чытай» па творах Алеся Адамовіча. Праект аб’ядноўваў літаратуру, відэа і тэхналогіі, каб прыцягнуць увагу моладзі да тэкстаў пісьменніка.",
  image: "/assets/images/initiative/booktrailer-contest.jpg",
  imageAlt: "Конкурс буктрэйлераў «Глядзі і чытай» па творах Алеся Адамовіча",
  category: "public",
  href: "https://penbelarus.org/2019/04/03/babruychane-raspachal-konkurs-buktreylera-glyadz-chytay-pa-tvorah-alesya-adamovcha.html",
}
];
