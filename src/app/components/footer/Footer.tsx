import About from "./About";
import Help from "./Help";
import Navigation from "./Navigation";
import Queries from "./Queries";
import Image from "next/image";
const Footer = () => {
  return (
    <>
      <div className=" sm:mx-12 md:mx-32 mb-12 border-t border-solid border-black"></div>
      <footer className="flex flex-col mx-5 sm:mx-12 md:flex-row md:mx-32 gap-12 font-Nato-Sans justify-between">
        <About />
        <div className="flex justify-between md:hidden">
          <Navigation />
          <Help />
        </div>
        <div className="hidden md:block">
          <Navigation />
        </div>
        <div className="hidden md:block">
          <Help />
        </div>
        <Queries />
      </footer>
      <div className="text-white bg-black mt-20 w-full">
        <article className="flex flex-col md:flex-row mx-5 md:12 xl:mx-32  justify-between items-center ">
          <p className="py-2">
            &copy; {new Date().getFullYear()} Lending Micra. All rights
            reserved.
          </p>
          <div className="pb-2 md:py-2">
            <Image
              src="/images/footerImg.png"
              width={477}
              height={36}
              alt="card-image"
            ></Image>
          </div>
        </article>
      </div>
    </>
  );
};

export default Footer;
