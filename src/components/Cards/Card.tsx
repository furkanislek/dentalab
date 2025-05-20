import React from "react";

interface CardProps {
  bgColor: string;
  textColor: string;
  text: string;
  rotate?: string;
}

const Card = ({ bgColor, textColor, text, rotate }: CardProps) => {
  return (
    <div
      className={`rounded-xl px-5 py-4 max-w-xs text-base shadow-md my-2 hover:scale-105 transition-all duration-300 hover:shadow-xl ${bgColor} ${textColor} ${rotate}`}
    >
      {text}
    </div>
  );
};

export default Card;
