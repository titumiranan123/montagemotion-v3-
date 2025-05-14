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
        <h2 className="bg-clip-text text-transparent bg-gradient-to-r from-[#FFFFFF] to-[#25AAE1] poppins font-bold md:text-[64px] text-left md:leading-[64px] leading-[32px] text-[28px] w-full">
          OUR RECENT PROJECT
        </h2>
        <p className="mt-[14px] md:mt-[34px] ptag text-[#D9D9D9] md:w-[505px] ">
          Montage motion is the reliable digital solutions provider to grow your
          business 3x faster. We provide services on Video Editing and special
          service on Podcast.
        </p>
        <Link
          href={"https://calendly.com/imonofficial2/30min?month=2024-07"}
          target="_blank"
          className="py-4 mt-[30px] md:mt-[52px] md:px-6 px-4 border bg-[#FFFFFF] rounded-[16px] flex justify-center items-center ptag text-[#03070D] md:w-[280px] w-[200px] shadow"
        >
          Get Your Shorts Edited
        </Link>
      </div>
      <div className="lg:w-1/2 w-full">
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
                      <div className="flex items-center justify-center w-full h-full">
                        <Image
                          src="/assets/playbutton.png"
                          width={60}
                          height={60}
                          alt="Play"
                          className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20"
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
          <div className="swiper-button-next-custom absolute top-[55%] -right-2 transform -translate-y-1/2 z-10">
            <FaArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shortvideo;
