import React from "react";
import CircularBar from "./CircularBar";

type DonateTableProps = {
  goal?: number;
  raised?: number;
};

const DonateTable = ({ goal = 1, raised = 1 }: DonateTableProps) => {
  return (
    <div className="grid grid-cols-3 divide-x-2 divide-gray-300 gap-4">
      <div className="pl-6 sm:pl-8 md:pl-4 xl:pl-1">
        <p className="xl:text-[10px] 2xl:text-[12px]">Goal</p>
        <p className="2xl:text-[20px] xl:text-[14px] xl:mt-2 font-bold">
          ${goal}
        </p>
      </div>
      <div className="pl-8 lg:pl-8 xl:pl-2 md:pl-8 sm:pl-8 2xl:pl-6">
        <p className="xl:text-[10px] 2xl:text-[12px] ml-2">Raised</p>
        <p className="2xl:text-[20px] xl:text-[14px] xl:mt-2 font-bold ml-2 text-green-500">
          ${raised}
        </p>
      </div>
      <div className="pl-4 sm:pl-10 md:pl-10 lg:pl-10 xl:pl-6 2xl:pl-10">
        <CircularBar
          progress={Math.ceil((raised / goal) * 100)}
          height="50"
          width="50"
        />
      </div>
    </div>
  );
};

export default DonateTable;
