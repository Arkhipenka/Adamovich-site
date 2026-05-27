import { notFound } from "next/navigation";

import { isLocale, type Locale } from "@/config/site";

export type LocalePageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export async function resolveLocalePage(params: LocalePageProps["params"]) {
  const { locale } = await params;

  if (!isLocale(locale)) notFound();

  return {
    locale: locale as Locale,
  };
}
