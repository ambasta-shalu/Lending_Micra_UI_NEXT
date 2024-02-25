"use client";
import Input from "./Input";
import Link from "next/link";
import { AiFillCaretRight } from "react-icons/ai";

const LoginForm = () => {
  return (
    <form className="flex flex-col items-center mx-10">
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
            Keep me logged in for 30 days
          </p>
        </div>
        <Link href="#" className="font-bold text-base leading-6 text-00368c">
          Forgot Password
        </Link>
      </article>
      <button
        type="submit"
        className="group text-white bg-homeblue rounded-full w-64 p-4 hover:bg-homeblue2 "
      >
        <p className="flex items-center justify-center gap-1">
          Login <AiFillCaretRight className="invisible group-hover:visible" />
        </p>
      </button>
    </form>
  );
};

export default LoginForm;
