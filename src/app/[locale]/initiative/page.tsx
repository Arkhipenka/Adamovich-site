import { PageScaffold } from "@/components/sections/PageScaffold";
import { resolveLocalePage, type LocalePageProps } from "@/lib/page";

export default async function InitiativePage({ params }: LocalePageProps) {
  const { locale, dictionary } = await resolveLocalePage(params);

  return (
    <PageScaffold locale={locale} dictionary={dictionary} segment="initiative" />
  );
}
