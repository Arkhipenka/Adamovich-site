import type { Metadata } from "next";

import { AudioGuidePage } from "@/components/audioGuide/AudioGuidePage";
import { resolveLocalePage, type LocalePageProps } from "@/lib/page";
import { localizedAlternates } from "@/lib/seo";

export async function generateMetadata({
  params,
}: LocalePageProps): Promise<Metadata> {
  const { locale, dictionary } = await resolveLocalePage(params);
  const copy = dictionary.pages["audio-guide"];

  return {
    title: copy.title,
    description: copy.description,
    alternates: localizedAlternates(locale, "audio-guide"),
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

export default async function AudioGuideRoute({ params }: LocalePageProps) {
  const { locale, dictionary } = await resolveLocalePage(params);

  return <AudioGuidePage locale={locale} dictionary={dictionary} />;
}
