import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://qshei.com.au"),
  title: {
    default: "QSHEI | Inclusive Sexual Health & Education",
    template: "QSHEI | %s",
  },
  description: "Queensland Sexual Health & Education Institute providing inclusive, evidence-based healthcare and education.",
  keywords: ["sexual health", "education", "inclusive healthcare", "QSHEI", "Queensland"],
  openGraph: {
    title: "QSHEI | Inclusive Sexual Health & Education",
    description: "Queensland Sexual Health & Education Institute providing inclusive, evidence-based healthcare and education.",
    url: "https://qshei.com.au",
    siteName: "QSHEI",
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "QSHEI | Inclusive Sexual Health & Education",
    description: "Queensland Sexual Health & Education Institute providing inclusive, evidence-based healthcare and education.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalClinic",
              "name": "Queensland Sexual Health & Education Institute (QSHEI)",
              "url": "https://qshei.com.au",
              "telephone": "+61468129226",
              "email": "contactus@qshei.com.au",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Yeppoon",
                "addressRegion": "QLD",
                "addressCountry": "AU"
              },
              "sameAs": [
                "https://instagram.com/qshei.au"
              ],
              "description": "Inclusive, Sex-Positive Healthcare & Education for Everyone.",
            })
          }}
        />
        <Header />
        <main className="flex-1 flex flex-col">{children}</main>
        <Footer />
        <ScrollToTop />
        <Analytics />
      </body>
    </html>
  );
}
