import Image from "next/image";
import Button from "../buttons/index";

type BlogPostCardProps = {
  blogImage: string;
  authorImage: string;
  authorName: string;
  title: string;
  date: string;
  description: string;
};
function BlogPostCard(props: BlogPostCardProps) {
  return (
    <>
      <div className=" flex-col  h-[500px] mb-12 md:flex md:mb-16   md:h-auto   ">
        <div className="mx-8 md:mx-0 flex justify-center md:h-[365px] md:mb-0 md:justify-normal">
          <Image
            src={props.blogImage}
            alt={props.title}
            width={200}
            height={150}
            className="h-[250px] w-[90%] md:w-[250px] md:h-[365px] z-10"
          />
        </div>
        <div className="absolute  -mt-12 mx-2  rounded-lg shadow-6xl border-2  hover:shadow-7xl bg-white  md:ml-24 md:w-[500px] md:h-[355px] md:mt-16 md:mr-4 md:flex ">
          <div className="mt-16 md:mt-4 mx-6 my-2 md:ml-40 md:pr-2 ">
            <div className="flex mb-2 md:py-4">
              <Image
                src={props.authorImage}
                alt={props.authorName}
                width={34}
                height={34}
                className="w-8 h-8 rounded-full"
              />
              <p className="text-black text-base p-1 mx-2 ">
                {props.authorName}
              </p>
            </div>

            <h2 className="text-xl h-[54px] overflow-hidden font-bold line-clamp-2 leading-6 ">
              {props.title}
            </h2>
            <div className="flex text-homeblue">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-[15px] h-[15px]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p className="text-xs px-1">{props.date}</p>
            </div>
            <p className="line-clamp-4 text-black font-normal h-[95px] overflow-hidden  ">
              {props.description}
            </p>
            <div className="md:absolute md:mt-12  md:mb-8  mt-4 pl-2 mb-4 pr-10 z-10 ">
              <Button type="primary" href="/blog/1">
                Read More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogPostCard;
