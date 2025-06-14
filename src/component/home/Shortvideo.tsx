"use client";
import React, { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/mousewheel";

import { Swiper as SwiperComponent, SwiperSlide } from "swiper/react";
import { Navigation, Mousewheel } from "swiper/modules";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import ReactPlayer from "react-player";
import Link from "next/link";
import Image from "next/image";
import useHomeShorts from "@/src/hook/useHomeShorts";

const Shortvideo: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { data:videoData, isLoading } = useHomeShorts();


  if (isLoading) {  
    return (
      <div className="flex lg:mt-30 mt-16 justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
      </div>
    );
  }
  

  return (
    <div className="flex  section lg:flex-nowrap flex-wrap justify-between max-w-[996px]  overflow-hidden mx-auto  ">
      <div className=" lg:w-1/2 w-full flex justify-start flex-col">
        <h2 data-aos="fade-up"
            data-aos-delay="200" className="gradienttext  satoshi font-bold  text-left ">
          Our Short Form Video Editing
        </h2>
        <p data-aos="fade-up"
            data-aos-delay="300" className="mt-[14px] md:mt-[34px]  text-[#D9D9D9] md:w-[505px] ">
          Montage motion is the reliable digital solutions provider to grow your
          business 3x faster. We provide services on Video Editing and special
          service on Podcast.
        </p>
        <Link
        data-aos="fade-up"
            data-aos-delay="400"
          href={"https://calendly.com/imonofficial2/30min?month=2024-07"}
          target="_blank"
          className="py-4 mt-[30px] md:mt-[52px] md:px-6 px-4  text-[#FFFFFF] rounded-[16px] flex justify-center items-center h-[56px]  md:w-[260px] w-[200px] shadow btns"
        >
          Get Your Shorts Edited
        </Link>
      </div>
      <div data-aos="fade-up"
            data-aos-delay="200" className="lg:w-1/2 w-full lg:mt-0 mt-10">
        <div className="md:w-[322px]  mx-auto w-[300px]  relative">
          <SwiperComponent
            direction="vertical"
            spaceBetween={10}
            slidesPerView={1}
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
            pagination={{ clickable: true }}
            mousewheel={{ forceToAxis: true }}
            modules={[Navigation, Mousewheel]}
            style={{ maxWidth: "322px", maxHeight: "575px" }}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            className="shortVideo"
          >
            {videoData?.map((video: any, index: any) => (
              <SwiperSlide key={video.id}>
                <div className="md:w-[322px] md:h-[575.59px]  w-[300px] h-[540.23px]">
                  <ReactPlayer
                    light={
                      (video?.thumbnail &&
                        video?.thumbnail.startsWith("http")) ||
                      video.thumbnail.startsWith("/")
                        ? video.thumbnail
                        : false
                    }
                    playIcon={
                      <div className="flex items-center justify-center w-[68px] h-[48px]">
                        <Image
                          src="/small.png"
                          width={68}
                          height={48}
                          alt="Play"
                          className=""
                          priority
                        />
                      </div>
                    }
                    url={video.video_link}
                    playing={activeIndex === index}
                    height={"100%"}
                    width={"100%"}
                    controls
                  />
                </div>
              </SwiperSlide>
            ))}
          </SwiperComponent>
          <div className="swiper-button-prev-custom absolute top-[45%] -left-20  transform -translate-y-1/2 z-10">
            <FaArrowLeft />
          </div>
          <div className="swiper-button-next-custom absolute top-[55%] lg:-right-2 right-4 transform -translate-y-1/2 z-10">
            <FaArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shortvideo;
