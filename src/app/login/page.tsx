import Link from "next/link";
import LoginForm from "../components/LoginForm";
import { AiFillCaretRight } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { BiLogoFacebook } from "react-icons/bi";
import { LoginButton } from "../components/buttons";

const login = async () => {
    
  return (
    <main className="flex justify-between  mx-32 mt-16 mb-28">
      <section className="flex-col space-y-52 basis-1/2">
        <article>
          <p className="font-bold text-black text-4xl leading-10">
            {" Welcome Back!"}
          </p>
          <ul className=" ml-4 mt-5 font-Noto-Sans font-light text-base leading-7 list-disc">
            <li>Registering is fast and free</li>
            <li>Get tax banefits on donation</li>
            <li>Get a decision quickly with no obligation</li>
            <li>Withdraw your funds faster</li>
            <li>Access a personalized dashboard</li>
          </ul>
        </article>
        <article className="flex-col space-y-8 px-7 pb-7 pt-9 border border-c2e9ed rounded-xl bg-f4feff">
          <div className="flex justify-between">
            <p className="font-regular text-base leading-5">
              {"  New to Lending Micra? Sign up now, it's quick & free"}
            </p>
            <Link
              href="/signup"
              className="font-bold text-base leading-5 text-00368c"
            >
              <p className="flex items-center gap-[2px] hover:bg-graybg">
                Sign Up
                <AiFillCaretRight />
              </p>
            </Link>
          </div>
          <hr className="border border-black opacity-20" />
          <div className="flex justify-between">
            <p className="font-regular text-base leading-5">
              Do you want to enroll your NGO?
            </p>
            <Link
              href="/enroll-ngo"
              className="font-bold text-base leading-5 text-00368c"
            >
              <p className="flex items-center gap-[2px] hover:bg-graybg">
                Enroll Your NGO
                <AiFillCaretRight />
              </p>
            </Link>
          </div>
        </article>
      </section>
      <section className="relative top-0 bg-top-left bg-[url('/images/bgSquare.png'),_url('/images/bgSquare.png')]   bg-[length:length:300px,_300px] bg-[position:left_0px_top_0px,_right_0px_bottom_0px] bg-no-repeat py-8 px-8">
        <article className="border border-black rounded-xl pt-8 pb-12 shadow-3xl  bg-white">
          <div className="ml-8">
            <p className="font-bold text-4xl leading-10">Login</p>
            <p>Continue with google and facebook or enter your details</p>
          </div>

          <div className="flex gap-4 mt-7 mb-11 ml-9 mr-10">
            <LoginButton
              provider="google"
              style="font-bold text-base leading-5 rounded-full border border-black border-solid px-5 py-1"
            >
              <p className="flex items-center gap-[2px]">
                <FcGoogle className="text-2xl" /> Log in with Google
              </p>
            </LoginButton>
            <LoginButton
              provider="facebook"
              style="font-bold text-base leading-5 bg-facebookbg text-white rounded-full px-5 py-1 "
            >
              <p className="flex items-center gap-[2px]">
                <BiLogoFacebook className="text-2xl" /> Log in with facebook
              </p>
            </LoginButton>
          </div>
          <div className="flex w-full mx-10 my-10 items-center ">
            <hr className="w-2/5 border border-black opacity-20" />
            <p className="text-grayborder">Or</p>
            <hr className="w-2/5 border border-black opacity-20" />
          </div>
          <LoginForm />
        </article>
      </section>
    </main>
  );
};
export default login;
