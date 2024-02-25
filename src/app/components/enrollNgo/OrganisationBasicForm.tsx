import React from "react";
import Input from "../Input";
import { basicInfo } from "../../../../public/data";
const OrganisationBasicForm = () => {
  return (
    <section className="mb-5">
      <article className="bg-pinkredbg flex justify-between items-center py-6 px-5">
        <div className="font-bold text-xl font-Roboto-Slab">
          Step 1. Organisation Basic Info
        </div>
        <p className="text-sm"> Step 1/3</p>
      </article>
      <article className=" flex flex-col gap-8 mx-10 mt-5 mb-8">
        {basicInfo.map((info, index) => {
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
                        option === "city" ? (
                          <select
                            name={option}
                            className="w-full font-light text-base leading-5 mb-4 py-6 pl-3 bg-neutral-100 rounded"
                          >
                            {info.dropDownOptions?.map((dropDown, index) => {
                              return (
                                <option
                                  key={index}
                                  value={dropDown}
                                  className="bg-neutral-200 rounded p-6"
                                >
                                  {dropDown}
                                </option>
                              );
                            })}
                          </select>
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
      <hr className="opacity-20 border border-black" />
    </section>
  );
};

export default OrganisationBasicForm;
