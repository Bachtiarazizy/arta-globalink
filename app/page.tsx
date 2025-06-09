import type { Metadata, NextPage } from "next";
import Hero from "./components/hero-section";
import AboutSection from "./components/about-section";
import FeaturedProducts from "./components/featured-products";
import WhyChooseUs from "./components/why-choose-us";
import Gallery from "./components/gallery-section";
import Certifications from "./components/certifications";

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

const Home: NextPage = () => {
  return (
    <div className="bg-[#F5EEDD]">
      <Hero />
      <AboutSection />
      <FeaturedProducts />
      <WhyChooseUs />
      <Gallery />
      <Certifications />
    </div>
  );
};

export default Home;
