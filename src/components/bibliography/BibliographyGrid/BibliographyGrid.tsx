import { WorksGrid } from "@/components/WorksGrid";
import type { Work } from "@/data/works";
import type { Locale } from "@/types/common.types";

type BibliographyGridProps = {
  compact?: boolean;
  locale: Locale;
  singleRow?: boolean;
  works: Work[];
};

export function BibliographyGrid(props: BibliographyGridProps) {
  return <WorksGrid {...props} />;
}
