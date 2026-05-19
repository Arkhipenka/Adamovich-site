import type { RequiredLocalizedText } from "./common.types";

export type NavigationItem = {
  label: RequiredLocalizedText;
  href: string;
  children?: NavigationItem[];
};

export type LocaleOption = {
  locale: "be" | "ru" | "en";
  label: string;
};
