import { SupportPage } from "@/components/support/SupportPage";
import { resolveLocalePage, type LocalePageProps } from "@/lib/page";

export default async function SupportRoute({ params }: LocalePageProps) {
  const { locale } = await resolveLocalePage(params);

  return <SupportPage locale={locale} />;
}
