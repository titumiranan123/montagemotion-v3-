"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import useService from "@/src/hook/useService";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

interface Service {
  id: string;
  href: string;
  title: string;
  description: string;
  image: string;
}

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const path = usePathname();
  const { data: servicesData } = useService();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const toggleServicesMenu = () => {
    setIsServicesOpen((prev) => !prev);
  };

  const isServicesActive = servicesData?.some((service: Service) =>
    path.startsWith(service.href)
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsMobileMenuOpen(false);
  }, [path]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? "bg-[#080B0C] shadow-md" : "bg-transparent"}`}>
      <div className="max-w-[996px] mx-auto px-4 py-4">
        <nav className="flex justify-between items-center relative">
          {/* Logo */}
          <Link href="/" className="block md:h-[60px] md:w-[151px]">
            <Image
              src="/assets/logo.svg"
              alt="Company Logo"
              width={151}
              height={56}
              priority
              className="w-auto h-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-4 text-[#DBDBDB] bg-[#58585833] bg-opacity-50 px-4 py-3 rounded-xl backdrop-blur-md">
            <Link 
              href="/" 
              className={`hover:text-white transition-colors ${path === "/" ? "active font-semibold text-white" : ""}`}
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div className="group relative cursor-pointer">
              <span
                className={`flex items-center gap-2 ${
                  isServicesActive ? "font-bold text-white" : ""
                }`}
              >
                Services <FaAngleDown className="mt-1 w-4 h-4" />
              </span>
              <div className="absolute top-6 -left-[305px] w-[900px] transform translate-y-5 group-hover:translate-y-4 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 ease-in-out z-50">
                <div className="bg-black border border-slate-500 shadow-xl rounded-lg p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-white">
                  {servicesData?.map((service: Service) => (
                    <Link
                      key={service.id}
                      href={service.href}
                      className="flex items-start gap-3 p-3 hover:bg-gray-50 hover:text-black rounded-lg transition-colors"
                    >
                      <div className="w-8 h-8 relative flex-shrink-0">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-cover rounded-md"
                        />
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold">{service.title}</h3>
                        <p className="text-sm mt-1 line-clamp-2">{service.description}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link 
              href="/about" 
              className={`hover:text-white transition-colors ${path === "/about" ? "active font-semibold text-white" : ""}`}
            >
              About
            </Link>
            <Link 
              href="/start-campaign" 
              className={`hover:text-white transition-colors ${path === "/start-campaign" ? "active font-semibold text-white" : ""}`}
            >
              Start Campaign
            </Link>
            <Link 
              href="/blogs" 
              className={`hover:text-white transition-colors ${path === "/blogs" ? "active font-semibold text-white" : ""}`}
            >
              Blogs
            </Link>
            <Link 
              href="/contact" 
              className={`hover:text-white transition-colors ${path === "/contact" ? "active font-semibold text-white" : ""}`}
            >
              Contact
            </Link>
          </div>

          {/* Contact Button */}
          <div className="hidden lg:flex items-center h-[60px]">
            <Link
              href="/contact"
              className="active text-white font-semibold text-[16px] px-5 h-[50px] flex justify-center items-center w-[130px] rounded-lg  transition-colors"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden">
            <button 
              onClick={toggleMobileMenu} 
              aria-label="Toggle menu" 
              className="p-2 text-white focus:outline-none focus:ring-2 focus:ring-white rounded-md"
            >
             
                <svg  className="h-6 w-6" fill="#fff" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
             
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Navigation Menu */}
      <div 
        className={`lg:hidden fixed inset-0 bg-[#1FB5DD] text-white z-40 px-6 pt-24 pb-10 overflow-y-auto transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div>
          <button 

            onClick={toggleMobileMenu} 
            className="absolute top-4 right-4 text-white focus:outline-none"
            aria-label="Close menu"
          >
            <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
  className="w-6 h-6 text-white"
>
  <line x1="18" y1="6" x2="6" y2="18"></line>
  <line x1="6" y1="6" x2="18" y2="18"></line>
</svg>
          </button>
        </div>
        <div className="flex flex-col space-y-6">
          <Link 
            href="/" 
            onClick={toggleMobileMenu}
            className={`py-2 border-b border-white/10 ${path === "/" ? "text-white font-bold" : "text-gray-200"}`}
          >
            Home
          </Link>

          <div className="py-2 border-b border-white/10">
            <button 
              onClick={toggleServicesMenu}
              className="flex items-center justify-between w-full"
              aria-expanded={isServicesOpen}
            >
              <span className={isServicesActive ? "font-bold text-white" : "text-gray-200"}>
                Services
              </span>
              {isServicesOpen ? (
                <FaAngleUp className="w-4 h-4" />
              ) : (
                <FaAngleDown className="w-4 h-4" />
              )}
            </button>
            <div 
              className={`pl-4 space-y-3 mt-3 overflow-hidden transition-all duration-300 ${
                isServicesOpen ? "max-h-96" : "max-h-0"
              }`}
            >
              {servicesData?.map((service: Service) => (
                <Link 
                  key={service.id} 
                  href={service.href} 
                  onClick={toggleMobileMenu}
                  className={`block py-2 ${path === service.href ? "text-white font-bold" : "text-gray-200"}`}
                >
                  {service.title}
                </Link>
              ))}
            </div>
          </div>

          <Link 
            href="/about" 
            onClick={toggleMobileMenu}
            className={`py-2 border-b border-white/10 ${path === "/about" ? "text-white font-bold" : "text-gray-200"}`}
          >
            About
          </Link>
          <Link 
            href="/start-campaign" 
            onClick={toggleMobileMenu}
            className={`py-2 border-b border-white/10 ${path === "/start-campaign" ? "text-white font-bold" : "text-gray-200"}`}
          >
            Start Campaign
          </Link>
          <Link 
            href="/blogs" 
            onClick={toggleMobileMenu}
            className={`py-2 border-b border-white/10 ${path === "/blogs" ? "text-white font-bold" : "text-gray-200"}`}
          >
            Blogs
          </Link>
          <Link 
            href="/contact" 
            onClick={toggleMobileMenu}
            className={`py-2 border-b border-white/10 ${path === "/contact" ? "text-white font-bold" : "text-gray-200"}`}
          >
            Contact
          </Link>

          <Link
            href="/contact"
            onClick={toggleMobileMenu}
            className="mt-6 bg-[#F9F9F9] text-black font-semibold text-center text-[16px] px-5 py-3 rounded-lg hover:bg-gray-200 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;