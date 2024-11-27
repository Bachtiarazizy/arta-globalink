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
      description: "Straight, No Split, Brown to Dark brown color.",
    },
    {
      image: "/assets/vanilla/2.jpg",
      title: "Grade B Vanilla Beans - PLANIFOLIA",
      description: "Straight, Dark Brown with Light Strips",
    },
    {
      image: "/assets/vanilla/3.jpg",
      title: "Grade B Vanilla Beans - PLANIFOLIA",
      description: "Not Straight/Curl, Brown with Light Strips",
    },
    {
      image: "/assets/vanilla/4.jpg",
      title: "Vanilla - Pure Vanilla Extract",
      description: "Brown Liquid(not thick) with strong Vanilla aroma/scent",
    },
    {
      image: "/assets/vanilla/5.jpg",
      title: "Vanilla - Pure Vanilla Extract",
      description: "Brown Liquid(not thick) with strong Vanilla aroma/scent",
    },
    {
      image: "/assets/vanilla/6.jpg",
      title: "Vanilla Paste - Premium Paste",
      description: "Straight, No Split, Brown to Dark brown color.",
    },
    {
      image: "/assets/vanilla/7.jpg",
      title: "Vanilla Paste - Premium Paste",
      description: "Straight, No Split, Brown to Dark brown color.",
    },
    {
      image: "/assets/vanilla/8.jpg",
      title: "Grade A Planifolia vanilla beans 10gr and 25gr",
      description: "minimum 17cm in length, Straight, No Split, Brown to Dark brown color.",
    },
    {
      image: "/assets/vanilla/9.jpg",
      title: "Pure Vanilla Powder - Premium Quality",
      description: "Rough Powder, brown, strong vanilla aroma",
    },
    {
      image: "/assets/vanilla/10.jpg",
      title: "Cut Vanilla",
      description: "Cutted, brown, strong vanilla aroma",
    },
    {
      image: "/assets/vanilla/11.jpg",
      title: "Non Alcohol Vanilla Paste",
      description: "Dark brown thick with a lot vanilla seeds with strong vanilla aroma/scent",
    },
    {
      image: "/assets/vanilla/12.jpg",
      title: "Non Alcohol Vanilla Extract",
      description: "Light brown thick with a strong vanilla aroma/scent",
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
