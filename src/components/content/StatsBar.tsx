"use client";

import { useEffect, useRef, useState } from "react";

export interface Stat {
  value: string;
  label: string;
  suffix?: string;
}

interface StatsBarProps {
  stats?: Stat[];
  className?: string;
}

const defaultStats: Stat[] = [
  { value: "25", label: "Years in Business", suffix: "+" },
  { value: "4", label: "Oklahoma Locations" },
  { value: "1,200", label: "5-Star Reviews", suffix: "+" },
  { value: "100", label: "Price Lock Guarantee", suffix: "%" },
];

export function StatsBar({ stats = defaultStats, className = "" }: StatsBarProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={containerRef}
      className={`bg-surface border-y border-white/8 py-12 lg:py-16 ${className}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {(stats ?? []).map((stat, i) => (
            <div
              key={stat.label}
              className={`text-center transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <p className="font-heading text-4xl sm:text-5xl lg:text-6xl text-transparent bg-clip-text mb-2"
                style={{ backgroundImage: "linear-gradient(135deg, #e5e5e5 0%, #c0c0c0 60%, #808080 100%)" }}>
                {stat.value}
                {stat.suffix && <span>{stat.suffix}</span>}
              </p>
              <p className="text-muted text-xs font-medium uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
