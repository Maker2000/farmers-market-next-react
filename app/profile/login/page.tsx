"use client";
import Link from "next/link";
import React from "react";

const Login = () => {
  return (
    <div className="flex py-4 justify-center items-center">
      <div className="flex flex-col bg-panel gap-4 w-11/12 sm:w-4/5 lg:w-4/6 xl:w-3/6 2xl:w-5/12 p-8 rounded-xl">
        <h1 className="text-3xl font-bold">Login</h1>
        <label htmlFor="username" className="label">
          Username / Email
          <input id="username" className="input" type="text" />
        </label>
        <label htmlFor="password" className="label">
          Password
          <input id="password" className="input" type="password" />
        </label>
        <input className="btn-primary p-2 w-1/3 self-center font-bold" type="button" value="Login" />
        <div className="self-center">
          Need a new account?
          <span className="pl-1 text-primary-hover">
            <Link href="signup">Sign up</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
