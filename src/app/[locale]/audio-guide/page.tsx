import { AudioGuidePage } from "@/components/audioGuide/AudioGuidePage";
import { resolveLocalePage, type LocalePageProps } from "@/lib/page";

export default async function AudioGuideRoute({ params }: LocalePageProps) {
  const { locale, dictionary } = await resolveLocalePage(params);

  return <AudioGuidePage locale={locale} dictionary={dictionary} />;
}
