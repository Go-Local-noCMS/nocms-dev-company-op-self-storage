"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselPhoto {
  src: string;
  alt: string;
  caption?: string;
}

interface PhotoCarouselProps {
  photos?: CarouselPhoto[];
  heading?: string;
}

const defaultPhotos: CarouselPhoto[] = [
  {
    src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&q=80",
    alt: "Climate-controlled storage corridor with bright lighting",
    caption: "Climate-Controlled Interior Units",
  },
  {
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80",
    alt: "Drive-up storage units exterior",
    caption: "Drive-Up Access Units",
  },
  {
    src: "https://images.unsplash.com/photo-1604014237800-1c9102c219da?w=1200&q=80",
    alt: "Security gate entrance at storage facility",
    caption: "Digital Security Gate",
  },
  {
    src: "https://images.unsplash.com/photo-1590247813693-5541d1c609fd?w=1200&q=80",
    alt: "Wide storage hallway with multiple unit doors",
    caption: "Wide, Well-Lit Hallways",
  },
];

export function PhotoCarousel({ photos = defaultPhotos, heading = "Tour Our Facility" }: PhotoCarouselProps) {
  const [current, setCurrent] = useState(0);

  function prev() {
    setCurrent(i => (i - 1 + photos.length) % photos.length);
  }
  function next() {
    setCurrent(i => (i + 1) % photos.length);
  }

  const photo = photos[current];

  return (
    <section className="bg-surface py-16 lg:py-20" id="photos">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading text-5xl md:text-6xl text-text uppercase tracking-[0.08em] leading-[0.85] mb-8 text-center">
          {heading}
        </h2>
        <div className="relative rounded-sm overflow-hidden border border-white/8">
          <div className="aspect-[16/7] relative bg-background">
            <img
              src={photo.src}
              alt={photo.alt}
              className="absolute inset-0 w-full h-full object-cover opacity-80"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" aria-hidden="true" />
            {photo.caption && (
              <div className="absolute bottom-6 left-6">
                <span className="inline-flex items-center bg-background/80 border border-white/10 backdrop-blur-sm rounded-sm px-4 py-2 text-sm text-text font-medium uppercase tracking-wider">
                  {photo.caption}
                </span>
              </div>
            )}
          </div>
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 h-11 w-11 rounded-sm bg-background/80 border border-white/15 flex items-center justify-center hover:bg-background transition-colors focus-visible:ring-2 focus-visible:ring-primary"
            aria-label="Previous photo"
          >
            <ChevronLeft className="h-5 w-5 text-text" />
          </button>
          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 h-11 w-11 rounded-sm bg-background/80 border border-white/15 flex items-center justify-center hover:bg-background transition-colors focus-visible:ring-2 focus-visible:ring-primary"
            aria-label="Next photo"
          >
            <ChevronRight className="h-5 w-5 text-text" />
          </button>
        </div>

        {/* Thumbnails */}
        <div className="flex gap-3 mt-4">
          {photos.map((p, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`flex-1 aspect-video rounded-sm overflow-hidden border transition-colors focus-visible:ring-2 focus-visible:ring-primary ${
                i === current ? "border-primary/60" : "border-white/8 opacity-50 hover:opacity-75"
              }`}
              aria-label={`View photo: ${p.alt}`}
            >
              <img src={p.src} alt="" className="w-full h-full object-cover" loading="lazy" aria-hidden="true" />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
