import type { Metadata } from "next";
import "./globals.css";
import { Montserrat } from "next/font/google";
import ScrollProvider from "./components/scroll-provider";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import JsonLd from "./components/json-ld";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Arta Globalink - Connecting Markets, Expanding Horizons",
  description: "Providing the best quality of agricultural commodities and suitable raw materials for processed products with international standards.",
  keywords: "cocoa, vanilla, agricultural commodities, sustainable solutions, global commodity sourcing",
  openGraph: {
    type: "website",
    url: "https://artaglobalink.com",
    title: "Arta Globalink - Connecting Markets, Expanding Horizons",
    description: "Providing the best quality of agricultural commodities and suitable raw materials for processed products with international standards.",
    images: [
      {
        url: "/assets/og-image.jpg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arta Globalink - Connecting Markets, Expanding Horizons",
    description: "Providing the best quality of agricultural commodities and suitable raw materials for processed products with international standards.",
    images: ["/assets/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} antialiased`}>
        <JsonLd />
        <Navbar />
        <ScrollProvider>{children}</ScrollProvider>
        <Footer />
      </body>
    </html>
  );
}
