"use client";

import HeaderService from "@/src/component/servicepages/Header";
import Faqservice from "@/src/component/servicepages/ServiceFaq";
import Worksection from "@/src/component/servicepages/Worksection";
import useHomeApi from "@/src/hook/useHomeApi";
import React from "react";
import TestimonailSection from "@/src/component/servicepages/Testimonial";
import Pricingsection from "@/src/component/servicepages/Pricingsection";
const TalkingHead = () => {
  const { data, isLoading } = useHomeApi("talking");
  return (
    <div className="header-background px-4 lg:px-0">
      <HeaderService isLoading={isLoading} mainIntro={data?.header} />
      <Worksection
        data={data?.works}
        title="Our Edited Videos"
        description="Montage Motion is an Advertising and Digital Agency specializing in influencer Marketing"
        isLoading={isLoading}
      />

  
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
      <Pricingsection
        data={data?.pricing}
        title={"Pricing"}
        sub_title={
          "Montage Motion is an Advertising and Digital Agency specializing in Influencer Marketing"
        }
      />
    </div>
  );
};

export default TalkingHead;
