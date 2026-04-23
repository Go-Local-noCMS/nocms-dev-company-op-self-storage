import { ChevronRight, Package, Home, Building2, Warehouse } from "lucide-react";

interface UnitSize {
  size: string;
  sqft: number;
  dimensions: string;
  icon: "closet" | "room" | "apartment" | "house" | "warehouse";
  priceFrom: number;
  whatFits: string[];
  bestFor: string;
  popular?: boolean;
}

interface SizeGuideGridProps {
  heading?: string;
}

const unitSizes: UnitSize[] = [
  {
    size: "5×5",
    sqft: 25,
    dimensions: "5 ft × 5 ft × 8 ft",
    icon: "closet",
    priceFrom: 49,
    whatFits: ["Boxes & files", "Small furniture", "Seasonal décor", "Sports equipment", "Bikes"],
    bestFor: "Closet overflow & small moves",
    popular: false,
  },
  {
    size: "5×10",
    sqft: 50,
    dimensions: "5 ft × 10 ft × 8 ft",
    icon: "room",
    priceFrom: 79,
    whatFits: ["Studio apartment contents", "Mattress & bed frame", "Small couch", "Boxes", "Business records"],
    bestFor: "Studio or 1-bedroom",
    popular: false,
  },
  {
    size: "10×10",
    sqft: 100,
    dimensions: "10 ft × 10 ft × 8 ft",
    icon: "apartment",
    priceFrom: 119,
    whatFits: ["1–2 bedroom apartment", "Living room set", "Dining table", "Appliances", "Business inventory"],
    bestFor: "2-bedroom apartment or office",
    popular: true,
  },
  {
    size: "10×15",
    sqft: 150,
    dimensions: "10 ft × 15 ft × 8 ft",
    icon: "apartment",
    priceFrom: 149,
    whatFits: ["2–3 bedroom home", "Full kitchen", "Multiple furniture sets", "Business pallets", "Large appliances"],
    bestFor: "3-bedroom home move",
    popular: false,
  },
  {
    size: "10×20",
    sqft: 200,
    dimensions: "10 ft × 20 ft × 8 ft",
    icon: "house",
    priceFrom: 189,
    whatFits: ["3–4 bedroom home", "Full household contents", "Multiple vehicles' worth", "Business equipment", "File systems"],
    bestFor: "Large home or business storage",
    popular: false,
  },
  {
    size: "10×30",
    sqft: 300,
    dimensions: "10 ft × 30 ft × 10 ft",
    icon: "warehouse",
    priceFrom: 249,
    whatFits: ["5+ bedroom home", "Commercial inventory", "Large equipment", "Fleet storage", "Warehouse overflow"],
    bestFor: "Business warehouse needs",
    popular: false,
  },
];

const iconMap: Record<string, React.ElementType> = {
  closet: Package,
  room: Package,
  apartment: Home,
  house: Home,
  warehouse: Warehouse,
};

export function SizeGuideGrid({ heading = "Find Your Perfect Unit Size" }: SizeGuideGridProps) {
  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="font-heading text-6xl md:text-8xl text-text uppercase tracking-[0.08em] leading-[0.85] mb-4">
            {heading}
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Compare unit sizes side by side. Every unit is climate-controlled with 24/7 access and digital security.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {unitSizes.map((unit) => {
            const Icon = iconMap[unit.icon] ?? Building2;
            return (
              <div
                key={unit.size}
                className={`bg-surface rounded-sm border p-7 flex flex-col ${
                  unit.popular
                    ? "border-primary/40 shadow-2xl shadow-primary/10"
                    : "border-white/8"
                } hover:border-white/15 transition-colors`}
              >
                {unit.popular && (
                  <div className="mb-4">
                    <span className="inline-flex items-center bg-primary/15 border border-primary/30 rounded-sm px-3 py-1 text-xs font-medium text-primary uppercase tracking-wider">
                      Most Popular
                    </span>
                  </div>
                )}

                {/* Size visual */}
                <div className="flex items-end gap-4 mb-5">
                  <div
                    className="bg-white/5 border border-white/8 rounded-sm flex items-center justify-center"
                    style={{ width: `${Math.min(unit.sqft / 3, 80)}px`, height: `${Math.min(unit.sqft / 4, 60)}px`, minWidth: "40px", minHeight: "32px" }}
                    aria-hidden="true"
                  >
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-heading text-5xl text-text leading-none tracking-wide">{unit.size}</p>
                    <p className="font-mono text-xs text-muted mt-1">{unit.dimensions}</p>
                  </div>
                </div>

                <div className="h-px bg-gradient-to-r from-transparent via-white/8 to-transparent mb-5" />

                {/* Price */}
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="font-heading text-4xl text-primary leading-none">${unit.priceFrom}</span>
                  <span className="text-muted text-sm">/mo from</span>
                </div>
                <p className="text-xs text-muted uppercase tracking-wider mb-5">{unit.sqft} sq ft · {unit.bestFor}</p>

                {/* What fits */}
                <ul className="space-y-2 mb-6 flex-1">
                  {unit.whatFits.map(item => (
                    <li key={item} className="flex items-center gap-2 text-sm text-muted/80">
                      <span className="h-1 w-1 rounded-full bg-primary/60 shrink-0" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>

                <a
                  href={`/facility?size=${unit.size}`}
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-accent text-background font-bold px-6 py-3 rounded-sm text-sm uppercase tracking-[0.15em] shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
                >
                  Reserve {unit.size} Unit <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              </div>
            );
          })}
        </div>

        {/* Help me choose */}
        <div className="mt-14 bg-surface border border-white/8 rounded-sm p-8 md:p-12 text-center">
          <h3 className="font-heading text-4xl md:text-5xl text-text uppercase tracking-[0.08em] mb-3">
            Not Sure Which Size?
          </h3>
          <p className="text-muted max-w-xl mx-auto mb-8">
            Our storage specialists will help you choose the right unit based on what you need to store. Free consultation, no pressure.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/contact?type=size-help"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-accent text-background font-bold px-8 py-3.5 rounded-sm uppercase tracking-[0.2em] shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
            >
              Get a Size Recommendation
            </a>
            <a
              href="tel:+14055550192"
              className="border border-white/15 text-text font-semibold px-8 py-3.5 rounded-sm uppercase tracking-[0.15em] hover:bg-white/5 transition-colors"
            >
              Call (405) 555-0192
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
