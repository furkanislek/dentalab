"use client";

import React from "react";

interface SectionTitleProps {
  badge?: string;
  title: string;
  description?: string;
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  badgeClassName?: string;
  align?: "left" | "center" | "right";
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  badge,
  title,
  description,
  className = "",
  titleClassName = "",
  descriptionClassName = "",
  badgeClassName = "",
  align = "left",
}) => {
  const alignClass = {
    left: "text-left items-start",
    center: "text-center items-center",
    right: "text-right items-end",
  };

  return (
    <div className={`flex flex-col ${alignClass[align]} ${className}`}>
      {badge && (
        <button
          className={`hover:bg-indigo-100 hover:text-indigo-600 shadow-md hover:shadow-xl transition-all duration-300 inline-block bg-indigo-100 text-indigo-600 px-4 sm:px-6 py-2 rounded-md text-xs sm:text-sm font-medium mb-4 sm:mb-6 ${badgeClassName}`}
        >
          {badge}
        </button>
      )}
      <h2
        className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-[#1C295D] ${titleClassName}`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`text-gray-500 text-base mb-8 max-w-md ${descriptionClassName}`}
        >
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
