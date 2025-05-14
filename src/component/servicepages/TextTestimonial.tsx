
import Image from "next/image";
import React from "react";
interface testimonial {
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
const TestimonialMessagecard = ({
  testimonial
}: {
  testimonial: testimonial;
 
}) => {
  return (
    <div style={{
  boxShadow: "inset 0px 0px 24px 1px #0A303A",
      
    }} className="w-[468px] h-[248px] p-6 rounded-[18px] flex flex-col gap-4">
      <p className="text-white">{testimonial.message}</p>
      <div className="flex justify-start gap-10 h-[90px] items-center">
        <Image
          className="rounded-full w-[64px] mt-5 h-[64px] overflow-hidden"
          src={testimonial.image}
          alt=""
          width={64}
          height={64}
        />
        <div className=" text-white">
          <h2 className="font-bold text-[20px]">{testimonial.name}</h2>
          <p className="text-[14px] font-[400] -mt-5">{testimonial.designation}</p>
        </div>
      </div>
    
    </div>
  );
};

export default TestimonialMessagecard;
