"use client";

import HeaderService from "@/src/component/servicepages/Header";
import Faqservice from "@/src/component/servicepages/ServiceFaq";
import Worksection from "@/src/component/servicepages/Worksection";
import useHomeApi from "@/src/hook/useHomeApi";
import React from "react";
import TestimonailSection from "@/src/component/servicepages/Testimonial";
import Pricingsection from "@/src/component/servicepages/Pricingsection";
import ShortsWorkSection from "@/src/component/servicepages/ShortsWorkSection";
import AddvertisingHeader from "@/src/component/servicepages/AdvertisingHeader";
const AdvertisingService = () => {
  const { data, isLoading } = useHomeApi("advertising");
  // faqs
  // testimonial
  const shorts = data && data?.works.filter((dt: any) => dt.sub_type !== "ovc");
  const ovc = data && data?.works.filter((dt: any) => dt.sub_type === "ovc");
  console.log(shorts, "shorts");
  return (
    <div className="header-background px-4">
      <AddvertisingHeader isLoading={isLoading} mainIntro={data?.header} />
      <Worksection
        data={ovc}
        title="Our Ovc"
        description="Montage Motion is an Advertising and Digital Agency specializing in influencer Marketing"
        isLoading={isLoading}
      />
      <ShortsWorkSection
        data={shorts}
        title="Our Reels"
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

export default AdvertisingService;
