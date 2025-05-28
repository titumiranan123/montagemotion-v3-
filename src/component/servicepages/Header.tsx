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
    <section className="">
      <div className="relative w-full ">
        <div className="max-w-[800px] pt-16 lg:pt-[138px] mx-auto text-center md:text-left">
          <h1 className="bg-gradient-to-r from-white via-white to-[#1fb5dd] bg-clip-text text-transparent  capitalize z-20  text-[45px] leading-[55px] lg:text-[64px] font-bold lg:leading-[82px] text-center">
            {mainIntro?.title}
          </h1>

          <p className="text-[#E4E8F7] text-[14px] sm:text-[16px] font-[400] mt-6">
            {mainIntro?.description}
          </p>

          <div className="flex flex-row justify-center md:justify-center items-center gap-4  md:mt-16 mt-10">
            <Link
              href="/works"
              className="flex justify-center items-center gap-3 font-bold text-[16px] p-4 text-white hover:border-none headerbutton"
            >
              Book a Call
            </Link>

            <Link
              href="https://calendly.com/imonofficial2/30min?month=2024-07"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center gap-3 font-bold text-[16px] p-4 w-[126px] rounded-[16px] border border-white text-white hover:border-none headersecond"
            >
              Our Works
            </Link>
          </div>
        </div>

        {/* Responsive Video Section */}

        <div className="relative lg:w-[794px] mx-auto lg:h-[444px] w-full h-full aspect-video bg-black overhidden rounded-[39px] mt-10 lg:mt-24">
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
                  fs: 0,
                },
              },
            }}
          />
        </div>
      </div>
    </section>
  );
};

const SkeletonLoader = () => {
  return (
    <section className="">
      <div className="relative w-full">
        <div className="max-w-[800px] pt-16 lg:pt-[138px] mx-auto text-center md:text-left ">
          {/* Title Skeleton */}
          <div className="flex flex-col items-center">
            <div className="h-8 sm:h-10 md:h-12 lg:h-16 w-3/4 mx-auto md:mx-0 bg-gray-300 dark:bg-gray-700 rounded animate-pulse"></div>
          </div>

          {/* Description Skeleton */}
          <div className="mt-6 space-y-2 flex flex-col ">
            <div className="h-4 w-full bg-gray-300 dark:bg-gray-700 rounded animate-pulse"></div>
            <div className="h-4 w-5/6 bg-gray-300 dark:bg-gray-700 rounded animate-pulse"></div>
            <div className="h-4 w-4/6 bg-gray-300 dark:bg-gray-700 rounded animate-pulse"></div>
          </div>

          {/* Buttons Skeleton */}
          <div className="flex flex-col md:flex-row justify-center md:justify-center items-center gap-4 mt-10 md:mt-16">
            <div className="h-12 w-full sm:w-[246px] md:w-[200px] bg-gray-300 dark:bg-gray-700 rounded-[30px] animate-pulse"></div>
            <div className="h-12 w-full sm:w-[246px] md:w-[200px] bg-gray-300 dark:bg-gray-700 rounded-[30px] animate-pulse"></div>
          </div>
        </div>

        {/* Video Section Skeleton */}
        <div className="lg:w-[794px] mx-auto lg:h-[444px] w-full h-full aspect-video bg-gray-300 dark:bg-gray-700 rounded-[39px] mt-24 animate-pulse">
          <div className="flex items-center justify-center h-full">
            <div className="w-20 h-20 bg-gray-400 dark:bg-gray-600 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeaderService;
