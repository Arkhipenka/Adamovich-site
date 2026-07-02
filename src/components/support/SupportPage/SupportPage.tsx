import Image from "next/image";
import Link from "next/link";

import styles from "./SupportPage.module.css";
import { assetPath, siteConfig } from "@/config/site";
import type { Dictionary } from "@/i18n/dictionaries";
import { localizedHref } from "@/lib/localizedHref";
import type { Locale } from "@/types/common.types";

type IconName =
  | "archive"
  | "book"
  | "calendar"
  | "contacts"
  | "folder"
  | "gift"
  | "globe"
  | "heart"
  | "library"
  | "monitor"
  | "news"
  | "partners"
  | "paypal"
  | "patreon"
  | "people"
  | "shield";

type Card = {
  icon: IconName;
  title: string;
  text: string;
};

type LinkCard = Card & {
  cta: string;
  href: string;
};

const supportHeroImage = assetPath("/assets/images/hero/support-hero-paper-background.webp");
// TODO: replace hero image with final archive photo.

const paymentLinks = {
  bank: "#",
  kofi: siteConfig.supportUrl || "https://ko-fi.com/alesadamovich",
  patreon: siteConfig.patreonUrl || "https://www.patreon.com/Adamovich",
  paypal: "#",
};
// TODO: add real payment links.

const supportContent = {
  ru: {
    hero: {
      eyebrow: "Сохраняем память. Исследуем. Передаём дальше.",
      title: "Поддержать",
      text: "Проект об Алесе Адамовиче существует благодаря помощи единомышленников. Ваша поддержка помогает сохранять наследие писателя, делать его доступным сегодня и для будущих поколений.",
      accent:
        "Нужна помощь в развитии цифрового архива, поддержке сайта, переводах и подготовке к 100-летию писателя.",
      imageAlt:
        "Архивный визуальный фон для страницы поддержки проекта об Алесе Адамовиче",
      primaryCta: "Поддержать проект",
      secondaryCta: "Передать материалы",
      tertiaryCta: "Стать партнёром",
    },
    stats: [
      ["Цифровой архив", "материалы, документы, свидетельства"],
      ["Сайт и база данных", "открытый доступ к наследию"],
      ["100-летие", "подготовка к 2027 году"],
      ["Поддержка сообщества", "партнёры, исследователи, читатели"],
    ],
    bridge: {
      title: "Работа уже началась",
      text: "Ранее были реализованы инициативы, связанные с сохранением памяти Алеся Адамовича. Подробнее о них можно узнать в разделе «Инициативы». Сейчас поддержка нужна для следующего этапа: цифрового архива, развития сайта, переводов, исследований и подготовки к 100-летию писателя.",
      cta: "Смотреть инициативы",
    },
    needsTitle: "На что нужна поддержка",
    needs: [
      {
        icon: "archive",
        title: "Цифровой архив",
        text: "Сбор, оцифровка, описание и систематизация фотографий, документов, воспоминаний, публикаций, аудио- и видеоматериалов, связанных с Алесем Адамовичем.",
      },
      {
        icon: "monitor",
        title: "Поддержка сайта",
        text: "Хостинг, домен, техническое развитие, дизайн, база данных, безопасность, переводы и регулярное обновление материалов.",
      },
      {
        icon: "globe",
        title: "Переводы и исследования",
        text: "Подготовка библиографии, исследовательских текстов, переводов и материалов для белорусской, русской, английской и международной аудитории.",
      },
      {
        icon: "calendar",
        title: "100-летие в 2027 году",
        text: "Подготовка образовательной и культурной программы: публикаций, лекций, выставок, дискуссий, маршрутов и партнёрских событий.",
      },
    ] satisfies Card[],
    methodsTitle: "Как можно помочь",
    methods: [
      {
        icon: "paypal",
        title: "PayPal",
        text: "Разовая финансовая поддержка через PayPal.",
        cta: "Поддержать",
        href: paymentLinks.paypal,
      },
      {
        icon: "patreon",
        title: "Patreon",
        text: "Регулярная ежемесячная поддержка проекта.",
        cta: "Стать патроном",
        href: paymentLinks.patreon,
      },
      {
        icon: "heart",
        title: "Ko-fi",
        text: "Разовые пожертвования и небольшая поддержка проекта.",
        cta: "Поддержать",
        href: paymentLinks.kofi,
      },
      {
        icon: "library",
        title: "Банковский перевод",
        text: "Прямой перевод на счёт проекта или партнёрской организации. Реквизиты можно получить по запросу.",
        cta: "Реквизиты",
        href: localizedHref("ru", "/contacts"),
      },
      {
        icon: "people",
        title: "Нематериальная помощь",
        text: "Переводы, расшифровка текстов, предоставление материалов, консультации, распространение информации и помощь в исследовательской работе.",
        cta: "Узнать больше",
        href: "#materials",
      },
    ] satisfies LinkCard[],
    materials: {
      title: "Передать материалы для архива",
      text: "Если у вас есть фотографии, документы, письма, воспоминания, публикации, аудио- или видеоматериалы, связанные с Алесем Адамовичем, вы можете помочь создать открытый цифровой архив памяти.",
      subtext:
        "Материалы могут быть переданы для изучения, описания, оцифровки или публикации по согласованию с владельцами.",
      cta: "Связаться с нами",
    },
    partnership: {
      title: "Партнёрство",
      text: "Мы открыты к сотрудничеству с музеями, библиотеками, университетами, фондами, медиа, культурными инициативами, исследователями и образовательными проектами.",
      cta: "Предложить сотрудничество",
      items: [
        "Музеи и библиотеки",
        "Университеты и исследователи",
        "Медиа и культурные платформы",
        "Фонды и общественные инициативы",
      ],
    },
    openness: {
      title: "Открытость проекта",
      text: "Мы открыто рассказываем о развитии проекта, реализованных инициативах, партнёрах и новых этапах работы.",
      items: [
        {
          icon: "news",
          title: "Новости о работе",
          text: "Публикуем обновления о развитии сайта, архива и инициатив.",
        },
        {
          icon: "shield",
          title: "Реализованные проекты",
          text: "Результаты и достижения представлены в разделе «Инициативы».",
        },
        {
          icon: "folder",
          title: "Направления поддержки",
          text: "Чётко указываем, на что нужна помощь сейчас: архив, сайт, переводы, исследования и 100-летие.",
        },
      ] satisfies Card[],
    },
    finalCta: {
      title: "Сохраним наследие вместе",
      text: "Каждый вклад помогает сделать наследие Алеся Адамовича более открытым, доступным и живым — для читателей, исследователей, студентов, учителей, журналистов и будущих поколений.",
      support: "Поддержать проект",
      contact: "Связаться с нами",
    },
  },
  be: {
    hero: {
      eyebrow: "Захоўваем памяць. Даследуем. Перадаём далей.",
      title: "Падтрымаць",
      text: "Праект пра Алеся Адамовіча існуе дзякуючы дапамозе аднадумцаў. Ваша падтрымка дапамагае захоўваць спадчыну пісьменніка, рабіць яе даступнай сёння і для будучых пакаленняў.",
      accent:
        "Патрэбная дапамога ў развіцці лічбавага архіва, падтрымцы сайта, перакладах і падрыхтоўцы да 100-годдзя пісьменіка.",
      imageAlt:
        "Архіўны візуальны фон для старонкі падтрымкі праекта пра Алеся Адамовіча",
      primaryCta: "Падтрымаць праект",
      secondaryCta: "Перадаць матэрыялы",
      tertiaryCta: "Стаць партнёрам",
    },
    stats: [
      ["Лічбавы архіў", "матэрыялы, дакументы, сведчанні"],
      ["Сайт і база даных", "адкрыты доступ да спадчыны"],
      ["100-годдзе", "падрыхтоўка да 2027 года"],
      ["Падтрымка супольнасці", "партнёры, даследчыкі, чытачы"],
    ],
    bridge: {
      title: "Праца ўжо пачалася",
      text: "Раней былі рэалізаваныя ініцыятывы, звязаныя з захаваннем памяці Алеся Адамовіча. Больш пра іх можна даведацца ў раздзеле «Ініцыятывы». Цяпер падтрымка патрэбная для наступнага этапу: лічбавага архіва, развіцця сайта, перакладаў, даследаванняў і падрыхтоўкі да 100-годдзя пісьменніка.",
      cta: "Глядзець ініцыятывы",
    },
    needsTitle: "На што патрэбная падтрымка",
    needs: [
      {
        icon: "archive",
        title: "Лічбавы архіў",
        text: "Збор, алічбоўка, апісанне і сістэматызацыя фотаздымкаў, дакументаў, успамінаў, публікацый, аўдыя- і відэаматэрыялаў, звязаных з Алесем Адамовічам.",
      },
      {
        icon: "monitor",
        title: "Падтрымка сайта",
        text: "Хостынг, дамен, тэхнічнае развіццё, дызайн, база даных, бяспека, пераклады і рэгулярнае абнаўленне матэрыялаў.",
      },
      {
        icon: "globe",
        title: "Пераклады і даследаванні",
        text: "Падрыхтоўка бібліяграфіі, даследчых тэкстаў, перакладаў і матэрыялаў для беларускай, рускай, англійскай і міжнароднай аўдыторыі.",
      },
      {
        icon: "calendar",
        title: "100-годдзе ў 2027 годзе",
        text: "Падрыхтоўка адукацыйнай і культурнай праграмы: публікацый, лекцый, выстаў, дыскусій, маршрутаў і партнёрскіх падзей.",
      },
    ] satisfies Card[],
    methodsTitle: "Як можна дапамагчы",
    methods: [
      {
        icon: "paypal",
        title: "PayPal",
        text: "Разавая фінансавая падтрымка праз PayPal.",
        cta: "Падтрымаць",
        href: paymentLinks.paypal,
      },
      {
        icon: "patreon",
        title: "Patreon",
        text: "Рэгулярная штомесячная падтрымка праекта.",
        cta: "Стаць патронам",
        href: paymentLinks.patreon,
      },
      {
        icon: "heart",
        title: "Ko-fi",
        text: "Разавыя ахвяраванні і невялікая падтрымка праекта.",
        cta: "Падтрымаць",
        href: paymentLinks.kofi,
      },
      {
        icon: "library",
        title: "Банкаўскі перавод",
        text: "Прамы перавод на рахунак праекта або партнёрскай арганізацыі. Рэквізіты можна атрымаць па запыце.",
        cta: "Рэквізіты",
        href: localizedHref("be", "/contacts"),
      },
      {
        icon: "people",
        title: "Нематэрыяльная дапамога",
        text: "Пераклады, расшыфроўка тэкстаў, перадача матэрыялаў, кансультацыі, распаўсюд інфармацыі і дапамога ў даследчай працы.",
        cta: "Даведацца больш",
        href: "#materials",
      },
    ] satisfies LinkCard[],
    materials: {
      title: "Перадаць матэрыялы для архіва",
      text: "Калі ў вас ёсць фотаздымкі, дакументы, лісты, успаміны, публікацыі, аўдыя- або відэаматэрыялы, звязаныя з Алесем Адамовічам, вы можаце дапамагчы стварыць адкрыты лічбавы архіў памяці.",
      subtext:
        "Матэрыялы могуць быць перададзеныя для вывучэння, апісання, алічбоўкі або публікацыі па ўзгадненні з уладальнікамі.",
      cta: "Звязацца з намі",
    },
    partnership: {
      title: "Партнёрства",
      text: "Мы адкрытыя да супрацоўніцтва з музеямі, бібліятэкамі, універсітэтамі, фондамі, медыя, культурнымі ініцыятывамі, даследчыкамі і адукацыйнымі праектамі.",
      cta: "Прапанаваць супрацоўніцтва",
      items: [
        "Музеі і бібліятэкі",
        "Універсітэты і даследчыкі",
        "Медыя і культурныя платформы",
        "Фонды і грамадскія ініцыятывы",
      ],
    },
    openness: {
      title: "Адкрытасць праекта",
      text: "Мы адкрыта расказваем пра развіццё праекта, рэалізаваныя ініцыятывы, партнёраў і новыя этапы працы.",
      items: [
        {
          icon: "news",
          title: "Навіны пра працу",
          text: "Публікуем абнаўленні пра развіццё сайта, архіва і ініцыятыў.",
        },
        {
          icon: "shield",
          title: "Рэалізаваныя праекты",
          text: "Вынікі і дасягненні прадстаўленыя ў раздзеле «Ініцыятывы».",
        },
        {
          icon: "folder",
          title: "Напрамкі падтрымкі",
          text: "Выразна паказваем, на што патрэбная дапамога цяпер: архіў, сайт, пераклады, даследаванні і 100-годдзе.",
        },
      ] satisfies Card[],
    },
    finalCta: {
      title: "Захаваем спадчыну разам",
      text: "Кожны ўнёсак дапамагае зрабіць спадчыну Алеся Адамовіча больш адкрытай, даступнай і жывой — для чытачоў, даследчыкаў, студэнтаў, настаўнікаў, журналістаў і будучых пакаленняў.",
      support: "Падтрымаць праект",
      contact: "Звязацца з намі",
    },
  },
  en: {
    hero: {
      eyebrow: "Preserve memory. Research. Pass it on.",
      title: "Support",
      text: "The project about Ales Adamovich exists thanks to the help of like-minded people. Your support helps preserve the writer’s legacy and make it accessible today and for future generations.",
      accent:
        "Help is needed for the digital archive, website support, translations and preparation of the programme for Adamovich’s centenary.",
      imageAlt:
        "Archival visual background for the project support page about Ales Adamovich",
      primaryCta: "Support project",
      secondaryCta: "Share materials",
      tertiaryCta: "Become a partner",
    },
    stats: [
      ["Digital archive", "materials, documents, testimonies"],
      ["Website and database", "open access to the legacy"],
      ["Centenary", "preparation for 2027"],
      ["Community support", "partners, researchers, readers"],
    ],
    bridge: {
      title: "The work has already begun",
      text: "Earlier initiatives connected with preserving the memory of Ales Adamovich have already been implemented. You can learn more about them in the Initiative section. Support is now needed for the next stage: the digital archive, website development, translations, research and preparation for the writer’s centenary.",
      cta: "View initiatives",
    },
    needsTitle: "What support is needed for",
    needs: [
      {
        icon: "archive",
        title: "Digital archive",
        text: "Collecting, digitising, describing and organising photographs, documents, memories, publications, audio and video materials connected with Ales Adamovich.",
      },
      {
        icon: "monitor",
        title: "Website support",
        text: "Hosting, domain, technical development, design, database, security, translations and regular content updates.",
      },
      {
        icon: "globe",
        title: "Translations and research",
        text: "Preparing bibliography, research texts, translations and materials for Belarusian, Russian, English and international audiences.",
      },
      {
        icon: "calendar",
        title: "Centenary in 2027",
        text: "Preparing an educational and cultural programme: publications, lectures, exhibitions, discussions, routes and partner events.",
      },
    ] satisfies Card[],
    methodsTitle: "How you can help",
    methods: [
      {
        icon: "paypal",
        title: "PayPal",
        text: "One-time financial support via PayPal.",
        cta: "Support",
        href: paymentLinks.paypal,
      },
      {
        icon: "patreon",
        title: "Patreon",
        text: "Regular monthly support for the project.",
        cta: "Become a patron",
        href: paymentLinks.patreon,
      },
      {
        icon: "heart",
        title: "Ko-fi",
        text: "One-time donations and small-scale support for the project.",
        cta: "Support",
        href: paymentLinks.kofi,
      },
      {
        icon: "library",
        title: "Bank transfer",
        text: "A direct transfer to the project or partner organisation account. Details are available on request.",
        cta: "Request details",
        href: localizedHref("en", "/contacts"),
      },
      {
        icon: "people",
        title: "Non-material help",
        text: "Translations, transcription, sharing materials, consultation, spreading information and helping with research work.",
        cta: "Learn more",
        href: "#materials",
      },
    ] satisfies LinkCard[],
    materials: {
      title: "Share materials for the archive",
      text: "If you have photographs, documents, letters, memories, publications, audio or video materials connected with Ales Adamovich, you can help create an open digital archive of memory.",
      subtext:
        "Materials may be shared for study, description, digitisation or publication in agreement with their owners.",
      cta: "Contact us",
    },
    partnership: {
      title: "Partnership",
      text: "We are open to cooperation with museums, libraries, universities, foundations, media, cultural initiatives, researchers and educational projects.",
      cta: "Propose cooperation",
      items: [
        "Museums and libraries",
        "Universities and researchers",
        "Media and cultural platforms",
        "Foundations and public initiatives",
      ],
    },
    openness: {
      title: "Project openness",
      text: "We openly share news about the project’s development, completed initiatives, partners and new stages of work.",
      items: [
        {
          icon: "news",
          title: "Work updates",
          text: "We publish updates about the website, archive and initiatives.",
        },
        {
          icon: "shield",
          title: "Completed projects",
          text: "Results and achievements are presented in the Initiative section.",
        },
        {
          icon: "folder",
          title: "Support directions",
          text: "We clearly name what support is needed for now: archive, website, translations, research and the centenary.",
        },
      ] satisfies Card[],
    },
    finalCta: {
      title: "Let’s preserve the legacy together",
      text: "Every contribution helps make the legacy of Ales Adamovich more open, accessible and alive for readers, researchers, students, teachers, journalists and future generations.",
      support: "Support project",
      contact: "Contact us",
    },
  },
} satisfies Record<
  Locale,
  {
    hero: {
      accent: string;
      eyebrow: string;
      imageAlt: string;
      primaryCta: string;
      secondaryCta: string;
      tertiaryCta: string;
      text: string;
      title: string;
    };
    stats: [string, string][];
    bridge: { cta: string; text: string; title: string };
    needsTitle: string;
    needs: Card[];
    methodsTitle: string;
    methods: LinkCard[];
    materials: { cta: string; subtext: string; text: string; title: string };
    partnership: {
      cta: string;
      items: string[];
      text: string;
      title: string;
    };
    openness: { items: Card[]; text: string; title: string };
    finalCta: { contact: string; support: string; text: string; title: string };
  }
>;

function Icon({ name }: { name: IconName }) {
  const commonProps = {
    "aria-hidden": true,
    fill: "none",
    height: 34,
    viewBox: "0 0 34 34",
    width: 34,
  };

  switch (name) {
    case "archive":
      return (
        <svg {...commonProps}>
          <path d="M7 10h20v17H7z" />
          <path d="M10 7h14v5H10zM13 16h8" />
        </svg>
      );
    case "book":
      return (
        <svg {...commonProps}>
          <path d="M8 8h9a4 4 0 0 1 4 4v15a4 4 0 0 0-4-3.5H8z" />
          <path d="M26 8h-5a4 4 0 0 0-4 4v15a4 4 0 0 1 4-3.5h5z" />
        </svg>
      );
    case "calendar":
      return (
        <svg {...commonProps}>
          <path d="M8 9h18v18H8zM12 6v6M22 6v6M8 15h18" />
          <path d="M14 21h6" />
        </svg>
      );
    case "contacts":
      return (
        <svg {...commonProps}>
          <path d="M8 10h18v14H8z" />
          <path d="m8 11 9 7 9-7" />
        </svg>
      );
    case "folder":
      return (
        <svg {...commonProps}>
          <path d="M6 11h9l3 4h10v12H6z" />
          <path d="M6 15h22" />
        </svg>
      );
    case "gift":
      return (
        <svg {...commonProps}>
          <path d="M7 15h20v12H7zM6 11h22v4H6zM17 11v16" />
          <path d="M17 11c-6-5-8 0-5 0M17 11c6-5 8 0 5 0" />
        </svg>
      );
    case "globe":
      return (
        <svg {...commonProps}>
          <circle cx="17" cy="17" r="11" />
          <path d="M6 17h22M17 6c4 4 4 18 0 22M17 6c-4 4-4 18 0 22" />
        </svg>
      );
    case "heart":
      return (
        <svg {...commonProps}>
          <path d="M17 28S7 21 7 13a5.5 5.5 0 0 1 10-3 5.5 5.5 0 0 1 10 3c0 8-10 15-10 15z" />
        </svg>
      );
    case "library":
      return (
        <svg {...commonProps}>
          <path d="M6 14h22M8 26h18M10 14v12M16 14v12M22 14v12M17 6 6 14h22z" />
        </svg>
      );
    case "monitor":
      return (
        <svg {...commonProps}>
          <path d="M7 8h20v14H7zM13 27h8M17 22v5" />
        </svg>
      );
    case "news":
      return (
        <svg {...commonProps}>
          <path d="M9 7h16v20H9z" />
          <path d="M13 13h8M13 18h8M13 23h5" />
        </svg>
      );
    case "partners":
      return (
        <svg {...commonProps}>
          <circle cx="12" cy="13" r="4" />
          <circle cx="23" cy="13" r="4" />
          <path d="M5 27c1.5-4 4-6 7-6M29 27c-1.5-4-4-6-7-6M14 22h6" />
        </svg>
      );
    case "paypal":
      return (
        <svg {...commonProps}>
          <path d="M11 27 14 7h8c4 0 6 2 5 6-1 5-4 7-10 7h-3" />
          <path d="M9 27h6l2-13" />
        </svg>
      );
    case "patreon":
      return (
        <svg {...commonProps}>
          <path d="M10 8v18" />
          <circle cx="21" cy="13" r="5" />
        </svg>
      );
    case "people":
      return (
        <svg {...commonProps}>
          <circle cx="14" cy="13" r="4" />
          <path d="M6 27c1.5-4 4.2-6 8-6s6.5 2 8 6" />
          <path d="M23 11a3.5 3.5 0 0 1 0 7M25 21c2 .9 3.3 2.7 4 6" />
        </svg>
      );
    case "shield":
      return (
        <svg {...commonProps}>
          <path d="M17 5 27 9v8c0 7-4 10-10 12C11 27 7 24 7 17V9z" />
          <path d="m12 17 3 3 7-8" />
        </svg>
      );
  }
}

type SupportPageProps = {
  dictionary: Dictionary;
  locale: Locale;
};

export function SupportPage({ dictionary, locale }: SupportPageProps) {
  void dictionary;

  const copy = supportContent[locale];

  return (
    <main className={styles.page}>
      <section className={styles.hero} aria-labelledby="support-title">
        <Image
          alt={copy.hero.imageAlt}
          className={styles.heroImage}
          fill
          priority
          sizes="100vw"
          src={supportHeroImage}
        />
        <div className={styles.heroOverlay} />

        <div className={styles.heroInner}>
          <div className={styles.heroContent}>
            <p className={styles.eyebrow}>{copy.hero.eyebrow}</p>
            <h1 className={styles.heroTitle} id="support-title">
              {copy.hero.title}
            </h1>
            <p className={styles.heroText}>{copy.hero.text}</p>
            <p className={styles.heroAccent}>{copy.hero.accent}</p>
            <div className={styles.heroActions}>
              <Link className={styles.buttonPrimary} href="#support-methods">
                {copy.hero.primaryCta}
              </Link>
              <Link className={styles.buttonSecondary} href="#materials">
                {copy.hero.secondaryCta}
              </Link>
              <Link className={styles.buttonText} href="#partnership">
                {copy.hero.tertiaryCta}
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          <ul className={styles.statsPanel} aria-label={copy.hero.title}>
            {copy.stats.map(([title, text]) => (
              <li className={styles.statItem} key={title}>
                <span>{title}</span>
                <p>{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className={styles.bridge} aria-labelledby="support-bridge-title">
        <div className={styles.bridgeInner}>
          <div>
            <h2 className={styles.sectionTitle} id="support-bridge-title">
              {copy.bridge.title}
            </h2>
          </div>
          <p className={styles.sectionText}>{copy.bridge.text}</p>
          <Link className={styles.linkArrow} href={localizedHref(locale, "/initiative")}>
            {copy.bridge.cta}
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="support-needs-title">
        <div className={styles.inner}>
          <h2 className={styles.sectionTitle} id="support-needs-title">
            {copy.needsTitle}
          </h2>
          <div className={styles.cardsGrid}>
            {copy.needs.map((item) => (
              <article className={styles.infoCard} key={item.title}>
                <span className={styles.iconCircle}>
                  <Icon name={item.icon} />
                </span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className={styles.section}
        id="support-methods"
        aria-labelledby="support-methods-title"
      >
        <div className={styles.inner}>
          <h2 className={styles.sectionTitle} id="support-methods-title">
            {copy.methodsTitle}
          </h2>
          <div className={styles.methodsGrid}>
            {copy.methods.map((item) => (
              <article className={styles.methodCard} key={item.title}>
                <span className={styles.methodIcon}>
                  <Icon name={item.icon} />
                </span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <Link className={styles.linkArrow} href={item.href}>
                  {item.cta}
                  <span aria-hidden="true">→</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className={styles.materials}
        id="materials"
        aria-labelledby="support-materials-title"
      >
        <div className={styles.materialsInner}>
          <div className={styles.materialsImage} aria-hidden="true">
            <Image
              alt=""
              fill
              sizes="420px"
              src={assetPath("/assets/images/hero/manuscripts.webp")}
            />
          </div>
          <div className={styles.materialsContent}>
            <p className={styles.eyebrow}>{copy.materials.title}</p>
            <h2 className={styles.sectionTitle} id="support-materials-title">
              {copy.materials.title}
            </h2>
            <p className={styles.sectionText}>{copy.materials.text}</p>
            <p className={styles.mutedNote}>{copy.materials.subtext}</p>
            <Link className={styles.buttonSecondary} href={localizedHref(locale, "/contacts")}>
              {copy.materials.cta}
            </Link>
          </div>
        </div>
      </section>

      <section
        className={styles.section}
        id="partnership"
        aria-labelledby="support-partnership-title"
      >
        <div className={styles.partnershipInner}>
          <div>
            <p className={styles.eyebrow}>{copy.partnership.title}</p>
            <h2 className={styles.sectionTitle} id="support-partnership-title">
              {copy.partnership.title}
            </h2>
            <p className={styles.sectionText}>{copy.partnership.text}</p>
            <Link className={styles.linkArrow} href={localizedHref(locale, "/contacts")}>
              {copy.partnership.cta}
              <span aria-hidden="true">→</span>
            </Link>
          </div>
          <ul className={styles.partnerList}>
            {copy.partnership.items.map((item) => (
              <li key={item}>
                <span className={styles.smallIcon}>
                  <Icon name="partners" />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className={styles.openness} aria-labelledby="support-openness-title">
        <div className={styles.opennessInner}>
          <div className={styles.opennessIntro}>
            <p className={styles.eyebrow}>{copy.openness.title}</p>
            <h2 className={styles.sectionTitle} id="support-openness-title">
              {copy.openness.title}
            </h2>
            <p className={styles.sectionText}>{copy.openness.text}</p>
          </div>
          <div className={styles.opennessItems}>
            {copy.openness.items.map((item) => (
              <article className={styles.opennessItem} key={item.title}>
                <span className={styles.smallIcon}>
                  <Icon name={item.icon} />
                </span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.finalCta} aria-labelledby="support-final-title">
        <div className={styles.finalCtaInner}>
          <h2 className={styles.finalTitle} id="support-final-title">
            {copy.finalCta.title}
          </h2>
          <p>{copy.finalCta.text}</p>
          <div className={styles.heroActions}>
            <Link className={styles.buttonPrimary} href="#support-methods">
              {copy.finalCta.support}
            </Link>
            <Link className={styles.buttonSecondary} href={localizedHref(locale, "/contacts")}>
              {copy.finalCta.contact}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
