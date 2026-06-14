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
      "Ідэя ўшанавання Алеся Адамовіча ў Глушы нарадзілася з размоў пра тое, як адзначыць ягонае 90-годдзе і што можна зрабіць для памяці пісьменніка ў мясцінах, звязаных з ягоным жыццём.",
      "Спачатку гэта была лакальная ініцыятыва і даволі смелая думка: усталяваць помнік пісьменіку ў родным пасёлку. Тады мала хто верыў, што ідэю помніка сапраўды ўдасца рэалізаваць.",
      "Паступова вакол гэтай ідэі з’явіліся людзі, партнёры і падтрымка. Так пачаўся шлях да помніка ў Глушы, арт-аб’екта «Прыпынак Адамовіча».",
      "Пасля першых рэалізаваных праектаў у працы ініцыятывы быў перапынак. Але сама ідэя не знікла.",
      "Сёння гэтая гісторыя працягваецца ў новым фармаце.",
    ],
  },
  ru: {
    title: "Как всё началось",
    imageAlt: "Люди у памятника Алесю Адамовичу в Глуше",
    paragraphs: [
      "Идея увековечивания памяти Алеся Адамовича в Глуше родилась из разговоров о том, как отметить его 90-летие и что можно сделать для памяти писателя в местах, связанных с его жизнью.",
      "Сначала это была локальная инициатива и довольно смелая мысль: установить памятник писателю в родном посёлке. Тогда мало кто верил, что идею памятника действительно удастся реализовать.",
      "Постепенно вокруг этой идеи появились люди, партнёры и поддержка. Так начался путь к памятнику в Глуше и арт-объекту «Прыпынак Адамовіча».",
      "После первых реализованных проектов в работе инициативы был перерыв. Но сама идея не исчезла.",
      "Сегодня эта история продолжается в новом формате.",

    ],
  },
  en: {
    title: "How it began",
    imageAlt: "People near the monument to Ales Adamovich in Glusha",
    paragraphs: [
      "The idea of commemorating Ales Adamovich in Hluša grew out of conversations about how to mark his 90th anniversary and what could be done to preserve the writer’s memory in the places connected with his life.",
      "At first, it was a local initiative and a rather bold idea: to install a monument to the writer in his native village. At that time, few believed that the idea of the monument could truly be brought to life.",
      "Gradually, people, partners, and support gathered around this idea. This is how the path began toward the monument in Hluša and the art object “Prypynak Adamoviča.”",
      "After the first completed projects, the initiative went through a pause. But the idea itself did not disappear.",
      "Today, this story continues in a new format.",

    ],
  },
} satisfies Record<
  Locale,
  {
    title: string;
    imageAlt: string;
    paragraphs: [string, string, string, string, string];
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
              sizes="(max-width: 760px) calc(100vw - 40px), (max-width: 1100px) calc(100vw - 80px), 34vw"
              src={assetPath("/assets/images/initiative/initiative-beginning-optimized.jpg")}
            />
          </figure>

          <div className={styles.copyColumn}>
            <p>{section.paragraphs[0]}</p>
            <p>{section.paragraphs[1]}</p>
          </div>

          <div className={styles.copyColumn}>
            <p>{section.paragraphs[2]}</p>
            <p>{section.paragraphs[3]}</p>
            <p>{section.paragraphs[4]}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
