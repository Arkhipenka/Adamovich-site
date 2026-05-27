import { notFound } from "next/navigation";

import { InitiativePage } from "@/components/initiative/InitiativePage";
import { getDictionary } from "@/i18n/dictionaries";
import { resolveLocalePage, type LocalePageProps } from "@/lib/page";

export default async function InitiativeRoute({ params }: LocalePageProps) {
  const { locale } = await resolveLocalePage(params);
  const dictionary = await getDictionary(locale);
  if (!dictionary) notFound();

  return <InitiativePage locale={locale} dictionary={dictionary} />;
}
