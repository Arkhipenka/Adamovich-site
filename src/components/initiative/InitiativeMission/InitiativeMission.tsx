import Image from "next/image";

import { assetPath, type Locale } from "@/config/site";

import styles from "./InitiativeMission.module.css";

type InitiativeMissionProps = {
  locale: Locale;
};

const content = {
  be: {
    title: "Як усё пачалося",
    imageAlt: "Людзі каля помніка Алесю Адамовічу ў Глушы",
    paragraphs: [
      "Ідэя ўшанавання Алеся Адамовіча ў Глушы пачалася з размоў пра памяць, месца і адказнасць перад спадчынай пісьменніка.",
      "Спачатку гэта была лакальная ініцыятыва: знайсці форму, якая будзе гаварыць не толькі пра мінулае, але і пра жывую прысутнасць Адамовіча ў роднай прасторы.",
      "Паступова вакол ідэі з’явіліся людзі, партнёры і падтрымка. Так пачаўся шлях да помніка, арт-аб’екта, маршруту і далейшай працы з матэрыяламі.",
      "Сёння гэтая гісторыя працягваецца як адкрытая культурная праца: даследаванні, аўдыягід, лічбавая платформа і будучы архіў спадчыны.",
    ],
  },
  ru: {
    title: "Как всё началось",
    imageAlt: "Люди у памятника Алесю Адамовичу в Глуше",
    paragraphs: [
      "Идея увековечить Алеся Адамовича в Глуше началась с разговоров о памяти, месте и ответственности перед наследием писателя.",
      "Сначала это была локальная инициатива: найти форму, которая говорила бы не только о прошлом, но и о живом присутствии Адамовича в родном пространстве.",
      "Постепенно вокруг идеи появились люди, партнёры и поддержка. Так начался путь к памятнику, арт-объекту, маршруту и дальнейшей работе с материалами.",
      "Сегодня эта история продолжается как открытая культурная работа: исследования, аудиогид, цифровая платформа и будущий архив наследия.",
    ],
  },
  en: {
    title: "How it began",
    imageAlt: "People near the monument to Ales Adamovich in Glusha",
    paragraphs: [
      "The idea to commemorate Ales Adamovich in Glusha began with conversations about memory, place and responsibility for the writer’s legacy.",
      "At first it was a local initiative: to find a form that would speak not only about the past, but also about Adamovich’s living presence in his native landscape.",
      "Gradually, people, partners and support gathered around the idea. This became the path toward the monument, the art object, the route and further work with materials.",
      "Today this story continues as open cultural work: research, an audio guide, a digital platform and a future archive of the legacy.",
    ],
  },
} satisfies Record<
  Locale,
  {
    title: string;
    imageAlt: string;
    paragraphs: [string, string, string, string];
  }
>;

export function InitiativeMission({ locale }: InitiativeMissionProps) {
  const section = content[locale] ?? content.be;

  return (
    <section
      id="initiative-story"
      className={styles.section}
      aria-labelledby="initiative-story-title"
    >
      <div className={styles.inner}>
        <h2 id="initiative-story-title" className={styles.title}>
          {section.title}
        </h2>

        <div className={styles.grid}>
          <figure className={styles.imageFrame}>
            <Image
              alt={section.imageAlt}
              className={styles.image}
              fill
              sizes="(max-width: 900px) calc(100vw - 40px), 34vw"
              src={assetPath("/assets/images/initiative/initiative-beginning.jpg")}
            />
          </figure>

          <div className={styles.copyColumn}>
            <p>{section.paragraphs[0]}</p>
            <p>{section.paragraphs[1]}</p>
          </div>

          <div className={styles.copyColumn}>
            <p>{section.paragraphs[2]}</p>
            <p>{section.paragraphs[3]}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
