"use client";
import { useState } from "react";
import CircularBar from "./CircularBar";
import DonateModal from "./DonateModal";

const AmountNeeded = ({ isDonate }: { isDonate: boolean }) => {
  const [showDonateModal, setShowDonateModal] = useState(false);

  return (
    <section className="bg-pinkredbg rounded-lg px-5 pt-5">
      <article className="grid grid-cols-3 gap-2">
        <div className="bg-white rounded border border-zinc-400 p-1">
          <p className="text-cyan-600 text-[14px] font-normal">Currency</p>
          <select name="currency" id="currency">
            <option value="inr" className="text-black text-[16px] font-bold">
              ₹ INR
            </option>
            <option value="usd" className="text-black text-[16px] font-bold">
              $ USD
            </option>
          </select>
        </div>
        <div className="col-span-2 bg-white rounded border border-zinc-400 p-1">
          <p className="text-cyan-600 text-[14px] font-normal">Amount</p>
          <input
            type="text"
            placeholder="Enter Amount"
            className="text-black text-[16px] font-bold w-full"
          />
        </div>
      </article>
      {isDonate ? (
        <article className="mt-4">
          <button
            onClick={() => setShowDonateModal(true)}
            className="text-white  font-bold  bg-homeblue border border-homeblue rounded-full py-2 px-1 w-full"
          >
            Donate Now
          </button>
          <DonateModal
            isVisible={showDonateModal}
            onClose={() => setShowDonateModal(!showDonateModal)}
          />

          <p className="text-center text-xs mt-1">
            Receive tax benefits by donating to this cause.
          </p>
        </article>
      ) : (
        <article className="grid grid-cols-2 mt-4 gap-3">
          <button className="text-homeblue font-bold border border-homeblue rounded-full py-2 px-1">
            Fullfill Amount
          </button>
          <button className="text-black font-bold bg-yellowbg border border-yellowbg rounded-full py-2 px-1">
            Invest Now
          </button>
        </article>
      )}
      <article className="flex flex-col gap-7 mt-8 mb-4 pb-9">
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-7">
            <p className="text-black text-xl font-bold">
              1,00,000{" "}
              <span className="text-base font-normal ml-1">Required</span>
            </p>
            <p className="text-darkgreen text-lg  font-bold">
              75,000{" "}
              <span className="text-base text-black font-normal ml-1">
                Invested Amount
              </span>
            </p>
          </div>
          <CircularBar progress={75} height="89" width="89" />
        </div>
        <p className="text-black text-lg font-bold">
          40,000 <span className="text-base font-normal ml-1">Disbursed</span>
        </p>
        <p className="text-black text-lg  font-bold">
          8.5% <span className="text-base font-normal ml-1">Interest Rate</span>
        </p>
        <p className="text-black text-lg  font-bold">
          12 Months
          <span className="text-base font-normal ml-1">
            Period(flat per annum)
          </span>
        </p>
        <p className="text-black text-lg  font-bold">
          Feb 2023 to August 2024
          <span className="text-base font-normal ml-1">Repayment Period</span>
        </p>
        <p className="text-black text-lg  font-bold">
          84 <span className="text-base font-normal ml-1">Investor</span>
        </p>
      </article>
    </section>
  );
};

export default AmountNeeded;
