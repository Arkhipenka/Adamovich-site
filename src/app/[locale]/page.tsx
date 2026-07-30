import type { Metadata } from "next";

import { JsonLd } from "@/components/JsonLd";
import { AboutWriter } from "@/components/home/AboutWriter";
import { AudioGuidePreview } from "@/components/home/AudioGuidePreview";
import { HomeHero } from "@/components/home/HomeHero";
import { InitiativePreview } from "@/components/home/InitiativePreview";
import { FeaturedWorks } from "@/components/FeaturedWorks";
import { resolveLocalePage, type LocalePageProps } from "@/lib/page";
import { localizedAlternates } from "@/lib/seo";
import { createOrganizationJsonLd } from "@/lib/structuredData";
import styles from "./page.module.css";

export async function generateMetadata({
  params,
}: LocalePageProps): Promise<Metadata> {
  const { locale, dictionary } = await resolveLocalePage(params);
  const copy = dictionary.pages[""];

  return {
    title: copy.title,
    description: copy.description,
    alternates: localizedAlternates(locale),
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

export default async function HomePage({ params }: LocalePageProps) {
  const { locale } = await resolveLocalePage(params);

  return (
    <>
      <JsonLd data={createOrganizationJsonLd(locale)} />
      <HomeHero locale={locale} />
      <div className={styles.contentField}>
        <AboutWriter locale={locale} />
        <AudioGuidePreview locale={locale} />
        <FeaturedWorks locale={locale} />
        <InitiativePreview locale={locale} />
      </div>
    </>
  );
}
