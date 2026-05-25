import styles from "./WorksGrid.module.css";
import { WorkCard } from "@/components/WorkCard";
import type { Work } from "@/data/works";
import type { Locale } from "@/config/site";

type WorksGridProps = {
  compact?: boolean;
  locale: Locale;
  singleRow?: boolean;
  works: Work[];
};

export function WorksGrid({
  compact = false,
  locale,
  singleRow = false,
  works,
}: WorksGridProps) {
  return (
    <div
      className={`${styles.grid} ${compact ? styles.compact : ""} ${singleRow ? styles.singleRow : ""}`}
    >
      {works.map((work) => (
        <WorkCard compact={compact} key={work.id} locale={locale} work={work} />
      ))}
    </div>
  );
}
