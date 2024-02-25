"use client";

import { signIn, signOut } from "next-auth/react";
import Link from "next/link";
import { AiFillCaretRight } from "react-icons/ai";
export const LoginButton = ({
  provider,
  children,
  style,
}: {
  provider: string;
  children: React.ReactNode;
  style: string;
}) => {
  return (
    <button className={style} onClick={() => signIn(provider)}>
      {children}
    </button>
  );
};

export const RegisterButton = () => {
  return (
    <Link href="/register" style={{ marginRight: 10 }}>
      Register
    </Link>
  );
};

export const LogoutButton = () => {
  return (
    <button style={{ marginRight: 10 }} onClick={() => signOut()}>
      Sign Out
    </button>
  );
};

export const ProfileButton = () => {
  return <Link href="/profile">Profile</Link>;
};

const Button = ({
  href,
  children,
  type,
}: {
  href: string;
  children: React.ReactNode;
  type: string;
}) => {
  return (
    <Link
      href={href}
      className={
        type === "primary"
          ? "group btn-primary flex w-fit items-center justify-center"
          : type === "secondary"
          ? "group btn-secondary flex w-fit items-center justify-center"
          : "group btn-tertiary flex w-fit items-center justify-center "
      }
    >
      <span className="group-hover:-translate-x-1 group-hover:-scale-10 duration-200">
        {children}
      </span>
      <AiFillCaretRight className="invisible group-hover:visible group-hover:translate-x-1 duration-200 text-white" />
    </Link>
  );
};
export default Button;
