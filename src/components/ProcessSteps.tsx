import { Search, CheckCircle, Truck } from "lucide-react";

interface Step {
  number: string;
  icon: "search" | "check" | "truck";
  title: string;
  description: string;
}

interface ProcessStepsProps {
  heading?: string;
  steps?: Step[];
}

const defaultSteps: Step[] = [
  {
    number: "01",
    icon: "search",
    title: "Find Your Unit",
    description: "Browse available sizes online or call us. Filter by size, price, or feature — climate-control, drive-up, or business-ready.",
  },
  {
    number: "02",
    icon: "check",
    title: "Reserve Online",
    description: "Lock in your rate in under 2 minutes. No credit card required to reserve. We'll hold your unit with a price-lock guarantee.",
  },
  {
    number: "03",
    icon: "truck",
    title: "Move In Anytime",
    description: "Access your unit 24/7 from day one. Drive right up to your unit, unload on your schedule, and manage everything online.",
  },
];

const iconMap = { search: Search, check: CheckCircle, truck: Truck };

export function ProcessSteps({ heading = "Storage Made Simple", steps = defaultSteps }: ProcessStepsProps) {
  return (
    <section className="bg-surface py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="font-heading text-6xl md:text-7xl text-text uppercase tracking-[0.08em] leading-[0.85] mb-4">
            {heading}
          </h2>
          <p className="text-muted text-lg max-w-xl mx-auto">Three steps from searching to storing. Reserve in minutes, move in same day.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-10 left-[calc(16.66%+2rem)] right-[calc(16.66%+2rem)] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" aria-hidden="true" />
          {(steps ?? []).map((step, i) => {
            const Icon = iconMap[step.icon];
            return (
              <div key={i} className="relative flex flex-col items-center text-center">
                <div className="relative mb-6">
                  <div className="h-20 w-20 rounded-sm bg-background border border-white/8 flex items-center justify-center shadow-2xl shadow-black/40">
                    <Icon className="h-8 w-8 text-primary" aria-hidden="true" />
                  </div>
                  <span className="absolute -top-3 -right-3 font-heading text-xs text-muted bg-surface border border-white/8 rounded-sm px-2 py-0.5 tracking-[0.2em]">
                    {step.number}
                  </span>
                </div>
                <h3 className="font-heading text-2xl text-text uppercase tracking-[0.1em] mb-3">{step.title}</h3>
                <p className="text-muted text-sm leading-relaxed max-w-xs">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
