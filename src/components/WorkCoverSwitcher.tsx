"use client";

import { useState } from "react";

import styles from "./WorkCoverSwitcher.module.css";

import { assetPath } from "@/config/site";

export type WorkCoverSwitcherItem = {
  id: string;
  image: string;
  meta: string;
  title: string;
};

type WorkCoverSwitcherProps = {
  items: WorkCoverSwitcherItem[];
};

export function WorkCoverSwitcher({ items }: WorkCoverSwitcherProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = items[activeIndex];

  if (!activeItem) return null;

  return (
    <div className={styles.switcher}>
      <figure className={styles.mainCover}>
        <img
          alt={activeItem.title}
          className={styles.mainImage}
          src={assetPath(activeItem.image)}
        />
        <div className={styles.coverRail} role="tablist">
          {items.map((item, index) => {
            const isActive = index === activeIndex;

            return (
              <button
                aria-label={item.title}
                aria-selected={isActive}
                className={[
                  styles.coverCard,
                  isActive ? styles.coverCardActive : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
                key={item.id}
                onClick={() => setActiveIndex(index)}
                role="tab"
                type="button"
              >
                <img
                  alt=""
                  className={styles.coverImage}
                  loading="lazy"
                  src={assetPath(item.image)}
                />
              </button>
            );
          })}
        </div>
      </figure>
    </div>
  );
}
