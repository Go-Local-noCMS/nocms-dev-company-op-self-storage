import { Shield, Thermometer, Clock, CreditCard, Camera, Zap, Lock, Building2 } from "lucide-react";

interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface FeatureGridProps {
  heading?: string;
  features?: Feature[];
}

const iconMap: Record<string, React.ElementType> = {
  shield: Shield,
  thermometer: Thermometer,
  clock: Clock,
  creditcard: CreditCard,
  camera: Camera,
  zap: Zap,
  lock: Lock,
  building: Building2,
};

const defaultFeatures: Feature[] = [
  { icon: "camera", title: "24/7 HD Security", description: "Monitored cameras throughout the facility, digital gate access logs, and on-site managers during business hours." },
  { icon: "thermometer", title: "Climate Controlled", description: "Every unit maintains 55–85°F year-round with humidity control — protecting furniture, electronics, and documents." },
  { icon: "clock", title: "Always Open", description: "Gate access 24 hours a day, 7 days a week, 365 days a year. Your belongings on your schedule." },
  { icon: "creditcard", title: "Online Payments", description: "Manage your account, pay rent, and update your info entirely online. Auto-pay available with no fees." },
  { icon: "zap", title: "Easy Drive-Up Access", description: "Pull your vehicle right to your unit door. No elevators, no long hallways — load and unload fast." },
  { icon: "building", title: "Business Ready", description: "Package acceptance, business address service, and flexible lease terms make us the smart choice for companies." },
  { icon: "lock", title: "Your Lock, Your Key", description: "Bring your own lock or buy one from us. Only you have access — we never use a master key." },
  { icon: "shield", title: "Price Lock Guarantee", description: "We guarantee your rate won't increase for the first 12 months. No surprise hikes, ever." },
];

export function FeatureGrid({ heading = "Why Choose OP Self Storage", features = defaultFeatures }: FeatureGridProps) {
  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="font-heading text-6xl md:text-7xl text-text uppercase tracking-[0.08em] leading-[0.85] mb-4">
            {heading}
          </h2>
          <p className="text-muted text-lg max-w-xl mx-auto">Built for people who take their belongings seriously. Every feature designed with your security in mind.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {(features ?? []).map((feature, i) => {
            const Icon = iconMap[feature.icon] ?? Shield;
            return (
              <div key={i} className="bg-surface rounded-sm p-6 border border-white/8 hover:border-white/15 transition-colors group">
                <div className="h-12 w-12 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center text-primary mb-5 group-hover:border-primary/30 transition-colors">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="font-heading text-xl text-text uppercase tracking-[0.08em] mb-2">{feature.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
