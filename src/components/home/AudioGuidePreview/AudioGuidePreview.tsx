import Image from "next/image";
import Link from "next/link";

import styles from "./AudioGuidePreview.module.css";
import { assetPath, localizedPath, siteConfig, type Locale } from "@/config/site";

type AudioGuidePreviewProps = {
  locale?: Locale;
};

type AudioCard = {
  title: string;
  text: string;
  image: string;
  imageAlt: string;
  icon: IconName;
};

type AudioGuidePreviewContent = {
  eyebrow: string;
  title: string;
  description: string;
  telegramLabel: string;
  appLabel: string;
  detailsLabel: string;
  cards: AudioCard[];
};

type IconName = "book" | "map" | "mic" | "phone" | "send";

const cardImages = {
  life: assetPath("/assets/images/audioguide/life-and-path.webp"),
  books: assetPath("/assets/images/audioguide/books-and-ideas.webp"),
  voices: assetPath("/assets/images/audioguide/voices-of-time.webp"),
};

const contentByLocale: Record<Locale, AudioGuidePreviewContent> = {
  be: {
    eyebrow: "Аўдыягід",
    title: "Пачуць яго словы. Адчуць яго час.",
    description:
      "Аўдыягід па жыцці, кнігах і думках Алеся Адамовіча. Гісторыі, сведчанні і разважанні ў новым фармаце.",
    telegramLabel: "Telegram-бот",
    appLabel: "Адкрыць праграму",
    detailsLabel: "Даведацца больш",
    cards: [
      {
        title: "Жыццё і шлях",
        text: "Аўдыягісторыі пра ключавыя падзеі і людзей.",
        image: cardImages.life,
        imageAlt: "Пейзаж з маршруту аўдыягіда",
        icon: "map",
      },
      {
        title: "Кнігі і ідэі",
        text: "Галоўныя творы пісьменніка ў яго ўласных словах.",
        image: cardImages.books,
        imageAlt: "Аркуш рукапісу і друкарская машынка",
        icon: "book",
      },
      {
        title: "Галасы часу",
        text: "Сведчанні сучаснікаў і рэдкія архіўныя запісы.",
        image: cardImages.voices,
        imageAlt: "Навушнікі і архіўныя аўдыяматэрыялы",
        icon: "mic",
      },
    ],
  },
  en: {
    eyebrow: "Audio guide",
    title: "Hear his words. Feel his time.",
    description:
      "An audio guide through the life, books and thoughts of Ales Adamovich. Stories, testimonies and reflections in a new format.",
    telegramLabel: "Telegram bot",
    appLabel: "Open application",
    detailsLabel: "Learn more",
    cards: [
      {
        title: "Life and path",
        text: "Audio stories about key events and people.",
        image: cardImages.life,
        imageAlt: "Landscape from the audio guide route",
        icon: "map",
      },
      {
        title: "Books and ideas",
        text: "The main works of the writer in his own words.",
        image: cardImages.books,
        imageAlt: "Manuscript page and typewriter",
        icon: "book",
      },
      {
        title: "Voices of the time",
        text: "Testimonies of contemporaries and rare archival recordings.",
        image: cardImages.voices,
        imageAlt: "Headphones and archival audio materials",
        icon: "mic",
      },
    ],
  },
  ru: {
    eyebrow: "Аудиогид",
    title: "Услышать его слова. Почувствовать его время.",
    description:
      "Аудиогид по жизни, книгам и мыслям Алеся Адамовича. Истории, свидетельства и размышления в новом формате.",
    telegramLabel: "Telegram-бот",
    appLabel: "Открыть приложение",
    detailsLabel: "Подробнее",
    cards: [
      {
        title: "Жизнь и путь",
        text: "Аудиоистории о ключевых событиях и людях.",
        image: cardImages.life,
        imageAlt: "Пейзаж из маршрута аудиогида",
        icon: "map",
      },
      {
        title: "Книги и идеи",
        text: "Главные произведения писателя в его собственных словах.",
        image: cardImages.books,
        imageAlt: "Лист рукописи и печатная машинка",
        icon: "book",
      },
      {
        title: "Голоса времени",
        text: "Свидетельства современников и редкие архивные записи.",
        image: cardImages.voices,
        imageAlt: "Наушники и архивные аудиоматериалы",
        icon: "mic",
      },
    ],
  },
};

function Icon({ name }: { name: IconName }) {
  const commonProps = {
    "aria-hidden": true,
    fill: "none",
    height: 22,
    stroke: "currentColor",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    strokeWidth: 1.7,
    viewBox: "0 0 24 24",
    width: 22,
  };

  switch (name) {
    case "book":
      return (
        <svg {...commonProps}>
          <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H7a3 3 0 0 0-3 3V5.5Z" />
          <path d="M4 19V5.5" />
          <path d="M8 7h8" />
          <path d="M8 11h7" />
        </svg>
      );
    case "map":
      return (
        <svg {...commonProps}>
          <path d="M12 21s6-5.2 6-11a6 6 0 0 0-12 0c0 5.8 6 11 6 11Z" />
          <circle cx="12" cy="10" r="2.2" />
        </svg>
      );
    case "mic":
      return (
        <svg {...commonProps}>
          <rect height="11" rx="3.5" width="7" x="8.5" y="3" />
          <path d="M5 11a7 7 0 0 0 14 0" />
          <path d="M12 18v3" />
          <path d="M9 21h6" />
        </svg>
      );
    case "phone":
      return (
        <svg {...commonProps}>
          <rect height="18" rx="2.5" width="10" x="7" y="3" />
          <path d="M11 17h2" />
        </svg>
      );
    case "send":
      return (
        <svg {...commonProps}>
          <path d="m21 3-7.5 18-4-8.5L1 9l20-6Z" />
          <path d="m9.5 12.5 5-5" />
        </svg>
      );
  }
}

export function AudioGuidePreview({ locale = "en" }: AudioGuidePreviewProps) {
  const content = contentByLocale[locale];
  const detailsHref = localizedPath(locale, "audio-guide");
  const telegramHref = siteConfig.telegramBotUrl || "#";
  const appHref = siteConfig.audioAppUrl || "#";

  return (
    <section className={styles.section} aria-labelledby="audio-guide-preview-title">
      <div className={styles.inner}>
        <div className={styles.content}>
          <p className={styles.eyebrow}>{content.eyebrow}</p>
          <h2 id="audio-guide-preview-title" className={styles.title}>
            {content.title}
          </h2>
          <p className={styles.description}>{content.description}</p>

          <div className={styles.actions}>
            <Link className={styles.buttonPrimary} href={telegramHref}>
              <Icon name="send" />
              {content.telegramLabel}
            </Link>
            <Link className={styles.buttonSecondary} href={appHref}>
              <Icon name="phone" />
              {content.appLabel}
            </Link>
          </div>
        </div>

        <div className={styles.cards}>
          {content.cards.map((card) => (
            <Link className={styles.card} href={detailsHref} key={card.title}>
              <span className={styles.cardImageWrap}>
                <Image
                  alt={card.imageAlt}
                  className={styles.cardImage}
                  fill
                  sizes="(max-width: 800px) calc(100vw - 40px), (max-width: 1100px) 33vw, 300px"
                  src={card.image}
                />
                <span className={styles.cardOverlay} />
              </span>
              <span className={styles.cardContent}>
                <span className={styles.cardIcon}>
                  <Icon name={card.icon} />
                </span>
                <span className={styles.cardTitle}>{card.title}</span>
                <span className={styles.cardText}>{card.text}</span>
                <span className={styles.detailsLink}>
                  {content.detailsLabel}
                  <span aria-hidden="true">→</span>
                </span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
