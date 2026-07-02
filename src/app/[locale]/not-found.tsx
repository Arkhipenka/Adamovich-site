import Link from "next/link";

import { defaultLocale, localizedPath } from "@/config/site";
import styles from "../not-found.module.css";

export default function LocaleNotFound() {
  return (
    <main className={styles.page}>
      <section className={styles.panel} aria-labelledby="not-found-title">
        <span className={styles.code}>404</span>
        <h1 className={styles.title} id="not-found-title">
          Старонка не знойдзена
        </h1>
        <p className={styles.text}>
          Магчыма, адрас змяніўся або быў набраны з памылкай. Вярніцеся на
          галоўную старонку і працягніце шлях па сайце.
        </p>
        <div className={styles.actions}>
          <Link className={styles.link} href={localizedPath(defaultLocale)}>
            На галоўную
          </Link>
        </div>
      </section>
    </main>
  );
}
