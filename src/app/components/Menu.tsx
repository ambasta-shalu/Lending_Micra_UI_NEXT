"use client";
import Navlink from "./header/Navlink";
import Link from "next/link";
import { IoMdClose } from "react-icons/io";
import { AiFillCaretRight } from "react-icons/ai";
import Header from "./header/Header";
import { useEffect } from "react";
const Menu = ({
  showMenu,
  showMenuHandler,
}: {
  showMenu: boolean;
  showMenuHandler: (showMenu: boolean) => void;
}) => {
  useEffect(() => {
    if (showMenu) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showMenu]);
  return (
    <main className="w-full h-full  fixed top-[85px] overflow-y-scroll  md:top-0 left-0 bg-blurbg z-50">
      <div className="w-full md:w-1/4 h-full absolute right-0 bg-white">
        <div className=" h-full bg-fadedyellow md:bg-white md:bg-menuBg bg-no-repeat bg-right-top md:bg-[length:200px_250px] menu pb-[85px] md:pb-0">
          <button
            onClick={() => showMenuHandler(!showMenu)}
            className="hidden md:block bg-yellowbg rounded-full py-2 px-2 ml-11 mt-6 font-bold hover:shadow-5xl w-fit"
          >
            <IoMdClose className="text-base" />
          </button>
          <ul className="ml-12 md:ml-16 pl-1 list-disc pt-5  space-y-2">
            <li
              onClick={() => showMenuHandler(!showMenu)}
              className="font-bold text-2xl leading-10 hover:bg-yellowbg w-fit hover:list-none hover:-ml-5 hover:pl-7"
            >
              <Link href="/">
                <p className="group flex items-center gap-1">
                  <span className="group-hover:-translate-x-5 duration-200">
                    Home
                  </span>
                  <AiFillCaretRight className="invisible group-hover:visible" />
                </p>
              </Link>
            </li>
            <li
              onClick={() => showMenuHandler(!showMenu)}
              className="font-bold text-2xl leading-10 hover:bg-yellowbg w-fit hover:list-none hover:-ml-5 hover:pl-7"
            >
              <Link href="/donate">
                <p className="group flex items-center gap-1">
                  <span className="group-hover:-translate-x-5 duration-200">
                    Donate
                  </span>
                  <AiFillCaretRight className="invisible group-hover:visible" />
                </p>
              </Link>
            </li>
            <li
              onClick={() => showMenuHandler(!showMenu)}
              className="font-bold text-2xl leading-10 hover:bg-yellowbg w-fit hover:list-none hover:-ml-5 hover:pl-7 "
            >
              <Link href="/invest">
                <p className="group flex items-center">
                  <span className="group-hover:-translate-x-5 duration-200">
                    Invest
                  </span>

                  <AiFillCaretRight className="invisible group-hover:visible" />
                </p>
              </Link>
            </li>
            <li
              onClick={() => showMenuHandler(!showMenu)}
              className="font-bold text-2xl leading-10 hover:bg-yellowbg w-fit hover:list-none hover:-ml-5 hover:pl-7"
            >
              <Link href="/about">
                <p className="group flex items-center gap-1">
                  <span className="group-hover:-translate-x-5 duration-200">
                    About Us
                  </span>
                  <AiFillCaretRight className="invisible group-hover:visible" />
                </p>
              </Link>
            </li>
            <li
              onClick={() => showMenuHandler(!showMenu)}
              className=" font-bold text-2xl leading-10 hover:bg-yellowbg w-fit hover:list-none hover:-ml-5 hover:pl-8"
            >
              <Link href="contact-us">
                <p className="group flex items-center gap-1">
                  <span className="group-hover:-translate-x-5 duration-200">
                    Contact Us
                  </span>
                  <AiFillCaretRight className="invisible group-hover:visible" />
                </p>
              </Link>
            </li>
            <li
              onClick={() => showMenuHandler(!showMenu)}
              className="font-bold text-2xl leading-10 hover:bg-yellowbg w-fit hover:list-none hover:-ml-5 hover:pl-7"
            >
              <Link href="faq">
                <p className="group flex items-center gap-1">
                  <span className="group-hover:-translate-x-5 duration-200">
                    FAQ
                  </span>
                  <AiFillCaretRight className="invisible group-hover:visible" />
                </p>
              </Link>
            </li>
          </ul>

          <div className="mx-5 lg:mx-8 mt-[90px] lg:mt-[0px] ">
            <button
              onClick={() => showMenuHandler(!showMenu)}
              className="group bg-00368c w-full h-12 text-white text-base rounded font-bold hover:bg-btn-bg-color2"
            >
              <p className=" flex items-center justify-center gap-1 ">
                <span className="group-hover:-translate-x-1 group-hover:-scale-10 duration-200">
                  Enroll Your NGO!
                </span>
                <AiFillCaretRight className="group-hover:translate-x-1 duration-200  invisible group-hover:visible " />
              </p>
            </button>

            <div className="grid grid-cols-2 gap-[18px] xl:mt-4 mt-5">
              <Link
                href="/login"
                className="w-full group text-white border border-homeblue bg-homeblue rounded-full pl-6 pr-3 py-2 lg:px-8 lg:py-2  xl:px-6 xl:py-2 2xl:pl-10 2xl:pr-6  transition ease-in-out duration-300 hover:text-white hover:bg-homeblue2 hover:border-homeblue2 flex w-fit items-center justify-center"
                onClick={() => showMenuHandler(!showMenu)}
              >
                <span className="group-hover:-translate-x-1 group-hover:-scale-10 duration-200">
                  Login
                </span>
                <AiFillCaretRight className="hidden group-hover:block group-hover:translate-x-1 duration-200 text-white" />
              </Link>
              <Link
                href="/signup"
                className="w-full group text-homeblue border border-homeblue rounded-full pl-3 py-2 lg:px-8 lg:py-2 xl:px-3 2xl:pl-8 2xl:pr-6  xl:py-2 bg-white transition ease-in-out duration-300 hover:text-white hover:bg-homeblue2 hover:border-homeblue2 flex w-fit items-center justify-center"
                onClick={() => showMenuHandler(!showMenu)}
              >
                <span className="group-hover:-translate-x-1 group-hover:-scale-10 xl:text-[12px] 2xl-text-[16px] duration-200 font-bold">
                  Register Now
                </span>
                <AiFillCaretRight className="hidden group-hover:block group-hover:-translate-x-1 duration-200 text-white" />
              </Link>
            </div>
            <div className="font-bold flex justify-between text-00368c mt-[55px] xl:mb-4 xl:mt-8 xl:pb-8">
              <p>
                <Link
                  href={"/terms"}
                  onClick={() => showMenuHandler(!showMenu)}
                >
                  <p className="flex items-center hover:bg-graybg">
                    Terms of Use
                    <AiFillCaretRight />
                  </p>
                </Link>
              </p>
              <p>
                <Link
                  href={"/privacy-policy"}
                  onClick={() => showMenuHandler(!showMenu)}
                >
                  <p className="flex items-center gap-1 hover:bg-graybg">
                    Privacy Policy
                    <AiFillCaretRight />
                  </p>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Menu;
