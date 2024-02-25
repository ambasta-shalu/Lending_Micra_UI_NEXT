import React from "react";
import { orgProfile } from "../../../../public/data";
const OrganisationProfileForm = () => {
  return (
    <section className="mb-5">
      <article className="bg-pinkredbg flex justify-between items-center py-6 px-5">
        <div className="font-bold text-xl font-Roboto-Slab">
          Step 3. Organisation Profile
        </div>
        <p className="text-sm"> Step 3/3</p>
      </article>
      <article className=" flex flex-col gap-8 mx-10 mt-5 mb-8">
        {orgProfile.map((profile, index) => {
          return (
            <div key={index}>
              <p className="font-bold text-xl mb-4 font-Roboto-Slab">
                {profile.questionText}
              </p>
              {profile.options.length == 2 ? (
                <div className="grid grid-cols-2 justify-between  mx-4">
                  {profile.options.map((option, index) => {
                    return (
                      <div key={index} className="flex gap-2">
                        <input
                          type={profile.answerType}
                          name={option}
                          value="1"
                        />
                        <label htmlFor={option}>{option}</label>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="grid grid-cols-3 justify-between  mx-4 font-Noto-Sans">
                  {profile.options.map((option, index) => {
                    return (
                      <div key={index} className="flex gap-2">
                        <input
                          type={profile.answerType}
                          name={option}
                          value="1"
                        />
                        <label htmlFor={option}>{option}</label>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </article>
      <hr className="opacity-20 border border-black" />
    </section>
  );
};

export default OrganisationProfileForm;
