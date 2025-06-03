import React from "react";
import Image from "next/image";
import amazon from "@/public/brand/amazon.png";
import airtel from "@/public/brand/airtel.png";
import gucci from "@/public/brand/gucci.png";
import honor from "@/public/brand/honor.png";
import oppo from "@/public/brand/oppo.png";
import rfl from "@/public/brand/rfl.png";
import pran from "@/public/brand/pran.png";
import nogad from "@/public/brand/nogod.png";

const Brand = () => {
  const images = [
    { src: amazon, alt: "Amazon" },
    { src: gucci, alt: "Gucci" },
    { src: honor, alt: "Honor" },
    { src: oppo, alt: "Oppo" },
    { src: rfl, alt: "RFL" },
    { src: pran, alt: "Pran" },
    { src: airtel, alt: "Airtel" },
    { src: nogad, alt: "Nogod" },
  ];

  return (
    <div className="section container px-4 sm:px-6">
      <div className="flex flex-col text-white mx-auto lg:gap-4 gap-2 mb-8">
        <h2
          data-aos="fade-up"
          data-aos-delay="200"
          className="max-w-[800px] text-center mx-auto gradienttext satoshi text-2xl sm:text-3xl md:text-4xl"
        >
          We have worked with big names
        </h2>
        <p className="text-center text-gray-300 text-sm sm:text-base">
          Montage Motion is an Advertising and Digital Agency specializing in
          Influencer Marketing
        </p>
      </div>
 <div className="max-w-[996px] mx-auto sm:flex hidden sm:h-[86px] h-[200px] rounded-[17.45px] border bg-[#080B0C] border-[#0A303A]  items-center justify-center px-10 py-7">
        <div className="flex items-center justify-between w-full h-full sm:flex-wrap flex-wrap">
          {images.map((img, idx) => (
            <div key={idx} className="max-w-[155px] max-h-[40px] ">
              <Image
                src={img.src}
                alt={img.alt}
                layout="responsive"
                className="object-contain"
                priority={idx < 4} // Only prioritize first few images
              />
            </div>
          ))}
        </div>
      </div>
      <div className="max-w-[996px] sm:hidden mx-auto rounded-[17.45px] border bg-[#080B0C] border-[#0A303A] py-6 px-4 sm:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 gap-10 sm:gap-6 items-center justify-center">
          {images.map((img, idx) => (
            <div 
              key={idx} 
              className="flex items-center justify-center h-[25px] sm:h-16 w-[121px] gap-2.5"
            >
              <div className="relative w-full h-full">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-contain"
                  priority={idx < 4}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Brand;