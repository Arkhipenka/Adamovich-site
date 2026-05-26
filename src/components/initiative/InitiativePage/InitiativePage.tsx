import { PageScaffold } from "@/components/sections/PageScaffold";
import type { Dictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/types/common.types";

import styles from "./InitiativePage.module.css";

type InitiativePageProps = {
  dictionary: Dictionary;
  locale: Locale;
};

export function InitiativePage({ dictionary, locale }: InitiativePageProps) {
  return (
    <div className={styles.page}>
      <PageScaffold locale={locale} dictionary={dictionary} segment="initiative" />
    </div>
  );
}
