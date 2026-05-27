"use client";

import Link from "next/link";

import styles from "./ErrorState.module.css";
import { serviceStateContent } from "@/data/serviceStates";
import { localizedHref } from "@/lib/localizedHref";
import type { Locale } from "@/types/common.types";

type ErrorStateProps = {
  className?: string;
  contactHref?: string;
  contactLabel?: string;
  locale?: Locale;
  onRetry?: () => void;
  retryLabel?: string;
  text?: string;
  title?: string;
};

export function ErrorState({
  className,
  contactHref,
  contactLabel,
  locale = "be",
  onRetry,
  retryLabel,
  text,
  title,
}: ErrorStateProps) {
  const copy = serviceStateContent.error[locale];
  const classes = [styles.state, className].filter(Boolean).join(" ");

  return (
    <section className={classes} role="status" aria-live="polite">
      <p className={styles.eyebrow}>Error</p>
      <h2 className={styles.title}>{title ?? copy.title}</h2>
      <p className={styles.text}>{text ?? copy.text}</p>
      <div className={styles.actions}>
        <button
          className={`${styles.button} ${styles.buttonPrimary}`}
          onClick={onRetry ?? (() => window.location.reload())}
          type="button"
        >
          {retryLabel ?? copy.buttons.retry}
        </button>
        <Link
          className={styles.button}
          href={contactHref ?? localizedHref(locale, "/contacts")}
        >
          {contactLabel ?? copy.buttons.contact}
        </Link>
      </div>
    </section>
  );
}
