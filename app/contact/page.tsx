import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function page() {
  return (
    <section id="contact" className="bg-[#292929] text-white py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold relative inline-block">
            Contact <span className="text-[#25D366]">Us</span>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#25D366] mt-2"></div>
          </h2>
          <p className="text-gray-300 mt-6 max-w-2xl mx-auto">Reach out to us for inquiries, orders, or any information you might need.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Get In Touch</h3>
            <p className="text-gray-300">We're here to answer any questions you may have about our products or services.</p>

            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-[#25D366] p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium">Address</h4>
                  <p className="text-gray-300">123 Cocoa Street, Jakarta, Indonesia</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-[#25D366] p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <p className="text-gray-300">+62 123 456 7890</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-[#25D366] p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <p className="text-gray-300">info@artaglobalink.com</p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <h4 className="font-medium mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="bg-white bg-opacity-10 p-3 rounded-full hover:bg-[#25D366] transition-colors">
                  <FaFacebook className="w-5 h-5" />
                </a>
                <a href="#" className="bg-white bg-opacity-10 p-3 rounded-full hover:bg-[#25D366] transition-colors">
                  <FaInstagram className="w-5 h-5" />
                </a>
                <a href="#" className="bg-white bg-opacity-10 p-3 rounded-full hover:bg-[#25D366] transition-colors">
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
                  <input type="text" className="w-full px-4 py-3 bg-white bg-opacity-10 border border-gray-600 rounded-lg focus:outline-none focus:border-[#25D366]" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input type="email" className="w-full px-4 py-3 bg-white bg-opacity-10 border border-gray-600 rounded-lg focus:outline-none focus:border-[#25D366]" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Subject</label>
                <input type="text" className="w-full px-4 py-3 bg-white bg-opacity-10 border border-gray-600 rounded-lg focus:outline-none focus:border-[#25D366]" />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea rows={5} className="w-full px-4 py-3 bg-white bg-opacity-10 border border-gray-600 rounded-lg focus:outline-none focus:border-[#25D366]"></textarea>
              </div>

              <button className="bg-[#25D366] text-white px-8 py-3 rounded-lg hover:bg-opacity-80 transition-all duration-300 w-full">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
