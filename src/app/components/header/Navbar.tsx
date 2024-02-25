"use client";
import Navlink from "./Navlink";
import Menu from "../Menu";
import { useState } from "react";
import { RiMenu3Line } from "react-icons/ri";
import Link from "next/link";
import { AiFillCaretRight } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [showMenu, showMenuHandler] = useState(false);
  return (
    <>
      <div className="flex">
        <ul className="hidden md:flex md:gap-3 md:text-[12px]  lg:text-[16px] xl:gap-7 font-Noto-Sans font-normal uppercase items-center">
          <li className="">
            <Navlink href="/">Home</Navlink>
          </li>
          <li className="hover:bg-yellowbg">
            <Navlink href="/donate">Donate</Navlink>
          </li>
          <li className="hover:bg-yellowbg">
            <Navlink href="/invest">Invest</Navlink>
          </li>
          <li className="hover:bg-yellowbg">
            <Navlink href="/about">About Us</Navlink>
          </li>
        </ul>

        <Link href="/enroll-ngo" className="hidden xl:block">
          <button className=" group bg-btn-bg-color  hover:bg-btn-bg-color2 w-48 h-12 text-white text-base rounded ml-16 font-bold">
            <p className="flex items-center justify-center">
              <span className="group-hover:-translate-x-1 group-hover:-scale-10 duration-200">
                Enroll Your NGO!
              </span>
              <AiFillCaretRight className="group-hover:translate-x-1 duration-200 invisible group-hover:visible" />
            </p>
          </button>
        </Link>
        <div className="ml-4  bg-neutral-100 rounded border border-solid border-gray-border hover:shadow-4xl hover:border-1">
          <select
            name="currency"
            id="currency"
            className="h-12 font-normal text-base bg-neutral-100 cursor-pointer hover:border-5 "
          >
            <option value="inr">INR</option>
            <option value="usd">USD</option>
          </select>
        </div>
        <button
          onClick={() => showMenuHandler(!showMenu)}
          className="bg-yellowbg rounded-full py-2 px-3 ml-5 hover:shadow-5xl"
        >
          {!showMenu ? (
            <RiMenu3Line className="text-2xl" />
          ) : (
            <IoMdClose className="text-2xl" />
          )}
        </button>
        {showMenu && (
          <Menu showMenu={showMenu} showMenuHandler={showMenuHandler} />
        )}
      </div>
    </>
  );
};

export default Navbar;
