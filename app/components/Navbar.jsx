'use client'

import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useRef } from "react";

const Navbar = () => {
  const sideMenuRef = useRef();

  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  };

  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
  };

  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]">
        <Image src={assets.header_bg_color} className="w-full" alt="bg-img" />
      </div>

      <nav className=" flex items-center justify-between px-5 lg:px-8 xl:px-[8%] py-4 z-50 mt-5 border-b-[1px] border-gray-300 ">
        <a href="#top">
          <Image
            src={assets.logo}
            className="w-[100px] h-[30px]  "
            alt="logo"
          />
        </a>

        <ul
          className=" hidden md:flex gap-[30px] items-center list-none lg:gap-8 rounded-full px-5 py-4
        bg-white shadow-sm bg-opacity-50 ml-8
        "
        >
          <li>
            <a href="#top" className="font-Ovo">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="font-Ovo">
              About Me
            </a>
          </li>
          <li>
            <a href="#services" className="font-Ovo">
              Services
            </a>
          </li>
          <li>
            <a href="#work" className="font-Ovo">
              My Work
            </a>
          </li>
          <li>
            <a href="#contact" className="font-Ovo">
              Contact Me
            </a>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          <button>
            <Image
              src={assets.moon_icon}
              className="w-6 cursor-pointer"
              alt="moon-icon"
            />
          </button>

          <a
            href=""
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo"
          >
            Contact{" "}
            <Image
              src={assets.arrow_icon}
              alt="logo-icon"
              className="w-[10px] h-[10px] "
            />
          </a>
          <button className="block md:hidden ml-3" onClick={openMenu}>
            <Image
              src={assets.menu_black}
              className="w-6 cursor-pointer"
              alt="hamburger-icon"
            />
          </button>
        </div>

        {/* Mobile Menu */}

        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col  gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500"
        >
          <li>
            <div className="absolute right-6 top-6">
              <Image
                src={assets.close_black}
                className="w-5 cursor-pointer mb-10"
                onClick={closeMenu}
                alt="close button"
              />
            </div>

            <a href="#top" className="font-Ovo" onClick={closeMenu}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="font-Ovo" onClick={closeMenu}>
              About Me
            </a>
          </li>
          <li>
            <a href="#services" className="font-Ovo" onClick={closeMenu}>
              Services
            </a>
          </li>
          <li>
            <a href="#work" className="font-Ovo" onClick={closeMenu}>
              My Work
            </a>
          </li>
          <li>
            <a href="#contact" className="font-Ovo" onClick={closeMenu}>
              Contact Me
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
