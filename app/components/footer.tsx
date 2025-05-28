import { MailCheck, Phone, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* about section */}
          <div className="lg:col-span-1 flex flex-col items-center lg:items-start">
            <div className="flex justify-center lg:justify-start mb-6">
              <img src="/assets/black-logo.png" alt="Arta Globalink Logo" width={200} height={100} className="max-w-[180px] sm:max-w-[220px] lg:max-w-[260px]" />
            </div>

            <p className="text-center lg:text-left text-sm sm:text-base leading-relaxed text-[#292929] mb-8 max-w-lg">
              Providing the best quality of agricultural commodities and suitable as raw materials for processed products. We are committed to excellence in every aspect of our business.
            </p>

            <div className="flex justify-center lg:justify-start space-x-5">
              <a href="https://www.facebook.com/artaglobalink" target="_blank" rel="noopener noreferrer" className="text-[#292929] hover:text-[#592F1F] transition-all duration-200 hover:-translate-y-1" aria-label="Follow us on Facebook">
                <Facebook className="w-6 h-6 sm:w-7 sm:h-7" />
              </a>
              <a href="https://www.instagram.com/artaglobalink" target="_blank" rel="noopener noreferrer" className="text-[#292929] hover:text-[#592F1F] transition-all duration-200 hover:-translate-y-1" aria-label="Follow us on Instagram">
                <Instagram className="w-6 h-6 sm:w-7 sm:h-7" />
              </a>
              <a
                href="https://www.linkedin.com/company/artaglobalink"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#292929] hover:text-[#592F1F] transition-all duration-200 hover:-translate-y-1"
                aria-label="Connect with us on LinkedIn"
              >
                <Linkedin className="w-6 h-6 sm:w-7 sm:h-7" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4">
            <div className="text-center lg:text-left">
              <h3 className="text-lg sm:text-xl font-semibold text-[#592F1F] mb-6">Quick Links</h3>
              <nav>
                <ul className="space-y-4 text-sm sm:text-base">
                  <li>
                    <a className="text-[#292929] hover:text-[#592F1F] transition-all duration-200 relative hover:translate-x-1 inline-block" href="/">
                      Home
                    </a>
                  </li>
                  <li>
                    <a className="text-[#292929] hover:text-[#592F1F] transition-all duration-200 relative hover:translate-x-1 inline-block" href="/about">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a className="text-[#292929] hover:text-[#592F1F] transition-all duration-200 relative hover:translate-x-1 inline-block" href="/products">
                      Our Products
                    </a>
                  </li>
                  <li>
                    <a className="text-[#292929] hover:text-[#592F1F] transition-all duration-200 relative hover:translate-x-1 inline-block" href="/contact">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="text-center lg:text-left">
              <h3 className="text-lg sm:text-xl font-semibold text-[#592F1F] mb-6">Our Products</h3>
              <nav>
                <ul className="space-y-4 text-sm sm:text-base">
                  <li>
                    <a className="text-[#292929] hover:text-[#592F1F] transition-all duration-200 relative hover:translate-x-1 inline-block" href="/products/type/natural">
                      Natural
                    </a>
                  </li>
                  <li>
                    <a className="text-[#292929] hover:text-[#592F1F] transition-all duration-200 relative hover:translate-x-1 inline-block" href="/products/type/alkalized">
                      Alkalized
                    </a>
                  </li>
                  <li>
                    <a className="text-[#292929] hover:text-[#592F1F] transition-all duration-200 relative hover:translate-x-1 inline-block" href="/products/type/black">
                      Black
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="text-center lg:col-span-2 lg:text-left">
              <h3 className="text-lg sm:text-xl font-semibold text-[#592F1F] mb-6">Get In Touch</h3>
              <div className="space-y-5 text-sm sm:text-base">
                <div className="flex items-center justify-center lg:justify-start group">
                  <div className="mr-3 p-2 rounded-full bg-gray-50 group-hover:bg-[#592F1F] transition-all duration-200">
                    <MailCheck className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 group-hover:text-white transition-colors duration-200" />
                  </div>
                  <a href="mailto:connect@artaglobalink.com" className="text-[#292929] hover:text-[#592F1F] transition-colors duration-200 hover:underline underline-offset-2">
                    connect@artaglobalink.com
                  </a>
                </div>

                <div className="flex items-center justify-center lg:justify-start group">
                  <div className="mr-3 p-2 rounded-full bg-gray-50 group-hover:bg-[#592F1F] transition-all duration-200">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 group-hover:text-white transition-colors duration-200" />
                  </div>
                  <a href="https://wa.me/6283815242643" target="_blank" rel="noopener noreferrer" className="text-[#292929] hover:text-[#592F1F] transition-colors duration-200 hover:underline underline-offset-2">
                    +62 838-1524-2643
                  </a>
                </div>

                <div className="flex items-start justify-center lg:justify-start group">
                  <div className="mr-3 mt-1 p-2 rounded-full bg-gray-50 group-hover:bg-[#592F1F] transition-all duration-200">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 group-hover:text-white transition-colors duration-200" />
                  </div>
                  <a href="/contact" className="text-[#292929] hover:text-[#592F1F] transition-colors duration-200 leading-relaxed hover:underline underline-offset-2">
                    JL. Nenas Raya no. 39B rt/rw 01/05
                    <br />
                    Kel. Cibodasari, Kec. Cibodas
                    <br />
                    Kota Tangerang, Banten 15138
                    <br />
                    Indonesia
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <div className="text-center lg:text-left text-sm text-gray-600">
              © {currentYear} <span className="font-medium text-[#592F1F]">Arta Globalink</span>. All rights reserved.
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center lg:justify-end gap-6 text-sm">
              <a href="/terms" className="text-gray-600 hover:text-[#592F1F] transition-colors duration-200 hover:underline underline-offset-2">
                Terms of Service
              </a>
              <a href="/privacy" className="text-gray-600 hover:text-[#592F1F] transition-colors duration-200 hover:underline underline-offset-2">
                Privacy Policy
              </a>
              <a href="/cookies" className="text-gray-600 hover:text-[#592F1F] transition-colors duration-200 hover:underline underline-offset-2">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;