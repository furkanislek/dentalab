import React from "react";

const Title = () => {
  return (
    <div className="flex flex-col items-center justify-center max-w-[90vw] mx-auto px-4 md:px-8  z-10">

      <button className="hover:bg-light-blue hover:text-indigo-600 shadow-md  hover:shadow-xl transition-all duration-300 inline-block bg-bgLight text-indigo-600 px-4 sm:px-6 py-2 rounded-md text-xs sm:text-sm font-medium mb-4 sm:mb-6">
        FEEDBACKS
      </button>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-[#1C295D]">
        What our users say about us{" "}
      </h2>
      <p className="text-gray-500 text-base mb-8 max-w-md text-center">
        A feedback from users is important because it helps to understand their
        experience and improve the overall quality of the app.
      </p>
    </div>
  );
};

export default Title;
