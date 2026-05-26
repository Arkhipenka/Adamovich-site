"use client";

import Image from "next/image";
import Link from "next/link";
import { type FocusEvent, useEffect, useMemo, useState } from "react";

import styles from "./WorksCatalog.module.css";
import { WorksGrid } from "./WorksGrid";
import { assetPath, type Locale } from "@/config/site";
import type { Work } from "@/data/works";
import { localizedHref } from "@/lib/localizedHref";
import { sortWorks, type WorkSortType } from "@/lib/works";

type WorkFilter =
  | "all"
  | "book"
  | "film"
  | "script"
  | "publicism"
  | "interview"
  | "archive"
  | "research";

type ViewMode = "grid" | "list";
type DropdownId = "filter" | "sort";

type WorksCatalogProps = {
  locale: Locale;
  works: Work[];
};

const labels = {
  ru: {
    empty: "Материалы по выбранному фильтру пока не добавлены.",
    emptySearch: "По этому запросу материалы не найдены.",
    filterLabel: "Фильтры",
    search: "Поиск",
    searchPlaceholder: "Название, автор, год, тема...",
    clearSearch: "Очистить поиск",
    next: "Вперёд",
    pageStatus: (page: number, total: number) => `Страница ${page} из ${total}`,
    paginationLabel: "Навигация по страницам материалов",
    previous: "Назад",
    records: "записей",
    results: (count: number, total: number) => `${count} из ${total}`,
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
    emptySearch: "Па гэтым запыце матэрыялы не знойдзены.",
    filterLabel: "Фільтры",
    search: "Пошук",
    searchPlaceholder: "Назва, аўтар, год, тэма...",
    clearSearch: "Ачысціць пошук",
    next: "Наперад",
    pageStatus: (page: number, total: number) => `Старонка ${page} з ${total}`,
    paginationLabel: "Навігацыя па старонках матэрыялаў",
    previous: "Назад",
    records: "запісаў",
    results: (count: number, total: number) => `${count} з ${total}`,
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
    emptySearch: "No materials match this search.",
    filterLabel: "Filters",
    search: "Search",
    searchPlaceholder: "Title, author, year, theme...",
    clearSearch: "Clear search",
    next: "Next",
    pageStatus: (page: number, total: number) => `Page ${page} of ${total}`,
    paginationLabel: "Materials pagination",
    previous: "Previous",
    records: "records",
    results: (count: number, total: number) => `${count} of ${total}`,
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
    emptySearch: string;
    filterLabel: string;
    search: string;
    searchPlaceholder: string;
    clearSearch: string;
    next: string;
    pageStatus: (page: number, total: number) => string;
    paginationLabel: string;
    previous: string;
    records: string;
    results: (count: number, total: number) => string;
    sort: string;
    filters: [WorkFilter, string][];
    sortOptions: [WorkSortType, string][];
  }
>;

const viewLabels = {
  ru: {
    details: "Подробнее",
    grid: "Карточки",
    list: "Список",
    view: "Вид отображения",
  },
  be: {
    details: "Даведацца больш",
    grid: "Карткі",
    list: "Спіс",
    view: "Выгляд адлюстравання",
  },
  en: {
    details: "Read more",
    grid: "Cards",
    list: "List",
    view: "View mode",
  },
} satisfies Record<Locale, Record<"details" | "grid" | "list" | "view", string>>;

function matchesFilter(work: Work, filter: WorkFilter) {
  if (filter === "all") return true;
  if (filter === "publicism") return work.type === "article" || work.type === "essay";

  return work.type === filter;
}

function getLocalizedField(
  field:
    | Work["title"]
    | Work["subtitle"]
    | Work["descriptionShort"]
    | Work["descriptionFull"]
    | Work["role"],
  locale: Locale,
) {
  return field?.[locale] || field?.ru || field?.be || field?.en || "";
}

function normalizeSearchValue(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLocaleLowerCase();
}

function matchesSearch(work: Work, query: string, locale: Locale) {
  if (!query) return true;

  const searchableText = [
    work.id,
    work.slug,
    work.type,
    work.year?.toString(),
    work.date,
    getLocalizedField(work.title, locale),
    getLocalizedField(work.subtitle, locale),
    work.originalTitle,
    getLocalizedField(work.role, locale),
    getLocalizedField(work.descriptionShort, locale),
    getLocalizedField(work.descriptionFull, locale),
    ...work.authors,
    ...(work.coAuthors ?? []),
    ...(work.editors ?? []),
    ...(work.translators ?? []),
    ...(work.languages ?? []),
    ...(work.tags ?? []),
    ...(work.themes ?? []),
  ]
    .filter(Boolean)
    .join(" ");

  return normalizeSearchValue(searchableText).includes(query);
}

function getItemsPerPage() {
  if (typeof window === "undefined") return 6;
  if (window.matchMedia("(max-width: 680px)").matches) return 2;
  if (window.matchMedia("(min-width: 1360px)").matches) return 8;

  return 6;
}

function getWorkFilter(work: Work): WorkFilter {
  if (work.type === "article" || work.type === "essay") return "publicism";

  return work.type;
}

function getWorkTypeLabel(work: Work, locale: Locale) {
  const filter = getWorkFilter(work);

  return labels[locale].filters.find(([value]) => value === filter)?.[1] ?? work.type;
}

function getAuthors(work: Work) {
  return [...work.authors, ...(work.coAuthors ?? [])].filter(Boolean).join(", ");
}

export function WorksCatalog({ locale, works }: WorksCatalogProps) {
  const [filter, setFilter] = useState<WorkFilter>("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const [openDropdown, setOpenDropdown] = useState<DropdownId | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortType, setSortType] = useState<WorkSortType>("priority");
  const [viewMode, setViewMode] = useState<ViewMode>("grid");
  const content = labels[locale];
  const viewContent = viewLabels[locale];
  const normalizedSearchQuery = normalizeSearchValue(searchQuery.trim());
  const selectedFilterLabel =
    content.filters.find(([value]) => value === filter)?.[1] ?? content.filters[0][1];
  const selectedSortLabel =
    content.sortOptions.find(([value]) => value === sortType)?.[1] ?? content.sortOptions[0][1];

  const closeDropdownOnBlur = (event: FocusEvent<HTMLDivElement>) => {
    const nextTarget = event.relatedTarget as Node | null;

    if (!nextTarget || !event.currentTarget.contains(nextTarget)) {
      setOpenDropdown(null);
    }
  };

  useEffect(() => {
    const updateItemsPerPage = () => {
      setItemsPerPage(getItemsPerPage());
    };

    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);

    return () => {
      window.removeEventListener("resize", updateItemsPerPage);
    };
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [filter, itemsPerPage, normalizedSearchQuery, sortType]);

  const visibleWorks = useMemo(() => {
    return sortWorks(
      works.filter((work) => (
        matchesFilter(work, filter) &&
        matchesSearch(work, normalizedSearchQuery, locale)
      )),
      sortType,
    );
  }, [filter, locale, normalizedSearchQuery, sortType, works]);

  const totalPages = Math.max(1, Math.ceil(visibleWorks.length / itemsPerPage));
  const activePage = Math.min(currentPage, totalPages);
  const paginatedWorks = useMemo(() => {
    const startIndex = (activePage - 1) * itemsPerPage;

    return visibleWorks.slice(startIndex, startIndex + itemsPerPage);
  }, [activePage, itemsPerPage, visibleWorks]);

  return (
    <div className={styles.catalog}>
      <div className={styles.controlPanel}>
        <label className={styles.searchGroup}>
          <span className={styles.searchLabel}>{content.search}</span>
          <span className={styles.searchControl}>
            <span className={styles.searchIcon} aria-hidden="true">
              <svg
                fill="none"
                height="22"
                viewBox="0 0 24 24"
                width="22"
              >
                <circle cx="11" cy="11" r="7" />
                <path d="m16.5 16.5 4 4" />
              </svg>
            </span>
            <input
              className={styles.searchInput}
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder={content.searchPlaceholder}
              type="search"
              value={searchQuery}
            />
            {searchQuery ? (
              <button
                aria-label={content.clearSearch}
                className={styles.clearSearch}
                onClick={() => setSearchQuery("")}
                type="button"
              >
                ×
              </button>
            ) : (
              <span className={styles.searchShortcut} aria-hidden="true">
                ⌘K
              </span>
            )}
          </span>
        </label>

        <span className={styles.panelDivider} aria-hidden="true" />

        <div className={styles.sortGroup} onBlur={closeDropdownOnBlur}>
          <span className={styles.sortLabel}>{content.sort}</span>
          <div className={styles.dropdown}>
            <button
              aria-expanded={openDropdown === "sort"}
              className={styles.dropdownButton}
              onClick={() => setOpenDropdown((current) => (current === "sort" ? null : "sort"))}
              type="button"
            >
              <span className={styles.dropdownIcon} aria-hidden="true">
                <svg fill="none" height="18" viewBox="0 0 18 18" width="18">
                  <path d="M6 3v12" />
                  <path d="m3.5 5.5 2.5-2.5 2.5 2.5" />
                  <path d="m11.5 12.5 2.5 2.5 2.5-2.5" />
                  <path d="M14 3v12" />
                </svg>
              </span>
              <span className={styles.dropdownValue}>{selectedSortLabel}</span>
              <span className={styles.dropdownChevron} aria-hidden="true">
                <svg fill="none" height="16" viewBox="0 0 16 16" width="16">
                  <path d="m4 6 4 4 4-4" />
                </svg>
              </span>
            </button>

            <div
              className={`${styles.dropdownMenu} ${openDropdown === "sort" ? styles.dropdownMenuOpen : ""}`}
              role="listbox"
            >
              {content.sortOptions.map(([value, label]) => (
                <button
                  aria-selected={sortType === value}
                  className={`${styles.dropdownOption} ${sortType === value ? styles.dropdownOptionActive : ""}`}
                  key={value}
                  onClick={() => {
                    setSortType(value);
                    setOpenDropdown(null);
                  }}
                  role="option"
                  type="button"
                >
                  <span>{label}</span>
                  {sortType === value ? (
                    <span className={styles.dropdownCheck} aria-hidden="true">
                      <svg fill="none" height="15" viewBox="0 0 15 15" width="15">
                        <path d="m3 7.5 3 3 6-6" />
                      </svg>
                    </span>
                  ) : null}
                </button>
              ))}
            </div>
          </div>
        </div>

        <span className={styles.panelDivider} aria-hidden="true" />

        <div className={styles.filterSelectGroup} onBlur={closeDropdownOnBlur}>
          <span className={styles.sortLabel}>{content.filterLabel}</span>
          <div className={styles.dropdown}>
            <button
              aria-expanded={openDropdown === "filter"}
              className={styles.dropdownButton}
              onClick={() => setOpenDropdown((current) => (current === "filter" ? null : "filter"))}
              type="button"
            >
              <span className={styles.dropdownIcon} aria-hidden="true">
                <svg fill="none" height="18" viewBox="0 0 18 18" width="18">
                  <path d="M3 4h12" />
                  <path d="m6 8 3 3 3-3" />
                  <path d="M7.5 11v3" />
                  <path d="M10.5 11v3" />
                </svg>
              </span>
              <span className={styles.dropdownValue}>{selectedFilterLabel}</span>
              <span className={styles.dropdownChevron} aria-hidden="true">
                <svg fill="none" height="16" viewBox="0 0 16 16" width="16">
                  <path d="m4 6 4 4 4-4" />
                </svg>
              </span>
            </button>

            <div
              className={`${styles.dropdownMenu} ${openDropdown === "filter" ? styles.dropdownMenuOpen : ""}`}
              role="listbox"
            >
              {content.filters.map(([value, label]) => (
                <button
                  aria-selected={filter === value}
                  className={`${styles.dropdownOption} ${filter === value ? styles.dropdownOptionActive : ""}`}
                  key={value}
                  onClick={() => {
                    setFilter(value);
                    setOpenDropdown(null);
                  }}
                  role="option"
                  type="button"
                >
                  <span>{label}</span>
                  {filter === value ? (
                    <span className={styles.dropdownCheck} aria-hidden="true">
                      <svg fill="none" height="15" viewBox="0 0 15 15" width="15">
                        <path d="m3 7.5 3 3 6-6" />
                      </svg>
                    </span>
                  ) : null}
                </button>
              ))}
            </div>
          </div>
        </div>

        <p className={styles.resultCount} aria-live="polite">
          <span className={styles.resultNumber}>{visibleWorks.length}</span>
          <span>{content.records}</span>
        </p>
      </div>

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

        <div className={styles.viewSwitch} aria-label={viewContent.view}>
          <button
            aria-label={viewContent.grid}
            aria-pressed={viewMode === "grid"}
            className={`${styles.viewButton} ${viewMode === "grid" ? styles.viewButtonActive : ""}`}
            onClick={() => setViewMode("grid")}
            type="button"
          >
            <span className={styles.viewIcon} aria-hidden="true">
              <svg fill="none" height="18" viewBox="0 0 18 18" width="18">
                <rect height="5" width="5" x="2" y="2" />
                <rect height="5" width="5" x="11" y="2" />
                <rect height="5" width="5" x="2" y="11" />
                <rect height="5" width="5" x="11" y="11" />
              </svg>
            </span>
          </button>
          <button
            aria-label={viewContent.list}
            aria-pressed={viewMode === "list"}
            className={`${styles.viewButton} ${viewMode === "list" ? styles.viewButtonActive : ""}`}
            onClick={() => setViewMode("list")}
            type="button"
          >
            <span className={styles.viewIcon} aria-hidden="true">
              <svg fill="none" height="18" viewBox="0 0 18 18" width="18">
                <path d="M3 5h12" />
                <path d="M3 9h12" />
                <path d="M3 13h12" />
              </svg>
            </span>
          </button>
        </div>
      </div>

      {visibleWorks.length ? (
        <>
          {viewMode === "grid" ? (
            <WorksGrid locale={locale} works={paginatedWorks} />
          ) : (
            <div className={styles.listView}>
              {paginatedWorks.map((work) => {
                const title = getLocalizedField(work.title, locale);
                const description = getLocalizedField(work.descriptionShort, locale);
                const authors = getAuthors(work);
                const typeLabel = getWorkTypeLabel(work, locale);

                return (
                  <Link
                    className={styles.listItem}
                    href={localizedHref(locale, `/bibliography/${work.slug}`)}
                    key={work.id}
                  >
                    <span className={styles.listCoverWrap}>
                      {work.cover ? (
                        <Image
                          alt={title}
                          className={styles.listCover}
                          fill
                          sizes="112px"
                          src={assetPath(work.cover)}
                        />
                      ) : (
                        <span className={styles.listPlaceholder}>
                          {typeLabel}
                        </span>
                      )}
                    </span>

                    <span className={styles.listBody}>
                      <span className={styles.listMeta}>
                        <span>{typeLabel}</span>
                        {work.year ? <span>{work.year}</span> : null}
                      </span>
                      <span className={styles.listTitle}>{title}</span>
                      {authors ? (
                        <span className={styles.listAuthors}>{authors}</span>
                      ) : null}
                      {description ? (
                        <span className={styles.listDescription}>{description}</span>
                      ) : null}
                    </span>

                    <span className={styles.listDetails}>
                      {viewContent.details}
                      <span aria-hidden="true">→</span>
                    </span>
                  </Link>
                );
              })}
            </div>
          )}

          {totalPages > 1 ? (
            <nav className={styles.pagination} aria-label={content.paginationLabel}>
              <button
                className={styles.paginationButton}
                disabled={activePage === 1}
                onClick={() => setCurrentPage((page) => Math.max(1, page - 1))}
                type="button"
              >
                {content.previous}
              </button>

              <div className={styles.pageNumbers}>
                {Array.from({ length: totalPages }, (_, index) => {
                  const pageNumber = index + 1;

                  return (
                    <button
                      aria-current={activePage === pageNumber ? "page" : undefined}
                      className={`${styles.pageButton} ${activePage === pageNumber ? styles.pageButtonActive : ""}`}
                      key={pageNumber}
                      onClick={() => setCurrentPage(pageNumber)}
                      type="button"
                    >
                      {pageNumber}
                    </button>
                  );
                })}
              </div>

              <button
                className={styles.paginationButton}
                disabled={activePage === totalPages}
                onClick={() => setCurrentPage((page) => Math.min(totalPages, page + 1))}
                type="button"
              >
                {content.next}
              </button>

              <p className={styles.paginationStatus}>
                {content.pageStatus(activePage, totalPages)}
              </p>
            </nav>
          ) : null}
        </>
      ) : (
        <p className={styles.empty}>
          {normalizedSearchQuery ? content.emptySearch : content.empty}
        </p>
      )}
    </div>
  );
}
