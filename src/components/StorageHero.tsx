"use client";

import { useState } from "react";
import { Search, MapPin, Star, ShieldCheck, Clock } from "lucide-react";

interface StorageHeroProps {
  headline?: string;
  subheadline?: string;
}

export function StorageHero({
  headline = "SECURE STORAGE\nIN OKLAHOMA CITY",
  subheadline = "Climate-controlled units from $49/mo. Reserve online in minutes.",
}: StorageHeroProps) {
  const [query, setQuery] = useState("");

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    const dest = query.trim()
      ? `/facility?location=${encodeURIComponent(query)}`
      : "/facility";
    window.location.href = dest;
  }

  const lines = headline.split("\n");

  return (
    <section className="relative bg-background overflow-hidden min-h-[88vh] flex flex-col justify-center">
      {/* Chrome grid background */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(192,192,192,0.4) 1px, transparent 1px),
            linear-gradient(90deg, rgba(192,192,192,0.4) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
        aria-hidden="true"
      />
      {/* Radial glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] opacity-20 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at center top, #c0c0c0 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center bg-white/5 border border-white/10 rounded-sm px-4 py-1.5 text-sm font-medium text-muted uppercase tracking-wider mb-8">
            <MapPin className="h-3.5 w-3.5 mr-2 text-primary" aria-hidden="true" />
            Oklahoma City &amp; Metro Area
          </div>

          {/* Headline */}
          <h1 className="font-heading leading-[0.85] uppercase tracking-[0.06em] mb-6">
            {lines.map((line, i) => (
              <span key={i} className="block">
                <span
                  className="text-transparent bg-clip-text"
                  style={{
                    backgroundImage: i === 0
                      ? "linear-gradient(135deg, #e5e5e5 0%, #c0c0c0 50%, #808080 100%)"
                      : "linear-gradient(135deg, #c0c0c0 0%, #e5e5e5 60%, #c0c0c0 100%)",
                    fontSize: "clamp(3.5rem, 9vw, 8rem)",
                  }}
                >
                  {line}
                </span>
              </span>
            ))}
          </h1>

          <p className="text-lg text-muted leading-relaxed max-w-xl mb-10 tracking-wide">
            {subheadline}
          </p>

          {/* Search */}
          <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-3 max-w-xl mb-10">
            <div className="relative flex-1">
              <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted" aria-hidden="true" />
              <input
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder="Enter zip code or city..."
                className="w-full bg-surface border border-white/10 rounded-sm pl-11 pr-4 py-4 text-text placeholder:text-muted focus-visible:outline-none focus-visible:border-white/25 focus-visible:ring-1 focus-visible:ring-white/10 transition-colors"
                aria-label="Enter zip code or city to find storage"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-accent text-background font-bold px-8 py-4 rounded-sm uppercase tracking-[0.2em] shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <Search className="h-4 w-4" aria-hidden="true" />
              Find Units
            </button>
          </form>

          {/* Trust signals */}
          <div className="flex flex-wrap gap-6 items-center">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-0.5">
                {[0, 1, 2, 3, 4].map(i => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" aria-hidden="true" />
                ))}
              </div>
              <span className="text-sm text-muted">
                <span className="text-text font-semibold">4.9</span> · 1,240+ reviews
              </span>
            </div>
            <div className="h-4 w-px bg-white/10" aria-hidden="true" />
            <div className="flex items-center gap-2 text-sm text-muted">
              <ShieldCheck className="h-4 w-4 text-primary" aria-hidden="true" />
              <span>25+ years in business</span>
            </div>
            <div className="h-4 w-px bg-white/10" aria-hidden="true" />
            <div className="flex items-center gap-2 text-sm text-muted">
              <Clock className="h-4 w-4 text-primary" aria-hidden="true" />
              <span>Price lock guarantee</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent pointer-events-none" aria-hidden="true" />
    </section>
  );
}
