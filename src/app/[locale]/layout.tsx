import type { Metadata } from "next";

import { Footer } from "@/components/layout/Footer/Footer";
import { Header } from "@/components/layout/Header/Header";
import { ThemeScript } from "@/components/theme/ThemeScript";
import {
  defaultLocale,
  isLocale,
  locales,
  siteConfig,
  siteMetadataByLocale,
} from "@/config/site";
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
  const metadata = siteMetadataByLocale[activeLocale];

  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      default: metadata.title,
      template: `%s | ${siteConfig.name}`,
    },
    description: metadata.description,
    openGraph: {
      title: metadata.title,
      description: metadata.description,
      siteName: siteConfig.name,
      locale: activeLocale,
      type: "website",
      url: `/${activeLocale}`,
    },
    twitter: {
      card: "summary",
      title: metadata.title,
      description: metadata.description,
    },
  };
}

export default async function RootLayout({ children, params }: RootLayoutProps) {
  const { locale } = await params;
  const activeLocale = isLocale(locale) ? locale : defaultLocale;

  return (
    <html data-theme="dark" lang={activeLocale} suppressHydrationWarning>
      <body>
        <ThemeScript />
        <Header locale={activeLocale} />
        {children}
        <Footer locale={activeLocale} />
      </body>
    </html>
  );
}
