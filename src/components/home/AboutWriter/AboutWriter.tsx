import Image from "next/image";
import Link from "next/link";

import styles from "./AboutWriter.module.css";
import { assetPath, localizedPath, type Locale } from "@/config/site";

type AboutWriterProps = {
  locale?: Locale;
};

type AboutWriterContent = {
  eyebrow: string;
  title: string;
  text: string;
  linkLabel: string;
  quote: string;
  quoteAuthor: string;
  imageAlt: string;
};

const contentByLocale: Record<Locale, AboutWriterContent> = {
  be: {
    eyebrow: "Пра пісьменніка",
    title: "Голас памяці і сумлення",
    text: "Алесь Адамовіч — пісьменнік, публіцыст і адзін з найважнейшых галасоў беларускай літаратуры XX стагоддзя. Яго кнігі, заснаваныя на сведчаннях і дакументальнай праўдзе, захоўваюць памяць пра вайну, чалавечую годнасць і маральны выбар.",
    linkLabel: "Даведацца больш",
    quote: "Чалавечая памяць мацнейшая за страх.",
    quoteAuthor: "Алесь Адамовіч",
    imageAlt: "Алесь Адамовіч за працай",
  },
  en: {
    eyebrow: "About the writer",
    title: "A voice of memory and conscience",
    text: "Ales Adamovich was a writer, publicist and one of the most important voices of Belarusian literature of the 20th century. His books, based on testimonies and documentary truth, preserve the memory of war, human dignity and moral choice.",
    linkLabel: "Read more",
    quote: "Human memory is stronger than fear.",
    quoteAuthor: "Ales Adamovich",
    imageAlt: "Ales Adamovich working at a desk",
  },
  ru: {
    eyebrow: "О писателе",
    title: "Голос памяти и совести",
    text: "Алесь Адамович — писатель, публицист и один из важнейших голосов белорусской литературы XX века. Его книги, основанные на свидетельствах и документальной правде, сохраняют память о войне, человеческом достоинстве и нравственном выборе.",
    linkLabel: "Подробнее",
    quote: "Человеческая память сильнее страха.",
    quoteAuthor: "Алесь Адамович",
    imageAlt: "Алесь Адамович за работой",
  },
};

const writerImage = assetPath("/assets/images/portraits/adamovich-writing.webp");

export function AboutWriter({ locale = "en" }: AboutWriterProps) {
  const content = contentByLocale[locale];

  return (
    <section className={styles.section} aria-labelledby="about-writer-title">
      <div className={styles.inner}>
        <div className={styles.imageColumn}>
          <div className={styles.imageFrame}>
            <Image
              alt={content.imageAlt}
              className={styles.image}
              height={578}
              sizes="(max-width: 700px) calc(100vw - 40px), (max-width: 1024px) 42vw, 420px"
              src={writerImage}
              width={840}
            />
          </div>
        </div>

        <div className={styles.content}>
          <p className={styles.eyebrow}>{content.eyebrow}</p>
          <h2 id="about-writer-title" className={styles.title}>
            {content.title}
          </h2>
          <p className={styles.text}>{content.text}</p>
          <Link className={styles.link} href={localizedPath(locale, "biography")}>
            {content.linkLabel}
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        <aside className={styles.quoteColumn}>
          <div className={styles.quoteMark} aria-hidden="true">
            ”
          </div>
          <blockquote className={styles.quoteText}>{content.quote}</blockquote>
          <p className={styles.quoteAuthor}>{content.quoteAuthor}</p>
        </aside>
      </div>
    </section>
  );
}
