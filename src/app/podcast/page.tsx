"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
const GSAPStaggerExample = () => {
  const boxesRef = useRef<HTMLDivElement[]>([]);
  useEffect(() => {
    gsap.from(boxesRef.current, {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power2.out",
    });
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen flex-wrap gap-4 bg-gray-100">
      {Array.from({ length: 5 }).map((_, index) => (
        <div
          key={index}
          ref={(el) => {
            if (el) boxesRef.current[index] = el;
          }}
          className="w-32 h-32 bg-green-400"
        ></div>
      ))}
    </div>
  );
};

export default GSAPStaggerExample;
