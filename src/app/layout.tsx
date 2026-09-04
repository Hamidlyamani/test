import type { Metadata } from "next";
import { EB_Garamond, Tomorrow } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { business } from "@/lib/business";

const garamond = EB_Garamond({
  variable: "--font-garamond",
  subsets: ["latin"],
  weight: ["600", "700"],
});

const tomorrow = Tomorrow({
  variable: "--font-tomorrow",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(business.siteUrl),
  title: {
    default: `${business.name} — Couvreur à Angers`,
    template: `%s | ${business.name}`,
  },
  description:
    "Couvreur à Angers depuis 12 ans. Toiture ardoise, zinguerie, recherche de fuite. RGE Qualibat, décennale AXA, devis gratuit sous 48 h.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    siteName: business.name,
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      className={`${garamond.variable} ${tomorrow.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-paper text-ink">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
