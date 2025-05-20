import React from "react";
import Image from "next/image";

const DownloadPage = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 min-w-[50vw] max-w-[80vw] md:max-w-[70vw] mx-auto min-h-[50vh] items-center mt-12 md:mt-0">
      <div className="flex flex-col ">
        <button className="hover:bg-light-blue hover:text-indigo-600 shadow-md  hover:shadow-xl transition-all duration-300 inline-block bg-bgLight uppercase text-indigo-600 px-4 sm:px-6 py-2 rounded-md text-xs sm:text-sm font-medium mb-4 sm:mb-6 max-w-fit">
          Download App
        </button>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-justify text-primary max-w-[100%] md:max-w-[80%]">
          Take control of your dental health with our app
        </h2>
        <p className="text-grayText mb-6 text-justify">
          By downloading the app, you can easily book appointments, access
          online consultations with dentists.{" "}
        </p>
        <div className="flex md:justify-start flex-col items-center   justify-center gap-4 md:flex-row">
          <Image src="/svg/google.svg" alt="Google" width={170} height={51} />
          <Image
            src="/svg/appstore.svg"
            alt="App Store"
            width={172}
            height={51}
          />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <Image
          src="/svg/download.svg"
          alt="Download"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
};

export default DownloadPage;
