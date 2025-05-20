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
      className={`rounded-xl px-5 py-4 max-w-xs text-base shadow-md my-2 ${bgColor} ${textColor} ${rotate}`}
    >
      {text}
    </div>
  );
};

export default Card;
