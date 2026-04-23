import { SizeGuideGrid } from "@/components/SizeGuideGrid";
import { StorageCTABanner } from "@/components/StorageCTABanner";
import { FaqAccordion } from "@/components/content/FaqAccordion";
import type { FaqItem } from "@/components/content/FaqAccordion";

const sizeGuideFaqs: FaqItem[] = [
  {
    question: "How do I know which unit size is right for me?",
    answer: "A good rule of thumb: a 5×5 fits a large closet, a 10×10 fits a 1–2 bedroom apartment, and a 10×20 fits a 3–4 bedroom home. When in doubt, go one size up — you'll appreciate the extra room when loading and unloading.",
    category: "Choosing a Size",
  },
  {
    question: "What's the largest unit you offer?",
    answer: "Our largest standard unit is 10×30 (300 sq ft, 10 ft ceiling). For commercial needs requiring more space, contact us — we can accommodate larger footprints at our N May Ave facility.",
    category: "Choosing a Size",
  },
  {
    question: "Are all units climate-controlled?",
    answer: "Yes. Every unit at every OP Self Storage facility is climate-controlled, maintaining 55–85°F with humidity management year-round. Oklahoma summers and winters are hard on belongings — we protect everything.",
    category: "Features",
  },
  {
    question: "Can I upgrade to a larger unit if I need more space?",
    answer: "Absolutely. If you need to upgrade, just let us know. We'll move you to a larger unit (subject to availability) and your new rate kicks in on your next billing cycle. No penalties for upgrading.",
    category: "Choosing a Size",
  },
  {
    question: "Do you offer a size recommendation service?",
    answer: "Yes! Call us at (405) 555-0192 or use our online form. Tell us what you need to store and we'll recommend the right size. We'd rather fit you in the right unit than have you pay for space you don't need.",
    category: "Features",
  },
];

export default function SizeGuidePage() {
  return (
    <main id="main-content">
      {/* Header */}
      <section className="bg-background py-14 border-b border-white/8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center bg-white/5 border border-white/10 rounded-sm px-4 py-1.5 text-sm font-medium text-muted uppercase tracking-wider mb-6">
            Storage Size Guide
          </div>
          <h1 className="font-heading text-6xl md:text-8xl text-transparent bg-clip-text uppercase tracking-[0.06em] leading-[0.85] mb-6"
            style={{ backgroundImage: "linear-gradient(135deg, #e5e5e5 0%, #c0c0c0 50%, #808080 100%)" }}>
            Choose Your<br />Unit Size
          </h1>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Every size from a 5×5 closet to a 10×30 warehouse. Compare dimensions, what fits, and pricing — then reserve online in minutes.
          </p>
        </div>
      </section>

      <SizeGuideGrid />

      {/* Visual comparison */}
      <section className="bg-surface border-y border-white/8 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-5xl text-text uppercase tracking-[0.08em] leading-[0.85] mb-10 text-center">
            Visual Size Comparison
          </h2>
          <div className="flex flex-wrap items-end justify-center gap-4 py-8">
            {[
              { size: "5×5", w: 40, h: 40, price: 49 },
              { size: "5×10", w: 40, h: 80, price: 79 },
              { size: "10×10", w: 80, h: 80, price: 119 },
              { size: "10×15", w: 80, h: 120, price: 149 },
              { size: "10×20", w: 80, h: 160, price: 189 },
              { size: "10×30", w: 80, h: 240, price: 249 },
            ].map(u => (
              <div key={u.size} className="flex flex-col items-center gap-3">
                <span className="font-heading text-xl text-primary">${u.price}/mo</span>
                <div
                  className="bg-primary/15 border border-primary/30 rounded-sm flex items-center justify-center"
                  style={{ width: `${u.w}px`, height: `${Math.min(u.h, 180)}px` }}
                  aria-label={`${u.size} unit visual`}
                >
                  <span className="font-heading text-xs text-primary/80 rotate-[-90deg] whitespace-nowrap" style={{ writingMode: u.h > 60 ? "initial" : "vertical-rl" }}>
                    {u.size}
                  </span>
                </div>
                <span className="font-heading text-sm text-muted uppercase tracking-wider">{u.size}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-muted mt-4 italic">Diagram is proportional. Heights represent interior volume.</p>
        </div>
      </section>

      <FaqAccordion faqs={sizeGuideFaqs} heading="Size Guide FAQs" />

      <StorageCTABanner
        heading="Ready to Reserve?"
        subheading="All sizes available online. No credit card required to hold your unit."
        primaryLabel="Browse All Units"
        primaryHref="/facility"
      />
    </main>
  );
}
