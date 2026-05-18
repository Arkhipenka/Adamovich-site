import { notFound } from "next/navigation";

import { isLocale, type Locale } from "@/config/site";
import { getDictionary } from "@/i18n/dictionaries";

export type LocalePageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export async function resolveLocalePage(params: LocalePageProps["params"]) {
  const { locale } = await params;

  if (!isLocale(locale)) notFound();

  const dictionary = await getDictionary(locale);
  if (!dictionary) notFound();

  return {
    locale: locale as Locale,
    dictionary,
  };
}
