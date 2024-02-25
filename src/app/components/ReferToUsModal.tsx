import { IoCloseSharp } from "react-icons/io5";
import Input from "./Input";
import { useEffect } from "react";

type ReferToUsModalProps = {
  isVisible: boolean;
  onClose: () => void;
};

function ReferToUsModal({ isVisible, onClose }: ReferToUsModalProps) {
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
        className="fixed inset-0 flex  justify-center bg-black bg-opacity-30  py-[200px] "
        id="mdl_container"
        onClick={handleClose}
      >
        <div className="bg-white rounded-lg pt-4  h-[350px] ">
          {/* Header */}
          <div className="flex justify-between -mt-2 px-2 py-2 ">
            <h2 className="text-lg font-bold mb-2 pl-2">Refer to us</h2>
            <div onClick={() => onClose()} className="cursor-pointer mr-2">
              <IoCloseSharp className="w-[20px] h-[20px]" />
            </div>
          </div>
          <form>
            <div className="mx-6">
              {/* Referral's Name */}
              <div className=" -mt-1  ">
                <Input
                  type="text"
                  name="Referral_Name"
                  placeholder="Referral’s Name"
                />
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
            </div>

            <div className="flex justify-center">
              <button
                className="bg-blue-500  hover:bg-blue-700 text-white font-bold py-2 px-32 rounded-full mb-2"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
export default ReferToUsModal;
