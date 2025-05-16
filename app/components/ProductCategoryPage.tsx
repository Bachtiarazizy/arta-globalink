// app/components/ProductCategoryPage.tsx
import React from "react";
import Link from "next/link";
import Image from "next/image";

type Product = {
  id: number;
  name: string;
  category: string;
  type?: string;
  image: string;
  shortDesc: string;
  featured: boolean;

  origin: string;
};

type ProductCategoryPageProps = {
  products: Product[];
  categoryTitle: string;
  categoryDescription: string;
};

export default function ProductCategoryPage({ products, categoryTitle, categoryDescription }: ProductCategoryPageProps) {
  return (
    <div className="min-h-screen bg-[#f9f9f9]">
      <div
        className="relative h-64 flex items-center justify-center pt-12 md:pt-16 lg:pt-60 pb-36 text-white"
        style={{
          backgroundImage: 'url("/assets/hero.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-4xl font-bold mb-4">{categoryTitle}</h1>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto mb-6">{categoryDescription}</p>
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
            <span className="text-[#25D366]">{categoryTitle}</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {products.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <Link href={`/products/${product.id}`} key={product.id}>
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="relative h-64 bg-gray-200">
                    <Image src={product.image} alt={product.name} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover" />
                    {product.featured && <div className="absolute top-4 right-4 bg-[#25D366] text-white text-xs font-bold uppercase py-1 px-3 rounded-full">Featured</div>}
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h3>
                    <p className="text-gray-600 text-sm mb-3">{product.shortDesc}</p>
                    <div className="flex justify-between items-center"></div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <h3 className="text-xl text-gray-500">No products found in this category</h3>
            <Link href="/products">
              <button className="mt-6 bg-[#25D366] text-white px-6 py-2 rounded-md hover:bg-[#1eb058] transition-colors">View All Products</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
