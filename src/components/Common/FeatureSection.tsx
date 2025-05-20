"use client";

import React, { ReactNode } from "react";
import dynamic from "next/dynamic";
import SectionTitle from "./SectionTitle";
import ReadMoreLink from "./ReadMoreLink";

// LazyImage bileşenini dinamik olarak import et
const LazyImage = dynamic(() => import("./LazyImage"), {
  loading: () => (
    <div
      className="h-full w-full bg-gray-200 animate-pulse rounded-lg"
      style={{ aspectRatio: "1/1" }}
    />
  ),
  ssr: true,
});

interface FeatureSectionProps {
  badge: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  linkHref: string;
  linkText?: string;
  imageRight?: boolean;
  bgColor?: string;
  children?: ReactNode;
}

const FeatureSection: React.FC<FeatureSectionProps> = ({
  badge,
  title,
  description,
  imageSrc,
  imageAlt,
  linkHref,
  linkText,
  imageRight = false,
  bgColor = "",
  children,
}) => {
  // SVG dosyaları için görüntü kalitesini ve önceliklendirmeyi ayarla
  const isSvg = imageSrc.endsWith(".svg");

  return (
    <section
      className={`py-16 md:py-24 px-4 relative overflow-hidden ${bgColor}`}
    >
      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        <div className="flex flex-col md:flex-row items-center md:justify-between justify-center gap-12 md:gap-24">
          <div
            className={`w-full md:w-1/2 order-2 ${
              imageRight ? "md:order-2" : "md:order-1"
            } relative mb-10 md:mb-0`}
          >
            <div className="relative w-full h-full">
              <LazyImage
                src={imageSrc}
                alt={imageAlt}
                width={600}
                height={600}
                className="w-full h-auto relative z-10 rounded-lg"
                priority={imageRight === false} // Soldaki resimler için öncelik ver
                quality={isSvg ? 100 : 80} // SVG olmayan dosyalar için kaliteyi azalt
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
          <div
            className={`w-full flex flex-col items-center md:block md:w-1/2 order-1 ${
              imageRight ? "md:order-1" : "md:order-2"
            }`}
          >
            <SectionTitle
              badge={badge}
              title={title}
              description={description}
            />
            <ReadMoreLink href={linkHref} text={linkText} />
            {children}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
