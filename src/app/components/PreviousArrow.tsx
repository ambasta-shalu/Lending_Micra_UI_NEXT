import React from "react";
import { BiLeftArrowAlt } from "react-icons/bi";

interface IPreviousArrow {
  onClick?: () => void;
  isTestimonial: boolean;
}

const PreviousArrow = ({ onClick, isTestimonial }: IPreviousArrow) => {
  return (
    <div
      className={
        isTestimonial
          ? "prev-slider-button-secondary"
          : "prev-slider-button-primary"
      }
    >
      <div className=" rounded-full flex cursor-pointer">
        <BiLeftArrowAlt className="text-3xl" onClick={onClick} />
      </div>
    </div>
  );
};

export default PreviousArrow;
