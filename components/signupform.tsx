import Link from "next/link";
import { useRouter } from "next/router";

import React, { useState, useRef, RefObject } from "react";
import { useAuth } from "../contexts/AuthContext";

import {
  dbTimestamp,
  projectDatabase,
  projectFirestore,
  collection,
  ref,
  where,
  query,
  getDocs,
  dbQuery,
  set,
} from "../firebase/config";

export default function SignUpForm() {
  const [username, setUsername] = useState("");

  const emailRef: RefObject<HTMLInputElement> = useRef(null);
  const passwordRef: RefObject<HTMLInputElement> = useRef(null);

  const { signup } = useAuth();

  const [error, setError] = useState("");
  const [confirmPassError, setConfirmPassError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);

      const snapshot = await getDocs(
        query(
          collection(projectFirestore, "users"),
          where("username", "==", username)
        )
      );

      console.log(snapshot);

      if (
        snapshot.empty &&
        emailRef.current?.value &&
        passwordRef.current?.value
      ) {
        const userCredential = await signup(
          emailRef.current.value,
          passwordRef.current.value
        );

        const { user } = userCredential;

        console.log(
          username,
          emailRef.current.value,
          passwordRef.current.value
        );

        // await userCredential.user.sendEmailVerification();
        await userCredential.user.updateProfile({
          displayName: username,
          photoURL: "/profile/user.jpg",
        });

        await set(ref(projectDatabase, "users/" + user.uid), {
          email: user.email,
          username: user.displayName,
          photoURL: user.photoURL,
          showOnlineStatus: true,
          showLastSeenDate: true,
          creationDate: dbTimestamp,
        });

        router.push("/");
      } else {
        setError(`Username '${username}' is already taken.`);
      }
    } catch (err: any) {
      setError(err.message);
      console.log(err);
    }

    setLoading(false);
  }

  return (
    <form
      className="form-align-left"
      action="https://cloud.digitalocean.com/registrations"
      id="heroHomeFormVariant"
      method="post"
      onSubmit={handleSubmit}
    >
      <span className="formWrapperParent">
        <p className="css-oztn6x e7kuofc0 text-[#535772] text-base font-semibold tracking-[-0.01875rem] leading-6 m-0 text-center">
          Sign up to get started!
        </p>
        <div className="inputFormWrapper relative inline-flex flex-col mt-4 w-full">
          <input
            aria-label="username"
            type="text"
            minLength={2}
            name="user[name]"
            placeholder="Username"
            required
            className="relative bg-white border border-[#c0c2d3] rounded-lg focus:outline-none active:outline-none shadow-[0px_4px_0px_rgba(91,105,135,0.2)] hover:shadow-[0px_2px_0px_rgba(91,105,135,0.2)] text-[#031b4e] cursor-text text-base mb-4 py-[0.55rem] px-[1rem] w-full transition-all duration-2008"
          />
          <input
            aria-label="email"
            type="email"
            minLength={2}
            name="user[email]"
            placeholder="Email"
            ref={emailRef}
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
          disabled={loading}
          id="form_button_test_variant"
          type="submit"
          className={`css-swdcx8 e7kuofc5 w-full flex items-center bg-[#dbeaff] border border-[#003f99] rounded-lg text-[#003f99] ${
            loading
              ? "cursor-default shadow-[0px_4px_0px_rgb(120,124,183)]"
              : "cursor-pointer shadow-[0px_4px_0px_rgb(0,54,153)] active:shadow-[0px_1px_0px_rgb(0,54,153)]"
          } cursor-pointer text-base font-semibold justify-center py-[0.55rem] px-[1.5rem] transition-all duration-[100ms]`}
        >
          {loading ? (
            <div className="lds-ellipsis">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          ) : (
            "Sign up with email"
          )}
        </button>
        <p className="css-9wrdnx e7kuofc4 relative text-center text-[#535772] text-sm leading-6 my-4 mx-0 ">
          or sign up with
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

      <p className="css-1h2zuw e7kuofc2 text-[#535772] text-[0.875rem] leading-6 mt-4 mb-0 mx-0 text-center">
        By signing up you agree to the{" "}
        <a href="/legal/terms-of-service-agreement/" title="Terms of Service">
          Terms of Service
        </a>
        .
      </p>

      <hr className="mt-4" />
      <p className="css-1h2zuw e7kuofc2 text-slate-700 underline underline-offset-4 decoration-1 text-[0.875rem] leading-6 mt-2 mb-0 mx-0 text-center">
        <Link href="/signin">
          <a href="" title="Terms of Service">
            Already have an account? Sign in.
          </a>
        </Link>
      </p>
    </form>
  );
}
