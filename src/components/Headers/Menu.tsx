"use client";
import React, { useState } from "react";
import Image from "next/image";

const Menu = () => {
  const [open, setOpen] = useState(false);

  const menuLinks = (
    <>
      <a
        href="#"
        className="text-primary hover:text-primary-light hover:transition-all duration-300 hover:opacity-80"
      >
        Home
      </a>
      <a
        href="#"
        className="text-primary hover:text-primary-light hover:transition-all duration-300 hover:opacity-80"
      >
        Product
      </a>
      <a
        href="#"
        className="text-primary hover:text-primary-light hover:transition-all duration-300 hover:opacity-80"
      >
        Features
      </a>
      <a
        href="#"
        className="text-primary hover:text-primary-light hover:transition-all duration-300 hover:opacity-80"
      >
        Feedbacks
      </a>
      <a
        href="#"
        className="text-primary hover:text-primary-light hover:transition-all duration-300 hover:opacity-80"
      >
        Support
      </a>
      <a
        href="#"
        className="text-primary hover:text-primary-light hover:transition-all duration-300 hover:opacity-80"
      >
        Contact
      </a>
    </>
  );

  return (
    <>
      {/* Masaüstü Menü */}
      <div className="hidden md:flex justify-between items-center max-w-[80vw] mx-auto">
        <div className="flex items-center gap-2">
          <Image src="/svg/icon.svg" alt="logo" width={100} height={100} />
          <div>
            <span className="text-2xl font-bold font-italic text-[#685CD3] ">
              DENTA
            </span>
            <span className="text-2xl font-bold font-italic text-[#1C295D] ">
              LAB
            </span>
          </div>{" "}
        </div>
        <div className="flex text-xl items-center gap-8">{menuLinks}</div>
        <div>
          <button className="bg-bgLight font-semibold   text-[#685CD3] px-4 py-2 rounded-2xl hover:bg-bgLightHover hover:transition-all duration-300 hover:opacity-80">
            Download
          </button>
        </div>
      </div>
      {/* Mobil Menü */}
      <div className="flex md:hidden justify-between items-center px-4 py-2">
        <div className="flex items-center gap-2">
          <Image src="/svg/icon.svg" alt="logo" width={50} height={50} />
          <div>
            <span className="text-xl font-bold font-italic text-[#685CD3] ">
              DENTA
            </span>
            <span className="text-xl font-bold font-italic text-[#1C295D] ">
              LAB
            </span>
          </div>
        </div>
        <button
          className="focus:outline-none"
          onClick={() => setOpen(!open)}
          aria-label="Menüyü Aç/Kapat"
        >
          <svg
            className="w-8 h-8 text-[#685CD3]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      {/* Açılır Mobil Menü */}
      {open && (
        <div className="fixed inset-0 bg-[#1C295D]/30 z-50 flex flex-col">
          <div className="bg-white rounded-b-2xl shadow-lg p-6 flex flex-col gap-6 w-full  mx-auto animate-slideDown">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Image src="/svg/icon.svg" alt="logo" width={40} height={40} />
                <span className="text-lg font-bold text-[#685CD3]">DENTA</span>
                <span className="text-lg font-bold text-[#1C295D]">LAB</span>
              </div>
              <button
                className="focus:outline-none"
                onClick={() => setOpen(false)}
                aria-label="Menüyü Kapat"
              >
                <svg
                  className="w-7 h-7 text-[#685CD3]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex flex-col gap-4 text-lg">{menuLinks}</div>
            <button className="bg-bgLight font-semibold text-[#685CD3] px-4 py-2 rounded-2xl hover:bg-bgLightHover hover:transition-all duration-300 hover:opacity-80">
              Download
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Menu;
