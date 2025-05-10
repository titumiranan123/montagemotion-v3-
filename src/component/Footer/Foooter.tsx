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
    <footer className="container w-full section  pt-10 pb-4  ">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-8 pb-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Logo and Newsletter */}
          <div className="sm:col-span-2 lg:col-span-1 space-y-4">
            <Image
              width={185}
              height={92}
              src={'/assets/footerlogo.png'}
              alt="Company Logo"
              className="w-40 md:w-56"
            />
            <p className="text-[14px] md:text-[16px] openSans text-[#E4E8F7]">
              Subscribe our newsletter to stay updated and get special offers.
            </p>
            <form
              onSubmit={onSubmit}
              className="flex flex-col sm:flex-row gap-2 items-center"
            >
              <input
                type="email"
                placeholder="Enter Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full py-3 px-4 rounded-[33px] focus:outline-none bg-white text-[#404147]"
              />
              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-3 rounded-[33px] text-white bg-[#1FB5DD] hover:bg-[#1899C0] transition duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Services and Others */}
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-[18px] md:text-[24px] text-white">
                Services
              </h3>
              <ul className="mt-3 space-y-2">
                <li>
                  <Link
                    href="/services"
                    className="text-[14px] md:text-[16px] openSans text-[#E4E8F7] hover:underline hover:text-white"
                  >
                    Global
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="text-[14px] md:text-[16px] openSans text-[#E4E8F7] hover:underline hover:text-white"
                  >
                    For Bangladesh
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-[18px] md:text-[24px] text-white">
                Others
              </h3>
              <ul className="mt-3 space-y-2">
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
            </div>
          </div>

          {/* About Us */}
          <div className="space-y-4">
            <h3 className="font-bold text-[18px] md:text-[24px] text-white">
              About Us
            </h3>
            <ul className="mt-3 space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-[14px] md:text-[16px] openSans text-[#E4E8F7] hover:underline hover:text-white"
                >
                  Our Story
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-[14px] md:text-[16px] openSans text-[#E4E8F7] hover:underline hover:text-white"
                >
                  Our Mission & Vision
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-[14px] md:text-[16px] openSans text-[#E4E8F7] hover:underline hover:text-white"
                >
                  Our Team
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-bold text-[18px] md:text-[24px] text-white">
              Contact Info
            </h3>
            <ul className="mt-3 space-y-3 text-[14px] md:text-[16px] openSans text-[#E4E8F7]">
              <li>
                Mirpur Dohs, Dhaka,
                <br /> Bangladesh
              </li>
              <li>
                GOLDEN LIFE LINE IMITED
                <br /> 34 Turner Street, London
              </li>
              <li className="flex items-center gap-2 mt-3">
                <Image
                  width={20}
                  height={20}
                  src={'/assets/Call Icon.png'}
                  alt="Phone"
                  className="w-5 h-5"
                />
                <a href="tel:+8801786546949">+8801786546949</a>
              </li>
            </ul>

            {/* Social Media */}
            <div className="flex gap-4 mt-4">
              <Link
                target="_blank"
                href="https://www.facebook.com/profile.php?id=61555719839132"
                aria-label="Facebook"
              >
                <Image
                  width={24}
                  height={24}
                  src={'/assets/facebook.png'}
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
                  src={'/assets/linkdin.png'}
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
                  src={'/assets/instragram.png'}
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
                  src={'/assets/youtube.png'}
                  alt="YouTube"
                  className="w-6 h-6 hover:opacity-80 transition-opacity"
                />
              </Link>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="bg-[#E4E8F7] h-[1px] w-full my-4"></div>

        {/* Copyright */}
        <div className="text-center text-[12px] md:text-[14px] openSans text-[#E4E8F7]">
          <p>© {new Date().getFullYear()} Motion Montage All Rights Reserved.</p>
        </div>
     
    </footer>
  );
};

export default Footer;