import type { Metadata } from "next";

import {
  BibliographyPage,
  getBibliographyPageMetadata,
} from "@/components/bibliography/BibliographyPage";
import { resolveLocalePage, type LocalePageProps } from "@/lib/page";
import { getPublishedWorks } from "@/lib/works";

type BibliographyMetadataProps = {
  params: Promise<{
    locale: string;
  }>;
};

export async function generateMetadata({
  params,
}: BibliographyMetadataProps): Promise<Metadata> {
  const { locale } = await resolveLocalePage(params);

  return getBibliographyPageMetadata(locale);
}

export default async function BibliographyRoute({ params }: LocalePageProps) {
  const { locale } = await resolveLocalePage(params);

  return <BibliographyPage locale={locale} works={getPublishedWorks()} />;
}
