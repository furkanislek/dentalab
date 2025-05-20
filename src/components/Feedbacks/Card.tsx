import React from "react";
import Image from "next/image";

interface FeedbackCardProps {
  image: string;
  name: string;
  comment: string;
}

const Card: React.FC<FeedbackCardProps> = ({ image, name, comment }) => {
  return (
    <div className="bg-white shadow-md  hover:shadow-xl transition-all duration-300 rounded-lg p-6 relative max-w-md">
     

      <div className="flex flex-col space-y-3">
        <div className="flex items-center space-x-3">
          <div className="w-14 h-14 rounded-full overflow-hidden">
            <Image
              src={image}
              alt={name}
              width={56}
              height={56}
              className="object-cover"
            />
          </div>

          <div>
            <h3 className="text-lg font-semibold text-[#1C295D]">{name}</h3>
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
              ))}
            </div>
          </div>
        </div>

        <p className="text-gray-500 text-sm">{comment}</p>
      </div>
    </div>
  );
};

export default Card;
