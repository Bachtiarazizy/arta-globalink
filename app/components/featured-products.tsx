"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Link from "next/link";
import productsData from "@/data/products.json";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type FeaturedProduct = {
  name: string;
  color: string;
  features: string[];
  image: string;
  type: string;
};

export default function FeaturedProducts() {
  // State to hold products data
  const [products, setProducts] = useState<any[]>([]);
  const [featuredProducts, setFeaturedProducts] = useState<FeaturedProduct[]>([]);

  // Fetch products data
  useEffect(() => {
    // In a real app, you'd fetch this from an API
    // For now, we'll use the data directly

    setProducts(productsData.products);

    // Filter featured products and limit to 3
    const featured = productsData.products.filter((product) => product.featured).slice(0, 3);

    // Map to our display format
    const displayProducts = [
      {
        name: "Natural Cocoa Powder",
        color: "#A0522D",
        features: ["100% Premium Grade", "Full-bodied Flavor", "Rich Chocolate Aroma"],
        image: "/assets/products/cocoa/natural.jpg",
        type: "natural",
      },
      {
        name: "Alkalized (Dutch) Cocoa Powder",
        color: "#8B4513",
        features: ["100% Premium Grade", "Balanced Acidity", "Smooth Texture"],
        image: "/assets/products/cocoa/brown.jpg",
        type: "alkalized",
      },
      {
        name: "Black Cocoa Powder",
        color: "#2F2F2F",
        features: ["100% Premium Grade", "Intense Dark Color", "Rich Baking Profile"],
        image: "/assets/products/cocoa/black.jpg",
        type: "black",
      },
    ];

    setFeaturedProducts(displayProducts);
  }, []);

  // Create refs for animations
  const sectionRef = useRef<HTMLElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const underlineRef = useRef<HTMLDivElement | null>(null);
  const descriptionRef = useRef<HTMLParagraphElement | null>(null);
  const productRefs = useRef<HTMLDivElement[]>([]);
  const productImageRefs = useRef<HTMLDivElement[]>([]);
  const productTitleRefs = useRef<HTMLHeadingElement[]>([]);
  const productFeatureRefs = useRef<HTMLLIElement[]>([]);
  const productButtonRefs = useRef<HTMLButtonElement[]>([]);

  // Clear refs array on each render
  productRefs.current = [];
  productImageRefs.current = [];
  productTitleRefs.current = [];
  productFeatureRefs.current = [];
  productButtonRefs.current = [];

  // Add to refs function
  const addToProductRefs = (el: HTMLDivElement | null) => {
    if (el && !productRefs.current.includes(el)) {
      productRefs.current.push(el);
    }
  };

  const addToProductImageRefs = (el: HTMLDivElement | null) => {
    if (el && !productImageRefs.current.includes(el)) {
      productImageRefs.current.push(el);
    }
  };

  const addToProductTitleRefs = (el: HTMLHeadingElement | null) => {
    if (el && !productTitleRefs.current.includes(el)) {
      productTitleRefs.current.push(el);
    }
  };

  const addToProductFeatureRefs = (el: HTMLLIElement | null) => {
    if (el && !productFeatureRefs.current.includes(el)) {
      productFeatureRefs.current.push(el);
    }
  };

  const addToProductButtonRefs = (el: HTMLButtonElement | null) => {
    if (el && !productButtonRefs.current.includes(el)) {
      productButtonRefs.current.push(el);
    }
  };

  useEffect(() => {
    if (productRefs.current.length === 0) return;

    // Title animation
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

    // Product cards animation - staggered
    gsap.fromTo(
      productRefs.current,
      {
        y: 80,
        opacity: 0,
        scale: 0.9,
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "back.out(1.2)",
        scrollTrigger: {
          trigger: productRefs.current[0],
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Product images animation - separate from cards for emphasis
    gsap.fromTo(
      productImageRefs.current,
      {
        scale: 0.8,
        opacity: 0,
        y: 20,
      },
      {
        scale: 1,
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.15,
        delay: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: productRefs.current[0],
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Product titles animation
    gsap.fromTo(
      productTitleRefs.current,
      {
        y: 20,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.15,
        delay: 0.3,
        scrollTrigger: {
          trigger: productRefs.current[0],
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Product features animation
    gsap.fromTo(
      productFeatureRefs.current,
      {
        x: -20,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.1,
        delay: 0.4,
        scrollTrigger: {
          trigger: productRefs.current[0],
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Product buttons animation
    gsap.fromTo(
      productButtonRefs.current,
      {
        y: 20,
        opacity: 0,
        scale: 0.9,
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.5,
        stagger: 0.15,
        delay: 0.5,
        ease: "back.out(1.5)",
        scrollTrigger: {
          trigger: productRefs.current[0],
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Clean up ScrollTrigger on component unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [featuredProducts]);

  // Mouse hover effect on buttons
  const handleButtonHover = (e: React.MouseEvent<HTMLButtonElement>) => {
    gsap.to(e.target, {
      scale: 1.05,
      backgroundColor: "#1eb058", // Darker green on hover
      boxShadow: "0 5px 15px rgba(37, 211, 102, 0.4)",
      duration: 0.3,
    });
  };

  const handleButtonLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    gsap.to(e.target, {
      scale: 1,
      backgroundColor: "#592F1F",
      boxShadow: "0 0 0 rgba(37, 211, 102, 0)",
      duration: 0.3,
    });
  };

  // Card hover animation
  const handleCardHover = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    gsap.to(e.currentTarget, {
      y: -10,
      boxShadow: "0 20px 25px rgba(0, 0, 0, 0.1)",
      duration: 0.3,
    });

    // Special animation for the product image on hover
    gsap.to(productImageRefs.current[index], {
      scale: 1.05,
      duration: 0.4,
    });
  };

  const handleCardLeave = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    gsap.to(e.currentTarget, {
      y: 0,
      boxShadow: "0 10px 15px rgba(0, 0, 0, 0.05)",
      duration: 0.3,
    });

    // Reset image scale
    gsap.to(productImageRefs.current[index], {
      scale: 1,
      duration: 0.4,
    });
  };

  return (
    <section ref={sectionRef} id="products" className="bg-gradient-to-b from-white to-gray-50 py-24 relative">
      <div className="container mx-auto px-4 sm:px-6 overflow-x-hidden">
        {/* Header section with animated elements */}
        <div className="text-center mb-20 relative">
          {/* Decorative elements */}
          <div className="absolute top-0 left-1/4 w-16 h-16 rounded-full bg-[#592F1F] bg-opacity-5"></div>
          <div className="absolute bottom-0 right-1/4 w-12 h-12 rounded-full border-2 border-[#592F1F] border-opacity-20"></div>

          <h2 ref={titleRef} className="text-4xl font-bold text-[#292929] relative inline-block">
            Featured <span className="text-[#592F1F]">Products</span>
            <div ref={underlineRef} className="absolute bottom-[-8px] left-0 w-full h-1 bg-[#592F1F]"></div>
          </h2>

          <p ref={descriptionRef} className="text-gray-600 mt-8 max-w-2xl mx-auto text-lg">
            Discover our exceptional cocoa powder varieties, meticulously crafted to meet international quality standards for both culinary professionals and food manufacturers.
          </p>
        </div>

        {/* Products display section */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 pt-6">
          {featuredProducts.map((product, index) => (
            <div
              key={index}
              ref={addToProductRefs}
              className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 cursor-pointer"
              onMouseEnter={(e) => handleCardHover(e, index)}
              onMouseLeave={(e) => handleCardLeave(e, index)}
            >
              <Link href={`/products/type/${product.type}`} className="block">
                {/* Product image with colored overlay */}
                <div className="relative h-64 overflow-hidden">
                  <div
                    ref={addToProductImageRefs}
                    className="w-full h-full transition-transform duration-500"
                    style={{
                      backgroundColor: product.color,
                      backgroundImage: `url(${product.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                </div>

                {/* Product details */}
                <div className="p-6 sm:p-8">
                  <h3 ref={addToProductTitleRefs} className="text-xl sm:text-2xl font-bold text-[#292929] mb-5">
                    {product.name}
                  </h3>

                  <ul className="space-y-3 mb-8">
                    {product.features.map((feature, featureIndex) => (
                      <li key={featureIndex} ref={addToProductFeatureRefs} className="flex items-center text-gray-700">
                        <div className="flex-shrink-0 w-5 h-5 bg-[#592F1F] rounded-full flex items-center justify-center mr-3">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* View Product button */}
                  <button
                    ref={addToProductButtonRefs}
                    className="w-full bg-[#592F1F] text-white py-3 rounded-lg font-medium transition-all duration-300 relative overflow-hidden shadow-md"
                    onMouseEnter={handleButtonHover}
                    onMouseLeave={handleButtonLeave}
                  >
                    <span className="relative z-10">View Product Details</span>
                  </button>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Call to action for all products */}
        <div className="text-center mt-16">
          <Link href="/products">
            <button
              className="bg-transparent border-2 border-[#592F1F] text-[#592F1F] hover:bg-[#592F1F] hover:text-white transition-all duration-300 px-10 py-3 rounded-full font-medium"
              onMouseEnter={(e) => {
                gsap.to(e.target, {
                  backgroundColor: "#592F1F",
                  color: "white",
                  scale: 1.03,
                  duration: 0.3,
                });
              }}
              onMouseLeave={(e) => {
                gsap.to(e.target, {
                  backgroundColor: "transparent",
                  color: "#592F1F",
                  scale: 1,
                  duration: 0.3,
                });
              }}
            >
              View All Products
            </button>
          </Link>
        </div>

        {/* Decorative elements */}
        <div className="absolute -left-24 bottom-20 w-48 h-48 rounded-full bg-[#592F1F] bg-opacity-5 z-0 hidden lg:block"></div>
      </div>
    </section>
  );
}
