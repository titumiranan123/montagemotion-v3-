import React from "react";
import Image from "next/image";

interface WebsiteCardProps {
  thumbnail: string;
  sub_type?: string;
}

const WebsiteCard: React.FC<WebsiteCardProps> = ({ thumbnail, sub_type }) => {
  return (
    <div className="overflow-hidden h-[274px] w-[488px] rounded-[9.91px]  bg-black">
        <Image src={thumbnail} alt={`${sub_type||''}`} width={488} height={274} />
    </div>
  );
};

export default WebsiteCard;
