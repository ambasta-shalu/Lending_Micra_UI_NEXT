import React from "react";
import Image from "next/image";

const AboutUs = () => {
  return (
    <div className="bg-light-yellow h-[745px] ">
      <div className="mx-32 flex justify-between py-12">
        <div>
          <div className="w-[50px] h-[50px] bg-yellowbg rounded-full mt-20">
            <div className="text-black text-xl font-normal uppercase w-28 pt-2 ml-5 font-Roboto-Slab">
              About us
            </div>
          </div>
          <p className="w-[662px] text-black text-[51px] font-bold mt-1 font-Roboto-Slab">
            What we do?
          </p>
          <p className="w-[669px] text-black text-xl font-normal leading-9">
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p className="w-[669px] text-black text-xl font-normal leading-9 mt-8 mb-20">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation.
          </p>
        </div>
        <div>
          <div className="mt-14">
            <Image
              src="/about/AboutUs.png"
              alt="Mask"
              width={497}
              height={497}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
