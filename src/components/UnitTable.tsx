"use client";

import { useState } from "react";
import { CheckCircle, AlertTriangle, Thermometer, Car, Shield, ChevronRight } from "lucide-react";

export interface StorageUnit {
  size: string;
  dimensions: string;
  price: number;
  features: string[];
  availability: "available" | "limited" | "waitlist";
  badge?: string;
  popular?: boolean;
}

interface UnitTableProps {
  units?: StorageUnit[];
  heading?: string;
}

const defaultUnits: StorageUnit[] = [
  { size: "5×5", dimensions: "5 ft × 5 ft × 8 ft", price: 49, features: ["Climate-Controlled", "Ground Floor"], availability: "available", badge: "Best for Boxes" },
  { size: "5×10", dimensions: "5 ft × 10 ft × 8 ft", price: 79, features: ["Climate-Controlled", "Ground Floor"], availability: "available" },
  { size: "10×10", dimensions: "10 ft × 10 ft × 8 ft", price: 119, features: ["Climate-Controlled", "Drive-Up", "24/7 Access"], availability: "limited", badge: "Most Popular", popular: true },
  { size: "10×15", dimensions: "10 ft × 15 ft × 8 ft", price: 149, features: ["Climate-Controlled", "Drive-Up", "24/7 Access"], availability: "available" },
  { size: "10×20", dimensions: "10 ft × 20 ft × 8 ft", price: 189, features: ["Climate-Controlled", "Drive-Up", "24/7 Access", "Business Ready"], availability: "limited", badge: "3 Left!" },
  { size: "10×30", dimensions: "10 ft × 30 ft × 10 ft", price: 249, features: ["Climate-Controlled", "Drive-Up", "24/7 Access", "Business Ready", "Loading Dock"], availability: "available" },
];

const featureIcon: Record<string, React.ElementType> = {
  "Climate-Controlled": Thermometer,
  "Drive-Up": Car,
  "24/7 Access": Shield,
};

const availabilityConfig = {
  available: { label: "Available", color: "text-green-400", bg: "bg-green-400/10 border-green-400/20" },
  limited: { label: "Limited", color: "text-yellow-400", bg: "bg-yellow-400/10 border-yellow-400/20" },
  waitlist: { label: "Waitlist", color: "text-muted", bg: "bg-muted/10 border-muted/20" },
};

export function UnitTable({ units = defaultUnits, heading = "Available Storage Units" }: UnitTableProps) {
  const [filter, setFilter] = useState<string>("all");

  const filters = ["all", "climate", "drive-up", "business"];
  const filtered = filter === "all" ? units
    : filter === "climate" ? units.filter(u => u.features.includes("Climate-Controlled"))
    : filter === "drive-up" ? units.filter(u => u.features.includes("Drive-Up"))
    : units.filter(u => u.features.includes("Business Ready"));

  return (
    <section id="units" className="bg-background py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <h2 className="font-heading text-5xl md:text-6xl text-text uppercase tracking-[0.08em]">{heading}</h2>
          <div className="flex flex-wrap gap-2">
            {filters.map(f => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-1.5 rounded-sm text-xs font-medium uppercase tracking-wider border transition-colors ${
                  filter === f
                    ? "bg-primary text-background border-primary"
                    : "border-white/10 text-muted hover:border-white/20 hover:text-text"
                }`}
              >
                {f === "all" ? "All Sizes" : f === "climate" ? "Climate" : f === "drive-up" ? "Drive-Up" : "Business"}
              </button>
            ))}
          </div>
        </div>

        {/* Desktop table */}
        <div className="hidden md:block overflow-hidden rounded-sm border border-white/8">
          <table className="w-full">
            <thead>
              <tr className="bg-surface border-b border-white/8">
                <th className="px-6 py-4 text-left font-heading text-xs uppercase tracking-[0.2em] text-muted">Size</th>
                <th className="px-6 py-4 text-left font-heading text-xs uppercase tracking-[0.2em] text-muted">Dimensions</th>
                <th className="px-6 py-4 text-left font-heading text-xs uppercase tracking-[0.2em] text-muted">Features</th>
                <th className="px-6 py-4 text-left font-heading text-xs uppercase tracking-[0.2em] text-muted">Availability</th>
                <th className="px-6 py-4 text-right font-heading text-xs uppercase tracking-[0.2em] text-muted">Price/Mo</th>
                <th className="px-6 py-4 text-right font-heading text-xs uppercase tracking-[0.2em] text-muted">Reserve</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {filtered.map((unit, i) => {
                const avail = availabilityConfig[unit.availability];
                return (
                  <tr key={i} className={`group transition-colors hover:bg-surface/60 ${unit.popular ? "bg-primary/5" : ""}`}>
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-3">
                        <span className="font-heading text-2xl text-text tracking-wide">{unit.size}</span>
                        {unit.badge && (
                          <span className={`text-xs px-2 py-0.5 rounded-sm font-medium uppercase tracking-wider border ${
                            unit.badge === "Most Popular"
                              ? "bg-primary/15 border-primary/30 text-primary"
                              : unit.badge.includes("Left")
                              ? "bg-yellow-400/15 border-yellow-400/30 text-yellow-400"
                              : "bg-white/5 border-white/10 text-muted"
                          }`}>
                            {unit.badge}
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-5 font-mono text-sm text-muted">{unit.dimensions}</td>
                    <td className="px-6 py-5">
                      <div className="flex flex-wrap gap-2">
                        {unit.features.map(f => {
                          const Icon = featureIcon[f];
                          return (
                            <span key={f} className="inline-flex items-center gap-1 text-xs text-muted/80 bg-white/4 border border-white/6 px-2 py-1 rounded-sm">
                              {Icon && <Icon className="h-3 w-3" aria-hidden="true" />}
                              {f}
                            </span>
                          );
                        })}
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <span className={`inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-sm border ${avail.bg} ${avail.color}`}>
                        {unit.availability === "available"
                          ? <CheckCircle className="h-3 w-3" aria-hidden="true" />
                          : <AlertTriangle className="h-3 w-3" aria-hidden="true" />}
                        {avail.label}
                      </span>
                    </td>
                    <td className="px-6 py-5 text-right">
                      <span className="font-heading text-3xl text-primary tracking-wide">${unit.price}</span>
                      <span className="text-muted text-xs">/mo</span>
                    </td>
                    <td className="px-6 py-5 text-right">
                      {unit.availability !== "waitlist" ? (
                        <a
                          href={`/contact?unit=${unit.size}`}
                          className="inline-flex items-center gap-1.5 bg-gradient-to-r from-primary to-accent text-background font-bold px-5 py-2.5 rounded-sm text-sm uppercase tracking-[0.15em] shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
                        >
                          Reserve <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
                        </a>
                      ) : (
                        <a
                          href="/contact?type=waitlist"
                          className="inline-flex items-center gap-1.5 border border-white/15 text-muted font-medium px-5 py-2.5 rounded-sm text-sm uppercase tracking-[0.15em] hover:border-white/25 transition-colors"
                        >
                          Waitlist
                        </a>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Mobile cards */}
        <div className="md:hidden space-y-4">
          {filtered.map((unit, i) => {
            const avail = availabilityConfig[unit.availability];
            return (
              <div key={i} className={`bg-surface border rounded-sm p-5 ${unit.popular ? "border-primary/30" : "border-white/8"}`}>
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-heading text-3xl text-text">{unit.size}</span>
                      {unit.badge && (
                        <span className={`text-xs px-2 py-0.5 rounded-sm font-medium uppercase tracking-wider border ${
                          unit.badge === "Most Popular"
                            ? "bg-primary/15 border-primary/30 text-primary"
                            : unit.badge.includes("Left")
                            ? "bg-yellow-400/15 border-yellow-400/30 text-yellow-400"
                            : "bg-white/5 border-white/10 text-muted"
                        }`}>{unit.badge}</span>
                      )}
                    </div>
                    <p className="font-mono text-xs text-muted">{unit.dimensions}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-heading text-3xl text-primary">${unit.price}</p>
                    <p className="text-muted text-xs">/mo</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {unit.features.map(f => (
                    <span key={f} className="text-xs text-muted bg-white/4 border border-white/6 px-2 py-1 rounded-sm">{f}</span>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <span className={`inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-sm border ${avail.bg} ${avail.color}`}>
                    {avail.label}
                  </span>
                  {unit.availability !== "waitlist" ? (
                    <a
                      href={`/contact?unit=${unit.size}`}
                      className="inline-flex items-center gap-1.5 bg-gradient-to-r from-primary to-accent text-background font-bold px-5 py-2.5 rounded-sm text-sm uppercase tracking-[0.15em] shadow-lg hover:-translate-y-0.5 transition-all"
                    >
                      Reserve <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </a>
                  ) : (
                    <a href="/contact?type=waitlist" className="border border-white/15 text-muted font-medium px-4 py-2 rounded-sm text-sm uppercase tracking-[0.15em]">
                      Waitlist
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
