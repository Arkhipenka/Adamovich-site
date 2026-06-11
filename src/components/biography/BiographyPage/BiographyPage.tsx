import { BiographyExplorer } from "@/components/biography/BiographyExplorer";
import { BiographyHero } from "@/components/biography/BiographyHero";
import { getBiographyPeriods, getBiographyThemes } from "@/data/biography";
import type { Dictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/types/common.types";

import styles from "./BiographyPage.module.css";

type BiographyPageProps = {
  dictionary: Dictionary;
  locale: Locale;
};

export function BiographyPage({ locale }: BiographyPageProps) {
  const periods = getBiographyPeriods(locale);
  const themes = getBiographyThemes(locale);

  return (
    <main className={styles.page}>
      <BiographyHero locale={locale} />
      <BiographyExplorer locale={locale} periods={periods} themes={themes} />
    </main>
  );
}
