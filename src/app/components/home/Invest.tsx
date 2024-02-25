"use client";
import React, { useRef } from "react";
import Slider from "react-slick";
import NextArrow from "../NextArrow";
import PreviousArrow from "../PreviousArrow";
import { investData } from "../../../../public/investData";
import Card from "../Card";
import Link from "next/link";
import { AiFillCaretRight } from "react-icons/ai";

interface ISlider {
  slickNext: () => void;
  slickPrev: () => void;
}

const Invest = () => {
  const sliderRef = useRef<ISlider>(null);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3.08,
    slidesToScroll: 1,
    nextArrow: (
      <NextArrow
        onClick={() => sliderRef.current?.slickNext?.()}
        isTestimonial={false}
      />
    ),
    prevArrow: (
      <PreviousArrow
        onClick={() => sliderRef.current?.slickPrev?.()}
        isTestimonial={false}
      />
    ),

    responsive: [
      {
        breakpoint: 1288,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container-fluid donatebgcolor">
      <div className="bg-[url('/images/investRectangle.svg')]   bg-[length:length:300px] bg-[position:right_0px_top_0px] bg-no-repeat">
        <section className="mx-32">
          <div className="flex flex-row mt-10">
            <div className=" text-center lg:text-left lg:basis-1/2 basis-0 ">
              <p className=" font-Noto-Sans text-xl">
                <span
                  className="inline-block text-center px-5 py-2 pr-1 
   rounded-full bg-yellowbg text-black"
                >
                  IN
                </span>
                <span className="-ml-1 ">VEST</span>
              </p>
              <h1 className="xl:text-[28px] 2xl:text-[40px] font-bold xl:leading-8 2xl:leading-10 font-Roboto-Slab">
                {"It's a loan,"}
                <br /> not a donation.
              </h1>
            </div>
          </div>
          <div className="flex mt-2 justify-between">
            <div className="flex">
              <p className="font-Noto-Sans xl:text-[15px] 2xl:text-[20px]">
                Allowing you to cycle your money and create a personal impact{" "}
                <br /> across the world. Plus, you can withdraw your funds at
                any time.
              </p>
            </div>
          </div>
          <div className="mt-2">
            <Slider {...settings}>
              {investData.map((element, index) => (
                <div key={index}>
                  <Card {...element} isDonate={false} />
                </div>
              ))}
            </Slider>
          </div>
          <div className="flex justify-center mt-4 ">
            <Link href="/invest" className=" text-btn-bg-color font-bold">
              <p className="flex items-center gap-1 hover:bg-graybg">
                View All
                <AiFillCaretRight />
              </p>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Invest;
