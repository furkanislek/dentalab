import React from "react";
import Image from "next/image";

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="flex flex-col items-center p-3 sm:p-4 md:p-6 max-w-full sm:max-w-xs mx-auto bg-white rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 scale-100 sm:scale-95 hover:scale-100">
      <div className="bg-indigo-500 text-white w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full mb-3 md:mb-4">
        <Image
          src={icon}
          alt={title}
          width={24}
          height={24}
          className="w-5 h-5 sm:w-6 sm:h-6"
        />
      </div>
      <h3 className="text-lg sm:text-xl font-bold text-[#1C295D] mb-1 md:mb-2 text-center">
        {title}
      </h3>
      <p className="text-center text-gray-500 text-xs sm:text-sm max-w-[180px] sm:max-w-[200px] mx-auto">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;
