"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight, Linkedin, Menu, Phone, Mail, Facebook, Instagram, Twitter, X } from "lucide-react";
import ContactButton from "./contact-button";

// Define prop types for NavLink component
interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  isMobile?: boolean;
  onClick?: () => void;
  className?: string;
}

// NavLink component with TypeScript typing and proper navigation handling
const NavLink: React.FC<NavLinkProps> = ({ href, children, isMobile = false, onClick, className = "" }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Only prevent default for hash links (internal section navigation)
    const isHashLink = href.startsWith("#");

    if (isHashLink) {
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
      }
    }

    // If there's an onClick handler (like for mobile menu), call it
    if (onClick) onClick();
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

// Social icon link component
const SocialLink: React.FC<{ href: string; icon: React.ReactNode; label: string }> = ({ href, icon, label }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors" aria-label={label}>
    {icon}
  </a>
);

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = (): void => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <div className="hidden md:block absolute top-0 left-0 w-full z-50">
        {/* Top Section with Email and Social Links */}
        <div className="border-b border-gray-400 px-20">
          <div className="container mx-auto flex justify-between">
            {/* Left Side - Contact Info with borders */}
            <div className="flex">
              <a href="tel:+6283815242643" className="flex items-center space-x-2 text-white text-sm px-6 py-4 border-r border-gray-400">
                <Phone size={16} />
                <span>+62 838 1524 2643</span>
              </a>

              <a href="mailto:connect@artaglobalink.com" className="flex items-center space-x-2 border-r border-gray-400 text-white text-sm px-6 py-4">
                <Mail size={16} />
                <span>connect@artaglobalink.com</span>
              </a>
            </div>

            {/* Right Side - Hashtag and Social Links with borders */}
            <div className="flex">
              <span className="text-white text-sm px-6 py-4 border-r border-l border-gray-400">#MakeYourChocolate</span>

              <div className="flex items-center space-x-4 px-6 py-4">
                <SocialLink href="https://instagram.com/company" icon={<Instagram size={18} />} label="Instagram" />
                <SocialLink href="https://twitter.com/company" icon={<X size={18} />} label="Twitter" />
                <SocialLink href="https://facebook.com/company" icon={<Facebook size={18} />} label="Facebook" />
              </div>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <nav className="flex items-center justify-between px-6 sm:px-12 lg:px-24 py-4">
          {/* Left Side */}
          <div className="flex items-center space-x-6">
            <ul className="flex items-center space-x-6">
              <li>
                <NavLink href="/">Home</NavLink>
              </li>
              <li>
                <NavLink href="/about">About</NavLink>
              </li>
              <li>
                <NavLink href="/products">Products</NavLink>
              </li>
            </ul>
          </div>

          {/* Middle Logo */}
          <div className="flex items-center justify-center">
            <img src="/assets/logo.png" alt="Logo" width={200} height={100} />
          </div>

          {/* Right Side */}
          <ContactButton href="https://wa.me/6283815242643" variant="primary" size="md" icon={<ChevronRight size={20} />}>
            Contact Us
          </ContactButton>
        </nav>
      </div>

      {/* Mobile Navigation */}
      <nav className="md:hidden absolute top-0 left-0 w-full z-50">
        {/* Top Bar */}
        <div className="flex justify-between items-center p-4 bg-transparent">
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

            {/* Contact Information in Mobile Menu */}
            <div className="flex flex-col items-center pt-16 pb-4">
              <div className="flex space-x-6 mt-2">
                <SocialLink href="https://linkedin.com/company/yourcompany" icon={<Linkedin size={20} />} label="LinkedIn" />
                <SocialLink href="https://facebook.com/yourcompany" icon={<Facebook size={20} />} label="Facebook" />
                <SocialLink href="https://instagram.com/yourcompany" icon={<Instagram size={20} />} label="Instagram" />
                <SocialLink href="https://twitter.com/yourcompany" icon={<Twitter size={20} />} label="Twitter" />
              </div>
            </div>

            {/* Menu Content */}
            <div className="flex flex-col items-center space-y-6 mt-4">
              <NavLink href="/" isMobile onClick={toggleMenu}>
                Home
              </NavLink>
              <NavLink href="/about" isMobile onClick={toggleMenu}>
                About
              </NavLink>
              <NavLink href="/products" isMobile onClick={toggleMenu}>
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
