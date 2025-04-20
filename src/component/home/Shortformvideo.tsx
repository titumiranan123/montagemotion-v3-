import React from "react";
import Shortcard from "./Shortcard";

const Shortformvideo: React.FC = () => {
  return (
    <div className="container section">
      <div className="flex  flex-col text-white  mx-auto gap-4">
        <h2 className="w-[800px] text-center mx-auto">Short-form Video</h2>
        <p className="text-center">
          Montage Motion is an Advertising and Digital Agency speciallzing in
          InFluencer Marketing
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 max-w-[998px] mx-auto gap-4 mt-16">
        <Shortcard />
        <Shortcard />
        <Shortcard />
        <Shortcard />
        <Shortcard />
        <Shortcard />
      </div>
    </div>
  );
};

export default Shortformvideo;
