import Image from "next/image";
import React from "react";

interface AboutProps {
  about: {
    title: string;
    description: string;
    image: string;
  };
}

const Ourstorysection: React.FC<AboutProps> = ({ about }) => {
  return (
    <div className="max-w-[1000px] mx-auto flex justify-between items-center lg:gap-[100px]">
      <Image src={about && about?.image} alt="" width={418.25} height={569} />
      <div>
        <h2 className="text-white">{about &&about?.title}</h2>
        <div dangerouslySetInnerHTML={{__html:about &&about.description}} className="text-white">{}</div>
      </div>
    </div>
  );
};

export default Ourstorysection;
