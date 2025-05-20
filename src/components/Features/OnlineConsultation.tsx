"use client";

import React from "react";
import FeatureSection from "../Common/FeatureSection";

const OnlineConsultation = () => {
  return (
    <FeatureSection
      badge="CONSULTATION"
      title="Online Consultations"
      description="This feature allows patients to connect with a licensed dentist from the comfort of their own home."
      imageSrc="/svg/online.svg"
      imageAlt="Online consultation"
      linkHref="#consultation"
      imageRight={true}
      bgColor="bg-gray-100"
    />
  );
};

export default OnlineConsultation;
