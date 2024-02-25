"use client";
import Input from "./Input";
import Link from "next/link";
import { AiFillCaretRight } from "react-icons/ai";

const SignUpForm = () => {
  return (
    <form className="flex flex-col items-center mx-10">
      <Input type="text" name="name" placeholder="Full Name"></Input>
      <Input type="email" name="email" placeholder="Email Address"></Input>
      <Input type="password" name="password" placeholder="Password"></Input>

      <article className="w-full flex justify-between mb-10 ">
        <div className="flex gap-2">
          <input
            type="checkbox"
            name=""
            id=""
            className="w-5 h-5 rounded border border-grayborder"
          />
          <p className="text-sm font-normal leading-5">
            I have read and agree to the
            <Link href="#" className="text-00368c">
              Terms of Use
            </Link>
            and
            <Link href="#" className="text-00368c">
              Privacy Policy.
            </Link>
          </p>
        </div>
      </article>
      <button
        type="submit"
        className="group text-white bg-homeblue rounded-full w-64 p-4 hover:bg-homeblue2 "
      >
        <p className="flex items-center justify-center gap-1">
          Sign Up <AiFillCaretRight className="invisible group-hover:visible" />
        </p>
      </button>
    </form>
  );
};

export default SignUpForm;
