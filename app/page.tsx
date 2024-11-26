"use client";

import { motion, useAnimation } from "framer-motion";
import { ChevronRight, CheckCircle, Download } from "lucide-react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import CocoaProductSection from "./components/product-card";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import PageLoader from "./components/pageLoader";
import VanillaProductSection from "./components/vanilla-product-card";

// Reusable scroll animation hook
const useScrollAnimation = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const controls = useAnimation();

  if (inView) {
    controls.start("visible");
  }

  const variants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return { ref, controls, variants };
};

export default function Home() {
  // Marquee text items with checklist icons
  const marqueeItems = ["Global Commodity Sourcing", "Quality Assurance", "International Standards", "Sustainable Solutions"];

  // Hero Section
  const heroAnimation = useScrollAnimation();

  // Marquee Section
  const marqueeAnimation = useScrollAnimation();

  // About Section
  const aboutAnimation = useScrollAnimation();

  // Products Sections
  const cocoaProductsAnimation = useScrollAnimation();
  const vanillaProductsAnimation = useScrollAnimation();

  return (
    <PageLoader>
      <motion.main
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {/* Hero Section */}
        <motion.div ref={heroAnimation.ref} initial="hidden" animate={heroAnimation.controls} variants={heroAnimation.variants} className="relative min-h-[650px] md:min-h-[650px] w-full overflow-hidden flex items-center">
          <Image src="/assets/hero.jpg" alt="Hero background" fill className="object-cover absolute inset-0" quality={90} />

          <div className="absolute inset-0 bg-[#311717] opacity-50" />

          <Navbar />

          <div className="relative z-10 w-full px-6 sm:px-12 lg:px-24 pt-16 md:pt-0">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.5 }} className="text-center md:text-left text-white max-w-xl mx-auto lg:mx-0">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                Connecting Markets, <br className="hidden md:block" />
                Expanding Horizons
              </h1>
              <p className="font-regular text-lg mb-6 text-center md:text-left">
                Providing the best quality of agricultural commodities <br className="hidden md:block" /> and suitable as raw materials for processed products
              </p>

              <div className="flex justify-center md:justify-start">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#E6B84F] text-[#292929] px-6 py-2 sm:px-8 sm:py-3 rounded-full text-base sm:text-lg font-semibold hover:bg-[#E6B84F]/75 transition-colors flex items-center gap-2"
                >
                  Learn More
                  <ChevronRight size={20} />
                </motion.button>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Marquee Section */}
        <motion.div
          ref={marqueeAnimation.ref}
          initial="hidden"
          animate={marqueeAnimation.controls}
          variants={marqueeAnimation.variants}
          className="bg-[#292929] text-white h-auto md:h-20 flex items-center w-full overflow-hidden relative py-4 md:py-0"
        >
          <motion.div
            animate={{
              x: ["0%", "-50%"], // Moves from 0% to -50%
              transition: {
                repeat: Infinity,
                duration: 10,
                ease: "linear",
              },
            }}
            className="flex whitespace-nowrap"
          >
            {[...marqueeItems, ...marqueeItems].map((item, index) => (
              <div key={index} className="flex items-center space-x-4 mx-4">
                <CheckCircle className="text-[#E6B84F]" size={24} />
                <span className="text-base md:text-lg">{item}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* About Section */}
        <motion.section ref={aboutAnimation.ref} initial="hidden" animate={aboutAnimation.controls} variants={aboutAnimation.variants} className="mt-14 w-full px-6 sm:px-12 lg:px-24">
          <h1 className="text-[#292929] text-3xl md:text-4xl font-bold text-center md:text-left">About Company</h1>
          <motion.div whileHover={{ scale: 1.02 }} className="bg-[#292929] w-full mt-6 rounded-2xl p-6 flex flex-col md:flex-row">
            {/* Image Section */}
            <div className="w-full md:w-1/2 order-1 md:order-2 mt-6 md:mt-0">
              <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
                <Image src="/assets/about-image.jpg" alt="About Arta Globalink" width={600} height={400} className="rounded-xl object-cover w-full h-auto md:h-full" />
              </motion.div>
            </div>

            {/* Text Section */}
            <div className="w-full md:w-1/2 order-2 md:order-1 p-4 md:p-8 flex flex-col justify-center text-center md:text-left">
              <p className="text-white text-base md:text-lg leading-relaxed mb-6 max-w-md mx-auto md:mx-0">
                Arta Globalink by (PT ARTA FORTUNA GLOBALINK) is a company that connects farmers and factories who provide commodities or processed products that have international standard quality with entrepreneurs or companies throughout
                the world who need it.
              </p>
              <div className="flex justify-center md:justify-start">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-44 text-[#E6B84F] border border-[#E6B84F] px-6 py-2 rounded-full font-semibold hover:bg-[#E6B84F]/75 hover:text-[#292929] transition-colors flex items-center gap-2"
                >
                  Learn More
                  <ChevronRight size={20} />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* Cocoa Products Section */}
        <motion.section ref={cocoaProductsAnimation.ref} initial="hidden" animate={cocoaProductsAnimation.controls} variants={cocoaProductsAnimation.variants} className="mt-14 w-full px-6 sm:px-12 lg:px-24">
          <motion.h1
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: {
                opacity: 1,
                x: 0,
                transition: { duration: 0.6 },
              },
            }}
            className="text-[#292929] text-3xl md:text-4xl font-bold text-center md:text-left"
          >
            Our Cocoa Products
          </motion.h1>
          <CocoaProductSection />
          <a href="/path/to/catalog.pdf">
            <div className="flex justify-center mt-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#E6B84F] text-[#292929] px-6 py-2 sm:px-8 sm:py-3 rounded-full text-base sm:text-lg font-semibold hover:bg-[#E6B84F]/75 transition-colors flex items-center gap-2"
              >
                Download Catalog
                <Download size={20} />
              </motion.button>
            </div>
          </a>
        </motion.section>

        {/* Vanilla Products Section */}
        <motion.section ref={vanillaProductsAnimation.ref} initial="hidden" animate={vanillaProductsAnimation.controls} variants={vanillaProductsAnimation.variants} className="mt-14 mb-16 w-full px-6 sm:px-12 lg:px-24">
          <motion.h1
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: {
                opacity: 1,
                x: 0,
                transition: { duration: 0.6 },
              },
            }}
            className="text-[#292929] text-3xl md:text-4xl font-bold text-center md:text-left"
          >
            Our Vanilla Products
          </motion.h1>
          <VanillaProductSection />
          <a href="/path/to/catalog.pdf">
            <div className="flex justify-center mt-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#E6B84F] text-[#292929] px-6 py-2 sm:px-8 sm:py-3 rounded-full text-base sm:text-lg font-semibold hover:bg-[#E6B84F]/75 transition-colors flex items-center gap-2"
              >
                Download Catalog
                <Download size={20} />
              </motion.button>
            </div>
          </a>
        </motion.section>

        <Footer />
      </motion.main>
    </PageLoader>
  );
}
