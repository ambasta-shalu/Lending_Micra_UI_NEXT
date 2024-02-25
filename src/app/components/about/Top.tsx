import Image from "next/image";
import React from "react";
import ImageTransform from "./ImageTransform";

const Top = () => {
  return (
    <>
      <div className="mx-32 mt-14">
        <div className="flex justify-between ">
          <ImageTransform styles="">
            <Image
              src="/about/Left.png"
              width={255}
              height={255}
              alt="left"
              className="rounded-full mb-11 "
            />
          </ImageTransform>

          <div className="text-center mt-20 ml-8 w-11/12">
            <p className="text-black text-6xl font-bold font-Roboto-Slab">
              To make{" "}
              <span className="text-cyan-600 text-6xl font-bold font-Roboto-Slab">
                online
              </span>
              <span className="text-black text-6xl font-bold font-Roboto-Slab">
                {" "}
                giving the{" "}
              </span>
            </p>
            <p className="text-black text-6xl font-bold font-Roboto-Slab">
              most
              <span className="text-cyan-600 text-6xl font-bold font-Roboto-Slab">
                {" "}
                trusted
              </span>{" "}
              way of helping
            </p>
            <p className="text-black text-6xl font-bold font-Roboto-Slab">
              someone in need
            </p>
          </div>
          <div>
            <ImageTransform styles="">
              <Image
                src="/about/Right.png"
                alt="Right"
                width={302}
                height={282}
                className="origin-top-left rounded-lg ml-20"
              />
            </ImageTransform>
          </div>
        </div>

        <div className="flex justify-between mb-10 mr-16">
          <div>
            <ImageTransform styles=" flex justify-center items-center">
              <Image
                src="/about/LeftDown.png"
                alt="Left"
                width={231}
                height={231}
                className="rounded-lg mt-6"
              />
            </ImageTransform>
          </div>

          <div>
            <ImageTransform styles="">
              <Image
                src="/about/Mid (2).png"
                alt="Mid"
                width={318}
                height={318}
                className="rounded-lg  ml-5 mt-16"
              />
            </ImageTransform>
          </div>

          <div>
            <ImageTransform styles="">
              <Image
                src="/about/Star.png"
                alt="Star"
                width={236}
                height={236}
                className="rounded-lg "
              />
            </ImageTransform>
          </div>
        </div>
      </div>
    </>
  );
};

export default Top;
