"use client";

import { useEffect, useMemo, useState } from "react";

import styles from "./WorkDetail.module.css";

export type WorkDetailSectionId =
  | "annotation"
  | "history"
  | "awards"
  | "quotes"
  | "reviews"
  | "materials"
  | "sources";

type WorkDetailQuote = {
  id: string;
  sourceNote?: string;
  text: string;
};

type WorkDetailEntry = {
  description?: string;
  href?: string;
  id: string;
  meta?: string;
  title?: string;
};

type WorkDetailSource = {
  href?: string;
  id: string;
  title: string;
};

export type WorkDetailSection = {
  entries?: WorkDetailEntry[];
  id: WorkDetailSectionId;
  paragraphs?: string[];
  quotes?: WorkDetailQuote[];
  sources?: WorkDetailSource[];
  title: string;
};

type WorkDetailSectionsProps = {
  ariaLabel: string;
  emptyLabel: string;
  sections: WorkDetailSection[];
};

const fallbackSectionId: WorkDetailSectionId = "annotation";

function isSectionId(value: string, sections: WorkDetailSection[]) {
  return sections.some((section) => section.id === value);
}

export function WorkDetailSections({
  ariaLabel,
  emptyLabel,
  sections,
}: WorkDetailSectionsProps) {
  const initialId = useMemo(() => sections[0]?.id ?? fallbackSectionId, [sections]);
  const [activeId, setActiveId] = useState<WorkDetailSectionId>(initialId);

  useEffect(() => {
    const readHash = () => {
      const hash = window.location.hash.replace("#", "");
      setActiveId(
        isSectionId(hash, sections)
          ? (hash as WorkDetailSectionId)
          : fallbackSectionId,
      );
    };

    readHash();
    window.addEventListener("hashchange", readHash);

    return () => window.removeEventListener("hashchange", readHash);
  }, [sections]);

  const activeSection =
    sections.find((section) => section.id === activeId) ?? sections[0];

  function handleSectionChange(id: WorkDetailSectionId) {
    setActiveId(id);
    window.history.replaceState(null, "", `#${id}`);
  }

  if (!activeSection) return null;

  const hasParagraphs = Boolean(activeSection.paragraphs?.length);
  const hasQuotes = Boolean(activeSection.quotes?.length);
  const hasEntries = Boolean(activeSection.entries?.length);
  const hasSources = Boolean(activeSection.sources?.length);
  const isEmpty = !hasParagraphs && !hasQuotes && !hasEntries && !hasSources;

  return (
    <section className={styles.detailSections} aria-label={ariaLabel}>
      <nav className={styles.sectionNav} aria-label={ariaLabel}>
        {sections.map((section) => {
          const isActive = section.id === activeSection.id;

          return (
            <button
              aria-current={isActive ? "true" : undefined}
              className={isActive ? styles.sectionNavActive : undefined}
              key={section.id}
              onClick={() => handleSectionChange(section.id)}
              type="button"
            >
              {section.title}
            </button>
          );
        })}
      </nav>

      <article
        className={styles.detailSection}
        id={activeSection.id}
        key={activeSection.id}
      >
        {hasParagraphs
          ? activeSection.paragraphs?.map((text) => <p key={text}>{text}</p>)
          : null}

        {hasQuotes ? (
          <div className={styles.entryList}>
            {activeSection.quotes?.map((quote) => (
              <blockquote className={styles.quote} key={quote.id}>
                <p>{quote.text}</p>
                {quote.sourceNote ? <cite>{quote.sourceNote}</cite> : null}
              </blockquote>
            ))}
          </div>
        ) : null}

        {hasEntries ? (
          <div className={styles.entryList}>
            {activeSection.entries?.map((entry) => {
              const content = (
                <>
                  {entry.title ? <strong>{entry.title}</strong> : null}
                  {entry.description ? <p>{entry.description}</p> : null}
                  {entry.meta ? <span>{entry.meta}</span> : null}
                </>
              );

              return entry.href ? (
                <a className={styles.entryCard} href={entry.href} key={entry.id}>
                  {content}
                </a>
              ) : (
                <div className={styles.entryCard} key={entry.id}>
                  {content}
                </div>
              );
            })}
          </div>
        ) : null}

        {hasSources ? (
          <div className={styles.sourceList}>
            {activeSection.sources?.map((source) =>
              source.href ? (
                <a href={source.href} key={source.id}>
                  {source.title}
                </a>
              ) : (
                <span key={source.id}>{source.title}</span>
              ),
            )}
          </div>
        ) : null}

        {isEmpty ? (
          <div className={styles.emptySection}>
            <span>{emptyLabel}</span>
          </div>
        ) : null}
      </article>
    </section>
  );
}
