import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { WorkDetail } from "@/components/bibliography/WorkDetail";
import { locales } from "@/config/site";
import { getLocalizedText } from "@/lib/getLocalizedText";
import {
  getPublishedWorks,
  getRelatedWorks,
  getWorkBySlug,
} from "@/lib/works";
import { resolveLocalePage } from "@/lib/page";
import { localizedAlternates } from "@/lib/seo";

type WorkPageProps = {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  const publishedWorks = getPublishedWorks();

  return locales.flatMap((locale) =>
    publishedWorks.map((work) => ({
      locale,
      slug: work.slug,
    })),
  );
}

export async function generateMetadata({
  params,
}: WorkPageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const resolved = await resolveLocalePage(Promise.resolve({ locale }));
  const work = getWorkBySlug(slug);

  if (!work || work.status !== "published") {
    return {};
  }

  const title = getLocalizedText(work.title, resolved.locale);
  const description = getLocalizedText(work.descriptionShort, resolved.locale);

  return {
    title,
    description,
    alternates: localizedAlternates(
      resolved.locale,
      `bibliography/${work.slug}`,
    ),
    openGraph: {
      title,
      description,
    },
    twitter: {
      title,
      description,
    },
  };
}

export default async function WorkPage({ params }: WorkPageProps) {
  const { locale, slug } = await params;
  const resolved = await resolveLocalePage(Promise.resolve({ locale }));
  const work = getWorkBySlug(slug);

  if (!work || work.status !== "published") notFound();

  return (
    <WorkDetail
      locale={resolved.locale}
      relatedWorks={getRelatedWorks(work)}
      work={work}
    />
  );
}
