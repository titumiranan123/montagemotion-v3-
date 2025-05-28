import bg from "@/public/newservice.png";
import Image from "next/image";
import Link from "next/link";
import React from "react";
interface Iservice {
  id?: string;
  title: string;
  description: string;
  image: string;
  ispublish: boolean;
  position: number;
  href: string;
}
const Servicecard = ({ serivce }: { serivce: Iservice }) => {
  return (
    <Link
      href={`${serivce.href}`}
      className="md:w-[448px] md:h-[224px] w-full h-auto md:px-[22px] md:py-[66px] px-3 py-6 flex justify-between items-center gap-5 bg-[#58585833] relative overflow-hidden rounded-[9.91px]"
    >
      <div className="text-white space-y-1">
        <h3 className="md:text-[24px] text-[20px] font-montserrat  font-[600] leading-[33.6px]">
          {serivce.title}
        </h3>
        <p className="">{serivce.description}</p>
      </div>
      <Image className="absolute bottom-0" src={bg} alt="" />
    </Link>
  );
};

export default Servicecard;
