"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Certifications() {
  // Create refs for animations
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const underlineRef = useRef(null);
  const descriptionRef = useRef(null);
  const certContainerRef = useRef(null);
  const certRefs = useRef<HTMLDivElement[]>([]);

  // Reset the certification refs array
  certRefs.current = [];

  // Function to add certification logos to refs
  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !certRefs.current.includes(el)) {
      certRefs.current.push(el);
    }
  };

  useEffect(() => {
    // Title animation
    gsap.fromTo(
      titleRef.current,
      {
        y: 30,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
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
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Description animation
    gsap.fromTo(
      descriptionRef.current,
      {
        y: 20,
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

    // Certification logos container animation
    gsap.fromTo(
      certContainerRef.current,
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: certContainerRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Individual certification logo animations
    gsap.fromTo(
      certRefs.current,
      {
        scale: 0.6,
        opacity: 0,
        y: 20,
      },
      {
        scale: 1,
        opacity: 1,
        y: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: certContainerRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Subtle floating animation for certification logos
    certRefs.current.forEach((cert, index) => {
      // Alternate between up and down movement
      const yDirection = index % 2 === 0 ? -8 : 8;

      gsap.to(cert, {
        y: yDirection,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: index * 0.1,
      });
    });

    // Clean up ScrollTrigger instances on component unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  // Certification logo hover animation
  const handleCertHover = (e: React.MouseEvent<HTMLDivElement>) => {
    gsap.to(e.currentTarget, {
      scale: 1.15,
      duration: 0.4,
      ease: "power1.out",
      grayscale: 0,
      boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
    });
  };

  // Certification logo hover out animation
  const handleCertLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    gsap.to(e.currentTarget, {
      scale: 1,
      duration: 0.4,
      ease: "power1.out",
      boxShadow: "0 0 0 rgba(0, 0, 0, 0)",
    });
  };

  const certifications = [
    { src: "/assets/1.png", alt: "Certification 1" },
    { src: "/assets/2.png", alt: "Certification 2" },
    { src: "/assets/3.png", alt: "Certification 3" },
    { src: "/assets/4.png", alt: "Certification 4" },
  ];

  return (
    <section ref={sectionRef} id="certifications" className="py-24 bg-[#F5EEDD] overflow-hidden relative">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-24 h-24 rounded-full bg-[#592F1F] bg-opacity-5 z-0"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 rounded-full border-4 border-[#592F1F] border-opacity-10 z-0"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 ref={titleRef} className="text-4xl font-bold text-[#292929] relative inline-block">
            Certified <span className="text-[#592F1F]">By</span>
            <div ref={underlineRef} className="absolute bottom-[-8px] left-0 w-full h-1 bg-[#592F1F]"></div>
          </h2>
          <p ref={descriptionRef} className="text-gray-600 mt-8 max-w-2xl mx-auto leading-relaxed">
            Our commitment to quality is backed by trusted international certifications, ensuring our products meet the highest standards in the industry.
          </p>
        </div>

        <div ref={certContainerRef} className="grid md:grid-cols-4 grid-cols-2 gap-8 items-center justify-center">
          {certifications.map((cert, index) => (
            <div key={index} ref={addToRefs} className="flex items-center justify-center p-6 bg-white rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 transform" onMouseEnter={handleCertHover} onMouseLeave={handleCertLeave}>
              <div className="relative p-4 certification-logo rounded-lg overflow-hidden">
                <Image src={cert.src} alt={cert.alt} width={150} height={100} className="filter grayscale hover:grayscale-0 transition-all duration-500" />
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-white opacity-50"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
