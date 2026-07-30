"use client";

import Image from "next/image";
import { useEffect, useMemo, useState, type MouseEvent } from "react";
import { createPortal } from "react-dom";

import styles from "./WorkDetail.module.css";

import { assetPath } from "@/config/site";
import { cx } from "@/lib/cx";

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
  author?: string;
  authorRole?: string;
  description?: string;
  href?: string;
  id: string;
  image?: string;
  imageAlt?: string;
  meta?: string;
  paragraphs?: readonly string[];
  title?: string;
};

type WorkDetailSource = {
  href?: string;
  id: string;
  title: string;
};

type WorkDetailImageModalLabels = {
  close: string;
  next: string;
  open: string;
  previous: string;
};

export type WorkDetailSection = {
  emptyLabel?: string;
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
  imageModalLabels?: WorkDetailImageModalLabels;
  sections: WorkDetailSection[];
};

const fallbackSectionId: WorkDetailSectionId = "annotation";
const defaultImageModalLabels: WorkDetailImageModalLabels = {
  close: "Close image",
  next: "Next image",
  open: "Open image",
  previous: "Previous image",
};

function isSectionId(value: string, sections: WorkDetailSection[]) {
  return sections.some((section) => section.id === value);
}

function getWrappedIndex(index: number, step: number, length: number) {
  return (index + step + length) % length;
}

export function WorkDetailSections({
  ariaLabel,
  emptyLabel,
  imageModalLabels = defaultImageModalLabels,
  sections,
}: WorkDetailSectionsProps) {
  const initialId = useMemo(() => sections[0]?.id ?? fallbackSectionId, [sections]);
  const [activeId, setActiveId] = useState<WorkDetailSectionId>(initialId);
  const [selectedMaterialImageIndex, setSelectedMaterialImageIndex] =
    useState<number | null>(null);

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
  const materialImages = useMemo(() => {
    if (activeSection?.id !== "materials") return [];

    return (activeSection.entries ?? [])
      .filter((entry): entry is WorkDetailEntry & { image: string } =>
        Boolean(entry.image),
      )
      .map((entry) => ({
        alt: entry.imageAlt ?? entry.title ?? ariaLabel,
        caption: entry.title,
        id: entry.id,
        meta: entry.meta,
        src: entry.href?.startsWith("/") ? entry.href : entry.image,
      }));
  }, [activeSection, ariaLabel]);
  const activeMaterialImage =
    selectedMaterialImageIndex === null
      ? null
      : materialImages[selectedMaterialImageIndex] ?? null;
  const isMaterialImageModalOpen = Boolean(activeMaterialImage);
  const canBrowseMaterialImages = materialImages.length > 1;

  useEffect(() => {
    if (!isMaterialImageModalOpen) return;

    const scrollY = window.scrollY;
    const previousHtmlOverflow = document.documentElement.style.overflow;
    const previousBodyOverflow = document.body.style.overflow;
    const previousBodyPosition = document.body.style.position;
    const previousBodyTop = document.body.style.top;
    const previousBodyLeft = document.body.style.left;
    const previousBodyRight = document.body.style.right;
    const previousBodyWidth = document.body.style.width;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setSelectedMaterialImageIndex(null);
        return;
      }

      if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
        event.preventDefault();
        setSelectedMaterialImageIndex((current) => {
          if (current === null || materialImages.length < 2) return current;

          const step = event.key === "ArrowRight" ? 1 : -1;
          return getWrappedIndex(current, step, materialImages.length);
        });
      }
    }

    document.body.setAttribute("data-image-modal-open", "true");
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.left = "0";
    document.body.style.right = "0";
    document.body.style.width = "100%";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.removeAttribute("data-image-modal-open");
      document.documentElement.style.overflow = previousHtmlOverflow;
      document.body.style.overflow = previousBodyOverflow;
      document.body.style.position = previousBodyPosition;
      document.body.style.top = previousBodyTop;
      document.body.style.left = previousBodyLeft;
      document.body.style.right = previousBodyRight;
      document.body.style.width = previousBodyWidth;
      window.removeEventListener("keydown", handleKeyDown);
      window.scrollTo(0, scrollY);
    };
  }, [isMaterialImageModalOpen, materialImages.length]);

  function handleSectionChange(id: WorkDetailSectionId) {
    setSelectedMaterialImageIndex(null);
    setActiveId(id);
    window.history.replaceState(null, "", `#${id}`);
  }

  function openMaterialImage(entryId: string) {
    const index = materialImages.findIndex((image) => image.id === entryId);

    if (index === -1) return;

    setSelectedMaterialImageIndex(index);
  }

  function showMaterialImage(step: number) {
    setSelectedMaterialImageIndex((current) => {
      if (current === null || materialImages.length < 2) return current;

      return getWrappedIndex(current, step, materialImages.length);
    });
  }

  function shouldOpenLinkNormally(event: MouseEvent<HTMLAnchorElement>) {
    return (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.altKey ||
      event.ctrlKey ||
      event.metaKey ||
      event.shiftKey
    );
  }

  if (!activeSection) return null;

  const hasParagraphs = Boolean(activeSection.paragraphs?.length);
  const hasQuotes = Boolean(activeSection.quotes?.length);
  const hasEntries = Boolean(activeSection.entries?.length);
  const hasSources = Boolean(activeSection.sources?.length);
  const isEmpty = !hasParagraphs && !hasQuotes && !hasEntries && !hasSources;
  const isMaterialsSection = activeSection.id === "materials";
  const detailSectionClassName = isMaterialsSection
    ? `${styles.detailSection} ${styles.detailSectionMaterials}`
    : styles.detailSection;
  const entryListClassName = isMaterialsSection
    ? `${styles.entryList} ${styles.materialGrid}`
    : styles.entryList;

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
        className={detailSectionClassName}
        id={activeSection.id}
        key={activeSection.id}
      >
        {hasParagraphs
          ? activeSection.paragraphs?.map((text) => <p key={text}>{text}</p>)
          : null}

        {hasQuotes ? (
          <div className={entryListClassName}>
            {activeSection.quotes?.map((quote) => (
              <blockquote className={styles.quote} key={quote.id}>
                <p>{quote.text}</p>
                {quote.sourceNote ? <cite>{quote.sourceNote}</cite> : null}
              </blockquote>
            ))}
          </div>
        ) : null}

        {hasEntries ? (
          <div className={entryListClassName}>
            {activeSection.entries?.map((entry) => {
              const entryHref = entry.href?.startsWith("/")
                ? assetPath(entry.href)
                : entry.href;
              const initials =
                entry.author
                  ?.split(/\s+/)
                  .filter(Boolean)
                  .slice(0, 2)
                  .map((part) => part[0])
                  .join("")
                  .toUpperCase() ?? "";
              const content = (
                <>
                  {entry.author || entry.image ? (
                    <span className={styles.entryAuthorMedia}>
                      {entry.image ? (
                        <Image
                          alt={entry.imageAlt ?? entry.author ?? ""}
                          fill
                          sizes={isMaterialsSection ? "(max-width: 760px) 100vw, 360px" : "68px"}
                          src={assetPath(entry.image)}
                        />
                      ) : (
                        <span aria-hidden="true">{initials}</span>
                      )}
                    </span>
                  ) : null}
                  <span className={styles.entryBody}>
                    {entry.title ? <strong>{entry.title}</strong> : null}
                    {entry.author || entry.authorRole ? (
                      <span className={styles.entryAuthor}>
                        {entry.author}
                        {entry.author && entry.authorRole ? " · " : ""}
                        {entry.authorRole}
                      </span>
                    ) : null}
                    {entry.description ? <p>{entry.description}</p> : null}
                    {entry.paragraphs?.length ? (
                      <span className={styles.entryTextFlow}>
                        {entry.paragraphs.map((paragraph) => (
                          <p key={paragraph}>{paragraph}</p>
                        ))}
                      </span>
                    ) : null}
                    {entry.meta ? <span>{entry.meta}</span> : null}
                  </span>
                </>
              );

              const entryClassName = cx(
                styles.entryCard,
                entry.image && !entry.author && styles.entryCardWithImage,
                isMaterialsSection && styles.materialCard,
              );
              const canOpenMaterialImage = isMaterialsSection && Boolean(entry.image);
              const modalLabel = entry.title
                ? `${imageModalLabels.open}: ${entry.title}`
                : imageModalLabels.open;

              if (canOpenMaterialImage) {
                if (entryHref) {
                  return (
                    <a
                      aria-label={modalLabel}
                      className={entryClassName}
                      href={entryHref}
                      key={entry.id}
                      onClick={(event) => {
                        if (shouldOpenLinkNormally(event)) return;

                        event.preventDefault();
                        openMaterialImage(entry.id);
                      }}
                    >
                      {content}
                    </a>
                  );
                }

                return (
                  <button
                    aria-label={modalLabel}
                    className={cx(entryClassName, styles.entryCardButton)}
                    key={entry.id}
                    onClick={() => openMaterialImage(entry.id)}
                    type="button"
                  >
                    {content}
                  </button>
                );
              }

              return entryHref ? (
                <a className={entryClassName} href={entryHref} key={entry.id}>
                  {content}
                </a>
              ) : (
                <div className={entryClassName} key={entry.id}>
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
            {isMaterialsSection ? (
              <span className={styles.emptySectionIcon} aria-hidden="true">
                <svg viewBox="0 0 24 24" focusable="false">
                  <path d="M4.5 5.5h10.75a3.25 3.25 0 0 1 3.25 3.25v10.5H7.25A2.75 2.75 0 0 1 4.5 16.5v-11Z" />
                  <path d="M7.25 19.25A2.75 2.75 0 0 1 4.5 16.5" />
                  <path d="M8 8.25h6.5M8 11.25h7.5M8 14.25h5.5" />
                </svg>
              </span>
            ) : null}
            <span>{activeSection.emptyLabel ?? emptyLabel}</span>
          </div>
        ) : null}
      </article>

      {activeMaterialImage && typeof document !== "undefined"
        ? createPortal(
            <div
              aria-label={activeMaterialImage.alt}
              aria-modal="true"
              className={styles.imageModal}
              onClick={() => setSelectedMaterialImageIndex(null)}
              role="dialog"
            >
              <div
                className={styles.imageModalContent}
                onClick={(event) => event.stopPropagation()}
              >
                <button
                  aria-label={imageModalLabels.close}
                  autoFocus
                  className={styles.imageModalClose}
                  onClick={() => setSelectedMaterialImageIndex(null)}
                  type="button"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
                <div className={styles.imageModalFrame}>
                  <Image
                    alt={activeMaterialImage.alt}
                    className={styles.imageModalImage}
                    fill
                    sizes="100vw"
                    src={assetPath(activeMaterialImage.src)}
                  />
                  {canBrowseMaterialImages ? (
                    <div className={styles.imageModalControls}>
                      <button
                        aria-label={imageModalLabels.previous}
                        onClick={() => showMaterialImage(-1)}
                        type="button"
                      >
                        <span aria-hidden="true">&lsaquo;</span>
                      </button>
                      <button
                        aria-label={imageModalLabels.next}
                        onClick={() => showMaterialImage(1)}
                        type="button"
                      >
                        <span aria-hidden="true">&rsaquo;</span>
                      </button>
                    </div>
                  ) : null}
                </div>
                {activeMaterialImage.caption || activeMaterialImage.meta ? (
                  <div className={styles.imageModalCaption}>
                    {activeMaterialImage.caption ? (
                      <p>{activeMaterialImage.caption}</p>
                    ) : null}
                    {activeMaterialImage.meta ? (
                      <span>{activeMaterialImage.meta}</span>
                    ) : null}
                  </div>
                ) : null}
              </div>
            </div>,
            document.body,
          )
        : null}
    </section>
  );
}
