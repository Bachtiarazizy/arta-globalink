import Image from "next/image";

// Define Product interface for type safety
interface Product {
  image: string;
  title: string;
  description: string;
}

// Type the ProductCard component props
interface ProductCardProps {
  image: string;
  title: string;
  description: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ image, title, description }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
      <div className="relative w-full h-48">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>
      <div className="p-4 space-y-2">
        <h3 className="text-xl font-bold text-[#292929]">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default function CocoaProductSection() {
  const products: Product[] = [
    {
      image: "/assets/cocoa/1.jpg",
      title: "CT900 Premium Quality Alkalized",
      description: "Cocoa Powder | HS CODE 18050000 | 50% Indonesian Beans, 50% African Beans.",
    },
    {
      image: "/assets/cocoa/2.jpg",
      title: "CT900N Premium Quality Natural",
      description: "Cocoa Powder | HS CODE 18050000 | 50% Indonesian Beans, 50% African Beans",
    },
    {
      image: "/assets/cocoa/3.jpg",
      title: "CT 800 High Quality Alkalized",
      description: "Cocoa Powder | HS CODE 18050000 | 100% Indonesian Beans.",
    },
    {
      image: "/assets/cocoa/4.jpg",
      title: "CT 800N High Quality Natural",
      description: "Cocoa Powder | HS CODE 18050000 | 100% Indonesian Beans",
    },
    {
      image: "/assets/cocoa/5.jpg",
      title: "CT 700 Low Fat Alkalized",
      description: "Cocoa Powder | HS CODE 18050000 | 100% Indonesian Beans.",
    },
    {
      image: "/assets/cocoa/6.jpg",
      title: "CT 700N Low Fat Natural",
      description: "Cocoa Powder | HS CODE 18050000 | 100% Indonesian Beans.",
    },
    {
      image: "/assets/cocoa/7.jpg",
      title: "CT1000 Black Alkalized",
      description: "Cocoa Powder | HS CODE 18050000 | 100% Indonesian Beans.",
    },
    {
      image: "/assets/cocoa/8.jpg",
      title: "Pure Prime Pressed",
      description: "Cocoa Butter.",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-6">
      {products.map((product, index) => (
        <ProductCard key={index} image={product.image} title={product.title} description={product.description} />
      ))}
    </div>
  );
}
