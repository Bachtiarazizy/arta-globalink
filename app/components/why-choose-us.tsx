"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";

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
  const featureImagesRef = useRef<HTMLDivElement[]>([]);
  const featureTitlesRef = useRef<HTMLHeadingElement[]>([]);

  // Clear refs arrays on each render
  featureCardsRef.current = [];
  featureImagesRef.current = [];
  featureTitlesRef.current = [];

  // Add to refs functions
  const addToFeatureCardsRef = (el: HTMLDivElement | null) => {
    if (el && !featureCardsRef.current.includes(el)) {
      featureCardsRef.current.push(el);
    }
  };

  const addToFeatureImagesRef = (el: HTMLDivElement | null) => {
    if (el && !featureImagesRef.current.includes(el)) {
      featureImagesRef.current.push(el);
    }
  };

  const addToFeatureTitlesRef = (el: HTMLHeadingElement | null) => {
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

    // Feature cards animation - simple fade in
    featureCardsRef.current.forEach((card, index) => {
      // Calculate delay based on position
      const delay = 0.1 * index;

      gsap.fromTo(
        card,
        {
          y: 30,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          delay: delay,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    // Image animations - simple scale
    featureImagesRef.current.forEach((image, index) => {
      gsap.fromTo(
        image,
        {
          scale: 0.8,
          opacity: 0,
        },
        {
          scale: 1,
          opacity: 1,
          duration: 0.6,
          delay: 0.3 + index * 0.1,
          ease: "back.out(1.2)",
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
          y: 15,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          delay: 0.4 + index * 0.1,
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

  // Simple card hover animation
  const handleCardHover = (index: number) => {
    gsap.to(featureCardsRef.current[index], {
      y: -5,
      boxShadow: "0 10px 20px rgba(89, 47, 31, 0.1)",
      duration: 0.3,
    });

    // Image animation on hover
    gsap.to(featureImagesRef.current[index], {
      scale: 1.05,
      duration: 0.3,
    });
  };

  const handleCardLeave = (index: number) => {
    gsap.to(featureCardsRef.current[index], {
      y: 0,
      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.05)",
      duration: 0.3,
    });

    // Reset image on leave
    gsap.to(featureImagesRef.current[index], {
      scale: 1,
      duration: 0.3,
    });
  };

  // WhyChooseUs data with image paths
  const whyChooseUs = [
    {
      image: "/assets/5.png",
      title: "One stop solution for cocoa and dericative",
    },
    {
      image: "/assets/6.png",
      title: "Custom solutions for every industry needs",
    },
    {
      image: "/assets/7.png",
      title: "Custom solutions for every industry needs",
    },
    {
      image: "/assets/8.png",
      title: "Transparency and sustainability",
    },
  ];

  return (
    <section ref={sectionRef} id="why-choose-us" className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 ref={titleRef} className="text-3xl font-semibold text-gray-800 relative inline-block">
            Why Choose <span className="text-[#592F1F]">Us</span>
            <div ref={underlineRef} className="absolute bottom-[-6px] left-0 w-full h-1 bg-[#592F1F]"></div>
          </h2>

          <p ref={descriptionRef} className="text-gray-600 mt-6 max-w-2xl mx-auto">
            Discover the unique advantages that set us apart and make us your trusted partner in premium cocoa products.
          </p>
        </div>

        {/* Features grid - simpler design */}
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-6">
          {whyChooseUs.map((item, index) => (
            <div
              key={index}
              ref={addToFeatureCardsRef}
              className="bg-white rounded-lg shadow-sm border border-gray-100 transition-all duration-300 hover:border-[#592F1F]"
              onMouseEnter={() => handleCardHover(index)}
              onMouseLeave={() => handleCardLeave(index)}
            >
              <div className="p-6 flex flex-col items-center">
                {/* Image container */}
                <div ref={addToFeatureImagesRef} className="mb-4 w-16 h-16 relative">
                  <Image src={item.image} alt={item.title} fill style={{ objectFit: "contain" }} sizes="(max-width: 768px) 64px, 64px" />
                </div>

                {/* Title */}
                <h3 ref={addToFeatureTitlesRef} className="text-lg font-medium text-gray-800 text-center">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Simple CTA */}
        <div className="text-center mt-12">
          <a href="/contact" className="inline-block bg-[#592F1F] text-white px-6 py-2 rounded-md transition-all duration-300 hover:bg-opacity-90 font-medium">
            Partner With Us
          </a>
        </div>
      </div>
    </section>
  );
}
