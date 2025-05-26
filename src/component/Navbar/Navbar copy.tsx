"use client"

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [open, setOpen] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const toggleNav = () => {
    setOpen(!open);
  };
  const pathname = usePathname();

  const CustomLink = React.memo(({ href, className, title }: any) => {
    const isActive = pathname === href;
    return (
      <Link
        className={`flex openSans text-[16px] text-white my-auto justify-center items-center font-bold h-[33px] max-w-48 px-4 py-2
          ${className} ${isActive ? "rounded-[30px] bg-[#1FB5DD] flex justify-center items-center text-white" : ''}`}
        href={href}
      >
        {title}
      </Link>
    );
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const documentHeight = document.body.scrollHeight;
      const windowHeight = window.innerHeight;
      
      // Calculate how far user has scrolled (0 to 1)
      const scrollRatio = scrollPosition / (documentHeight - windowHeight);
      
      // Set a threshold for when to start transforming (e.g., 80% scrolled)
      if (scrollRatio > 0.8) {
        setIsScrolled(true);
        
        // Get the navbar and footer elements
        const navbar = document.getElementById("navbar");
        const footer = document.getElementById("footer");
        
        if (navbar && footer) {
          // Calculate position relative to footer
          const footerRect = footer.getBoundingClientRect();
          const navbarHeight = navbar.offsetHeight;
          
          // When navbar reaches footer, start transforming
          if (footerRect.top < navbarHeight) {
            const progress = 1 - (footerRect.top / navbarHeight);
            
            // Scale down and fade out
            navbar.style.transform = `scale(${1 - progress * 0.2})`;
            navbar.style.opacity = `${1 - progress * 0.5}`;
            
            // If we want to stick it to footer
            if (progress > 0.9) {
              navbar.style.position = 'absolute';
              navbar.style.bottom = '0';
              navbar.style.width = '100%';
              navbar.style.left = '0';
              navbar.style.transform = 'scale(0.8) translateY(20px)';
              navbar.style.opacity = '0.7';
            }
          }
        }
      } else {
        setIsScrolled(false);
        const navbar = document.getElementById("navbar");
        if (navbar) {
          navbar.style.transform = '';
          navbar.style.opacity = '';
          navbar.style.position = '';
          navbar.style.bottom = '';
          navbar.style.width = '';
          navbar.style.left = '';
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`relative ${pathname === "/" ? "" : ""} openSans md:py-1 lg:py-0`}>
      <nav className="flex justify-between max-w-[1240px] md:h-[120px] h-[100px] mx-auto items-center">
        <a href="/" className="logo">
          <Image src={'/assets/logo.svg'} width={140} height={20} alt="" />
        </a>
        
        <div
          id="navbar"
          className={`lg:flex justify-center w-[690px] border rounded-[42px] ms-[65px] hidden bg-[#58585833] bg-opacity-50 backdrop-blur-[36px] navShadow items-center p-[14px] text-[#DBDBDB] transition-all duration-300 ${isScrolled ? 'fixed bottom-10 left-1/2 transform -translate-x-1/2 scale-90 opacity-90' : ''}`}
        >
          <CustomLink href={"/"} className={"font-bold"} title={"Home"} />
          <CustomLink href={"/works"} className={"font-bold"} title={"Works"} />
          <CustomLink href={"/services"} className={"font-bold"} title={"Services"} />
          <CustomLink href={"/case-studies"} className={"font-bold"} title={"Case Studies"} />
          <CustomLink href={"/blogs"} className={"font-bold"} title={"Blogs"} />
          <CustomLink href={"/about"} className={"font-bold"} title={"About"} />
          <CustomLink href={"/contact"} className={"font-bold"} title={"Contact"} />
        </div>
        
        <div className="justify-center items-center lg:flex hidden gap-8">
          <Image className="" src={'/assets/Call Icon.png'} alt="call" loading="lazy" width={60} height={60} />
          <p className="text-[#DBDBDB] text-[16px] font-[400] -ms-8 -mt-[8px]">
            +8801786546949
          </p>
        </div>
        
        <div className="lg:hidden text-[#DBDBDB]">
          {open ? (
            <svg
              onClick={toggleNav}
              data-slot="icon"
              fill="#f90909"
              className={`h-12 w-12 me-3 transform transition origin-center ease-out duration-150 ${open && "rotate-180"}`}
              strokeWidth="1.5"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          ) : (
            <svg
              onClick={toggleNav}
              className={`rotate-45 h-9 w-9 transform origin-center transition ease-out ${open && "rotate-180"}`}
              data-slot="icon"
              fill="#f90909"
              strokeWidth="1.5"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
          )}
        </div>
      </nav>
      
      {!open && (
        <div className="absolute z-50 top-4 bg-[#1FB5DD] text-white w-full p-5 rounded-xl lg:hidden">
          <svg
            onClick={toggleNav}
            className={`rotate-45 flex justify-end h-9 float-end w-9 transform origin-center transition duration-150 ease-out ${open && "rotate-180"}`}
            data-slot="icon"
            fill="#f90909"
            strokeWidth="1.5"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
          <div className="flex flex-col justify-center items-center space-y-5 p-28">
            {["Home", "Works", "Services", "Blogs", "About", "Contact"].map((title, index) => (
              <div key={index} onClick={() => setOpen(!open)}>
                <CustomLink
                  href={`/${title !== "Home" ? title.toLowerCase().replace(" ", "-") : ""}`}
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