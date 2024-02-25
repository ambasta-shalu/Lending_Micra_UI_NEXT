import Image from "next/image";
import React from "react";
import company1 from "../../../../public/images/image 65.png";
import company2 from "../../../../public/images/image 66.png";
import company3 from "../../../../public/images/image 67.png";
import company4 from "../../../../public/images/image 68.png";
import company5 from "../../../../public/images/image 69.png";
import { AiFillCaretRight } from "react-icons/ai";

const EnrollNgo = () => {
  return (
    <>
      <div className="container-fluid bg-bgRectangle ">
        <div className="grid grid-cols-4 bg-[url('/images/ngo1.svg'),_url('/images/ngo2.svg')] xl:bg-[length:370px,_370px] 2xl:bg-[length:400px,_400px] bg-[position:left_0px_top_-30px,_right_0px_top_5px] bg-no-repeat">
          <div className="relative">
            {/* <Image
            src="/images/ngo1.svg"
            alt="enroll-ngo-background"
            height={450}
            width={450}
            className="absolute -left-5 xl:top-3 2xl:-top-14 "
          ></Image> */}
          </div>
          <div className="container flex flex-col m-auto pt-16 pb-16 col-span-2">
            <div className="font-bold leading-line xl:text-[34px] 2xl:text-[40px] text-center">
              <h1>
                It’ll take only few minutes. Just tell <br /> us a few details
                about your NGO!. <br /> Enroll your NGO now!
              </h1>
            </div>
            <div>
              <button className="group hover:bg-btn-bg-color2 bg-00368c w-48 h-12 text-white text-base rounded font-bold flex justify-center m-auto mt-8 pt-3">
                <p className="flex items-center justify-center group-hover:-translate-x-1 group-hover:-scale-10 duration-200">
                  Enroll Your NGO!
                  <AiFillCaretRight className="invisible group-hover:visible" />
                </p>
              </button>
            </div>
          </div>
          <div>
            {/* <Image
            src="/images/ngo2.svg"
            alt="enroll-ngo-background"
            height={400}
            width={400}
            className="relative xl:top-12 2xl:top-2 2xl:left-12  "
          ></Image> */}
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-16 pb-4 relative">
        <Image
          src={company1}
          alt="image-65"
          height={150}
          width={150}
          className="w-[226px] h-[174px]"
        ></Image>
        <Image
          src={company4}
          alt="image-65"
          height={150}
          width={150}
          className="w-[206px] h-[206px]"
        ></Image>
        <Image
          src={company5}
          alt="image-65"
          height={150}
          width={150}
          className="w-[201px] h-[201px]"
        ></Image>
        <Image
          src={company2}
          alt="image-65"
          height={150}
          width={150}
          className="w-[160px] h-[160px]"
        ></Image>
        <Image
          src={company3}
          alt="image-65"
          height={150}
          width={150}
          className="w-[183px] h-[183px]"
        ></Image>
      </div>
    </>
  );
};

export default EnrollNgo;
