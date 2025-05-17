import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function page() {
  return (
    <section id="contact" className="bg-[#f9f9f9] text-[#292929]">
      <div
        className="relative h-64 flex items-center justify-center pt-12 md:pt-16 lg:pt-60 pb-36 text-white"
        style={{
          backgroundImage: 'url("/assets/hero.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto mb-6">Reach out to us for inquiries, orders, or any information you might need.</p>
          <div className="flex items-center justify-center space-x-2">
            <Link href="/" className="text-gray-300 hover:text-white transition-colors">
              Home
            </Link>
            <span className="text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
            <span className="text-[#E6B84F]">Contact Us</span>
          </div>
        </div>
      </div>

      <div className="grid container mx-auto grid-cols-1 py-24 px-6 sm:px-12 lg:px-24 md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold">Get In Touch</h3>
          <p className="text-gray-800">We're here to answer any questions you may have about our products or services.</p>

          <div className="space-y-4">
            <div className="flex items-start">
              <div className="bg-[#592F1F] p-3 rounded-full mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h4 className="font-medium">Address</h4>
                <p className="text-gray-800">JL. Nenas Raya no. 39B rt/rw 01/05 kel. Cibodasari kec. Cibodas Kota Tangerang Banten 15138. Indonesia</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-[#592F1F] p-3 rounded-full mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </div>
              <div>
                <h4 className="font-medium">Phone</h4>
                <a href="tel:+6283815242643">
                  <p className="text-gray-800">+62 838 1524 2643</p>
                </a>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-[#592F1F] p-3 rounded-full mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>
              <div>
                <h4 className="font-medium">Email</h4>
                <a href="mailto:connect@artaglobalink.com">
                  <p className="text-gray-800">connect@artaglobalink.com</p>
                </a>
              </div>
            </div>
          </div>

          <div className="pt-6">
            <h4 className="font-medium mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="bg-white bg-opacity-10 p-3 rounded-full hover:bg-[#592F1F] transition-colors">
                <FaFacebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-white bg-opacity-10 p-3 rounded-full hover:bg-[#592F1F] transition-colors">
                <FaInstagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-white bg-opacity-10 p-3 rounded-full hover:bg-[#592F1F] transition-colors">
                <FaLinkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="bg-white bg-opacity-10 p-8 rounded-xl">
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input type="text" className="w-full px-4 py-3 bg-white bg-opacity-10 border border-gray-600 rounded-lg focus:outline-none focus:border-[#592F1F]" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input type="email" className="w-full px-4 py-3 bg-white bg-opacity-10 border border-gray-600 rounded-lg focus:outline-none focus:border-[#592F1F]" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Subject</label>
              <input type="text" className="w-full px-4 py-3 bg-white bg-opacity-10 border border-gray-600 rounded-lg focus:outline-none focus:border-[#592F1F]" />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea rows={5} className="w-full px-4 py-3 bg-white bg-opacity-10 border border-gray-600 rounded-lg focus:outline-none focus:border-[#592F1F]"></textarea>
            </div>

            <button className="bg-[#592F1F] text-white px-8 py-3 rounded-lg hover:bg-opacity-80 transition-all duration-300 w-full">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}
