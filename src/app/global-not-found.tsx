import type { Metadata } from "next";

import { ThemeScript } from "@/components/theme/ThemeScript";
import { NotFoundPage } from "@/components/ui/NotFoundPage";
import "./globals.css";

export const metadata: Metadata = {
  title: "Старонка не знойдзена",
  description: "Магчыма, спасылка састарэла або матэрыял быў перанесены.",
};

export default function GlobalNotFound() {
  return (
    <html data-theme="dark" lang="be" suppressHydrationWarning>
      <body>
        <ThemeScript />
        <NotFoundPage locale="be" />
      </body>
    </html>
  );
}
