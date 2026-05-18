"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

import { defaultLocale, localizedPath } from "@/config/site";

export default function RootPage() {
  const router = useRouter();
  const href = localizedPath(defaultLocale);

  useEffect(() => {
    router.replace(href);
  }, [href, router]);

  return (
    <main className="main">
      <Link href={href}>Open Ales Adamovich Cultural Digital Platform</Link>
    </main>
  );
}
