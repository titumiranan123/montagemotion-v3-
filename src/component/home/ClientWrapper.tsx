"use client";

import React from "react";
import CarStackScroll from "./Homestackcard";
import Shortvideo from "./Shortvideo";
import useHomeApi from "@/src/hook/useHomeApi";
import HeaderService from "../servicepages/Header";
import Faqservice from "../servicepages/ServiceFaq";
import TestimonailSection from "@/src/component/servicepages/Testimonial";

const ClientWraper = () => {
  const { data, isLoading } = useHomeApi("main");
  return (
    <div className="header-background container">
      <HeaderService isLoading={isLoading} mainIntro={data?.header} />
      <CarStackScroll data={data?.works} isLoading={isLoading} />

      <Shortvideo />
      {data?.testimonial.length > 0 && (
        <TestimonailSection
          title={"Testimonials"}
          description={
            "Montage Motion is an Advertising and Digital Agency specializing in Influencer Marketing"
          }
          data={data?.testimonial}
          isLoading={isLoading}
        />
      )}
      <Faqservice items={data?.faqs} />
    </div>
  );
};

export default ClientWraper;
