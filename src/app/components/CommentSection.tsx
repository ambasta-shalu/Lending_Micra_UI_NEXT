"use client";
import Image from "next/image";
import { comments } from "../../../public/data";
import { useState } from "react";
import Button from "./buttons";
const CommentSection = () => {
  const [visibleComments, setVisibleComments] = useState(comments.slice(0, 1));
  const [toggle, setToggle] = useState(false);

  const toggleComments = () => {
    if (toggle) {
      setVisibleComments(comments.slice(0, 1));
    } else {
      setVisibleComments(comments);
    }
    setToggle(!toggle);
  };
  return (
    <section>
      <article className="shadow-4xl rounded-xl mt-5 py-5">
        <p className="text-xl font-bold leading-7 mx-5  mb-4">
          Tell your friends as to why you support.
        </p>
        <hr />
        <article className="mx-5 mt-6">
          <div className="flex justify-between items-center bg-neutral-100 ">
            <input
              type="text"
              placeholder="Write message here..."
              className="bg-neutral-100 text-black pl-4 p-2 w-2/3"
            />
            <Button type="primary" href="#">
              Post Comment
            </Button>
          </div>
          {visibleComments.map((comment) => {
            return (
              <>
                <div className="flex mt-5">
                  <Image
                    src={comment.authorImg}
                    width={60}
                    height={60}
                    alt="author image"
                    className="rounded-full"
                  />
                  <div className="flex items-center justify-between w-full ml-3">
                    <p className="font-normal text-base leading-5">
                      {comment.authorName}
                    </p>
                    <p className="font-normal text-xs leading-4">
                      {comment.commentDay}
                    </p>
                  </div>
                </div>
                <p className="ml-16 font-normal text-xs leading-6">
                  {comment.comment}
                </p>
              </>
            );
          })}
        </article>
        {toggle ? (
          <p
            className=" flex items-center justify-center font-bold text-00368c mt-8 cursor-pointer"
            onClick={toggleComments}
          >
            View Less Comment
          </p>
        ) : (
          <p
            className=" flex items-center justify-center font-bold text-00368c mt-8 cursor-pointer"
            onClick={toggleComments}
          >
            View All Comments
          </p>
        )}
      </article>
    </section>
  );
};

export default CommentSection;
