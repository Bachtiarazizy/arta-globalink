"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function WhyChooseUs() {
  // Create refs for animations
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const underlineRef = useRef(null);
  const descriptionRef = useRef(null);
  const featureCardsRef = useRef<HTMLDivElement[]>([]);
  const featureIconsRef = useRef<HTMLDivElement[]>([]);
  const featureTitlesRef = useRef<HTMLDivElement[]>([]);

  // Clear refs arrays on each render
  featureCardsRef.current = [];
  featureIconsRef.current = [];
  featureTitlesRef.current = [];

  // Add to refs functions
  const addToFeatureCardsRef = (el: HTMLDivElement | null) => {
    if (el && !featureCardsRef.current.includes(el)) {
      featureCardsRef.current.push(el);
    }
  };

  const addToFeatureIconsRef = (el: HTMLDivElement | null) => {
    if (el && !featureIconsRef.current.includes(el)) {
      featureIconsRef.current.push(el);
    }
  };

  const addToFeatureTitlesRef = (el: HTMLDivElement | null) => {
    if (el && !featureTitlesRef.current.includes(el)) {
      featureTitlesRef.current.push(el);
    }
  };

  useEffect(() => {
    // Title animation
    gsap.fromTo(
      titleRef.current,
      {
        y: 40,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Underline animation
    gsap.fromTo(
      underlineRef.current,
      {
        width: 0,
        opacity: 0,
      },
      {
        width: "100%",
        opacity: 1,
        duration: 1.2,
        delay: 0.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Description animation
    gsap.fromTo(
      descriptionRef.current,
      {
        y: 30,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        delay: 0.2,
        scrollTrigger: {
          trigger: descriptionRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Feature cards animation - grid reveal pattern
    featureCardsRef.current.forEach((card, index) => {
      // Calculate row and column (assuming 4 columns)
      const row = Math.floor(index / 4);
      const col = index % 4;

      // Calculate delay based on position (diagonal wave effect)
      const delay = 0.1 * (row + col);

      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
          scale: 0.9,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.7,
          delay: delay,
          ease: "back.out(1.2)",
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    // Icon animations - rotate and bounce
    featureIconsRef.current.forEach((icon, index) => {
      gsap.fromTo(
        icon,
        {
          scale: 0,
          rotation: -30,
        },
        {
          scale: 1,
          rotation: 0,
          duration: 0.8,
          delay: 0.3 + index * 0.05,
          ease: "elastic.out(1, 0.5)",
          scrollTrigger: {
            trigger: featureCardsRef.current[index],
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    // Title animations
    featureTitlesRef.current.forEach((title, index) => {
      gsap.fromTo(
        title,
        {
          y: 20,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          delay: 0.5 + index * 0.05,
          scrollTrigger: {
            trigger: featureCardsRef.current[index],
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    // Clean up ScrollTrigger on component unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  // Card hover animation
  const handleCardHover = (index: number) => {
    gsap.to(featureCardsRef.current[index], {
      y: -10,
      boxShadow: "0 15px 30px rgba(37, 211, 102, 0.15)",
      borderTopWidth: "6px",
      duration: 0.3,
    });

    // Icon animation on hover
    gsap.to(featureIconsRef.current[index], {
      scale: 1.1,
      rotation: 5,
      backgroundColor: "#f0faf0", // Light green background
      duration: 0.4,
    });
  };

  const handleCardLeave = (index: number) => {
    gsap.to(featureCardsRef.current[index], {
      y: 0,
      boxShadow: "0 5px 15px rgba(0, 0, 0, 0.05)",
      borderTopWidth: "4px",
      duration: 0.3,
    });

    // Reset icon on leave
    gsap.to(featureIconsRef.current[index], {
      scale: 1,
      rotation: 0,
      backgroundColor: "#f9fafb", // Light gray background
      duration: 0.4,
    });
  };

  // WhyChooseUs data with improved icons
  const whyChooseUs = [
    {
      icon: "🌱",
      title: "Custom Solutions For Every Industry Needs",
    },
    {
      icon: "💰",
      title: "Competitive and Flexible Pricing Models",
    },
    {
      icon: "🏆",
      title: "Commitment To Highest Quality Cocoa",
    },
    {
      icon: "🤝",
      title: "Your Dedicated Partner With End to End Support",
    },
    {
      icon: "🌎",
      title: "Global Reach with Local Expertise",
    },
    {
      icon: "♻️",
      title: "Transparency and Sustainability",
    },
    {
      icon: "🍫",
      title: "One Stop Solution for Cocoa and Derivatives",
    },
    {
      icon: "🔄",
      title: "Securing Cocoa Supply With Long Term Partnership",
    },
  ];

  // Custom iconComponents for a more professional look
  const iconComponents = {
    "🌱": (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#25D366" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
        <path d="M12 2L12 9"></path>
        <path d="M4.93 10.93c-1.9 1.9-1.9 4.95 0 6.85 1.9 1.9 4.95 1.9 6.85 0l7.87-7.87c1.9-1.9 1.9-4.95 0-6.85-1.9-1.9-4.95-1.9-6.85 0L9.17 6.69"></path>
        <path d="M9.17 6.69c-1.9 1.9-1.9 4.95 0 6.85 1.9 1.9 4.95 1.9 6.85 0l3.05-3.05"></path>
      </svg>
    ),
    "💰": (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#25D366" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
      </svg>
    ),
    "🏆": (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#25D366" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
        <path d="M8 21h8M12 9v12M8 17l4-4 4 4M12 3a5 5 0 0 0-3 9h6a5 5 0 0 0-3-9Z"></path>
      </svg>
    ),
    "🤝": (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#25D366" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
        <path d="M16 16.5a3.5 3.5 0 0 1 3.5 3.5A3.5 3.5 0 0 1 16 23.5M8 16.5A3.5 3.5 0 0 0 4.5 20 3.5 3.5 0 0 0 8 23.5"></path>
        <path d="M7 10h4m2 0h4"></path>
        <path d="M16.5 5.5C16.5 7 16 10.5 16 10.5v3c0 1.1.9 2 2 2h3c1.1 0 2-.9 2-2v-10c0-1.1-.9-2-2-2h-3c-1.1 0-2 .9-2 2v.5M4.5 3.5C4.5 5 5 8.5 5 8.5v3c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2v-10c0-1.1.9-2 2-2h1c1.1 0 2 .9 2 2v.5"></path>
      </svg>
    ),
    "🌎": (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#25D366" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
        <circle cx="12" cy="12" r="10"></circle>
        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
        <path d="M2 12h20"></path>
      </svg>
    ),
    "♻️": (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#25D366" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
        <path d="M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5"></path>
        <path d="M11 19h8.203a1.786 1.786 0 0 0 1.517-.893 1.786 1.786 0 0 0 .07-1.787l-3.126-6.35"></path>
        <path d="M11 19l3.157-3.157"></path>
        <path d="M14.828 7.757l1.932-3.929a1.788 1.788 0 0 0-.743-2.423 1.783 1.783 0 0 0-.675-.187c-.068-.006-.137-.01-.206-.01h-6.273a1.783 1.783 0 0 0-1.626 2.62l3.595 7.32"></path>
        <path d="M7.01 9.787 3.833 16.064"></path>
        <path d="m7.01 9.787 3.586 3.586"></path>
        <path d="m13.583 11.291 3.02 6.14"></path>
        <path d="m13.583 11.291-5.143.133"></path>
        <path d="m14.828 7.757 4.367 8.876"></path>
        <path d="M14.828 7.757 11 11.585"></path>
        <path d="M8.953 3.44a1.786 1.786 0 0 0-1.573.925L3.833 9"></path>
        <path d="M14.828 7.757 8.953 3.44"></path>
      </svg>
    ),
    "🍫": (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#25D366" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
        <path d="M8 8H4v12h16V8H8zM4 8l4-4h8l4 4M2 14h20M10 8v12M10 2v6M14 8v12"></path>
      </svg>
    ),
    "🔄": (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#25D366" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
        <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path>
        <path d="M21 3v5h-5"></path>
        <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path>
        <path d="M8 16H3v5"></path>
      </svg>
    ),
  };

  return (
    <section ref={sectionRef} id="why-choose-us" className="py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="container mx-auto px-6 relative">
        {/* Decorative elements */}
        <div className="absolute top-0 right-10 w-20 h-20 rounded-full bg-[#25D366] bg-opacity-5 z-0"></div>
        <div className="absolute bottom-10 left-20 w-16 h-16 rounded-full border-2 border-[#25D366] border-opacity-20 z-0"></div>

        {/* Section header */}
        <div className="text-center mb-20 relative">
          <h2 ref={titleRef} className="text-4xl font-bold text-[#292929] relative inline-block">
            Why Choose <span className="text-[#25D366]">Us</span>
            <div ref={underlineRef} className="absolute bottom-[-8px] left-0 w-full h-1 bg-[#25D366]"></div>
          </h2>

          <p ref={descriptionRef} className="text-gray-600 mt-8 max-w-2xl mx-auto text-lg">
            Discover the unique advantages that set us apart and make us your trusted partner in premium cocoa products.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-8">
          {whyChooseUs.map((item, index) => (
            <div
              key={index}
              ref={addToFeatureCardsRef}
              className="bg-white rounded-xl shadow-md transition-all duration-300 border-t-4 border-[#25D366] overflow-hidden hover:shadow-lg"
              onMouseEnter={() => handleCardHover(index)}
              onMouseLeave={() => handleCardLeave(index)}
            >
              <div className="p-8 flex flex-col items-center">
                {/* Icon container */}
                <div ref={addToFeatureIconsRef} className="mb-6 bg-gray-50 w-20 h-20 rounded-full flex items-center justify-center shadow-inner">
                  {iconComponents[item.icon as keyof typeof iconComponents] || <span className="text-4xl">{item.icon}</span>}
                </div>

                {/* Title */}
                <h3 ref={addToFeatureTitlesRef} className="text-xl font-bold text-[#292929] text-center relative">
                  {item.title}
                  <div className="h-1 w-10 bg-[#25D366] bg-opacity-40 mx-auto mt-3 rounded-full"></div>
                </h3>
              </div>

              {/* Card bottom accent */}
              <div className="h-2 bg-gradient-to-r from-[#25D366] via-[#25D366] to-transparent opacity-20"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-[#25D366] text-white px-8 py-3 rounded-full transition-all duration-300 hover:bg-opacity-90 hover:scale-105 shadow-md hover:shadow-lg font-medium"
            onMouseEnter={(e) => {
              gsap.to(e.target, {
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(37, 211, 102, 0.3)",
                duration: 0.3,
              });
            }}
            onMouseLeave={(e) => {
              gsap.to(e.target, {
                scale: 1,
                boxShadow: "0 4px 6px rgba(37, 211, 102, 0.1)",
                duration: 0.3,
              });
            }}
          >
            <span>Partner With Us</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
