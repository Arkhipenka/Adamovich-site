import type { Metadata } from "next";

import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import { defaultLocale, siteConfig } from "@/config/site";
import "../globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: siteConfig.name,
  description: "Ales Adamovich - belarusian writer",
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
        <GoogleAnalytics />
      </body>
    </html>
  );
}
