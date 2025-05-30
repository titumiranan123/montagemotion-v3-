"use client";

import React, { useRef } from "react";
import { useScroll, useSpring } from "framer-motion";
import Stackcard from "./Stackcard";

interface WorkItem {
  id: number;
  thumbnail: string;
  video_link: string;
}

const Homestackcardsection = ({ data, isLoading }: any) => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothScroll = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    mass: 1,
  });

  if (isLoading) {
    return (
      <div className="relative flex flex-col items-center justify-center w-full min-h-[200vh] px-4">
        {[...Array(4)].map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    );
  }

  const works: WorkItem[] = data || [];

  return (
    <>
      <div className="flex section container flex-col text-white  mx-auto gap-4">
        <h2   data-aos="fade-up"
            data-aos-delay="200" className=" text-center mx-auto gradienttext satoshi">Full-form Video</h2>
        <p data-aos="fade-up"
            data-aos-delay="300" className="text-center">
          Montage Motion is an Advertising and Digital Agency speciallzing in
          InFluencer Marketing
        </p>
      </div>
      <div
      data-aos="fade-up"
            data-aos-delay="400"
        ref={containerRef}
        className="relative max-w-[1200px] mx-auto mt-10 lg:-mt-[40px]  flex flex-col items-center justify-center md:px-5   px-6"
      >
        {works.map((item, i) => {
          const rangeStart = works.length;
          const rangeEnd = (i + 0.1) / works.length;
          return (
            <Stackcard
              key={item.id}
              url={item.video_link}
              image={item.thumbnail}
              index={i}
              scrollProgress={smoothScroll}
              range={[rangeStart, rangeEnd]}
            />
          );
        })}
      </div>
    </>
  );
};

const SkeletonCard = () => {
  return (
    <div className="sticky flex items-center justify-center w-full h-screen pointer-events-none">
      <div className="w-full max-w-[650px] h-[365px] bg-gray-200 animate-pulse rounded-xl shadow-xl pointer-events-auto border border-gray-300">
        <div className="w-full h-full bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer rounded-xl" />
      </div>
    </div>
  );
};

export default Homestackcardsection;
