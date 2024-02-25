import Button from "../buttons";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="container-fluid">
      <div className="grid grid-cols-4">
        <div className="relative pt-12 ">
          <Image
            src="/images/Donate.svg"
            alt="donate-ellipse-background"
            className="2xl:w-[586px] 2xl:h-[586px] xl:w-[290px] xl:h-[420px] lg:w-[250px] lg:h-[250px]"
            height={250}
            width={250}
          ></Image>
        </div>
        <div className="container flex flex-col m-auto mt-28 col-span-2">
          <div
            className={`font-bold leading-normal text-4xl text-center font-Roboto-Slab xl:text-5xl 2xl:text-6xl `}
          >
            <h1>
              The slightest <span className="text-homeblue">help from you</span>
              ,
            </h1>
            <h1>will mean a lot to them.</h1>
          </div>
          <p className="text-center leading-normal text-xl font-Noto-Sans xl:mt-4">
            Help others by using sharing the platform that is safe, transparent
            and trusted.
          </p>
          <div className="flex justify-center m-auto gap-5 mt-5">
            <Button type="secondary" href="/donate">
              Donate Now
            </Button>
            <Button type="primary" href="/invest">
              Invest Now
            </Button>
          </div>
        </div>
        <div className="relative pt-12">
          <Image
            src="/images/Invest.svg"
            alt="invest-ellipse-background"
            height={280}
            width={280}
            className="absolute right-0  2xl:w-[586px] 2xl:h-[586px] xl:w-[290px] xl:h-[420px] lg:w-[250px] lg:h-[250px]"
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default Banner;
