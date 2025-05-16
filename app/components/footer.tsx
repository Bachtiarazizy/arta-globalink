import { MailCheck, Phone, MapPinCheck, Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="w-full bg-white text-[#292929] py-12 sm:py-16 md:py-20 px-6 sm:px-12 lg:px-24 rounded-t-xl">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-8 lg:gap-12 lg:grid-cols-3">
            {/* Logo Section */}
            <div className="flex flex-col items-center sm:items-start">
              <div className="flex justify-center sm:justify-start">
                <img src="/assets/logo.png" alt="Logo" width={200} height={100} className="max-w-[150px] sm:max-w-[200px] md:max-w-[250px]" />
              </div>

              <p className="mt-6 max-w-md text-center sm:text-left text-sm sm:text-base leading-relaxed text-[#292929]">Providing the best quality of agricultural commodities and suitable as raw materials for processed products</p>
              <div className="flex justify-center sm:justify-start mt-6 space-x-4">
                <a href="https://www.facebook.com/artaglobalink" target="_blank" rel="noopener noreferrer" className="text-[#292929] hover:text-[#E6B84F] transition-colors">
                  <Facebook className="w-6 h-6 sm:w-7 sm:h-7" />
                </a>
                <a href="https://www.instagram.com/artaglobalink" target="_blank" rel="noopener noreferrer" className="text-[#292929] hover:text-[#E6B84F] transition-colors">
                  <Instagram className="w-6 h-6 sm:w-7 sm:h-7" />
                </a>
                <a href="https://www.linkedin.com/company/artaglobalink" target="_blank" rel="noopener noreferrer" className="text-[#292929] hover:text-[#E6B84F] transition-colors">
                  <Linkedin className="w-6 h-6 sm:w-7 sm:h-7" />
                </a>
              </div>
            </div>

            {/* Navigation Sections */}
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {/* Left Column - Links */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {/* Company Section */}
                  <div className="text-center sm:text-left">
                    <p className="text-base sm:text-lg font-medium text-[#E6B84F]">Company</p>
                    <ul className="mt-4 sm:mt-8 space-y-3 sm:space-y-4 text-xs sm:text-sm">
                      <li>
                        <a className="text-[#292929] transition hover:text-[#292929]/75" href="#">
                          Home
                        </a>
                      </li>
                      <li>
                        <a className="text-[#292929] transition hover:text-[#292929]/75" href="#">
                          About us
                        </a>
                      </li>
                      <li>
                        <a className="text-[#292929] transition hover:text-[#292929]/75" href="#">
                          Products
                        </a>
                      </li>
                    </ul>
                  </div>

                  {/* Downloads Section */}
                  <div className="text-center sm:text-left">
                    <p className="text-base sm:text-lg font-medium text-[#E6B84F]">Downloads</p>
                    <ul className="mt-4 sm:mt-8 space-y-3 sm:space-y-4 text-xs sm:text-sm">
                      <li>
                        <a className="text-[#292929] transition hover:text-[#292929]/75" href="/assets/cocoa/Fortune Cocoa Powder Catalogue.pdf" download>
                          Cacao Catalog
                        </a>
                      </li>
                      <li>
                        <a className="text-[#292929] transition hover:text-[#292929]/75" href="/assets/vanilla/Vanilla Catalogue.pdf" download>
                          Vanilla Catalog
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Right Column - Contact */}
                <div className="text-center sm:text-left">
                  <p className="text-base sm:text-lg font-medium text-[#E6B84F]">Contact Us</p>
                  <ul className="mt-4 sm:mt-8 space-y-5 text-xs sm:text-sm">
                    <li>
                      <a className="flex items-center justify-center sm:justify-start" href="mailto:connect@artaglobalink.com">
                        <span className="mr-2">
                          <MailCheck className="w-5 h-5 sm:w-6 sm:h-6" />
                        </span>
                        <span className="text-[#292929]">connect@artaglobalink.com</span>
                      </a>
                    </li>
                    <li>
                      <a className="flex items-center justify-center sm:justify-start" href="https://wa.me/6283815242643" target="_blank" rel="noopener noreferrer">
                        <span className="mr-2">
                          <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
                        </span>
                        <span className="text-[#292929]">+6283815242643</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="flex items-start justify-center sm:justify-start">
                        <span className="mr-2 mt-1">
                          <MapPinCheck className="w-5 h-5 sm:w-6 sm:h-6" />
                        </span>
                        <span className="text-[#292929]">JL. Nenas Raya no. 39B rt/rw 01/05 kel. Cibodasari kec. Cibodas Kota Tangerang Banten 15138. Indonesia</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Horizontal Line Divider */}
          <div className="mt-12 pt-8 border-t border-gray-700">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
              {/* Copyright Text */}
              <div className="text-center md:text-left text-xs sm:text-sm text-gray-400">© {currentYear} Arta Globalink. All Rights Reserved.</div>

              {/* Terms & Policy Links */}
              <div className="flex flex-wrap justify-center md:justify-end gap-4 sm:gap-6 text-xs sm:text-sm text-gray-400">
                <a href="#" className="hover:text-[#E6B84F] transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="hover:text-[#E6B84F] transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-[#E6B84F] transition-colors">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
