"use client";
import Progress from "../components/enrollNgo/Progress";
import MainForm from "../components/enrollNgo/MainForm";
import { useState } from "react";
const EnrollYourNgo = () => {
  const [step, setStep] = useState(0);

  const nextStep = () => {
    step < 2 ? setStep(step + 1) : setStep(step);
  };
  const prevStep = () => {
    step > 0 ? setStep(step - 1) : setStep(step);
  };
  return (
    <section className="mx-32 mt-16 mb-28">
      <p className="text-black text-[20px] xl:text-[30px] 2xl:text-[40px] font-bold font-Roboto-Slab mb-9">
        {step > 0 ? "Enroll NGO Application Form" : "NGO Enrollment Form"}
      </p>
      <main className="grid grid-cols-12 gap-12">
        <div className="col-span-3">
          <Progress step={step} nextStep={nextStep} prevStep={prevStep} />
        </div>
        <div className="col-span-9">
          <MainForm step={step} nextStep={nextStep} prevStep={prevStep} />
        </div>
      </main>
    </section>
  );
};

export default EnrollYourNgo;
