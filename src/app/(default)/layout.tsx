import type { Metadata } from "next";

import { ThemeScript } from "@/components/theme/ThemeScript";
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
    <html data-theme="dark" lang={defaultLocale} suppressHydrationWarning>
      <body>
        <ThemeScript />
        {children}
      </body>
    </html>
  );
}
