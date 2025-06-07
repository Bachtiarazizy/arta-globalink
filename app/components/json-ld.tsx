// components/json-ld.jsx
"use client";

import React from "react";

export default function JsonLd() {
  React.useEffect(() => {
    // Create and inject the JSON-LD script after component mounts
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Arta Globalink",
      url: "https://artaglobalink.com",
      logo: "https://artaglobalink.com/assets/logo.png",
      description: "A company that connects farmers and factories who provide commodities or processed products with international standard quality.",
      address: {
        "@type": "PostalAddress",
        addressCountry: "Indonesia",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+62-xxx-xxxx-xxxx",
        contactType: "customer service",
      },
      sameAs: ["https://www.facebook.com/artaglobalink", "https://www.instagram.com/artaglobalink", "https://www.linkedin.com/company/artaglobalink"],
      offers: {
        "@type": "AggregateOffer",
        offerCount: "2",
        offers: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Product",
              name: "Cocoa Products",
              description: "High-quality cocoa products with international standards",
            },
          },
        ],
      },
    });

    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null;
}
