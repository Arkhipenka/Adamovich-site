import { BiographyPage } from "@/components/biography/BiographyPage";
import { resolveLocalePage, type LocalePageProps } from "@/lib/page";

export default async function BiographyRoute({ params }: LocalePageProps) {
  const { locale, dictionary } = await resolveLocalePage(params);

  return <BiographyPage locale={locale} dictionary={dictionary} />;
}
