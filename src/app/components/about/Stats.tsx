import React from "react";
import BannerCard from "../home/BannerCard";
import Image from "next/image";
import company1 from "../../../../public/images/image 65.png";
import company2 from "../../../../public/images/image 66.png";
import company3 from "../../../../public/images/image 67.png";
import company4 from "../../../../public/images/image 68.png";
import company5 from "../../../../public/images/image 69.png";

const Stats = () => {
  return (
    <>
      <section className="h-[660px]">
        <div className="bg-lightpink h-[485px]">
          <div className="mx-96 w-72 pt-20">
            <p className=" text-black text-xl font-normal uppercase ml-80 w-36">
              <span
                className="inline-block text-center pl-3 py-2 pr-1 
        rounded-full bg-yellowbg text-black"
              >
                OU
              </span>
              <span className="-ml-1 ">R STATS</span>
            </p>
          </div>
          <p className="text-center text-black text-4xl font-bold font-Noto-Sans mt-5 ml-3">
            Some Numbers, We Achieved
          </p>

          <div className="divide-y-2 md:divide-y-2 lg:divide-x-2 lg:divide-y-0 divide-black flex flex-col lg:flex-row items-center md:gap-16 lg:gap-16 sm:gap-0 justify-center mt-10 ">
            <BannerCard
              amount="15,654 +"
              title="Campaigns"
              image="/images/campaigns.png"
            />
            <div className="lg:pl-6 md:pl-6 sm:pl-0 sm:mt:16">
              <BannerCard
                amount="$302 Million +"
                title="Raised"
                image="/images/moneyRaised.png"
              />
            </div>
            <div className="ml-1">
              <BannerCard
                amount="8.8 Million +"
                title="Donations"
                image="/images/donations.png"
              />
            </div>
          </div>

          <div className="divide-y-1 md:divide-y-1 lg:divide-x-2 lg:divide-y-0 divide-black flex flex-col lg:flex-row items-center md:gap-12 lg:gap-12 sm:gap-0 justify-center mt-20 pb-12 -ml-20 mb-20">
            <BannerCard
              amount="345 +"
              title="Registered NGO"
              image="/images/registeredNGO.svg"
            />
            <div className="lg:pl-5 md:pl-5 sm:pl-0 sm:mt:16">
              <BannerCard
                amount="$502 Million +"
                title="Invest"
                image="/images/Investicon.svg"
              />
            </div>
            <div className="ml-8">
              <BannerCard
                amount="12,00 +"
                title="Fund"
                image="/images/Fund.svg"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-between  gap-16 pb-4 mx-14 my-10">
          <Image src={company1} alt="image-65" height={150} width={150} />

          <Image src={company4} alt="image-65" height={150} width={150} />
          <Image src={company5} alt="image-65" height={150} width={150} />
          <Image src={company2} alt="image-65" height={150} width={150} />
          <Image src={company3} alt="image-65" height={150} width={150} />
        </div>
      </section>
    </>
  );
};

export default Stats;
