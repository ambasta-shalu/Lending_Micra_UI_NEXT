import { useState } from "react";
import Image from "next/image";
type QuestionProps = {
  question: string;
  answer: string;
  isFAQ: boolean;
};
const FAQItem = (props: QuestionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-2 border-gray-300 rounded-md ">
      <button
        className={`flex w-full px-4 py-2 text-left font-medium rounded-md hover:bg-gray-100 ${
          isOpen ? "rounded-t-md bg-gray-100 text-blue-400" : "bg-white"
        }`}
        onClick={toggleOpen}
      >
        <div className="flex w-full justify-between ">
          <div className="flex items-center">
            <Image
              src="/images/question.svg"
              alt="questionImage"
              width={30}
              height={30}
              className="mr-5"
            />
            <span className="w-[750px]">{props.question}</span>
          </div>
          <Image
            src={`/images/${isOpen ? "minus" : "plus"}.svg`}
            alt={isOpen ? "minus" : "plus"}
            width={20}
            height={20}
          />
        </div>
      </button>

      {isOpen && (
        <div className="px-4 pt-4 pb-2 text-sm bg-white rounded-b-md ">
          <span className="-mt-8">{props.answer}</span>
        </div>
      )}
    </div>
  );
};

export default FAQItem;
