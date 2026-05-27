"use client";

import { usePathname } from "next/navigation";

import { ComingSoonPage, type StateButton } from "@/components/ui/ComingSoonPage";
import { isLocale } from "@/config/site";
import { serviceStateContent } from "@/data/serviceStates";
import { localizedHref } from "@/lib/localizedHref";
import type { Locale } from "@/types/common.types";

type NotFoundPageProps = {
  locale?: Locale;
};

function getLocaleFromPathname(pathname: string): Locale {
  const [, segment] = pathname.split("/");

  return isLocale(segment) ? segment : "be";
}

export function NotFoundPage({ locale }: NotFoundPageProps) {
  const pathname = usePathname();
  const activeLocale = locale ?? getLocaleFromPathname(pathname);
  const copy = serviceStateContent.notFound[activeLocale];

  const buttons: StateButton[] = [
    {
      href: localizedHref(activeLocale, "/"),
      label: copy.buttons.home ?? "Home",
      variant: "primary",
    },
    {
      href: localizedHref(activeLocale, "/biography"),
      label: copy.buttons.biography ?? "Biography",
    },
    {
      href: localizedHref(activeLocale, "/bibliography"),
      label: copy.buttons.legacy ?? "Creative Legacy",
      variant: "text",
    },
  ];

  return (
    <ComingSoonPage
      atmosphericLine={copy.atmosphericLine}
      buttons={buttons}
      eyebrow="404"
      mark="404"
      subtitle={copy.subtitle}
      title={copy.title}
    />
  );
}
