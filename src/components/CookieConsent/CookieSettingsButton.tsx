"use client";

import type { Locale } from "@/config/site";
import { consentEventName, consentStorageKey } from "./CookieConsent";
import styles from "./CookieSettingsButton.module.css";

type CookieSettingsButtonProps = {
  locale: Locale;
};

const labelByLocale: Record<Locale, string> = {
  be: "Налады cookies",
  en: "Cookie settings",
  ru: "Настройки cookies",
};

export function CookieSettingsButton({ locale }: CookieSettingsButtonProps) {
  const openSettings = () => {
    window.localStorage.removeItem(consentStorageKey);
    window.dispatchEvent(new Event(consentEventName));
  };

  return (
    <button className={styles.button} onClick={openSettings} type="button">
      {labelByLocale[locale]}
    </button>
  );
}
