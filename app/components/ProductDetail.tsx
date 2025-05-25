"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import gsap from "gsap";

type TechnicalSpecification = {
  pH: string;
  flavor: string;
  fatContent: string;
  ashContent: string;
  fineness: string;
  moisture: string;
  shellContent: string;
  application: string;
  moq: string;
};

type Product = {
  id: number;
  name: string;
  category: string;
  image: string;
  shortDesc: string;
  origin: string;
  type: string;
  technicalSpecifications: TechnicalSpecification;
  description: string;
  colorVariants?: {
    brown: string;
    dark: string;
    "very-dark": string;
  };
};

type ColorOption = {
  id: string;
  name: string;
  image: string;
  color: string;
};

type ProductDetailProps = {
  product: Product | undefined;
  relatedProducts: Product[];
  categoryDescription?: string;
};

export default function ProductDetail({ product, relatedProducts, categoryDescription }: ProductDetailProps) {
  const router = useRouter();
  // Fix: Initialize with the correct key that matches JSON data
  const [selectedColor, setSelectedColor] = useState<string>("brown");

  // References for animations
  const pageRef = useRef<HTMLDivElement>(null);
  const productImageRef = useRef<HTMLDivElement>(null);
  const productInfoRef = useRef<HTMLDivElement>(null);
  const relatedProductsRef = useRef<HTMLDivElement>(null);
  const productRefs = useRef<HTMLDivElement[]>([]);

  // Reset product refs array
  productRefs.current = [];

  // Helper function to add elements to refs
  const addToProductRefs = (el: HTMLDivElement | null) => {
    if (el && !productRefs.current.includes(el)) {
      productRefs.current.push(el);
    }
  };

  // Check if product should have color options
  const shouldShowColorOptions = (product: Product | undefined): boolean => {
    if (!product) return false;
    return product.type === "natural" || (product.type === "alkalized" && product.id === 4);
  };

  // Fix: Correct the color options mapping to match JSON keys
  const getColorOptions = (product: Product): ColorOption[] => {
    if (!product.colorVariants) return [];

    return [
      {
        id: "brown",
        name: "Brown",
        image: product.colorVariants.brown,
        color: "#8B4513",
      },
      {
        id: "dark", // Fix: Use "dark" instead of "dark-brown" to match JSON
        name: "Dark Brown",
        image: product.colorVariants.dark,
        color: "#654321",
      },
      {
        id: "very-dark", // Fix: Use "very-dark" instead of "very-dark-brown" to match JSON
        name: "Very Dark Brown",
        image: product.colorVariants["very-dark"],
        color: "#3C2414",
      },
    ];
  };

  const getCurrentImage = (product: Product): string => {
    if (!shouldShowColorOptions(product)) {
      return product.image;
    }

    const colorOptions = getColorOptions(product);
    const selectedOption = colorOptions.find((option) => option.id === selectedColor);
    return selectedOption?.image || product.image;
  };

  // If product not found, handle it
  if (!product) {
    // Redirect to products page if product is not found
    useEffect(() => {
      router.push("/products");
    }, [router]);

    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-gray-600">Product not found. Redirecting...</p>
      </div>
    );
  }

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

  // Handle color selection with animation
  const handleColorChange = (colorId: string) => {
    if (colorId === selectedColor) return;

    console.log("Changing color from", selectedColor, "to", colorId); // Debug log

    // Fade out current image
    if (productImageRef.current) {
      const imageElement = productImageRef.current.querySelector(".product-main-image");
      if (imageElement) {
        gsap.to(imageElement, {
          opacity: 0,
          duration: 0.2,
          onComplete: () => {
            setSelectedColor(colorId);
            // Fade in new image
            gsap.to(imageElement, {
              opacity: 1,
              duration: 0.3,
            });
          },
        });
      }
    } else {
      setSelectedColor(colorId);
    }
  };

  // Handle button actions
  const handleInquiry = () => {
    // You can customize this action - for example, open a contact form, redirect to contact page, etc.
    window.open(`mailto:connect@artaglobalink.com?subject=Inquiry about ${product.name}&body=Hello, I would like to inquire about the ${product.name} product.`, "_blank");
  };

  const handleQuoteRequest = () => {
    // You can customize this action - for example, open a quote form, redirect to quote page, etc.
    window.open(`mailto:connect@artaglobalink.com?subject=Quote Request for ${product.name}&body=Hello, I would like to request a quote for the ${product.name} product.`, "_blank");
  };

  // Animations
  useEffect(() => {
    // Product image animation
    if (productImageRef.current) {
      gsap.fromTo(
        productImageRef.current,
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
        }
      );
    }

    // Product info animation
    if (productInfoRef.current) {
      gsap.fromTo(
        productInfoRef.current.children,
        { x: 50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.8,
          ease: "power3.out",
        }
      );
    }

    // Related products animation
    if (relatedProductsRef.current && productRefs.current.length > 0) {
      gsap.fromTo(
        productRefs.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.6,
          delay: 0.5,
          ease: "back.out(1.2)",
        }
      );
    }
  }, [product.id]);

  // Reset selected color when product changes
  useEffect(() => {
    setSelectedColor("brown");
  }, [product.id]);

  // Get formatted category name
  const formattedCategory = product.category
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  // Convert technical specifications to array for easier rendering
  const technicalSpecsList = Object.entries(product.technicalSpecifications).map(([key, value]) => {
    let formattedKey;
    if (key === "pH") {
      formattedKey = "pH";
    } else if (key === "moq") {
      formattedKey = "MOQ";
    } else {
      formattedKey =
        key
          .replace(/([A-Z])/g, " $1")
          .charAt(0)
          .toUpperCase() + key.replace(/([A-Z])/g, " $1").slice(1);
    }

    return {
      label: formattedKey,
      value: value,
    };
  });

  // Product specifications
  const specifications = [
    { label: "Category", value: formattedCategory },
    { label: "Origin", value: product.origin },
    { label: "Type", value: product.type.charAt(0).toUpperCase() + product.type.slice(1) },
  ];

  const showColorOptions = shouldShowColorOptions(product);
  const colorOptions = showColorOptions ? getColorOptions(product) : [];
  const currentImage = getCurrentImage(product);

  // Debug logs
  console.log("Product:", product.name);
  console.log("Should show color options:", showColorOptions);
  console.log("Color variants:", product.colorVariants);
  console.log("Color options:", colorOptions);
  console.log("Selected color:", selectedColor);
  console.log("Current image:", currentImage);

  return (
    <div ref={pageRef} className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div
        className="relative h-64 flex items-center justify-center pt-36 md:pt-40 lg:pt-60 pb-36 text-white"
        style={{
          backgroundImage: 'url("/assets/hero.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-2xl md:text-4xl font-bold mb-4">{product.name}</h1>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto mb-6">{product.shortDesc}</p>
          <div className="flex items-center justify-center space-x-2">
            <Link href="/" className="text-gray-300 hover:text-white transition-colors">
              Home
            </Link>
            <span className="text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
            <Link href="/products" className="text-gray-300 hover:text-white transition-colors">
              Products
            </Link>
            <span className="text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
            <span className="text-[#E6B84F]">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Product Detail Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Product Image - Made Sticky */}
            <div ref={productImageRef} className="lg:sticky lg:top-8 self-start">
              <div className="bg-white rounded-xl shadow-md p-8">
                {/* Landscape optimized image container */}
                <div className="relative w-full aspect-[4/3] mb-4 rounded-lg overflow-hidden bg-gray-50">
                  <Image
                    src={currentImage}
                    alt={product.name}
                    fill
                    className="product-main-image product-image transition-all duration-500 object-contain hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    key={selectedColor} // Add key to force re-render when color changes
                  />
                </div>

                {/* Color Options */}
                {showColorOptions && colorOptions.length > 0 && (
                  <div className="mt-6">
                    <h4 className="text-sm font-medium text-gray-700 mb-3">Color Options:</h4>
                    <div className="flex space-x-3">
                      {colorOptions.map((option) => (
                        <button
                          key={option.id}
                          onClick={() => handleColorChange(option.id)}
                          className={`relative group flex flex-col items-center p-2 rounded-lg transition-all duration-200 ${selectedColor === option.id ? "ring-2 ring-[#592F1F] bg-gray-50" : "hover:bg-gray-50"}`}
                          title={option.name}
                        >
                          {/* Color circle */}
                          <div
                            className={`w-8 h-8 rounded-full border-2 transition-all duration-200 ${selectedColor === option.id ? "border-[#592F1F] shadow-md" : "border-gray-300 group-hover:border-gray-400"}`}
                            style={{ backgroundColor: option.color }}
                          />
                          {/* Color name */}
                          <span className={`text-xs mt-1 transition-colors duration-200 ${selectedColor === option.id ? "text-[#592F1F] font-medium" : "text-gray-600 group-hover:text-gray-800"}`}>{option.name}</span>

                          {/* Selected indicator */}
                          {selectedColor === option.id && (
                            <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#592F1F] rounded-full flex items-center justify-center">
                              <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Product Information */}
            <div ref={productInfoRef} className="flex flex-col justify-center">
              <h1 className="text-3xl md:text-4xl font-bold text-[#292929] mb-4">{product.name}</h1>

              {/* General Product Info */}
              <div className="bg-gray-100 rounded-lg p-6 mb-6">
                <h3 className="text-lg font-bold text-[#292929] mb-4">Product Information</h3>
                <div className="space-y-3">
                  {specifications.map((spec, index) => (
                    <div key={index} className="flex justify-between">
                      <span className="text-gray-600">{spec.label}</span>
                      <span className="font-medium text-[#292929]">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Specifications */}
              <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
                <h3 className="text-lg font-bold text-[#292929] mb-4">Technical Specifications</h3>
                <div className="grid grid-cols-2 gap-4">
                  {technicalSpecsList.map((spec, index) => (
                    <div key={index} className="border-b border-gray-100 pb-2">
                      <span className="text-gray-600 text-sm block">{spec.label}</span>
                      <span className="font-medium text-[#292929]">{spec.value}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex items-center">
                  <div className="w-3 h-3 rounded-full bg-[#592F1F] mr-2"></div>
                  <span className="text-sm text-gray-600">All specifications tested according to international standards</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button onClick={handleInquiry} className="flex-1 bg-[#592F1F] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#4a251a] transition-colors duration-300 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  Send Inquiry
                </button>
                <button
                  onClick={handleQuoteRequest}
                  className="flex-1 bg-white text-[#592F1F] border-2 border-[#592F1F] px-6 py-3 rounded-lg font-medium hover:bg-[#592F1F] hover:text-white transition-colors duration-300 flex items-center justify-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  Request Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Information Tabs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-[#292929] mb-8">Product Information</h2>

            <div className="bg-gray-50 rounded-xl p-8">
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-xl font-bold text-[#292929] mb-4">Description</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <p className="text-gray-600">
                    {categoryDescription ||
                      "Our products are ethically sourced from partner farms in Indonesia, ensuring fair compensation for farmers and sustainable agricultural practices. Each batch undergoes rigorous quality control to meet international standards."}
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#292929] mb-4">Usage & Storage</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#592F1F] mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Store in a cool, dry place away from direct sunlight
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#592F1F] mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Keep sealed in original packaging for maximum freshness
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#592F1F] mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Best used within 12 months of production date
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#592F1F] mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      See packaging for specific usage instructions
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-[#292929] mb-12">Related Products</h2>

            <div ref={relatedProductsRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {relatedProducts.map((relatedProduct) => (
                <Link href={`/products/${relatedProduct.id}`} key={relatedProduct.id} passHref>
                  <div ref={addToProductRefs} className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 cursor-pointer" onMouseEnter={handleProductHover} onMouseLeave={handleProductLeave}>
                    <div className="relative">
                      <div className="h-48 overflow-hidden">
                        <div className="product-image transition-all duration-500 transform">
                          <Image src={relatedProduct.image} alt={relatedProduct.name} width={400} height={300} className="w-full h-48 object-cover" />
                        </div>
                      </div>
                    </div>

                    <div className="p-4">
                      <h3 className="text-lg font-bold text-[#292929] mb-1">{relatedProduct.name}</h3>
                      <p className="text-gray-600 text-sm mb-2 line-clamp-2">{relatedProduct.shortDesc}</p>

                      <div className="flex justify-between items-center"></div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Back to Products */}
      <section className="py-12 bg-[#F9F9F9]">
        <div className="container mx-auto px-6 text-center">
          <Link href="/products" passHref>
            <button className="inline-flex items-center text-[#292929] font-medium hover:text-[#592F1F] transition-colors duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              Back to all products
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
