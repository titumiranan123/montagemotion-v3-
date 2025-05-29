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
    <div className="section  max-w-[996px] px-2 lg:px-0  w-full mx-auto ">
      <div className="flex  flex-col text-white  mx-auto lg:gap-4 gap-2">
        <h2 data-aos="fade-up"
            data-aos-delay="200" className="lg:w-[800px] text-center mx-auto gradienttext satoshi">{items?.title}</h2>
        <p data-aos="fade-up"
            data-aos-delay="300" className="text-center mt-2">
          {items?.sub_title}
        </p>
      </div>
      <div className="md:mt-[60px] mt-10"> <Accordion items={items?.faqs} /> </div>
    </div>
  );
};

export default Faqservice;
