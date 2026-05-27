import type {
  LocaleOption,
  NavigationItem,
} from "@/types/navigation.types";
import type { Locale } from "@/types/common.types";

export type NavigationChromeLabels = {
  closeNavigation: string;
  languageSwitcher: string;
  mobileNavigation: string;
  openNavigation: string;
  primaryNavigation: string;
};

export const navigationItems: NavigationItem[] = [
  {
    label: {
      be: "Алесь Адамовіч",
      ru: "Алесь Адамович",
      en: "Ales Adamovich",
    },
    href: "/biography",
    children: [
      {
        label: {
          be: "Біяграфія",
          ru: "Биография",
          en: "Biography",
        },
        href: "/biography",
      },
      {
        label: {
          be: "Бібліяграфія",
          ru: "Библиография",
          en: "Bibliography",
        },
        href: "/bibliography",
      },
      {
        label: {
          be: "Цытаты",
          ru: "Цитаты",
          en: "Quotes",
        },
        href: "/quotes",
      },
      {
        label: {
          be: "Архіў",
          ru: "Архив",
          en: "Archive",
        },
        href: "/archive",
      },
    ],
  },
  {
    label: {
      be: "Аўдыягід",
      ru: "Аудиогид",
      en: "Audio Guide",
    },
    href: "/audio-guide",
  },
  {
    label: {
      be: "Ініцыятыва",
      ru: "Инициатива",
      en: "Initiative",
    },
    href: "/initiative",
  },
  {
    label: {
      be: "Кантакты",
      ru: "Контакты",
      en: "Contacts",
    },
    href: "/contacts",
  },
];

export const supportNavigationItem: NavigationItem = {
  label: {
    be: "Падтрымаць",
    ru: "Поддержать",
    en: "Support",
  },
  href: "/support",
};

export const localeOptions: LocaleOption[] = [
  {
    locale: "be",
    label: "BY",
  },
  {
    locale: "ru",
    label: "RU",
  },
  {
    locale: "en",
    label: "EN",
  },
];

export const navigationChromeLabels: Record<Locale, NavigationChromeLabels> = {
  be: {
    closeNavigation: "Закрыць навігацыю",
    languageSwitcher: "Пераключэнне мовы",
    mobileNavigation: "Мабільная навігацыя",
    openNavigation: "Адкрыць навігацыю",
    primaryNavigation: "Асноўная навігацыя",
  },
  ru: {
    closeNavigation: "Закрыть навигацию",
    languageSwitcher: "Переключение языка",
    mobileNavigation: "Мобильная навигация",
    openNavigation: "Открыть навигацию",
    primaryNavigation: "Основная навигация",
  },
  en: {
    closeNavigation: "Close navigation",
    languageSwitcher: "Language switcher",
    mobileNavigation: "Mobile navigation",
    openNavigation: "Open navigation",
    primaryNavigation: "Primary navigation",
  },
};
