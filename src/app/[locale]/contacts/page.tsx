import type { Metadata } from "next";

import {
  ContactsPage,
  getContactsPageMetadata,
} from "@/components/contacts/ContactsPage";
import { resolveLocalePage, type LocalePageProps } from "@/lib/page";

type ContactsMetadataProps = {
  params: Promise<{
    locale: string;
  }>;
};

export async function generateMetadata({
  params,
}: ContactsMetadataProps): Promise<Metadata> {
  const { locale } = await resolveLocalePage(params);

  return getContactsPageMetadata(locale);
}

export default async function ContactsRoute({ params }: LocalePageProps) {
  const { locale } = await resolveLocalePage(params);

  return <ContactsPage locale={locale} />;
}
