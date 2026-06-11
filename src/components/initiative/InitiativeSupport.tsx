"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

import { assetPath } from "@/config/site";
import {
  initiativeAwards,
  initiativeAwardsCopy,
  type InitiativeAward,
} from "@/data/initiativeAwards";
import {
  initiativeSupport,
  initiativeSupportCopy,
  initiativeSupportGroups,
  initiativeTeam,
  supportFallbackLabels,
  type InitiativeSupportEntry,
  type InitiativeTeamMember,
  type SupportEntryType,
} from "@/data/initiativeSupport";
import { getLocalizedText } from "@/lib/getLocalizedText";
import type { Locale, RequiredLocalizedText } from "@/types/common.types";

import styles from "./InitiativeSupport.module.css";

type InitiativeSupportProps = {
  locale: Locale;
};

function localize(text: RequiredLocalizedText | undefined, locale: Locale) {
  return text ? getLocalizedText(text, locale) : "";
}

function sortByOrder<T extends { order?: number }>(items: T[]) {
  return [...items].sort((a, b) => (a.order ?? 999) - (b.order ?? 999));
}

function getEntriesByType(
  entries: InitiativeSupportEntry[],
  types: SupportEntryType[],
) {
  return entries.filter((entry) => types.includes(entry.type));
}

function padCounter(value: number) {
  return value.toString().padStart(2, "0");
}

function AwardIcon({ type }: { type: InitiativeAward["type"] }) {
  if (type === "finalist") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="7" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    );
  }

  if (type === "recognition") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M12 4l8 8-8 8-8-8 8-8z" />
        <path d="M12 8l4 4-4 4-4-4 4-4z" />
      </svg>
    );
  }

  if (type === "media" || type === "publication") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M5 5h14v14H5z" />
        <path d="M8 9h8" />
        <path d="M8 13h8" />
        <path d="M8 17h5" />
      </svg>
    );
  }

  if (type === "community") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
        <path d="M16 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
        <path d="M4 19c.6-3 2.2-5 4-5s3.4 2 4 5" />
        <path d="M12 19c.6-3 2.2-5 4-5s3.4 2 4 5" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M12 4l2.4 4.9 5.4.8-3.9 3.8.9 5.4-4.8-2.5-4.8 2.5.9-5.4-3.9-3.8 5.4-.8L12 4z" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M12 21s6-5.4 6-11a6 6 0 0 0-12 0c0 5.6 6 11 6 11z" />
      <circle cx="12" cy="10" r="2" />
    </svg>
  );
}

function SupportLogo({
  entry,
  locale,
}: {
  entry: InitiativeSupportEntry;
  locale: Locale;
}) {
  const [failed, setFailed] = useState(false);
  const name = localize(entry.name, locale);

  if (entry.logo && entry.showLogo && !failed) {
    const image = (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        alt={name}
        className={styles.logoImage}
        loading="lazy"
        onError={() => setFailed(true)}
        src={assetPath(entry.logo)}
      />
    );

    return entry.href ? (
      <a
        className={styles.logoLink}
        href={entry.href}
        rel="noopener noreferrer"
        target="_blank"
      >
        {image}
      </a>
    ) : (
      <span className={styles.logoLink}>{image}</span>
    );
  }

  return (
    <span className={styles.iconFallback} aria-hidden="true">
      {supportFallbackLabels[entry.type]}
    </span>
  );
}

function ImageOrFallback({
  entry,
  locale,
  className,
}: {
  entry: InitiativeSupportEntry;
  locale: Locale;
  className: string;
}) {
  const [failed, setFailed] = useState(false);
  const name = localize(entry.name, locale);

  if (entry.image && !failed) {
    return (
      <Image
        alt={localize(entry.imageAlt, locale) || name}
        className={className}
        fill
        loading="lazy"
        onError={() => setFailed(true)}
        sizes="(max-width: 760px) calc(100vw - 56px), 46vw"
        src={assetPath(entry.image)}
      />
    );
  }

  return (
    <span className={styles.personFallback} aria-hidden="true">
      {supportFallbackLabels[entry.type]}
    </span>
  );
}

function TeamCard({
  locale,
  member,
}: {
  locale: Locale;
  member: InitiativeTeamMember;
}) {
  const [failed, setFailed] = useState(false);
  const name = localize(member.name, locale);

  return (
    <article className={styles.teamCard}>
      <div className={styles.teamPhoto}>
        {member.image && !failed ? (
          <Image
            alt={localize(member.imageAlt, locale) || name}
            className={styles.teamImage}
            fill
            loading="lazy"
            onError={() => setFailed(true)}
            sizes="(max-width: 760px) calc(100vw - 56px), 320px"
            src={assetPath(member.image)}
          />
        ) : (
          <span aria-hidden="true">{name.slice(0, 1)}</span>
        )}
      </div>
      <div className={styles.teamBody}>
        <h4>{name}</h4>
        <p className={styles.role}>{localize(member.role, locale)}</p>
        <p>{localize(member.contribution, locale)}</p>
      </div>
    </article>
  );
}

function PublicThanksItem({
  entry,
  locale,
}: {
  entry: InitiativeSupportEntry;
  locale: Locale;
}) {
  const [failed, setFailed] = useState(false);
  const name = localize(entry.name, locale);

  return (
    <article className={styles.publicThanksItem}>
      <div className={styles.avatar}>
        {entry.image && !failed ? (
          <Image
            alt={localize(entry.imageAlt, locale) || name}
            className={styles.avatarImage}
            fill
            loading="lazy"
            onError={() => setFailed(true)}
            sizes="56px"
            src={assetPath(entry.image)}
          />
        ) : (
          <span aria-hidden="true">{name.slice(0, 1)}</span>
        )}
      </div>
      <div>
        <h4>{name}</h4>
        <p>{localize(entry.contribution, locale)}</p>
      </div>
    </article>
  );
}

function BulletColumn({
  icon,
  items,
  title,
}: {
  icon: string;
  items: string[];
  title: string;
}) {
  return (
    <div className={styles.thanksColumn}>
      <span className={styles.columnIcon} aria-hidden="true">
        {icon}
      </span>
      <h3>{title}</h3>
      <span className={styles.smallRule} aria-hidden="true" />
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function AwardVisual({
  award,
  compact = false,
  locale,
}: {
  award: InitiativeAward;
  compact?: boolean;
  locale: Locale;
}) {
  const [failed, setFailed] = useState(false);
  const title = localize(award.title, locale);

  if (award.image && !failed) {
    return (
      <span
        className={[
          styles.awardVisual,
          compact ? styles.awardVisualCompact : "",
        ].join(" ")}
      >
        <Image
          alt={localize(award.imageAlt, locale) || title}
          className={styles.awardImage}
          fill
          loading="lazy"
          onError={() => setFailed(true)}
          sizes="96px"
          src={assetPath(award.image)}
        />
      </span>
    );
  }

  if (award.logo && !failed) {
    return (
      <span
        className={[
          styles.awardVisual,
          compact ? styles.awardVisualCompact : "",
        ].join(" ")}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          alt={title}
          className={styles.awardLogo}
          loading="lazy"
          onError={() => setFailed(true)}
          src={assetPath(award.logo)}
        />
      </span>
    );
  }

  return (
    <span
      className={[
        styles.awardIcon,
        compact ? styles.awardIconCompact : "",
      ].join(" ")}
      aria-hidden="true"
    >
      <AwardIcon type={award.type} />
    </span>
  );
}

function AwardCard({
  award,
  locale,
}: {
  award: InitiativeAward;
  locale: Locale;
}) {
  const title = localize(award.title, locale);
  const subtitle = localize(award.subtitle, locale);
  const description = localize(award.description, locale);
  const location = localize(award.location, locale);
  const card = (
    <>
      <div className={styles.awardTop}>
        <AwardVisual award={award} locale={locale} />
        {award.year ? <span className={styles.awardYear}>{award.year}</span> : null}
      </div>
      <h3 className={styles.awardTitle}>{title}</h3>
      {subtitle ? <p className={styles.awardSubtitle}>{subtitle}</p> : null}
      <p className={styles.awardDescription}>{description}</p>
      {location ? (
        <p className={styles.awardLocation}>
          <LocationIcon />
          <span>{location}</span>
        </p>
      ) : null}
    </>
  );

  if (award.href) {
    return (
      <a
        className={[
          styles.awardCard,
          award.featured ? styles.awardCardFeatured : "",
        ].join(" ")}
        href={award.href}
        rel="noopener noreferrer"
        target="_blank"
      >
        {card}
      </a>
    );
  }

  return (
    <article
      className={[
        styles.awardCard,
        award.featured ? styles.awardCardFeatured : "",
      ].join(" ")}
    >
      {card}
    </article>
  );
}

function CompactAwardCard({
  award,
  locale,
}: {
  award: InitiativeAward;
  locale: Locale;
}) {
  const title = localize(award.title, locale);
  const subtitle = localize(award.subtitle, locale);

  return (
    <article className={styles.compactAwardCard}>
      <AwardVisual award={award} compact locale={locale} />
      <div className={styles.compactAwardText}>
        <h3>{title}</h3>
        {subtitle ? <p>{subtitle}</p> : null}
      </div>
      {award.year ? (
        <span className={styles.compactAwardYear}>{award.year}</span>
      ) : null}
    </article>
  );
}

export function InitiativeSupport({ locale }: InitiativeSupportProps) {
  const labels = initiativeSupportCopy[locale] ?? initiativeSupportCopy.be;
  const awardLabels = initiativeAwardsCopy;
  const visibleEntries = useMemo(
    () =>
      sortByOrder(
        initiativeSupport.filter((entry) => entry.visibility !== "hidden"),
      ),
    [],
  );
  const team = useMemo(() => sortByOrder(initiativeTeam), []);
  const [activeContributionIndex, setActiveContributionIndex] = useState(0);
  const awards = useMemo(() => sortByOrder(initiativeAwards), []);
  const primaryAwards = awards.filter((award) => award.level !== "secondary");
  const compactAwards = awards.filter((award) => award.level === "secondary");

  const individualContributions = getEntriesByType(
    visibleEntries,
    initiativeSupportGroups.individualContributionTypes,
  );
  const activeContribution =
    individualContributions[
      activeContributionIndex % Math.max(individualContributions.length, 1)
    ];
  const publicThanks = getEntriesByType(
    visibleEntries,
    initiativeSupportGroups.publicThanksTypes,
  );
  const platformEntries = getEntriesByType(
    visibleEntries,
    initiativeSupportGroups.platformTypes,
  );
  const culturalEntries = getEntriesByType(
    visibleEntries,
    initiativeSupportGroups.stageTypes,
  );
  const mediaSupport = visibleEntries.find(
    (entry) => entry.type === "media-support",
  );
  const currentFunders = getEntriesByType(visibleEntries, ["current-funder"]);
  const fiscalPartner = visibleEntries.find(
    (entry) => entry.type === "fiscal-partner",
  );

  function showContribution(index: number) {
    const total = individualContributions.length;
    if (!total) return;
    setActiveContributionIndex((index + total) % total);
  }

  return (
    <section className={styles.section} aria-labelledby="initiative-support-title">
      <div className={styles.inner}>
        <div className={styles.peopleLayout}>
          <div className={styles.teamArea}>
            <p className={styles.eyebrow}>{labels.peopleEyebrow}</p>
            <h2 id="initiative-support-title" className={styles.title}>
              {labels.teamTitle}
            </h2>
            <p className={styles.intro}>{labels.teamText}</p>

            <div className={styles.teamGrid}>
              {team.map((member) => (
                <TeamCard key={member.id} locale={locale} member={member} />
              ))}
            </div>

            <article className={styles.collectiveNote}>
              <span className={styles.noteIcon} aria-hidden="true">
                ◎
              </span>
              <p>{labels.collectiveNote}</p>
            </article>
          </div>

          {activeContribution ? (
            <article
              className={styles.featuredSlider}
              aria-label={labels.featuredEyebrow}
            >
              <div className={styles.featuredSlide}>
                <div className={styles.featuredContent}>
                  <p className={styles.cardEyebrow}>{labels.featuredEyebrow}</p>
                  <h3>{localize(activeContribution.name, locale)}</h3>
                  <p className={styles.role}>
                    {localize(activeContribution.role, locale)}
                  </p>
                  <span className={styles.goldRule} aria-hidden="true" />
                  <p>{localize(activeContribution.contribution, locale)}</p>
                </div>
                <div className={styles.featuredImageFrame}>
                  <ImageOrFallback
                    className={styles.featuredImage}
                    entry={activeContribution}
                    locale={locale}
                  />
                </div>
              </div>

              <div className={styles.sliderControls}>
                <button
                  aria-label={labels.previousContribution}
                  className={styles.sliderButton}
                  onClick={() => showContribution(activeContributionIndex - 1)}
                  type="button"
                >
                  ‹
                </button>
                <div className={styles.sliderStatus}>
                  <span>{padCounter(activeContributionIndex + 1)}</span>
                  <span aria-hidden="true">/</span>
                  <span>{padCounter(individualContributions.length)}</span>
                </div>
                <div className={styles.sliderDots} aria-hidden="true">
                  {individualContributions.map((entry, index) => (
                    <span
                      className={[
                        styles.sliderDot,
                        index === activeContributionIndex
                          ? styles.sliderDotActive
                          : "",
                      ].join(" ")}
                      key={entry.id}
                    />
                  ))}
                </div>
                <button
                  aria-label={labels.nextContribution}
                  className={styles.sliderButton}
                  onClick={() => showContribution(activeContributionIndex + 1)}
                  type="button"
                >
                  ›
                </button>
              </div>
            </article>
          ) : null}
        </div>

        <section className={styles.awards} aria-labelledby="initiative-awards-title">
          <div className={styles.awardsHeader}>
            <div>
              <p className={styles.eyebrow}>
                {getLocalizedText(awardLabels.eyebrow, locale)}
              </p>
              <h2 id="initiative-awards-title">
                {getLocalizedText(awardLabels.title, locale)}
              </h2>
            </div>
            <p>{getLocalizedText(awardLabels.lead, locale)}</p>
          </div>

          <div className={styles.awardsGrid}>
            {primaryAwards.map((award) => (
              <AwardCard award={award} key={award.id} locale={locale} />
            ))}
          </div>

          {compactAwards.length ? (
            <div className={styles.compactAwardsGrid}>
              {compactAwards.map((award) => (
                <CompactAwardCard award={award} key={award.id} locale={locale} />
              ))}
            </div>
          ) : null}

          <p className={styles.awardsNote}>
            {getLocalizedText(awardLabels.note, locale)}
          </p>
        </section>

        <div className={styles.thanksHeader}>
          <p className={styles.eyebrow}>{labels.supportEyebrow}</p>
          <h2>{labels.supportTitle}</h2>
          <p>{labels.supportText}</p>
        </div>

        <div className={styles.thanksGrid}>
          <div className={styles.thanksColumn}>
            <span className={styles.columnIcon} aria-hidden="true">
              ♡
            </span>
            <h3>{labels.specialThanksTitle}</h3>
            <span className={styles.smallRule} aria-hidden="true" />
            <div className={styles.publicThanksList}>
              {publicThanks.map((entry) => (
                <PublicThanksItem entry={entry} key={entry.id} locale={locale} />
              ))}
            </div>
          </div>

          <BulletColumn icon="◎" items={labels.helpers} title={labels.helpersTitle} />

          <div className={styles.thanksColumn}>
            <span className={styles.columnIcon} aria-hidden="true">
              ◌
            </span>
            <h3>{labels.mediaTitle}</h3>
            <span className={styles.smallRule} aria-hidden="true" />
            {mediaSupport ? (
              <p className={styles.mediaText}>
                {localize(mediaSupport.contribution, locale)}
              </p>
            ) : null}
            <ul>
              {labels.media.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className={styles.thanksColumn}>
            <span className={styles.columnIcon} aria-hidden="true">
              ⟡
            </span>
            <h3>{labels.currentPartnersTitle}</h3>
            <span className={styles.smallRule} aria-hidden="true" />
            <div className={styles.partnerLogos}>
              {currentFunders.map((entry) => (
                <SupportLogo entry={entry} key={entry.id} locale={locale} />
              ))}
            </div>
            <p>{labels.currentText}</p>
          </div>
        </div>

        <div className={styles.partnersSection}>
          <div className={styles.partnersHeader}>
            <p className={styles.eyebrow}>{labels.partnersEyebrow}</p>
            <h2>{labels.partnersTitle}</h2>
            <p>{labels.partnersText}</p>
          </div>

          <div className={styles.partnerGroups}>
            <article className={styles.partnerGroup}>
              <h3>{labels.strategicPartnersTitle}</h3>
              <span className={styles.smallRule} aria-hidden="true" />
              <div className={styles.partnerLogoStack}>
                {currentFunders.map((entry) => (
                  <div className={styles.partnerLogoCard} key={entry.id}>
                    <SupportLogo entry={entry} locale={locale} />
                    <span>{localize(entry.name, locale)}</span>
                  </div>
                ))}
              </div>
              {fiscalPartner ? (
                <p className={styles.groupNote}>
                  <strong>{labels.fiscalTitle}:</strong>{" "}
                  {localize(fiscalPartner.contribution, locale)}
                </p>
              ) : null}
            </article>

            <article className={styles.partnerGroup}>
              <h3>{labels.informationPartnersTitle}</h3>
              <span className={styles.smallRule} aria-hidden="true" />
              {mediaSupport ? (
                <p>{localize(mediaSupport.contribution, locale)}</p>
              ) : null}
              <ul>
                {labels.media.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>

            <article className={styles.partnerGroup}>
              <h3>{labels.culturalPartnersTitle}</h3>
              <span className={styles.smallRule} aria-hidden="true" />
              <div className={styles.compactEntries}>
                {culturalEntries.map((entry) => (
                  <div className={styles.compactEntry} key={entry.id}>
                    <SupportLogo entry={entry} locale={locale} />
                    <span>{localize(entry.name, locale)}</span>
                  </div>
                ))}
              </div>
            </article>

            <article className={styles.partnerGroup}>
              <h3>{labels.platformPartnersTitle}</h3>
              <span className={styles.smallRule} aria-hidden="true" />
              <div className={styles.compactEntries}>
                {platformEntries.map((entry) => (
                  <div className={styles.compactEntry} key={entry.id}>
                    <SupportLogo entry={entry} locale={locale} />
                    <span>{localize(entry.name, locale)}</span>
                  </div>
                ))}
              </div>
            </article>

            <article className={styles.partnerGroup}>
              <h3>{labels.communityTitle}</h3>
              <span className={styles.smallRule} aria-hidden="true" />
              <span className={styles.communityIcon} aria-hidden="true">
                ◎
              </span>
              <p>{labels.communityText}</p>
            </article>
          </div>
        </div>

        <div className={styles.closingCard}>
          <span className={styles.leaf} aria-hidden="true">
            ╱
          </span>
          <p>{labels.closingText}</p>
          <div className={styles.actions}>
            <Link className={styles.primaryLink} href={`/${locale}/contacts`}>
              {labels.becomePartnerLabel}
              <span aria-hidden="true">→</span>
            </Link>
            <Link className={styles.secondaryLink} href={`/${locale}/support`}>
              {labels.supportLabel}
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
