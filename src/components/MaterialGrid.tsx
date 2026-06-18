import styles from "./MaterialGrid.module.css";
import { MaterialCard, type MaterialCardData } from "./MaterialCard";
import type { Locale } from "@/config/site";

type MaterialGridProps = {
  detailsLabel?: string;
  locale?: Locale;
  materials: MaterialCardData[];
};

export const exampleMaterials: MaterialCardData[] = [
  {
    id: "blockade-book",
    type: "book",
    title: "Блокадная книга",
    authors: ["Алесь Адамович", "Даниил Гранин"],
    year: 1979,
    language: "Русский",
    category: "Документальная проза",
    description:
      "Книга, основанная на свидетельствах жителей блокадного Ленинграда, стала одним из важнейших документальных произведений о войне и человеческой памяти.",
    image: "/assets/images/works/blockade-book.jpg",
    href: "/ru/bibliography/blockade-book",
  },
  {
    id: "i-am-from-fire-village",
    type: "book",
    title: "Я из огненной деревни...",
    authors: ["Алесь Адамович", "Янка Брыль", "Владимир Колесник"],
    year: 1975,
    language: "Белорусский, русский",
    category: "Свидетельства",
    description:
      "Документальная книга голосов и воспоминаний о сожжённых деревнях, памяти войны и ответственности свидетельства.",
    image: "/assets/images/works/i-am-from-fire-village.webp",
    href: "/ru/bibliography/i-am-from-fire-village",
  },
  {
    id: "come-and-see",
    type: "film",
    title: "Иди и смотри",
    director: "Элем Климов",
    authors: ["Элем Климов", "Алесь Адамович"],
    year: 1985,
    language: "Русский",
    category: "Кино",
    description:
      "Фильм по сценарию Алеся Адамовича и Элема Климова, ставший одним из самых сильных художественных высказываний о войне.",
    image: "/assets/images/works/come-and-see.jpg",
    href: "/ru/bibliography/come-and-see",
  },
  {
    id: "war-truth-article",
    type: "article",
    title: "Правда о войне",
    source: "Публикация в журнале",
    year: 1976,
    language: "Русский",
    category: "Публицистика",
    description:
      "Материал для будущего расширения раздела статей, публицистики и архивных публикаций Адамовича.",
    image: "/assets/images/hero/hero-books-manuscripts.webp",
    href: "/ru/bibliography",
  },
  {
    id: "adamovich-interview",
    type: "interview",
    title: "Интервью Алеся Адамовича",
    source: "Записано Л. Левиным",
    year: 1992,
    language: "Русский",
    category: "Интервью",
    description:
      "Пример карточки интервью для будущего аудио- и архивного раздела творческого наследия.",
    image: "/assets/images/hero/home-hero-1.webp",
    href: "/ru/bibliography",
  },
];

export function MaterialGrid({
  detailsLabel,
  locale = "ru",
  materials,
}: MaterialGridProps) {
  return (
    <div className={styles.grid}>
      {materials.map((material) => (
        <MaterialCard
          detailsLabel={detailsLabel}
          key={material.id}
          locale={locale}
          material={material}
        />
      ))}
    </div>
  );
}
