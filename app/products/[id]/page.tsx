// app/products/[id]/page.tsx
import { Metadata } from "next";
import productsData from "@/data/products.json";
import ProductDetail from "@/app/components/ProductDetail";

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

// Get category description based on product category
function getCategoryDescription(category: string): string {
  const categoryDescriptions: Record<string, string> = {
    "cocoa-powder": "Our premium cocoa powder is manufactured to exacting standards. Each batch is tested for consistency and quality, ensuring a rich flavor profile and excellent performance in food applications.",
    "cocoa-butter": "Sourced from the finest cocoa beans, our cocoa butter offers exceptional quality and purity. It's perfect for confectionery applications and cosmetic formulations requiring stable melting properties.",
    "cocoa-liquor": "Our cocoa liquor (also known as cocoa mass) is produced from carefully selected beans through a meticulous grinding process that preserves the natural cocoa flavors and aromas.",
    "cocoa-nibs": "These raw, minimally processed pieces of cocoa beans offer a natural source of antioxidants and fiber. Our nibs are carefully fermented and dried to develop optimal chocolate flavor.",
  };

  return (
    categoryDescriptions[category] ||
    "Our products are ethically sourced from partner farms in Indonesia, ensuring fair compensation for farmers and sustainable agricultural practices. Each batch undergoes rigorous quality control to meet international standards."
  );
}

// Server Component - handles routing and data fetching
export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const productId = Number(params.id);
  const products: Product[] = productsData.products;
  const product = products.find((p) => p.id === productId);

  // Find related products (same category, excluding current product)
  const relatedProducts = product ? products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4) : [];

  // Get category description if product exists
  const categoryDescription = product ? getCategoryDescription(product.category) : undefined;

  return <ProductDetail product={product} relatedProducts={relatedProducts} categoryDescription={categoryDescription} />;
}
