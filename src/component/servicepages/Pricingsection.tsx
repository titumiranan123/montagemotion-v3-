import React from "react";
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
  const single = data.filter((item) => item.pricing_type === "single");
  return (
    <div className="section  max-w-[996px]  w-full mx-auto ">
      <div className="flex  flex-col text-white  mx-auto lg:gap-4 gap-2">
        <h2 className="lg:w-[800px] text-center mx-auto">{title}</h2>
        <p className="text-center">{sub_title}</p>
      </div>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 mt-10">
        {single?.map((data, idx) => (
          <Pricingcard data={data} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default Pricingsection;
