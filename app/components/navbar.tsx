"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight, Linkedin, Menu, Phone, Send, X } from "lucide-react";
import ContactButton from "./contact-button";

// Define prop types for NavLink component
interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  isMobile?: boolean;
  onClick?: () => void;
  className?: string;
}

// NavLink component with TypeScript typing and smooth scrolling
const NavLink: React.FC<NavLinkProps> = ({ href, children, isMobile = false, onClick, className = "" }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    // Get the section ID from the href
    const sectionId = href.replace("#", "");
    const element = document.getElementById(sectionId);

    if (element) {
      // Smooth scroll to the element
      window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth",
      });

      // If there's an onClick handler (like for mobile menu), call it
      if (onClick) onClick();
    }
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={`
        font-medium 
        relative 
        group
        ${isMobile ? "text-2xl text-white block text-center py-3" : "text-white"}
        ${className}
      `}
    >
      {children}
      <span
        className={`
          absolute 
          bottom-0 
          left-0 
          h-0.5 
          bg-white 
          transition-all 
          duration-300 
          ${isMobile ? "w-0 group-hover:w-full" : "w-0 group-hover:w-full"}
        `}
      ></span>
    </a>
  );
};

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = (): void => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex absolute top-6 left-0 w-full items-center justify-between px-6 sm:px-12 lg:px-24 z-50">
        {/* Left Side */}
        <div className="flex items-center space-x-6">
          <ul className="flex items-center space-x-6">
            <li>
              <NavLink href="#home">Home</NavLink>
            </li>
            <li>
              <NavLink href="#about">About</NavLink>
            </li>
            <li>
              <NavLink href="#products">Product</NavLink>
            </li>
          </ul>
        </div>

        {/* Middle Logo */}
        <div className="flex justify-center">
          <img src="/assets/logo.png" alt="Logo" width={200} height={100} />
        </div>

        {/* Right Side */}
        <ContactButton href="https://wa.me/6283815242643" variant="primary" size="md" icon={<ChevronRight size={20} />}>
          Contact Us
        </ContactButton>
      </nav>

      {/* Mobile Navigation */}
      <nav className="md:hidden absolute top-0 left-0 w-full z-50">
        {/* Top Bar */}
        <div className="flex justify-between items-center p-4 bg-[#311717]/50">
          <img src="/assets/logo.png" alt="Logo" width={150} height={75} />

          <button onClick={toggleMenu} className="text-white focus:outline-none" aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}>
            {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <motion.div initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ duration: 0.3, ease: "easeInOut" }} className="fixed inset-0 bg-[#311717] z-40 flex flex-col">
            {/* Close Button at Top Right */}
            <div className="absolute top-4 right-4">
              <button onClick={toggleMenu} className="text-white hover:bg-white/20 rounded-full p-2 transition-colors" aria-label="Close Menu">
                <X size={32} />
              </button>
            </div>

            {/* Menu Content Centered */}
            <div className="flex flex-col pt-24 items-center space-y-6">
              <NavLink href="#home" isMobile onClick={toggleMenu}>
                Home
              </NavLink>
              <NavLink href="#about" isMobile onClick={toggleMenu}>
                About
              </NavLink>
              <NavLink href="#products" isMobile onClick={toggleMenu}>
                Product
              </NavLink>
              <ContactButton href="https://wa.me/6283815242643" variant="primary" size="md" icon={<ChevronRight size={20} />}>
                Contact Us
              </ContactButton>
            </div>
          </motion.div>
        )}
      </nav>
    </>
  );
}
