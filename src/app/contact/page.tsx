"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Clock, ChevronDown, Send } from "lucide-react";

const locations = [
  {
    name: "OKC — N May Ave (Flagship)",
    address: "4821 N May Ave, Oklahoma City, OK 73112",
    phone: "(405) 555-0192",
    email: "mayard@opsselfstorage.com",
    officeHours: "Mon–Fri 9am–6pm · Sat 9am–5pm · Sun 11am–4pm",
    gateHours: "24/7 Gate Access",
    mapUrl: "https://maps.google.com/?q=4821+N+May+Ave+Oklahoma+City+OK",
  },
  {
    name: "OKC — Midtown",
    address: "1204 NW 23rd St, Oklahoma City, OK 73106",
    phone: "(405) 555-0234",
    email: "midtown@opsselfstorage.com",
    officeHours: "Mon–Fri 9am–6pm · Sat 9am–5pm · Sun 11am–4pm",
    gateHours: "24/7 Gate Access",
    mapUrl: "https://maps.google.com/?q=1204+NW+23rd+St+Oklahoma+City+OK",
  },
  {
    name: "Edmond",
    address: "2811 S Broadway, Edmond, OK 73013",
    phone: "(405) 555-0318",
    email: "edmond@opsselfstorage.com",
    officeHours: "Mon–Fri 9am–6pm · Sat 9am–5pm · Sun Closed",
    gateHours: "24/7 Gate Access",
    mapUrl: "https://maps.google.com/?q=2811+S+Broadway+Edmond+OK",
  },
  {
    name: "Moore",
    address: "601 SW 19th St, Moore, OK 73160",
    phone: "(405) 555-0421",
    email: "moore@opsselfstorage.com",
    officeHours: "Mon–Fri 9am–6pm · Sat 9am–5pm · Sun Closed",
    gateHours: "24/7 Gate Access",
    mapUrl: "https://maps.google.com/?q=601+SW+19th+St+Moore+OK",
  },
];

const inquiryTypes = [
  "General Inquiry",
  "Reserve a Unit",
  "Billing & Payments",
  "Moving Assistance",
  "Business Storage",
  "Waitlist Request",
  "Careers",
  "Other",
];

export default function ContactPage() {
  const [selectedLocation, setSelectedLocation] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    location: locations[0].name,
    inquiry: "General Inquiry",
    message: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  const loc = locations[selectedLocation];

  return (
    <main id="main-content">
      {/* Hero */}
      <section className="bg-background py-14 border-b border-white/8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center bg-white/5 border border-white/10 rounded-sm px-4 py-1.5 text-sm font-medium text-muted uppercase tracking-wider mb-6">
            Get in Touch
          </div>
          <h1 className="font-heading text-6xl md:text-8xl text-transparent bg-clip-text uppercase tracking-[0.06em] leading-[0.85]"
            style={{ backgroundImage: "linear-gradient(135deg, #e5e5e5 0%, #c0c0c0 50%, #808080 100%)" }}>
            Contact Us
          </h1>
        </div>
      </section>

      <section className="bg-background py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

            {/* Location selector + info */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <label htmlFor="location-select" className="block text-xs text-muted uppercase tracking-wider font-medium mb-2">
                  Select Location
                </label>
                <div className="relative">
                  <select
                    id="location-select"
                    value={selectedLocation}
                    onChange={e => setSelectedLocation(Number(e.target.value))}
                    className="w-full appearance-none bg-surface border border-white/10 rounded-sm px-4 py-3.5 text-text focus:outline-none focus:border-white/25 focus:ring-1 focus:ring-white/10 transition-colors pr-10"
                  >
                    {locations.map((l, i) => (
                      <option key={i} value={i}>{l.name}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted pointer-events-none" aria-hidden="true" />
                </div>
              </div>

              <div className="bg-surface border border-white/8 rounded-sm p-6 space-y-5">
                <h2 className="font-heading text-xl text-text uppercase tracking-[0.08em]">{loc.name}</h2>
                {[
                  { icon: MapPin, label: "Address", value: loc.address, href: loc.mapUrl, external: true },
                  { icon: Phone, label: "Phone", value: loc.phone, href: `tel:${loc.phone.replace(/[^\d+]/g, "")}` },
                  { icon: Mail, label: "Email", value: loc.email, href: `mailto:${loc.email}` },
                  { icon: Clock, label: "Office Hours", value: loc.officeHours },
                  { icon: Clock, label: "Gate Access", value: loc.gateHours },
                ].map(({ icon: Icon, label, value, href, external }) => (
                  <div key={label} className="flex items-start gap-3">
                    <Icon className="h-4 w-4 text-primary mt-0.5 shrink-0" aria-hidden="true" />
                    <div>
                      <p className="text-xs text-muted uppercase tracking-wider mb-0.5">{label}</p>
                      {href ? (
                        <a
                          href={href}
                          target={external ? "_blank" : undefined}
                          rel={external ? "noopener noreferrer" : undefined}
                          className="text-sm text-text hover:text-primary transition-colors"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="text-sm text-text">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Mini map embed */}
              <div className="rounded-sm overflow-hidden border border-white/8 aspect-video">
                <iframe
                  title={`Map for ${loc.name}`}
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3257.5!2d-97.5609!3d35.5028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDMwJzEwLjEiTiA5N8KwMzMnMzkuMiJX!5e0!3m2!1sen!2sus!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* Contact form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <div className="bg-surface border border-primary/20 rounded-sm p-12 text-center">
                  <div className="h-16 w-16 rounded-sm bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-6">
                    <Send className="h-7 w-7 text-primary" aria-hidden="true" />
                  </div>
                  <h2 className="font-heading text-4xl text-text uppercase tracking-[0.08em] mb-3">Message Sent!</h2>
                  <p className="text-muted">Thanks for reaching out. We&apos;ll get back to you within 1 business hour during office hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-surface border border-white/8 rounded-sm p-8 space-y-5">
                  <h2 className="font-heading text-3xl text-text uppercase tracking-[0.08em] mb-2">Send a Message</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-xs text-muted uppercase tracking-wider font-medium mb-2">Full Name</label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Jane Smith"
                        className="w-full bg-background border border-white/10 rounded-sm px-4 py-3.5 text-text placeholder:text-muted focus:outline-none focus:border-white/25 focus:ring-1 focus:ring-white/10 transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs text-muted uppercase tracking-wider font-medium mb-2">Email Address</label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="jane@email.com"
                        className="w-full bg-background border border-white/10 rounded-sm px-4 py-3.5 text-text placeholder:text-muted focus:outline-none focus:border-white/25 focus:ring-1 focus:ring-white/10 transition-colors"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="phone" className="block text-xs text-muted uppercase tracking-wider font-medium mb-2">Phone (optional)</label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="(405) 555-0000"
                        className="w-full bg-background border border-white/10 rounded-sm px-4 py-3.5 text-text placeholder:text-muted focus:outline-none focus:border-white/25 focus:ring-1 focus:ring-white/10 transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="inquiry" className="block text-xs text-muted uppercase tracking-wider font-medium mb-2">Inquiry Type</label>
                      <div className="relative">
                        <select
                          id="inquiry"
                          name="inquiry"
                          value={form.inquiry}
                          onChange={handleChange}
                          className="w-full appearance-none bg-background border border-white/10 rounded-sm px-4 py-3.5 text-text focus:outline-none focus:border-white/25 focus:ring-1 focus:ring-white/10 transition-colors pr-10"
                        >
                          {inquiryTypes.map(t => <option key={t}>{t}</option>)}
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted pointer-events-none" aria-hidden="true" />
                      </div>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="form-location" className="block text-xs text-muted uppercase tracking-wider font-medium mb-2">Preferred Location</label>
                    <div className="relative">
                      <select
                        id="form-location"
                        name="location"
                        value={form.location}
                        onChange={handleChange}
                        className="w-full appearance-none bg-background border border-white/10 rounded-sm px-4 py-3.5 text-text focus:outline-none focus:border-white/25 focus:ring-1 focus:ring-white/10 transition-colors pr-10"
                      >
                        {locations.map(l => <option key={l.name}>{l.name}</option>)}
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted pointer-events-none" aria-hidden="true" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-xs text-muted uppercase tracking-wider font-medium mb-2">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us what you're looking for — unit size, move-in date, special needs..."
                      className="w-full bg-background border border-white/10 rounded-sm px-4 py-3.5 text-text placeholder:text-muted focus:outline-none focus:border-white/25 focus:ring-1 focus:ring-white/10 transition-colors resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-accent text-background font-bold px-8 py-4 rounded-sm uppercase tracking-[0.2em] shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-transform"
                  >
                    <Send className="h-4 w-4" aria-hidden="true" />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
