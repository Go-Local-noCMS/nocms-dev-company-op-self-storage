export interface SkinConfig {
  heroVariant: "video" | "search" | "image" | "simple";
  dividerMotif: "leaf" | "golden-dot" | "line";
  backgroundPattern: "leaf-vine" | "grove" | "none";
  brandName: string;
  tagline: string;
  phone: string;
  address?: string;
  email?: string;
}

const skinConfig: SkinConfig = {
  heroVariant: "search",
  dividerMotif: "line",
  backgroundPattern: "none",
  brandName: "OP Self Storage",
  tagline: "Secure, Climate-Controlled Storage for Home & Business",
  phone: "(405) 555-0192",
  address: "4821 N May Ave, Oklahoma City, OK 73112",
  email: "hello@opsselfstorage.com",
};

export default skinConfig;
