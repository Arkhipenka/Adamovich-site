import { InitiativePage } from "@/components/initiative/InitiativePage";
import { resolveLocalePage, type LocalePageProps } from "@/lib/page";

export default async function InitiativeRoute({ params }: LocalePageProps) {
  const { locale, dictionary } = await resolveLocalePage(params);

  return <InitiativePage locale={locale} dictionary={dictionary} />;
}
