import Image from "next/image";
import Link from "next/link";
import Button from "../buttons";
const About = () => {
  return (
    <div>
      <Image
        src="/images/logo.svg"
        width={107}
        height={60}
        alt="Logo Image"
        className="mb-3"
      ></Image>
      <article className="text-sm font-normal mb-7 leading-8">
        <p>
          Lending Micra is a crowdfunding platform to raise
          <span className="inline md:block">
            funds for Education and Medical Treatments.
          </span>
        </p>
        {/* <p>funds for Education and Medical Treatments.</p> */}
      </article>
      <Button type="primary" href="/about">
        About Us
      </Button>
    </div>
  );
};

export default About;
