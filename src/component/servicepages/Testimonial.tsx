import React from "react";
import TestimonialMessagecard from "./TextTestimonial";
import { Autoplay, FreeMode, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import TestimonialVideocard from "./Videotestimonial";

interface ITestimonial {
  id?: string;
  name: string;
  designation: string;
  image: string;
  video_message?: string;
  message?: string;
  position?: number;
  category: "message" | "video_message";
  type:
    | "main"
    | "shorts"
    | "talking"
    | "podcast"
    | "graphic"
    | "advertising"
    | "website";
}

interface TestimonialSectionProps {
  title: string;
  description: string;
  data: ITestimonial[];
  isLoading: boolean;
}

const TestimonialSection: React.FC<TestimonialSectionProps> = ({
  title,
  description,
  data,
  isLoading,
}) => {
  const video_message =
    data?.filter((item: any) => item.category !== "message") || [];
  const messageTesti =
    data?.filter((item: any) => item.category === "message") || [];
  return (
    <div className="container section px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col text-white mx-auto gap-3 md:gap-4">
        <h2 className="w-full text-center mx-auto text-2xl sm:text-3xl md:text-4xl lg:text-5xl lg:max-w-[800px]">
          {title}
        </h2>
        <p className="text-center text-sm sm:text-base md:text-lg max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[60%] mx-auto">
          {description}
        </p>
      </div>

      {isLoading ? (
        <div className="flex justify-center items-center mt-16">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
        </div>
      ) : (
        <div className="max-w-[970px] w-full mx-auto mt-8">
          {data && data.length > 0 ? (
            <div>
              <Swiper
                slidesPerView={1}
                spaceBetween={20}
                freeMode={false}
               
                loop={true}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
                }}
                modules={[FreeMode, Pagination, Autoplay]}
                className="testimonial-swiper-video"
                breakpoints={{
                  640: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                    slidesPerGroup: 1,
                  },
                  1280: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                    slidesPerGroup: 1,
                  },
                }}
                grabCursor={true}
                resistance={true}
                resistanceRatio={0.85}
              >
                {video_message?.map(
                  (testimonial: ITestimonial, idx: number) => (
                    <SwiperSlide key={testimonial.id || idx}>
                      <TestimonialVideocard
                        testimonial={testimonial}
                        key={testimonial.id || idx}
                      />
                    </SwiperSlide>
                  )
                )}
              </Swiper>
              <Swiper
                slidesPerView={1}
                spaceBetween={20}
                freeMode={false}
               
                modules={[FreeMode, Pagination, Autoplay]}
                loop={true}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
                  reverseDirection: true,
                }}
                className="testimonial-swiper-text"
                breakpoints={{
                  640: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                  },
                  1024: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                    slidesPerGroup: 1,
                  },
                  1280: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                    slidesPerGroup: 1,
                  },
                }}
                grabCursor={true}
                resistance={true}
                resistanceRatio={0.85}
              >
                {messageTesti.map((testimonial: ITestimonial, idx: number) => (
                  <SwiperSlide key={testimonial.id || idx}>
                    <TestimonialMessagecard
                      testimonial={testimonial}
                      key={testimonial.id || idx}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          ) : (
            <div className="text-center text-white mt-8">
              No testimonials found
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default React.memo(TestimonialSection);
