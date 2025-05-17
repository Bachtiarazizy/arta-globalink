// app/products/[id]/page.tsx
import { Metadata } from "next";
import productsData from "@/data/products.json";
import ProductDetail from "@/app/components/ProductDetail";

type Product = {
  id: number;
  name: string;
  category: string;
  image: string;
  shortDesc: string;
  origin: string;
};

// Generate static parameters for all product IDs
export async function generateStaticParams() {
  const products = productsData.products;

  return products.map((product) => ({
    id: product.id.toString(),
  }));
}

// Generate metadata for the page
export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const productId = Number(params.id);
  const products: Product[] = productsData.products;
  const product = products.find((p) => p.id === productId);

  return {
    title: product ? `${product.name} | Cocoa Products` : "Product Not Found",
    description: product?.shortDesc || "View our premium cocoa products",
  };
}

// Server Component - handles routing and data fetching
export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const productId = Number(params.id);
  const products: Product[] = productsData.products;
  const product = products.find((p) => p.id === productId);

  // Find related products (same category, excluding current product)
  const relatedProducts = product ? products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4) : [];

  return <ProductDetail product={product} relatedProducts={relatedProducts} />;
}
