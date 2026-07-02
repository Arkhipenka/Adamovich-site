"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { localizedPath, type Locale } from "@/config/site";
import styles from "./CookieConsent.module.css";

export const consentStorageKey = "adamovich:analytics-consent";
export const consentEventName = "adamovich:analytics-consent-change";
const gaId = process.env.NEXT_PUBLIC_GA_ID;

type CookieConsentProps = {
  locale: Locale;
};

const contentByLocale: Record<
  Locale,
  {
    eyebrow: string;
    title: string;
    text: string;
    details: string;
    accept: string;
    reject: string;
  }
> = {
  be: {
    eyebrow: "Прыватнасць",
    title: "Аналітыка сайта",
    text: "Мы выкарыстоўваем Google Analytics, каб разумець, якія старонкі дапамагаюць наведвальнікам. Аналітыка ўключыцца толькі пасля вашай згоды.",
    details: "Падрабязней",
    accept: "Прыняць",
    reject: "Адхіліць",
  },
  en: {
    eyebrow: "Privacy",
    title: "Site Analytics",
    text: "We use Google Analytics to understand which pages are useful to visitors. Analytics will only be enabled after your consent.",
    details: "Learn more",
    accept: "Accept",
    reject: "Reject",
  },
  ru: {
    eyebrow: "Приватность",
    title: "Аналитика сайта",
    text: "Мы используем Google Analytics, чтобы понимать, какие страницы помогают посетителям. Аналитика включится только после вашего согласия.",
    details: "Подробнее",
    accept: "Принять",
    reject: "Отклонить",
  },
};

export function CookieConsent({ locale }: CookieConsentProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!gaId) {
      return;
    }

    const syncConsent = () => {
      const savedConsent = window.localStorage.getItem(consentStorageKey);
      setIsVisible(savedConsent !== "accepted" && savedConsent !== "rejected");
    };

    syncConsent();
    window.addEventListener(consentEventName, syncConsent);

    return () => {
      window.removeEventListener(consentEventName, syncConsent);
    };
  }, []);

  if (!gaId || !isVisible) {
    return null;
  }

  const content = contentByLocale[locale];

  const saveConsent = (value: "accepted" | "rejected") => {
    window.localStorage.setItem(consentStorageKey, value);
    window.dispatchEvent(new Event(consentEventName));
    setIsVisible(false);
  };

  return (
    <section
      aria-labelledby="cookie-consent-title"
      className={styles.banner}
      role="dialog"
    >
      <div className={styles.mark} aria-hidden="true" />
      <div className={styles.copy}>
        <p className={styles.eyebrow}>{content.eyebrow}</p>
        <h2 className={styles.title} id="cookie-consent-title">
          {content.title}
        </h2>
        <p className={styles.text}>{content.text}</p>
        <Link className={styles.detailsLink} href={`${localizedPath(locale, "privacy")}/`}>
          {content.details}
        </Link>
      </div>
      <div className={styles.actions}>
        <button
          className={`${styles.button} ${styles.primary}`}
          onClick={() => saveConsent("accepted")}
          type="button"
        >
          {content.accept}
        </button>
        <button
          className={`${styles.button} ${styles.secondary}`}
          onClick={() => saveConsent("rejected")}
          type="button"
        >
          {content.reject}
        </button>
      </div>
    </section>
  );
}
