"use client";
import { useState } from "react";
import { blogPosts } from "../../../../public/blogData";
import Link from "next/link";
import { BiRightArrowAlt } from "react-icons/bi";
import { BiLeftArrowAlt } from "react-icons/bi";
import BlogPostCard from "./PostCard";
import { AiFillCaretRight } from "react-icons/ai";

type PaginationType = {
  blogImage: string;
  authorImage: string;
  authorName: string;
  title: string;
  date: string;
  description: string;
};

function Pagination({
  data,
  postPerPage,
}: {
  data: PaginationType[];
  postPerPage: number;
}) {
  const [currentPage, setCurrentPage] = useState(1);
  const PostPerpage = postPerPage;

  const getPostForCurrentPage = () => {
    const startIndex = (currentPage - 1) * PostPerpage;
    const endIndex = startIndex + PostPerpage;
    return data.slice(startIndex, endIndex);
  };

  const totalPages = Math.ceil(blogPosts.length / PostPerpage);

  const goToNextPage = () => {
    setCurrentPage((nextPage) => nextPage + 1);
  };

  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const postsToDisplay = getPostForCurrentPage();

  return (
    <>
      <div className="container mt-2 mx-2 ">
        <div className="grid grid-cols-1 xl:grid-cols-2 justify-center gap-12 ">
          {postsToDisplay.map((post, index) => (
            <BlogPostCard key={index} {...post} />
          ))}
        </div>
      </div>

      <div className="mt-6 mb-6">
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
    </>
  );
}
export default Pagination;
