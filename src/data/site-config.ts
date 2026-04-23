export interface NavLink {
  label: string;
  href: string;
  children?: { label: string; href: string; description?: string }[];
}

export interface FooterColumn {
  title: string;
  links: { label: string; href: string }[];
}

export interface SocialLink {
  platform: "facebook" | "instagram" | "youtube" | "linkedin" | "x";
  href: string;
  label: string;
}

export const navigationLinks: NavLink[] = [
  {
    label: "Storage Units",
    href: "/facility",
    children: [
      { label: "View All Units", href: "/facility", description: "Browse available units & pricing" },
      { label: "Size Guide", href: "/size-guide", description: "Find the right unit size" },
      { label: "Climate-Controlled", href: "/facility#climate", description: "Temperature & humidity controlled" },
      { label: "Business Storage", href: "/facility#business", description: "Solutions for businesses" },
    ],
  },
  {
    label: "Locations",
    href: "/storage-oklahoma",
    children: [
      { label: "Oklahoma City, OK", href: "/storage-oklahoma-city", description: "Our flagship facility" },
      { label: "Edmond, OK", href: "/storage-edmond", description: "Serving north OKC metro" },
      { label: "Moore, OK", href: "/storage-moore", description: "South metro location" },
      { label: "All Oklahoma Locations", href: "/storage-oklahoma", description: "State overview & pricing" },
    ],
  },
  { label: "Size Guide", href: "/size-guide" },
  {
    label: "Resources",
    href: "/blog",
    children: [
      { label: "Storage Tips & Blog", href: "/blog", description: "Moving tips & storage advice" },
      { label: "Business Storage Guide", href: "/blog/business-storage-guide", description: "Solutions for companies" },
      { label: "Moving Checklist", href: "/blog/ultimate-moving-checklist", description: "Step-by-step moving guide" },
    ],
  },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const footerColumns: FooterColumn[] = [
  {
    title: "Storage Units",
    links: [
      { label: "View Available Units", href: "/facility" },
      { label: "Climate-Controlled Storage", href: "/facility#climate" },
      { label: "Business Storage", href: "/facility#business" },
      { label: "Size Guide", href: "/size-guide" },
      { label: "Reserve a Unit", href: "/facility#reserve" },
    ],
  },
  {
    title: "Locations",
    links: [
      { label: "Oklahoma City, OK", href: "/storage-oklahoma-city" },
      { label: "Edmond, OK", href: "/storage-edmond" },
      { label: "Moore, OK", href: "/storage-moore" },
      { label: "All Oklahoma Locations", href: "/storage-oklahoma" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Storage Tips & Blog", href: "/blog" },
      { label: "Moving Checklist", href: "/blog/ultimate-moving-checklist" },
      { label: "Business Storage Guide", href: "/blog/business-storage-guide" },
      { label: "Seasonal Storage Tips", href: "/blog/seasonal-storage-tips" },
      { label: "FAQ", href: "/facility#faq" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About OP Self Storage", href: "/about" },
      { label: "Contact Us", href: "/contact" },
      { label: "Careers", href: "/about#careers" },
      { label: "Reviews", href: "/facility#reviews" },
    ],
  },
];

export const socialLinks: SocialLink[] = [
  { platform: "facebook", href: "#", label: "Follow us on Facebook" },
  { platform: "instagram", href: "#", label: "Follow us on Instagram" },
  { platform: "youtube", href: "#", label: "Subscribe on YouTube" },
];
