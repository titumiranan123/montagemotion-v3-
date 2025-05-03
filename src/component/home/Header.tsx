"use client";
import React from "react";
import ReactPlayer from "react-player";
import useIntro from "@/hook/useIntro";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const { data, isLoading } = useIntro();
  if (isLoading) {
    return <SkeletonLoader />;
  }
  const mainIntro = data?.find((data: any) => data.type === "talking");
  console.log(mainIntro,"dokjasdlokfj");
  console.log(data);

  return (
    <section className=" ">
      <div
        className="relative header-background w-full  min-h-screen"
    
      >
        <div className="max-w-[800px] lg:pt-[160px] pt-28 mx-auto px-4">
          <h1 className="text-[#d8d6d6] poppins uppercase z-20 text-[21px] md:text-[45px] lg:text-[64px] font-bold md:leading-[72px] text-center">
            {mainIntro?.title}
          </h1>

          <p className="text-[#E4E8F7] text-[12px] md:text-[16px] font-[400] mt-[23px] text-center md:text-left">
            {mainIntro?.description}
          </p>

          <div className="flex justify-center flex-col md:flex-row items-center gap-4 mt-[40px] md:mt-[64px] mb-[23px]">
            <Link
              href="/works"
              className="flex justify-center py-4 px-7 hover:border-none items-center headerbtn gap-3 font-bold text-[16px] rounded-[30px] border border-white text-[#FFFFFF] w-[246px] md:w-[200px]"
            >
              Our Works
            </Link>

            <Link
              href="https://calendly.com/imonofficial2/30min?month=2024-07"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center py-4 px-7 hover:border-none items-center headerbtn gap-3 font-bold text-[16px] rounded-[30px] border border-white text-[#FFFFFF] w-[246px] md:w-[200px]"
            >
              Book a Schedule
            </Link>
          </div>
        </div>

        <div className="mx-auto mt-[60px] rounded-[39px] overflow-hidden lg:w-[794px] lg:h-[447px] md:h-[400px] h-[210px] w-full">
          <div className="relative w-full h-full bg-black aspect-video">
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

export default Header;
