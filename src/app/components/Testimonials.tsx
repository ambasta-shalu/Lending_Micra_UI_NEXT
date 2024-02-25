import Image from "next/image";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";

type TestimonialCardProps = {
  authorImage: string;
  authorName: string;
  authorTitle: string;
  description: string;
};

function Testimonials(props: TestimonialCardProps) {
  return (
    <div className="bg-f4feff my-8">
      <div className="flex justify-between mx-16">
        <div>
          <Image
            src="/images/quote.png"
            alt="quotes"
            width="169"
            height="169"
          />
        </div>

        <div>
          <div className="w-[50px] h-[50px] bg-amber-300 rounded-full mt-[113px]">
            <p className="text-black text-[20px] font-normal uppercase pt-2 ml-5">
              Testimonials
            </p>
          </div>
        </div>

        <div className="rotate-180">
          <Image
            src="/images/quote.png"
            alt="quotes"
            width="169"
            height="169"
          />
        </div>
      </div>

      <div>
        <div className="text-center text-black text-[40px] font-bold ">
          Trusted by Professionals
        </div>

        {/* api call or data fetching from JSON FIle  */}
        <div>
          <div className="flex justify-center ">
            <div className=" mx-24">
              <BsArrowLeftCircle className="w-[50px] h-[50px]" />
            </div>
            <div className="w-[825px]">
              <p className="text-center ">{props.description}</p>
            </div>
            <div className="mx-24">
              <BsArrowRightCircle className="w-[50px] h-[50px]" />
            </div>
          </div>

          <div className="text-center pt-4 ">
            <p className="font-bold">{props.authorName}</p>
            <p>{props.authorTitle}</p>
          </div>

          <div className="mx-48">
            <div className="flex justify-center  my-4">
              <Image
                src={props.authorImage}
                alt=""
                height="69"
                width="69"
                className="mx-4"
              />
              <Image
                src="/images/authorImg.png"
                alt=""
                height="69"
                width="69"
                className="mx-4"
              />
              <Image
                src="/images/authorImg.png"
                alt=""
                height="69"
                width="69"
                className="mx-4"
              />
              <Image
                src="/images/authorImg.png"
                alt=""
                height="69"
                width="69"
                className="mx-4"
              />
              <Image
                src="/images/authorImg.png"
                alt=""
                height="69"
                width="69"
                className="mx-4"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Testimonials;
