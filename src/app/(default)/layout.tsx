import type { Metadata } from "next";

import { CookieConsent } from "@/components/CookieConsent/CookieConsent";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import { defaultLocale, siteConfig } from "@/config/site";
import "../globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: siteConfig.name,
  description: "Ales Adamovich - belarusian writer",
  alternates: {
    canonical: "/be/",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function DefaultRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={defaultLocale}>
      <body>
        {children}
        <CookieConsent locale={defaultLocale} />
        <GoogleAnalytics />
      </body>
    </html>
  );
}
