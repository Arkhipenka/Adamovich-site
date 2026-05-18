import { AboutWriter } from "@/components/home/AboutWriter";
import { AudioGuidePreview } from "@/components/home/AudioGuidePreview";
import { BibliographyPreview } from "@/components/home/BibliographyPreview";
import { HomeHero } from "@/components/home/HomeHero";
import { InitiativePreview } from "@/components/home/InitiativePreview";
import { resolveLocalePage, type LocalePageProps } from "@/lib/page";

export default async function HomePage({ params }: LocalePageProps) {
  const { locale } = await resolveLocalePage(params);

  return (
    <>
      <HomeHero locale={locale} />
      <AboutWriter locale={locale} />
      <AudioGuidePreview locale={locale} />
      <BibliographyPreview locale={locale} />
      <InitiativePreview locale={locale} />
    </>
  );
}
