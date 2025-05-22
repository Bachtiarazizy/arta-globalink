"use client";

import React, { useEffect, useRef } from "react";
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
};

type ProductDetailProps = {
  product: Product | undefined;
  relatedProducts: Product[];
  categoryDescription?: string;
};

export default function ProductDetail({ product, relatedProducts, categoryDescription }: ProductDetailProps) {
  const router = useRouter();

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

  // Get formatted category name
  const formattedCategory = product.category
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  // Convert technical specifications to array for easier rendering
  const technicalSpecsList = Object.entries(product.technicalSpecifications).map(([key, value]) => {
    const formattedKey =
      key === "pH"
        ? "pH"
        : key
            .replace(/([A-Z])/g, " $1")
            .charAt(0)
            .toUpperCase() + key.replace(/([A-Z])/g, " $1").slice(1);

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
                  <Image src={product.image} alt={product.name} fill className="product-image transition-all duration-500 object-contain hover:scale-105" sizes="(max-width: 768px) 100vw, 50vw" />
                </div>

                {/* Product image info */}
                {/* <div className="text-center">
                  <h3 className="text-lg font-semibold text-[#292929] mb-2">{product.name}</h3>
                  <p className="text-sm text-gray-600">
                    {formattedCategory} • {product.origin}
                  </p>
                </div> */}
              </div>
            </div>

            {/* Product Information */}
            <div ref={productInfoRef} className="flex flex-col justify-center">
              <h1 className="text-3xl md:text-4xl font-bold text-[#292929] mb-4">{product.name}</h1>

              {/* <p className="text-gray-600 mb-8">{product.description}</p> */}

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
              <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
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
