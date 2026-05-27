import { notFound } from "next/navigation";

import { AudioGuidePage } from "@/components/audioGuide/AudioGuidePage";
import { getDictionary } from "@/i18n/dictionaries";
import { resolveLocalePage, type LocalePageProps } from "@/lib/page";

export default async function AudioGuideRoute({ params }: LocalePageProps) {
  const { locale } = await resolveLocalePage(params);
  const dictionary = await getDictionary(locale);
  if (!dictionary) notFound();

  return <AudioGuidePage locale={locale} dictionary={dictionary} />;
}
