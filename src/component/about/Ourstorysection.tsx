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
    <div className="max-w-[1000px] mx-auto flex lg:flex-row flex-col justify-between items-center lg:gap-[60px] gap-16">
      <Image src={about && about?.image} alt="" width={418.25} height={569} />
      <div>
        <h2 className="text-white satoshi">{about &&about?.title}</h2>
        <div  dangerouslySetInnerHTML={{__html:about &&about.description}} className="text-white mt-6">{}</div>
      </div>
    </div>
  );
};

export default Ourstorysection;
