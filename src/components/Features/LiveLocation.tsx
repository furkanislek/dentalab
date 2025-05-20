"use client";

import React from "react";
import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";
import ReadMoreLink from "../Common/ReadMoreLink";

const LiveLocation = () => {
  return (
    <section className="py-16 md:py-24 px-4 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        <div className="flex flex-col md:flex-row items-center  md:justify-between justify-center gap-12 md:gap-24">
          <div className="w-full md:w-1/2 order-1 md:order-1 relative mb-10 md:mb-0">
            <div className="relative w-full h-full">
              <Image
                src="/svg/live.svg"
                alt="Live location"
                width={600}
                height={600}
                className="w-full h-auto relative z-10"
                priority
              />
            </div>
          </div>
          <div className="w-full flex flex-col items-center md:block md:w-1/2 order-2 md:order-2">
            <SectionTitle
              badge="LOCATION"
              title="Live Location"
              description="This feature in our app allows users to see the real time location of their dentist or dental clinic."
            />
            <ReadMoreLink href="#location" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveLocation;
