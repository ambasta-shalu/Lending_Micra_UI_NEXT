"use client";
import React, { useRef } from "react";
import Slider from "react-slick";
import NextArrow from "../NextArrow";
import PreviousArrow from "../PreviousArrow";
import { data } from "../../../../public/donateData";
import Card from "../Card";
import Link from "next/link";
import { AiFillCaretRight } from "react-icons/ai";

interface ISlider {
  slickNext: () => void;
  slickPrev: () => void;
}

const Donate = () => {
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
      <div className="bg-[url('/images/donateSquare.svg'),_url('/images/donateRectangle.svg')]   bg-[length:length:300px,_300px] bg-[position:right_0px_top_0px,_left_0px_bottom_0px] bg-no-repeat">
        <section className="mx-32 ">
          <div className="flex flex-row mt-12">
            <div className=" text-center lg:text-left lg:basis-1/2 basis-0 ">
              <p className=" font-Noto-Sans text-xl">
                <span
                  className="inline-block text-center px-4 py-2 pr-1 
       rounded-full bg-yellowbg text-black"
                >
                  DO
                </span>
                <span className="-ml-1 ">NATE</span>
              </p>
              <h1 className="xl:text-[28px] 2xl:text-[40px] font-bold xl:leading-8 2xl:leading-10 font-Roboto-Slab">
                Every Donation you have <br /> millions of benefits for others
              </h1>
            </div>
          </div>
          <div className="flex mt-2 justify-between">
            <div className="flex">
              <p className="font-Noto-Sans xl:text-[15px] 2xl:text-[20px]">
                We provide a trusted donation channel for peoples of <br />{" "}
                worldwide to support people and organizers.
              </p>
            </div>
          </div>
          <div className="mt-2">
            <Slider {...settings}>
              {data.map((element, index) => (
                <div key={index}>
                  <Card {...element} isDonate={true} />
                </div>
              ))}
            </Slider>
          </div>
          <div className="flex justify-center mt-4 mb-6">
            <Link href="/donate" className=" text-btn-bg-color font-bold">
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

export default Donate;
