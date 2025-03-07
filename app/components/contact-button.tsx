"use client";

import React from "react";
import { motion } from "framer-motion";
import { ChevronRight, Download } from "lucide-react";
import Link from "next/link";

type ContactButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  icon?: React.ReactNode;
  isExternal?: boolean;
  className?: string;
};

const ContactButton = ({ href, children, variant = "primary", size = "md", icon = <ChevronRight size={20} />, isExternal = true, className = "" }: ContactButtonProps) => {
  // Variant styles
  const variantStyles = {
    primary: "relative text-base tracking-tight font-medium overflow-hidden text-[#292929] group hover:text-white",
    secondary: "relative font-medium overflow-hidden text-[#25D366] group hover:text-[#292929]",
    outline: "bg-transparent text-[#25D366] border border-[#25D366] hover:bg-[#25D366]/10",
  };

  // Size styles
  const sizeStyles = {
    sm: "px-4 py-1.5 text-sm",
    md: "px-5 py-2.5 text-base",
    lg: "px-6 py-3 text-lg",
  };

  // External link props
  const externalProps = isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {};

  // Special case for primary variant with the animated style
  if (variant === "primary") {
    return (
      <Link href={href} {...externalProps} passHref>
        <motion.div
          className={`flex items-center gap-2 rounded-full font-medium transition-all duration-300 ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
          whileHover={{
            scale: 1.02,
          }}
          whileTap={{
            scale: 0.98,
          }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 17,
          }}
        >
          {/* Black background */}
          <span className="absolute inset-0 bg-[#E6B84F] rounded-full z-0"></span>

          {/* Animation element - darker black */}
          <span className="absolute inset-x-0 bottom-0 h-0 bg-[#292929]  rounded-full z-0 transition-all duration-300 ease-in-out group-hover:h-full"></span>

          {/* Content with gold text */}
          <span className="relative z-10">{children}</span>
          <motion.span className="relative z-10" initial={{ x: 0 }} animate={{ x: 0 }} whileHover={{ x: 3 }} transition={{ type: "spring", stiffness: 400 }}>
            {icon}
          </motion.span>
        </motion.div>
      </Link>
    );
  }
  if (variant === "secondary") {
    return (
      <Link href={href} {...externalProps} passHref>
        <motion.div
          className={`flex items-center gap-2 rounded-full font-medium transition-all duration-300 ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
          whileHover={{
            scale: 1.02,
          }}
          whileTap={{
            scale: 0.98,
          }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 17,
          }}
        >
          {/* Black background */}
          <span className="absolute inset-0 bg-transparent border border-[#25D366] rounded-full z-0"></span>

          {/* Animation element - darker black */}
          <span className="absolute inset-x-0 bottom-0 h-0 bg-[#25D366]  rounded-full z-0 transition-all duration-300 ease-in-out group-hover:h-full"></span>

          {/* Content with gold text */}
          <span className="relative z-10">{children}</span>
          <motion.span className="relative z-10" initial={{ x: 0 }} animate={{ x: 0 }} whileHover={{ x: 3 }} transition={{ type: "spring", stiffness: 400 }}>
            {icon}
          </motion.span>
        </motion.div>
      </Link>
    );
  }

  // Regular variants
  return (
    <Link href={href} {...externalProps} passHref>
      <motion.div
        className={`flex items-center gap-2 rounded-full font-medium transition-all duration-300 ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
        whileHover={{
          scale: 1.02,
        }}
        whileTap={{
          scale: 0.98,
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 17,
        }}
      >
        <span>{children}</span>
        <motion.span initial={{ x: 0 }} animate={{ x: 0 }} whileHover={{ x: 3 }} transition={{ type: "spring", stiffness: 400 }}>
          {icon}
        </motion.span>
      </motion.div>
    </Link>
  );
};

// WhatsApp specific contact button
export const WhatsAppButton = ({
  phoneNumber = "6283815242643",
  children = "Contact Us",
  size = "md",
  className = "",
  icon = <ChevronRight size={20} />,
}: {
  phoneNumber?: string;
  children?: React.ReactNode;
  size?: "sm" | "md" | "lg";
  className?: string;
  icon?: React.ReactNode;
}) => {
  return (
    <ContactButton href={`https://wa.me/${phoneNumber}`} variant="primary" size={size} icon={icon} isExternal={true} className={className}>
      {children}
    </ContactButton>
  );
};

type DownloadButtonProps = {
  fileUrl: string;
  fileName?: string;
  children?: React.ReactNode;
  size?: "sm" | "md" | "lg";
  className?: string;
};

export const DownloadButton = ({ fileUrl, fileName = "download", children = "Download Catalogue", size = "md", className = "" }: DownloadButtonProps) => {
  return (
    <a href={fileUrl} download={fileName}>
      <ContactButton href={fileUrl} variant="primary" size={size} icon={<Download size={20} />} isExternal={false} className={className}>
        {children}
      </ContactButton>
    </a>
  );
};

export default ContactButton;
