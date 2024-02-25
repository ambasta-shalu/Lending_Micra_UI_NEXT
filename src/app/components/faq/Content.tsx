"use client";
import { useState } from "react";
import { faqData } from "../../../../public/faqData";
import { AiFillCaretRight } from "react-icons/ai";
import Question from "../Question";
import Link from "next/link";

function Content() {
  const [selectedCategory, setSelectedCategory] = useState(faqData[0]);

  return (
    <>
      <div className="flex">
        <div className="w-1/4 h-[300px] bg-light-yellow p-4 ml-32">
          <div className="flex justify-between">
            <ul className="space-y-2 w-full h-10">
              {faqData.map((category, index) => (
                <li
                  key={index}
                  className={`cursor-pointer flex justify-between pl-2 h-9 pt-2 font-bold ${
                    selectedCategory === category
                      ? "text-black bg-yellowbg font-medium"
                      : "hover:bg-lightyellow"
                  }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category.category}
                  <AiFillCaretRight className="mt-1 mr-3" />
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="w-3/4 p-4 mr-32">
          <h2 className="text-2xl font-bold mb-4">
            {selectedCategory.category}
          </h2>
          <div className="space-y-4">
            {selectedCategory.questions.map((question, index) => (
              <Question
                key={index}
                question={question.question}
                answer={question.answer}
                isFAQ={true}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="flex w-[100px] h-[30px] mt-3 mb-3 mx-[750px] justify-between hover:bg-viewall px-1">
        <Link href="/" className="pt-1 pl-1 font-bold text-blue-500">
          View All
        </Link>
        <AiFillCaretRight className="mt-2  text-blue-500 " />
      </div>
    </>
  );
}

export default Content;
