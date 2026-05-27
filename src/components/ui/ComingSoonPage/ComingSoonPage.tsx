"use client";

import Link from "next/link";

import styles from "./ComingSoonPage.module.css";

export type StateButton = {
  action?: "refresh";
  ariaLabel?: string;
  href?: string;
  label: string;
  variant?: "primary" | "secondary" | "text";
};

export type ComingSoonPageProps = {
  atmosphericLine?: string;
  buttons?: StateButton[];
  description?: string;
  eyebrow?: string;
  mark?: string;
  subtitle?: string;
  title: string;
};

function StateAction({ button }: { button: StateButton }) {
  const className = [
    styles.button,
    button.variant === "primary" ? styles.buttonPrimary : "",
    button.variant === "text" ? styles.buttonText : "",
  ]
    .filter(Boolean)
    .join(" ");

  if (button.action === "refresh") {
    return (
      <button
        aria-label={button.ariaLabel ?? button.label}
        className={className}
        onClick={() => window.location.reload()}
        type="button"
      >
        {button.label}
      </button>
    );
  }

  if (button.href) {
    return (
      <Link
        aria-label={button.ariaLabel}
        className={className}
        href={button.href}
      >
        {button.label}
      </Link>
    );
  }

  return (
    <span aria-label={button.ariaLabel} className={className}>
      {button.label}
    </span>
  );
}

export function ComingSoonPage({
  atmosphericLine,
  buttons = [],
  description,
  eyebrow,
  mark,
  subtitle,
  title,
}: ComingSoonPageProps) {
  return (
    <main className={styles.page}>
      <section className={styles.inner} aria-labelledby="service-state-title">
        <div className={styles.content}>
          {eyebrow ? <p className={styles.eyebrow}>{eyebrow}</p> : null}
          <h1 className={styles.title} id="service-state-title">
            {title}
          </h1>
          {subtitle ? <p className={styles.subtitle}>{subtitle}</p> : null}
          {description ? (
            <p className={styles.description}>{description}</p>
          ) : null}
          {atmosphericLine ? (
            <p className={styles.atmosphericLine}>{atmosphericLine}</p>
          ) : null}
          {buttons.length ? (
            <div className={styles.actions}>
              {buttons.map((button) => (
                <StateAction button={button} key={`${button.label}-${button.href ?? button.action ?? "static"}`} />
              ))}
            </div>
          ) : null}
        </div>

        {mark ? (
          <div className={styles.aside} aria-hidden="true">
            <span className={styles.rule} />
            <span className={styles.mark}>{mark}</span>
            <span className={styles.rule} />
          </div>
        ) : null}
      </section>
    </main>
  );
}
