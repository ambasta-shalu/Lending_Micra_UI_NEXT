import Link from "next/link";

const Help = () => {
  return (
    <article className="flex flex-col font-light leading-10">
      <p className="font-bold text-xl mb-3">Help</p>
      <Link href={"/contact-us"}>
        <span className="hover:font-bold hover:border-b-2 hover:border-black w-fit">
          Contact Us
        </span>
      </Link>
      <Link href={"/faq"}>
        <span className="hover:font-bold hover:border-b-2 hover:border-black w-fit">
          FAQ
        </span>
      </Link>
      <Link href={"/terms"}>
        <span className="hover:font-bold hover:border-b-2 hover:border-black w-fit">
          Terms of Use
        </span>
      </Link>
      <Link href={"/privacy-policy"}>
        <span className="hover:font-bold hover:border-b-2 hover:border-black w-fit">
          Privacy Policy
        </span>
      </Link>
    </article>
  );
};

export default Help;
