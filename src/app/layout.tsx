import type { Metadata } from "next";
import { Fraunces, DM_Sans } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import "./globals.css";

// Spark Sites brand type — Fraunces for display/headings, DM Sans for body.
// Self-hosted at build time via next/font, so it works under `output: "export"`.
const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["700", "800", "900"],
  variable: "--font-display",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Campaign Reporting — Spark",
  description: "Your growth at a glance.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${dmSans.variable}`}>
      <body className="antialiased min-h-screen bg-background text-foreground flex flex-col">
        <div className="flex-1">{children}</div>
        <SiteFooter />
      </body>
    </html>
  );
}
