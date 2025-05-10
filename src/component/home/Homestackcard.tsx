"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import ServiceFullLengthcard from "../servicepages/ServiceFullLengthcard";
import useHomeApi from "@/src/hook/useHomeApi";

// Register the plugin
gsap.registerPlugin(ScrollTrigger);

const CardStackScroller = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<HTMLDivElement[]>([]);
  const { data, isLoading } = useHomeApi();

  useEffect(() => {
    if (!data?.works?.length) return;

    // Set initial state of cards, hide them except for the first one
    gsap.set(cardRefs.current.slice(1), {
      opacity: 0,
      y: 50,
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 20%",
        end: "+=1500", 
        scrub: 1, // Sync with scroll
        pin: true, // Pin the section
        anticipatePin: 1,
      },
    });

    // Animate each card one by one, change opacity and y-position
    cardRefs.current.slice(1).forEach((card) => {
      tl.to(card, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power2.out",
      });
    });

    // Recalculate layout after the content loads
    ScrollTrigger.refresh();
    // Cleanup scroll triggers on component unmount
    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [data]);

  if (isLoading) {
    return <div className="text-white text-center mt-10">Loading...</div>;
  }

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden "
    >
      {data?.works?.map((item: any, i: number) => (
        <div
          key={i}
          ref={(el) => {
            if (el) cardRefs.current[i] = el;
          }}
          className="absolute top-[20%] left-[30%] w-[600px] h-[250px]"
        >
          <ServiceFullLengthcard work={item} />
        </div>
      ))}
    </section>
  );
};

export default CardStackScroller;
