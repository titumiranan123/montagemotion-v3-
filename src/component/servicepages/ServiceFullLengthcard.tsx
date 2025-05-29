"use client";
import Image from "next/image";
import React from "react";
import ReactPlayer from "react-player";

interface ServiceFullLengthcardProps {
  work: {
    thumbnail: string;
    video_link: string;
    sub_type?: string;
  };
}

const ServiceFullLengthcard = ({ work }: ServiceFullLengthcardProps) => {
  // Validate video URL
  const isValidUrl =
    work?.video_link &&
    (work.video_link.includes("youtube") ||
      work.video_link.includes("vimeo") ||
      work.video_link.includes(".mp4"));

  // Validate thumbnail
  const isValidThumbnail =
    work?.thumbnail &&
    (work.thumbnail.startsWith("http") || work.thumbnail.startsWith("/"));

  if (!isValidUrl) {
    return (
      <div className="w-full aspect-video bg-gray-800 rounded-lg flex items-center justify-center">
        <p className="text-white">Video unavailable</p>
      </div>
    );
  }

  return (
    <div className="w-full aspect-video rounded-lg sm:rounded-[9.91px] overflow-hidden relative bg-black">
      <ReactPlayer
        url={work.video_link}
        playing={false}
        light={isValidThumbnail ? work.thumbnail : false}
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
        width="100%"
        height="100%"
        controls
        config={{
          youtube: {
            playerVars: {
              modestbranding: 1,
              showinfo: 0,
              rel: 0,
            },
          },
          vimeo: {
            playerOptions: {
              responsive: true,
            },
          },
        }}
        style={{ position: "absolute", top: 0, left: 0 }}
        fallback={
          <div className="w-full h-full bg-gray-800 flex items-center justify-center">
            <p className="text-white">Loading video...</p>
          </div>
        }
      />
    </div>
  );
};

export default ServiceFullLengthcard;
