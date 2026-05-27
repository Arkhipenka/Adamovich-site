"use client";

import Link from "next/link";

import styles from "./OfflineState.module.css";
import { serviceStateContent } from "@/data/serviceStates";
import { localizedHref } from "@/lib/localizedHref";
import type { Locale } from "@/types/common.types";

type OfflineStateProps = {
  contactHref?: string;
  locale?: Locale;
};

export function OfflineState({ contactHref, locale = "be" }: OfflineStateProps) {
  const copy = serviceStateContent.offline[locale];

  return (
    <section className={styles.state} role="status" aria-live="polite">
      <p className={styles.eyebrow}>Offline</p>
      <h2 className={styles.title}>{copy.title}</h2>
      <p className={styles.text}>{copy.text}</p>
      <div className={styles.actions}>
        <button
          className={`${styles.button} ${styles.buttonPrimary}`}
          onClick={() => window.location.reload()}
          type="button"
        >
          {copy.buttons.refresh}
        </button>
        <Link
          className={styles.button}
          href={contactHref ?? localizedHref(locale, "/contacts")}
        >
          {copy.buttons.contact}
        </Link>
      </div>
    </section>
  );
}
