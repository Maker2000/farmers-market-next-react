"use client";
import Link from "next/link";
import React from "react";
import ReactGoogleAutocomplete from "react-google-autocomplete";
import signupHook from "./signup.hook";
const Signup = () => {
  const hook = signupHook();
  return (
    <form className="flex py-4 justify-center items-center">
      <div className="flex flex-col bg-panel gap-4 w-11/12 sm:w-4/5 lg:w-4/6 xl:w-3/6 2xl:w-5/12 p-8 rounded-xl">
        <h1 className="text-3xl font-bold">Sign Up</h1>
        <label htmlFor="username" className="label">
          Username
          <input
            id="username"
            onChange={(e) => {
              hook.setUserName(e.target.value.toString());
              console.log(hook.newUser);
            }}
            className="input"
            type="text"
          />
        </label>

        <label htmlFor="email" className="label">
          Email
          <input id="email" className="input" type="email" />
        </label>
        <label htmlFor="password" className="label">
          Password
          <input id="password" className="input" type="password" />
        </label>
        <label htmlFor="confirmPassword" className="label">
          Confirm Password
          <input id="confirmPassword" className="input" type="password" />
        </label>
        <h3 className="text-md font-bold">Address</h3>
        <label htmlFor="autocompleteAddress" className="label">
          <div className="flex flex-row justify-between">
            Autocomplete Address
            <div className="flex flex-row align-middle items-center">
              <div className="text-xs pr-1">enable</div>
              <input
                type="checkbox"
                checked={hook.enableAutoComplete}
                onChange={(e) => hook.handleAutoCompleteToggle(e.target.checked)}
                name="autocompleteToggle"
                id="autocompleteToggle"
              />
            </div>
          </div>
          <ReactGoogleAutocomplete
            onPlaceSelected={(place, ref, obj) => {
              console.log(place);
            }}
            apiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY}
            className="input"
            disabled={!hook.enableAutoComplete}
          />
        </label>
        <div className="flex gap-4 flex-col lg:flex-row">
          <label htmlFor="address1" className="label">
            Address 1
            <input id="address1" disabled={hook.enableAutoComplete} className="input" type="text" />
          </label>
          <label htmlFor="address2" className="label">
            Address 2
            <input id="address2" disabled={hook.enableAutoComplete} className="input" type="text" />
          </label>
        </div>
        <label htmlFor="address2" className="label">
          City
          <input id="address2" disabled={hook.enableAutoComplete} className="input" type="text" />
        </label>
        <label htmlFor="subdivision" className="label">
          State / Subdivision
          <input id="subdivision" disabled={hook.enableAutoComplete} className="input" type="text" />
        </label>
        <label htmlFor="zip" className="label">
          Zip
          <input id="zip" disabled={hook.enableAutoComplete} className="input" type="text" />
        </label>
        <input className="btn-primary p-2 w-1/3 self-center font-bold" type="button" value="SIGN UP" />
        <div className="self-center">
          Already have an account?
          <span className="pl-1 text-primary-hover">
            <Link href="login">Login</Link>
          </span>
        </div>
      </div>
    </form>
  );
};

export default Signup;
