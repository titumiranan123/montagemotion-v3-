import Image from "next/image";
import React from "react";
import ReactPlayer from "react-player";

interface Testimonial {
  id?: string;
  name: string;
  designation: string;
  image: string;
  video_message?: string;
  message?: string;
  position?: number;
  category: "message" | "video_message";
  type:
    | "main"
    | "shorts"
    | "talking"
    | "podcast"
    | "graphic"
    | "advertising"
    | "website";
}

const TestimonialVideocard = ({ testimonial }: { testimonial: Testimonial }) => {
  return (
    <div
      className="md:w-[310px] w-[300px] mx-auto h-[613px] p-3 rounded-[18px] flex flex-col gap-4"
      style={{
        boxShadow: "inset 0px 0px 21px  #25AAE1CC",
      }}
    >
      {/* Video Player Section */}
      <div className="w-full h-[490px] rounded-[13px] overflow-hidden relative">
        <ReactPlayer
          url={testimonial.video_message}
          width="100%"
          height="100%"
          controls={true}
          light={
            <div className="w-full h-full relative">
              <Image
                src={testimonial.image}
                alt={`${testimonial.name}'s testimonial thumbnail`}
                fill
                className="object-cover"
                quality={90}
              />
            </div>
          }
          playIcon={
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
              <Image
                src="/assets/playbutton.png"
                width={80}
                height={80}
                alt="Play video"
                className="hover:scale-110 transition-transform duration-200"
                priority
              />
            </div>
          }
          playing={false}
          loop={false}
          muted={false}
          playsinline={true}
          config={{
            file: {
              attributes: {
                controlsList: "nodownload",
              },
            },
          }}
        />
      </div>

      {/* Profile Info Section */}
      <div className="flex items-center gap-4 mt-2">
        <div className="relative w-16 h-16 rounded-full overflow-hidden shrink-0">
          <Image
            src={testimonial.image}
            alt={`${testimonial.name}'s profile`}
            fill
            className="object-cover"
            quality={85}
          />
        </div>
        <div className="text-white">
          <h3 className="text-[20px] font-bold leading-tight">{testimonial.name}</h3>
          <p className="text-[14px] font-[400] ">
            {testimonial.designation}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialVideocard;