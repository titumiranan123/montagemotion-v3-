import React from "react";
import Accordion from "../shared/Accordion";

const Faq = () => {
  const items = [
    {
      question: "What types of videos do you specialize in editing ?",
      answer:
        "We specialize in editing a wide range of videos , including but not limited to promotional content , vlogs, interviews and event comverage.",
    },
    {
      question: "How long does the video editing process typically take ?",
      answer:
        "We specialize in editing a wide range of videos , including but not limited to promotional content , vlogs, interviews and event comverage.",
    },
    {
      question:
        "Can i provide speicfic instructions for the editing style and preferences ?",
      answer:
        "We specialize in editing a wide range of videos , including but not limited to promotional content , vlogs, interviews and event comverage.",
    },
    {
      question: "What steps are involved in your video editing service ?",
      answer:
        "We specialize in editing a wide range of videos , including but not limited to promotional content , vlogs, interviews and event comverage.",
    },
    {
      question:
        "Is there a limit to the revisions I can request for my edited video ?",
      answer:
        "We specialize in editing a wide range of videos , including but not limited to promotional content , vlogs, interviews and event comverage.",
    },
    {
      question: "What types of videos do you specialize in editing ?",
      answer:
        "We specialize in editing a wide range of videos , including but not limited to promotional content , vlogs, interviews and event comverage.",
    },
  ];
  return (
    <div className="section  container">
      <div className="flex  flex-col text-white  mx-auto gap-4">
        <h2 className="w-[800px] text-center mx-auto">Frequently Asked Question (FAQ)</h2>
        <p className="text-center">
          Montage Motion is an Advertising and Digital Agency speciallzing in
          InFluencer Marketing
        </p>
      </div>
      <div className="mt-20">
        <Accordion items={items} />
      </div>
    </div>
  );
};

export default Faq;
