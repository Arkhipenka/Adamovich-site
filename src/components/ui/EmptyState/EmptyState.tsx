import Link from "next/link";

import styles from "./EmptyState.module.css";
import { serviceStateContent } from "@/data/serviceStates";
import type { Locale } from "@/types/common.types";

type EmptyStateProps = {
  actionHref?: string;
  actionLabel?: string;
  className?: string;
  locale?: Locale;
  text?: string;
  title?: string;
};

export function EmptyState({
  actionHref,
  actionLabel,
  className,
  locale = "be",
  text,
  title,
}: EmptyStateProps) {
  const copy = serviceStateContent.empty[locale];
  const classes = [styles.state, className].filter(Boolean).join(" ");

  return (
    <section className={classes}>
      <p className={styles.eyebrow}>Archive</p>
      <h2 className={styles.title}>{title ?? copy.title}</h2>
      <p className={styles.text}>{text ?? copy.text}</p>
      {actionHref && actionLabel ? (
        <Link className={styles.link} href={actionHref}>
          {actionLabel}
          <span aria-hidden="true">→</span>
        </Link>
      ) : null}
    </section>
  );
}
