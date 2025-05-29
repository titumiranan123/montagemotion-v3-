"use client";
import HeaderService from "@/src/component/servicepages/Header";
import Faqservice from "@/src/component/servicepages/ServiceFaq";

import useHomeApi from "@/src/hook/useHomeApi";
import React from "react";
import TestimonailSection from "@/src/component/servicepages/Testimonial";
import Pricingsection from "@/src/component/servicepages/Pricingsection";
import DesignWorksection from "@/src/component/servicepages/DesignWorksection";
const Graphic = () => {
  const { data, isLoading } = useHomeApi("graphic");
console.log(data)
const poster = data && data?.works?.filter((data:any)=>data.sub_type === "poster")
const thumbnail = data && data?.works?.filter((data:any)=>data.sub_type === "poster")
  return (
    <div className="header-background px-4 lg:px-0">
      <HeaderService isLoading={isLoading} mainIntro={data?.header} />
      <DesignWorksection
        data={thumbnail}
        title="Our Edited Thumbnails"
        description="Montage Motion is an Advertising and Digital Agency specializing in influencer Marketing"
        isLoading={isLoading}
      />
      <DesignWorksection
        data={poster}
        title="Our Edited Posters"
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

export default Graphic;
