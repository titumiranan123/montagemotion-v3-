"use client"
import React from "react";
import Servicecard from "./Servicecard";
import useService from "@/src/hook/useService";

const Services = () => {
  const { data, isLoading } = useService();
  
  return (
    <div className="container section">
      <div className="flex  flex-col text-white  mx-auto gap-4">
        <h2 className="lg:w-[800px] text-center mx-auto">Our Services</h2>
        <p className="text-center">
          Montage Motion is an Advertising and Digital Agency speciallzing in
          InFluencer Marketing
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-[998px] mx-auto gap-4 mt-16">
        {isLoading ? (
          <>
            {[...Array(6)].map((_, idx) => (
              <CampaignCardSkeleton key={idx} />
            ))}
          </>
        ) : (
          <>
            {
              data?.map((service:any,index:number)=><Servicecard serivce={service} key={index} />)
            }
          </>
        )}
      </div>
    </div>
  );
};

const CampaignCardSkeleton: React.FC = () => {
  return (
    <div className="md:w-[488px] md:h-[224px] w-full h-auto md:px-[22px] md:py-[66px] px-4 py-10 flex justify-between items-center gap-5 bg-[#58585833] rounded-[9.91px] animate-pulse">
  
      <div className="flex-1 space-y-3">
        {/* Title and Position Skeleton */}
        <div className="flex justify-between items-center">
          <div className="h-7 w-3/4 bg-gray-400/30 rounded"></div>
          <div className="h-5 w-10 bg-gray-400/30 rounded-full"></div>
        </div>

        {/* Description Skeleton */}
        <div className="space-y-2">
          <div className="h-3 w-full bg-gray-400/30 rounded"></div>
          <div className="h-3 w-5/6 bg-gray-400/30 rounded"></div>
          <div className="h-3 w-4/6 bg-gray-400/30 rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default Services;
