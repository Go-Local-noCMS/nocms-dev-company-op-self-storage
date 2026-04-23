import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "OP Self Storage — Climate-Controlled Storage in Oklahoma City",
    template: "%s | OP Self Storage",
  },
  description:
    "Secure, climate-controlled self storage in Oklahoma City, Edmond, and Moore. Units from $42/mo with 24/7 access and price-lock guarantee. Reserve online in minutes.",
  keywords: [
    "self storage Oklahoma City",
    "climate controlled storage OKC",
    "storage units Edmond OK",
    "business storage Oklahoma",
    "storage units Moore OK",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Manrope:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased bg-background text-text">
        <Navbar
          logo="OP Self Storage"
          phone="(405) 555-0192"
          ctaText="Reserve a Unit"
          ctaHref="/facility"
        />
        {children}
        <Footer
          brandName="OP Self Storage"
          contactInfo={{
            phone: "(405) 555-0192",
            email: "hello@opsselfstorage.com",
            address: "4821 N May Ave, Oklahoma City, OK 73112",
          }}
        />
      </body>
    </html>
  );
}
