"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import productsData from "@/data/products.json";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type Product = {
  id: number;
  name: string;
  category: string;
  image: string;
  shortDesc: string;
  origin: string;
};

export default function ProductsPage() {
  // Create refs for animations
  const pageRef = useRef(null);
  const breadcrumbRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const productGridRef = useRef(null);
  const filterRef = useRef<HTMLDivElement>(null);
  const productRefs = useRef<HTMLDivElement[]>([]);

  // State for filtering products
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  // Reset product refs array
  productRefs.current = [];

  // Helper function to add elements to refs
  const addToProductRefs = (el: HTMLDivElement | null) => {
    if (el && !productRefs.current.includes(el)) {
      productRefs.current.push(el);
    }
  };

  // Get products and filters from JSON data
  const products: Product[] = productsData.products;
  const filters = productsData.filters;

  // Filter products based on active filter
  useEffect(() => {
    if (activeFilter === "all") {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter((product) => product.category === activeFilter));
    }
  }, [activeFilter]);

  // Initial load - set all products
  useEffect(() => {
    setFilteredProducts(products);
  }, []);

  useEffect(() => {
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
    if (headerRef.current) {
      gsap.fromTo(
        headerRef.current.querySelector("h1"),
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
        }
      );

      gsap.fromTo(
        headerRef.current.querySelector("p"),
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: 0.2,
          ease: "power3.out",
        }
      );
    }

    // Filter animations
    if (filterRef.current) {
      gsap.fromTo(
        filterRef.current.querySelectorAll("button"),
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.6,
          delay: 0.4,
          ease: "power3.out",
        }
      );
    }

    // Set up scrolltrigger for product grid
    const animateProducts = () => {
      gsap.fromTo(
        productRefs.current,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.6,
          ease: "back.out(1.2)",
          scrollTrigger: {
            trigger: productGridRef.current,
            start: "top 80%",
            toggleActions: "play none none reset",
          },
        }
      );
    };

    // Initial animation
    animateProducts();

    // Re-trigger animation when filtered products change
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  // Re-animate products when they are filtered
  useEffect(() => {
    if (productRefs.current.length > 0) {
      // Hide all products first
      gsap.set(productRefs.current, { opacity: 0, y: 50 });

      // Then animate them in
      gsap.to(productRefs.current, {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        duration: 0.6,
        ease: "back.out(1.2)",
      });
    }
  }, [filteredProducts]);

  // Product hover animation
  const handleProductHover = (e: React.MouseEvent<HTMLDivElement>) => {
    gsap.to(e.currentTarget, {
      y: -10,
      boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)",
      duration: 0.3,
    });

    gsap.to(e.currentTarget.querySelector(".product-image"), {
      scale: 1.05,
      duration: 0.4,
    });

    gsap.to(e.currentTarget.querySelector(".product-badge"), {
      scale: 1.1,
      duration: 0.3,
    });
  };

  const handleProductLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    gsap.to(e.currentTarget, {
      y: 0,
      boxShadow: "0 5px 15px rgba(0, 0, 0, 0.05)",
      duration: 0.3,
    });

    gsap.to(e.currentTarget.querySelector(".product-image"), {
      scale: 1,
      duration: 0.4,
    });

    gsap.to(e.currentTarget.querySelector(".product-badge"), {
      scale: 1,
      duration: 0.3,
    });
  };

  // Filter button click animation
  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter);

    // Animate the clicked button
    if (filterRef.current) {
      const buttons = filterRef.current.querySelectorAll("button");
      buttons.forEach((button) => {
        if (button.getAttribute("data-filter") === filter) {
          gsap.to(button, {
            backgroundColor: "#592F1F",
            color: "#ffffff",
            paddingLeft: "20px",
            paddingRight: "20px",
            scale: 1.05,
            duration: 0.3,
          });
        } else {
          gsap.to(button, {
            backgroundColor: "#ffffff",
            color: "#292929",
            paddingLeft: "16px",
            paddingRight: "16px",
            scale: 1,
            duration: 0.3,
          });
        }
      });
    }
  };

  return (
    <div ref={pageRef} className="min-h-screen bg-[#f9f9f9]">
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
          <h1 className="text-4xl font-bold mb-4">Our Premium Products</h1>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto mb-6">Explore our range of high-quality cocoa products sourced from sustainable farms and processed to international standards.</p>
          <div className="flex items-center justify-center space-x-2">
            <Link href="/" className="text-gray-300 hover:text-white transition-colors">
              Home
            </Link>
            <span className="text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
            <span className="text-[#E6B84F]">Products</span>
          </div>
        </div>
      </div>

      {/* Filters Section */}
      <section ref={filterRef} className="pb-8 pt-0 mt-24">
        <div className="container mx-auto px-6">
          <div className="bg-white rounded-full shadow-md p-2 flex flex-wrap justify-center gap-2 mb-12">
            {filters.map((filter) => (
              <button
                key={filter.id}
                data-filter={filter.id}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeFilter === filter.id ? "bg-[#592F1F] text-white" : "bg-white text-[#292929] hover:bg-gray-100"}`}
                onClick={() => handleFilterClick(filter.id)}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="pb-24">
        <div className="container mx-auto px-6">
          <div ref={productGridRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <Link href={`/products/${product.id}`} key={product.id} passHref>
                <div ref={addToProductRefs} className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 cursor-pointer" onMouseEnter={handleProductHover} onMouseLeave={handleProductLeave}>
                  <div className="relative">
                    <div className="h-64 overflow-hidden">
                      <div className="product-image transition-all duration-500 transform">
                        <Image src={product.image} alt={product.name} width={400} height={300} className="w-full h-64 object-cover" />
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#292929] mb-2">{product.name}</h3>
                    <p className="text-gray-600 text-sm mb-4">{product.shortDesc}</p>

                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-2 text-xs text-gray-500">
                        <span>{product.origin}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="bg-[#292929] rounded-2xl p-12 text-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-[#592F1F] opacity-10"></div>
              <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-[#592F1F] opacity-5"></div>
            </div>

            <div className="relative z-10 max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Stay Updated With Our Product Offerings</h2>
              <p className="text-white text-opacity-90 mb-8">Subscribe to our newsletter to receive updates on new products, special offers, and industry insights.</p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <input type="email" placeholder="Enter your email address" className="px-6 py-3 rounded-full text-gray-800 w-full sm:w-auto sm:flex-grow max-w-md" />
                <button className="bg-[#592F1F] text-white px-8 py-3 rounded-full font-medium transition-all duration-300 hover:bg-opacity-90 transform hover:scale-105">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#292929]">Need Custom Solutions?</h2>
            <p className="text-gray-600 mt-4">Contact our team for bulk orders, custom specifications, or product inquiries</p>
          </div>

          <div className="flex justify-center">
            <button className="bg-[#592F1F] text-white px-8 py-3 rounded-full font-medium transition-all duration-300 hover:shadow-lg transform hover:scale-105 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Contact Sales Team
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
