"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

import styles from "./HomeHero.module.css";
import { assetPath, localizedPath, type Locale } from "@/config/site";

type HeroLink = {
  label: string;
  href: string;
};

type HeroSlide = {
  id: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  quote: string;
  quoteAuthor: string;
  image: string;
  imageAlt: string;
  imageCredit: string;
  primaryLink: HeroLink;
  secondaryLink?: HeroLink;
  tertiaryLink?: HeroLink;
};

type HomeHeroProps = {
  locale?: Locale;
};

const slideImages = [
  assetPath("/assets/images/hero/home-hero-1.webp"),
  assetPath("/assets/images/hero/home-hero-2.webp"),
  assetPath("/assets/images/hero/home-hero-3.webp"),
  assetPath("/assets/images/hero/home-hero-4.webp"),
];

const heroFallbackImage = assetPath("/assets/images/hero/home-hero.webp");

const actionLabelsByLocale: Record<
  Locale,
  {
    biography: string;
    audioGuide: string;
    support: string;
  }
> = {
  be: {
    biography: "Біяграфія",
    audioGuide: "Аўдыягід",
    support: "Падтрымаць праект",
  },
  en: {
    biography: "Biography",
    audioGuide: "Audio Guide",
    support: "Support Project",
  },
  ru: {
    biography: "Биография",
    audioGuide: "Аудиогид",
    support: "Поддержать проект",
  },
};

const heroSlidesByLocale: Record<Locale, Omit<HeroSlide, "primaryLink" | "secondaryLink" | "tertiaryLink">[]> = {
  be: [
    {
      id: "memory",
      eyebrow: "Пісьменнік. Сведка. Маральны голас.",
      title: "Алесь Адамовіч",
      subtitle: "",
      quote: "Памяць — гэта супраціў забыццю.",
      quoteAuthor: "Алесь Адамовіч",
      image: slideImages[0] ?? heroFallbackImage,
      imageAlt: "Партрэт Алеся Адамовіча ў цёмнай архіўнай кампазіцыі",
      imageCredit: "Архіўная візуальная канцэпцыя",
    },
    {
      id: "biography",
      eyebrow: "Біяграфія",
      title: "Жыццё, прысвечанае праўдзе",
      subtitle:
        "Гісторыя пісьменніка, сведкі і гуманіста, які захаваў галасы вайны, памяці і сумлення.",
      quote: "",
      quoteAuthor: "",
      image: slideImages[1] ?? heroFallbackImage,
      imageAlt: "Архіўны вобраз пісьменніка і дакументальных матэрыялаў",
      imageCredit: "Біяграфічны архіў",
    },
    {
      id: "audio-guide",
      eyebrow: "Аўдыягід",
      title: "Пачуць яго словы. Адчуць яго час.",
      subtitle:
        "Дакументальнае аўдыяпадарожжа па мясцінах, звязаных з жыццём, кнігамі і памяццю пра Адамовіча.",
      quote: "",
      quoteAuthor: "",
      image: slideImages[2] ?? heroFallbackImage,
      imageAlt: "Цёмная аўдыявізуальная сцэна з архіўнымі матэрыяламі",
      imageCredit: "Голас і памяць",
    },
    {
      id: "bibliography",
      eyebrow: "Бібліяграфія",
      title: "Кнігі, што захоўваюць праўду",
      subtitle:
        "Дакументальная проза, сведчанні і творы, якія сталі часткай маральнай памяці XX стагоддзя.",
      quote: "",
      quoteAuthor: "",
      image: slideImages[3] ?? heroFallbackImage,
      imageAlt: "Кнігі і дакументальная проза Алеся Адамовіча",
      imageCredit: "Кнігі і сведчанні",
    },
  ],
  en: [
    {
      id: "memory",
      eyebrow: "Writer. Witness. Moral Voice.",
      title: "Ales Adamovich",
      subtitle: "",
      quote: "To remember means to resist oblivion.",
      quoteAuthor: "Ales Adamovich",
      image: slideImages[0] ?? heroFallbackImage,
      imageAlt: "Ales Adamovich portrait in a dark archival composition",
      imageCredit: "Archival visual concept",
    },
    {
      id: "biography",
      eyebrow: "Biography",
      title: "A life dedicated to truth",
      subtitle:
        "The story of a writer, witness and humanist whose work preserved the voices of war and conscience.",
      quote: "",
      quoteAuthor: "",
      image: slideImages[1] ?? heroFallbackImage,
      imageAlt: "Archival image of the writer and documentary materials",
      imageCredit: "Biographical archive",
    },
    {
      id: "audio-guide",
      eyebrow: "Audio Guide",
      title: "Hear his words. Feel his time.",
      subtitle:
        "A documentary audio journey through places connected with Adamovich’s life, books and memory.",
      quote: "",
      quoteAuthor: "",
      image: slideImages[2] ?? heroFallbackImage,
      imageAlt: "Dark audio guide scene with archival materials",
      imageCredit: "Voice and memory",
    },
    {
      id: "bibliography",
      eyebrow: "Bibliography",
      title: "Books that preserve truth",
      subtitle:
        "Documentary prose, testimonies and works that became part of the moral memory of the 20th century.",
      quote: "",
      quoteAuthor: "",
      image: slideImages[3] ?? heroFallbackImage,
      imageAlt: "Books and documentary prose by Ales Adamovich",
      imageCredit: "Books and testimony",
    },
  ],
  ru: [
    {
      id: "memory",
      eyebrow: "Писатель. Свидетель. Нравственный голос.",
      title: "Алесь Адамович",
      subtitle: "",
      quote: "Память — это сопротивление забвению.",
      quoteAuthor: "Алесь Адамович",
      image: slideImages[0] ?? heroFallbackImage,
      imageAlt: "Портрет Алеся Адамовича в тёмной архивной композиции",
      imageCredit: "Архивная визуальная концепция",
    },
    {
      id: "biography",
      eyebrow: "Биография",
      title: "Жизнь, посвящённая правде",
      subtitle:
        "История писателя, свидетеля и гуманиста, сохранившего голоса войны, памяти и совести.",
      quote: "",
      quoteAuthor: "",
      image: slideImages[1] ?? heroFallbackImage,
      imageAlt: "Архивный образ писателя и документальных материалов",
      imageCredit: "Биографический архив",
    },
    {
      id: "audio-guide",
      eyebrow: "Аудиогид",
      title: "Услышать его слова. Почувствовать его время.",
      subtitle:
        "Документальное аудиопутешествие по местам, связанным с жизнью, книгами и памятью об Адамовиче.",
      quote: "",
      quoteAuthor: "",
      image: slideImages[2] ?? heroFallbackImage,
      imageAlt: "Тёмная аудиовизуальная сцена с архивными материалами",
      imageCredit: "Голос и память",
    },
    {
      id: "bibliography",
      eyebrow: "Библиография",
      title: "Книги, сохраняющие правду",
      subtitle:
        "Документальная проза, свидетельства и произведения, ставшие частью моральной памяти XX века.",
      quote: "",
      quoteAuthor: "",
      image: slideImages[3] ?? heroFallbackImage,
      imageAlt: "Книги и документальная проза Алеся Адамовича",
      imageCredit: "Книги и свидетельства",
    },
  ],
};

const controlLabelsByLocale: Record<
  Locale,
  {
    slider: string;
    previous: string;
    next: string;
    goToSlide: (index: number) => string;
  }
> = {
  be: {
    slider: "Галоўны слайдар",
    previous: "Папярэдні слайд",
    next: "Наступны слайд",
    goToSlide: (index) => `Перайсці да слайда ${index}`,
  },
  en: {
    slider: "Home hero slider",
    previous: "Previous slide",
    next: "Next slide",
    goToSlide: (index) => `Go to slide ${index}`,
  },
  ru: {
    slider: "Главный слайдер",
    previous: "Предыдущий слайд",
    next: "Следующий слайд",
    goToSlide: (index) => `Перейти к слайду ${index}`,
  },
};

function formatSlideNumber(value: number) {
  return value.toString().padStart(2, "0");
}

function buildSlides(locale: Locale): HeroSlide[] {
  const actionLabels = actionLabelsByLocale[locale];

  return heroSlidesByLocale[locale].map((slide) => ({
    ...slide,
    primaryLink: {
      label: actionLabels.biography,
      href: localizedPath(locale, "biography"),
    },
    secondaryLink: {
      label: actionLabels.audioGuide,
      href: localizedPath(locale, "audio-guide"),
    },
    tertiaryLink: {
      label: actionLabels.support,
      href: localizedPath(locale, "support"),
    },
  }));
}

export function HomeHero({ locale = "en" }: HomeHeroProps) {
  const slides = useMemo(() => buildSlides(locale), [locale]);
  const labels = controlLabelsByLocale[locale];
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
              alt={isActive ? slide.imageAlt : ""}
              aria-hidden={!isActive}
              className={`${styles.backgroundImage} ${
                isActive ? styles.backgroundImageActive : ""
              }`}
              fill
              key={slide.id}
              priority={index === 0}
              sizes="100vw"
              src={slide.image}
            />
          );
        })}
        <div className={styles.overlay} />
      </div>

      <div className={styles.inner}>
        <div className={styles.content} key={currentSlide.id}>
          <p className={styles.eyebrow}>{currentSlide.eyebrow}</p>
          <h1 className={styles.title}>{currentSlide.title}</h1>
          {currentSlide.subtitle ? (
            <p className={styles.subtitle}>{currentSlide.subtitle}</p>
          ) : null}
          {currentSlide.quote ? (
            <figure className={styles.quote}>
              <blockquote>“{currentSlide.quote}”</blockquote>
              <figcaption className={styles.quoteAuthor}>
                {currentSlide.quoteAuthor}
              </figcaption>
            </figure>
          ) : null}

          <div className={styles.actions}>
            <Link className={styles.buttonPrimary} href={currentSlide.primaryLink.href}>
              {currentSlide.primaryLink.label}
              <span aria-hidden="true">→</span>
            </Link>
            {currentSlide.secondaryLink ? (
              <Link
                className={styles.buttonSecondary}
                href={currentSlide.secondaryLink.href}
              >
                {currentSlide.secondaryLink.label}
                <span aria-hidden="true">→</span>
              </Link>
            ) : null}
            {currentSlide.tertiaryLink ? (
              <Link className={styles.buttonText} href={currentSlide.tertiaryLink.href}>
                {currentSlide.tertiaryLink.label}
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
            <span className={styles.progressTotal}>{formatSlideNumber(totalSlides)}</span>
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

        <p className={styles.imageCredit}>{currentSlide.imageCredit}</p>
      </div>
    </section>
  );
}
