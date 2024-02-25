"use client";
import { investors } from "../../../public/data";
import { useState } from "react";
import Image from "next/image";
const TotalInvestor = ({ totalInvestor }: { totalInvestor: number }) => {
  const [visibleInvestors, setVisibleInvestors] = useState(
    investors.slice(0, 1)
  );
  const [toggle, setToggle] = useState(false);

  const toggleInvestor = () => {
    if (toggle) {
      setVisibleInvestors(investors.slice(0, 1));
    } else {
      setVisibleInvestors(investors);
    }
    setToggle(!toggle);
  };
  return (
    <article>
      <div className=" rounded-lg shadow-4xl pb-5">
        <p className="mx-4 pt-3 mb-4 text-xl font-bold">
          {totalInvestor} Investor
        </p>
        <hr />
        <div className="mx-4 pt-5 pb-7 flex flex-col gap-4">
          {visibleInvestors.map((investor) => {
            return (
              <div
                key={investor.id}
                className="flex justify-between items-center"
              >
                <div className="flex items-center gap-4">
                  <Image
                    src={investor.image}
                    width={60}
                    height={60}
                    alt={investor.name}
                    className="rounded-full"
                  />
                  <p>{investor.name}</p>
                </div>
                <p className="font-bold">{investor.amount}</p>
              </div>
            );
          })}
        </div>
        {toggle ? (
          <div className="flex justify-center">
            <p
              className=" flex items-center justify-center font-bold text-00368c mt-5 cursor-pointer w-fit"
              onClick={toggleInvestor}
            >
              View Less
            </p>
          </div>
        ) : (
          <div className="flex justify-center">
            <p
              className=" flex items-center justify-center font-bold text-00368c mt-5 cursor-pointer w-fit"
              onClick={toggleInvestor}
            >
              View All
            </p>
          </div>
        )}
      </div>
    </article>
  );
};

export default TotalInvestor;
