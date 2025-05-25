"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Link from "next/link";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function AboutPage() {
  // Create refs for animations
  const pageRef = useRef<HTMLDivElement>(null);
  const breadcrumbRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const headerImageRef = useRef<HTMLDivElement>(null);
  const headerTextRef = useRef<HTMLDivElement>(null);
  const missionRef = useRef<HTMLDivElement>(null);
  const valueRefs = useRef<HTMLDivElement[]>([]);

  // Reset refs arrays
  valueRefs.current = [];

  // Helper functions to add elements to refs
  const addToValueRefs = (el: HTMLDivElement | null) => {
    if (el && !valueRefs.current.includes(el)) {
      valueRefs.current.push(el);
    }
  };

  useEffect(() => {
    // Breadcrumb animations
    gsap.fromTo(
      breadcrumbRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
        ease: "power3.out",
      }
    );

    // Header animations
    gsap.fromTo(
      headerTextRef.current,
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
      }
    );

    gsap.fromTo(
      headerImageRef.current,
      { scale: 0.8, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1.2,
        delay: 0.3,
        ease: "back.out(1.7)",
      }
    );

    // Mission section animations
    if (missionRef.current) {
      gsap.fromTo(
        missionRef.current.querySelector("h2"),
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: missionRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    if (missionRef.current) {
      gsap.fromTo(
        missionRef.current.querySelector(".mission-underline"),
        { width: 0 },
        {
          width: "80px",
          duration: 1,
          delay: 0.3,
          scrollTrigger: {
            trigger: missionRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    if (missionRef.current) {
      gsap.fromTo(
        missionRef.current.querySelector("p"),
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: 0.2,
          scrollTrigger: {
            trigger: missionRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    // Values animations (staggered)
    gsap.fromTo(
      valueRefs.current,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.15,
        duration: 0.8,
        scrollTrigger: {
          trigger: missionRef.current,
          start: "center 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Clean up ScrollTrigger instances on component unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  // Value item hover animation
  const handleValueHover = (e: React.MouseEvent<HTMLDivElement>) => {
    gsap.to(e.currentTarget, {
      y: -5,
      boxShadow: "0 10px 25px rgba(37, 211, 102, 0.15)",
      duration: 0.3,
    });

    gsap.to((e.currentTarget as HTMLDivElement).querySelector(".value-icon"), {
      scale: 1.1,
      rotation: 5,
      duration: 0.4,
    });
  };

  const handleValueLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    gsap.to(e.currentTarget, {
      y: 0,
      boxShadow: "0 5px 15px rgba(0, 0, 0, 0.05)",
      duration: 0.3,
    });

    gsap.to((e.currentTarget as HTMLDivElement).querySelector(".value-icon"), {
      scale: 1,
      rotation: 0,
      duration: 0.4,
    });
  };

  return (
    <div ref={pageRef} className="min-h-screen overflow-hidden bg-[#f9f9f9]">
      {/* Breadcrumb Section */}
      <div
        ref={breadcrumbRef}
        className="relative h-64 flex items-center justify-center pt-40 md:pt-48 lg:pt-60 pb-36 text-white"
        style={{
          backgroundImage: 'url("/assets/hero.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-2xl md:text-4xl font-bold mb-4">About Us</h1>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto mb-6">Learn more about PT ARTA FORTUNA GLOBALINK's journey, mission, and commitment to quality agricultural products</p>
          <div className="flex items-center justify-center space-x-2">
            <Link href="/" className="text-gray-300 hover:text-white transition-colors">
              Home
            </Link>
            <span className="text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
            <span className="text-[#E6B84F]">About Us</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section ref={headerRef} className="py-24 ">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div ref={headerTextRef} className="space-y-6">
              <div className="inline-block px-4 py-1 bg-[#592F1F] bg-opacity-10 rounded-full">
                <span className="text-[#592F1F] font-medium text-sm">About Arta Globalink</span>
              </div>
              <h1 className="text-5xl font-bold text-[#292929] leading-tight">
                Connecting Global <span className="text-[#592F1F]">Quality</span> with Worldwide <span className="text-[#592F1F]">Demand</span>
              </h1>
              <p className="text-gray-600 text-lg">
                As part of our commitment to providing high-quality food ingredients, our Cocoa Powder Business Line offers premium quality cocoa powder derived from carefully selected Indonesian cocoa beans. Processed using advanced
                technology and strict quality control, our cocoa powder is available in natural and alkaline (Dutch) forms to suit a wide variety of applications, including bakery, confectionery, dairy, beverages, and instant mixes
              </p>
              <div className="flex space-x-4 pt-4">
                <a href="/products">
                  <button className="bg-[#592F1F] text-white px-8 py-3 rounded-full transition-all duration-300 hover:bg-opacity-90 hover:shadow-lg transform hover:scale-105">Our Products</button>
                </a>
                <a href="/contact">
                  <button className="border border-[#592F1F] text-[#592F1F] px-8 py-3 rounded-full transition-all duration-300 hover:bg-[#592F1F] hover:bg-opacity-10">Contact Us</button>
                </a>
              </div>
            </div>
            <div ref={headerImageRef} className="relative hidden md:block">
              <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
                <Image src="/assets/about-3.jpg" alt="Arta Globalink Factory" width={600} height={400} className="w-full h-auto object-cover rounded-lg" />
              </div>
              <div className="absolute top-[-20px] right-[-20px] w-64 h-64 bg-[#592F1F] bg-opacity-10 rounded-full z-0"></div>
              <div className="absolute bottom-[-15px] left-[-15px] w-32 h-32 border-4 border-[#592F1F] border-opacity-20 rounded-full z-0"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section ref={missionRef} className="py-24 ">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#292929]">Our Vision & Mission</h2>
            <div className="mission-underline h-1 bg-[#592F1F] w-20 mx-auto mt-4"></div>
            <p className="text-gray-600 mt-6 max-w-3xl mx-auto">
              To be a trusted global partner in international trade that connects the world's markets with high-quality product solutions, focusing on sustainable growth and innovation that support global economic progress.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[
              {
                icon: "🌍",
                title: "Enhancing Global Connectivity",
                description: "Building distribution networks and strategic relationships with business partners in various countries, in order to expand market access and accelerate international trade flows.",
              },
              {
                icon: "🌱",
                title: " Sustainability and Innovation Oriented",
                description: "Implement environmentally friendly and sustainable business practices, and innovate in technology and processes to enhance competitiveness and enrich customer experience.",
              },

              {
                icon: "🤝",
                title: "Building Long-Term Relationships",
                description: "Establish long-term mutually beneficial relationships with suppliers and customers, and become a trusted partner in meeting the needs of the export and import business.",
              },
            ].map((value, index) => (
              <div key={index} ref={addToValueRefs} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300" onMouseEnter={handleValueHover} onMouseLeave={handleValueLeave}>
                <div className="value-icon text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-[#292929] mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 ">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-r from-[#592F1F] to-[#8B4513] rounded-2xl py-12 px-6 text-white text-center shadow-xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-white opacity-10"></div>
              <div className="absolute bottom-10 right-10 w-48 h-48 rounded-full bg-white opacity-5"></div>
            </div>

            <div className="relative z-10">
              <h2 className="text-2xl md:text-4xl font-bold mb-6">Ready to Explore Our Products?</h2>
              <p className="text-white text-opacity-90 max-w-2xl mx-auto mb-8">Connect with our team to learn more about our premium cocoa powder products and how we can meet your specific requirements.</p>
              <div className="flex justify-center space-x-4">
                <a href="mailto:connect@artaglobalink.com" target="_blank" rel="noopener noreferrer">
                  <button className="bg-white text-[#592F1F] px-8 py-3 rounded-full font-medium transition-all duration-300 hover:shadow-lg transform hover:scale-105">Contact Sales Team</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
