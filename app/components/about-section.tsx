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
      background-color: #592F1F;
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
  // Mouse hover effect on button
  const handleButtonHover = (e: React.MouseEvent<HTMLButtonElement>) => {
    gsap.to(e.target, {
      scale: 1.05,
      backgroundColor: "#ffffff", // white background
      color: "#000000", // black text
      boxShadow: "0 5px 15px rgba(0, 0, 0, 0.2)",
      duration: 0.3,
    });
  };

  const handleButtonLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    gsap.to(e.target, {
      scale: 1,
      backgroundColor: "#592F1F", // original background color
      color: "#ffffff", // original text color
      boxShadow: "0 0 0 rgba(0, 0, 0, 0)",
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
          <h2 ref={titleRef} className="text-4xl md:text-7xl font-bold text-[#292929] relative inline-block">
            About <span className="text-[#592F1F]">Arta</span>
          </h2>

          <p className="text-gray-700 leading-relaxed">
            Arta Globalink (PT ARTA FORTUNA GLOBALINK) is a company that connects farmers and factories who provide commodities or processed agricultural products that have international standard quality with entrepreneurs or companies
            throughout the world who need it.
          </p>

          <div className="pt-6 ml-4">
            <a href="/about">
              <button ref={buttonRef} className="bg-[#592F1F] text-white px-8 py-3 rounded-full transition-all duration-300" onMouseEnter={handleButtonHover} onMouseLeave={handleButtonLeave}>
                Click for Company Profile
              </button>
            </a>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-20 -left-10 w-20 h-20 rounded-full bg-[#592F1F] bg-opacity-5 z-0"></div>
        </div>

        <div ref={imagesContainerRef} className="md:grid grid-cols-2 gap-5 relative h-[625px] hidden ">
          {/* Left image */}
          <div className="relative rounded-lg shadow-lg overflow-hidden h-full" ref={addToRefs} onMouseEnter={(e) => handleImageHover(e, 0)} onMouseLeave={handleImageLeave} style={{ height: "625px" }}>
            <Image src="/assets/about.jpg" alt="Premium Cocoa Beans" width={400} height={650} className="object-cover w-full h-full rounded-lg transition-all duration-500" style={{ height: "100%", width: "100%", objectFit: "cover" }} />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 hover:opacity-50 transition-opacity duration-300"></div>
            <div className="absolute bottom-0 left-0 p-4 text-white transform translate-y-full opacity-0 hover:translate-y-0 hover:opacity-100 transition-all duration-300">
              <span className="font-medium">Premium Cocoa Beans</span>
            </div>
          </div>

          {/* Right image */}
          <div className="relative rounded-lg shadow-lg overflow-hidden h-full" ref={addToRefs} onMouseEnter={(e) => handleImageHover(e, 1)} onMouseLeave={handleImageLeave} style={{ height: "625px" }}>
            <Image src="/assets/about-2.jpg" alt="Premium Cocoa Powder" width={400} height={650} className="object-cover w-full h-full rounded-lg transition-all duration-500" style={{ height: "100%", width: "100%", objectFit: "cover" }} />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 hover:opacity-50 transition-opacity duration-300"></div>
            <div className="absolute bottom-0 left-0 p-4 text-white transform translate-y-full opacity-0 hover:translate-y-0 hover:opacity-100 transition-all duration-300">
              <span className="font-medium">Premium Cocoa Powder</span>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute -right-8 top-1/2 w-16 h-16 rounded-full border-4 border-[#592F1F] border-opacity-20 z-0"></div>
          <div className="absolute -bottom-8 right-1/4 w-12 h-12 rounded-full bg-[#592F1F] bg-opacity-10 z-0"></div>
        </div>
      </div>
    </section>
  );
}
