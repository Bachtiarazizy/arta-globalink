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
      <div className="relative w-full aspect-[4/3]">
        <img src={image} alt={title} className="absolute inset-0 w-full h-full object-cover" />
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
      image: "/assets/cocoa/Natural.jpg",
      title: "FC900N Premium Quality Natural",
      description: "Cocoa Powder | HS CODE 18050000 | 50% Indonesian Beans, 50% African Beans.",
    },
    {
      image: "/assets/cocoa/Natural.jpg",
      title: "FC800N High Quality Natural",
      description: "Cocoa Powder | HS CODE 18050000 | 100% Indonesian Beans",
    },
    {
      image: "/assets/cocoa/Natural Low Fat.jpg",
      title: "FC700N Low Fat Natural",
      description: "Cocoa Powder | HS CODE 18050000 | 100% Indonesian Beans.",
    },
    {
      image: "/assets/cocoa/Alkalized.jpg",
      title: "FC900 Premium Quality Alkalized",
      description: "Cocoa Powder | HS CODE 18050000 | 50% Indonesian Beans, 50% African Beans.",
    },
    {
      image: "/assets/cocoa/Alkalized.jpg",
      title: "FC800 High Quality Alkalized",
      description: "Cocoa Powder | HS CODE 18050000 | 100% Indonesian Beans.",
    },
    {
      image: "/assets/cocoa/Alkalized Low Fat.jpg",
      title: "FC700 Low Fat Alkalized",
      description: "Cocoa Powder | HS CODE 18050000 | 100% Indonesian Beans.",
    },
    {
      image: "/assets/cocoa/Black Alkalized.jpg",
      title: "FC1000 Black Alkalized",
      description: "Cocoa Powder | HS CODE 18050000 | 100% Indonesian Beans.",
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
