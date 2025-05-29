"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const [email, setEmail] = useState("");
  const onSubmit = async (event: any) => {
    event.preventDefault();
  };

  return (
    <footer className="max-w-[996px] mx-auto w-full section  pt-10 pb-4 overflow-hidden px-2 lg:px-0">
      {/* Main Footer Content */}
      <div className="grid grid-cols-1 gap-8 pb-10 sm:grid-cols-2 lg:grid-cols-4">
        {/* Logo and Newsletter */}
        <div className="sm:col-span-2 max-w-[450px] lg:col-span-2 space-y-4">
          <div className="w-[185px] h-[56px] mb-8">
            <Image
              width={185}
              height={92}
              src={"/assets/footerlogo.png"}
              alt="Company Logo"
              className="w-40 md:w-56"
            />
          </div>
          <p className="text-[14px] md:text-[16px] openSans text-[#E4E8F7] lg:mx-4 ">
            Subscribe our newsletter to stay updated and get special offers.
          </p>
          <form
            onSubmit={onSubmit}
            className="flex flex-col mt-4 lg:mx-4 lg:mt-8 sm:flex-row w-full max-w-[310px] md:h-[58px] h-[110px] p-2 rounded-[16px] bg-[#585858]/20  gap-2 items-center"
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
              className="w-full sm:w-auto px-4 py-2 rounded-[10px] text-white bg-[#1FB5DD] hover:bg-[#1899C0] transition-colors duration-300 font-medium focus:outline-none focus:ring-2 focus:ring-[#1FB5DD] focus:ring-opacity-50"
              aria-label="Subscribe to newsletter"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Services and Others */}
        <div className="space-y-6 lg:mt-0 mt-6">
          <div>
            <h3 className="font-bold text-[18px] md:text-[24px] text-white">
              Services
            </h3>
            <ul className="mt-3 space-y-2">
              <li>
                <Link
                  href="/advertising-campaign"
                  className="text-[14px] md:text-[16px] openSans text-[#E4E8F7] hover:underline hover:text-white"
                >
                  Advertising
                </Link>
              </li>
              <li>
                <Link
                  href="/talking-head-video-editing"
                  className="text-[14px] md:text-[16px] openSans text-[#E4E8F7] hover:underline hover:text-white"
                >
                  Talking Head Video Editing
                </Link>
              </li>
              <li>
                <Link
                  href="/podcast-video-editing"
                  className="text-[14px] md:text-[16px] openSans text-[#E4E8F7] hover:underline hover:text-white"
                >
                  Podcast Video Editing
                </Link>
              </li>
              <li>
                <Link
                  href="/shorts-video-editing"
                  className="text-[14px] md:text-[16px] openSans text-[#E4E8F7] hover:underline hover:text-white"
                >
                  Shorts Video Editing
                </Link>
              </li>
              <li>
                <Link
                  href="/graphic-design"
                  className="text-[14px] md:text-[16px] openSans text-[#E4E8F7] hover:underline hover:text-white"
                >
                  Graphic Design
                </Link>
              </li>
              <li>
                <Link
                  href="/custom-website-design"
                  className="text-[14px] md:text-[16px] openSans text-[#E4E8F7] hover:underline hover:text-white"
                >
                  Custom Website Design
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <h3 className="font-bold text-[18px] md:text-[24px] text-white">
            Information
          </h3>
          <ul className="mt-3 space-y-2">
            <li>
              <Link
                href="/about"
                className="text-[14px] md:text-[16px] openSans text-[#E4E8F7] hover:underline hover:text-white"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-[14px] md:text-[16px] openSans text-[#E4E8F7] hover:underline hover:text-white"
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                href="privacy-policy"
                className="text-[14px] md:text-[16px] openSans text-[#E4E8F7] hover:underline hover:text-white"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="terms-and-conditions"
                className="text-[14px] md:text-[16px] openSans text-[#E4E8F7] hover:underline hover:text-white"
              >
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link
                href="refund-policy"
                className="text-[14px] md:text-[16px] openSans text-[#E4E8F7] hover:underline hover:text-white"
              >
                Refund Policy
              </Link>
            </li>
          </ul>
          <div className="flex gap-4 mt-4">
            <Link
              target="_blank"
              href="https://www.facebook.com/profile.php?id=61555719839132"
              aria-label="Facebook"
            >
              <Image
                width={24}
                height={24}
                src={"/assets/facebook.png"}
                alt="Facebook"
                className="w-6 h-6 hover:opacity-80 transition-opacity"
              />
            </Link>
            <Link
              target="_blank"
              href="https://www.linkedin.com/company/montagemotion/"
              aria-label="LinkedIn"
            >
              <Image
                width={24}
                height={24}
                src={"/assets/linkdin.png"}
                alt="LinkedIn"
                className="w-6 h-6 hover:opacity-80 transition-opacity"
              />
            </Link>
            <Link
              target="_blank"
              href="https://www.instagram.com/montagemotion_official/"
              aria-label="Instagram"
            >
              <Image
                width={24}
                height={24}
                src={"/assets/instragram.png"}
                alt="Instagram"
                className="w-6 h-6 hover:opacity-80 transition-opacity"
              />
            </Link>
            <Link
              target="_blank"
              href="https://www.youtube.com/channel/UC4CE0a0OHH7LYYgkAGvEslw"
              aria-label="YouTube"
            >
              <Image
                width={24}
                height={24}
                src={"/assets/youtube.png"}
                alt="YouTube"
                className="w-6 h-6 hover:opacity-80 transition-opacity"
              />
            </Link>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="bg-[#E4E4E733] h-[1px] w-full my-4"></div>

      {/* Copyright */}
      <div className="text-center text-[12px] md:text-[14px] openSans text-[#E4E8F7]">
        <p>© {new Date().getFullYear()} Motion Montage All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
