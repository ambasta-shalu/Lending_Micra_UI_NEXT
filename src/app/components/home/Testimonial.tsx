"use client";
import React, { useRef } from "react";
import Slider from "react-slick";
import NextArrow from "../NextArrow";
import PreviousArrow from "../PreviousArrow";
import { testimonialData } from "../../../../public/testimonialData";
import Testimonials from "../Testimonial";
import Image from "next/image";

interface ISlider {
  slickNext: () => void;
  slickPrev: () => void;
}
const Testimonial = () => {
  const sliderRef = useRef<ISlider>(null);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: (
      <NextArrow
        onClick={() => sliderRef.current?.slickNext?.()}
        isTestimonial={true}
      />
    ),
    prevArrow: (
      <PreviousArrow
        onClick={() => sliderRef.current?.slickPrev?.()}
        isTestimonial={true}
      />
    ),

    responsive: [
      {
        breakpoint: 1288,
        settings: {
          slidesToShow: 1,
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
    <div className=" bg-f4feff py-14">
      <div className="grid grid-cols-4">
        <div className="flex justify-center">
          <Image
            src="/images/quoteLeft.svg"
            alt="quote-right"
            height={105}
            width={141.5}
          ></Image>
        </div>
        <div className="flex justify-center col-span-2">
          <div>
            <div className="flex justify-center">
              <p className=" font-Noto-Sans text-xl">
                <span
                  className="inline-block text-center px-5 py-2  pr-1 
       rounded-full bg-yellowbg text-black"
                >
                  TE
                </span>
                <span className="-ml-1 ">STIMONIALS</span>
              </p>
            </div>
            <div className="text-center text-black xl:text-[40px] font-bold ">
              Trusted by Professionals
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <Image
            src="/images/quoteRight.svg"
            alt="quote-right"
            height={105}
            width={141.5}
          ></Image>
        </div>
      </div>
      <div className="testimonials">
        <Slider {...settings}>
          {testimonialData.map((element, index) => (
            <div key={index} className="testimonial-items">
              <Testimonials {...element} />
            </div>
          ))}
        </Slider>
      </div>
      <div className=" mt-7">
        <div className="flex justify-center my-4">
          <Image
            src="/images/author01.png"
            alt="props-author-image"
            height="69"
            width="69"
            className="mx-4 border-2 rounded-full border-yellowbg"
          />

          <Image
            src="/images/author02.png"
            alt=""
            height="69"
            width="69"
            className="mx-4"
          />

          <Image
            src="/images/author03.png"
            alt=""
            height="69"
            width="69"
            className="mx-4"
          />

          <Image
            src="/images/author04.png"
            alt=""
            height="69"
            width="69"
            className="mx-4"
          />

          <Image
            src="/images/author05.png"
            alt=""
            height="69"
            width="69"
            className="mx-4"
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;

{
  /* <div className="flex justify-center">
<div className="w-[50px] h-[50px] bg-amber-300 rounded-full mt-[113px]">
  <p className="text-black text-[20px] font-normal uppercase pt-2 ml-5">
    Testimonials
  </p>
</div>
</div>
<div className="text-center text-black text-[40px] font-bold ">
  Trusted by Professionals
</div>


<div>
<Slider {...settings}>
 {testimonialData.map((el, index) => (
      <div key={index}>
        <Testimonials {...el} />
      </div>
    ))}
  </Slider>
  </div> */
}
