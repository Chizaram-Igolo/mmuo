import Link from "next/link";
import React from "react";

export default function SignInForm() {
  return (
    <form
      className="form-align-left"
      action="https://cloud.digitalocean.com/registrations"
      id="heroHomeFormVariant"
      method="post"
    >
      <span className="formWrapperParent">
        <p className="css-oztn6x e7kuofc0 text-[#535772] text-base font-semibold tracking-[-0.01875rem] leading-6 m-0 text-center">
          Sign in to get started!
        </p>
        <div className="inputFormWrapper relative inline-flex flex-col mt-4 w-full">
          <input
            aria-label="email"
            type="email"
            minLength={2}
            name="user[email]"
            placeholder="Email"
            required
            className="relative bg-white border border-[#c0c2d3] rounded-lg focus:outline-none active:outline-none shadow-[0px_4px_0px_rgba(91,105,135,0.2)] hover:shadow-[0px_2px_0px_rgba(91,105,135,0.2)] text-[#031b4e] cursor-text text-base mb-4 py-[0.55rem] px-[1rem] w-full transition-all duration-2008"
          />
          <input
            aria-label="password"
            type="password"
            minLength={8}
            name="user[password]"
            placeholder="Password"
            required
            className="relative bg-white border border-[#c0c2d3] rounded-lg focus:outline-none active:outline-none shadow-[0px_4px_0px_rgba(91,105,135,0.2)] hover:shadow-[0px_2px_0px_rgba(91,105,135,0.2)] text-[#031b4e] cursor-text text-base mb-4 py-[0.55rem] px-[1rem] w-full transition-all duration-200"
          />
        </div>
      </span>
      <div className="buttonWrapper">
        <button
          id="form_button_test_variant"
          type="submit"
          className="css-swdcx8 e7kuofc5 w-full flex items-center bg-[#dbeaff] border border-[#003f99] rounded-lg shadow-[0px_4px_0px_rgb(0,54,153)] active:shadow-[0px_1px_0px_rgb(0,54,153)] text-[#003f99] cursor-pointer text-base font-semibold justify-center py-[0.55rem] px-[1.5rem] transition-all duration-[100ms]"
        >
          Sign in with email
        </button>
        <p className="css-9wrdnx e7kuofc4 relative text-center text-[#535772] text-sm leading-6 my-6 mx-0 ">
          or sign in with
        </p>
        <div className="css-1skska7 e7kuofc3 flex flex-col gap-2 lg:gap-0 xl:gap-4 sm:flex-row md:flex-col xl:flex-row justify-between">
          <a
            href="https://cloud.digitalocean.com/registrations/google"
            className="flex w-full sm:w-[80%] md:w-full xl:w-[100%] items-center justify-center self-center bg-white mb-2 border border-[#c0c2d3] rounded-lg shadow-[0_4px_0_rgb(222,225,231)] hover:shadow-[0_2px_0_rgb(222,225,231)] box-border text-[#000824] font-medium py-2 px-6 transition-all duration-200"
          >
            <img
              data-src="https://www-static.cdn.prismic.io/www-static/7b66f955-63dd-41f5-a403-e6727b24d4ea_google-logo.svg"
              src="https://www-static.cdn.prismic.io/www-static/7b66f955-63dd-41f5-a403-e6727b24d4ea_google-logo.svg"
              alt="Google Icon"
              className="blur-up css-181q7mr ls-is-cached lazyloaded"
            />
            &nbsp; Google
          </a>
          <a
            href="https://cloud.digitalocean.com/registrations/github"
            className="flex w-full sm:w-[80%] md:w-full xl:w-[100%] items-center justify-center self-center bg-white mb-2 border border-[#c0c2d3] rounded-lg shadow-[0_4px_0_rgb(222,225,231)] hover:shadow-[0_2px_0_rgb(222,225,231)] box-border text-[#000824] font-medium py-2 px-6 transition-all duration-200"
          >
            <img
              data-src="https://www-static.cdn.prismic.io/www-static/0a3e37e0-1706-41d5-98d1-854585205a5e_github-logo.svg"
              src="https://www-static.cdn.prismic.io/www-static/0a3e37e0-1706-41d5-98d1-854585205a5e_github-logo.svg"
              alt="GitHub Icon"
              className="blur-up css-181q7mr ls-is-cached lazyloaded"
            />
            &nbsp; Meta
          </a>
        </div>
      </div>
      <hr className="mt-5" />
      <p className="css-1h2zuw e7kuofc2 text-slate-700 underline underline-offset-4 decoration-1 text-[0.875rem] leading-6 mt-4 mb-0 mx-0 text-center">
        <Link href="/signup">
          <a href="" title="Terms of Service">
            New here? Sign up for mmuo.
          </a>
        </Link>
      </p>
    </form>
  );
}
