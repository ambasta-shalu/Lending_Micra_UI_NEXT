import React from "react";
import Details from "../../components/blog_details/details";
import Blog from "../../components/home/Blog";

const BlogDetails = () => {
  return (
    <div>
      <div className="w-full">
        <h1 className="text-4xl font-bold mb-4 text-black ml-36 pt-14 ">
          Blog Details
        </h1>
        <div className="bg-grey ml-36 mr-36 h-32"></div>
      </div>
      <Details />
      <Blog title="Similar Insights" isHome={false} />
    </div>
  );
};

export default BlogDetails;
