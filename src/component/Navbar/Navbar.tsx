"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const CustomLink = React.memo(
  ({
    href,
    className,
    title,
  }: {
    href: string;
    className?: string;
    title: string;
  }) => {
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
      <Link
        href={href}
        className={`flex text-white my-auto justify-center items-center font-bold h-full px-3 py-2 text-sm md:text-base
        ${className} ${
          isActive
            ? "rounded-[30px] bg-[#1FB5DD] flex justify-center items-center text-white"
            : ""
        } hover:bg-[#1FB5DD] hover:bg-opacity-30 hover:rounded-[30px] transition-colors duration-200`}
      >
        {title}
      </Link>
    );
  }
);
CustomLink.displayName = "CustomLink";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", title: "Home" },
    { href: "/works", title: "Works" },
    { href: "/services", title: "Services" },
    { href: "/case-studies", title: "Case Studies" },
    { href: "/blogs", title: "Blogs" },
    { href: "/about", title: "About" },
    { href: "/contact", title: "Contact" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <header className=" ">
      <div className="container mx-auto    py-4">
        <nav className="flex justify-between items-center">
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
            <div className="flex justify-center rounded-xl bg-[#58585833] bg-opacity-50 backdrop-blur-md items-center p-2 text-[#DBDBDB]">
              {navLinks.map((link) => (
                <CustomLink
                  key={link.href}
                  href={link.href}
                  title={link.title}
                />
              ))}
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
                <CustomLink
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
