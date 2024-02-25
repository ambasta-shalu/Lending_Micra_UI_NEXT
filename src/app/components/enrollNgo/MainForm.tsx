"use client";
import OrganisationBasicForm from "./OrganisationBasicForm";
import OrganisationProfileForm from "./OrganisationProfileForm";
import ContactPersonForm from "./ContactPersonForm";
import { useState } from "react";
const MainForm = ({
  step,
  prevStep,
  nextStep,
}: {
  step: number;
  prevStep: () => void;
  nextStep: () => void;
}) => {
  const showForm = () => {
    switch (step) {
      case 0:
        return <OrganisationBasicForm />;
      case 1:
        return <ContactPersonForm />;
      case 2:
        return <OrganisationProfileForm />;
    }
  };
  return (
    <section className="bg-white rounded-2xl shadow-3xl overflow-hidden">
      <article>
        <div>{showForm()}</div>
      </article>
      <div className="flex justify-between items-center  gap-10 pb-5 pl-10 pr-12 font-Noto-Sans">
        <button
          onClick={() => prevStep()}
          className={
            step == 0
              ? "invisible"
              : "text-homeblue font-bold bg-white border border-homeblue rounded-full py-4 px-12"
          }
        >
          Previous
        </button>
        <div className="flex gap-4">
          <button
            className={
              step == 0
                ? "text-homeblue font-bold bg-white border border-homeblue rounded-full py-4 px-12"
                : "invisible"
            }
          >
            Cancel
          </button>
          <button
            onClick={() => nextStep()}
            className="text-white font-bold bg-homeblue border border-homeblue rounded-full py-4 px-12"
          >
            {step < 2 ? "Save and Next" : "Save and Submit"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default MainForm;
