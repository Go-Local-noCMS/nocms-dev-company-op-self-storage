import { UnitTable } from "@/components/UnitTable";
import { FacilityInfoBar } from "@/components/FacilityInfoBar";
import { PhotoCarousel } from "@/components/PhotoCarousel";
import { FaqAccordion } from "@/components/content/FaqAccordion";
import { Testimonials } from "@/components/content/Testimonials";
import { StorageCTABanner } from "@/components/StorageCTABanner";
import { MapPin, Award, Clock, ShieldCheck } from "lucide-react";
import type { FaqItem } from "@/components/content/FaqAccordion";
import type { Testimonial } from "@/components/content/Testimonials";

const faqs: FaqItem[] = [
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit and debit cards, ACH bank transfers, and cash in person. Auto-pay is available and encouraged — there are no fees for setting it up.",
    category: "Payments",
  },
  {
    question: "What are your access hours?",
    answer: "Gate access is available 24 hours a day, 7 days a week, 365 days a year. Our office is open Monday–Friday 9am–6pm, Saturday 9am–5pm, and Sunday 11am–4pm.",
    category: "Access",
  },
  {
    question: "Do I need to get insurance for my stored items?",
    answer: "We strongly recommend protecting your belongings. We offer affordable tenant protection plans starting at $12/mo, or you can use your existing homeowner's or renter's insurance — many policies cover storage units.",
    category: "Insurance",
  },
  {
    question: "What items are not allowed in storage?",
    answer: "Prohibited items include hazardous materials, flammable liquids, explosives, perishable food, living plants, animals, and anything illegal. Please call us if you're unsure about a specific item.",
    category: "Access",
  },
  {
    question: "How do I reserve a unit?",
    answer: "Click any Reserve button on this page to hold your unit online — no credit card required. We'll hold it for 48 hours. You can also call us at (405) 555-0192 and we'll set it up over the phone.",
    category: "Getting Started",
  },
  {
    question: "Do you offer moving truck rentals?",
    answer: "We partner with local moving companies and truck rental agencies. Ask our staff for our preferred vendor list — several offer OP Self Storage customers discounted rates.",
    category: "Moving Tips",
  },
  {
    question: "What is the minimum rental period?",
    answer: "Our minimum rental period is one month. We offer month-to-month leases with no long-term commitment required, though we offer discounts for 6- and 12-month agreements.",
    category: "Getting Started",
  },
  {
    question: "How do I pack items for long-term storage?",
    answer: "Use quality boxes, wrap fragile items in bubble wrap, disassemble large furniture, and keep a detailed inventory. Store mattresses in plastic bags and keep appliances clean and dry. Our team is happy to share a full packing guide.",
    category: "Moving Tips",
  },
];

const testimonials: Testimonial[] = [
  {
    quote: "Best storage facility in OKC. Clean, secure, and the staff genuinely cares. I've been storing here for three years with zero issues.",
    author: "Todd B.",
    relationship: "Long-Term Customer",
    rating: 5,
  },
  {
    quote: "The climate control is top-notch. I stored antique furniture through a full Oklahoma summer and everything came out perfectly.",
    author: "Patricia M.",
    relationship: "Edmond Resident",
    rating: 5,
  },
  {
    quote: "Super easy to reserve online. Moved in the same day. The drive-up units are huge and the gate app is really convenient.",
    author: "Chris W.",
    relationship: "Business Owner",
    rating: 5,
  },
];

export default function FacilityPage() {
  return (
    <main id="main-content">
      {/* Hero */}
      <section className="bg-background py-14 border-b border-white/8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <div className="inline-flex items-center bg-white/5 border border-white/10 rounded-sm px-4 py-1.5 text-sm font-medium text-muted uppercase tracking-wider mb-5">
                <MapPin className="h-3.5 w-3.5 mr-2 text-primary" aria-hidden="true" />
                Oklahoma City — N May Ave
              </div>
              <h1 className="font-heading text-6xl md:text-8xl text-transparent bg-clip-text uppercase tracking-[0.06em] leading-[0.85]"
                style={{ backgroundImage: "linear-gradient(135deg, #e5e5e5 0%, #c0c0c0 50%, #808080 100%)" }}>
                Storage Units<br />Oklahoma City
              </h1>
            </div>
            <div className="flex flex-wrap gap-4 lg:pb-2">
              {[
                { icon: ShieldCheck, label: "24/7 Security" },
                { icon: Clock, label: "Always Open" },
                { icon: Award, label: "Price Lock" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 bg-surface border border-white/8 rounded-sm px-4 py-2.5">
                  <Icon className="h-4 w-4 text-primary" aria-hidden="true" />
                  <span className="text-sm text-muted font-medium uppercase tracking-wider">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FacilityInfoBar />
      <UnitTable />
      <PhotoCarousel />

      {/* About / History */}
      <section id="about" className="bg-background py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-5xl md:text-6xl text-text uppercase tracking-[0.08em] leading-[0.85] mb-6">
                Oklahoma&apos;s Most Trusted Storage
              </h2>
              <p className="text-muted leading-relaxed mb-5">
                OP Self Storage has been serving Oklahoma City and the surrounding metro area since 1999. We started with a single facility on N May Ave and have grown to three locations — all built on the same promise: clean, secure, climate-controlled storage with friendly service.
              </p>
              <p className="text-muted leading-relaxed mb-8">
                Every unit is individually alarmed, every corridor is well-lit and monitored by HD cameras, and every customer gets 24/7 gate access from day one. We built OP Self Storage for people who take their belongings seriously.
              </p>
              <div className="grid grid-cols-3 gap-6">
                {[
                  { value: "25+", label: "Years in OKC" },
                  { value: "3", label: "Locations" },
                  { value: "1,200+", label: "5-Star Reviews" },
                ].map(stat => (
                  <div key={stat.label} className="text-center bg-surface border border-white/8 rounded-sm py-5">
                    <p className="font-heading text-4xl text-primary mb-1">{stat.value}</p>
                    <p className="text-xs text-muted uppercase tracking-wider">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-surface border border-white/8 rounded-sm overflow-hidden aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
                alt="OP Self Storage facility interior showing clean, well-lit storage corridors"
                className="w-full h-full object-cover opacity-75"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-surface border-y border-white/8 py-16" id="directions">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-4xl text-text uppercase tracking-[0.08em] mb-8 text-center">Find Us</h2>
          <div className="rounded-sm overflow-hidden border border-white/8 aspect-[16/6]">
            <iframe
              title="OP Self Storage location map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3257.5!2d-97.5609!3d35.5028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDMwJzEwLjEiTiA5N8KwMzMnMzkuMiJX!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
            <a
              href="https://maps.google.com/?q=4821+N+May+Ave+Oklahoma+City+OK"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-accent text-background font-bold px-8 py-3.5 rounded-sm uppercase tracking-[0.2em] shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-transform"
            >
              <MapPin className="h-4 w-4" aria-hidden="true" />
              Get Directions
            </a>
          </div>
        </div>
      </section>

      <FaqAccordion
        faqs={faqs}
        heading="Storage Questions Answered"
      />

      <Testimonials
        testimonials={testimonials}
        variant="cards"
        heading="What Oklahoma Customers Say"
      />

      <StorageCTABanner
        heading="Reserve Your Unit Now"
        subheading="No credit card required. Price-lock guaranteed. Move in today."
      />
    </main>
  );
}
