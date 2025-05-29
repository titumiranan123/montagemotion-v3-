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
      className="md:w-[448px] md:h-[224px] w-full h-[180px] p-5  flex justify-start gap-5 bg-[#58585833] relative overflow-hidden rounded-[9.91px]"
    >
      <div className="text-white space-y-1">
        <h3 className="md:text-[24px] text-[18px] leading-[24px] font-montserrat  font-[600] md:leading-[33.6px]">
          {serivce.title}
        </h3>
        <p className="">{serivce.description}</p>
      </div>
      <Image className="absolute bottom-0" src={bg} alt="" />
    </Link>
  );
};

export default Servicecard;
