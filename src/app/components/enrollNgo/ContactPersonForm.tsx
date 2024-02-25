import React from "react";
import { contactInfo } from "../../../../public/data";
import Input from "../Input";
const ContactPersonForm = () => {
  return (
    <section className="mb-5">
      <article className="bg-pinkredbg flex justify-between items-center py-6 px-5">
        <div className="font-bold text-xl font-Roboto-Slab">
          Step 2. Contact Person Details
        </div>
        <p className="text-sm"> Step 2/3</p>
      </article>
      <article className=" flex flex-col gap-8 mx-10 mt-5 mb-8">
        {contactInfo.map((info, index) => {
          return (
            <div key={index}>
              <p className="font-bold text-xl mb-4 font-Roboto-Slab">
                {info.questionText}
              </p>
              <div className="grid grid-cols-2 justify-between  mx-4 gap-x-8 gap-y-2 font-Noto-Sans">
                {info.options.map((option, index) => {
                  return (
                    <div key={index}>
                      {info.answerType === "multipleTextBox" ? (
                        option === "Mobile Number" ? (
                          <div className="grid grid-cols-3 gap-1">
                            <div className="w-full border border-grayborder rounded pl-2 pt-1 mb-4 pr-2">
                              <p className="text-homeblue text-[6px] sm:text-[6px] md:text-[8px] lg:text-[10px] xl:[14px]">
                                Country Code
                              </p>
                              <select
                                name="countryCode"
                                className="w-full mt-2"
                              >
                                <option
                                  value="+91"
                                  className="font-bold bg-neutral-200"
                                >
                                  +91
                                </option>
                              </select>
                            </div>
                            <div className="col-span-2">
                              <Input
                                type="text"
                                name={option}
                                placeholder={option}
                              />
                            </div>
                          </div>
                        ) : (
                          <Input
                            type="text"
                            name={option}
                            placeholder={option}
                          />
                        )
                      ) : (
                        <div className="flex gap-2">
                          <input
                            type={info.answerType}
                            name={option}
                            value="1"
                          />
                          <label htmlFor={option}>{option}</label>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </article>
      <p className="text-xs italic mt-16 ml-10 mb-4 font-Noto-Sans">
        Note: Please verify your mobile number and email address for further
        contact
      </p>
      <hr className="opacity-20 border border-black" />
    </section>
  );
};

export default ContactPersonForm;
