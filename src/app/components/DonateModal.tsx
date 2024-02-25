import Input from "./Input";
import { useEffect } from "react";
import { IoCloseSharp } from "react-icons/io5";

type DonateModalProps = {
  isVisible: boolean;
  onClose: () => void;
};

function DonateModal({ isVisible, onClose }: DonateModalProps) {
  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isVisible]);

  if (!isVisible) return null;

  const handleClose = (e: any) => {
    if (e.target.id === "mdl_container") onClose();
  };

  return (
    <>
      <div
        className="fixed inset-0 flex  justify-center bg-black bg-opacity-30  py-[25px] "
        id="mdl_container"
        onClick={handleClose}
      >
        <div className="bg-white rounded-lg pt-4 ">
          {/* Header */}
          <div className="flex justify-between -mt-2 px-2 ">
            <h2 className="text-lg font-bold mb-2 pl-2">
              Make a Secure Donation
            </h2>
            <div onClick={() => onClose()} className="cursor-pointer  mr-2">
              <IoCloseSharp className="w-[20px] h-[20px]" />
            </div>
          </div>
          <form>
            {/* Currency */}
            <div className=" mb-4     bg-pinkRed">
              <div className="grid grid-cols-3 gap-x-3 mx-6">
                <div className=" h-[60px] pr-2 mt-4  bg-white rounded  ">
                  <p className="block text-blue-500 text-sm font-bold ml-2  rounded  w-full">
                    Currency
                  </p>
                  <select
                    className="rounded px-2  w-full"
                    name="currency"
                    id="currency"
                  >
                    <option value="INR">INR</option>
                    <option value="USD">USD</option>
                  </select>
                </div>
                <div className="col-span-2 h-[60px]  bg-white  mt-4 rounded ">
                  <p className="block text-blue-500 text-sm font-bold ml-2 rounded  w-full">
                    Amount
                  </p>
                  <input
                    type="number"
                    placeholder="Amount"
                    className=" rounded px-2 py-2  w-full"
                  />
                </div>
              </div>
              <p className="ml-6 mt-2 mb-2 text-sm">
                For this donation, you will be eligible for tax exemption
                benefit
              </p>
            </div>

            <div className="mx-6">
              {/* Full Name */}
              <div className=" -mt-1  ">
                <Input type="text" name="Full_Name" placeholder="Full Name" />
              </div>
              {/* Email */}
              <div className=" -mt-1 ">
                <Input type="email" name="email" placeholder="Email Address" />
              </div>
              {/* Country Code */}
              <div className="-mt-4 grid grid-cols-3 gap-x-2  ">
                <div className=" border-2  border-grey mt-3 mb-4">
                  <p className="block text-blue-500 text-sm font-bold m-2">
                    Country Code
                  </p>
                  <div className="px-2">
                    <select
                      name="countrycode"
                      id="countrycode"
                      className="w-full "
                    >
                      <option value="+91">91</option>
                      <option value="+1">1</option>
                    </select>
                  </div>
                </div>
                <div className="col-span-2 mt-3 ">
                  <Input
                    type="text"
                    placeholder="Mobile Number"
                    name="mobile_number"
                  />
                </div>
              </div>
              {/* Address */}
              <div className=" -mt-1 ">
                <Input type="text" name="address" placeholder="Address" />
              </div>
              {/* Pan card */}
              <div className=" -mt-1">
                <Input
                  type="text"
                  name="address"
                  placeholder="Pan Card Number"
                />
              </div>
            </div>
            {/* Check Box */}
            <div className="mb-2 px-6 -mt-1">
              <input
                id="anonymous"
                name="anonymous"
                type="checkbox"
                className="mr-2"
              />
              <label className="text-gray-700 text-sm">
                Make my donation anonymous
              </label>
            </div>
            <div className="flex justify-center">
              <button
                className="bg-blue-500  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                type="submit"
              >
                Proceed to Payment
              </button>
            </div>
            <p className="px-4 pt-2 ">
              By continuing you agree to our Terms of Use and Privacy Policy.
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
export default DonateModal;
