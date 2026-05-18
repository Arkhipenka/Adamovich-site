import type { Metadata } from "next";

import { Footer } from "@/components/layout/Footer/Footer";
import { Header } from "@/components/layout/Header/Header";
import { defaultLocale, isLocale, locales, siteConfig } from "@/config/site";
import { getDictionary } from "@/i18n/dictionaries";
import "../globals.css";

type RootLayoutProps = {
  children: React.ReactNode;
  params: Promise<{
    locale: string;
  }>;
};

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: RootLayoutProps): Promise<Metadata> {
  const { locale } = await params;
  const activeLocale = isLocale(locale) ? locale : defaultLocale;
  const dictionary = await getDictionary(activeLocale);

  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      default: dictionary?.metadata.title ?? siteConfig.name,
      template: `%s | ${siteConfig.name}`,
    },
    description: dictionary?.metadata.description,
    openGraph: {
      title: dictionary?.metadata.title ?? siteConfig.name,
      description: dictionary?.metadata.description,
      siteName: siteConfig.name,
      locale: activeLocale,
      type: "website",
      url: `/${activeLocale}`,
    },
  };
}

export default async function RootLayout({ children, params }: RootLayoutProps) {
  const { locale } = await params;
  const activeLocale = isLocale(locale) ? locale : defaultLocale;
  const dictionary = await getDictionary(activeLocale);

  return (
    <html lang={activeLocale}>
      <body>
        {dictionary ? (
          <>
            <Header locale={activeLocale} dictionary={dictionary} />
            {children}
            <Footer locale={activeLocale} />
          </>
        ) : (
          children
        )}
      </body>
    </html>
  );
}
