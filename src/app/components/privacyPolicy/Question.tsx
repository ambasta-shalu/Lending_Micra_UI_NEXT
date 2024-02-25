import { useState } from "react";
import Image from "next/image";
type QuestionPrivacyPolicyProps = {
  data: string;
};

function QuestionPrivacyPolicy(props: QuestionPrivacyPolicyProps) {
  const paragraph = props.data.split(":");
  return (
    <>
      <div className="px-4 pt-4 pb-2 text-base bg-white rounded-b-md">
        <div className="">
          {paragraph.map((sentence, index) => (
            <p className="mb-[20px]" key={index}>
              {sentence.trim()}
            </p>
          ))}
        </div>
      </div>
    </>
  );
}
export default QuestionPrivacyPolicy;
