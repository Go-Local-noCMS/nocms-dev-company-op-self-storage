import { UnitTable } from "@/components/UnitTable";
import { StorageCTABanner } from "@/components/StorageCTABanner";
import { FaqAccordion } from "@/components/content/FaqAccordion";
import { Testimonials } from "@/components/content/Testimonials";
import { MapPin, ChevronRight, Star } from "lucide-react";
import type { FaqItem } from "@/components/content/FaqAccordion";
import type { Testimonial } from "@/components/content/Testimonials";

const facilities = [
  {
    name: "OP Self Storage — N May Ave",
    address: "4821 N May Ave, Oklahoma City, OK 73112",
    distance: "Flagship Location",
    priceFrom: 49,
    topSizes: [
      { size: "10×10", price: 119, availability: "available" as const },
      { size: "10×20", price: 189, availability: "limited" as const },
      { size: "5×5", price: 49, availability: "available" as const },
    ],
    features: ["Climate Control", "Drive-Up", "24/7 Access", "Business Ready"],
    rating: 4.9,
    reviews: 487,
  },
  {
    name: "OP Self Storage — Midtown",
    address: "1204 NW 23rd St, Oklahoma City, OK 73106",
    distance: "2.1 miles from downtown",
    priceFrom: 55,
    topSizes: [
      { size: "10×10", price: 125, availability: "available" as const },
      { size: "10×15", price: 155, availability: "available" as const },
      { size: "5×10", price: 85, availability: "limited" as const },
    ],
    features: ["Climate Control", "Indoor Access", "24/7 Access", "Elevator"],
    rating: 4.8,
    reviews: 312,
  },
];

const localFaqs: FaqItem[] = [
  {
    question: "Why should I choose Oklahoma City self storage with climate control?",
    answer: "Oklahoma City experiences extreme temperatures — summers above 100°F and winters below 20°F. Without climate control, heat and cold cycles cause wood to warp, electronics to fail, fabrics to mildew, and photos to degrade. Our climate-controlled units stay at 55–85°F year-round.",
    category: "Oklahoma City Storage",
  },
  {
    question: "Do you serve all Oklahoma City neighborhoods?",
    answer: "Yes. Our N May Ave location serves Nichols Hills, Edgemere Park, Crown Heights, and northwest OKC. Our Midtown location serves Heritage Hills, Mesta Park, Film Row, and the downtown core. Both locations have easy highway access from I-44 and I-235.",
    category: "Oklahoma City Storage",
  },
  {
    question: "What storage options do you offer for Oklahoma City businesses?",
    answer: "We offer flexible month-to-month leases, package acceptance, business address service, and 24/7 gate access ideal for inventory, equipment, and documents. Several OKC restaurants, contractors, and retailers use us for overflow storage.",
    category: "Business Storage",
  },
  {
    question: "Are there storage units near Will Rogers World Airport?",
    answer: "Our N May Ave location is approximately 8 miles north of Will Rogers World Airport, easily accessible from I-44. It's a popular choice for travelers needing to store vehicles, luggage, or equipment.",
    category: "Oklahoma City Storage",
  },
];

const testimonials: Testimonial[] = [
  {
    quote: "Living in Edgemere Park, the N May Ave location is super convenient. I've stored here twice during home renovations — always clean, always secure.",
    author: "Amanda R.",
    relationship: "Nichols Hills Resident",
    rating: 5,
  },
  {
    quote: "As a small business in Film Row, the Midtown location is perfect for our prop and equipment overflow. The 24/7 access lets us grab things for shoots at any hour.",
    author: "Nate C.",
    relationship: "Film Production Company",
    rating: 5,
  },
  {
    quote: "Moved from Texas to OKC and needed somewhere to store my stuff while apartment hunting. OP made it easy — reserved online and was moved in within hours.",
    author: "Keisha P.",
    relationship: "New OKC Resident",
    rating: 5,
  },
];

export default function OKCStoragePage() {
  return (
    <main id="main-content">
      {/* Hero */}
      <section className="bg-background py-14 lg:py-20 border-b border-white/8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center bg-white/5 border border-white/10 rounded-sm px-4 py-1.5 text-sm font-medium text-muted uppercase tracking-wider mb-6">
            <MapPin className="h-3.5 w-3.5 mr-2 text-primary" aria-hidden="true" />
            Oklahoma City, OK
          </div>
          <h1 className="font-heading text-6xl md:text-8xl text-transparent bg-clip-text uppercase tracking-[0.06em] leading-[0.85] mb-6"
            style={{ backgroundImage: "linear-gradient(135deg, #e5e5e5 0%, #c0c0c0 50%, #808080 100%)" }}>
            Self Storage<br />Oklahoma City
          </h1>
          <p className="text-muted text-lg max-w-2xl mb-10">
            Two convenient Oklahoma City locations with climate-controlled units from $49/mo. Serving OKC since 1999 with 24/7 access and price-lock guarantees.
          </p>
        </div>
      </section>

      {/* Facility listings */}
      <section className="bg-background py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-5xl text-text uppercase tracking-[0.08em] leading-[0.85] mb-10">
            Oklahoma City Locations
          </h2>
          <div className="space-y-8">
            {facilities.map((facility, i) => (
              <div key={i} className="bg-surface border border-white/8 rounded-sm overflow-hidden">
                <div className="p-6 md:p-8 border-b border-white/8">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                    <div>
                      <h3 className="font-heading text-2xl text-text uppercase tracking-[0.08em] mb-1">{facility.name}</h3>
                      <div className="flex items-center gap-3 text-sm text-muted">
                        <span className="flex items-center gap-1">
                          <MapPin className="h-3.5 w-3.5" aria-hidden="true" />{facility.address}
                        </span>
                        <span className="text-white/20">·</span>
                        <span>{facility.distance}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <div className="flex gap-0.5">
                        {[0,1,2,3,4].map(j => (
                          <Star key={j} className="h-3.5 w-3.5 fill-primary text-primary" aria-hidden="true" />
                        ))}
                      </div>
                      <span className="text-sm text-muted">{facility.rating} ({facility.reviews} reviews)</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {facility.features.map(f => (
                      <span key={f} className="text-xs bg-white/4 border border-white/6 text-muted px-3 py-1 rounded-sm uppercase tracking-wider">{f}</span>
                    ))}
                  </div>
                </div>

                {/* Inline units */}
                <div className="p-6 md:p-8">
                  <p className="text-xs text-muted uppercase tracking-wider mb-4 font-medium">Available Units — Starting Prices</p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                    {facility.topSizes.map((unit, j) => (
                      <div key={j} className={`border rounded-sm p-4 flex items-center justify-between ${
                        unit.availability === "limited" ? "border-yellow-400/20 bg-yellow-400/5" : "border-white/8 bg-background/50"
                      }`}>
                        <div>
                          <p className="font-heading text-2xl text-text">{unit.size}</p>
                          <p className={`text-xs font-medium ${unit.availability === "limited" ? "text-yellow-400" : "text-green-400"}`}>
                            {unit.availability === "limited" ? "Limited" : "Available"}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="font-heading text-3xl text-primary">${unit.price}</p>
                          <p className="text-xs text-muted">/mo</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href="/facility"
                      className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-accent text-background font-bold px-6 py-3 rounded-sm text-sm uppercase tracking-[0.15em] shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-transform"
                    >
                      View All Units <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </a>
                    <a
                      href="/contact"
                      className="inline-flex items-center justify-center gap-2 border border-white/15 text-text font-semibold px-6 py-3 rounded-sm text-sm uppercase tracking-[0.15em] hover:bg-white/5 transition-colors"
                    >
                      Get Directions
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Neighborhoods */}
      <section className="bg-surface border-y border-white/8 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-5xl text-text uppercase tracking-[0.08em] leading-[0.85] mb-4">
            Serving All OKC Neighborhoods
          </h2>
          <p className="text-muted mb-10 max-w-2xl">Our two Oklahoma City locations provide convenient access to storage for residents across the metro area.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Nichols Hills", "Edgemere Park", "Crown Heights", "Heritage Hills",
              "Mesta Park", "Film Row", "Midtown OKC", "Paseo Arts District",
              "Gatewood", "Linwood", "Capitol Hill", "Classen Ten Penn",
              "Uptown 23rd", "Bricktown", "Deep Deuce", "The Flatiron District",
            ].map(hood => (
              <div key={hood} className="bg-background border border-white/8 rounded-sm px-4 py-3">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary/60 shrink-0" aria-hidden="true" />
                  <span className="text-sm text-muted">{hood}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials testimonials={testimonials} variant="cards" heading="Oklahoma City Customer Reviews" />
      <FaqAccordion faqs={localFaqs} heading="OKC Storage FAQs" />
      <StorageCTABanner
        heading="Store in Oklahoma City"
        subheading="Two OKC locations. Climate-controlled from $49/mo. Reserve online today."
        primaryLabel="View OKC Units"
        primaryHref="/facility"
      />
    </main>
  );
}
