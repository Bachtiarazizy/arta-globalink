"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Hero() {
  // Refs for animation targets
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const paragraphRef = useRef(null);
  const buttonsRef = useRef(null);
  const overlayRef = useRef(null);

  // Initialize animations
  useEffect(() => {
    // Initial animations when the page loads
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(overlayRef.current, { opacity: 0 }, { opacity: 0.6, duration: 1.2 })
      .fromTo(headingRef.current, { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 1 }, "-=0.5")
      .fromTo(paragraphRef.current, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, "-=0.7")
      .fromTo(buttonsRef.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, stagger: 0.2 }, "-=0.5");

    // Text split animation on hover
    const heading = headingRef.current;
    if (heading) {
      heading.addEventListener("mouseenter", () => {
        gsap.to(heading, {
          letterSpacing: "2px",
          color: "#F5EEDD",
          duration: 0.5,
        });
      });

      heading.addEventListener("mouseleave", () => {
        gsap.to(heading, {
          letterSpacing: "0",
          color: "white",
          duration: 0.5,
        });
      });
    }

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  // Interactive button hover effects
  const handleButtonHover = (e: React.MouseEvent<HTMLButtonElement>, scale = 1.1) => {
    gsap.to(e.target, {
      scale: scale,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleButtonLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    gsap.to(e.target, {
      scale: 1,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  // Mouse follow effect
  useEffect(() => {
    const container = sectionRef.current;
    if (!container) return;

    // Create a glow element
    const glow = document.createElement("div");
    glow.className = "mouse-glow";
    glow.style.cssText = `
      position: absolute;
      width: 150px;
      height: 150px;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(37, 211, 102, 0.2) 0%, rgba(255, 255, 255, 0) 70%);
      transform: translate(-50%, -50%);
      pointer-events: none;
      z-index: 10;
      opacity: 0;
    `;
    container.appendChild(glow);

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      gsap.to(glow, {
        x: x,
        y: y,
        opacity: 1,
        duration: 0.5,
      });
    };

    const handleMouseLeave = () => {
      gsap.to(glow, {
        opacity: 0,
        duration: 0.5,
      });
    };

    // Add event listeners
    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    // Cleanup
    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
      if (glow.parentNode) {
        glow.parentNode.removeChild(glow);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative h-screen flex items-center justify-center text-white overflow-hidden"
      style={{
        backgroundImage: 'url("/assets/hero.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div ref={overlayRef} className="absolute inset-0 bg-[#292929] opacity-60"></div>

      {/* Particles effect */}
      <div className="absolute inset-0 z-5">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full opacity-30"
            style={{
              width: Math.random() * 5 + 1 + "px",
              height: Math.random() * 5 + 1 + "px",
              left: Math.random() * 100 + "%",
              top: Math.random() * 100 + "%",
              animation: `float ${Math.random() * 10 + 10}s linear infinite`,
            }}
          />
        ))}
      </div>

      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-[#292929] to-transparent opacity-40 z-5"></div>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-[#292929] to-transparent opacity-40 z-5"></div>

      <div className="hero-content relative z-10 text-center px-6 max-w-4xl">
        <h1 ref={headingRef} className="text-4xl md:text-6xl font-bold mb-4 transition-all duration-300 cursor-default">
          We Supply Around <span className="text-[#F5EEDD]">the World</span>
        </h1>

        <p ref={paragraphRef} className="text-xl mb-8 max-w-3xl mx-auto">
          Indulge in Pure Delight with Our Premium Cocoa Powder
          <br /> Elevating Taste to Unparalleled Heights with Every Spoonful!
        </p>

        <div ref={buttonsRef} className="space-x-4">
          <button className="bg-[#F5EEDD] text-[#292929] px-8 py-3 rounded-full hover:bg-opacity-80 transition-all duration-300" onMouseEnter={(e) => handleButtonHover(e, 1.15)} onMouseLeave={handleButtonLeave}>
            <span className="relative z-10">Order Now</span>
          </button>

          <button className="border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-[#292929] transition-all duration-300" onMouseEnter={(e) => handleButtonHover(e)} onMouseLeave={handleButtonLeave}>
            <span className="relative z-10">Learn More</span>
          </button>
        </div>

        {/* <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="cursor-pointer"
            onClick={() => {
              const aboutSection = document.getElementById("about");
              if (aboutSection) {
                aboutSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            <path d="M7 10L12 15L17 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div> */}
      </div>

      {/* Add floating elements */}
      <div className="absolute right-10 top-1/3 w-20 h-20 rounded-full bg-[#592F1F] bg-opacity-10 floating-slow"></div>
      <div className="absolute left-10 bottom-1/3 w-16 h-16 rounded-full bg-[#592F1F] bg-opacity-20 floating-medium"></div>
      <div className="absolute right-1/4 bottom-1/4 w-12 h-12 rounded-full bg-white bg-opacity-10 floating-fast"></div>
    </section>
  );
}
