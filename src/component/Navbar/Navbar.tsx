"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import useService from "@/src/hook/useService";
import { FaAngleDown } from "react-icons/fa";

interface Service {
  id: string;
  href: string;
  title: string;
  description: string;
  image: string;
}

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const path = usePathname();
  const { data: servicesData, isLoading } = useService();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const isServicesActive = servicesData?.some((data: Service) =>
    path.startsWith(`${data.href}`)
  );
  return (
    <header className="lg:mt-[32px]">
      <div className="max-w-[996px] mx-auto py-4">
        <nav className="flex justify-between items-center relative">
          {/* Logo */}
            <Link href="/" className="block  h-auto  md:h-14 md:w-[151px]   ">
              <Image
                src="/assets/logo.svg"
                alt="Company Logo"
                width={151}
                height={56}
                priority
              />
            </Link>
      

          {/* Desktop Navigation */}
          <div className="hidden max-w-[565px] w-full mx-auto lg:flex items-center">
            <div className="flex justify-center rounded-xl bg-[#58585833] bg-opacity-50 py-3 px-6 backdrop-blur-md items-center  text-[#DBDBDB] gap-4 z-50">
              <Link
                href={"/"}
                className={`${path === "/" ? "font-bold active" : ""}`}
              >
                Home
              </Link>
              <div className="group cursor-pointer  rounded-md">
                <span
                  style={{ width: "82px", textAlign: "center" }}
                  className={` flex items-center gap-2 ${
                    isServicesActive ? "font-bold active" : ""
                  }`}
                >
                  Services <FaAngleDown className="mt-1 w-4 h-4" />
                </span>
                <div className="w-[900px]  absolute  top-full -left-[185px] invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300 ease-in-out transform translate-y-2 group-hover:-translate-y-1 z-50">
                  <div className="bg-black shadow-xl rounded-lg p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 border border-slate-500 text-white">
                    {servicesData?.map((service: Service) => (
                      <Link
                        key={service.id}
                        href={`${service.href}`}
                        className="flex items-start space-x-3 p-3 hover:bg-gray-50 hover:text-black rounded-lg transition-colors duration-200 z-50"
                      >
                        <div className="flex-shrink-0 relative w-8 h-8">
                          <Image
                            src={service.image}
                            alt={service.title}
                            fill
                            className="object-cover rounded-md"
                          />
                        </div>
                        <div>
                          <h3 className="text-sm">{service.title}</h3>
                          <p className="text-sm mt-1 line-clamp-2">
                            {service.description}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <Link
                className={`${path === "/about" ? "font-bold active" : ""}`}
                href={"/about"}
              >
                About
              </Link>
              <Link
                style={{ textAlign: "center" }}
                className={`w-[110px] ${
                  path === "/start-campaign" ? "font-bold active w-[160px]" : ""
                }`}
                href={"/start-campaign"}
              >
                Start Campaign
              </Link>
              <Link
                className={`${path === "/blogs" ? "font-bold active" : ""}`}
                href={"/blogs"}
              >
                Blogs
              </Link>
              <Link
                className={`${path === "/contact" ? "font-bold active" : ""}`}
                href={"/contact"}
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center gap-2">
            <Link
            style={{padding: "10px 20px"}}
              href="/contact"
              className="bg-[#F9F9F9] text-white font-[600]  md:w-[131px] h-[56px] w-full text-[16px]  rounded-lg hover:bg-gray-200 transition duration-300 active "
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
              className="p-2 text-white focus:outline-none"
            >
              {isMobileMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-0 bg-[blue-500] left-0 w-full  shadow-lg py-4 px-6 transition-all duration-300 z-50">
          <div className="flex flex-col space-y-3">
            <Link
              href="/"
              className={`font-bold text-lg py-3 ${
                path === "/" ? "text-white" : "text-gray-400"
              }`}
              onClick={toggleMobileMenu}
            >
              Home
            </Link>
            <Link
              href="/services"
              className={`font-bold text-lg py-3 ${
                isServicesActive ? "text-white" : "text-gray-400"
              }`}
              onClick={toggleMobileMenu}
            >
              Services
            </Link>
            <Link
              href="/about"
              className={`font-bold text-lg py-3 ${
                path === "/about" ? "text-white" : "text-gray-400"
              }`}
              onClick={toggleMobileMenu}
            >
              About
            </Link>
            <Link
              href="/start-campaign"
              className={`font-bold text-lg py-3 ${
                path === "/start-campaign" ? "text-white" : "text-gray-400"
              }`}
              onClick={toggleMobileMenu}
            >
              Start Campaign
            </Link>
            <Link
              href="/blogs"
              className={`font-bold text-lg py-3 ${
                path === "/blogs" ? "text-white" : "text-gray-400"
              }`}
              onClick={toggleMobileMenu}
            >
              Blogs
            </Link>
            <Link
              href="/contact"
              className={`font-bold text-lg py-3 ${
                path === "/contact" ? "text-white" : "text-gray-400"
              }`}
              onClick={toggleMobileMenu}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
