import type { Metadata } from "next";

import { ComingSoonPage, type StateButton } from "@/components/ui/ComingSoonPage";
import { serviceStateContent } from "@/data/serviceStates";

export const metadata: Metadata = {
  title: "Тэхнічныя працы",
  description:
    "Мы абнаўляем сайт, дадаём новыя матэрыялы і паляпшаем працу платформы.",
};

export default function MaintenancePage() {
  const copy = serviceStateContent.maintenance.be;
  const buttons: StateButton[] = [
    {
      action: "refresh",
      label: copy.buttons.refresh ?? "Абнавіць",
      variant: "primary",
    },
    {
      href: "/be/contacts",
      label: copy.buttons.contact ?? "Кантакты",
    },
  ];

  return (
    <ComingSoonPage
      buttons={buttons}
      description={copy.text}
      eyebrow="Service"
      subtitle={copy.subtitle}
      title={copy.title}
    />
  );
}
