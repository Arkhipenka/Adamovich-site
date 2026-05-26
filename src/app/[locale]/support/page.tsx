import { SupportPage } from "@/components/support/SupportPage";
import { resolveLocalePage, type LocalePageProps } from "@/lib/page";

export default async function SupportRoute({ params }: LocalePageProps) {
  const { locale, dictionary } = await resolveLocalePage(params);

  return <SupportPage locale={locale} dictionary={dictionary} />;
}
