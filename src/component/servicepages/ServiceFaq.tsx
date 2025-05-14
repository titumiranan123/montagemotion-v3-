import React from "react";
import Accordion from "../shared/Accordion";
export interface FAQ {
  id: string;
  faq_id: string;
  question: string;
  answer: string;
  is_visible: boolean;
  position: number;
  created_at: string; // ISO date string
  updated_at: string; // ISO date string
}

export interface FAQSection {
  items: {
    id: string;
    title: string;
    sub_title: string;
    faqs: FAQ[];
  };
}

const Faqservice: React.FC<FAQSection> = ({ items }) => {
  return (
    <div className="section  max-w-[996px]  w-full mx-auto ">
      <div className="flex  flex-col text-white  mx-auto lg:gap-4 gap-2">
        <h2 className="lg:w-[800px] text-center mx-auto">{items?.title}</h2>
        <p className="text-center">
          {items?.sub_title}
        </p>
      </div>
      <div className="mt-20"> <Accordion items={items?.faqs} /> </div>
    </div>
  );
};

export default Faqservice;
