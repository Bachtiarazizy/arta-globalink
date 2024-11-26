/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  reactStrictMode: true,

  // Image optimization settings
  images: {
    domains: [], // Add external image domains if needed
    formats: ["image/avif", "image/webp"], // Preferred image formats for optimization
  },

  // Custom Webpack configuration
  webpack(config) {
    // Resolving Framer Motion alias for consistent handling
    config.resolve.alias = {
      ...config.resolve.alias,
      "framer-motion": "framer-motion", // Ensure proper aliasing for Framer Motion
    };
    return config;
  },

  // Transpile specific packages (e.g., Framer Motion)
  transpilePackages: ["framer-motion"],

  // Experimental performance optimizations
  experimental: {
    optimizeCss: true,
    optimizeServerReact: true, // React optimizations on the server side
  },

  // Compiler configurations for production
  compiler: {
    removeConsole: process.env.NODE_ENV === "production", // Remove console logs in production
  },
};

export default nextConfig;
