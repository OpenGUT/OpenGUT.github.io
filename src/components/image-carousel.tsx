"use client";

import { useEffect, useState } from "react";

type Slide = {
  src: string;
  alt: string;
};

type ImageCarouselProps = {
  slides: Slide[];
  title: string;
  subtitle: string;
};

export function ImageCarousel({ slides, title, subtitle }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((index) => (index + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="relative aspect-[16/9] w-full sm:aspect-[21/9]">
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <img
            key={slide.src}
            src={slide.src}
            alt={slide.alt}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

      <div className="relative z-10 flex h-full flex-col justify-end p-5 text-white sm:p-8">
        <h1 className="text-3xl font-bold tracking-tight sm:text-5xl">{title}</h1>
        <p className="mt-2 max-w-2xl text-sm text-white/90 sm:text-base">{subtitle}</p>
      </div>

      <div className="absolute bottom-3 right-4 z-10 flex items-center gap-2 sm:bottom-5 sm:right-6">
        {slides.map((slide, index) => (
          <button
            key={slide.src}
            type="button"
            onClick={() => setCurrentIndex(index)}
            className={`h-2.5 w-2.5 rounded-full border border-white/60 transition-colors ${
              index === currentIndex ? "bg-white" : "bg-white/30"
            }`}
            aria-label={`Show slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}