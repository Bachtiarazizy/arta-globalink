import React, { useState, useEffect, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface PageLoaderProps {
  children: ReactNode;
}

const PageLoader: React.FC<PageLoaderProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate page load (replace with your actual load conditions)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // Adjust timing as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading ? (
        <motion.div key="loader" initial={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }} className="fixed inset-0 z-50 flex items-center justify-center bg-[#292929]">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{
              scale: [0.8, 1.1, 1],
              opacity: [0, 1, 1],
              rotate: [0, 360],
            }}
            transition={{
              duration: 1.5,
              ease: "easeInOut",
              times: [0, 0.5, 1],
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="w-24 h-24 border-4 border-[#E6B84F] rounded-full flex items-center justify-center"
          >
            <span className="text-2xl font-bold text-[#E6B84F]">ARTA</span>
          </motion.div>
        </motion.div>
      ) : (
        children
      )}
    </AnimatePresence>
  );
};

export default PageLoader;
