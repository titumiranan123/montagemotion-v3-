import Link from "next/link";
import React from "react";
import { FaRegCheckCircle } from "react-icons/fa";

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

const Pricingcard: React.FC<{ data: IPackage }> = ({ data }) => {
 
  return (
    <div
      style={{ boxShadow: "inset 0px 0px 21px #25AAE1CC" }}
      className="lg:w-[323px] min-h-[600px] rounded-[17.45px] p-[21.5px] overflow-hidden relative"
    >
      {/* Price Section */}
      <div className="flex items-end space-x-1 relative text-white ">
        <h2 className="text-[38px] font-bold">
          {data.currency === "USD" ? "$ " : "Tk "}
          {String(data.price).split(".")[0]}
        </h2>
        <div className="flex gap-1 md:mb-[18px]">
          <span className="h-4 w-[2px] bg-white rotate-[22deg]" />
          <p className="text-[16px] mt-0 lg:-mt-[3px]">{data.unit}</p>
        </div>
      </div>

      {/* Title and Description */}
      <div className="text-white mt-4">
        <h3 className="text-[26px] font-[700] satoshi">{data.title}</h3>
        <p className="text-sm">{data.description}</p>
      </div>

      {/* Feature List */}
      <div className="mt-5 space-y-2">
        {data.features.map((feature, index) => (
          <Features key={index} feature={feature} />
        ))}
      </div>

      {/* Purchase Button */}
      <Link
        href={data.purchase_link}
        className="w-[279px] h-[56px] rounded-[20px] bg-[#25AAE1] text-[18px] text-white mt-16 flex justify-center items-center  "
      >
        Purchase
      </Link>
    </div>
  );
};

const Features: React.FC<{ feature: IFeature }> = ({ feature }) => {
  return (
    <div
      className={`flex mt-[14px] items-center gap-2 ${
        feature.is_active ? "text-white" : "text-[#44565C]"
      }`}
    >
      <FaRegCheckCircle className="text-[18px]" />
      <p className="text-[18px] font-normal">{feature.feature}</p>
    </div>
  );
};

export default Pricingcard;
