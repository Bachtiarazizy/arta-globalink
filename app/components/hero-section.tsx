import React from "react";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="relative min-h-[650px] w-full overflow-hidden flex items-center">
      <Image src="/assets/hero.jpg" alt="Hero background" fill className="object-cover absolute inset-0" quality={90} />

      <div className="absolute inset-0 bg-[#311717] opacity-50" />

      {/* Content */}
      <div className="relative z-10 w-full px-6 sm:px-12 lg:px-24">
        <div className="text-left text-white max-w-xl mx-auto lg:mx-0">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Connecting Markets, <br />
            Expanding Horizons
          </h1>
          <p className="font-regular text-lg mb-4">
            Providing the best quality of agricultural commodities <br /> and suitable as raw materials for processed products
          </p>

          <button className="bg-[#E6B84F] text-[#292929] px-6 py-2 sm:px-8 sm:py-3 rounded-full text-base sm:text-lg font-semibold hover:bg-[#E6B84F]/75 transition-colors flex items-center gap-2">
            Learn More
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
