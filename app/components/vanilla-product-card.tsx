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

export default function VanillaProductSection() {
  const products: Product[] = [
    {
      image: "/assets/vanilla/1.jpg",
      title: "Grade A Vanilla Beans - PLANIFOLIA",
      description: "Straight, No Split, Brown to Dark Brown Color. Minimum size 17cm in length",
    },
    {
      image: "/assets/vanilla/2.jpg",
      title: "Grade B Vanilla Beans - PLANIFOLIA",
      description: "Straight , Dark Brown with Light Strips. Minimum size 15cm in length",
    },
    {
      image: "/assets/vanilla/3.jpg",
      title: "Grade C Vanilla Beans - PLANIFOLIA",
      description: "Not Straight, Curl, Brown with Light Brown Strips. Mixed Sizes",
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
