import { InitiativeHero } from "@/components/initiative/InitiativeHero";
import { InitiativeMission } from "@/components/initiative/InitiativeMission";
import { InitiativeProjects } from "@/components/initiative/InitiativeProjects";
import { InitiativeSupport } from "@/components/initiative/InitiativeSupport";
import type { Dictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/types/common.types";

import styles from "./InitiativePage.module.css";

type InitiativePageProps = {
  dictionary: Dictionary;
  locale: Locale;
};

export function InitiativePage({ locale }: InitiativePageProps) {
  return (
    <div className={styles.page}>
      <InitiativeHero locale={locale} />
      <InitiativeMission locale={locale} />
      <InitiativeProjects locale={locale} />
      <InitiativeSupport locale={locale} />
    </div>
  );
}
