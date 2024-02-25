"use client";
import { data } from "../../../public/donateData";
import { useState } from "react";
import { BiRightArrowAlt, BiLeftArrowAlt } from "react-icons/bi";
import Card from "../components/Card";
import Filter from "../components/Filter";
import PageTitile from "../components/PageTitle";
import Link from "next/link";
import { AiFillCaretRight } from "react-icons/ai";

function Donate() {
  const Pagination = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const postPerPage = 9;

    const getPostsForCurrentPage = () => {
      const startIndex = (currentPage - 1) * postPerPage;

      const endIndex = startIndex + postPerPage;
      return data.slice(startIndex, endIndex);
    };

    const totalPages = Math.ceil(data.length / postPerPage);

    const goToNextPage = () => {
      setCurrentPage((prevPage) => prevPage + 1);
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
              <div key={index} className="bg-white  rounded-lg ">
                <Card {...project} isDonate={true} />
              </div>
            ))}
          </div>

          <div className="mt-6">
            <div className="lg:hidden flex  mt-6 cursor-pointer  h-[35px] justify-center  ">
              <div className="flex hover:bg-viewall py-[5px]  ">
                <Link href="/donate">
                  <p className="text-btn-bg-color font-bold ">Show More</p>
                </Link>
                <AiFillCaretRight className="mt-[5px]  text-btn-bg-color" />
              </div>
            </div>
            <div className="lg:flex lg:justify-center lg:mt-6 hidden">
              {currentPage > 1 && (
                <div className="pt-[2px]">
                  <BiLeftArrowAlt
                    onClick={goToPreviousPage}
                    className=" mr-2  w-10 rounded-full border-2 border-black h-10 hover:text-white hover:bg-black hover:rounded-full hover:border-none "
                  />
                </div>
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
                <div className="pt-[2px]">
                  <BiRightArrowAlt
                    onClick={goToNextPage}
                    className="w-10 rounded-full border-2  border-black h-10 hover:text-white hover:bg-black hover:rounded-full hover:border-none "
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="mx-2 lg:flex my-2 lg:justify-between   lg:mx-28  ">
        <PageTitile
          titleLineOne="Every Donation you have"
          titleLineSecond="millions of benefits for others"
        />

        <div className="flex  mt-2 gap-2 lg:py-6 lg:ml-2 ">
          <Filter data="Filter by Categories" />
          <Filter data="Filter by location" />
          <Filter data="Sort by Trending" />
        </div>
      </div>
      <Pagination />
    </>
  );
}
export default Donate;
