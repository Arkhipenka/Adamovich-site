import Image from "next/image";

import { assetPath } from "@/config/site";
import type { Locale } from "@/types/common.types";

import styles from "./BiographyHero.module.css";

type BiographyHeroProps = {
  locale: Locale;
};

const heroContent: Record<
  Locale,
  {
    description: string;
    eyebrow: string;
    kicker: string;
    title: string;
  }
> = {
  be: {
    description:
      "Алесь Адамовіч належыць да тых аўтараў, для якіх літаратура была не толькі мастацтвам, але і формай адказнасці. Ён пісаў пра вайну, памяць, чалавечую годнасць і небяспеку забыцця.",
    eyebrow: "Біяграфія",
    kicker: "Пісьменнік, публіцыст, літаратуразнаўца, сцэнарыст і грамадскі дзеяч.",
    title: "Алесь Адамовіч",
  },
  en: {
    description:
      "Ales Adamovich belongs to those authors for whom literature was not only an art, but also a form of responsibility. He wrote about war, memory, human dignity, and the danger of oblivion.",
    eyebrow: "Biography",
    kicker: "Writer, publicist, literary scholar, screenwriter, and public figure.",
    title: "Ales Adamovich",
  },
  ru: {
    description:
      "Алесь Адамович принадлежит к тем авторам, для которых литература была не только искусством, но и формой ответственности. Он писал о войне, памяти, человеческом достоинстве и опасности забвения.",
    eyebrow: "Биография",
    kicker: "Писатель, публицист, литературовед, сценарист и общественный деятель.",
    title: "Алесь Адамович",
  },
};

export function BiographyHero({ locale }: BiographyHeroProps) {
  const copy = heroContent[locale];

  return (
    <section className={styles.hero} aria-labelledby="biography-title">
      <div className={styles.heroMedia} aria-hidden="true">
        <Image
          alt=""
          className={styles.heroImage}
          fill
          priority
          sizes="100vw"
          src={assetPath("/assets/images/biography/biography-hero-cinema.png")}
        />
      </div>

      <div className={styles.heroContent}>
        <p className={styles.eyebrow}>{copy.eyebrow}</p>
        <h1 className={styles.title} id="biography-title">
          {copy.title}
        </h1>
        <p className={styles.kicker}>{copy.kicker}</p>
        <p className={styles.description}>{copy.description}</p>
      </div>
    </section>
  );
}
