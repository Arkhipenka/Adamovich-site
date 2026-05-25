"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import styles from "./MaterialCard.module.css";
import { assetPath, type Locale } from "@/config/site";

export type MaterialCardType =
  | "book"
  | "film"
  | "article"
  | "script"
  | "interview"
  | "essay"
  | "archive"
  | "research";

export type MaterialCardData = {
  id: string;
  type: MaterialCardType;
  title: string;
  authors?: string[];
  director?: string;
  source?: string;
  year?: string | number;
  language?: string;
  category?: string;
  description?: string;
  image?: string;
  href: string;
};

type MaterialCardProps = {
  detailsLabel?: string;
  locale?: Locale;
  material: MaterialCardData;
};

const typeLabels: Record<Locale, Record<MaterialCardType, string>> = {
  ru: {
    book: "Книга",
    film: "Фильм",
    article: "Статья",
    script: "Сценарий",
    interview: "Интервью",
    essay: "Публицистика",
    archive: "Архив",
    research: "Исследование",
  },
  be: {
    book: "Кніга",
    film: "Фільм",
    article: "Артыкул",
    script: "Сцэнар",
    interview: "Інтэрв'ю",
    essay: "Публіцыстыка",
    archive: "Архіў",
    research: "Даследаванне",
  },
  en: {
    book: "Book",
    film: "Film",
    article: "Article",
    script: "Script",
    interview: "Interview",
    essay: "Essay",
    archive: "Archive",
    research: "Research",
  },
};

const metaLabels = {
  ru: {
    year: "Год",
    language: "Язык",
    type: "Тип",
    category: "Раздел",
    details: "Подробнее",
  },
  be: {
    year: "Год",
    language: "Мова",
    type: "Тып",
    category: "Раздзел",
    details: "Даведацца больш",
  },
  en: {
    year: "Year",
    language: "Language",
    type: "Type",
    category: "Section",
    details: "Read more",
  },
} satisfies Record<Locale, Record<string, string>>;

function getByline(material: MaterialCardData) {
  if (material.type === "film" && material.director) return material.director;
  if ((material.type === "article" || material.type === "interview") && material.source) {
    return material.source;
  }

  return material.authors?.join(", ") ?? "";
}

export function MaterialCard({
  detailsLabel,
  locale = "ru",
  material,
}: MaterialCardProps) {
  const [open, setOpen] = useState(false);
  const typeLabel = typeLabels[locale][material.type];
  const labels = metaLabels[locale];
  const byline = getByline(material);
  const year = material.year ? String(material.year) : "";
  const metadata = [
    year ? [labels.year, year] : null,
    material.language ? [labels.language, material.language] : null,
    [labels.type, typeLabel],
    material.category ? [labels.category, material.category] : null,
  ].filter((item): item is string[] => Boolean(item));

  function handleClick(event: React.MouseEvent<HTMLAnchorElement>) {
    const canHover = window.matchMedia("(hover: hover)").matches;

    if (!canHover && !open) {
      event.preventDefault();
      setOpen(true);
    }
  }

  return (
    <Link
      className={`${styles.card} ${open ? styles.cardOpen : ""}`}
      href={material.href}
      onClick={handleClick}
    >
      {material.image ? (
        <Image
          alt={material.title}
          className={styles.image}
          fill
          sizes="(max-width: 680px) calc(100vw - 40px), (max-width: 1180px) calc((100vw - 96px) / 3), (max-width: 1500px) calc((100vw - 144px) / 3), 360px"
          src={assetPath(material.image)}
        />
      ) : (
        <span className={styles.placeholder} aria-hidden="true">
          <span className={styles.placeholderType}>{typeLabel}</span>
          <span className={styles.placeholderTitle}>{material.title}</span>
        </span>
      )}

      <span className={styles.typeLabel}>{typeLabel}</span>

      <span className={styles.panel}>
        <span className={styles.compact}>
          <span className={styles.title}>{material.title}</span>
          {byline ? <span className={styles.byline}>{byline}</span> : null}
          {year ? <span className={styles.year}>{year}</span> : null}
        </span>

        <span className={styles.expanded}>
          {material.description ? (
            <span className={styles.description}>{material.description}</span>
          ) : null}
          <span className={styles.meta}>
            {metadata.map(([label, value]) => (
              <span className={styles.metaItem} key={`${label}-${value}`}>
                <span className={styles.metaLabel}>{label}</span>
                <span className={styles.metaValue}>{value}</span>
              </span>
            ))}
          </span>
          <span className={styles.details}>
            {detailsLabel ?? labels.details}
            <span aria-hidden="true">→</span>
          </span>
        </span>
      </span>
    </Link>
  );
}
