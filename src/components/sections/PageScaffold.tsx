import { ButtonLink } from "@/components/ui/ButtonLink";
import type { Locale, RouteSegment } from "@/config/site";
import { localizedPath } from "@/config/site";
import type { Dictionary } from "@/i18n/dictionaries";

type PageScaffoldProps = {
  locale: Locale;
  dictionary: Dictionary;
  segment: RouteSegment;
};

export function PageScaffold({
  locale,
  dictionary,
  segment,
}: PageScaffoldProps) {
  const page = dictionary.pages[segment];

  return (
    <main className="page-shell">
      <section className="hero-section">
        <p className="eyebrow">{page.eyebrow}</p>
        <h1>{page.title}</h1>
        <p className="lead">{page.description}</p>
        <div className="hero-actions">
          <ButtonLink href={localizedPath(locale, "audio-guide")} variant="primary">
            {dictionary.navigation["audio-guide"]}
          </ButtonLink>
          <ButtonLink href={localizedPath(locale, "biography")}>
            {dictionary.navigation.biography}
          </ButtonLink>
        </div>
      </section>

      <section className="setup-note" aria-label="Development stage">
        <p>{dictionary.common.currentStage}</p>
      </section>
    </main>
  );
}
