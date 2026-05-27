import { notFound } from "next/navigation";

import { BiographyPage } from "@/components/biography/BiographyPage";
import { getDictionary } from "@/i18n/dictionaries";
import { resolveLocalePage, type LocalePageProps } from "@/lib/page";

export default async function BiographyRoute({ params }: LocalePageProps) {
  const { locale } = await resolveLocalePage(params);
  const dictionary = await getDictionary(locale);
  if (!dictionary) notFound();

  return <BiographyPage locale={locale} dictionary={dictionary} />;
}
