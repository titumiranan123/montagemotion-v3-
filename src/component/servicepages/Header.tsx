"use client";
import React from "react";
import ReactPlayer from "react-player";

import Link from "next/link";
import Image from "next/image";

interface HeaderServiceProps {
  mainIntro: {
    id?: string;
    title: string;
    description: string;
    thumbnail: string;
    video_link: string;
    is_active: boolean;
    type: string;
    created_at?: string;
    updated_at?: string;
  };
  isLoading: boolean;
}

const HeaderService: React.FC<HeaderServiceProps> = ({
  mainIntro,
  isLoading,
}) => {
  if (isLoading) {
    return <SkeletonLoader />;
  }

  return (
    <section className="lg:py-16 px-4 md:px-6">
    <div className="relative w-full ">
      <div className="max-w-[800px] pt-16 lg:pt-[160px] mx-auto text-center md:text-left">
        <h1 className="text-[#d8d6d6] poppins uppercase text-[24px] sm:text-[32px] md:text-[45px] lg:text-[64px] font-bold leading-tight md:leading-[72px] text-center">
          {mainIntro?.title}
        </h1>
  
        <p className="text-[#E4E8F7] text-[14px] sm:text-[16px] font-[400] mt-6">
          {mainIntro?.description}
        </p>
  
        <div className="flex flex-col md:flex-row justify-center md:justify-center items-center gap-4 mt-10 md:mt-16">
          <Link
            href="/works"
            className="flex justify-center items-center gap-3 font-bold text-[16px] py-4 px-7 w-full sm:w-[246px] md:w-[200px] rounded-[30px] border border-white text-white hover:border-none headerbtn"
          >
            Our Works
          </Link>
  
          <Link
            href="https://calendly.com/imonofficial2/30min?month=2024-07"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center gap-3 font-bold text-[16px] py-4 px-7 w-full sm:w-[246px] md:w-[200px] rounded-[30px] border border-white text-white hover:border-none headerbtn"
          >
            Book a Schedule
          </Link>
        </div>
      </div>
  
      {/* Responsive Video Section */}
      <div className="mx-auto mt-12 rounded-[39px] overflow-hidden w-full max-w-[794px] aspect-video">
        <div className="relative w-full h-full bg-black">
          <ReactPlayer
            url={mainIntro?.video_link}
            playing={false}
            light={mainIntro?.thumbnail}
            playIcon={
              <Image
                src="/assets/playbutton.png"
                width={80}
                height={80}
                alt="Play"
                className="z-10"
              />
            }
            width="100%"
            height="100%"
            controls
            config={{
              youtube: {
                playerVars: {
                  modestbranding: 1,
                  showinfo: 0,
                  rel: 0,
                  controls: 0,
                  fs: 0,
                },
              },
            }}
            className="absolute top-0 left-0"
          />
        </div>
      </div>
    </div>
  </section>
  
  );
};

const SkeletonLoader = () => {
  return (
    <section className="section container w-full pt-[14px]">
      <div className="relative w-full overflow-hidden">
        <div className="max-w-[800px] mx-auto px-4">
          {/* Title Skeleton */}
          <div className="h-8 md:h-12 lg:h-16 w-3/4 mx-auto bg-gray-300 rounded animate-pulse"></div>

          {/* Description Skeleton */}
          <div className="mt-6 space-y-2">
            <div className="h-4 w-full bg-gray-300 rounded animate-pulse"></div>
            <div className="h-4 w-5/6 bg-gray-300 rounded animate-pulse"></div>
            <div className="h-4 w-4/6 bg-gray-300 rounded animate-pulse"></div>
          </div>

          {/* Buttons Skeleton */}
          <div className="flex justify-center flex-col md:flex-row items-center gap-4 mt-10 md:mt-16 mb-6">
            <div className="h-12 w-48 bg-gray-300 rounded-full animate-pulse"></div>
            <div className="h-12 w-48 bg-gray-300 rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Video Thumbnail Skeleton */}
        <div className="mx-auto mt-24 rounded-xl overflow-hidden lg:w-[996px] lg:h-[561px] md:h-[400px] h-[210px] w-full bg-gray-300 animate-pulse">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-20 w-20 bg-gray-400 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeaderService;
