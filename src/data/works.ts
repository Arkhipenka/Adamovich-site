import type { Work, WorkCategory } from "@/types/work.types";

const workingBibliographyNote =
  "Working bibliography. To be verified and expanded.";

export const works: Work[] = [
  {
    slug: "i-am-from-fire-village",
    title: {
      be: "Я з вогненнай вёскі",
      ru: "Я из огненной деревни",
      en: "I Am from the Fiery Village",
    },
    originalTitle: "Я з вогненнай вёскі",
    year: "1975",
    categories: ["documentary-prose", "war-memory", "coauthored"],
    coauthors: ["Янка Брыль", "Уладзімір Калеснік"],
    cover: "/assets/images/bibliography/covers/i-am-from-fire-village.webp",
    featured: true,
    shortDescription: {
      ru: "Документальная книга свидетельств о сожжённых деревнях во время второй мировой войны.",
      be: "Дакументальная кніга сведчанняў пра спаленыя вёскі во время другой сусветнай вайны",
      en: "A documentary book of testimonies about burned villages during world war II.",
    },
    sourceNote: workingBibliographyNote,
  },
  {
    slug: "khatyn-story",
    title: {
      be: "Хатынская аповесць",
      ru: "Хатынская повесть",
      en: "The Khatyn Tale",
    },
    originalTitle: "Хатынская аповесць",
    year: "1973",
    categories: ["fiction", "war-memory"],
    cover: "/assets/images/bibliography/covers/khatyn-story.webp",
    featured: true,
    shortDescription: {
      ru: "Одно из ключевых произведений Адамовича о войне",
      be: "Адзін з ключавых твораў Адамовіча пра вайну",
      en: "One of Adamovich’s key works about war",
    },
    sourceNote: workingBibliographyNote,
  },
  {
    slug: "war-under-rooftops",
    title: {
      be: "Партызанскія аповесці",
      ru: "Партизанские повести",
      en: "Partisan Stories",
    },
    originalTitle: "Вайна пад Стрэхамі",
    year: "1960",
    categories: ["fiction", "war-memory"],
    cover: "/assets/images/bibliography/covers/partisan-stories.webp",
    featured: true,
    shortDescription: {
      ru: "Проза о партизанском опыте, войне и человеческом выборе.",
      be: "Проза пра партызанскі досвед, вайну і чалавечы выбар.",
      en: "Prose about partisan experience, war and human choice.",
    },
    sourceNote: workingBibliographyNote,
  },
  {
    slug: "war-under-rooftops",
    title: {
      be: "Вайна пад стрэхамі",
      ru: "Война под крышами",
      en: "War under the Rooftops",
    },
    originalTitle: "Вайна пад стрэхамі",
    year: "1960",
    categories: ["fiction", "war-memory"],
    cover: "/assets/images/bibliography/covers/war-under-rooftops.webp",
    featured: true,
    shortDescription: {
      ru: "Произведение о войне, жизни под оккупацией и внутреннем сопротивлении.",
      be: "Твор пра вайну, жыццё пад акупацыяй і ўнутраны супраціў.",
      en: "A work about war, life under occupation and inner resistance.",
    },
    sourceNote: workingBibliographyNote,
  },
  {
    slug: "blockade-book",
    title: {
      be: "Блакадная кніга",
      ru: "Блокадная книга",
      en: "The Blockade Book",
    },
    originalTitle: "Блокадная книга",
    year: "1979",
    categories: ["documentary-prose", "war-memory", "coauthored"],
    coauthors: ["Даниил Гранин"],
    cover: "/assets/images/bibliography/covers/blockade-book.webp",
    featured: true,
    shortDescription: {
      ru: "Документальная книга о блокаде Ленинграда, созданная на основе свидетельств.",
      be: "Дакументальная кніга пра блакаду Ленінграда, створаная на аснове сведчанняў.",
      en: "A documentary book about the Siege of Leningrad, based on testimonies.",
    },
    sourceNote: workingBibliographyNote,
  },
  {
    slug: "punishmenters",
    title: {
      be: "Карнікі",
      ru: "Каратели",
      en: "The Punishmenters",
    },
    originalTitle: "Карнікі",
    year: "1980",
    categories: ["documentary-prose", "war-memory", "violence"],
    cover: "/assets/images/bibliography/covers/placeholder.webp",
    featured: true,
    shortDescription: {
      ru: "Произведение о механизмах насилия, соучастии и преступлениях против человека.",
      be: "Твор пра механізмы гвалту, саўдзел і злачынствы супраць чалавека.",
      en: "A work about mechanisms of violence, complicity and crimes against humanity.",
    },
    sourceNote: workingBibliographyNote,
  },
  {
    slug: "come-and-see",
    title: {
      be: "Ідзі і глядзі",
      ru: "Иди и смотри",
      en: "Come and See",
    },
    originalTitle: "Иди и смотри",
    year: "1985",
    categories: ["screenplay", "war-memory"],
    cover: "/assets/images/bibliography/covers/placeholder.webp",
    featured: true,
    shortDescription: {
      ru: "Киносценарий и фильм, ставший одним из самых сильных художественных высказываний о войне.",
      be: "Кінасцэнар і фільм, які стаў адным з наймацнейшых мастацкіх выказванняў пра вайну.",
      en: "A screenplay and film that became one of the strongest artistic statements about war.",
    },
    sourceNote: workingBibliographyNote,
  },
];

export const featuredWorks = works.filter((work) => work.featured);

export function getWorkBySlug(slug: string) {
  return works.find((work) => work.slug === slug);
}

export function getWorksByCategory(category: WorkCategory) {
  return works.filter((work) => work.categories.includes(category));
}
