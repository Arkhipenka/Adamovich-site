import { PageScaffold } from "@/components/sections/PageScaffold";
import type { Dictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/types/common.types";

import styles from "./AudioGuidePage.module.css";

type AudioGuidePageProps = {
  dictionary: Dictionary;
  locale: Locale;
};

export function AudioGuidePage({ dictionary, locale }: AudioGuidePageProps) {
  return (
    <div className={styles.page}>
      <PageScaffold
        locale={locale}
        dictionary={dictionary}
        segment="audio-guide"
      />
    </div>
  );
}
