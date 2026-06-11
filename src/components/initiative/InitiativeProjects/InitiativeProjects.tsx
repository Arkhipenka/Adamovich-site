import Image from "next/image";

import { assetPath } from "@/config/site";
import {
  initiativeProjects,
  initiativeProjectsCopy,
  type InitiativeProject,
} from "@/data/initiativeProjects";
import { getLocalizedText } from "@/lib/getLocalizedText";
import type { Locale } from "@/types/common.types";

import styles from "./InitiativeProjects.module.css";

type InitiativeProjectsProps = {
  locale: Locale;
  projects?: InitiativeProject[];
};

export function InitiativeProjects({
  locale,
  projects = initiativeProjects,
}: InitiativeProjectsProps) {
  const copy = initiativeProjectsCopy[locale] ?? initiativeProjectsCopy.be;
  const sortedProjects = [...projects].sort(
    (first, second) => (first.order ?? 999) - (second.order ?? 999),
  );

  return (
    <section className={styles.section} aria-labelledby="initiative-projects-title">
      <div className={styles.inner}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>{copy.eyebrow}</p>
          <h2 id="initiative-projects-title" className={styles.title}>
            {copy.title}
          </h2>
          <p className={styles.lead}>{copy.lead}</p>
        </div>

        <div className={styles.grid}>
          {sortedProjects.map((project) => {
            const title = getLocalizedText(project.title, locale);

            return (
              <article className={styles.card} key={project.id}>
                <div className={styles.imageFrame}>
                  <Image
                    alt={getLocalizedText(project.imageAlt, locale)}
                    className={styles.image}
                    fill
                    loading="lazy"
                    sizes="(max-width: 760px) calc(100vw - 40px), (max-width: 1180px) 30vw, 28vw"
                    src={assetPath(project.image)}
                  />
                </div>

                <div className={styles.cardBody}>
                  <span className={styles.year}>{project.year}</span>
                  <h3 className={styles.cardTitle}>{title}</h3>
                  <p className={styles.description}>
                    {getLocalizedText(project.description, locale)}
                  </p>

                  {project.href ? (
                    <a className={styles.link} href={project.href}>
                      {copy.moreLabel}
                      <span aria-hidden="true">→</span>
                    </a>
                  ) : null}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
