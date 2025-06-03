"use client";

import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const [email, setEmail] = useState("");

  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      once: true,     // animate only once
    });
  }, []);

  const onSubmit = async (event: any) => {
    event.preventDefault();
  };

  return (
    <footer className="max-w-[996px] mx-auto w-full section pt-10 pb-4 overflow-hidden px-2 lg:px-0">
      {/* Main Footer Content */}
      <div
        className="grid grid-cols-1 gap-8 pb-10 sm:grid-cols-2 lg:grid-cols-4"
        data-aos="fade-up"
      >
        {/* Logo and Newsletter */}
        <div
          className="sm:col-span-2 max-w-[450px] lg:col-span-2 space-y-4"
          data-aos="fade-right"
        >
          <div data-aos="fade-up"
            data-aos-delay="200" className="w-[185px] h-[56px] mb-8">
            <Image
              width={185}
              height={92}
              src={"/assets/footerlogo.png"}
              alt="Company Logo"
              className="w-40 md:w-56"
            />
          </div>
          <p data-aos="fade-up"
            data-aos-delay="300" className="text-[14px] md:text-[16px] openSans text-[#E4E8F7] lg:mx-4 ">
            Subscribe our newsletter to stay updated and get special offers.
          </p>
          <form
          data-aos="fade-up"
            data-aos-delay="400"
            onSubmit={onSubmit}
            className="flex flex-col mt-4 lg:mx-4 lg:mt-8 sm:flex-row w-full max-w-[310px] md:h-[58px] h-[110px] p-2 rounded-[16px] bg-[#585858]/20 gap-2 items-center"
          >
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              aria-label="Email address"
              className="flex-1 w-full px-3 py-2 bg-transparent text-white placeholder-[#cccccc] focus:outline-none"
            />
            <button
              type="submit"
              className="w-full sm:w-auto px-4 py-2 rounded-[10px] text-white btns transition-colors duration-300 font-medium focus:outline-none "
              aria-label="Subscribe to newsletter"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Services */}
        <div className="space-y-6 lg:mt-0 mt-6" >
          <div>
            <h3 data-aos="fade-up"
            data-aos-delay="200" className="font-bold text-[18px] md:text-[24px] text-white">
              Services
            </h3>
            <ul className="mt-3 space-y-2">
              {[
                ["Advertising", "/advertising-campaign"],
                ["Talking Head Video Editing", "/talking-head-video-editing"],
                ["Podcast Video Editing", "/podcast-video-editing"],
                ["Shorts Video Editing", "/shorts-video-editing"],
                ["Graphic Design", "/graphic-design"],
                ["Custom Website Design", "/custom-website-design"],
              ].map(([text, link],idx) => (
                <li data-aos="fade-up" data-aos-delay={`${idx * 100}`} key={link}>
                  <Link
                    href={link}
                    className="text-[14px] md:text-[16px] openSans text-[#E4E8F7] hover:underline hover:text-white"
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Information */}
        <div data-aos="fade-left">
          <h3 data-aos="fade-up"
            data-aos-delay="400" className="font-bold text-[18px] md:text-[24px] text-white">
            Information
          </h3>
          <ul className="mt-3 space-y-2">
            {[
              ["About Us", "/about"],
              ["Contact Us", "/contact"],
              ["Privacy Policy", "privacy-policy"],
              ["Terms & Conditions", "terms-and-conditions"],
              ["Refund Policy", "refund-policy"],
            ].map(([text, link],idx) => (
              <li data-aos="fade-up" data-aos-delay={`${idx * 100}`} key={link}>
                <Link
                  href={link}
                  className="text-[14px] md:text-[16px] openSans text-[#E4E8F7] hover:underline hover:text-white"
                >
                  {text}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex gap-4 mt-4">
            {[
              ["Facebook", "/assets/facebook.png", "https://www.facebook.com/profile.php?id=61555719839132"],
              ["LinkedIn", "/assets/linkdin.png", "https://www.linkedin.com/company/montagemotion/"],
              ["Instagram", "/assets/instragram.png", "https://www.instagram.com/montagemotion_official/"],
              ["YouTube", "/assets/youtube.png", "https://www.youtube.com/channel/UC4CE0a0OHH7LYYgkAGvEslw"],
            ].map(([label, img, url],idx) => (
              <Link data-aos="fade-up"
                data-aos-delay={100 + idx * 100}  key={label} target="_blank" href={url} aria-label={label}>
                <Image
                  width={24}
                  height={24}
                  src={img}
                  alt={label}
                  className="w-6 h-6 hover:opacity-80 transition-opacity"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Divider */}
      <div
        className="bg-[#E4E4E733] h-[1px] w-full my-4"
        data-aos="fade-in"
      ></div>

      {/* Copyright */}
      <div
        className="text-center text-[12px] md:text-[14px] openSans text-[#E4E8F7]"
        data-aos="zoom-in"
      >
        <p>© {new Date().getFullYear()} Motion Montage All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
