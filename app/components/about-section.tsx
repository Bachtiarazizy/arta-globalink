"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function AboutSection() {
  // Create refs for animations
  const sectionRef = useRef(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef(null);
  const imagesContainerRef = useRef(null);
  const imageRefs = useRef<HTMLDivElement[]>([]);

  // Set up animations on component mount
  useEffect(() => {
    // Title animation on scroll
    gsap.fromTo(
      titleRef.current,
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
          end: "bottom 70%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Add underline animation after title appears
    const titleUnderline = document.createElement("div");
    titleUnderline.className = "title-underline";
    titleUnderline.style.cssText = `
      position: absolute;
      bottom: -8px;
      left: 0;
      height: 3px;
      width: 0;
      background-color: #25D366;
    `;
    if (titleRef.current) {
      titleRef.current.appendChild(titleUnderline);
    }

    gsap.to(titleUnderline, {
      width: "100%",
      duration: 1.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 75%",
        toggleActions: "play none none reverse",
      },
    });

    // Text paragraphs animation - staggered entry
    gsap.fromTo(
      textRef.current?.querySelectorAll("p") || [],
      {
        y: 30,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 0.8,
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
          end: "bottom 70%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Button animation - slide and fade in
    gsap.fromTo(
      buttonRef.current,
      {
        y: 20,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        delay: 0.5,
        scrollTrigger: {
          trigger: buttonRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Images container slide in
    gsap.fromTo(
      imagesContainerRef.current,
      {
        x: 100,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: imagesContainerRef.current,
          start: "top 75%",
          end: "bottom 65%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Individual images staggered reveal (scale/opacity)
    gsap.fromTo(
      imageRefs.current,
      {
        scale: 0.85,
        opacity: 0,
      },
      {
        scale: 1,
        opacity: 1,
        stagger: 0.15,
        duration: 0.8,
        ease: "back.out(1.5)",
        scrollTrigger: {
          trigger: imagesContainerRef.current,
          start: "top 75%",
          end: "bottom 65%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Parallax effect on images while scrolling
    imageRefs.current.forEach((img, index) => {
      const direction = index % 2 === 0 ? -15 : 15;

      gsap.to(img, {
        y: direction,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
      });
    });

    // Clean up ScrollTrigger on component unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  // Mouse hover effect on button
  const handleButtonHover = (e: React.MouseEvent<HTMLButtonElement>) => {
    gsap.to(e.target, {
      scale: 1.05,
      backgroundColor: "#1eb058", // Slightly darker green on hover
      boxShadow: "0 5px 15px rgba(37, 211, 102, 0.4)",
      duration: 0.3,
    });
  };

  const handleButtonLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    gsap.to(e.target, {
      scale: 1,
      backgroundColor: "#25D366",
      boxShadow: "0 0 0 rgba(37, 211, 102, 0)",
      duration: 0.3,
    });
  };

  // Image hover effect enhancement
  const handleImageHover = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    // The image that's hovered gets more pronounced effect
    gsap.to(e.target, {
      scale: 1.08,
      boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
      duration: 0.4,
      ease: "power2.out",
    });

    // Other images get subtle dim effect
    imageRefs.current.forEach((img, i) => {
      if (i !== index) {
        gsap.to(img, {
          scale: 0.98,
          opacity: 0.7,
          duration: 0.4,
        });
      }
    });
  };

  const handleImageLeave = () => {
    // Reset all images to default state
    imageRefs.current.forEach((img) => {
      gsap.to(img, {
        scale: 1,
        opacity: 1,
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        duration: 0.4,
      });
    });
  };

  // Add images to refs collection
  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !imageRefs.current.includes(el)) {
      imageRefs.current.push(el);
    }
  };

  return (
    <section ref={sectionRef} id="about" className="container mx-auto py-24 px-6 overflow-hidden">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div ref={textRef} className="space-y-8 relative">
          <h2 ref={titleRef} className="text-4xl font-bold text-[#292929] relative inline-block">
            About <span className="text-[#25D366]">Arta</span>
          </h2>

          <div className="relative ml-4 border-l-2 border-gray-200 pl-6">
            <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-[#25D366]"></div>
            <p className="text-gray-700 leading-relaxed">
              Arta Globalink (PT ARTA FORTUNA GLOBALINK) is a company that connects farmers and factories who provide commodities or processed agricultural products that have international standard quality with entrepreneurs or companies
              throughout the world who need it.
            </p>
          </div>

          <div className="relative ml-4 border-l-2 border-gray-200 pl-6">
            <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-[#25D366]"></div>
            <p className="text-gray-700 leading-relaxed">
              This Company Profile is made as a basis for consideration, product and company information and offers of cooperation that can be done by our company. Our company is engaged in the food sector which focuses on cocoa powder
              products.
            </p>
          </div>

          <div className="pt-6 ml-4">
            <button ref={buttonRef} className="bg-[#25D366] text-white px-8 py-3 rounded-full transition-all duration-300" onMouseEnter={handleButtonHover} onMouseLeave={handleButtonLeave}>
              Learn More About Us
            </button>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-20 -left-10 w-20 h-20 rounded-full bg-[#25D366] bg-opacity-5 z-0"></div>
        </div>

        <div ref={imagesContainerRef} className="grid grid-cols-2 gap-5 relative">
          <div className="space-y-5">
            <div className="relative rounded-lg shadow-lg overflow-hidden" ref={addToRefs} onMouseEnter={(e) => handleImageHover(e, 0)} onMouseLeave={handleImageLeave}>
              <Image src="/assets/gallery-1.png" alt="Cocoa Beans" width={400} height={300} className="object-cover rounded-lg transition-all duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 hover:opacity-50 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 p-4 text-white transform translate-y-full opacity-0 hover:translate-y-0 hover:opacity-100 transition-all duration-300">
                <span className="font-medium">Premium Cocoa Beans</span>
              </div>
            </div>
            <div className="relative rounded-lg shadow-lg overflow-hidden" ref={addToRefs} onMouseEnter={(e) => handleImageHover(e, 1)} onMouseLeave={handleImageLeave}>
              <Image src="/assets/gallery-3.png" alt="Cocoa Processing" width={400} height={300} className="object-cover rounded-lg transition-all duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 hover:opacity-50 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 p-4 text-white transform translate-y-full opacity-0 hover:translate-y-0 hover:opacity-100 transition-all duration-300">
                <span className="font-medium">Processing Facility</span>
              </div>
            </div>
          </div>

          <div className="space-y-5 pt-8">
            <div className="relative rounded-lg shadow-lg overflow-hidden" ref={addToRefs} onMouseEnter={(e) => handleImageHover(e, 2)} onMouseLeave={handleImageLeave}>
              <Image src="/assets/gallery-2.png" alt="Cocoa Harvesting" width={400} height={300} className="object-cover rounded-lg transition-all duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 hover:opacity-50 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 p-4 text-white transform translate-y-full opacity-0 hover:translate-y-0 hover:opacity-100 transition-all duration-300">
                <span className="font-medium">Sustainable Harvesting</span>
              </div>
            </div>
            <div className="relative rounded-lg shadow-lg overflow-hidden" ref={addToRefs} onMouseEnter={(e) => handleImageHover(e, 3)} onMouseLeave={handleImageLeave}>
              <Image src="/assets/gallery-4.png" alt="Cocoa Product" width={400} height={300} className="object-cover rounded-lg transition-all duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 hover:opacity-50 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 p-4 text-white transform translate-y-full opacity-0 hover:translate-y-0 hover:opacity-100 transition-all duration-300">
                <span className="font-medium">Premium Cocoa Powder</span>
              </div>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute -right-8 top-1/2 w-16 h-16 rounded-full border-4 border-[#25D366] border-opacity-20 z-0"></div>
          <div className="absolute -bottom-8 right-1/4 w-12 h-12 rounded-full bg-[#25D366] bg-opacity-10 z-0"></div>
        </div>
      </div>
    </section>
  );
}
