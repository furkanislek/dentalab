"use client";

import React from "react";
import Link from "next/link";

interface ReadMoreLinkProps {
  href: string;
  text?: string;
  className?: string;
}

const ReadMoreLink: React.FC<ReadMoreLinkProps> = ({
  href,
  text = "Read More",
  className = "",
}) => {
  return (
    <Link
      href={href}
      className={`text-indigo-600 hover:text-indigo-700 font-medium flex items-center ${className}`}
    >
      <span className="border-b border-indigo-600">{text}</span>
    </Link>
  );
};

export default ReadMoreLink;
