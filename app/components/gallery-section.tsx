"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Gallery() {
  // Create refs for animations
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const underlineRef = useRef(null);
  const descriptionRef = useRef(null);
  const galleryContainerRef = useRef(null);
  const galleryImageRefs = useRef<HTMLDivElement[]>([]);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Reset refs array on component mount
  useEffect(() => {
    galleryImageRefs.current = [];
  }, []);

  // Add images to refs collection
  const addToImageRefs = (el: HTMLDivElement | null) => {
    if (el && !galleryImageRefs.current.includes(el)) {
      galleryImageRefs.current.push(el);
    }
  };

  // Set up animations on component mount
  useEffect(() => {
    // Title animation on scroll
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
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Underline animation - expand from center
    gsap.fromTo(
      underlineRef.current,
      {
        width: 0,
        opacity: 0,
      },
      {
        width: "100%",
        opacity: 1,
        duration: 1,
        delay: 0.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Description fade in
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
        delay: 0.4,
        scrollTrigger: {
          trigger: descriptionRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Gallery container reveal
    gsap.fromTo(
      galleryContainerRef.current,
      {
        y: 60,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        delay: 0.6,
        scrollTrigger: {
          trigger: galleryContainerRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Gallery images staggered appearance
    gsap.fromTo(
      galleryImageRefs.current,
      {
        scale: 0.8,
        opacity: 0,
        y: 30,
      },
      {
        scale: 1,
        opacity: 1,
        y: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: galleryContainerRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Parallax effect on images while scrolling
    galleryImageRefs.current.forEach((img, index) => {
      // Alternate direction based on column position
      const column = index % 3;
      let yDirection;

      if (column === 0) yDirection = -15;
      else if (column === 1) yDirection = 10;
      else yDirection = -10;

      gsap.to(img, {
        y: yDirection,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.2,
        },
      });
    });

    // Clean up ScrollTrigger on component unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  // Handle image hover effects
  const handleImageHover = (index: number) => {
    gsap.to(galleryImageRefs.current[index], {
      scale: 1.03,
      boxShadow: "0 10px 25px rgba(0, 0, 0, 0.15)",
      duration: 0.4,
    });

    // Subtle effect on other images
    galleryImageRefs.current.forEach((img, i) => {
      if (i !== index) {
        gsap.to(img, {
          scale: 0.98,
          opacity: 0.8,
          duration: 0.3,
        });
      }
    });
  };

  const handleImageLeave = () => {
    // Reset all images
    galleryImageRefs.current.forEach((img) => {
      gsap.to(img, {
        scale: 1,
        opacity: 1,
        boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)",
        duration: 0.3,
      });
    });
  };

  // Handle lightbox functionality
  const openLightbox = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = "hidden"; // Prevent scrolling when lightbox is open
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto"; // Re-enable scrolling
  };

  // Gallery image data
  const galleryImages = [
    { src: "/assets/gallery-1.png", alt: "Premium Cocoa Beans", caption: "Premium Cocoa Beans" },
    { src: "/assets/gallery-2.png", alt: "Sustainable Harvesting", caption: "Sustainable Harvesting" },
    { src: "/assets/gallery-3.png", alt: "Processing Facility", caption: "Our Modern Processing Facility" },
    { src: "/assets/gallery-4.png", alt: "Cocoa Powder", caption: "Premium Cocoa Powder" },
    { src: "/assets/gallery-5.png", alt: "Quality Control", caption: "Quality Control Process" },
    { src: "/assets/gallery-6.png", alt: "Finished Products", caption: "Finished Cocoa Products" },
  ];

  return (
    <section ref={sectionRef} id="gallery" className="bg-gray-50 py-24 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-[#25D366] bg-opacity-5"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-[#25D366] bg-opacity-5"></div>
      <div className="absolute top-1/3 right-1/4 w-16 h-16 rounded-full border-2 border-[#25D366] border-opacity-20"></div>

      <div className="container mx-auto px-6">
        <div className="text-center mb-16 relative">
          <h2 ref={titleRef} className="text-4xl font-bold text-[#292929] relative inline-block">
            Our <span className="text-[#25D366]">Gallery</span>
            <div ref={underlineRef} className="absolute bottom-[-8px] left-0 w-full h-1 bg-[#25D366]"></div>
          </h2>
          <p ref={descriptionRef} className="text-gray-600 mt-6 max-w-2xl mx-auto leading-relaxed">
            Take a visual journey through our cocoa processing facilities and see our dedication to quality in action. From bean to powder, we ensure excellence at every step.
          </p>
        </div>

        <div ref={galleryContainerRef} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              ref={addToImageRefs}
              className="gallery-item rounded-xl overflow-hidden shadow-lg relative group cursor-pointer"
              onMouseEnter={() => handleImageHover(index)}
              onMouseLeave={handleImageLeave}
              onClick={() => openLightbox(index)}
            >
              <div className="aspect-w-4 aspect-h-3 overflow-hidden">
                <Image src={image.src} alt={image.alt} width={500} height={375} className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 p-4 text-white transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 w-full">
                <h3 className="font-medium text-lg">{image.caption}</h3>
                <div className="h-1 w-10 bg-[#25D366] mt-2 rounded-full"></div>
              </div>
            </div>
          ))}
        </div>

        {/* View more button with animation */}
        <div className="text-center mt-12">
          <button className="bg-[#25D366] text-white px-8 py-3 rounded-full hover:bg-[#1eb058] transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg">View More Images</button>
        </div>
      </div>

      {/* Lightbox functionality */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4" onClick={closeLightbox}>
          <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <button className="absolute top-4 right-4 text-white bg-[#25D366] rounded-full w-10 h-10 flex items-center justify-center z-10" onClick={closeLightbox}>
              ✕
            </button>
            <div className="bg-white p-4 rounded-lg shadow-2xl">
              <Image src={galleryImages[selectedImage].src} alt={galleryImages[selectedImage].alt} width={1200} height={900} className="object-contain w-full rounded" />
              <div className="p-4">
                <h3 className="text-xl font-bold text-gray-800">{galleryImages[selectedImage].caption}</h3>
                <p className="text-gray-600 mt-2">High-quality cocoa products from our sustainable facilities.</p>
              </div>
            </div>

            {/* Navigation buttons */}
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 flex w-full justify-between px-4">
              <button
                className="bg-white bg-opacity-20 hover:bg-opacity-40 rounded-full p-3 text-white"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage((prevIndex) => (prevIndex !== null && prevIndex > 0 ? prevIndex - 1 : galleryImages.length - 1));
                }}
              >
                ←
              </button>
              <button
                className="bg-white bg-opacity-20 hover:bg-opacity-40 rounded-full p-3 text-white"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage((prevIndex) => (prevIndex !== null && prevIndex < galleryImages.length - 1 ? prevIndex + 1 : 0));
                }}
              >
                →
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
