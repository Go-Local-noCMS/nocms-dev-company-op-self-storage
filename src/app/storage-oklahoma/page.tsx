import { StorageCTABanner } from "@/components/StorageCTABanner";
import { MapPin, ChevronRight, Building2, DollarSign } from "lucide-react";

const cities = [
  {
    city: "Oklahoma City",
    slug: "/storage-oklahoma-city",
    facilities: 2,
    avgPrice: 119,
    units: "5×5 to 10×30",
    highlight: "Flagship Market",
    description: "Two locations in OKC proper — N May Ave and Midtown — serving the largest metro in Oklahoma.",
  },
  {
    city: "Edmond",
    slug: "/storage-edmond",
    facilities: 1,
    avgPrice: 109,
    units: "5×5 to 10×20",
    highlight: "North Metro",
    description: "Serving Edmond, Deer Creek, and the fast-growing north Oklahoma City corridor.",
  },
  {
    city: "Moore",
    slug: "/storage-moore",
    facilities: 1,
    avgPrice: 99,
    units: "5×5 to 10×20",
    highlight: "South Metro",
    description: "Convenient access for Moore, Norman, and the south OKC metro area.",
  },
];

const tips = [
  {
    title: "Oklahoma Storage Regulations",
    body: "Oklahoma self-storage facilities are governed by the Oklahoma Self-Service Storage Facility Act (Title 42 §191–197). Lien sales require proper notice, and stored items may not include hazardous materials per state environmental guidelines.",
  },
  {
    title: "Beat Oklahoma Summers",
    body: "With summer temps regularly exceeding 100°F, climate-controlled storage is essential for electronics, furniture, wine, artwork, and anything that warps or degrades in heat. All OP units include climate control.",
  },
  {
    title: "Tornado Season Prep",
    body: "Oklahoma's storm season (March–June) is a popular time to store keepsakes and important documents offsite. Our facilities are constructed with reinforced concrete and have never experienced a weather-related loss.",
  },
  {
    title: "Business Storage in Oklahoma",
    body: "Many Oklahoma small businesses use self-storage for inventory, equipment, and records. Month-to-month leases offer flexibility without the overhead of commercial warehouse space.",
  },
];

export default function OklahomaStoragePage() {
  return (
    <main id="main-content">
      {/* Hero */}
      <section className="bg-background py-14 lg:py-20 border-b border-white/8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center bg-white/5 border border-white/10 rounded-sm px-4 py-1.5 text-sm font-medium text-muted uppercase tracking-wider mb-6">
            <MapPin className="h-3.5 w-3.5 mr-2 text-primary" aria-hidden="true" />
            Oklahoma Statewide
          </div>
          <h1 className="font-heading text-6xl md:text-8xl text-transparent bg-clip-text uppercase tracking-[0.06em] leading-[0.85] mb-6"
            style={{ backgroundImage: "linear-gradient(135deg, #e5e5e5 0%, #c0c0c0 50%, #808080 100%)" }}>
            Storage in<br />Oklahoma
          </h1>
          <p className="text-muted text-lg max-w-2xl mb-8">
            OP Self Storage operates 4 climate-controlled facilities across the Oklahoma City metro. Find a location near you, compare pricing, and reserve online in minutes.
          </p>
          <div className="flex flex-wrap gap-4">
            {[
              { icon: Building2, label: "4 Facilities" },
              { icon: MapPin, label: "3 Oklahoma Cities" },
              { icon: DollarSign, label: "From $49/mo" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 bg-surface border border-white/8 rounded-sm px-4 py-2.5">
                <Icon className="h-4 w-4 text-primary" aria-hidden="true" />
                <span className="text-sm text-muted font-medium uppercase tracking-wider">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* City grid */}
      <section className="bg-background py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-5xl text-text uppercase tracking-[0.08em] leading-[0.85] mb-10">
            Oklahoma Locations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cities.map(city => (
              <div key={city.city} className="bg-surface border border-white/8 rounded-sm p-7 flex flex-col hover:border-white/15 transition-colors">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs bg-primary/15 border border-primary/30 text-primary px-3 py-1 rounded-sm uppercase tracking-wider font-medium">{city.highlight}</span>
                  <span className="text-xs text-muted">{city.facilities} {city.facilities === 1 ? "facility" : "facilities"}</span>
                </div>
                <h3 className="font-heading text-3xl text-text uppercase tracking-[0.08em] mb-2">{city.city}, OK</h3>
                <p className="text-muted text-sm leading-relaxed mb-5 flex-1">{city.description}</p>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="bg-background border border-white/8 rounded-sm p-3 text-center">
                    <p className="font-heading text-2xl text-primary">${city.avgPrice}</p>
                    <p className="text-xs text-muted">avg/mo</p>
                  </div>
                  <div className="bg-background border border-white/8 rounded-sm p-3 text-center">
                    <p className="font-mono text-sm text-text">{city.units}</p>
                    <p className="text-xs text-muted">sizes</p>
                  </div>
                </div>
                <a
                  href={city.slug}
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-accent text-background font-bold px-6 py-3 rounded-sm text-sm uppercase tracking-[0.15em] shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-transform"
                >
                  View {city.city} Units <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Avg pricing by area */}
      <section className="bg-surface border-y border-white/8 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-5xl text-text uppercase tracking-[0.08em] leading-[0.85] mb-10">
            Oklahoma Storage Pricing
          </h2>
          <div className="overflow-hidden rounded-sm border border-white/8">
            <table className="w-full">
              <thead>
                <tr className="bg-background border-b border-white/8">
                  <th className="px-6 py-4 text-left font-heading text-xs uppercase tracking-[0.2em] text-muted">City</th>
                  <th className="px-6 py-4 text-left font-heading text-xs uppercase tracking-[0.2em] text-muted">5×5</th>
                  <th className="px-6 py-4 text-left font-heading text-xs uppercase tracking-[0.2em] text-muted">10×10</th>
                  <th className="px-6 py-4 text-left font-heading text-xs uppercase tracking-[0.2em] text-muted">10×20</th>
                  <th className="px-6 py-4 text-left font-heading text-xs uppercase tracking-[0.2em] text-muted">Facilities</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {[
                  { city: "Oklahoma City", s55: "$49", s1010: "$119", s1020: "$189", count: 2 },
                  { city: "Edmond", s55: "$45", s1010: "$109", s1020: "$175", count: 1 },
                  { city: "Moore", s55: "$42", s1010: "$99", s1020: "$165", count: 1 },
                ].map(row => (
                  <tr key={row.city} className="hover:bg-background/40 transition-colors">
                    <td className="px-6 py-4 font-medium text-text">{row.city}, OK</td>
                    <td className="px-6 py-4 font-heading text-xl text-primary">{row.s55}/mo</td>
                    <td className="px-6 py-4 font-heading text-xl text-primary">{row.s1010}/mo</td>
                    <td className="px-6 py-4 font-heading text-xl text-primary">{row.s1020}/mo</td>
                    <td className="px-6 py-4 text-muted text-sm">{row.count} location{row.count > 1 ? "s" : ""}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted mt-3">All prices are starting rates for climate-controlled units. Actual prices may vary based on availability.</p>
        </div>
      </section>

      {/* OK-specific tips */}
      <section className="bg-background py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-5xl text-text uppercase tracking-[0.08em] leading-[0.85] mb-10">
            Oklahoma Storage Tips
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tips.map(tip => (
              <div key={tip.title} className="bg-surface border border-white/8 rounded-sm p-7">
                <h3 className="font-heading text-xl text-text uppercase tracking-[0.08em] mb-3">{tip.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{tip.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <StorageCTABanner
        heading="Find Your Oklahoma Location"
        subheading="4 facilities across the OKC metro. Climate-controlled from $42/mo."
        primaryLabel="Browse All Locations"
        primaryHref="/storage-oklahoma-city"
      />
    </main>
  );
}
