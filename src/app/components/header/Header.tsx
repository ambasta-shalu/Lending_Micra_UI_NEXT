import Navbar from "./Navbar";
import Image from "next/image";
import Link from "next/link";
const Header = () => {
  return (
    <>
      <main className="md:bg-[url('/images/headerRectangle.png')]   bg-[length:length:300px] bg-[position:right_0px_top_0px] bg-no-repeat">
        <header className="flex justify-between items-center mx-5 sm:mx-10 md:mx-32 mt-5 ">
          <Link href="/">
            <Image
              src="/images/logo.svg"
              width={107}
              height={60}
              alt="Logo Image"
            ></Image>
          </Link>
          <Navbar />
        </header>
      </main>
    </>
  );
};

export default Header;
