import type { Metadata } from "next";
import {
  Montserrat,
  Nunito,
  Oswald,
  Playfair_Display,
  Poppins,
  Roboto,
} from "next/font/google";
import "./globals.css";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

const playfair = Playfair_Display({ variable: "--font-playfair", subsets: ["latin"] });
const oswald = Oswald({ variable: "--font-oswald", subsets: ["latin"] });
const nunito = Nunito({ variable: "--font-nunito", subsets: ["latin"] });
const roboto = Roboto({ variable: "--font-roboto", subsets: ["latin"], weight: ["400", "500", "700"] });
const montserrat = Montserrat({ variable: "--font-montserrat", subsets: ["latin"] });
const poppins = Poppins({ variable: "--font-poppins", subsets: ["latin"], weight: ["400", "500"] });

export const metadata: Metadata = {
  title: "Farmora Organics",
  description:
    "Pure & organic food for a healthier tomorrow. Fresh, naturally grown, chemical-free produce from our farms to your table.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${oswald.variable} ${nunito.variable} ${roboto.variable} ${montserrat.variable} ${poppins.variable}`}
    >
      <body className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
