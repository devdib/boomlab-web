"use client";

import { useEffect, useState } from "react";

type HeroGalleryProps = {
  altPrimary: string;
  altSecondary: string;
  locale: "es" | "en";
};

const slides = [
  "/images/boomlab-volcan-principal.webp",
  "/images/boomlab-volcan-grupal.webp",
] as const;

export function HeroGallery({ altPrimary, altSecondary, locale }: HeroGalleryProps) {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const alts = [altPrimary, altSecondary];
  const labels = locale === "es"
    ? { gallery: "Galería de experiencias Boom! Lab", previous: "Ver foto anterior", next: "Ver foto siguiente", photo: "Ver foto" }
    : { gallery: "Boom! Lab experience gallery", previous: "View previous photo", next: "View next photo", photo: "View photo" };

  useEffect(() => {
    if (isPaused) return;

    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, [isPaused]);

  const showPrevious = () => {
    setActiveSlide((current) => (current - 1 + slides.length) % slides.length);
  };

  const showNext = () => {
    setActiveSlide((current) => (current + 1) % slides.length);
  };

  return (
    <div
      className="hero-carousel"
      role="region"
      aria-label={labels.gallery}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      {slides.map((src, index) => (
        <figure
          className={`hero-photo-frame${activeSlide === index ? " is-active" : ""}`}
          aria-hidden={activeSlide !== index}
          key={src}
        >
          {/* Direct asset paths keep both optimized photographs available without a runtime proxy. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt={alts[index]}
            width="1120"
            height="1400"
            loading={index === 0 ? "eager" : "lazy"}
            fetchPriority={index === 0 ? "high" : "auto"}
          />
        </figure>
      ))}

      <div className="carousel-arrows">
        <button type="button" onClick={showPrevious} aria-label={labels.previous}>←</button>
        <button type="button" onClick={showNext} aria-label={labels.next}>→</button>
      </div>

      <div className="carousel-dots" aria-label={labels.gallery}>
        {slides.map((src, index) => (
          <button
            type="button"
            className={activeSlide === index ? "is-active" : ""}
            onClick={() => setActiveSlide(index)}
            aria-label={`${labels.photo} ${index + 1}`}
            aria-pressed={activeSlide === index}
            key={src}
          />
        ))}
      </div>
    </div>
  );
}
