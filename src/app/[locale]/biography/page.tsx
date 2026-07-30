import type { Metadata } from "next";

import { JsonLd } from "@/components/JsonLd";
import { BiographyPage } from "@/components/biography/BiographyPage";
import { resolveLocalePage, type LocalePageProps } from "@/lib/page";
import { localizedAlternates } from "@/lib/seo";
import { createPersonJsonLd } from "@/lib/structuredData";

export async function generateMetadata({
  params,
}: LocalePageProps): Promise<Metadata> {
  const { locale, dictionary } = await resolveLocalePage(params);
  const copy = dictionary.pages.biography;

  return {
    title: copy.title,
    description: copy.description,
    alternates: localizedAlternates(locale, "biography"),
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

export default async function BiographyRoute({ params }: LocalePageProps) {
  const { locale, dictionary } = await resolveLocalePage(params);

  return (
    <>
      <JsonLd data={createPersonJsonLd(locale)} />
      <BiographyPage locale={locale} dictionary={dictionary} />
    </>
  );
}
