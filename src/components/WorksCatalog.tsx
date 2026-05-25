"use client";

import { useMemo, useState } from "react";

import styles from "./WorksCatalog.module.css";
import { WorksGrid } from "./WorksGrid";
import type { Locale } from "@/config/site";
import type { Work } from "@/data/works";
import { sortWorks, type WorkSortType } from "@/lib/works";

type WorkFilter = "all" | "book" | "film" | "script" | "publicism" | "interview" | "archive" | "research";

type WorksCatalogProps = {
  locale: Locale;
  works: Work[];
};

const labels = {
  ru: {
    empty: "Материалы по выбранному фильтру пока не добавлены.",
    sort: "Сортировка",
    filters: [
      ["all", "Все"],
      ["book", "Книги"],
      ["film", "Фильмы"],
      ["script", "Сценарии"],
      ["publicism", "Публицистика"],
      ["interview", "Интервью"],
      ["archive", "Архив"],
      ["research", "Исследования"],
    ],
    sortOptions: [
      ["priority", "По приоритету"],
      ["year", "По году"],
      ["title", "По названию"],
    ],
  },
  be: {
    empty: "Матэрыялы па выбраным фільтры пакуль не дададзены.",
    sort: "Сартаванне",
    filters: [
      ["all", "Усе"],
      ["book", "Кнігі"],
      ["film", "Фільмы"],
      ["script", "Сцэнары"],
      ["publicism", "Публіцыстыка"],
      ["interview", "Інтэрв'ю"],
      ["archive", "Архіў"],
      ["research", "Даследаванні"],
    ],
    sortOptions: [
      ["priority", "Па прыярытэце"],
      ["year", "Па годзе"],
      ["title", "Па назве"],
    ],
  },
  en: {
    empty: "No materials have been added for this filter yet.",
    sort: "Sort",
    filters: [
      ["all", "All"],
      ["book", "Books"],
      ["film", "Films"],
      ["script", "Scripts"],
      ["publicism", "Publicism"],
      ["interview", "Interviews"],
      ["archive", "Archive"],
      ["research", "Research"],
    ],
    sortOptions: [
      ["priority", "By priority"],
      ["year", "By year"],
      ["title", "By title"],
    ],
  },
} satisfies Record<
  Locale,
  {
    empty: string;
    sort: string;
    filters: [WorkFilter, string][];
    sortOptions: [WorkSortType, string][];
  }
>;

function matchesFilter(work: Work, filter: WorkFilter) {
  if (filter === "all") return true;
  if (filter === "publicism") return work.type === "article" || work.type === "essay";

  return work.type === filter;
}

export function WorksCatalog({ locale, works }: WorksCatalogProps) {
  const [filter, setFilter] = useState<WorkFilter>("all");
  const [sortType, setSortType] = useState<WorkSortType>("priority");
  const content = labels[locale];

  const visibleWorks = useMemo(() => {
    return sortWorks(
      works.filter((work) => matchesFilter(work, filter)),
      sortType,
    );
  }, [filter, sortType, works]);

  return (
    <div className={styles.catalog}>
      <div className={styles.toolbar}>
        <div className={styles.filters} aria-label="Work filters">
          {content.filters.map(([value, label]) => (
            <button
              aria-pressed={filter === value}
              className={`${styles.filterButton} ${filter === value ? styles.filterButtonActive : ""}`}
              key={value}
              onClick={() => setFilter(value)}
              type="button"
            >
              {label}
            </button>
          ))}
        </div>

        <label className={styles.sortGroup}>
          <span className={styles.sortLabel}>{content.sort}</span>
          <select
            className={styles.sortSelect}
            onChange={(event) => setSortType(event.target.value as WorkSortType)}
            value={sortType}
          >
            {content.sortOptions.map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </label>
      </div>

      {visibleWorks.length ? (
        <WorksGrid locale={locale} works={visibleWorks} />
      ) : (
        <p className={styles.empty}>{content.empty}</p>
      )}
    </div>
  );
}
