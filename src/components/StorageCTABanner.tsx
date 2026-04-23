import { ChevronRight, Phone } from "lucide-react";

interface StorageCTABannerProps {
  heading?: string;
  subheading?: string;
  primaryLabel?: string;
  primaryHref?: string;
  phone?: string;
}

export function StorageCTABanner({
  heading = "Reserve Your Unit Today",
  subheading = "Rates start at $49/mo. Price-lock guarantee. Move in same day.",
  primaryLabel = "View Available Units",
  primaryHref = "/facility",
  phone = "(405) 555-0192",
}: StorageCTABannerProps) {
  return (
    <section className="bg-surface border-y border-white/8 py-16 lg:py-20 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "linear-gradient(rgba(192,192,192,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(192,192,192,0.5) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-heading text-5xl md:text-7xl text-transparent bg-clip-text uppercase tracking-[0.08em] leading-[0.85] mb-4"
          style={{ backgroundImage: "linear-gradient(135deg, #e5e5e5 0%, #c0c0c0 50%, #808080 100%)" }}>
          {heading}
        </h2>
        <p className="text-muted text-lg mb-10 max-w-xl mx-auto">{subheading}</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={primaryHref}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-accent text-background font-bold px-10 py-4 rounded-sm uppercase tracking-[0.2em] shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-transform text-base"
          >
            {primaryLabel} <ChevronRight className="h-4 w-4" aria-hidden="true" />
          </a>
          <a
            href={`tel:${phone.replace(/[^\d+]/g, "")}`}
            className="inline-flex items-center gap-2 border border-white/15 text-text font-semibold px-8 py-4 rounded-sm uppercase tracking-[0.15em] hover:bg-white/5 transition-colors text-base"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            {phone}
          </a>
        </div>
      </div>
    </section>
  );
}
