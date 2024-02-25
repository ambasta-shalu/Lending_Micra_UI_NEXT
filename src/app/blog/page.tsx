import { blogPosts } from "../../../public/blogData";
import Filter from "../components/Filter";
import PageTitile from "../components/PageTitle";
import Pagination from "../components/blog/Pagination";

function Blog() {
  return (
    <>
      <div className="mx-5 md:flex lg:justify-between md:mx-28   ">
        {/* Blog Page Title  */}
        <PageTitile
          titleLineOne="Insights from our experts &"
          titleLineSecond="news from the our industry"
        />
        {/* Blog Page Filter */}
        <div className="flex mt-2 gap-2 md:py-6 lg:ml-2   ">
          {/* Filter by People  */}
          <div className=" basis-1/2">
            <Filter data="Filter by people" />
          </div>

          {/* Filter by Month  */}
          <div className="basis-1/2">
            <Filter data="Filter by Month" />
          </div>
        </div>
      </div>
      {/* Pagination */}
      <div className="md:mx-32">
        <Pagination data={blogPosts} postPerPage={8} />
      </div>
    </>
  );
}
export default Blog;
