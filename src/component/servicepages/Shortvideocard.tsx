import Image from "next/image";
import React from "react";
import ReactPlayer from "react-player";

const Shortvideocard = ({video}:any) => {
    console.log(video)
  return (
    <div className="md:w-[322px] md:h-[575.59px]  w-[300px] h-[540.23px] rounded-lg overflow-hidden">
      <ReactPlayer
        light={
          (video?.thumbnail && video?.thumbnail.startsWith("http")) ||
          video.thumbnail.startsWith("/")
            ? video?.thumbnail
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
        url={video?.video_link}
        // playing={activeIndex === index}
        height={"100%"}
        width={"100%"}
        controls
      />
    </div>
  );
};

export default Shortvideocard;
