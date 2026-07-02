import type { Metadata } from "next";

import { siteConfig, type Locale } from "@/config/site";
import { resolveLocalePage, type LocalePageProps } from "@/lib/page";
import { localizedAlternates } from "@/lib/seo";
import styles from "./page.module.css";

type PrivacyContent = {
  eyebrow: string;
  title: string;
  description: string;
  updated: string;
  sections: {
    title: string;
    body: string[];
  }[];
};

const contentByLocale: Record<Locale, PrivacyContent> = {
  be: {
    eyebrow: "Прыватнасць",
    title: "Прыватнасць і cookies",
    description:
      "Каротка тлумачым, якія даныя можа выкарыстоўваць сайт, навошта патрэбная аналітыка і як мы ставімся да матэрыялаў.",
    updated: "Абноўлена: 1 ліпеня 2026",
    sections: [
      {
        title: "Аналітыка",
        body: [
          "Сайт можа выкарыстоўваць Google Analytics, каб разумець агульную наведвальнасць, папулярнасць старонак і тэхнічную якасць працы сайта.",
          "Аналітыка ўключаецца толькі пасля вашай згоды ў банеры cookies. Калі вы не націскаеце «Прыняць» або выбіраеце адмову, Google Analytics не загружаецца.",
        ],
      },
      {
        title: "Cookies",
        body: [
          "Мы захоўваем толькі ваш выбар адносна аналітыкі: прынята або адхілена. Гэта трэба, каб не пытацца пра адно і тое ж пры кожным наведванні.",
          "Вы можаце змяніць рашэнне праз спасылку «Налады cookies» унізе сайта.",
        ],
      },
      {
        title: "Матэрыялы сайта",
        body: [
          "Тэксты, фотаздымкі і архіўныя матэрыялы размяшчаюцца з павагай да памяці Алеся Адамовіча і правоў людзей, якія ўдзельнічаюць у праекце.",
          "Калі вы выкарыстоўваеце матэрыялы сайта, калі ласка, спасылайцеся на adamovich.eu. Для публікацый, выстаў, медыяпраектаў і камерцыйнага выкарыстання лепш загадзя звязацца з камандай.",
        ],
      },
      {
        title: "Кантакт",
        body: [
          `Па пытаннях прыватнасці, матэрыялаў або выпраўленняў можна напісаць на ${siteConfig.contacts.email}.`,
        ],
      },
    ],
  },
  en: {
    eyebrow: "Privacy",
    title: "Privacy and Cookies",
    description:
      "A short explanation of what data the site may use, why analytics are needed, and how materials from the site should be handled.",
    updated: "Updated: July 1, 2026",
    sections: [
      {
        title: "Analytics",
        body: [
          "The site may use Google Analytics to understand overall traffic, which pages are useful to visitors, and whether the site works reliably.",
          "Analytics are enabled only after your consent in the cookie banner. If you do not accept, or if you reject analytics, Google Analytics is not loaded.",
        ],
      },
      {
        title: "Cookies",
        body: [
          "We store only your analytics choice: accepted or rejected. This is needed so the site does not ask the same question on every visit.",
          "You can change your decision through the Cookie settings link in the footer.",
        ],
      },
      {
        title: "Site Materials",
        body: [
          "Texts, photographs, and archival materials are published with respect for Ales Adamovich's memory and for the rights of the people involved in the project.",
          "If you use materials from the site, please credit adamovich.eu. For publications, exhibitions, media projects, or commercial use, contact the team in advance.",
        ],
      },
      {
        title: "Contact",
        body: [
          `For privacy, materials, or correction requests, contact us at ${siteConfig.contacts.email}.`,
        ],
      },
    ],
  },
  ru: {
    eyebrow: "Приватность",
    title: "Приватность и cookies",
    description:
      "Коротко объясняем, какие данные может использовать сайт, зачем нужна аналитика и как обращаться с материалами.",
    updated: "Обновлено: 1 июля 2026",
    sections: [
      {
        title: "Аналитика",
        body: [
          "Сайт может использовать Google Analytics, чтобы понимать общую посещаемость, полезность страниц и техническое качество работы сайта.",
          "Аналитика включается только после вашего согласия в баннере cookies. Если вы не нажимаете «Принять» или выбираете отказ, Google Analytics не загружается.",
        ],
      },
      {
        title: "Cookies",
        body: [
          "Мы сохраняем только ваш выбор по аналитике: принято или отклонено. Это нужно, чтобы сайт не задавал один и тот же вопрос при каждом посещении.",
          "Вы можете изменить решение через ссылку «Настройки cookies» внизу сайта.",
        ],
      },
      {
        title: "Материалы сайта",
        body: [
          "Тексты, фотографии и архивные материалы размещаются с уважением к памяти Алеся Адамовича и правам людей, участвующих в проекте.",
          "Если вы используете материалы сайта, пожалуйста, указывайте ссылку на adamovich.eu. Для публикаций, выставок, медиапроектов и коммерческого использования лучше заранее связаться с командой.",
        ],
      },
      {
        title: "Контакт",
        body: [
          `По вопросам приватности, материалов или исправлений можно написать на ${siteConfig.contacts.email}.`,
        ],
      },
    ],
  },
};

export async function generateMetadata({
  params,
}: LocalePageProps): Promise<Metadata> {
  const { locale } = await resolveLocalePage(params);
  const content = contentByLocale[locale];

  return {
    title: content.title,
    description: content.description,
    alternates: localizedAlternates(locale, "privacy"),
    openGraph: {
      title: content.title,
      description: content.description,
    },
    twitter: {
      title: content.title,
      description: content.description,
    },
  };
}

export default async function PrivacyRoute({ params }: LocalePageProps) {
  const { locale } = await resolveLocalePage(params);
  const content = contentByLocale[locale];

  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <p className={styles.eyebrow}>{content.eyebrow}</p>
        <h1 className={styles.title}>{content.title}</h1>
        <p className={styles.description}>{content.description}</p>
        <p className={styles.updated}>{content.updated}</p>
      </section>

      <section className={styles.content} aria-label={content.title}>
        {content.sections.map((section) => (
          <article
            className={styles.section}
            id={section.title === content.sections[2].title ? "materials" : undefined}
            key={section.title}
          >
            <h2 className={styles.sectionTitle}>{section.title}</h2>
            <div className={styles.sectionBody}>
              {section.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
