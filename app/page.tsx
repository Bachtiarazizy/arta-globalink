import type { NextPage } from "next";
import Head from "next/head";
import Hero from "./components/hero-section";
import AboutSection from "./components/about-section";
import FeaturedProducts from "./components/featured-products";
import WhyChooseUs from "./components/why-choose-us";
import Gallery from "./components/gallery-section";
import Certifications from "./components/certifications";

const Home: NextPage = () => {
  return (
    <div className="bg-[#F5EEDD]">
      <Head>
        <title>Arta Globalink - Premium Cocoa Powder</title>
        <meta name="description" content="Premium quality cocoa powder from Arta Globalink" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

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
