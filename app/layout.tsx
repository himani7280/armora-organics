import type { Metadata } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import ScrollReveal from "@/components/common/ScrollReveal";
import ScrollToTop from "@/components/common/ScrollToTop";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

import content from "@/data/content.json";

const site = content.Farmora.sections.SiteChrome.variants.FarmoraHeader1;
const hero = content.Farmora.sections.Hero.variants.FarmoraHomeHero1;

export const metadata: Metadata = {
  title: site.name || "Farmora Organics",
  description: hero.text || "Pure & organic food for a healthier tomorrow. Fresh, naturally grown, chemical-free produce from our farms to your table.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" suppressHydrationWarning className={`${playfair.variable} ${poppins.variable}`}>
      <body suppressHydrationWarning className="flex min-h-screen flex-col">
        <ScrollToTop />
        <ScrollReveal />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
