import Image from "next/image";

type TestimonialCardProps = {
  authorImage: string;

  authorName: string;

  authorTitle: string;

  description: string;
};

function Testimonials(props: TestimonialCardProps) {
  return (
    <div>
      {/* api call or data fetching from JSON FIle  */}

      <div className="flex justify-center">
        <div className="flex flex-col justify-center w-fit ">
          <div className="w-[825px] text-[20px] -mt-8">
            <p className="text-center ">{props.description}</p>
          </div>

          <div className="text-center pt-4 ">
            <p className="font-bold">{props.authorName}</p>

            <p>{props.authorTitle}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
