"use client";
import React, { useCallback, useState } from "react";
import ReactPlayer from "react-player";
import useIntro from "@/hook/useIntro";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const { data } = useIntro();
  const [isImageVisible, setIsImageVisible] = useState(true);

  const handleHideImage = useCallback(() => {
    setIsImageVisible((prev) => !prev);
  }, []);

  const thumbnailUrl = data?.[0]?.thumbnail;
  const videoUrl = data?.[0]?.video_link;

  return (
    <section className="section container pt-[14px]">
      <div
        className="relative w-full  overflow-hidden"
        style={{
          backgroundImage: "url(/assets/logobackgourd.png)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top",
        }}
      >
        <div className="max-w-[800px] mx-auto">
          <h1 className="text-[#d8d6d6] poppins uppercase z-20 text-[21px] md:text-[45px] lg:text-[64px] font-bold md:leading-[72px] text-center">
            Advertising Agency
          </h1>

          <p className=" text-[#E4E8F7] text-[12px] md:text-[16px] font-[400] mt-[23px] text-center md:text-left">
            Montage Motion is an Advertising and Digital Agency specializing in
            Influencer Marketing, Video production & Post Production, Thumbnail
            Design, Content Strategy, Marketing Visual Design, Custom Website
            Design & Development, and Content Marketing.
          </p>

          <div className="flex justify-center flex-col md:flex-row items-center gap-4 mt-[40px] md:mt-[64px] mb-[23px]">
            <Link
              href="/works"
              className="flex justify-center py-4 px-7 hover:border-none items-center headerbtn gap-3 font-bold text-[16px] rounded-[30px] border border-white text-[#FFFFFF] w-[246px]"
            >
              Our Works
            </Link>

            <Link
              href="https://calendly.com/imonofficial2/30min?month=2024-07"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center py-4 px-7 hover:border-none items-center headerbtn gap-3 font-bold text-[16px] rounded-[30px] border border-white text-[#FFFFFF] w-[246px]"
            >
              Book a Schedule
            </Link>
          </div>
        </div>
    
      <div className="mx-auto mt-[100px] rounded-xl overflow-hidden lg:w-[996px] lg:h-[561px] md:h-[400px] h-[210px] w-full">
      
     {thumbnailUrl && (
  <div className="relative w-full h-full bg-black aspect-video">
    <ReactPlayer
      url="https://youtu.be/Csm8ntWx6w8?si=LavBpBUm2Gqr2phL"
   
      playing={false} 
      light={thumbnailUrl} 
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
)}


      </div>
      </div>
    </section>
  );
};

export default Header;
