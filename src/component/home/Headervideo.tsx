"use client"
import React, {  useEffect, useState } from "react";
const ReactPlayer = React.lazy(() => import("react-player"));
import PluseIcon from "../PulseIcon/Headerpulse";


const Headervideo = ({ data, headerImage }:any) => {
  const [isImageVisible, setIsImageVisible] = useState(true);
  const [isVideoEnded, setIsVideoEnded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100 && !isImageVisible) {
        setIsImageVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isImageVisible]);

  const handleHideImage = () => {
    setIsImageVisible(false);
    setIsVideoEnded(false);
  };

  const handleVideoEnd = () => {
    setIsImageVisible(true);
    setIsVideoEnded(true);
  };

  return (
    <div className="lg:-bottom-[365px]  md:-bottom-[310px] -bottom-[30px] lg:left-[0px] md:left-[15px] z-40 absolute">
      {isImageVisible && (
        <>
          <img
            src={data ? data[0]?.thumbnail : headerImage}
            className="lg:w-[1240px] lg:h-[675px] md:w-[720px] md:h-[400px]"
          />
          <div className="absolute lg:top-[38%] md:top-[25%] top-[30%] md:h-[80px] md:w-[80px] h-[40px] w-[40px] img-fluid md:left-[41%] lg:left-[44%] left-[33%]">
            <PluseIcon
              link={data && data[0]?.video_link}
              onHideImage={handleHideImage}
            />
          </div>
        </>
      )}

      {!isImageVisible && (
        <div className="lg:w-[1220px]  lg:h-[690px] md:w-[720px] md:h-[400px] bg-black flex justify-center items-center">

            <ReactPlayer
              url={data && data[0]?.video_link}
              playing={!isVideoEnded}
              height={700}
              width={1220}
              controls
              config={{
                youtube: { modestbranding: 1, rel: 0 },
              }}
              pip={false}
              onEnded={handleVideoEnd}
            />
    
        </div>
      )}
    </div>
  );
};

export default Headervideo;
