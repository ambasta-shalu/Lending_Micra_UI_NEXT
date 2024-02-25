"use client";
import React from "react";
import Slider from "react-slick";


import NextArrow from "./NextArrow";
import PreviousArrow from "./PreviousArrow";

const CustomSlider = ({isTestimonial}:{isTestimonial:boolean}) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow isTestimonial={isTestimonial}/>,
    prevArrow: <PreviousArrow isTestimonial={isTestimonial}/>,
  };
  return (
    <div>
      <Slider {...settings}>
      <h1>Lending Micra</h1>
            <h1>Gaurav</h1>
            <h1>Ashish</h1>
            <h1>Aman</h1>
            <h1>Chaitanya</h1>
            <h1>Anubha</h1>
            <h1>Syed</h1>
            <h1>Harish Gundu</h1>
      </Slider>
    </div>
  );
};

export default CustomSlider;
