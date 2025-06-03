"use client";

import React from "react";
import CarStackScroll from "./Homestackcard";
import Shortvideo from "./Shortvideo";
import useHomeApi from "@/src/hook/useHomeApi";
import HeaderService from "../servicepages/Header";
import Faqservice from "../servicepages/ServiceFaq";
import TestimonailSection from "@/src/component/servicepages/Testimonial";
import Pricingsection from "../servicepages/Pricingsection";
import useSmoothScroll from "../useSmoothScroll";
import Services from "./Services";
import Brand from "./Brand";
import Worksection from "../servicepages/Worksection";

const ClientWraper = () => {
  const { data, isLoading } = useHomeApi("main");
  useSmoothScroll();
  return (
    <div className="header-background lg:px-0 px-2 relative">
      <HeaderService isLoading={isLoading} mainIntro={data?.header} />
      <Brand />
      <Services />
      {/* <CarStackScroll data={data?.works} isLoading={isLoading} /> */}
      <Worksection
        data={data?.works}
        title="Full-form Video"
        description="Montage Motion is an Advertising and Digital Agency specializing in influencer Marketing"
        isLoading={isLoading}
      />
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
      {/* <Pricingsection
        data={data?.pricing}
        title={"Pricing"}
        sub_title={
          "Montage Motion is an Advertising and Digital Agency specializing in Influencer Marketing"
        }
      /> */}
    </div>
  );
};

export default ClientWraper;
