import { TeamGrid } from "@/components/content/TeamGrid";
import { StorageCTABanner } from "@/components/StorageCTABanner";
import { StatsBar } from "@/components/content/StatsBar";
import { Award, Heart, Users, MapPin, ChevronRight } from "lucide-react";
import type { Stat } from "@/components/content/StatsBar";
import type { TeamMember } from "@/components/content/TeamGrid";

const stats: Stat[] = [
  { value: "1999", label: "Founded in OKC" },
  { value: "4", label: "Oklahoma Facilities" },
  { value: "25", label: "Years of Service", suffix: "+" },
  { value: "1,200", label: "5-Star Reviews", suffix: "+" },
];

const team: TeamMember[] = [
  {
    name: "Dale Patterson",
    title: "Founder & CEO",
    bio: "Dale opened the first OP Self Storage on N May Ave in 1999 with a simple belief: storage should be clean, secure, and affordable. He still visits every facility weekly.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
  },
  {
    name: "Susan Okafor",
    title: "Director of Operations",
    bio: "Susan manages day-to-day operations across all four Oklahoma locations. Her background in facilities management ensures every unit meets our high standards.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
  },
  {
    name: "Marcus Webb",
    title: "Head of Security",
    bio: "Former law enforcement officer. Marcus designed and oversees our 24/7 digital security system, ensuring every customer's belongings are protected around the clock.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
  },
  {
    name: "Lisa Tran",
    title: "Customer Experience Manager",
    bio: "Lisa leads our customer service team and is the reason we maintain a 4.9-star average. She genuinely cares about every customer's experience from first call to move-out.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
  },
];

const awards = [
  { year: "2024", title: "Best Storage Facility — OKC Metro", org: "Oklahoma City Business Awards" },
  { year: "2023", title: "Top-Rated Self Storage", org: "Google Business — 4.9★ Average" },
  { year: "2022", title: "Small Business of the Year", org: "Greater OKC Chamber of Commerce" },
  { year: "2020", title: "Excellence in Customer Service", org: "Self Storage Association Oklahoma" },
];

export default function AboutPage() {
  return (
    <main id="main-content">
      {/* Hero */}
      <section className="bg-background py-14 lg:py-20 border-b border-white/8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center bg-white/5 border border-white/10 rounded-sm px-4 py-1.5 text-sm font-medium text-muted uppercase tracking-wider mb-6">
            Our Story
          </div>
          <h1 className="font-heading text-6xl md:text-8xl text-transparent bg-clip-text uppercase tracking-[0.06em] leading-[0.85] mb-6"
            style={{ backgroundImage: "linear-gradient(135deg, #e5e5e5 0%, #c0c0c0 50%, #808080 100%)" }}>
            Built in OKC.<br />Built to Last.
          </h1>
          <p className="text-muted text-lg max-w-2xl">
            OP Self Storage was founded in Oklahoma City in 1999 by Dale Patterson with one goal: give Oklahomans a storage facility they could actually trust. Twenty-five years later, that mission hasn&apos;t changed.
          </p>
        </div>
      </section>

      <StatsBar stats={stats} />

      {/* Story */}
      <section className="bg-background py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <h2 className="font-heading text-5xl md:text-6xl text-text uppercase tracking-[0.08em] leading-[0.85] mb-8">
                Our Story
              </h2>
              <div className="space-y-5 text-muted leading-relaxed">
                <p>
                  Dale Patterson started OP Self Storage with a single facility on N May Avenue in 1999. After spending years using substandard storage units that were dirty, poorly lit, and uncomfortably hot in Oklahoma summers, he decided to build what he always wanted as a customer.
                </p>
                <p>
                  The first OP location opened with 80 climate-controlled units, competitive pricing, and a commitment that every single unit would be cleaner than any competitor in the market. Within a year, word of mouth had filled the facility to capacity.
                </p>
                <p>
                  Today, OP Self Storage operates four facilities across the Oklahoma City metro — including locations in Edmond and Moore — serving thousands of residential and business customers. We&apos;re still family-owned, still Oklahoma-based, and still obsessed with doing storage right.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-surface border border-white/8 rounded-sm overflow-hidden aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80"
                  alt="OP Self Storage facility exterior, Oklahoma City"
                  className="w-full h-full object-cover opacity-70"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-surface border border-white/8 rounded-sm p-5">
                <p className="font-heading text-4xl text-primary">1999</p>
                <p className="text-xs text-muted uppercase tracking-wider">Founded in OKC</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & values */}
      <section className="bg-surface border-y border-white/8 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-5xl text-text uppercase tracking-[0.08em] leading-[0.85] mb-10 text-center">
            Our Mission
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Award,
                title: "Quality First",
                body: "Every facility is cleaned daily, inspected weekly, and held to a standard that exceeds what most customers expect. We don't cut corners because your belongings matter.",
              },
              {
                icon: Heart,
                title: "Community Rooted",
                body: "We're an Oklahoma company serving Oklahoma people. We sponsor local events, support OKC nonprofits, and hire locally. This community is home to us.",
              },
              {
                icon: Users,
                title: "Customer Obsessed",
                body: "Our 4.9-star average across 1,200+ reviews isn't luck — it's the result of a team that genuinely cares. We remember customers' names and go out of our way to help.",
              },
            ].map(({ icon: Icon, title, body }) => (
              <div key={title} className="bg-background border border-white/8 rounded-sm p-8 text-center">
                <div className="h-14 w-14 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center text-primary mx-auto mb-5">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="font-heading text-2xl text-text uppercase tracking-[0.08em] mb-3">{title}</h3>
                <p className="text-muted text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TeamGrid members={team} columns={4} heading="Meet the OP Team" />

      {/* Awards */}
      <section className="bg-surface border-y border-white/8 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-5xl text-text uppercase tracking-[0.08em] leading-[0.85] mb-10">
            Awards &amp; Recognition
          </h2>
          <div className="space-y-4">
            {awards.map(award => (
              <div key={award.title} className="bg-background border border-white/8 rounded-sm px-6 py-5 flex items-center justify-between gap-4">
                <div className="flex items-center gap-5">
                  <span className="font-heading text-3xl text-primary shrink-0">{award.year}</span>
                  <div>
                    <p className="font-medium text-text">{award.title}</p>
                    <p className="text-sm text-muted">{award.org}</p>
                  </div>
                </div>
                <Award className="h-5 w-5 text-primary shrink-0" aria-hidden="true" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community */}
      <section className="bg-background py-16 lg:py-20" id="community">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-5xl text-text uppercase tracking-[0.08em] leading-[0.85] mb-6">
                Community Involvement
              </h2>
              <div className="space-y-4 text-muted leading-relaxed text-sm">
                <p>We believe a business has an obligation to give back to the community that supports it. Each year, OP Self Storage donates storage space to local nonprofits, disaster relief organizations, and community groups that need it.</p>
                <p>We&apos;re proud sponsors of the OKC Metro Food Bank, the Regional Food Bank of Oklahoma, and the Scissortail Park Foundation. After major storms, we offer free temporary storage to displaced families.</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Free units donated", value: "50+" },
                { label: "Nonprofits supported", value: "12" },
                { label: "Disaster relief activations", value: "8" },
                { label: "Lbs of food donated", value: "10K+" },
              ].map(item => (
                <div key={item.label} className="bg-surface border border-white/8 rounded-sm p-6 text-center">
                  <p className="font-heading text-4xl text-primary mb-1">{item.value}</p>
                  <p className="text-xs text-muted uppercase tracking-wider">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Careers */}
      <section className="bg-surface border-t border-white/8 py-16" id="careers">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 bg-background border border-white/8 rounded-sm p-8 md:p-12">
            <div>
              <h2 className="font-heading text-4xl md:text-5xl text-text uppercase tracking-[0.08em] leading-[0.85] mb-3">
                Join the OP Team
              </h2>
              <p className="text-muted max-w-xl">
                We&apos;re always looking for friendly, reliable people who care about customer service. Full-time, part-time, and seasonal positions available across our Oklahoma locations.
              </p>
            </div>
            <a
              href="/contact?type=careers"
              className="shrink-0 inline-flex items-center gap-2 bg-gradient-to-r from-primary to-accent text-background font-bold px-8 py-3.5 rounded-sm uppercase tracking-[0.2em] shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-transform whitespace-nowrap"
            >
              View Openings <ChevronRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <StorageCTABanner
        heading="Ready to Store with Us?"
        subheading="Family-owned, Oklahoma-built, customer-obsessed. Reserve your unit today."
        primaryLabel="Find a Location"
        primaryHref="/storage-oklahoma"
      />
    </main>
  );
}
