"use client";
import Image from "next/image";
import React from "react";
import Button from "./components/buttons";

const Error = () => {
  return (
    <>
      <div className="flex justify-center items-center flex-col">
        <Image
          src="/images/error.png"
          alt="Error Image"
          width="150"
          height="150"
          className="mt-32"
        />
        <h1 className="text-3xl font-bold mt-5">404</h1>
        <h1 className="text-3xl font-bold">Page not found</h1>
        <p className=" text-gray-400 w-1/3 text-center mt-5">
          Sorry, the page you were looking for could not be found. You may have
          miss typed the address or the page may have been moved
        </p>

        <div className="mt-5 mb-5">
          <Button href="/" type="primary">
            Take me to the homepage
          </Button>
        </div>
      </div>
    </>
  );
};

export default Error;
