"use client";
import { useState } from "react";
import { PrivacyData } from "../../../../public/privacyData";
import { AiFillCaretRight } from "react-icons/ai";

import Link from "next/link";
import QuestionPrivacyPolicy from "./Question";

function Content() {
  const [selectedCategory, setSelectedCategory] = useState(PrivacyData[0]);

  return (
    <>
      <div className="flex">
        <div className="w-1/4 h-[360px] bg-light-yellow py-4 ml-32">
          <div className="flex justify-between">
            <ul className="space-y-2 w-full h-10">
              {PrivacyData.map((category, index) => (
                <li
                  key={index}
                  className={`cursor-pointer flex justify-between rounded-sm pl-2 h-15 py-2 font-bold ${
                    selectedCategory === category
                      ? "text-black bg-yellowbg font-medium"
                      : "hover:bg-lightyellow"
                  }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category.category}

                  <AiFillCaretRight className="mt-2 mr-3" />
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="w-3/4 p-3 ">
          <h2 className="text-2xl font-bold pl-4  mb-4 ">
            {selectedCategory.category}
          </h2>

          <div className="space-y-4">
            {selectedCategory.data.map((question, index) => (
              <QuestionPrivacyPolicy data={question.categoryData} key={index} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Content;
