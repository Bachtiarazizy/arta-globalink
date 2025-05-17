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
  const timelineRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const valueRefs = useRef<HTMLDivElement[]>([]);
  const teamMemberRefs = useRef<HTMLDivElement[]>([]);
  const timelineItemRefs = useRef<HTMLDivElement[]>([]);
  const statItemRefs = useRef<HTMLDivElement[]>([]);

  // Reset refs arrays
  valueRefs.current = [];
  teamMemberRefs.current = [];
  timelineItemRefs.current = [];
  statItemRefs.current = [];

  // Helper functions to add elements to refs
  const addToValueRefs = (el: HTMLDivElement | null) => {
    if (el && !valueRefs.current.includes(el)) {
      valueRefs.current.push(el);
    }
  };

  const addToTeamRefs = (el: HTMLDivElement | null) => {
    if (el && !teamMemberRefs.current.includes(el)) {
      teamMemberRefs.current.push(el);
    }
  };

  interface TimelineItemElement extends HTMLDivElement {}

  const addToTimelineRefs = (el: TimelineItemElement | null) => {
    if (el && !timelineItemRefs.current.includes(el)) {
      timelineItemRefs.current.push(el);
    }
  };

  const addToStatRefs = (el: HTMLDivElement | null) => {
    if (el && !statItemRefs.current.includes(el)) {
      statItemRefs.current.push(el);
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

    // Timeline section animations
    if (timelineRef.current) {
      gsap.fromTo(
        timelineRef.current.querySelector("h2"),
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: timelineRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    if (timelineRef.current) {
      gsap.fromTo(
        timelineRef.current.querySelector(".timeline-underline"),
        { width: 0 },
        {
          width: "80px",
          duration: 1,
          delay: 0.3,
          scrollTrigger: {
            trigger: timelineRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    // Timeline items staggered animation
    gsap.fromTo(
      timelineItemRefs.current,
      { x: (i) => (i % 2 === 0 ? -50 : 50), opacity: 0 },
      {
        x: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 0.8,
        scrollTrigger: {
          trigger: timelineRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Connect timeline dots with animated line
    gsap.fromTo(
      ".timeline-line",
      { height: 0 },
      {
        height: "100%",
        duration: 1.5,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: timelineRef.current,
          start: "top 60%",
          end: "bottom 80%",
          scrub: 1,
        },
      }
    );

    // Team section animations
    if (teamRef.current) {
      gsap.fromTo(
        teamRef.current.querySelector("h2"),
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: teamRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    if (teamRef.current) {
      gsap.fromTo(
        teamRef.current.querySelector(".team-underline"),
        { width: 0 },
        {
          width: "80px",
          duration: 1,
          delay: 0.3,
          scrollTrigger: {
            trigger: teamRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    if (teamRef.current) {
      gsap.fromTo(
        teamRef.current.querySelector("p"),
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: 0.2,
          scrollTrigger: {
            trigger: teamRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    // Team members staggered animation
    gsap.fromTo(
      teamMemberRefs.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.15,
        duration: 0.8,
        ease: "back.out(1.2)",
        scrollTrigger: {
          trigger: teamRef.current,
          start: "top 60%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Stats section animations
    if (statsRef.current) {
      gsap.fromTo(
        statsRef.current.querySelector("h2"),
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    // Stats items staggered animation
    gsap.fromTo(
      statItemRefs.current,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.15,
        duration: 0.8,
        scrollTrigger: {
          trigger: statsRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Count up animation for stats
    statItemRefs.current.forEach((statItem) => {
      const statValue = statItem.querySelector(".stat-value");
      if (!statValue) return;
      const dataValue = statValue.getAttribute("data-value");
      const endValue = parseInt(dataValue ?? "0", 10);

      gsap.fromTo(
        statValue,
        { textContent: 0 },
        {
          textContent: endValue,
          duration: 2,
          ease: "power2.out",
          snap: { textContent: 1 },
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 70%",
            toggleActions: "play none none reset",
          },
          onUpdate: function () {
            statValue.textContent = Math.ceil(this.targets()[0].textContent) + (statValue.getAttribute("data-suffix") || "");
          },
        }
      );
    });

    // Clean up ScrollTrigger instances on component unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  // Team member hover animation
  const handleTeamMemberHover = (e: React.MouseEvent<HTMLDivElement>) => {
    gsap.to(e.currentTarget, {
      y: -10,
      boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)",
      duration: 0.3,
    });

    gsap.to((e.currentTarget as HTMLDivElement).querySelector(".team-social"), {
      y: 0,
      opacity: 1,
      duration: 0.3,
    });
  };

  const handleTeamMemberLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    gsap.to(e.currentTarget, {
      y: 0,
      boxShadow: "0 5px 15px rgba(0, 0, 0, 0.05)",
      duration: 0.3,
    });

    gsap.to((e.currentTarget as HTMLDivElement).querySelector(".team-social"), {
      y: 20,
      opacity: 0,
      duration: 0.3,
    });
  };

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
        className="relative h-64 flex items-center justify-center pt-12 md:pt-16 lg:pt-60 pb-36 text-white"
        style={{
          backgroundImage: 'url("/assets/hero.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
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
      <section ref={headerRef} className="py-24 bg-gradient-to-b from-white to-gray-50">
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
            <div ref={headerImageRef} className="relative">
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
      <section ref={missionRef} className="py-24 bg-white">
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

      {/* Timeline Section */}
      <section ref={timelineRef} className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#292929]">Our Journey</h2>
            <div className="timeline-underline h-1 bg-[#592F1F] w-20 mx-auto mt-4"></div>
          </div>

          <div className="relative">
            {/* Vertical timeline line */}
            <div className="timeline-line absolute left-1/2 transform -translate-x-1/2 w-1 bg-[#592F1F] opacity-30 top-0 bottom-0"></div>

            <div className="space-y-24">
              {[
                {
                  year: "2018",
                  title: "Company Founded",
                  description: "PT ARTA FORTUNA GLOBALINK was established with a vision to connect Indonesian agricultural products with global markets.",
                },
                {
                  year: "2019",
                  title: "First International Partnership",
                  description: "Established our first major international distribution partnership, expanding our reach to Asian markets.",
                },
                {
                  year: "2020",
                  title: "Quality Certification",
                  description: "Achieved international quality certifications, establishing our commitment to premium standards.",
                },
                {
                  year: "2022",
                  title: "Production Expansion",
                  description: "Expanded our production facilities, increasing capacity to meet growing international demand.",
                },
                {
                  year: "2024",
                  title: "Global Market Presence",
                  description: "Expanded distribution network to reach markets across Europe, Americas, and Asia-Pacific regions.",
                },
              ].map((item, index) => (
                <div key={index} ref={addToTimelineRefs} className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? "pr-12 text-right" : "pl-12 text-left"}`}>
                    <div className="inline-block px-4 py-1 bg-[#592F1F] bg-opacity-10 rounded-full mb-2">
                      <span className="text-[#592F1F] font-medium">{item.year}</span>
                    </div>
                    <h3 className="text-xl font-bold text-[#292929] mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>

                  <div className="relative z-10 w-10 h-10 rounded-full bg-[#592F1F] flex items-center justify-center transform -translate-x-1/2">
                    <div className="w-6 h-6 rounded-full bg-white"></div>
                  </div>

                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-24 bg-[#592F1F] bg-opacity-5">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-[#292929] text-center mb-16">Arta By The Numbers</h2>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { value: 10, suffix: "+", label: "Years Experience" },
              { value: 25, suffix: "+", label: "Countries Served" },
              { value: 1500, suffix: "", label: "Metric Tons Annual Export" },
              { value: 98, suffix: "%", label: "Customer Satisfaction" },
            ].map((stat, index) => (
              <div key={index} ref={addToStatRefs} className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="text-5xl font-bold text-[#592F1F] mb-2">
                  <span className="stat-value" data-value={stat.value} data-suffix={stat.suffix}>
                    0{stat.suffix}
                  </span>
                </div>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-r from-[#592F1F] to-[#20B355] rounded-2xl p-12 text-white text-center shadow-xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-white opacity-10"></div>
              <div className="absolute bottom-10 right-10 w-48 h-48 rounded-full bg-white opacity-5"></div>
            </div>

            <div className="relative z-10">
              <h2 className="text-4xl font-bold mb-6">Ready to Explore Our Products?</h2>
              <p className="text-white text-opacity-90 max-w-2xl mx-auto mb-8">Connect with our team to learn more about our premium cocoa powder products and how we can meet your specific requirements.</p>
              <div className="flex justify-center space-x-4">
                <button className="bg-white text-[#592F1F] px-8 py-3 rounded-full font-medium transition-all duration-300 hover:shadow-lg transform hover:scale-105">Contact Sales Team</button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-full font-medium transition-all duration-300 hover:bg-white hover:bg-opacity-20">Download Catalog</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
