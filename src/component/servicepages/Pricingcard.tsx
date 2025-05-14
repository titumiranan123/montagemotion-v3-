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

const Pricingcard = ({ data }: { data: IPackage }) => {
  return (
    <div
      style={{
        boxShadow: "inset 0px 0px 24px 2px #0A303A",
      }}
      className="lg:w-[323px] min-h-[500px]  rounded-[17.45px] p-[21px]"
    >
      <div className="flex items-end space-x-1 text-white">
        <h2 className="text-[38px] font-bold">
          ${String(data?.price).split(".")[0]}
        </h2>
        <span className="h-8 w-[2px] bg-white rotate-[22deg] mb-3"></span>
        <p className="text-sm mb-4">{data?.unit}</p>
      </div>
      <div className="text-white">
        <h3 className="text-[22px]">{data?.title}</h3>
        <p>{data?.description}</p>
      </div>
      <div className="mt-5">
        {data?.features.map((feature) => (
          <Features feature={feature} />
        ))}
      </div>
      <button className="w-[279px] h-[56px] rounded-[20px] bg-[#25AAE1] mt-16"></button>
    </div>
  );
};

const Features: React.FC<{ feature: IFeature }> = ({ feature }) => {
  return (
    <div className={`flex items-center gap-2 mt-2 ${feature.is_active ?"text-white":"text-[#44565C]"}`}>
      <FaRegCheckCircle className="text-[18px] font-[400]" />
      <p className="text-[18px] font-[400]">{feature.feature}</p>
    </div>
  );
};
export default Pricingcard;
