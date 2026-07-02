import type { Work } from "../works";
import { khatynStorySnyderReviewBody } from "../workReviews/khatyn-story-snyder";

export const khatynStoryWork: Work = {
  id: "work-khatyn-story",
  slug: "khatyn-story",
  type: "novella",
  year: 1973,
  firstPublicationYear: 1973,
  featured: true,
  priority: 2,
  status: "published",
  title: {
    ru: "Хатынская повесть",
    be: "Хатынская аповесць",
    en: "The Khatyn Tale",
  },
  originalTitle: "Хатынская аповесць",
  authors: ["Алесь Адамовіч"],
  descriptionShort: {
    ru: "Одно из ключевых произведений Адамовича о войне, памяти и нравственном испытании.",
    be: "Адзін з ключавых твораў Адамовіча пра вайну, памяць і маральнае выпрабаванне.",
    en: "One of Adamovich's key works about war, memory and moral trial.",
  },
  shortDescription: {
    ru: "Одно из ключевых произведений Адамовича о войне, памяти и нравственном испытании.",
    be: "Адзін з ключавых твораў Адамовіча пра вайну, памяць і маральнае выпрабаванне.",
    en: "One of Adamovich's key works about war, memory and moral trial.",
  },
  descriptionFull: {
    ru: "Произведение связано с темой Хатыни, памятью о сожжённых деревнях и нравственной ответственностью свидетеля.",
    be: "Твор звязаны з тэмай Хатыні, памяццю пра спаленыя вёскі і маральнай адказнасцю сведкі.",
    en: "The work is connected with Khatyn, the memory of burned villages and the moral responsibility of testimony.",
  },
  annotation: {
    full: [
      "Аповесць «Хатынская аповесць» (1973). Аўтобус мірна коціць па палявой дарозе. Пасажыры занятыя размовай. Вось з-за павароту паказалася вёска. Шырокая прамая вуліца. Бярозы, клёны. Дамоў пакуль не відаць, толькі рэдкія лаўкі-бярвенні... I раптам там, дзе павінны былі б стаяць хаты, — абеліскі, абеліскі, абеліскі... Гэта — помнікі жыхарам беларускіх вёсак, спаленых гітлераўцамі.",
      "Галоўны герой Фларыян Пятровіч Гайшун, ветэран вайны, выкладчык псіхалогіі, разам з былымі партызанамі Касачом, Сталетавай, Лапцёнкам і іншымі едзе ў Хатынь. У памяці Гайшуна, сляпога чалавека, як бы ажывае ваеннае ліхалецце. Флёра хлопцам ваяваў у партызанскім атрадзе, цудам вырваўся з «вогненнай вёскі», бачыў смерць блізкіх.",
      "Ніколі не сатрэцца з яго памяці жудасная расправа карнікаў над мірнымі жыхарамі вёскі Пераходы, гібель маці і дзвюх сястрычак-блізнятак. А праз палеміку Гайшуна з яго аспірантам Бокіем аўтар абараняе вечныя гуманістычныя каштоўнасці чалавека.",
      "Па матывах «Хатынскай аповесці» ў Дзяржаўным рускім драмтэатры БССР у 1977 годзе была пастаўлена п'еса «Вяртанне ў Хатынь» (рэжысёр Б. Луцэнка).",
    ],
  },
  cover: "/assets/images/works/khatyn-story.jpg",
  coverImage: "/assets/images/works/khatyn-story.jpg",
  coverAlt: {
    ru: "Обложка книги «Хатынская повесть»",
    be: "Вокладка кнігі «Хатынская аповесць»",
    en: "Cover of The Khatyn Tale",
  },
  languages: ["be", "ru"],
  originalLanguages: ["be", "ru"],
  relatedWorks: ["i-am-from-fire-village", "come-and-see"],
  reviews: [
    {
      id: "timothy-snyder-tls-2013",
      title: {
        be: "Цімаці Снайдэр: У беларускай літаратуры ёсць твор, які ўваходзіць у шорт-ліст найлепшых раманаў свету ХХ стагоддзя",
        ru: "Тимоти Снайдер: в белорусской литературе есть произведение, которое входит в шорт-лист лучших романов мира XX века",
        en: "Timothy Snyder: Belarusian literature has a work that belongs on the shortlist of the twentieth century’s great novels",
      },
      body: khatynStorySnyderReviewBody,
      author: "Цімаці Снайдэр",
      authorRole: {
        be: "гісторык, прафесар Ельскага ўніверсітэта",
        ru: "историк, профессор Йельского университета",
        en: "historian, Yale University professor",
      },
      image: "/assets/images/portraits/timothy-snyder.webp",
      imageAlt: {
        be: "Партрэт Цімаці Снайдэра",
        ru: "Портрет Тимоти Снайдера",
        en: "Portrait of Timothy Snyder",
      },
      quote: {
        be: "«Хатынская аповесць» гарантуе сабе месца ў шорт-лісце найлепшых раманаў ХХ стагоддзя.",
        ru: "«Хатынская повесть» заслуживает места в шорт-листе лучших романов XX века.",
        en: "Khatyn belongs on the shortlist of the great novels of the twentieth century.",
      },
      source: "Times Literary Supplement",
      year: "2013",
    },
  ],
  tags: ["prose", "khatyn", "war memory"],
  themes: ["war", "memory", "responsibility"],
};
