export type WorkType =
  | "book"
  | "film"
  | "script"
  | "article"
  | "essay"
  | "interview"
  | "archive"
  | "research";

export type WorkStatus = "published" | "draft" | "in-progress";

export type Locale = "ru" | "be" | "en";

export type LocalizedText = {
  ru: string;
  be: string;
  en: string;
};

export type ExternalLink = {
  label: string;
  url: string;
};

export type WorkEdition = {
  language: string;
  year?: number;
  country?: string;
  publisher?: string;
  isbn?: string;
  cover?: string;
  notes?: string;
};

export type WorkRating = {
  platform: string;
  value?: string;
  max?: string;
  link?: string;
  lastChecked?: string;
};

export type WorkAward = {
  name: string;
  year?: number;
  category?: string;
  result?: "winner" | "nominee" | "selected";
  organization?: string;
  link?: string;
};

export type WorkResearch = {
  title: string;
  author?: string;
  year?: number;
  type?: "article" | "book" | "thesis" | "conference" | "review";
  language?: string;
  link?: string;
  description?: string;
};

export type WorkMention = {
  title: string;
  source?: string;
  year?: number;
  type?: "media" | "review" | "interview" | "festival" | "encyclopedia";
  language?: string;
  link?: string;
};

export type RelatedMaterial = {
  type: "photo" | "audio" | "video" | "document" | "interview" | "article" | "archive";
  title: LocalizedText;
  link?: string;
  description?: LocalizedText;
};

export type Work = {
  id: string;
  slug: string;
  type: WorkType;
  year?: number;
  date?: string;
  featured: boolean;
  priority: number;
  status: WorkStatus;
  title: LocalizedText;
  originalTitle?: string;
  subtitle?: LocalizedText;
  authors: string[];
  coAuthors?: string[];
  editors?: string[];
  translators?: string[];
  role?: LocalizedText;
  descriptionShort: LocalizedText;
  descriptionFull?: LocalizedText;
  cover?: string;
  gallery?: string[];
  languages?: string[];
  editions?: WorkEdition[];
  availability?: {
    libraries?: ExternalLink[];
    archives?: ExternalLink[];
    onlineReading?: ExternalLink[];
    stores?: ExternalLink[];
    secondHand?: ExternalLink[];
  };
  links?: {
    imdb?: string;
    wikipedia?: string;
    wikidata?: string;
    tmdb?: string;
    letterboxd?: string;
    kinopoisk?: string;
    archive?: string;
    source?: string;
  };
  ratings?: WorkRating[];
  awards?: WorkAward[];
  research?: WorkResearch[];
  mentions?: WorkMention[];
  relatedWorks?: string[];
  relatedMaterials?: RelatedMaterial[];
  tags?: string[];
  themes?: string[];
};

export const works: Work[] = [
  {
    id: "work-i-am-from-fire-village",
    slug: "i-am-from-fire-village",
    type: "book",
    year: 1975,
    featured: true,
    priority: 1,
    status: "published",
    title: {
      ru: "Я из огненной деревни",
      be: "Я з вогненнай вёскі",
      en: "I Am from the Fiery Village",
    },
    originalTitle: "Я з вогненнай вёскі",
    authors: ["Алесь Адамович", "Янка Брыль", "Владимир Колесник"],
    role: {
      ru: "соавтор, составитель свидетельств",
      be: "суаўтар, укладальнік сведчанняў",
      en: "co-author and compiler of testimonies",
    },
    descriptionShort: {
      ru: "Документальная книга свидетельств о сожжённых деревнях и памяти войны.",
      be: "Дакументальная кніга сведчанняў пра спаленыя вёскі і памяць вайны.",
      en: "A documentary book of testimonies about burned villages and the memory of war.",
    },
    descriptionFull: {
      ru: "Книга построена на голосах свидетелей и сохраняет память о трагедии белорусских деревень, уничтоженных во время войны. Эта запись подготовлена как основа для дальнейшего уточнения изданий, источников и связанных архивных материалов.",
      be: "Кніга пабудавана на галасах сведкаў і захоўвае памяць пра трагедыю беларускіх вёсак, знішчаных падчас вайны. Гэты запіс падрыхтаваны як аснова для далейшага ўдакладнення выданняў, крыніц і звязаных архіўных матэрыялаў.",
      en: "The book is built on witnesses' voices and preserves the memory of Belarusian villages destroyed during the war. This record is prepared as a basis for later edition, source and archive expansion.",
    },
    cover: "/assets/images/works/i-am-from-fire-village.webp",
    languages: ["be", "ru"],
    editions: [
      {
        language: "be",
        year: 1975,
        notes: "Первое библиографическое описание требует дополнительной проверки.",
      },
    ],
    relatedWorks: ["come-and-see", "khatyn-story", "punishmenters"],
    tags: ["documentary prose", "testimony", "village memory"],
    themes: ["war", "memory", "testimony"],
  },
  {
    id: "work-khatyn-story",
    slug: "khatyn-story",
    type: "book",
    year: 1973,
    featured: true,
    priority: 2,
    status: "published",
    title: {
      ru: "Хатынская повесть",
      be: "Хатынская аповесць",
      en: "The Khatyn Tale",
    },
    originalTitle: "Хатынская аповесць",
    authors: ["Алесь Адамович"],
    descriptionShort: {
      ru: "Одно из ключевых произведений Адамовича о войне, памяти и нравственном испытании.",
      be: "Адзін з ключавых твораў Адамовіча пра вайну, памяць і маральнае выпрабаванне.",
      en: "One of Adamovich's key works about war, memory and moral trial.",
    },
    descriptionFull: {
      ru: "Произведение связано с темой Хатыни, памятью о сожжённых деревнях и нравственной ответственностью свидетеля. Страница оставляет место для будущих изданий, исследований и архивных ссылок.",
      be: "Твор звязаны з тэмай Хатыні, памяццю пра спаленыя вёскі і маральнай адказнасцю сведкі. Старонка пакідае месца для будучых выданняў, даследаванняў і архіўных спасылак.",
      en: "The work is connected with Khatyn, the memory of burned villages and the moral responsibility of testimony. The page is prepared for future editions, research and archive links.",
    },
    cover: "/assets/images/works/khatyn-story.jpg",
    languages: ["be", "ru"],
    relatedWorks: ["i-am-from-fire-village", "come-and-see"],
    tags: ["prose", "khatyn", "war memory"],
    themes: ["war", "memory", "responsibility"],
  },
  {
    id: "work-blockade-book",
    slug: "blockade-book",
    type: "book",
    year: 1979,
    featured: true,
    priority: 3,
    status: "published",
    title: {
      ru: "Блокадная книга",
      be: "Блакадная кніга",
      en: "The Blockade Book",
    },
    originalTitle: "Блокадная книга",
    authors: ["Алесь Адамович", "Даниил Гранин"],
    role: {
      ru: "соавтор документальной книги",
      be: "суаўтар дакументальнай кнігі",
      en: "co-author of the documentary book",
    },
    descriptionShort: {
      ru: "Документальная книга о блокаде Ленинграда, созданная на основе свидетельств.",
      be: "Дакументальная кніга пра блакаду Ленінграда, створаная на аснове сведчанняў.",
      en: "A documentary book about the Siege of Leningrad, based on testimonies.",
    },
    descriptionFull: {
      ru: "Книга фиксирует опыт блокадного города через свидетельства людей. Здесь предусмотрена структура для будущих изданий, исследований, внешних ссылок и критических материалов.",
      be: "Кніга фіксуе досвед блакаднага горада праз сведчанні людзей. Тут прадугледжана структура для будучых выданняў, даследаванняў, знешніх спасылак і крытычных матэрыялаў.",
      en: "The book records the experience of the besieged city through human testimonies. The record is structured for future editions, research, external links and criticism.",
    },
    cover: "/assets/images/works/blockade-book.jpg",
    languages: ["ru"],
    relatedWorks: ["i-am-from-fire-village"],
    tags: ["documentary prose", "siege", "testimony"],
    themes: ["war", "memory", "testimony"],
  },
  {
    id: "work-punishmenters",
    slug: "punishmenters",
    type: "book",
    year: 1980,
    featured: true,
    priority: 4,
    status: "published",
    title: {
      ru: "Каратели",
      be: "Карнікі",
      en: "The Punishmenters",
    },
    originalTitle: "Карнікі",
    authors: ["Алесь Адамович"],
    descriptionShort: {
      ru: "Произведение о механизмах насилия, соучастии и преступлениях против человека.",
      be: "Твор пра механізмы гвалту, саўдзел і злачынствы супраць чалавека.",
      en: "A work about mechanisms of violence, complicity and crimes against humanity.",
    },
    descriptionFull: {
      ru: "Материал посвящён теме насилия, соучастия и ответственности. Библиографические сведения, связанные исследования и архивные материалы можно расширять без изменения компонентов сайта.",
      be: "Матэрыял прысвечаны тэме гвалту, саўдзелу і адказнасці. Бібліяграфічныя звесткі, звязаныя даследаванні і архіўныя матэрыялы можна пашыраць без змены кампанентаў сайта.",
      en: "This entry is dedicated to violence, complicity and responsibility. Bibliographic data, research and archive materials can be expanded without changing site components.",
    },
    cover: "/assets/images/works/punishmenters.webp",
    languages: ["be", "ru"],
    relatedWorks: ["khatyn-story", "come-and-see"],
    tags: ["violence", "occupation", "documentary prose"],
    themes: ["war", "violence", "responsibility"],
  },
  {
    id: "work-come-and-see",
    slug: "come-and-see",
    type: "film",
    year: 1985,
    featured: true,
    priority: 5,
    status: "published",
    title: {
      ru: "Иди и смотри",
      be: "Ідзі і глядзі",
      en: "Come and See",
    },
    originalTitle: "Иди и смотри",
    authors: ["Элем Климов", "Алесь Адамович"],
    role: {
      ru: "сценарий",
      be: "сцэнар",
      en: "screenplay",
    },
    descriptionShort: {
      ru: "Фильм по сценарию Алеся Адамовича и Элема Климова о войне и памяти.",
      be: "Фільм паводле сцэнарыя Алеся Адамовіча і Элема Клімава пра вайну і памяць.",
      en: "A film based on a screenplay by Ales Adamovich and Elem Klimov about war and memory.",
    },
    descriptionFull: {
      ru: "Фильм стал одним из самых сильных художественных высказываний о войне. Внешние ссылки приведены как справочные и не парсятся автоматически.",
      be: "Фільм стаў адным з наймацнейшых мастацкіх выказванняў пра вайну. Знешнія спасылкі пададзены як даведачныя і не парсяцца аўтаматычна.",
      en: "The film became one of the strongest artistic statements about war. External links are provided as references and are not parsed automatically.",
    },
    cover: "/assets/images/works/come-and-see.jpg",
    links: {
      imdb: "https://www.imdb.com/title/tt0091251/",
    },
    relatedWorks: ["i-am-from-fire-village", "khatyn-story", "punishmenters"],
    tags: ["film", "screenplay", "war"],
    themes: ["war", "memory", "violence"],
  },
  {
    id: "work-war-under-rooftops",
    slug: "war-under-rooftops",
    type: "book",
    year: 1960,
    featured: true,
    priority: 6,
    status: "published",
    title: {
      ru: "Война под крышами",
      be: "Вайна пад стрэхамі",
      en: "War under the Rooftops",
    },
    originalTitle: "Вайна пад стрэхамі",
    authors: ["Алесь Адамович"],
    role: {
      ru: "автор",
      be: "аўтар",
      en: "author",
    },
    descriptionShort: {
      ru: "Материал о войне, жизни под оккупацией, партизанском опыте и внутреннем сопротивлении.",
      be: "Матэрыял пра вайну, жыццё пад акупацыяй, партызанскі досвед і ўнутраны супраціў.",
      en: "Material about war, life under occupation, partisan experience and inner resistance.",
    },
    descriptionFull: {
      ru: "Книга посвящена теме войны, жизни под оккупацией, партизанского опыта и внутреннего сопротивления.",
      be: "Кніга прысвечана тэме вайны, жыцця пад акупацыяй, партызанскага досведу і ўнутранага супраціву.",
      en: "The book is dedicated to the theme of war, life under occupation, partisan experience and inner resistance.",
    },
    cover: "/assets/images/works/war-under-rooftops.jpg",
    languages: ["be", "ru"],
    tags: ["prose", "book", "partisans", "occupation"],
    themes: ["war", "memory", "choice"],
  },
  {
    id: "work-partisan-stories",
    slug: "partisan-stories",
    type: "book",
    year: 1977,
    featured: true,
    priority: 7,
    status: "published",
    title: {
      ru: "Партизанские повести",
      be: "Партызанскія аповесці",
      en: "Partisan Stories",
    },
    authors: ["Алесь Адамович"],
    descriptionShort: {
      ru: "Собрание прозы о партизанском опыте, войне и человеческом выборе.",
      be: "Збор прозы пра партызанскі досвед, вайну і чалавечы выбар.",
      en: "A collection of prose about partisan experience, war and human choice.",
    },
    descriptionFull: {
      ru: "Материал подготовлен для последующего наполнения библиографическими данными и связанными источниками.",
      be: "Матэрыял падрыхтаваны для наступнага напаўнення бібліяграфічнымі данымі і звязанымі крыніцамі.",
      en: "This record is prepared for future bibliographic data and related sources.",
    },
    cover: "/assets/images/bibliography/covers/partisan-stories.webp",
    languages: ["be", "ru"],
    tags: ["prose", "partisans"],
    themes: ["war", "choice"],
  },
  {
    id: "work-chernobyl-materials",
    slug: "chernobyl-materials",
    type: "essay",
    featured: false,
    priority: 20,
    status: "in-progress",
    title: {
      ru: "Чернобыльские материалы",
      be: "Чарнобыльскія матэрыялы",
      en: "Chernobyl Materials",
    },
    authors: ["Алесь Адамович"],
    descriptionShort: {
      ru: "Черновая запись для будущего раздела о публицистике и общественной позиции.",
      be: "Чарнавы запіс для будучага раздзела пра публіцыстыку і грамадскую пазіцыю.",
      en: "A draft record for a future section on public writing and civic position.",
    },
    descriptionFull: {
      ru: "Точные материалы, даты и источники требуют проверки перед публикацией.",
      be: "Дакладныя матэрыялы, даты і крыніцы патрабуюць праверкі перад публікацыяй.",
      en: "Exact materials, dates and sources need verification before publication.",
    },
    tags: ["chernobyl", "publicism"],
    themes: ["responsibility", "history"],
  },
];

export const featuredWorks = works
  .filter((work) => work.featured && work.status === "published")
  .sort((a, b) => a.priority - b.priority);

export const publishedWorks = works
  .filter((work) => work.status === "published")
  .sort((a, b) => a.priority - b.priority);
