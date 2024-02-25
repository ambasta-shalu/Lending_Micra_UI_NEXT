import Image from "next/image";
import Link from "next/link";
import { AiFillCaretRight } from "react-icons/ai";

type About = {
  image: string;
  title: string;
  paragraph: string;
};

const AboutCard = (props: About) => {
  return (
    <div>
      <div className=" xl:w-[330px] xl:h-[210px] 2xl:w-[425px] 2xl:h-[260px] xl:ml-2 2xl:ml-8 mt-8 rounded-3xl shadow-4xl pl-5 pt-5 pb-1 pr-5 shrink-0 bg-white">
        <div className="relative">
          <Image
            src={props.image}
            alt="About-Card_Image"
            height={40}
            width={50}
            className="2xl:h-[60px] 2xl:w-[60px]"
          ></Image>
        </div>
        <div>
          <h1 className="font-bold text-lg 2xl:text-[24px] mt-5">
            {props.title}
          </h1>
          <p className="font-Noto-Sans xl:h-[50px] 2xl:h-[70px] xl:text-[12px] 2xl:text-[16px] text-justify lg:text-start overflow-hidden">
            {props.paragraph}
          </p>
        </div>
        <div className="mb-4 flex">
          <Link
            href="#"
            className="font-Noto-Sans text-darkblue font-bold text-base"
          >
            <p className="flex items-center gap-1 hover:bg-graybg">
              Know More
              <AiFillCaretRight />
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
