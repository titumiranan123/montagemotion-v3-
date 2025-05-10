"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import useService from "@/src/hook/useService";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", title: "Home" },
    { href: "/works", title: "Works" },
    { href: "/services", title: "Services" },

    { href: "/blogs", title: "Blogs" },
    { href: "/about", title: "About" },
    { href: "/contact", title: "Contact" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };
  const { data: servicesData, isLoading } = useService();
  return (
    <header className=" ">
      <div className="container mx-auto    py-4">
        <nav className="flex justify-between items-center relative">
          {/* Logo */}
          <Link href="/" className="flex items-center h-[80px]">
            <div className="relative h-8 w-32 md:h-10 md:w-40">
              <Image
                src="/assets/logo.svg"
                alt="Company Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center  ">
            <div className="flex  justify-center rounded-xl bg-[#58585833] bg-opacity-50 backdrop-blur-md items-center p-2 text-[#DBDBDB] gap-5">
              <Link href={"/"}>Home</Link>
              <Link href={"/works"}>Works</Link>
              <div className="group  bg-red-500 cursor-pointer py-2 px-4 rounded-md">
                Services
                <div className=" w-[1000px] absolute top-full -left-64 mt-1 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300 ease-in-out transform translate-y-2 group-hover:translate-y-0 z-50">
                  <div className="bg-white shadow-xl rounded-lg p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 border border-gray-100">
                    {servicesData?.map((service:any) => (
                      <a
                        key={service.id}
                        href={service.href}
                        className="flex items-start space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                      >
                        <div className="flex-shrink-0">
                          <img
                            src={service.image}
                            alt={service.title}
                            className="w-8 h-8 object-cover rounded-md"
                          />
                        </div>
                        <div>
                          <h3 className="text-sm text-gray-900">
                            {service.title}
                          </h3>
                          <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                            {service.description}
                          </p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <Link href={"/blogs"}>Blogs</Link>
              <Link href={"/about"}>About</Link>
              <Link href={"/contact"}>Contact</Link>
            </div>
          </div>
          {/* Contact Info */}
          <div className="hidden lg:flex  items-center gap-2 ">
            <div className="relative w-8 h-8">
              <Image
                src="/assets/Call Icon.png"
                alt="call"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-[#DBDBDB] text-sm font-medium hidden xl:block">
              +8801786546949
            </p>
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
        <div className="lg:hidden absolute top-full left-0 w-full bg-[#1a1a1a] shadow-lg py-4 px-6 transition-all duration-300">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <div key={link.href} onClick={toggleMobileMenu}>
                <Link
                  href={link.href}
                  className="font-bold text-lg py-3"
                  title={link.title}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
