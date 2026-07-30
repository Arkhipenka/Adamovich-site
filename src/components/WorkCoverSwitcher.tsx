"use client";

import Image from "next/image";
import { useState } from "react";

import styles from "./WorkCoverSwitcher.module.css";

import { assetPath } from "@/config/site";
import { cx } from "@/lib/cx";

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
        <Image
          alt={activeItem.title}
          className={styles.mainImage}
          height={1300}
          priority
          sizes="(max-width: 1180px) 100vw, 360px"
          src={assetPath(activeItem.image)}
          width={900}
        />
        <div className={styles.coverRail} role="tablist">
          {items.map((item, index) => {
            const isActive = index === activeIndex;

            return (
              <button
                aria-label={item.title}
                aria-selected={isActive}
                className={cx(
                  styles.coverCard,
                  isActive && styles.coverCardActive,
                )}
                key={item.id}
                onClick={() => setActiveIndex(index)}
                role="tab"
                type="button"
              >
                <Image
                  alt=""
                  className={styles.coverImage}
                  height={180}
                  loading="lazy"
                  sizes="96px"
                  src={assetPath(item.image)}
                  width={120}
                />
              </button>
            );
          })}
        </div>
      </figure>
    </div>
  );
}
