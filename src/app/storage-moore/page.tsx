import { UnitTable } from "@/components/UnitTable";
import { FacilityInfoBar } from "@/components/FacilityInfoBar";
import { StorageCTABanner } from "@/components/StorageCTABanner";
import { Testimonials } from "@/components/content/Testimonials";
import { MapPin } from "lucide-react";
import type { Testimonial } from "@/components/content/Testimonials";
import type { StorageUnit } from "@/components/UnitTable";

const units: StorageUnit[] = [
  { size: "5×5", dimensions: "5 ft × 5 ft × 8 ft", price: 42, features: ["Climate-Controlled", "Ground Floor"], availability: "available" },
  { size: "5×10", dimensions: "5 ft × 10 ft × 8 ft", price: 69, features: ["Climate-Controlled"], availability: "available" },
  { size: "10×10", dimensions: "10 ft × 10 ft × 8 ft", price: 99, features: ["Climate-Controlled", "Drive-Up", "24/7 Access"], availability: "limited", badge: "Most Popular", popular: true },
  { size: "10×15", dimensions: "10 ft × 15 ft × 8 ft", price: 129, features: ["Climate-Controlled", "Drive-Up", "24/7 Access"], availability: "available" },
  { size: "10×20", dimensions: "10 ft × 20 ft × 8 ft", price: 165, features: ["Climate-Controlled", "Drive-Up", "24/7 Access", "Business Ready"], availability: "available" },
];

const testimonials: Testimonial[] = [
  {
    quote: "After the 2013 tornado we needed emergency storage fast. OP Moore had us set up same day with no hassle. They truly care about this community.",
    author: "The Carlson Family",
    relationship: "Moore Resident",
    rating: 5,
  },
  {
    quote: "Best rates in Moore. The facility is spotless and I feel safe knowing everything is alarmed and monitored. Highly recommend.",
    author: "David L.",
    relationship: "Moore Customer",
    rating: 5,
  },
];

export default function MooreStoragePage() {
  return (
    <main id="main-content">
      <section className="bg-background py-14 border-b border-white/8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center bg-white/5 border border-white/10 rounded-sm px-4 py-1.5 text-sm font-medium text-muted uppercase tracking-wider mb-6">
            <MapPin className="h-3.5 w-3.5 mr-2 text-primary" aria-hidden="true" />
            Moore, Oklahoma
          </div>
          <h1 className="font-heading text-6xl md:text-8xl text-transparent bg-clip-text uppercase tracking-[0.06em] leading-[0.85] mb-6"
            style={{ backgroundImage: "linear-gradient(135deg, #e5e5e5 0%, #c0c0c0 50%, #808080 100%)" }}>
            Self Storage<br />Moore, OK
          </h1>
          <p className="text-muted text-lg max-w-2xl">
            Climate-controlled storage serving Moore, Norman, and the south OKC metro. Units from $42/mo with 24/7 secure access.
          </p>
        </div>
      </section>

      <FacilityInfoBar
        address="601 SW 19th St, Moore, OK 73160"
        phone="(405) 555-0421"
        officeHours="Mon–Fri 9am–6pm · Sat 9am–5pm · Sun Closed"
        gateHours="24/7 Gate Access"
        mapUrl="https://maps.google.com/?q=601+SW+19th+St+Moore+OK"
      />

      <UnitTable units={units} heading="Moore Storage Units" />

      <Testimonials testimonials={testimonials} variant="cards" heading="Moore Customer Reviews" />

      <StorageCTABanner
        heading="Reserve in Moore Today"
        subheading="Oklahoma's most affordable climate-controlled storage. From $42/mo."
        primaryLabel="Reserve a Moore Unit"
        primaryHref="/contact?location=moore"
        phone="(405) 555-0421"
      />
    </main>
  );
}
