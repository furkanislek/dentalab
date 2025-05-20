import React from "react";
import Image from "next/image";
import Card from "../Cards/Card";
import AppointmentCard from "../Cards/AppointmentCard";

const About = () => {
  return (
    <div
      style={{
        backgroundImage: "url('/photos/bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="min-h-[80vh] mt-10 md:mt-16 flex flex-col items-center justify-start"
    >
      <div className="max-w-[80vw] md:max-w-[100vw] flex flex-col items-center justify-center">
        <h1 className="text-3xl max-w-[70vw] md:max-w-[40vw] md:text-5xl font-bold text-center">
          Transform the way you take care of your teeth with our app
        </h1>
        <p className="text-md max-w-[70vw] md:max-w-[40vw] md:text-xl text-justify md:text-center mt-6 text-grayText">
          Connect with top dentists anytime for expert advice and hassle free{" "}
          appointments. Get started today and smile brighter tomorrow.
        </p>
        <button className="bg-button text-white px-4 py-2 mt-8 rounded-md shadow-2xl">
          Get Started
        </button>
      </div>
      <div className="flex min-w-[52%] items-center md:flex-row flex-col justify-between mt-12 mb-10 md:mb-0">
        <div className="flex flex-col items-center justify-between min-h-[20vh] md:min-h-[30vh]">
          <Card
            bgColor="bg-button"
            textColor="text-white"
            text="Can we do the examination online?"
            rotate="md:rotate-8"
          />
          <Card
            bgColor="bg-white"
            textColor="text-black"
            text="We can have a video call and I can take a closer look at your tooth."
            rotate="md:-rotate-8"
          />
        </div>
        <Image
          src="/photos/phones.png"
          alt="about"
          width={500}
          height={500}
          className="mb-8 md:mb-0 max-w-[80%] md:max-w-full"
        />
        <AppointmentCard
          address="Siloam Clinic"
          name="Drg. Agus Rachman"
          title="General Dentist"
          rating={5.0}
          date="Friday, 2 July 2023"
          profilePhoto="/svg/d1.svg"
          time="10.00 AM"
          rotate="md:rotate-12"
        />
      </div>
    </div>
  );
};

export default About;
