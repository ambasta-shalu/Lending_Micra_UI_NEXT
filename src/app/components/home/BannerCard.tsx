import Image from "next/image";
type BannerCardProps = {
  amount: string;
  title: string;
  image: string;
};

const BannerCard = ({ amount, title, image }: BannerCardProps) => {
  return (
    <div>
      <div className="mt-2 xl:mt-0 md:mt-16 lg:mt-0 flex flex-col lg:flex-row items-center justify-center">
        <div className="relative">
          <Image
            src={image}
            alt="banner-card-image"
            height={80}
            width={80}
          ></Image>
        </div>
        <div className=" ml-5">
          <h1 className="2xl:text-[40px] xl:text-[35px] lg:text-[30px] leading-8 font-Noto-Sans">
            {amount}
          </h1>
          <p className=" text-center lg:text-left mb-4 md:mb-4 lg:mb-0 text-xl font-extrabold font-Noto-Sans">
            {title}
          </p>
        </div>
      </div>
    </div>
  );
};
export default BannerCard;
