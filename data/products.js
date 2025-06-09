// Cocoa Products Data
const productsData = {
  products: [
    {
      id: 1,
      name: "FC800N NATURAL LOW FAT",
      category: "natural-cocoa-powder",
      image: "/assets/products/natural.jpg",
      shortDesc: "Cocoa Powder | HS Code 18050000",
      origin: "Indonesia",
      type: "natural",
      colorVariants: {
        brown: "/assets/products/natural.jpg",
        dark: "/assets/products/brown.jpg",
        "very-dark": "/assets/products/dark-brown.jpg",
      },
      technicalSpecifications: {
        pH: "5.0 - 6.0",
        flavor: "As per Standard",
        fatContent: "4-8%",
        ashContent: "8% Max",
        fineness: "(+/-) 99% <75μm",
        moisture: "5.0% Max",
        shellContent: "1.5% Max",
        application: "Chocolate, Ice Cream, Fillings, Cakes, Cookies",
        moq: "26 MT in a 40ft container",
      },
      description:
        "Our Natural Low Fat Cocoa Powder is carefully processed to preserve the rich flavors and aromas of the cocoa bean. With reduced fat content, it's ideal for applications where a strong cocoa flavor is desired without additional fat. Sourced from sustainable farms in Indonesia, this powder is perfect for baking, hot chocolate, and various culinary applications.",
    },
    {
      id: 2,
      name: "FC900N NATURAL HIGH FAT",
      category: "natural-cocoa-powder",
      image: "/assets/products/natural.jpg",
      shortDesc: "Cocoa Powder | HS Code 18050000",
      origin: "Indonesia",
      type: "natural",
      colorVariants: {
        brown: "/assets/products/natural.jpg",
        dark: "/assets/products/brown.jpg",
        "very-dark": "/assets/products/dark-brown.jpg",
      },
      technicalSpecifications: {
        pH: "5.4 - 6.7",
        flavor: "As per Standard",
        fatContent: "10-12%",
        ashContent: "8% Max",
        fineness: "(+/-) 99% <75μm",
        moisture: "5% Max",
        shellContent: "1.5% Max",
        application: "Chocolate, Ice Cream, Fillings, Cakes, Cookies",
        moq: "26 MT in a 40ft container",
      },
      description:
        "Our Natural High Fat Cocoa Powder delivers a premium chocolate experience with its elevated fat content. This creates a smoother mouthfeel and richer flavor profile, perfect for luxury chocolate products. The higher fat content enhances melting properties and creates superior texture in various applications.",
    },
    {
      id: 3,
      name: "FC950N HIGH FAT PREMIUM",
      category: "natural-cocoa-powder",
      image: "/assets/products/natural.jpg",
      shortDesc: "Cocoa Powder | HS Code 18050000",
      origin: "Indonesia",
      type: "natural",
      colorVariants: {
        brown: "/assets/products/natural.jpg",
        dark: "/assets/products/brown.jpg",
        "very-dark": "/assets/products/dark-brown.jpg",
      },
      technicalSpecifications: {
        pH: "6",
        flavor: "As per Standard",
        fatContent: "10-12%",
        ashContent: "8% Max",
        fineness: "(+/-) 99% <75μm",
        moisture: "5% Max",
        shellContent: "0.0-1.0% Max",
        application: "Chocolate, Ice Cream, Fillings, Cakes, Cookies",
        moq: "26 MT in a 40ft container",
      },
      description:
        "Our Premium High Fat Natural Cocoa Powder represents the pinnacle of natural cocoa products. Made from selected premium beans with careful processing to maintain optimal flavor compounds. The extra high fat content creates an exceptionally smooth texture and rich mouthfeel, making it the choice for gourmet applications.",
    },
    {
      id: 4,
      name: "FC800A ALKALIZED LOW FAT",
      category: "alkalized-cocoa-powder",
      image: "/assets/products/natural.jpg",
      shortDesc: "Cocoa Powder | HS Code 18050000",
      origin: "Indonesia",
      type: "alkalized",
      colorVariants: {
        brown: "/assets/products/natural.jpg",
        dark: "/assets/products/brown.jpg",
        "very-dark": "/assets/products/dark-brown.jpg",
      },
      technicalSpecifications: {
        pH: "6.8 - 7.2",
        flavor: "As per Standard",
        fatContent: "4-8%",
        ashContent: "12% Max",
        fineness: "(+/-) 99% <75μm",
        moisture: "5.0% Max",
        shellContent: "1.5% Max",
        application: "Chocolate, Instant Drink, Fillings, Cakes, Cookies, Cereals",
        moq: "26 MT in a 40ft container",
      },
      description:
        "Our Alkalized Low Fat Cocoa Powder undergoes a Dutch processing method to neutralize acidity, resulting in a milder flavor and darker color. With reduced fat content, it's perfect for applications requiring good dispersibility and a smooth mouthfeel without excessive richness.",
    },
    {
      id: 5,
      name: "FC900A ALKALIZED HIGH FAT",
      category: "alkalized-cocoa-powder",
      image: "/assets/products/natural.jpg",
      shortDesc: "Cocoa Powder | HS Code 18050000",
      origin: "Indonesia",
      type: "alkalized",
      colorVariants: {
        brown: "/assets/products/natural.jpg",
        dark: "/assets/products/brown.jpg",
        "very-dark": "/assets/products/dark-brown.jpg",
      },
      technicalSpecifications: {
        pH: "6.8 - 7.2",
        flavor: "As per Standard",
        fatContent: "10-12%",
        ashContent: "12% Max",
        fineness: "(+/-) 99% <75μm",
        moisture: "5.0% Max",
        shellContent: "1.5% Max",
        application: "Chocolate, Ice Cream, Fillings, Cakes, Cookies",
        moq: "26 MT in a 40ft container",
      },
      description:
        "Our Alkalized High Fat Cocoa Powder combines the smooth flavor profile of alkalization with an elevated fat content for superior applications. The higher fat content enhances mouthfeel and texture, while the alkalization process reduces bitterness and creates a more mellow flavor profile with enhanced solubility.",
    },
    {
      id: 6,
      name: "FC950A ALKALIZED HIGH FAT PREMIUM",
      category: "alkalized-cocoa-powder",
      image: "/assets/products/natural.jpg",
      shortDesc: "Cocoa Powder | HS Code 18050000",
      origin: "Indonesia",
      type: "alkalized",
      colorVariants: {
        brown: "/assets/products/natural.jpg",
        dark: "/assets/products/brown.jpg",
        "very-dark": "/assets/products/dark-brown.jpg",
      },
      technicalSpecifications: {
        pH: "6.8 - 7.2",
        flavor: "As per Standard",
        fatContent: "10-12%",
        ashContent: "12% Max",
        fineness: "(+/-) 99% <75μm",
        moisture: "5.0% Max",
        shellContent: "0.0-1.0% Max",
        application: "Chocolate, Ice Cream, Fillings, Cakes, Cookies",
        moq: "26 MT in a 40ft container",
      },
      description:
        "Our Premium Alkalized High Fat Cocoa Powder represents our finest alkalized offering. Carefully processed to achieve the perfect balance of richness and smoothness, with extra high fat content for superior texture and mouthfeel. Ideal for applications where exceptional quality and consistency are required.",
    },
    {
      id: 7,
      name: "FC900B BLACK COCOA",
      category: "black-cocoa-powder",
      image: "/assets/products/black.jpg",
      shortDesc: "Cocoa Powder | HS Code 18050000",
      origin: "Indonesia",
      type: "black",
      technicalSpecifications: {
        pH: "7.0 - 8.5",
        flavor: "As per Standard",
        fatContent: "8-10%",
        ashContent: "12% Max",
        fineness: "(+/-) 99% <75μm",
        moisture: "5.0% Max",
        shellContent: "1.5% Max",
        application: "Bakery Premix, Confectione's Coatings",
        moq: "26 MT in a 40ft container",
      },
      description:
        "Our Black Cocoa Powder undergoes an intensive alkalization process to achieve its characteristic deep black color and distinctive flavor profile. Perfect for creating striking visual appeal and intense cocoa flavor in applications like dark cookies, black ice cream, and other dark bakery products.",
    },
  ],
  productDescriptions: {
    "natural-cocoa-powder":
      "Our natural cocoa powder preserves the authentic flavors and characteristics of cocoa beans. With no alkalization, it maintains higher acidity and a more robust chocolate flavor, making it excellent for recipes that use baking soda as a leavening agent. Sourced from sustainable farms in Indonesia, our natural cocoa powders come in various fat contents to suit different applications.",
    "alkalized-cocoa-powder":
      "Our alkalized cocoa powder undergoes Dutch processing to neutralize acidity, resulting in a milder flavor, darker color, and improved solubility. This makes it ideal for beverages, ice creams, and applications where a smoother taste profile is desired. Available in different fat levels to accommodate various culinary needs.",
    "black-cocoa-powder":
      "Our black cocoa powder is heavily alkalized to achieve an intensely dark color and distinctive flavor profile. Often used to create striking visual contrast in baked goods and ice creams, it delivers that classic dark cookie look and taste. While less acidic than natural cocoa, it provides a unique depth to any application requiring dramatic color and flavor impact.",
  },
  filters: [
    { id: "all", label: "All Products" },
    { id: "natural-cocoa-powder", label: "Natural Cocoa Powder" },
    { id: "alkalized-cocoa-powder", label: "Alkalized Cocoa Powder" },
    { id: "black-cocoa-powder", label: "Black Cocoa Powder" },
  ],
  types: [
    { id: "natural", label: "Natural Cocoa" },
    { id: "alkalized", label: "Alkalized Cocoa" },
    { id: "black", label: "Black Cocoa" },
  ],
};

// Export for use in other modules (ES6 modules)
export default productsData;

// Alternative export for CommonJS (Node.js)
// module.exports = cocoaProductsData;

// You can also export individual parts if needed
export const { products, productDescriptions, filters, types } = productsData;
