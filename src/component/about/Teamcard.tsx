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
    <div className="w-[315px] h-[441px] p-5 rounded-[17.54px] bg-[#58585833]">
      <Image
        src={member && member.photourl}
        alt={member?.name}
        width={275}
        height={323}
        className="rounded-[13.09px]"
        priority
      />
      <div className="mt-[20px] space-y-1 text-white">
        <h3>{member.name}</h3>
        <p className="font-[400]">{member.designation}</p>
      </div>
    </div>
  );
};

export default Teamcard;
