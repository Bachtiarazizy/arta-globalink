import Image from "next/image";
import { MailCheck, Phone, MapPinCheck, Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-[#292929] text-white py-12 sm:py-16 md:py-20  px-6 sm:px-12 lg:px-24 rounded-t-xl">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="flex flex-col items-center sm:items-start">
            <div className="flex justify-center sm:justify-start">
              <Image src="/assets/logo.png" alt="Logo" width={200} height={100} priority className="max-w-[150px] sm:max-w-[200px] md:max-w-[250px]" />
            </div>

            <p className="mt-6 max-w-md text-center sm:text-left text-sm sm:text-base leading-relaxed text-white">Providing the best quality of agricultural commodities and suitable as raw materials for processed products</p>
            <div className="flex justify-center sm:justify-start mt-6 space-x-4">
              <a href="https://www.facebook.com/artaglobalink" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#E6B84F] transition-colors">
                <Facebook className="w-6 h-6 sm:w-7 sm:h-7" />
              </a>
              <a href="https://www.instagram.com/artaglobalink" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#E6B84F] transition-colors">
                <Instagram className="w-6 h-6 sm:w-7 sm:h-7" />
              </a>
              <a href="https://www.linkedin.com/company/artaglobalink" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#E6B84F] transition-colors">
                <Linkedin className="w-6 h-6 sm:w-7 sm:h-7" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:col-span-2">
            <div className="text-center sm:text-left">
              <p className="text-base sm:text-lg font-medium text-[#E6B84F]">Company</p>

              <ul className="mt-4 sm:mt-8 space-y-3 sm:space-y-4 text-xs sm:text-sm">
                <li>
                  <a className="text-white transition hover:text-white/75" href="#">
                    Home
                  </a>
                </li>

                <li>
                  <a className="text-white transition hover:text-white/75" href="#">
                    About us
                  </a>
                </li>

                <li>
                  <a className="text-white transition hover:text-white/75" href="#">
                    Products
                  </a>
                </li>
              </ul>
            </div>
            <div className="text-center sm:text-left">
              <p className="text-base sm:text-lg font-medium text-[#E6B84F]">Downloads</p>

              <ul className="mt-4 sm:mt-8 space-y-3 sm:space-y-4 text-xs sm:text-sm">
                <li>
                  <a className="text-white transition hover:text-white/75" href="#">
                    Cacao Catalog
                  </a>
                </li>

                <li>
                  <a className="text-white transition hover:text-white/75" href="#">
                    Vanilla Catalog
                  </a>
                </li>
              </ul>
            </div>
            <div className="text-center sm:text-left">
              <p className="text-base sm:text-lg font-medium text-[#E6B84F]">Contact Us</p>

              <ul className="mt-4 sm:mt-8 space-y-3 sm:space-y-4 text-xs sm:text-sm">
                <li>
                  <a className="flex items-center justify-center gap-1.5 sm:justify-start" href="mailto:artaglobalink@gmail.com">
                    <MailCheck className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="text-white">artaglobalink@gmail.com</span>
                  </a>
                </li>

                <li>
                  <a className="flex items-center justify-center gap-1.5 sm:justify-start" href="https://wa.me/6283815242643" target="_blank" rel="noopener noreferrer">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="text-white">+6283815242643</span>
                  </a>
                </li>

                <li className="flex items-start justify-center sm:justify-start gap-1.5">
                  <MapPinCheck className="w-4 h-4 sm:w-5 sm:h-5 mt-1" />
                  <address className="not-italic text-white text-xs sm:text-sm">JL. Nenas Raya no. 39B rt/rw 01/05 kel. Cibodasari kec. Cibodas Kota Tangerang Banten 15138. Indonesia</address>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
