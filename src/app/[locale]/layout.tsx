import type { Metadata } from "next";

import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import { Footer } from "@/components/layout/Footer/Footer";
import { Header } from "@/components/layout/Header/Header";
import { defaultLocale, isLocale, locales, siteConfig } from "@/config/site";
import { getDictionary } from "@/i18n/dictionaries";
import "../globals.css";
import styles from "./layout.module.css";

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
  const metadataTitle = dictionary?.metadata.title ?? siteConfig.name;
  const metadataDescription = dictionary?.metadata.description;

  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      default: metadataTitle,
      template: `%s | ${siteConfig.name}`,
    },
    description: metadataDescription,
    openGraph: {
      title: metadataTitle,
      description: metadataDescription,
      siteName: siteConfig.name,
      locale: activeLocale,
      type: "website",
      url: `/${activeLocale}`,
    },
    twitter: {
      card: "summary",
      title: metadataTitle,
      description: metadataDescription,
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
            <div className={styles.contentField}>{children}</div>
            <Footer locale={activeLocale} />
            <GoogleAnalytics />
          </>
        ) : (
          <>
            {children}
            <GoogleAnalytics />
          </>
        )}
      </body>
    </html>
  );
}
