// app/products/type/[type]/page.tsx
import { Metadata } from "next";
import productsData from "@/data/products.json";
import ProductCategoryPage from "@/app/components/ProductCategoryPage";

type Product = {
  id: number;
  name: string;
  category: string;
  type?: string; // Added type property
  image: string;
  shortDesc: string;
  origin: string;
};

// Generate static parameters for all product types
export async function generateStaticParams() {
  // Define the product types we want to support
  return [{ type: "natural" }, { type: "alkalized" }, { type: "black" }];
}

// Generate metadata for the page
export async function generateMetadata({ params }: { params: { type: string } }): Promise<Metadata> {
  const productType = params.type;

  const typeLabels: { [key: string]: string } = {
    natural: "Natural Cocoa Products",
    alkalized: "Alkalized Cocoa Products",
    black: "Black Cocoa Products",
  };

  return {
    title: typeLabels[productType] || "Cocoa Products",
    description: `Browse our premium ${productType} cocoa products`,
  };
}

// Server Component - handles routing and data fetching
export default function ProductTypePage({ params }: { params: { type: string } }) {
  const productType = params.type;

  // Map product types to categories if needed
  const products: Product[] = productsData.products.map((product) => ({
    ...product,
    // If products don't have type field, infer it based on name or add it manually
    type: inferProductType(product),
  }));

  // Filter products by type
  const typeProducts = products.filter((p) => p.type === productType);

  // Get category title
  const typeLabels: { [key: string]: string } = {
    natural: "Natural Cocoa Products",
    alkalized: "Alkalized Cocoa Products",
    black: "Black Cocoa Products",
  };

  const categoryTitle = typeLabels[productType] || "Cocoa Products";

  return <ProductCategoryPage products={typeProducts} categoryTitle={categoryTitle} categoryDescription={`Our premium ${productType} cocoa products`} />;
}

// Helper function to infer product type if not explicitly defined
function inferProductType(product: Product): string {
  // Already has type
  if (product.type) return product.type;

  const name = product.name.toLowerCase();

  // Infer type from product name
  if (name.includes("dark") || name.includes("black")) {
    return "black";
  } else if (name.includes("alkalized") || name.includes("dutch")) {
    return "alkalized";
  } else {
    return "natural"; // Default type
  }
}
