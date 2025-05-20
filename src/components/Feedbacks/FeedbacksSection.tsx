"use client";

import React, { useState, useRef, useEffect } from "react";
import Card from "./Card";

const FeedbacksSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const indicatorRef = useRef<HTMLDivElement>(null);

  const feedbacks = [
    {
      image: "/svg/d2.svg",
      name: "Mega Yuwono",
      comment:
        "I've never been so organized with my dental appointments. Thank you for creating such a wonderful app.",
    },
    {
      image: "/svg/d3.svg",
      name: "Sarah Johnson",
      comment:
        "The virtual consultations saved me so much time. I got quick advice without leaving home.",
    },
    {
      image: "/svg/d4.svg",
      name: "David Chen",
      comment:
        "Booking appointments is so easy now. The interface is clean and the dentists are all professional.",
    },
  ];

  // Check if we're in browser and set mobile state
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkMobile();

    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Main scroll handler effect
  useEffect(() => {
    if (!isMobile) return; // Only needed for mobile

    const updateIndicator = () => {
      if (!sectionRef.current || cardRefs.current.length === 0) return;

      const scrollY = window.scrollY;
      setScrollPosition(scrollY);

      // Find the most visible card
      let maxVisibility = 0;
      let visibleIndex = 0;

      cardRefs.current.forEach((cardRef, index) => {
        if (!cardRef) return;

        const rect = cardRef.getBoundingClientRect();
        const visibleHeight =
          Math.min(window.innerHeight, rect.bottom) - Math.max(0, rect.top);
        const visibility = visibleHeight / rect.height;

        if (visibility > maxVisibility) {
          maxVisibility = visibility;
          visibleIndex = index;
        }
      });

      if (maxVisibility > 0.3) {
        setActiveIndex(visibleIndex);

        // Update indicator position directly from DOM
        if (indicatorRef.current && cardRefs.current[visibleIndex]) {
          const cardPos =
            cardRefs.current[visibleIndex]!.getBoundingClientRect();
          const sectionPos = sectionRef.current.getBoundingClientRect();

          // Calculate relative position
          const relativePos =
            (cardPos.top - sectionPos.top) / sectionPos.height;
          const topPercentage = relativePos * 100;

          // Set the position with constraints
          indicatorRef.current.style.top = `${Math.max(
            0,
            Math.min(95, topPercentage)
          )}%`;
        }
      }
    };

    // Initial position
    setTimeout(updateIndicator, 100);

    // Add scroll listener
    window.addEventListener("scroll", updateIndicator, { passive: true });
    return () => window.removeEventListener("scroll", updateIndicator);
  }, [isMobile]);

  const handleCardClick = (index: number) => {
    setActiveIndex(index);

    if (isMobile && cardRefs.current[index]) {
      cardRefs.current[index]?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  return (
    <div className="relative pb-12" ref={sectionRef}>
      <div className="md:hidden absolute left-10 top-0 bottom-0 w-1 bg-gray-200 z-10 h-full">
        <div
          ref={indicatorRef}
          className="absolute w-1 bg-indigo-600 transition-all duration-300"
          style={{
            top: `${activeIndex * (100 / feedbacks.length)}%`,
            height: `${Math.min(33, 100 / feedbacks.length)}%`,
          }}
        ></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[75vw] mx-auto mt-12 relative">
        <div className="hidden md:block absolute bottom-0 left-0 right-0 h-0.5 bg-gray-200">
          <div
            className="absolute h-0.5 bg-indigo-600 transition-all duration-300"
            style={{
              left: `${activeIndex * (100 / feedbacks.length)}%`,
              width: `${100 / feedbacks.length}%`,
            }}
          ></div>
        </div>

        {feedbacks.map((feedback, index) => (
          <div
            key={index}
            ref={(el) => {
              cardRefs.current[index] = el;
            }}
            className={`flex flex-col justify-between pb-8 ${
              activeIndex === index
                ? "opacity-100 scale-100"
                : "opacity-70 scale-95 hover:opacity-90 hover:scale-100"
            } transition-all duration-300 cursor-pointer`}
            data-index={index}
            onClick={() => handleCardClick(index)}
          >
            <Card
              image={feedback.image}
              name={feedback.name}
              comment={feedback.comment}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeedbacksSection;
