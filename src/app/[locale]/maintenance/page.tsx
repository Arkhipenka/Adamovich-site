import type { Metadata } from "next";

import { ComingSoonPage, type StateButton } from "@/components/ui/ComingSoonPage";
import { defaultLocale, isLocale } from "@/config/site";
import { serviceStateContent } from "@/data/serviceStates";
import { localizedHref } from "@/lib/localizedHref";
import { resolveLocalePage, type LocalePageProps } from "@/lib/page";

export async function generateMetadata({
  params,
}: LocalePageProps): Promise<Metadata> {
  const { locale } = await params;
  const activeLocale = isLocale(locale) ? locale : defaultLocale;
  const copy = serviceStateContent.maintenance[activeLocale];

  return {
    title: copy.title,
    description: copy.subtitle,
    openGraph: {
      title: copy.title,
      description: copy.subtitle,
    },
    twitter: {
      title: copy.title,
      description: copy.subtitle,
    },
  };
}

export default async function LocalizedMaintenancePage({
  params,
}: LocalePageProps) {
  const { locale } = await resolveLocalePage(params);
  const copy = serviceStateContent.maintenance[locale];
  const buttons: StateButton[] = [
    {
      action: "refresh",
      label: copy.buttons.refresh ?? "Refresh",
      variant: "primary",
    },
    {
      href: localizedHref(locale, "/contacts"),
      label: copy.buttons.contact ?? "Contact",
    },
  ];

  return (
    <ComingSoonPage
      buttons={buttons}
      description={copy.text}
      eyebrow="Service"
      subtitle={copy.subtitle}
      title={copy.title}
    />
  );
}
