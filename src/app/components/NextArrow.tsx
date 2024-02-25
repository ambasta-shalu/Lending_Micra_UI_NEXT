import React from "react";
import { BiRightArrowAlt } from "react-icons/bi";

interface INextArrow {
  onClick?: () => void;
  isTestimonial: boolean;
}

const NextArrow = ({ onClick, isTestimonial }: INextArrow) => {
  return (
    <div
      className={
        isTestimonial
          ? "next-slider-button-secondary"
          : "next-slider-button-primary"
      }
    >
      <button className=" rounded-full flex" onClick={onClick}>
        <BiRightArrowAlt className="text-3xl" />
      </button>
    </div>
  );
};

export default NextArrow;
