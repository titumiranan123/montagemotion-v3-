"use client"

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Foooter = () => {
  const [email, setEmail] = useState("");
  const onSubmit = async (event:any) => {
    event.preventDefault();
   console.log(event)
  };

  return (
    <>
      <div className="grid grid-cols-2 pb-10 mt-[64px] md:mt-[74px] gap-10 lg:grid-cols-4 md:grid-cols-2 container section   text-[#E4E8F7]">
        <div className="flex flex-col gap-2 col-span-2 md:col-span-1  space-y-4">
      
            <Image width={235} height={92}  src={'/assets/footerlogo.png'} alt="" />
         

          <p className=" text-[16px] openSans text-[#E4E8F7] ">
            Subscribe our newsletter to stay <br />
            updated and get special offers.
          </p>
          <form
            onSubmit={onSubmit}
            className="flex items-center text-[#404147] border bg-white cardtitle border-gray-200 rounded-[33px] shadow-sm"
          >
            <input
              type="email"
              placeholder="Enter Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full py-2 px-4 rounded-[33px] focus:outline-none bg-white focus:border-blue-500"
            />
            <button
              type="submit"
              className="btn subscribe px-4 py-2 rounded-[33px] text-white bg-white border border-white hover:border-white focus:border-white transition duration-300 tracking-[1px]"
            >
              Subscribe
            </button>
          </form>
        </div>
        <div className="flex flex-col  gap-2 md:ms-16">
          <h3 className="semitext font-bold md:text-[24px] text-[20px]  ">
            Services
          </h3>
          <ul className="list-none text-[#E4E8F7] mt-2 md:text-[16px] text-[12px] openSans space-y-2">
            <Link className="hover:underline" href={"/services"}>
              <li className="cursor-pointer">Global </li>
            </Link>
            <Link className="hover:underline" href={"/services"}>
              <li className="cursor-pointer">For Bangladesh </li>
            </Link>
          </ul>
          <h3 className="semitext font-bold md:text-[24px] text-[20px]  ">
            Others
          </h3>
          <ul className="list-none text-[#E4E8F7] mt-2 md:text-[16px] text-[12px] openSans space-y-2 flex flex-col ">
            <Link className="hover:underline" href={"privacy-policy"}>
              Privacy Policy
            </Link>
            <Link className="hover:underline" href={"terms-and-conditions"}>
              Terms & Conditions
            </Link>

            <Link className="hover:underline" href={"refund-policy"}>
              Refund Policy
            </Link>
          </ul>
        </div>
        <div className="flex   flex-col gap-2">
          <h3 className="semitext font-bold md:text-[24px] text-[20px]  ">
            About Us
          </h3>
          <ul className="list-none text-[#E4E8F7] mt-2 md:text-[16px] text-[12px] openSans space-y-4">
            <Link className="hover:underline" href={"/about"}>
              <li className="cursor-pointer">Our Story</li>
            </Link>
            <Link className="hover:underline" href={"/about"}>
              <li className="cursor-pointer">Our Mission & Vision </li>
            </Link>
            <Link className="hover:underline" href={"/about"}>
              {" "}
              <li className="cursor-pointer">Our Team </li>
            </Link>
          </ul>
        </div>
        <div className="flex gap-2  md:ms-16 lg:ms-0 ms-0 flex-col">
          <h3 className="semitextf  font-bold md:text-[24px] text-[20px]  ">
            Contact Info
          </h3>
          <ul className="list-none mt-2  openSans md:text-[16px] text-[12px] text-[#E4E8F7] flex flex-col gap-3  ">
            <li>
              Mirpur Dohs, Dhaka,
              <br /> Bangladesh{" "}
            </li>
            <li className="">
              GOLDEN LIFE LINE IMITED 34 Turner Street, London{" "}
            </li>
            <li className="flex gap-2 mt-3  items-center">
              {" "}
              <a
                className="flex  gap-2 items-center"
                href="mailto:+0883797438438"
              >
                <Image width={24} height={24} layout="responsive" src={'/assets/Call Icon.png'} alt="" /> <p>+8801786546949</p>
              </a>
            </li>
            {/* <li>
              <a
                className="flex  gap-2 items-center"
                href="mailto:info@montagemotion.com"
              >
                <Image src={emailIcon} alt="" /> <p>info@montagemotion.com </p>
              </a>
            </li> */}
          </ul>
          <div>
            <div className="flex gap-2 mt-4">
              <Link
                target="_blank"
                href={"https://www.facebook.com/profile.php?id=61555719839132"}
              >
                <Image width={24} height={24} layout="responsive" src={'/assets/facebook.png'} alt="" />
              </Link>
              <Link
                target="_blank"
                href={"https://www.linkedin.com/company/montagemotion/"}
              >
                <Image width={24} height={24} layout="responsive" src={'/assets/linkdin.png'} alt="" />
              </Link>
              <Link
                target="_blank"
                href={"https://www.instagram.com/montagemotion_official/"}
              >
                <Image width={24} height={24} layout="responsive" src={'/assets/instragram.png'} alt="" />
              </Link>
              <Link
                href={"https://www.youtube.com/channel/UC4CE0a0OHH7LYYgkAGvEslw"}
                target="_blank"
              >
                <Image width={24} height={24} layout="responsive" src={'/assets/youtube.png'} alt="" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#E4E8F7] h-[2px] w-full mb-2"></div>
      <div className="flex justify-center items-center pb-4 text-[#E4E8F7] md:text-[16px] text-[12px] openSans">
        <p>© 2023 Motion Montage All Rights Reserved.</p>
      </div>
    </>
  );
};

export default Foooter;
