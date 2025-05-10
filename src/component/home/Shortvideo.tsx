"use client";
import React, { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/mousewheel";

import { Swiper as SwiperComponent, SwiperSlide } from "swiper/react";
import { Navigation, Mousewheel } from "swiper/modules";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Headerpulse from "./Headerpuls";
import ReactPlayer from "react-player";
import img10 from "@/public/assets/thumbnail/short10.jpg";
import img9 from "@/public/assets/thumbnail/short9.jpg";
import img8 from "@/public/assets/thumbnail/short8.jpg";
import img7 from "@/public/assets/thumbnail/short7.jpg";
import img6 from "@/public/assets/thumbnail/short6.jpg";
import img5 from "@/public/assets/thumbnail/short5.jpg";
import img4 from "@/public/assets/thumbnail/short4.jpg";
import img3 from "@/public/assets/thumbnail/short3.jpg";
import img2 from "@/public/assets/thumbnail/short2.jpg";
import img1 from "@/public/assets/thumbnail/short1.jpg";
import Link from "next/link";
import Image from "next/image";

const videoData = [
  {
    id: 1,
    thumbnail: img1,
    videoUrl: "https://youtube.com/shorts/tY0L8YTBAPo?feature=share",
  },
  {
    id: 2,
    thumbnail: img2,
    videoUrl: "https://youtube.com/shorts/NWugQsITE_c?feature=share",
  },
  {
    id: 3,
    thumbnail: img3,
    videoUrl: "https://youtube.com/shorts/1bJwNnW9h3w?feature=share",
  },
  {
    id: 4,
    thumbnail: img4,
    videoUrl: "https://youtu.be/o_EKd07ramE",
  },
  {
    id: 5,
    thumbnail: img5,
    videoUrl: "https://youtu.be/JBPiW8MNn5o",
  },
  {
    id: 6,
    thumbnail: img6,
    videoUrl: "https://youtu.be/JLiB1fOLeNc",
  },
  {
    id: 7,
    thumbnail: img7,
    videoUrl: "https://youtube.com/shorts/Vc6_XDbA7zc?feature=share",
  },
  {
    id: 8,
    thumbnail: img8,
    videoUrl: "https://youtube.com/shorts/oBg1GYDLEDY?feature=share",
  },
  {
    id: 9,
    thumbnail: img9,
    videoUrl: "https://youtube.com/shorts/RM5uytH0EKQ?feature=share",
  },
  {
    id: 10,
    thumbnail: img10,
    videoUrl: "https://www.youtube.com/shorts/CiFcFxOnp7U",
  },
];

const Shortvideo: React.FC = () => {
  const [isImageVisible, setIsImageVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleHideImage = (hide: boolean) => {
    setIsImageVisible(!hide);
  };

  return (
    <div className="flex lg:flex-nowrap flex-wrap justify-between max-w-[1240px] gap-[110px] overflow-hidden mx-auto px-4 lg:mt-0 md:mt-32 mt-16">
      <div className=" lg:w-1/2 w-full flex justify-start flex-col">
        <h1 className="bg-clip-text text-transparent bg-gradient-to-b from-[#FFFFFF] to-[#25AAE1] poppins font-bold md:text-[64px] text-left md:leading-[64px] leading-[32px] text-[28px] w-full">
          OUR RECENT PROJECT
        </h1>
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
        <div className="md:w-[400px]  mx-auto w-[300px] bg-white relative">
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
            style={{ width: "487px", height: "6700.23px" }}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            className="shortVideo"
          >
            {videoData.map((video, index) => (
              <SwiperSlide key={video.id}>
                <div className="slide-content md:w-[387px] md:h-[680.23px] w-[300px] h-[540.23px] rounded-[12px] overflow-hidden">
                  {!isImageVisible && (
                    <div onClick={() => setIsImageVisible(!isImageVisible)}>
                      <Image
                        className="md:w-[387px] md:h-[680.23px]  w-[300px] h-[540.23px] "
                        src={video.thumbnail}
                        alt={`Slide ${index + 1}`}
                      />
                      <div className="absolute lg:top-[48.5%] md:top-[47%] md:h-[20px] md:w-[20px] h-[20px] w-[20px] img-fluid md:left-[39%] lg:left-[38.4%] top-[47.2%] left-[46.2%]">
                        <Headerpulse onHideImage={handleHideImage} />
                      </div>
                    </div>
                  )}
                  {isImageVisible && (
                    <div className="md:w-[387px] md:h-[680.23px]  w-[300px] h-[540.23px]">
                      <ReactPlayer
                        url={video.videoUrl}
                        playing={activeIndex === index}
                        height={"100%"}
                        width={"100%"}
                        controls
                      />
                    </div>
                  )}
                </div>
              </SwiperSlide>
            ))}
          </SwiperComponent>
          <div className="swiper-button-prev-custom absolute top-[45%] left-0 transform -translate-y-1/2 z-10">
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
