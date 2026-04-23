import { MapPin, Clock, Phone, Lock, ExternalLink } from "lucide-react";

interface FacilityInfoBarProps {
  address?: string;
  phone?: string;
  officeHours?: string;
  gateHours?: string;
  mapUrl?: string;
}

export function FacilityInfoBar({
  address = "4821 N May Ave, Oklahoma City, OK 73112",
  phone = "(405) 555-0192",
  officeHours = "Mon–Fri 9am–6pm · Sat 9am–5pm · Sun 11am–4pm",
  gateHours = "24/7 Gate Access",
  mapUrl = "https://maps.google.com/?q=4821+N+May+Ave+Oklahoma+City+OK",
}: FacilityInfoBarProps) {
  return (
    <div className="bg-surface border-b border-white/8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-white/8">
          <div className="flex items-start gap-3 py-5 lg:pr-6">
            <MapPin className="h-4 w-4 text-primary mt-0.5 shrink-0" aria-hidden="true" />
            <div>
              <p className="text-xs uppercase tracking-wider text-muted font-medium mb-0.5">Address</p>
              <a
                href={mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-text hover:text-primary transition-colors inline-flex items-center gap-1"
              >
                {address}
                <ExternalLink className="h-3 w-3 opacity-50" aria-hidden="true" />
              </a>
            </div>
          </div>
          <div className="flex items-start gap-3 py-5 lg:px-6">
            <Clock className="h-4 w-4 text-primary mt-0.5 shrink-0" aria-hidden="true" />
            <div>
              <p className="text-xs uppercase tracking-wider text-muted font-medium mb-0.5">Office Hours</p>
              <p className="text-sm text-text">{officeHours}</p>
            </div>
          </div>
          <div className="flex items-start gap-3 py-5 lg:px-6">
            <Lock className="h-4 w-4 text-primary mt-0.5 shrink-0" aria-hidden="true" />
            <div>
              <p className="text-xs uppercase tracking-wider text-muted font-medium mb-0.5">Gate Access</p>
              <p className="text-sm text-text">{gateHours}</p>
            </div>
          </div>
          <div className="flex items-start gap-3 py-5 lg:pl-6">
            <Phone className="h-4 w-4 text-primary mt-0.5 shrink-0" aria-hidden="true" />
            <div>
              <p className="text-xs uppercase tracking-wider text-muted font-medium mb-0.5">Call Us</p>
              <a
                href={`tel:${phone.replace(/[^\d+]/g, "")}`}
                className="text-sm text-text hover:text-primary transition-colors font-semibold"
              >
                {phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
