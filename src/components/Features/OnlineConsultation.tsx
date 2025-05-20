"use client";

import React from "react";
import Image from "next/image";
import Card from "../Cards/Card";

const OnlineConsultation = () => {
  return (
    <section className="bg-gray-100 py-16 md:py-24 px-4 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        <div className="flex flex-col md:flex-row items-center  md:justify-between justify-center gap-12 md:gap-24">
          <div className="w-full flex flex-col items-center md:block md:w-1/2 order-2 md:order-1">
            <div className="inline-block bg-indigo-100 text-indigo-600 px-4 sm:px-6 py-2 rounded-md text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              CONSULTATION
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-[#1C295D]">
              Online Consultations
            </h2>
            <p className="text-gray-500 text-base mb-8 max-w-md">
              This feature allows patients to connect with a licensed dentist
              from the comfort of their own home.
            </p>
            <a
              href="#"
              className="text-indigo-600 hover:text-indigo-700 font-medium flex items-center"
            >
              <span className="border-b border-indigo-600">Read More</span>
            </a>
          </div>

          <div className="w-full md:w-1/2 order-1 md:order-2 relative mb-10 md:mb-0">
            <div className="relative w-full h-full">
              <Image
                src="/svg/online.svg"
                alt="Online consultation"
                width={600}
                height={600}
                className="w-full h-auto relative z-10"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OnlineConsultation;
