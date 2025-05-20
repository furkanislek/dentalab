"use client";

import React from "react";
import Image from "next/image";
import FeatureCard from "./FeatureCard";
import AppointmentCard from "../Cards/AppointmentCard";

const WhyChooseUs = () => {
  const features = [
    {
      icon: "/svg/check.svg",
      title: "Licensed Dentists",
      description: "Convenient virtual consultations with licensed dentists.",
    },
    {
      icon: "/svg/chat.svg",
      title: "Easy Appointment",
      description: "Easy appointment booking and rescheduling.",
    },
    {
      icon: "/svg/heart.svg",
      title: "User Friendly",
      description: "Designed for maximum comfort and efficiency.",
    },
    {
      icon: "/svg/bolt.svg",
      title: "Interactive",
      description: "Interactive tools for reporting dental problems.",
    },
  ];

  return (
    <section className=" px-4 flex flex-col items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        <div className="text-center mb-10 md:mb-16">
          <button className="hover:bg-light-blue hover:text-indigo-600 shadow-md  hover:shadow-xl transition-all duration-300 inline-block bg-bgLight text-indigo-600 px-4 sm:px-6 py-2 rounded-md text-xs sm:text-sm font-medium mb-4 sm:mb-6">
            WHY CHOOSE US
          </button>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-4 md:mt-6 text-[#1C295D] px-4 md:px-0">
            <span className="block md:inline">
              Empowering you to take control
            </span>{" "}
            <span className="block md:inline">of your dental health</span>
          </h2>
          <p className="text-gray-500 text-sm md:text-base mt-4 md:mt-8 max-w-xl md:max-w-2xl mx-auto px-2">
            Introducing the features of our app, designed to provide you with a
            seamless and convenient experience.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={` hover:translate-y-0 transition-transform duration-300`}
            >
              <FeatureCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="container mx-auto px-4 md:px-8 max-w-8xl mt-10 sm:mt-20 relative z-10">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10 md:gap-24">
          <div className="relative w-full md:w-1/2 min-h-[200px] sm:min-h-[300px] md:min-h-[400px] order-2 md:order-1 mt-0 md:mt-0">
            <div className="flex flex-col md:block">
              <div className="mb-4  md:absolute  md:top-0 md:right-0 w-full  max-w-xs mx-auto md:mx-0 z-10">
                <AppointmentCard
                  address="Siloam Clinic"
                  name="drg. Agus Rachman"
                  title="General Dentist"
                  rating={5.0}
                  date="Friday, 2 July 2023"
                  profilePhoto="/svg/d1.svg"
                  time="10.00 AM"
                  rotate=""
                />
              </div>

              <div className="md:absolute md:bottom-0 md:left-24 w-full sm:mt-10  max-w-xs mx-auto md:mx-0 mb-14">
                <AppointmentCard
                  address="Medical Clinic"
                  name="drg. Kiandra Saftri"
                  title="Orthodontist"
                  rating={5.0}
                  date="Monday, 6 July 2023"
                  profilePhoto="/svg/d1.svg"
                  time="07.00 AM"
                  rotate=""
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-start w-full md:w-1/2 order-1 md:order-2">
            <div className="bg-indigo-100 text-indigo-600 px-4 sm:px-6 py-2 rounded-md text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              SCHEDULE
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-[#1C295D] text-center md:text-left">
              <span className="block">Schedule of</span>
              <span className="block">Appointments</span>
            </h2>
            <p className="text-gray-500 text-sm sm:text-base mb-4 sm:mb-6 text-center md:text-left max-w-md mx-auto md:mx-0">
              This feature allows patients to book and schedule appointments
              with their preferred dentist.
            </p>
            <a
              href="#"
              className="text-indigo-600 hover:text-indigo-700 font-medium flex items-center"
            >
              <span className="border-b border-indigo-600">Read More</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
