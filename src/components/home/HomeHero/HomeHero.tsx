"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import styles from "./HomeHero.module.css";
import {
  homeHeroControlLabels,
  homePageContent,
} from "@/data/home";
import { assetPath, type Locale } from "@/config/site";
import { getLocalizedText } from "@/lib/getLocalizedText";
import { localizedHref } from "@/lib/localizedHref";

type HomeHeroProps = {
  locale?: Locale;
};

function formatSlideNumber(value: number) {
  return value.toString().padStart(2, "0");
}

export function HomeHero({ locale = "ru" }: HomeHeroProps) {
  const slides = homePageContent.heroSlides;
  const labels = homeHeroControlLabels[locale];
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const currentSlide = slides[currentSlideIndex];
  const totalSlides = slides.length;

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncPreference = () => setPrefersReducedMotion(mediaQuery.matches);

    syncPreference();
    mediaQuery.addEventListener("change", syncPreference);

    return () => mediaQuery.removeEventListener("change", syncPreference);
  }, []);

  useEffect(() => {
    if (isPaused || prefersReducedMotion) return;

    const interval = window.setInterval(() => {
      setCurrentSlideIndex((index) => (index + 1) % totalSlides);
    }, 7000);

    return () => window.clearInterval(interval);
  }, [isPaused, prefersReducedMotion, totalSlides]);

  const nextSlide = () => {
    setCurrentSlideIndex((index) => (index + 1) % totalSlides);
  };

  const previousSlide = () => {
    setCurrentSlideIndex((index) => (index - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index: number) => {
    setCurrentSlideIndex(index);
  };

  return (
    <section
      aria-label={labels.slider}
      className={styles.hero}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className={styles.background} aria-hidden="true">
        {slides.map((slide, index) => {
          const isActive = index === currentSlideIndex;

          return (
            <Image
              alt={isActive ? getLocalizedText(slide.image.alt, locale) : ""}
              aria-hidden={!isActive}
              className={`${styles.backgroundImage} ${
                isActive ? styles.backgroundImageActive : ""
              }`}
              fill
              key={slide.id}
              priority={index === 0}
              sizes="100vw"
              src={assetPath(slide.image.src)}
            />
          );
        })}
        <div className={styles.overlay} />
      </div>

      <div className={styles.inner}>
        <div className={styles.content} key={currentSlide.id}>
          <p className={styles.eyebrow}>
            {getLocalizedText(currentSlide.eyebrow, locale)}
          </p>
          <h1 className={styles.title}>
            {getLocalizedText(currentSlide.title, locale)}
          </h1>
          {currentSlide.subtitle ? (
            <p className={styles.subtitle}>
              {getLocalizedText(currentSlide.subtitle, locale)}
            </p>
          ) : null}
          {currentSlide.quote ? (
            <figure className={styles.quote}>
              <blockquote>
                “{getLocalizedText(currentSlide.quote, locale)}”
              </blockquote>
              {currentSlide.quoteAuthor ? (
                <figcaption className={styles.quoteAuthor}>
                  {getLocalizedText(currentSlide.quoteAuthor, locale)}
                </figcaption>
              ) : null}
            </figure>
          ) : null}

          <div className={styles.actions}>
            <Link
              className={styles.buttonPrimary}
              href={localizedHref(locale, currentSlide.primaryLink.href)}
            >
              {getLocalizedText(currentSlide.primaryLink.label, locale)}
              <span aria-hidden="true">→</span>
            </Link>
            {currentSlide.secondaryLink ? (
              <Link
                className={styles.buttonSecondary}
                href={localizedHref(locale, currentSlide.secondaryLink.href)}
              >
                {getLocalizedText(currentSlide.secondaryLink.label, locale)}
                <span aria-hidden="true">→</span>
              </Link>
            ) : null}
            {currentSlide.tertiaryLink ? (
              <Link
                className={styles.buttonText}
                href={localizedHref(locale, currentSlide.tertiaryLink.href)}
              >
                {getLocalizedText(currentSlide.tertiaryLink.label, locale)}
                <span aria-hidden="true">→</span>
              </Link>
            ) : null}
          </div>
        </div>

        <div className={styles.controls}>
          <div className={styles.progress} aria-hidden="true">
            <span className={styles.progressNumber}>
              {formatSlideNumber(currentSlideIndex + 1)}
            </span>
            <span className={styles.progressLine} />
            <span className={styles.progressTotal}>
              {formatSlideNumber(totalSlides)}
            </span>
          </div>

          <div className={styles.slideDots}>
            {slides.map((slide, index) => (
              <button
                aria-current={index === currentSlideIndex ? "true" : undefined}
                aria-label={labels.goToSlide(index + 1)}
                className={`${styles.dot} ${
                  index === currentSlideIndex ? styles.dotActive : ""
                }`}
                key={slide.id}
                onClick={() => goToSlide(index)}
                type="button"
              />
            ))}
          </div>

          <div className={styles.arrowControls}>
            <button
              aria-label={labels.previous}
              className={styles.arrowButton}
              onClick={previousSlide}
              type="button"
            >
              ←
            </button>
            <button
              aria-label={labels.next}
              className={styles.arrowButton}
              onClick={nextSlide}
              type="button"
            >
              →
            </button>
          </div>
        </div>

        {currentSlide.imageCredit ? (
          <p className={styles.imageCredit}>
            {getLocalizedText(currentSlide.imageCredit, locale)}
          </p>
        ) : null}
      </div>
    </section>
  );
}
