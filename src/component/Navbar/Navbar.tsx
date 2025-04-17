"use client"

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";


const Navbar = () => {
  const [open, setOpen] = useState(true);
  const toggoleNav = () => {
    setOpen(!open);
  };
  const pathname = usePathname();
  const CustomLink = React.memo(({ href, className, title }:any) => {
    const isActive = pathname === href;
    return (
      <Link
        className={
        `  flex openSans text-[16px] text-white my-auto justify-center items-center font-bold h-[33px] max-w-48 px-4 py-2
          ${className} ${isActive ? "rounded-[30px] bg-[#1FB5DD] flex justify-center items-center text-white":''}
         
       ` }
        href={href}
      >
        {title}
      </Link>
    );
  });



  return (
    <div
      className={`relative ${
      pathname === "/" ? "" : ""
      }   openSans  md:py-1 lg:py-0`}
    >
      <nav className="flex justify-between container md:h-[120px] h-[100px] mx-auto items-center">
        <a href="/" className="logo ">
          <Image src={'/assets/logo.svg'} width={140} height={20} alt="" />
        </a>
        <div
          id="navbar"
          className="lg:felx  justify-center w-[660px]  rounded-[16px] ms-[65px] hidden bg-[#58585833] bg-opacity-50 backdrop-blur-[36px]   items-center p-[14px] lg:flex  text-[#DBDBDB]"
        >
          <CustomLink href={"/"} className={" font-bold"} title={"Home"} />

          <CustomLink href={"/works"} className={"font-bold"} title={"Works"} />
          <CustomLink
            href={"/services"}
            className={"font-bold"}
            title={"Services"}
          />
          <CustomLink
            href={"/case-studies"}
            className={"font-bold "}
            title={"Case Studies"}
          />
          <CustomLink href={"/blogs"} className={"font-bold"} title={"Blogs"} />
          <CustomLink href={"/about"} className={"font-bold"} title={"About"} />
          <CustomLink
            href={"/contact"}
            className={"font-bold"}
            title={"Contact"}
          />
        </div>
        <div className="justify-center items-center    lg:flex hidden gap-8">
          <Image className="" src={'/assets/Call Icon.png'} alt="call" loading="lazy" width={60} height={60} />

          <p className="text-[#DBDBDB] text-[16px] font-[400] -ms-8 -mt-[8px]">
            +8801786546949
          </p>
        </div>
        <div className="lg:hidden text-[#DBDBDB] ">
          {open ? (
            <svg
              onClick={toggoleNav}
              data-slot="icon"
              fill="#f90909"
              className={`h-12 w-12 me-3 transform transition origin-center ease-out duration-150 ${
                open && "rotate-180"
              }`}
              strokeWidth="1.5"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              ></path>
            </svg>
          ) : (
            <svg
              onClick={toggoleNav}
              className={`rotate-45 h-9 w-9 transform origin-center transition ease-out ${
                open && "rotate-180"
              }`}
              data-slot="icon"
              fill="#f90909"
              strokeWidth="1.5"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              ></path>
            </svg>
          )}
        </div>
      </nav>
      {!open && (
        <div className="absolute z-50 top-4 bg-blue-500 text-white w-full p-5 rounded-xl lg:hidden">
          <svg
            onClick={toggoleNav}
            className={`rotate-45 flex justify-end h-9 float-end w-9 transform origin-center transition duration-150 ease-out ${
              open && "rotate-180"
            }`}
            data-slot="icon"
            fill="#f90909"
            strokeWidth="1.5"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            ></path>
          </svg>
          <div className="  flex flex-col justify-center items-center space-y-5  p-28">
            {[
              "Home",
              "Works",
              "Services",
              // "Case Studies",
              "Blogs",
              "About",
              "Contact",
            ].map((title, index) => (
              <div key={index} onClick={() => setOpen(!open)}>
                <CustomLink
                  href={`/${
                    title !== "Home"
                      ? title.toLowerCase().replace(" ", "-")
                      : ""
                  }`}
                  className="font-bold w-20 text-[16px]"
                  title={title}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
