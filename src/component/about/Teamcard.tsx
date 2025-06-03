import Image from "next/image";
import React from "react";
interface singleMember {
  member: {
    name: string;
    designation: string;
    photourl: string;
  };
}
const Teamcard: React.FC<singleMember> = ({ member }) => {
  return (
    <div style={{ boxShadow: "0px 4px 60px 0px #1FB5DD29 inset" }} className="w-[315px] min-h-[426px] h-full p-5 rounded-[17.54px] bg-[#58585833] backdrop-blur-[21px]">
      <div className="w-[275px] h-[310px] rounded-[17.54px] overflow-hidden ">
        <Image
        style={{width:'275px',height:'313px'}}
        src={member && member.photourl}
        alt={member?.name}
        width={275}
        height={323}
        className="rounded-[17.54px]"
        priority
      />
      </div>
      <div className="mt-[20px] space-y-1 text-white">
        <h3>{member.name}</h3>
        <p className="font-[400]">{member.designation}</p>
      </div>
    </div>
  );
};

export default Teamcard;
