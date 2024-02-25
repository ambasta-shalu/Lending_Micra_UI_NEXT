import React from "react";
import { FiCheck } from "react-icons/fi";
const Progress = ({
  step,
  prevStep,
  nextStep,
}: {
  step: number;
  prevStep: () => void;
  nextStep: () => void;
}) => {
  return (
    <div className=" bg-white rounded-2xl shadow-3xl pb-11 ">
      <div className="bg-pinkredbg flex justify-center items-center rounded-tl-2xl rounded-tr-2xl ">
        <p className="text-black text-6px sm:text-[9px] md:text-[14px] lg:text-[17px] xl:text-[20px] font-bold py-6 font-Roboto-Slab">
          Three Simple Steps
        </p>
      </div>
      <article className="flex flex-col  mt-10 mx-2">
        <div className="flex gap-4 relative">
          <div
            className={
              step > 0
                ? "w-12 h-12 rounded-full bg-yellowbg flex justify-center items-center px-4"
                : "w-12 h-12 rounded-full bg-yellowbg flex justify-center items-center px-6"
            }
          >
            <p className="text-lg font-bold">
              {step > 0 ? <FiCheck className="text-lg" /> : "1"}
            </p>
          </div>
          <p className="flex justify-center items-center flex-wrap shrink font-bold text-[12.5px] xl:text-[18px] font-Noto-Sans">
            Organisation Basic Info
          </p>
          {step == 0 && (
            <div className="bg-white p absolute -right-5 top-3 rounded-r-3xl w-4 h-8 pt-2 pl-1">
              <div className="bg-yellowbg rounded-full rounded-l-3xl w-2 h-4" />
            </div>
          )}
        </div>
        <hr
          className={
            step > 0
              ? "w-1 -mt-6 xl:-mt-4 2xl:mt-0 h-24 sm:h-24 md:h-24 lg:h-24 xl:h-20 bg-yellowbg ml-[22px] border-2 border-yellowbg"
              : "w-1 -mt-6 xl:-mt-4 2xl:mt-0 h-24 sm:h-24 md:h-24 lg:h-24 xl:h-20 bg-neutral-200 ml-[22px]"
          }
        />
        <div className="flex gap-4 relative">
          <div
            className={
              step > 0
                ? "w-12 h-12 rounded-full bg-yellowbg flex justify-center items-center px-6"
                : "w-12 h-12 rounded-full bg-neutral-200 flex justify-center items-center px-6"
            }
          >
            <p className="text-lg font-bold">
              {step > 1 ? <FiCheck className="text-lg" /> : "2"}
            </p>
          </div>
          <p className="flex justify-center items-center font-bold text-[12.5px] xl:text-[18px] font-Noto-Sans">
            Contact Person Details
          </p>
          {step == 1 && (
            <div className="bg-white p absolute -right-5 top-3 rounded-r-3xl w-4 h-8 pt-2 pl-1">
              <div className="bg-yellowbg rounded-full rounded-l-3xl w-2 h-4" />
            </div>
          )}
        </div>
        <hr
          className={
            step > 1
              ? "w-1 -mt-6 xl:-mt-4 2xl:mt-0 h-24 sm:h-24 md:h-24 lg:h-24 xl:h-20 bg-yellowbg ml-[22px] border-2 border-yellowbg"
              : "w-1 -mt-6 xl:-mt-4 2xl:mt-0 h-24 sm:h-24 md:h-24 lg:h-24 xl:h-20 bg-neutral-200 ml-[22px]"
          }
        />
        <div className="flex gap-4 relative">
          <div
            className={
              step > 1
                ? "w-12 h-12 rounded-full bg-yellowbg flex justify-center items-center px-6"
                : "w-12 h-12 rounded-full bg-neutral-200 flex justify-center items-center px-6"
            }
          >
            <p className="text-lg font-bold">3</p>
          </div>

          <p className="flex justify-center items-center font-bold text-[12.5px] xl:text-[18px] font-Noto-Sans">
            Organisation Profile
          </p>
          {step == 2 && (
            <div className="bg-white p absolute -right-5 top-3 rounded-r-3xl w-4 h-8 pt-2 pl-1">
              <div className="bg-yellowbg rounded-full rounded-l-3xl w-2 h-4" />
            </div>
          )}
        </div>
      </article>
    </div>
  );
};

export default Progress;
