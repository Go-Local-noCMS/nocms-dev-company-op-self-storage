import { UnitTable } from "@/components/UnitTable";
import { FacilityInfoBar } from "@/components/FacilityInfoBar";
import { StorageCTABanner } from "@/components/StorageCTABanner";
import { Testimonials } from "@/components/content/Testimonials";
import { MapPin } from "lucide-react";
import type { Testimonial } from "@/components/content/Testimonials";
import type { StorageUnit } from "@/components/UnitTable";

const units: StorageUnit[] = [
  { size: "5×5", dimensions: "5 ft × 5 ft × 8 ft", price: 45, features: ["Climate-Controlled", "Ground Floor"], availability: "available" },
  { size: "5×10", dimensions: "5 ft × 10 ft × 8 ft", price: 75, features: ["Climate-Controlled", "Ground Floor"], availability: "available" },
  { size: "10×10", dimensions: "10 ft × 10 ft × 8 ft", price: 109, features: ["Climate-Controlled", "Drive-Up", "24/7 Access"], availability: "available", badge: "Most Popular", popular: true },
  { size: "10×15", dimensions: "10 ft × 15 ft × 8 ft", price: 139, features: ["Climate-Controlled", "Drive-Up", "24/7 Access"], availability: "limited", badge: "2 Left!" },
  { size: "10×20", dimensions: "10 ft × 20 ft × 8 ft", price: 175, features: ["Climate-Controlled", "Drive-Up", "24/7 Access", "Business Ready"], availability: "available" },
];

const testimonials: Testimonial[] = [
  {
    quote: "Living in Edmond, this location is so convenient. Clean, modern, and the staff is always helpful. My antiques have been perfectly preserved through two Oklahoma summers.",
    author: "Carol H.",
    relationship: "Edmond Resident",
    rating: 5,
  },
  {
    quote: "We used OP Edmond for business inventory storage during our warehouse expansion. Flexible terms and great 24/7 access made it seamless.",
    author: "Premier HVAC Services",
    relationship: "Business Customer",
    rating: 5,
  },
];

export default function EdmondStoragePage() {
  return (
    <main id="main-content">
      <section className="bg-background py-14 border-b border-white/8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center bg-white/5 border border-white/10 rounded-sm px-4 py-1.5 text-sm font-medium text-muted uppercase tracking-wider mb-6">
            <MapPin className="h-3.5 w-3.5 mr-2 text-primary" aria-hidden="true" />
            Edmond, Oklahoma
          </div>
          <h1 className="font-heading text-6xl md:text-8xl text-transparent bg-clip-text uppercase tracking-[0.06em] leading-[0.85] mb-6"
            style={{ backgroundImage: "linear-gradient(135deg, #e5e5e5 0%, #c0c0c0 50%, #808080 100%)" }}>
            Self Storage<br />Edmond, OK
          </h1>
          <p className="text-muted text-lg max-w-2xl">
            Climate-controlled storage serving Edmond, Deer Creek, and north OKC metro. Units from $45/mo with 24/7 access and price-lock guarantee.
          </p>
        </div>
      </section>

      <FacilityInfoBar
        address="2811 S Broadway, Edmond, OK 73013"
        phone="(405) 555-0318"
        officeHours="Mon–Fri 9am–6pm · Sat 9am–5pm · Sun Closed"
        gateHours="24/7 Gate Access"
        mapUrl="https://maps.google.com/?q=2811+S+Broadway+Edmond+OK"
      />

      <UnitTable units={units} heading="Edmond Storage Units" />

      <Testimonials testimonials={testimonials} variant="cards" heading="Edmond Customer Reviews" />

      <StorageCTABanner
        heading="Reserve in Edmond Today"
        subheading="Units from $45/mo. No credit card required. Same-day move-in available."
        primaryLabel="Reserve an Edmond Unit"
        primaryHref="/contact?location=edmond"
        phone="(405) 555-0318"
      />
    </main>
  );
}
