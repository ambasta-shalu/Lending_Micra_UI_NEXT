import React from "react";
import CircularBar from "./CircularBar";

const InvestTable = ({
  requiredAmount = 1,
  investedAmount = 1,
  disbursed = "1",
  interestRate = "2.5",
  period = "6",
}: {
  requiredAmount?: number;
  investedAmount?: number;
  disbursed?: string;
  interestRate?: string;
  period?: string;
}) => {
  return (
    <div className="grid grid-cols-3">
      <div className=" border-b-2 border-gray-300 pb-4">
        <p className="text-bold xl:text-[10px] 2xl:text-[12px] ">
          Required Amount
        </p>
        <p className="2xl:text-[16px] xl:text-[14px] xl:mt-2 font-bold">
          {requiredAmount}
        </p>
      </div>
      <div className=" border-l-2 border-gray-300  border-b-2 pb-4  ">
        <p className="text-bold xl:text-[10px] 2xl:text-[12px] xl:ml-2">
          Invested Amount
        </p>
        <p className="text-green-500  2xl:text-[16px] xl:text-[14px] xl:mt-2 xl:ml-2 font-bold">
          {investedAmount}
        </p>
      </div>
      <div className="border-l-2 border-gray-300  border-b-2">
        <p className="text-bold xl:text-[10px] 2xl:text-[12px] xl:ml-2">
          Disbursed
        </p>
        <p className="2xl:text-[16px] xl:text-[14px] xl:mt-2 xl:ml-2 font-bold">
          {disbursed}
        </p>
      </div>

      <div className="pt-4">
        <p className="text-bold xl:text-[10px] 2xl:text-[12px]">
          Interest Rate
        </p>
        <p className="2xl:text-[16px] xl:text-[14px] xl:mt-2 font-bold">
          {interestRate}%
        </p>
      </div>
      <div className="border-l-2 border-gray-300 pt-4">
        <p className="text-bold xl:text-[10px] 2xl:text-[12px] xl:ml-2">
          Period
        </p>
        <p className="2xl:text-[16px] xl:text-[14px] xl:mt-2 xl:ml-2 font-bold">
          {period} months
        </p>
      </div>
      <div className="pl-4 border-l-2 border-gray-300 pt-4 ">
        <CircularBar
          progress={Math.ceil((investedAmount / requiredAmount) * 100)}
          height="50"
          width="50"
        />
      </div>
    </div>
  );
};

export default InvestTable;
