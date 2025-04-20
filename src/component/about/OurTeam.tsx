import React from "react";
import Teamcard from "./Teamcard";

const OurTeam = () => {
  return (
    <div className="max-w-[1000px] mx-auto section">
      <div className="flex  flex-col text-white  mx-auto gap-4">
        <h2 className="w-[800px] text-center mx-auto">Our Services</h2>
        <p className="text-center">
          Montage Motion is an Advertising and Digital Agency speciallzing in
          InFluencer Marketing
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-16">
        <Teamcard />
        <Teamcard />
        <Teamcard />
        <Teamcard />
        <Teamcard />
        <Teamcard />
        <Teamcard />
        <Teamcard />
      </div>
    </div>
  );
};

export default OurTeam;
