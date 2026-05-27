import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import styles from "./ContactsPage.module.css";
import { assetPath, siteConfig } from "@/config/site";
import { localizedHref } from "@/lib/localizedHref";
import type { Locale } from "@/types/common.types";

type IconName =
  | "book"
  | "calendar"
  | "education"
  | "info"
  | "mail"
  | "map"
  | "media"
  | "phone"
  | "pin"
  | "send"
  | "users";

type ContactCard = {
  icon: IconName;
  title: string;
  value?: string;
  caption: string;
  href?: string;
  socials?: {
    href: string;
    label: string;
  }[];
};

const contactBlockContent = {
  ru: {
    title: "Как связаться с нами",
    notice:
      "Мы являемся онлайн-инициативой и работаем с партнёрами по Беларуси и всему миру.",
    socialCard: {
      icon: "users",
      title: "Социальные сети",
      caption: "Подписывайтесь, чтобы быть в курсе наших обновлений",
      socials: [
        { href: "#", label: "FB" },
        { href: "#", label: "IG" },
        { href: "#", label: "YT" },
        { href: siteConfig.contacts.telegramUrl || "#", label: "TG" },
      ],
    },
  },
  be: {
    title: "Як звязацца з намі",
    notice:
      "Мы з’яўляемся анлайн-ініцыятывай і працуем з партнёрамі ў Беларусі і ва ўсім свеце.",
    socialCard: {
      icon: "users",
      title: "Сацыяльныя сеткі",
      caption: "Падпісвайцеся, каб быць у курсе нашых абнаўленняў",
      socials: [
        { href: "#", label: "FB" },
        { href: "#", label: "IG" },
        { href: "#", label: "YT" },
        { href: siteConfig.contacts.telegramUrl || "#", label: "TG" },
      ],
    },
  },
  en: {
    title: "How to contact us",
    notice:
      "We are an online initiative working with partners in Belarus and around the world.",
    socialCard: {
      icon: "users",
      title: "Social media",
      caption: "Follow us to stay informed about our updates",
      socials: [
        { href: "#", label: "FB" },
        { href: "#", label: "IG" },
        { href: "#", label: "YT" },
        { href: siteConfig.contacts.telegramUrl || "#", label: "TG" },
      ],
    },
  },
} satisfies Record<
  Locale,
  {
    title: string;
    notice: string;
    socialCard: ContactCard;
  }
>;

const contactContent = {
  ru: {
    metadataTitle: "Контакты",
    metadataDescription:
      "Контакты культурной цифровой платформы об Алесе Адамовиче: сотрудничество, материалы, вопросы и предложения.",
    back: "На главную",
    heroTitle: "Контакты",
    heroText:
      "Мы открыты к сотрудничеству, новым идеям и совместным проектам, посвящённым сохранению наследия Алеся Адамовича и развитию документальной культуры в Беларуси.",
    quote: "... Святло Алесевай душы\nНам свеціць з Глушы.",
    quoteAuthor: "Кастусь Севярынец",
    quoteSource: "03.09.2011 · Стихотворение про Алеся Адамовича",
    heroAlt: "Памятная остановка Адамовича в Глуше",
    contactEyebrow: "Свяжитесь с нами",
    contactTitle: "Мы здесь, чтобы слышать и отвечать",
    contactText:
      "Если у вас есть вопросы, предложения, идеи для сотрудничества или вы хотите поделиться материалами — напишите нам.",
    cards: [
      {
        icon: "mail",
        title: "Электронная почта",
        value: siteConfig.contacts.email,
        caption: "Для общих вопросов и предложений",
        href: `mailto:${siteConfig.contacts.email}`,
      },
      {
        icon: "phone",
        title: "Телефон",
        value: siteConfig.contacts.phone,
        caption: "Звонить не позднее 21:00",
        href: `tel:${siteConfig.contacts.phoneHref}`,
      },
      {
        icon: "pin",
        title: "Адрес",
        value: siteConfig.contacts.location.ru,
        caption: "Информация будет добавлена позже",
      },
      {
        icon: "send",
        title: "Telegram",
        value: siteConfig.contacts.telegram,
        caption: "Новости, проекты и обратная связь",
        href: siteConfig.contacts.telegramUrl || "#",
      },
    ],
    mapEyebrow: "Где мы находимся",
    mapTitle: "Глуша",
    mapText:
      "Глуша — деревня в Наровлянском районе, связанная с жизнью и творчеством Алеся Адамовича.",
    formEyebrow: "Напишите нам",
    formName: "Ваше имя",
    formEmail: "Электронная почта",
    formSubject: "Тема обращения",
    formMessage: "Сообщение",
    formConsent: "Я даю согласие на обработку моих персональных данных",
    formSubmit: "Отправить сообщение",
    cooperationEyebrow: "Сотрудничество",
    cooperationTitle: "Мы открыты для партнёрства и совместных инициатив",
    cooperationText:
      "Мы работаем с учреждениями культуры, исследователями, образовательными проектами, медиа и всеми, кому близки темы памяти, истории и документального творчества.",
    cooperationItems: [
      {
        icon: "users",
        title: "Для исследователей",
        text: "Делитесь материалами, архивами, воспоминаниями и находками.",
      },
      {
        icon: "book",
        title: "Для организаций",
        text: "Реализуем совместные проекты, выставки, лекции, публикации и мероприятия.",
      },
      {
        icon: "media",
        title: "Для медиа",
        text: "Предоставляем информацию, материалы и помощь в создании контента.",
      },
      {
        icon: "education",
        title: "Для образовательных проектов",
        text: "Поддерживаем инициативы, направленные на изучение наследия Адамовича.",
      },
    ],
    newsletterTitle: "Будьте в курсе",
    newsletterText:
      "Подпишитесь на нашу рассылку, чтобы получать новости о проектах, событиях и публикациях.",
    newsletterPlaceholder: "Ваш e-mail",
    newsletterSubmit: "Подписаться",
  },
  be: {
    metadataTitle: "Кантакты",
    metadataDescription:
      "Кантакты культурнай лічбавай платформы пра Алеся Адамовіча: супрацоўніцтва, матэрыялы, пытанні і прапановы.",
    back: "На галоўную",
    heroTitle: "Кантакты",
    heroText:
      "Мы адкрытыя да супрацоўніцтва, новых ідэй і супольных праектаў, прысвечаных захаванню спадчыны Алеся Адамовіча і развіццю дакументальнай культуры ў Беларусі.",
    quote: "... Святло Алесевай душы\nНам свеціць з Глушы.",
    quoteAuthor: "Кастусь Севярынец",
    quoteSource: "03.09.2011 · Верш пра Алеся Адамовіча",
    heroAlt: "Памятны прыпынак Адамовіча ў Глушы",
    contactEyebrow: "Звяжыцеся з намі",
    contactTitle: "Мы тут, каб слухаць і адказваць",
    contactText:
      "Калі ў вас ёсць пытанні, прапановы, ідэі для супрацоўніцтва або вы хочаце падзяліцца матэрыяламі — напішыце нам.",
    cards: [
      {
        icon: "mail",
        title: "Электронная пошта",
        value: siteConfig.contacts.email,
        caption: "Для агульных пытанняў і прапаноў",
        href: `mailto:${siteConfig.contacts.email}`,
      },
      {
        icon: "phone",
        title: "Тэлефон",
        value: siteConfig.contacts.phone,
        caption: "Тэлефанаваць не пазней за 21:00",
        href: `tel:${siteConfig.contacts.phoneHref}`,
      },
      {
        icon: "pin",
        title: "Адрас",
        value: siteConfig.contacts.location.be,
        caption: "Інфармацыя будзе дададзена пазней",
      },
      {
        icon: "send",
        title: "Telegram",
        value: siteConfig.contacts.telegram,
        caption: "Навіны, праекты і зваротная сувязь",
        href: siteConfig.contacts.telegramUrl || "#",
      },
    ],
    mapEyebrow: "Дзе мы знаходзімся",
    mapTitle: "Глуша",
    mapText:
      "Глуша — вёска ў Нараўлянскім раёне, звязаная з жыццём і творчасцю Алеся Адамовіча.",
    formEyebrow: "Напішыце нам",
    formName: "Ваша імя",
    formEmail: "Электронная пошта",
    formSubject: "Тэма звароту",
    formMessage: "Паведамленне",
    formConsent: "Я даю згоду на апрацоўку маіх персанальных даных",
    formSubmit: "Адправіць паведамленне",
    cooperationEyebrow: "Супрацоўніцтва",
    cooperationTitle: "Мы адкрытыя для партнёрства і супольных ініцыятыў",
    cooperationText:
      "Мы працуем з установамі культуры, даследчыкамі, адукацыйнымі праектамі, медыя і ўсімі, каму блізкія тэмы памяці, гісторыі і дакументальнай творчасці.",
    cooperationItems: [
      {
        icon: "users",
        title: "Для даследчыкаў",
        text: "Дзяліцеся матэрыяламі, архівамі, успамінамі і знаходкамі.",
      },
      {
        icon: "book",
        title: "Для арганізацый",
        text: "Рэалізуем супольныя праекты, выставы, лекцыі, публікацыі і мерапрыемствы.",
      },
      {
        icon: "media",
        title: "Для медыя",
        text: "Прадастаўляем інфармацыю, матэрыялы і дапамогу ў стварэнні кантэнту.",
      },
      {
        icon: "education",
        title: "Для адукацыйных праектаў",
        text: "Падтрымліваем ініцыятывы, накіраваныя на вывучэнне спадчыны Адамовіча.",
      },
    ],
    newsletterTitle: "Будзьце ў курсе",
    newsletterText:
      "Падпішыцеся на нашу рассылку, каб атрымліваць навіны пра праекты, падзеі і публікацыі.",
    newsletterPlaceholder: "Ваш e-mail",
    newsletterSubmit: "Падпісацца",
  },
  en: {
    metadataTitle: "Contacts",
    metadataDescription:
      "Contacts of the Ales Adamovich cultural digital platform: cooperation, materials, questions and proposals.",
    back: "Back to home",
    heroTitle: "Contacts",
    heroText:
      "We are open to cooperation, new ideas and joint projects dedicated to preserving Ales Adamovich’s legacy and developing documentary culture in Belarus.",
    quote: "... Святло Алесевай душы\nНам свеціць з Глушы.",
    quoteAuthor: "Kastus Seviarynets",
    quoteSource: "03.09.2011 · Poem about Ales Adamovich",
    heroAlt: "Adamovich memorial stop in Glusha",
    contactEyebrow: "Contact us",
    contactTitle: "We are here to listen and respond",
    contactText:
      "If you have questions, proposals, ideas for cooperation or materials to share, please write to us.",
    cards: [
      {
        icon: "mail",
        title: "Email",
        value: siteConfig.contacts.email,
        caption: "For general questions and proposals",
        href: `mailto:${siteConfig.contacts.email}`,
      },
      {
        icon: "phone",
        title: "Phone",
        value: siteConfig.contacts.phone,
        caption: "Calls until 21:00",
        href: `tel:${siteConfig.contacts.phoneHref}`,
      },
      {
        icon: "pin",
        title: "Address",
        value: siteConfig.contacts.location.en,
        caption: "Information will be added later",
      },
      {
        icon: "send",
        title: "Telegram",
        value: siteConfig.contacts.telegram,
        caption: "News, projects and feedback",
        href: siteConfig.contacts.telegramUrl || "#",
      },
    ],
    mapEyebrow: "Where we are",
    mapTitle: "Glusha",
    mapText:
      "Glusha is a village in the Narovlya district connected with the life and work of Ales Adamovich.",
    formEyebrow: "Write to us",
    formName: "Your name",
    formEmail: "Email",
    formSubject: "Subject",
    formMessage: "Message",
    formConsent: "I consent to the processing of my personal data",
    formSubmit: "Send message",
    cooperationEyebrow: "Cooperation",
    cooperationTitle: "We are open to partnerships and joint initiatives",
    cooperationText:
      "We work with cultural institutions, researchers, educational projects, media and everyone who is close to the themes of memory, history and documentary writing.",
    cooperationItems: [
      {
        icon: "users",
        title: "For researchers",
        text: "Share materials, archives, memories and findings.",
      },
      {
        icon: "book",
        title: "For organizations",
        text: "We develop joint projects, exhibitions, lectures, publications and events.",
      },
      {
        icon: "media",
        title: "For media",
        text: "We provide information, materials and support for content production.",
      },
      {
        icon: "education",
        title: "For educational projects",
        text: "We support initiatives aimed at studying Adamovich’s legacy.",
      },
    ],
    newsletterTitle: "Stay informed",
    newsletterText:
      "Subscribe to receive news about projects, events and publications.",
    newsletterPlaceholder: "Your e-mail",
    newsletterSubmit: "Subscribe",
  },
} satisfies Record<
  Locale,
  {
    metadataTitle: string;
    metadataDescription: string;
    back: string;
    heroTitle: string;
    heroText: string;
    quote: string;
    quoteAuthor: string;
    quoteSource: string;
    heroAlt: string;
    contactEyebrow: string;
    contactTitle: string;
    contactText: string;
    cards: ContactCard[];
    mapEyebrow: string;
    mapTitle: string;
    mapText: string;
    formEyebrow: string;
    formName: string;
    formEmail: string;
    formSubject: string;
    formMessage: string;
    formConsent: string;
    formSubmit: string;
    cooperationEyebrow: string;
    cooperationTitle: string;
    cooperationText: string;
    cooperationItems: {
      icon: IconName;
      title: string;
      text: string;
    }[];
    newsletterTitle: string;
    newsletterText: string;
    newsletterPlaceholder: string;
    newsletterSubmit: string;
  }
>;

export function getContactsPageMetadata(locale: Locale): Metadata {
  const copy = contactContent[locale];

  return {
    title: copy.metadataTitle,
    description: copy.metadataDescription,
    openGraph: {
      title: copy.metadataTitle,
      description: copy.metadataDescription,
    },
    twitter: {
      title: copy.metadataTitle,
      description: copy.metadataDescription,
    },
  };
}

function Icon({ name }: { name: IconName }) {
  const commonProps = {
    "aria-hidden": true,
    fill: "none",
    height: 30,
    viewBox: "0 0 32 32",
    width: 30,
  };

  switch (name) {
    case "book":
      return (
        <svg {...commonProps}>
          <path d="M7 7.5h8a4 4 0 0 1 4 4v13a4 4 0 0 0-4-3.5H7z" />
          <path d="M25 7.5h-6a4 4 0 0 0-4 4v13a4 4 0 0 1 4-3.5h6z" />
        </svg>
      );
    case "calendar":
      return (
        <svg {...commonProps}>
          <path d="M8 9h16v16H8z" />
          <path d="M11 6v6M21 6v6M8 14h16" />
          <path d="M12 18h3M17 18h3M12 22h3" />
        </svg>
      );
    case "education":
      return (
        <svg {...commonProps}>
          <path d="m5 12 11-6 11 6-11 6z" />
          <path d="M9 15v6c2 2 12 2 14 0v-6" />
          <path d="M27 12v8" />
        </svg>
      );
    case "info":
      return (
        <svg {...commonProps}>
          <circle cx="16" cy="16" r="11" />
          <path d="M16 14v7" />
          <path d="M16 10h.01" />
        </svg>
      );
    case "mail":
      return (
        <svg {...commonProps}>
          <path d="M6 9h20v14H6z" />
          <path d="m6 10 10 8 10-8" />
        </svg>
      );
    case "map":
      return (
        <svg {...commonProps}>
          <path d="M6 9 13 6l7 3 6-3v17l-6 3-7-3-7 3z" />
          <path d="M13 6v17M20 9v17" />
        </svg>
      );
    case "media":
      return (
        <svg {...commonProps}>
          <path d="M7 8h18v16H7z" />
          <path d="m14 12 7 4-7 4z" />
        </svg>
      );
    case "phone":
      return (
        <svg {...commonProps}>
          <path d="M10 7c2 7 8 13 15 15l-3 4c-8-2-14-8-16-16z" />
        </svg>
      );
    case "pin":
      return (
        <svg {...commonProps}>
          <path d="M16 27s8-8 8-15a8 8 0 0 0-16 0c0 7 8 15 8 15z" />
          <circle cx="16" cy="12" r="2.5" />
        </svg>
      );
    case "send":
      return (
        <svg {...commonProps}>
          <path d="m5 16 21-10-7 21-4-9z" />
          <path d="m15 18 11-12" />
        </svg>
      );
    case "users":
      return (
        <svg {...commonProps}>
          <circle cx="13" cy="12" r="4" />
          <path d="M5 25c1.6-4 4.4-6 8-6s6.4 2 8 6" />
          <path d="M21 10a3.5 3.5 0 0 1 0 7M23 20c2.2.8 3.6 2.4 4.5 5" />
        </svg>
      );
  }
}

function HeroHandwrittenQuote({
  author,
  quote,
  source,
}: {
  author: string;
  quote: string;
  source: string;
}) {
  return (
    <blockquote className={styles.quoteWrap}>
      <p className={styles.quoteText}>{quote}</p>
      <cite className={styles.quoteAuthor}>
        — {author}
        <span className={styles.quoteSource}>{source}</span>
      </cite>
    </blockquote>
  );
}

type ContactsPageProps = {
  locale: Locale;
};

export function ContactsPage({ locale }: ContactsPageProps) {
  const copy = contactContent[locale];
  const contactBlock = contactBlockContent[locale];
  const contactCards = [
    copy.cards[0],
    copy.cards[3],
    copy.cards[1],
    contactBlock.socialCard,
  ].filter(Boolean) as ContactCard[];

  return (
    <main className={styles.page}>
      <section className={styles.hero} aria-labelledby="contacts-title">
        <Image
          alt={copy.heroAlt}
          className={styles.heroImage}
          fill
          priority
          sizes="100vw"
          src={assetPath("/assets/images/hero/contacts-hero-glusha-collage.png")}
        />
        <div className={styles.heroOverlay} />

        <div className={styles.heroInner}>
          <Link className={styles.backLink} href={localizedHref(locale, "/")}>
            <span aria-hidden="true">←</span>
            {copy.back}
          </Link>
          <h1 className={styles.heroTitle} id="contacts-title">
            {copy.heroTitle}
          </h1>
          <p className={styles.heroText}>{copy.heroText}</p>
          <HeroHandwrittenQuote
            author={copy.quoteAuthor}
            quote={copy.quote}
            source={copy.quoteSource}
          />
        </div>
      </section>

      <section className={styles.contactSection} aria-labelledby="contact-cards-title">
        <div className={styles.inner}>
          <h2 className={styles.blockTitle} id="contact-cards-title">
            {contactBlock.title}
          </h2>

          <div className={styles.contactCards}>
            {contactCards.map((card) => {
              const cardContent = (
                <>
                  <span className={styles.cardIcon}>
                    <Icon name={card.icon} />
                  </span>
                  <span className={styles.cardTitle}>{card.title}</span>
                  {card.socials ? (
                    <span className={styles.socialList}>
                      {card.socials.map((social) => (
                        <a
                          className={styles.socialButton}
                          href={social.href}
                          key={social.label}
                          rel="noopener noreferrer"
                          target={social.href === "#" ? undefined : "_blank"}
                        >
                          {social.label}
                        </a>
                      ))}
                    </span>
                  ) : (
                    <span className={styles.cardValue}>{card.value}</span>
                  )}
                  <span className={styles.cardCaption}>{card.caption}</span>
                </>
              );

              return card.href ? (
                <a className={styles.contactCard} href={card.href} key={card.title}>
                  {cardContent}
                </a>
              ) : (
                <article className={styles.contactCard} key={card.title}>
                  {cardContent}
                </article>
              );
            })}
          </div>

          <p className={styles.notice}>
            <span className={styles.noticeIcon}>
              <Icon name="info" />
            </span>
            {contactBlock.notice}
          </p>
        </div>
      </section>

      <section className={styles.messageSection} aria-labelledby="contact-form-title">
        <div className={styles.messageInner}>
          <div className={styles.messageIntro}>
            <p className={styles.eyebrow}>{copy.formEyebrow}</p>
            <h2 className={styles.visuallyHidden} id="contact-form-title">
              {copy.formEyebrow}
            </h2>
            <p className={styles.sectionText}>{copy.contactText}</p>

            <div className={styles.messageImage} aria-hidden="true">
              <Image
                alt=""
                fill
                sizes="280px"
                src={assetPath("/assets/images/hero/hero-books-manuscripts.png")}
              />
            </div>
          </div>

          <form className={styles.form} aria-label={copy.formEyebrow}>
            <div className={styles.formGrid}>
              <label className={styles.visuallyHidden} htmlFor="contact-name">
                {copy.formName}
              </label>
              <input id="contact-name" placeholder={copy.formName} type="text" />

              <label className={styles.visuallyHidden} htmlFor="contact-email">
                {copy.formEmail}
              </label>
              <input id="contact-email" placeholder={copy.formEmail} type="email" />
            </div>

            <label className={styles.visuallyHidden} htmlFor="contact-subject">
              {copy.formSubject}
            </label>
            <input id="contact-subject" placeholder={copy.formSubject} type="text" />

            <label className={styles.visuallyHidden} htmlFor="contact-message">
              {copy.formMessage}
            </label>
            <textarea id="contact-message" placeholder={copy.formMessage} rows={6} />

            <label className={styles.consent}>
              <input type="checkbox" />
              <span>{copy.formConsent}</span>
            </label>

            <button className={styles.submitButton} type="button">
              {copy.formSubmit}
            </button>
          </form>
        </div>
      </section>

      <section className={styles.cooperation} aria-labelledby="cooperation-title">
        <div className={styles.cooperationInner}>
          <h2 className={styles.blockTitle} id="cooperation-title">
            {copy.cooperationEyebrow}
          </h2>

          <div className={styles.cooperationCards}>
            {copy.cooperationItems.map((item) => (
              <article className={styles.cooperationCard} key={item.title}>
                <span className={styles.cardIcon}>
                  <Icon name={item.icon} />
                </span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.newsletter} aria-labelledby="newsletter-title">
        <div className={styles.newsletterInner}>
          <div>
            <h2 className={styles.newsletterTitle} id="newsletter-title">
              {copy.newsletterTitle}
            </h2>
            <p className={styles.sectionText}>{copy.newsletterText}</p>
          </div>

          <form className={styles.newsletterForm}>
            <label className={styles.visuallyHidden} htmlFor="newsletter-email">
              {copy.newsletterPlaceholder}
            </label>
            <input
              id="newsletter-email"
              placeholder={copy.newsletterPlaceholder}
              type="email"
            />
            <button className={styles.submitButton} type="button">
              {copy.newsletterSubmit}
            </button>
          </form>

          <div className={styles.newsletterImage} aria-hidden="true">
            <Image
              alt=""
              fill
              sizes="320px"
              src={assetPath("/assets/images/hero/hero-books-manuscripts.png")}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
