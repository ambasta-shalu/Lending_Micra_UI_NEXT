import Image from "next/image";
import React from "react";
import DonateTable from "./DonateTable";
import Button from "./buttons";
import InvestTable from "./InvestTable";

type CardProps = {
  title: string;
  by: string;
  image: string;
  requiredAmount: number;
  goalAmount?: number;
  raisedAmount?: number;
  investedAmount?: number;
  disbursed?: string;
  interestRate?: string;
  period?: string;
  investors?: string;
  remainingdays?: string;
  supporters?: number;
  isDonate: boolean;
};

const Card = (props: CardProps) => {
  return (
    <div>
      <div className="pl-6">
        <div className="rounded overflow-hidden shadow-6xl xl:px-4 xl:py-4 2xl:px-6 bg-white hover:shadow-7xl cursor-pointer ">
          <div className="relative">
            <Image
              src={props.image}
              alt="Card-Image"
              height={250}
              width={400}
              className="w-full xl:h-[170px] 2xl:h-[220px]"
            ></Image>
          </div>
          {props.isDonate ? (
            <div className="font-bold xl:text-[12px] 2xl:text-[14px] bg-yellowbg -mt-4 absolute text-center pl-2 pr-2 py-1">
              <h6>Tax Benefits</h6>
            </div>
          ) : (
            <div></div>
          )}
          <div className="font-bold xl:text-[20px] xl:leading-5 2xl:text-2xl text-black xl:mt-4 font-Roboto-Slab xl:h-12 2xl:h-16 overflow-hidden">
            <h1>{props.title}</h1>
          </div>
          <div className="flex justify-between xl:mt-1">
            <p className="xl:text-[12px]">
              By:
              <span className="font-bold xl:text-[12px] 2xl:text-[14px] text-black font-Noto-Sans">
                {props.by}
              </span>
            </p>
            {props.isDonate && (
              <h5 className="text-red-500 font-bold xl:text-[12px] 2xl:text-[14px]">
                2 days left
              </h5>
            )}
          </div>
          <div className="my-4">
            {props.isDonate ? (
              <DonateTable
                goal={props.goalAmount}
                raised={props.raisedAmount}
              />
            ) : (
              <InvestTable
                requiredAmount={props.requiredAmount}
                disbursed={props.disbursed}
                interestRate={props.interestRate}
                period={props.period}
                investedAmount={props.investedAmount}
              />
            )}
          </div>
          <div className="flex justify-between xl:mt-2 xl:mb-1">
            {props.isDonate ? (
              <Button type="secondary" href="/donate/1">
                Donate Now
              </Button>
            ) : (
              <Button type="tertiary" href="/invest/1">
                Invest Now
              </Button>
            )}
            <div className="flex mt-4 lg:mt-2">
              <div className="relative mt-1 mr-1">
                <Image
                  src="/images/supporter.png"
                  alt="supporter-icon"
                  height={20}
                  width={20}
                  className="xl:h-[14px] xl:w-[16px]"
                ></Image>
              </div>
              {props.isDonate ? (
                <div className="xl:text-[12px] xl:mt-[3px]">
                  <span>{props.investors}</span> supporters
                </div>
              ) : (
                <div className="xl:text-[12px] xl:mt-[3px]">
                  <span>{props.investors}</span> Investor
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
