"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

interface LazyImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
  quality?: number;
  sizes?: string;
  placeholder?: "blur" | "empty" | "data:image/...";
  blurDataURL?: string;
}

const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  width,
  height,
  className = "",
  priority = false,
  quality = 75,
  sizes = "100vw",
  placeholder = "empty",
  blurDataURL,
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: "200px 0px",
  });

  const [isLoaded, setIsLoaded] = useState(priority);

  useEffect(() => {
    if (inView && !isLoaded) {
      // Görsel görünüm alanına girdiğinde yükleme işaretçisini değiştir
      const timer = setTimeout(() => {
        setIsLoaded(true);
      }, 10);
      return () => clearTimeout(timer);
    }
  }, [inView, isLoaded]);

  // Görsel yüklenene kadar placeholder göster
  return (
    <div
      ref={ref}
      className={`relative ${className}`}
      style={{ aspectRatio: `${width}/${height}` }}
    >
      {(inView || priority) && (
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={`${className} ${
            !isLoaded ? "opacity-0" : "opacity-100"
          } transition-opacity duration-500`}
          priority={priority}
          quality={quality}
          sizes={sizes}
          placeholder={placeholder}
          blurDataURL={blurDataURL}
          onLoad={() => setIsLoaded(true)}
          loading={priority ? "eager" : "lazy"}
        />
      )}
      {!isLoaded && (
        <div
          className="absolute inset-0 bg-gray-200 animate-pulse"
          style={{ aspectRatio: `${width}/${height}` }}
        />
      )}
    </div>
  );
};

export default LazyImage;
