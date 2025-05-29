import React, { useState } from "react";
import Pricingcard from "./Pricingcard";
interface IFeature {
  feature: string;
  is_present: string;
  is_active: boolean;
  position: number;
}
interface IPackage {
  id: number;
  is_visible: boolean;
  name: "Basic" | "Standard" | "Premium";
  title: string;
  description: string;
  currency: string;
  price: number;
  unit: string;
  features: IFeature[];
  note: string;
  purchase_link: string;
  pricing_type: "single" | "combo";
  type:
    | "main"
    | "shorts"
    | "talking"
    | "podcast"
    | "graphic"
    | "advertising"
    | "website";
}

const Pricingsection = ({
  data,
  title,
  sub_title,
}: {
  data: IPackage[];
  title: string;
  sub_title: string;
}) => {
  if (!data || data.length === 0) {
    return null;
  }
  const [isSingle, setSingle] = useState("single");
  const single = data?.filter((item) => item.pricing_type === "single");
  const combo = data?.filter((item) => item.pricing_type !== "single");
  return (
    <div className="section lg:px-0 px-2 max-w-[996px]  w-full mx-auto ">
      <div className="flex  flex-col text-white  mx-auto lg:gap-4 gap-2">
        <h2 className="lg:w-[800px] text-center mx-auto satoshi gradienttext md:leading-[85px]">
          {title}
        </h2>
        <p className="text-center">{sub_title}</p>
      </div>
      <div>
        <div
          style={{ boxShadow: "inset 0px 0px 21px #25AAE1CC" }}
          className="border rounded-xl p-2 mt-10 w-[200px] mx-auto gap-2 flex justify-between items-center"
        >
          <button
            onClick={() => setSingle("single")}
            className={`py-3 w-[86px] h-[54px]  px-3 text-white rounded-lg ${
              isSingle === "single" ? "bg-[#25AAE1]" : ""
            }`}
          >
            Single
          </button>
          <button
            onClick={() => setSingle("combo")}
            className={`py-3 w-[86px] h-[54px]  px-3 text-white rounded-lg ${
              isSingle !== "single" ? "bg-[#25AAE1]" : ""
            }`}
          >
            Combo
          </button>
        </div>
      </div>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 mt-12">
        {isSingle === "single" ? (
          single && single.length > 0 ? (
            single.map((data, idx) => <Pricingcard key={idx} data={data} />)
          ) : (
            <p className="text-white">No package found</p>
          )
        ) : combo && combo.length > 0 ? (
          combo.map((data, idx) => <Pricingcard key={idx} data={data} />)
        ) : (
          <p className="text-white">No package found</p>
        )}
      </div>
    </div>
  );
};

export default Pricingsection;
