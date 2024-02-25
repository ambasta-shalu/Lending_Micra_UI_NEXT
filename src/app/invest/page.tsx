"use client";
import { BiRightArrowAlt } from "react-icons/bi";
import { BiLeftArrowAlt } from "react-icons/bi";
import { investData } from "../../../public/investData";
import { useState } from "react";
import Card from "../components/Card";
import Filter from "../components/Filter";
import PageTitile from "../components/PageTitle";
import Link from "next/link";
import { AiFillCaretRight } from "react-icons/ai";

const invest = () => {
  const Pagination = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const postPerPage = 9;

    const getPostsForCurrentPage = () => {
      const startIndex = (currentPage - 1) * postPerPage;

      const endIndex = startIndex + postPerPage;

      return investData.slice(startIndex, endIndex);
    };

    const totalPages = Math.ceil(investData.length / postPerPage);

    const goToNextPage = () => {
      setCurrentPage((nextPage) => nextPage + 1);
    };

    const goToPreviousPage = () => {
      setCurrentPage((prevPage) => prevPage - 1);
    };

    const postsToDisplay = getPostsForCurrentPage();

    return (
      <>
        <div className="container mx-auto p-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
            {postsToDisplay.map((project, index) => (
              <div key={index}>
                <Card {...project} isDonate={false} />
              </div>
            ))}
          </div>

          <div className="mt-6 ">
            <div className="lg:hidden flex justify-center mt-6 cursor-pointer h-[35px] ">
              <div className="flex hover:bg-viewall py-[5px]">
                <Link href="/invest">
                  <p className="text-btn-bg-color font-bold">Show More</p>
                </Link>

                <AiFillCaretRight className="mt-[5px] text-btn-bg-color" />
              </div>
            </div>

            <div className="lg:flex lg:justify-center lg:mt-6 hidden">
              {currentPage > 1 && (
                <BiLeftArrowAlt
                  onClick={goToPreviousPage}
                  className=" mr-2  w-10 rounded-full border-2 border-black h-10 hover:text-white hover:bg-black hover:rounded-full hover:border-none "
                />
              )}

              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index + 1)}
                  className={`px-4 py-2 text-black  border-2 mr-2 rounded-full border-black ${
                    currentPage === index + 1
                      ? "text-white bg-black border-black "
                      : "hover:text-white hover:bg-black hover:border-black"
                  } `}
                >
                  {index + 1}
                </button>
              ))}

              {currentPage < totalPages && (
                <BiRightArrowAlt
                  onClick={goToNextPage}
                  className="w-10 rounded-full border-2 border-black h-10 hover:text-white hover:bg-black hover:rounded-full hover:border-none "
                />
              )}
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      {/* <div className=" mt-16 sm:ml-32 md:ml-32 mx-5 mr-32 sm:flex sm:justify-between md:flex md:justify-between ">

        <PageTitile

          titleLineOne="It's a loan,"

          titleLineSecond="not a donation."

        />

        <div className=" flex justify-between w-1/3 sm:w-1/2 md:w-1/2 h-1/2 mt-5 md:flex-row md:space-y-0 md:space-x-4">

          <Filter data="Filter by Categories" />

          <Filter data="Filter by location" />

          <Filter data="Sort by Trending" />

        </div>

      </div> */}

      <div className="mx-2 lg:flex md:justify-between lg:mx-28 ">
        <PageTitile
          titleLineOne="It's a loan,"
          titleLineSecond="not a donation."
        />

        <div className="flex mt-2 gap-2 lg:py-6 lg:ml-2">
          <Filter data="Filter by Categories" />

          <Filter data="Filter by location" />

          <Filter data="Sort by Trending" />
        </div>
      </div>

      <Pagination />
    </>
  );
};

export default invest;
