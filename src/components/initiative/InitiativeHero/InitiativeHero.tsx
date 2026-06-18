import Image from "next/image";
import Link from "next/link";

import { assetPath, type Locale } from "@/config/site";

import styles from "./InitiativeHero.module.css";

type InitiativeHeroProps = {
  locale: Locale;
};

const content = {
  be: {
    eyebrow: "Ініцыятыва",
    title: ["Прыпынак", "Адамовіча"],
    description:
      "Ініцыатыва, што нарадзіўся з ідэі ўшанавання Алеся Адамовіча ў Глушы, перарос у стварэнне помніка, арт-аб’ект, маршрут, грамадскую кампанію і жывую працу са спадчынай.",
    linkLabel: "Падрабязней",
  },
  ru: {
    eyebrow: "Инициатива",
    title: ["Прыпынак", "Адамовича"],
    description:
      "Инициатива, родившееся из идеи почтить память Алеся Адамовича в Глуше, выросло в создание памятника, арт-объект, маршрут, общественную кампанию и живую работу с наследием.",
    linkLabel: "Подробнее",
  },
  en: {
    eyebrow: "Initiative",
    title: ["Prypynak", "Adamovich"],
    description:
      "An initiative born from the idea of honoring Ales Adamovich in Glusha grew into a memorial, an art object, a route, a civic campaign and living work with his legacy.",
    linkLabel: "Learn more",
  },
} satisfies Record<
  Locale,
  {
    eyebrow: string;
    title: [string, string];
    description: string;
    linkLabel: string;
  }
>;

export function InitiativeHero({ locale }: InitiativeHeroProps) {
  const hero = content[locale] ?? content.ru;

  return (
    <section className={styles.hero} aria-labelledby="initiative-title">
      <div className={styles.visual} aria-hidden="true">
        <Image
          alt=""
          className={styles.backgroundImage}
          fill
          priority
          sizes="100vw"
          src={assetPath("/assets/images/initiative/initiative-hero-complete.webp")}
        />
      </div>
      <div className={styles.heroOverlay} aria-hidden="true" />

      <div className={styles.inner}>
        <div className={styles.content}>
          <p className={styles.eyebrow}>{hero.eyebrow}</p>
          <h1 id="initiative-title" className={styles.title}>
            <span>{hero.title[0]}</span>
            <span>{hero.title[1]}</span>
          </h1>
          <p className={styles.description}>{hero.description}</p>
          <Link className={styles.link} href="#initiative-story">
            {hero.linkLabel}
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
