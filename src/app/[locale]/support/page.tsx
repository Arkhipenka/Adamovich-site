import type { Metadata } from "next";

import { SupportPage } from "@/components/support/SupportPage";
import { resolveLocalePage, type LocalePageProps } from "@/lib/page";
import { localizedAlternates } from "@/lib/seo";

export async function generateMetadata({
  params,
}: LocalePageProps): Promise<Metadata> {
  const { locale, dictionary } = await resolveLocalePage(params);
  const copy = dictionary.pages.support;

  return {
    title: copy.title,
    description: copy.description,
    alternates: localizedAlternates(locale, "support"),
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

export default async function SupportRoute({ params }: LocalePageProps) {
  const { locale, dictionary } = await resolveLocalePage(params);

  return <SupportPage locale={locale} dictionary={dictionary} />;
}
