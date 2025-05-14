"use client";
import HeaderService from "@/src/component/servicepages/Header";
import Faqservice from "@/src/component/servicepages/ServiceFaq";
import TestimonailSection from "@/src/component/servicepages/Testimonial";
import ThumbnailWorksection from "@/src/component/servicepages/ThumbnailWorksection";
import Worksection from "@/src/component/servicepages/Worksection";
import useHomeApi from "@/src/hook/useHomeApi";

const CustomWebsite = () => {
  const { data, isLoading } = useHomeApi("website");
  const ui_ux =
    data?.works?.filter((item: any) => item.sub_type === "uiux_design") || [];
  const otherWorks =
    data?.works?.filter(
      (item: any) => item.sub_type && item.sub_type !== "uiux_design"
    ) || [];

  return (
    <div className="header-background">
      <HeaderService isLoading={isLoading} mainIntro={data?.header} />

      {ui_ux?.length > 0 && (
        <ThumbnailWorksection
          data={ui_ux}
          title="Our UI/UX Designs"
          description="Montage Motion specializes in creating intuitive user experiences"
          isLoading={isLoading}
        />
      )}

      {/* Other Works ThumbnailWorksection */}
      {otherWorks?.length > 0 && (
        <ThumbnailWorksection
          data={otherWorks}
          title="Our Development Projects"
          description="Explore our website development and digital solutions"
          isLoading={isLoading}
        />
      )}

      <Faqservice items={data?.faqs} />
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
    </div>
  );
};

export default CustomWebsite;
