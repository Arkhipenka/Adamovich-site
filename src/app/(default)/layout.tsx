import type { Metadata } from "next";

import { defaultLocale, siteConfig } from "@/config/site";
import "../globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: siteConfig.name,
  description: "Ales Adamovich cultural digital platform",
};

export default function DefaultRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={defaultLocale}>
      <body>{children}</body>
    </html>
  );
}
