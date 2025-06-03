import Aos from "aos";
import Image from "next/image";
import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
interface AboutProps {
  about: {
    title: string;
    description: string;
    image: string;
  };
  isLoading: boolean;
}

const Ourstorysection: React.FC<AboutProps> = ({ about, isLoading }) => {
 useEffect(() => {
  if (about?.description) {
    AOS.refresh();
  }
}, [about?.description]);

  if (isLoading) {
    return (
      <div className="max-w-[1000px] mx-auto flex lg:flex-row flex-col justify-between items-center lg:gap-[60px] gap-16">
        {/* Image Skeleton */}
        <div className="w-[418.25px] h-[569px] bg-gray-700 rounded-md animate-pulse"></div>

        <div className="flex-1 w-full">
          {/* Title Skeleton */}
          <div className="h-10 w-3/4 bg-gray-700 rounded-md animate-pulse mb-6"></div>

          {/* Description Skeleton (lines) */}
          <div className="space-y-4">
            <div className="h-4 w-full bg-gray-700 rounded-md animate-pulse"></div>
            <div className="h-4 w-11/12 bg-gray-700 rounded-md animate-pulse"></div>
            <div className="h-4 w-11/12 bg-gray-700 rounded-md animate-pulse"></div>
            <div className="h-4 w-11/12 bg-gray-700 rounded-md animate-pulse"></div>
            <div className="h-4 w-11/12 bg-gray-700 rounded-md animate-pulse"></div>
            <div className="h-4 w-11/12 bg-gray-700 rounded-md animate-pulse"></div>
            <div className="h-4 w-11/12 bg-gray-700 rounded-md animate-pulse"></div>
            <div className="h-4 w-11/12 bg-gray-700 rounded-md animate-pulse"></div>
            <div className="h-4 w-11/12 bg-gray-700 rounded-md animate-pulse"></div>
            <div className="h-4 w-11/12 bg-gray-700 rounded-md animate-pulse"></div>
            <div className="h-4 w-11/12 bg-gray-700 rounded-md animate-pulse"></div>
            <div className="h-4 w-10/12 bg-gray-700 rounded-md animate-pulse"></div>
            <div className="h-4 w-9/12 bg-gray-700 rounded-md animate-pulse"></div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="max-w-[1000px] mx-auto flex lg:flex-row flex-col justify-between items-center lg:gap-[60px] gap-16">
      <div  data-aos="fade-up"
        data-aos-delay="200" className=" sm:w-1/2 w-full">
        <Image
       className="md:w-[418.25px] md:h-[596px]"
        src={about && about?.image}
        alt=""
        width={418.25}
        height={569}
      />
      </div>
      <div className="sm:w-1/2 w-full" data-aos="fade-up"
          data-aos-delay="300">
        <h2
        
          data-aos="fade-up"
          data-aos-delay="300"
          className="text-white satoshi gradienttext"
        >
          {about && about?.title}
        </h2>
        <div data-aos="fade-up"
            data-aos-delay="500">
          <div
            className="text-white mt-6 fade-up"
            dangerouslySetInnerHTML={{ __html: about && about.description }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Ourstorysection;
