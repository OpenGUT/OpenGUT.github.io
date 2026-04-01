"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const slides = [
  {
    src: `${basePath}/carousel/pcb_rendering.png`,
    alt: "OpenGUT sensor board PCB rendering.",
    caption: "Open-source hardware — schematic, layout, and BOM all included.",
  },
  {
    src: `${basePath}/carousel/scrnshot_annotation.png`,
    alt: "Signal annotation panel in the Playground desktop app.",
    caption: "Browse recordings, label events, and export annotated segments in seconds.",
  },
  {
    src: `${basePath}/carousel/scrnshot_denoising.png`,
    alt: "AudioSep-based denoising filter applied to a gastric sound recording.",
    caption: "AI-powered filtering isolates gut sounds from ambient noise.",
  },
];

type ImageCarouselProps = {
  title: string;
  subtitle: string;
};

export function ImageCarousel({ title, subtitle }: ImageCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="relative overflow-hidden rounded-[1.6rem] bg-[var(--color-ink)]">
      <div className="relative aspect-[16/11] min-h-[28rem] w-full sm:aspect-[16/9] md:min-h-[34rem]">
        {slides.map((slide, index) => (
          <div
            key={slide.src}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === activeIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              priority={index === 0}
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 1200px"
            />
          </div>
        ))}

        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(18,22,28,0.1),rgba(18,22,28,0.72))]" />

        <div className="absolute inset-x-0 top-0 p-6 sm:p-8 lg:p-10">
          <div className="max-w-3xl">
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-[var(--color-gold)] sm:text-sm">
              Open Source Project
            </p>
            <h1 className="mt-4 max-w-3xl font-[family:var(--font-fraunces)] text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
              {title}
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-8 text-[color:rgba(255,255,255,0.82)] sm:text-lg">
              {subtitle}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/docs" className="button-primary">
                Explore documentation
              </Link>
              <Link href="/docs/getting-started" className="button-secondary">
                Get started
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-0 flex flex-col gap-5 p-6 sm:p-8 lg:flex-row lg:items-end lg:justify-between lg:p-10">
          <p className="max-w-xl text-sm leading-7 text-[color:rgba(255,255,255,0.82)] sm:text-base">
            {slides[activeIndex]?.caption}
          </p>

          <div className="flex items-center gap-3">
            {slides.map((slide, index) => (
              <button
                key={slide.src}
                type="button"
                aria-label={`Show slide ${index + 1}`}
                onClick={() => setActiveIndex(index)}
                className={`h-3 rounded-full transition-all ${
                  index === activeIndex
                    ? "w-10 bg-[var(--color-gold)]"
                    : "w-3 bg-white/45 hover:bg-white/70"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}