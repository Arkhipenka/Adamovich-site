import type { Metadata } from "next";

import { InitiativePage } from "@/components/initiative/InitiativePage";
import { resolveLocalePage, type LocalePageProps } from "@/lib/page";
import { localizedAlternates } from "@/lib/seo";

export async function generateMetadata({
  params,
}: LocalePageProps): Promise<Metadata> {
  const { locale, dictionary } = await resolveLocalePage(params);
  const copy = dictionary.pages.initiative;

  return {
    title: copy.title,
    description: copy.description,
    alternates: localizedAlternates(locale, "initiative"),
    openGraph: {
      title: copy.title,
      description: copy.description,
    },
    twitter: {
      title: copy.title,
      description: copy.description,
    },
  };
}

export default async function InitiativeRoute({ params }: LocalePageProps) {
  const { locale, dictionary } = await resolveLocalePage(params);

  return <InitiativePage locale={locale} dictionary={dictionary} />;
}
