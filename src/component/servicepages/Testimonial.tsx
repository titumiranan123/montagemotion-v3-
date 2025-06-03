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
        <h2
          data-aos="fade-up"
          data-aos-delay="200"
          className="w-full text-center mx-auto gradienttext satoshi "
        >
          {title}
        </h2>
        <p data-aos="fade-up" data-aos-delay="300" className="text-center">
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
              {video_message?.length > 0 && (
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
                      spaceBetween: 5,
                    },
                    768: {
                      slidesPerView: 2,
                      spaceBetween: 5,
                    },
                    1024: {
                      slidesPerView: 3,
                      spaceBetween: 5,
                      slidesPerGroup: 1,
                    },
                    1280: {
                      slidesPerView: 3,
                      spaceBetween: 5,
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
                        <div
                          key={idx}
                          data-aos="fade-up"
                          data-aos-delay={100 + idx * 100}
                        >
                          <TestimonialVideocard
                            testimonial={testimonial}
                            key={testimonial.id || idx}
                          />
                        </div>
                      </SwiperSlide>
                    )
                  )}
                </Swiper>
              )}
              <div>
                
              </div>
              {messageTesti?.length > 0 && (
                <Swiper
                  slidesPerView={1}
                  spaceBetween={10}
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
                  {messageTesti.map(
                    (testimonial: ITestimonial, idx: number) => (
                      <SwiperSlide key={testimonial.id || idx}>
                        <div
                          key={idx}
                          data-aos="fade-up"
                          data-aos-delay={100 + idx * 100}
                        >
                          <TestimonialMessagecard
                            testimonial={testimonial}
                            key={testimonial.id || idx}
                          />
                        </div>
                      </SwiperSlide>
                    )
                  )}
                </Swiper>
              )}
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
