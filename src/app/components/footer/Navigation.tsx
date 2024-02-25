import Link from "next/link";
const Navigation = () => {
  return (
    <article className="flex flex-col font-light leading-10">
      <p className="font-bold text-xl mb-3">Navigation</p>
      <Link href={"/"}>
        <span className="hover:font-bold hover:border-b-2 hover:border-black w-fit">
          Home
        </span>
      </Link>
      <Link href={"/donate"}>
        <span className="hover:font-bold hover:border-b-2 hover:border-black w-fit">
          Donate
        </span>
      </Link>
      <Link href={"/invest"}>
        <span className="hover:font-bold hover:border-b-2 hover:border-black w-fit">
          Invest
        </span>
      </Link>
      <Link href={"/about"}>
        <span className="hover:font-bold hover:border-b-2 hover:border-black w-fit">
          About Us
        </span>
      </Link>
      <Link href={"/blog"}>
        <span className="hover:font-bold hover:border-b-2 hover:border-black w-fit">
          Blogs
        </span>
      </Link>
    </article>
  );
};

export default Navigation;
