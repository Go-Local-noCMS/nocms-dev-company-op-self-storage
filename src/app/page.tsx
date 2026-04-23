import { StorageHero } from "@/components/StorageHero";
import { ProcessSteps } from "@/components/ProcessSteps";
import { FeatureGrid } from "@/components/FeatureGrid";
import { StorageCTABanner } from "@/components/StorageCTABanner";
import { Testimonials } from "@/components/content/Testimonials";
import { StatsBar } from "@/components/content/StatsBar";
import type { Testimonial } from "@/components/content/Testimonials";
import type { Stat } from "@/components/content/StatsBar";

const stats: Stat[] = [
  { value: "25", label: "Years in Business", suffix: "+" },
  { value: "1,200", label: "5-Star Reviews" },
  { value: "3", label: "Oklahoma Locations" },
  { value: "100", label: "Price Lock Guarantee", suffix: "%" },
];

const testimonials: Testimonial[] = [
  {
    quote: "I've used three storage facilities over the years and OP Self Storage is by far the cleanest and most secure. The climate control kept my furniture in perfect condition through the Oklahoma summer.",
    author: "Marcus D.",
    relationship: "Oklahoma City Customer",
    rating: 5,
  },
  {
    quote: "Reserved online in under five minutes and moved in the same afternoon. The drive-up access made unloading my truck so easy. Highly recommend for anyone moving.",
    author: "Jen T.",
    relationship: "Edmond Customer",
    rating: 5,
  },
  {
    quote: "We store business inventory here and the 24/7 access is a game-changer. The staff is friendly and the facility is always well-lit and secure. Worth every penny.",
    author: "Rodriguez Landscaping",
    relationship: "Business Storage Customer",
    rating: 5,
  },
  {
    quote: "The price-lock guarantee is what sold me. After two years my rate hasn't budged. OP Self Storage actually keeps their promises.",
    author: "Sandra K.",
    relationship: "Moore Customer",
    rating: 5,
  },
];

export default function HomePage() {
  return (
    <main id="main-content">
      <StorageHero />
      <StatsBar stats={stats} />
      <ProcessSteps />
      <FeatureGrid />
      <Testimonials
        testimonials={testimonials}
        variant="cards"
        heading="What Our Customers Say"
      />
      <StorageCTABanner
        heading="Find Your Unit Today"
        subheading="Climate-controlled storage from $49/mo. Reserve online — no card required."
        primaryLabel="Browse Available Units"
        primaryHref="/facility"
      />
    </main>
  );
}
