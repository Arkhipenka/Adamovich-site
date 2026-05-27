import type { Locale } from "@/types/common.types";

export type ServiceStateButtonCopy = {
  biography?: string;
  contact?: string;
  home?: string;
  legacy?: string;
  refresh?: string;
  retry?: string;
};

export type ServiceStateCopy = {
  atmosphericLine?: string;
  buttons: ServiceStateButtonCopy;
  description?: string;
  subtitle?: string;
  text?: string;
  title: string;
};

export const serviceStateContent = {
  notFound: {
    be: {
      title: "Старонка не знойдзена",
      subtitle: "Магчыма, спасылка састарэла або матэрыял быў перанесены.",
      atmosphericLine:
        "Памяць не знікае — яна проста патрабуе дакладнага шляху.",
      buttons: {
        home: "На галоўную",
        biography: "Біяграфія",
        legacy: "Творчая спадчына",
      },
    },
    ru: {
      title: "Страница не найдена",
      subtitle: "Возможно, ссылка устарела или материал был перенесён.",
      atmosphericLine:
        "Память не исчезает — ей просто нужен точный путь.",
      buttons: {
        home: "На главную",
        biography: "Биография",
        legacy: "Творческое наследие",
      },
    },
    en: {
      title: "Page not found",
      subtitle: "The link may be outdated or the material may have moved.",
      atmosphericLine:
        "Memory does not disappear — it simply asks for a precise path.",
      buttons: {
        home: "Home",
        biography: "Biography",
        legacy: "Creative Legacy",
      },
    },
  },
  maintenance: {
    be: {
      title: "Тэхнічныя працы",
      subtitle:
        "Мы абнаўляем сайт, дадаём новыя матэрыялы і паляпшаем працу платформы.",
      text: "Калі ласка, паспрабуйце зайсці пазней.",
      buttons: {
        refresh: "Абнавіць",
        contact: "Кантакты",
      },
    },
    ru: {
      title: "Технические работы",
      subtitle:
        "Мы обновляем сайт, добавляем новые материалы и улучшаем работу платформы.",
      text: "Пожалуйста, попробуйте зайти позже.",
      buttons: {
        refresh: "Обновить",
        contact: "Контакты",
      },
    },
    en: {
      title: "Maintenance",
      subtitle:
        "We are updating the site, adding new materials and improving the platform.",
      text: "Please try again later.",
      buttons: {
        refresh: "Refresh",
        contact: "Contact",
      },
    },
  },
  error: {
    be: {
      title: "Не ўдалося загрузіць матэрыялы",
      text: "Паспрабуйце абнавіць старонку. Калі праблема паўторыцца, напішыце нам.",
      buttons: {
        retry: "Паўтарыць",
        contact: "Напісаць нам",
      },
    },
    ru: {
      title: "Не удалось загрузить материалы",
      text: "Попробуйте обновить страницу. Если проблема повторится, напишите нам.",
      buttons: {
        retry: "Повторить",
        contact: "Написать нам",
      },
    },
    en: {
      title: "Could not load materials",
      text: "Try refreshing the page. If the problem repeats, contact us.",
      buttons: {
        retry: "Retry",
        contact: "Contact",
      },
    },
  },
  empty: {
    be: {
      title: "Нічога не знойдзена",
      text: "Паспрабуйце змяніць запыт або вярнуцца да поўнага спісу матэрыялаў.",
      buttons: {},
    },
    ru: {
      title: "Ничего не найдено",
      text: "Попробуйте изменить запрос или вернуться к полному списку материалов.",
      buttons: {},
    },
    en: {
      title: "Nothing found",
      text: "Try changing the query or return to the full list of materials.",
      buttons: {},
    },
  },
  offline: {
    be: {
      title: "Няма злучэння",
      text: "Праверце інтэрнэт-злучэнне і паспрабуйце абнавіць старонку.",
      buttons: {
        refresh: "Абнавіць",
        contact: "Кантакты",
      },
    },
    ru: {
      title: "Нет соединения",
      text: "Проверьте подключение к интернету и попробуйте обновить страницу.",
      buttons: {
        refresh: "Обновить",
        contact: "Контакты",
      },
    },
    en: {
      title: "You are offline",
      text: "Check your internet connection and try refreshing the page.",
      buttons: {
        refresh: "Refresh",
        contact: "Contact",
      },
    },
  },
} satisfies Record<
  "empty" | "error" | "maintenance" | "notFound" | "offline",
  Record<Locale, ServiceStateCopy>
>;
