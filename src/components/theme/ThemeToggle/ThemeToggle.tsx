"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

import styles from "./ThemeToggle.module.css";

type Theme = "dark" | "light";

const THEME_STORAGE_KEY = "adamovich-theme";

const themeLabels: Record<
  Theme,
  {
    iconLabel: string;
    title: string;
  }
> = {
  dark: {
    iconLabel: "Switch to light theme",
    title: "Dark theme",
  },
  light: {
    iconLabel: "Switch to dark theme",
    title: "Light theme",
  },
};

function getStoredTheme(): Theme {
  if (typeof window === "undefined") return "dark";

  const storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);

  return storedTheme === "light" || storedTheme === "dark" ? storedTheme : "dark";
}

function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const initialTheme = getStoredTheme();

    setTheme(initialTheme);
    applyTheme(initialTheme);
  }, []);

  function toggleTheme() {
    const nextTheme = theme === "dark" ? "light" : "dark";

    setTheme(nextTheme);
    window.localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
    applyTheme(nextTheme);
  }

  const labels = themeLabels[theme];

  return (
    <button
      aria-label={labels.iconLabel}
      className={styles.toggle}
      onClick={toggleTheme}
      title={labels.iconLabel}
      type="button"
    >
      <span className={styles.icon} aria-hidden="true">
        {theme === "dark" ? <Moon size={17} strokeWidth={1.8} /> : <Sun size={17} strokeWidth={1.8} />}
      </span>
      <span className={styles.srOnly}>{labels.title}</span>
    </button>
  );
}
