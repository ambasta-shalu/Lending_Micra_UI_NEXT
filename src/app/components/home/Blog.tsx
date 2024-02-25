"use client";
import React from "react";
import Slider from "react-slick";
import NextArrow from "../NextArrow";
import PreviousArrow from "../PreviousArrow";
import PostCard from "../../components/blog/PostCard";
import { blogPosts } from "../../../../public/blogData";
import Link from "next/link";
import { AiFillCaretRight } from "react-icons/ai";

type BlogProps = {
  isHome: boolean;
  title: string;
};

const Blog = ({ isHome, title }: BlogProps) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <NextArrow isTestimonial={false} />,
    prevArrow: <PreviousArrow isTestimonial={false} />,
  };

  return (
    <div
      className={
        isHome
          ? "container-fluid bg-[url('/images/blogSquare.png')]   bg-[length:length:300px] bg-[position:right_0px_top_0px] bg-no-repeat"
          : "container-fluid "
      }
    >
      <section className="mx-32">
        <div className="flex flex-row mt-16">
          <div className=" text-center lg:text-left lg:basis-1/2 basis-0 ">
            {isHome && (
              <p className=" font-Noto-Sans text-xl">
                <span
                  className="inline-block text-center px-5 py-2  pr-1 
       rounded-full bg-yellowbg text-black"
                >
                  BL
                </span>
                <span className="-ml-1 ">OGS</span>
              </p>
            )}
            <h1 className="lg:text-4xl md:4xl sm:2xl font-bold leading-7">
              {title}
            </h1>
          </div>
        </div>
        <div>
          <Slider {...settings}>
            {blogPosts.map((el, index) => (
              <div key={index}>
                <PostCard {...el} />
              </div>
            ))}
          </Slider>
        </div>
        {isHome && (
          <div className="flex justify-center mt-4 mb-6">
            <Link href="/blog" className=" text-btn-bg-color font-bold">
              <p className="flex items-center gap-1 hover:bg-graybg">
                View All
                <AiFillCaretRight />
              </p>
            </Link>
          </div>
        )}
      </section>
    </div>
  );
};

export default Blog;
