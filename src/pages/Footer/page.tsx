import React from "react";
import Image from "next/image";
import Link from "next/link";

const FooterPage = () => {
  return (
    <footer className="bg-white pt-12 pb-6 border-t border-gray-100">
      <div className="container mx-auto px-4">
        {/* Ana içerik - masaüstünde yatay, mobilde dikey */}
        <div className="flex flex-col lg:flex-row lg:justify-between mb-10">
          {/* Logo ve açıklama bölümü */}
          <div className="mb-8 flex lg:block items-center lg:mb-0">
            <div className="flex items-center">
              <div>
                <Image
                  src="/svg/icon.svg"
                  alt="DentaLab"
                  width={60}
                  height={60}
                  className="p-1"
                />
              </div>
              <span className="text-xl font-semibold ml-2">
                <span className="text-purple-600">DENTA</span>
                <span className="text-gray-800">LAB</span>
              </span>
            </div>
            <p className="text-gray-500 text-sm ml-12 lg:ml-0 ">
              Experience dental consultations with us.
            </p>
          </div>

          {/* Menüler - masaüstünde yan yana */}
          <div className="grid grid-cols-3 gap-36 lg:gap-16 mx-auto">
            {/* Kaynaklar */}
            <div>
              <h3 className="text-gray-800 font-medium mb-4">Resource</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="#"
                    className="text-gray-500 hover:text-purple-600 transition-colors text-sm"
                  >
                    Articles
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-500 hover:text-purple-600 transition-colors text-sm"
                  >
                    Learn
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-500 hover:text-purple-600 transition-colors text-sm"
                  >
                    Newsletter
                  </Link>
                </li>
              </ul>
            </div>

            {/* Şirket */}
            <div>
              <h3 className="text-gray-800 font-medium mb-4">Company</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="#"
                    className="text-gray-500 hover:text-purple-600 transition-colors text-sm"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-500 hover:text-purple-600 transition-colors text-sm"
                  >
                    Terms
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-500 hover:text-purple-600 transition-colors text-sm"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-500 hover:text-purple-600 transition-colors text-sm"
                  >
                    Testimonials
                  </Link>
                </li>
              </ul>
            </div>

            {/* Destek */}
            <div>
              <h3 className="text-gray-800 font-medium mb-4">Support</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="#"
                    className="text-gray-500 hover:text-purple-600 transition-colors text-sm"
                  >
                    Contact us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-500 hover:text-purple-600 transition-colors text-sm"
                  >
                    Press
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-500 hover:text-purple-600 transition-colors text-sm"
                  >
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="h-px bg-gray-200 my-6"></div>

        <div className="text-center text-gray-500 text-sm">
          ©2025 Development by {"  "}
          <span className="text-purple-600 hover:text-purple-700 transition-colors hover:scale-110">
            <a href="https://github.com/furkanislek" target="_blank">
              Furkan Akif ISLEK
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default FooterPage;
