import { PageScaffold } from "@/components/sections/PageScaffold";
import type { Dictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/types/common.types";

import styles from "./BiographyPage.module.css";

type BiographyPageProps = {
  dictionary: Dictionary;
  locale: Locale;
};

export function BiographyPage({ dictionary, locale }: BiographyPageProps) {
  return (
    <div className={styles.page}>
      <PageScaffold locale={locale} dictionary={dictionary} segment="biography" />
    </div>
  );
}
