"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Gallery() {
  // Create refs for animations
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef(null);
  const underlineRef = useRef(null);
  const descriptionRef = useRef(null);
  const galleryContainerRef = useRef(null);
  const galleryImageRefs = useRef<HTMLDivElement[]>([]);
  const viewMoreButtonRef = useRef(null);

  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState(6); // Start with 6 images
  const [isExpanded, setIsExpanded] = useState(false);

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

  // Extended gallery image data - Add more images here
  const galleryImages = [
    { src: "/assets/gallery/gallery-1.jpg", alt: "Premium Cocoa Beans" },
    { src: "/assets/gallery/gallery-2.jpg", alt: "Sustainable Harvesting" },
    { src: "/assets/gallery/gallery-3.jpg", alt: "Processing Facility" },
    { src: "/assets/gallery/gallery-4.jpg", alt: "Cocoa Powder" },
    { src: "/assets/gallery/gallery-5.jpg", alt: "Quality Control" },
    { src: "/assets/gallery/gallery-6.jpg", alt: "Finished Products" },
    // Add more images here
    { src: "/assets/gallery/gallery-7.jpg", alt: "High Quality Cocoa" },
    { src: "/assets/gallery/gallery-8.jpg", alt: "Drying Process" },
    { src: "/assets/gallery/gallery-9.jpg", alt: "Cocoa Powder" },
    { src: "/assets/gallery/warehouse.jpg", alt: "Warehouse" },
    { src: "/assets/gallery/warehouse(1).jpg", alt: "Warehouse" },
    { src: "/assets/gallery/warehouse(2).jpg", alt: "Warehouse" },
    { src: "/assets/gallery/warehouse(3).jpg", alt: "Warehouse" },
    { src: "/assets/gallery/warehouse(4).jpg", alt: "Warehouse" },
  ];

  const totalImages = galleryImages.length;
  const visibleImages = galleryImages.slice(0, visibleCount);

  // Handle view more/less functionality
  const handleViewMore = () => {
    const newCount = Math.min(visibleCount + 6, totalImages);
    setVisibleCount(newCount);

    if (newCount >= totalImages) {
      setIsExpanded(true);
    }

    // Animate new images
    setTimeout(() => {
      const newImageRefs = galleryImageRefs.current.slice(visibleCount - 6);
      gsap.fromTo(
        newImageRefs,
        {
          scale: 0.8,
          opacity: 0,
          y: 30,
        },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.6,
          ease: "back.out(1.7)",
        }
      );
    }, 100);
  };

  const handleViewLess = () => {
    // Animate out the extra images first
    const imagesToHide = galleryImageRefs.current.slice(6);

    gsap.to(imagesToHide, {
      scale: 0.8,
      opacity: 0,
      y: 30,
      stagger: 0.05,
      duration: 0.4,
      onComplete: () => {
        setVisibleCount(6);
        setIsExpanded(false);
        // Scroll back to gallery section
        sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      },
    });
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

    // Clean up ScrollTrigger on component unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  // Set up image animations when visible images change
  useEffect(() => {
    if (galleryImageRefs.current.length > 0) {
      // Initial gallery images staggered appearance (only for first 6)
      const initialImages = galleryImageRefs.current.slice(0, 6);

      gsap.fromTo(
        initialImages,
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

      // Parallax effect on visible images
      galleryImageRefs.current.slice(0, visibleCount).forEach((img, index) => {
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
    }
  }, [visibleCount]);

  // Handle image hover effects
  const handleImageHover = (index: number) => {
    gsap.to(galleryImageRefs.current[index], {
      scale: 1.03,
      boxShadow: "0 10px 25px rgba(0, 0, 0, 0.15)",
      duration: 0.4,
    });

    // Subtle effect on other images
    galleryImageRefs.current.forEach((img, i) => {
      if (i !== index && i < visibleCount) {
        gsap.to(img, {
          scale: 0.98,
          opacity: 0.8,
          duration: 0.3,
        });
      }
    });
  };

  const handleImageLeave = () => {
    // Reset all visible images
    galleryImageRefs.current.slice(0, visibleCount).forEach((img) => {
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
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };

  return (
    <section ref={sectionRef} id="gallery" className="bg-white py-24 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-[#592F1F] bg-opacity-5"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-[#592F1F] bg-opacity-5"></div>
      <div className="absolute top-1/3 right-1/4 w-16 h-16 rounded-full border-2 border-[#592F1F] border-opacity-20"></div>

      <div className="container mx-auto px-6">
        <div className="text-center mb-16 relative">
          <h2 ref={titleRef} className="text-4xl font-bold text-[#292929] relative inline-block">
            Our <span className="text-[#592F1F]">Gallery</span>
            <div ref={underlineRef} className="absolute bottom-[-8px] left-0 w-full h-1 bg-[#592F1F]"></div>
          </h2>
          <p ref={descriptionRef} className="text-gray-600 mt-6 max-w-2xl mx-auto leading-relaxed">
            Take a visual journey through our cocoa processing facilities and see our dedication to quality in action. From bean to powder, we ensure excellence at every step.
          </p>
        </div>

        <div ref={galleryContainerRef} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {visibleImages.map((image, index) => (
            <div
              key={index}
              ref={addToImageRefs}
              className="gallery-item rounded-xl overflow-hidden shadow-lg relative group cursor-pointer"
              onMouseEnter={() => handleImageHover(index)}
              onMouseLeave={handleImageLeave}
              onClick={() => openLightbox(index)}
            >
              <div className="relative w-full h-64 overflow-hidden">
                <Image src={image.src} alt={image.alt} fill className="object-cover transition-transform duration-700 group-hover:scale-110" sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 p-4 text-white transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 w-full">
                <div className="h-1 w-10 bg-[#592F1F] mt-2 rounded-full"></div>
              </div>
            </div>
          ))}
        </div>

        {/* View More/Less Button */}
        <div className="text-center mt-12">
          {visibleCount < totalImages ? (
            <button
              ref={viewMoreButtonRef}
              onClick={handleViewMore}
              className="bg-[#592F1F] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#4a2419] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              View More Images ({totalImages - visibleCount} remaining)
            </button>
          ) : (
            <button onClick={handleViewLess} className="bg-gray-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              View Less
            </button>
          )}

          {/* Image counter */}
          <p className="text-gray-500 text-sm mt-3">
            Showing {visibleCount} of {totalImages} images
          </p>
        </div>
      </div>

      {/* Lightbox functionality */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4" onClick={closeLightbox}>
          <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <button className="absolute top-4 right-4 text-white bg-[#592F1F] rounded-full w-10 h-10 flex items-center justify-center z-10 hover:bg-[#4a2419] transition-colors" onClick={closeLightbox}>
              ✕
            </button>
            <div className="bg-white p-4 rounded-lg shadow-2xl">
              <div className="relative w-full h-96 mb-4">
                <Image src={visibleImages[selectedImage].src} alt={visibleImages[selectedImage].alt} fill className="object-contain rounded" sizes="(max-width: 1024px) 100vw, 1024px" />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold text-[#592F1F] mb-2">{visibleImages[selectedImage].alt}</h3>
                <p className="text-gray-600">High-quality cocoa products from our sustainable facilities.</p>
                <p className="text-sm text-gray-400 mt-2">
                  Image {selectedImage + 1} of {visibleCount}
                </p>
              </div>
            </div>

            {/* Navigation buttons */}
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 flex w-full justify-between px-6">
              <button
                className="bg-white bg-opacity-20 hover:bg-opacity-40 backdrop-blur-sm rounded-full p-4  hover:text-[#592F1F] transition-all duration-300 hover:scale-110 shadow-lg"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage((prevIndex) => (prevIndex !== null && prevIndex > 0 ? prevIndex - 1 : visibleCount - 1));
                }}
              >
                <ChevronLeft size={28} strokeWidth={2.5} />
              </button>
              <button
                className="bg-white bg-opacity-20 hover:bg-opacity-40 backdrop-blur-sm rounded-full p-4  hover:text-[#592F1F] transition-all duration-300 hover:scale-110 shadow-lg"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage((prevIndex) => (prevIndex !== null && prevIndex < visibleCount - 1 ? prevIndex + 1 : 0));
                }}
              >
                <ChevronRight size={28} strokeWidth={2.5} />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
