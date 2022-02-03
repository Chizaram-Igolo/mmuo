import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

import { useState } from "react";

import { useAuth } from "../contexts/AuthContext";

import {
  ref,
  query,
  orderByChild,
  equalTo,
  limitToFirst,
  get,
} from "firebase/database";
import { projectDatabase } from "../firebase/config";
import AlertMessage from "./alertmessage";

import googleLogo from "../public/google-logo.svg";
import githubLogo from "../public/github-logo.svg";

interface IValues {
  email: string;
  password: string;
}

export default function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signin } = useAuth();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  function clearMessages() {}

  function isEmail(email: string) {
    return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);

      if (isEmail(email)) {
        await signin(email, password);
      } else {
        const snapshot = await get(
          query(
            ref(projectDatabase, "users"),
            orderByChild("username"),
            equalTo(email),
            limitToFirst(1)
          )
        );

        if (snapshot.exists()) {
          const snapshotObj = snapshot.val();
          let userObj;

          for (var propName in snapshotObj) {
            if (snapshotObj.hasOwnProperty(propName)) {
              userObj = snapshotObj[propName];
            }
          }

          await signin(userObj.email, password);
        } else {
          throw new Error("No account exists with this username.");
        }
      }

      setEmail("");
      setPassword("");
      router.push("/feed");
    } catch (err: any) {
      if (err.code === "auth/wrong-password") {
        setError(
          "The password is invalid or the user does not have a password."
        );
      } else if (err.code === "auth/network-request-failed") {
        setError(
          "It seems your internet connection isn't very good right now."
        );
      } else if (err.code === "auth/too-many-requests") {
        setError(
          "Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later."
        );
      } else if (err.message.indexOf("offline") !== -1) {
        setError("You don't have an internet connection.");
      } else {
        setError(err.message);
      }
    }

    setLoading(false);
  }

  return (
    <form
      className="form-align-left"
      id="heroHomeFormVariant"
      onSubmit={handleSubmit}
    >
      <span className="formWrapperParent">
        <p className="css-oztn6x e7kuofc0 text-[#535772] text-base font-semibold tracking-[-0.01875rem] leading-6 m-0 text-center">
          Sign in to get started!
        </p>

        {error && (
          <>
            <AlertMessage
              message={error}
              severity="error"
              isOpen={error.length > 0}
              clearMessages={clearMessages}
              keepOpen={true}
            />
          </>
        )}

        <div className="inputFormWrapper relative inline-flex flex-col mt-4 w-full">
          <input
            aria-label="email"
            type="text"
            minLength={2}
            name="email"
            placeholder="Email or Username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="relative bg-white border border-[#c0c2d3] rounded-lg focus:outline-none active:outline-none shadow-[0px_4px_0px_rgba(91,105,135,0.2)] hover:shadow-[0px_2px_0px_rgba(91,105,135,0.2)] text-[#031b4e] cursor-text text-base mb-4 py-[0.55rem] px-[1rem] w-full transition-all duration-2008"
          />
          <input
            aria-label="password"
            type="password"
            minLength={8}
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
            "Sign in with email"
          )}
        </button>
        <p className="css-9wrdnx e7kuofc4 relative text-center text-[#535772] text-sm leading-6 my-6 mx-0 ">
          or sign in with
        </p>
        <div className="css-1skska7 e7kuofc3 flex flex-col gap-2 lg:gap-0 xl:gap-4 sm:flex-row md:flex-col xl:flex-row justify-between">
          <a
            href="https://cloud.digitalocean.com/registrations/google"
            className="flex w-full sm:w-[80%] md:w-full xl:w-[100%] items-center justify-center self-center bg-white mb-2 border border-[#c0c2d3] rounded-lg shadow-[0_4px_0_rgb(222,225,231)] hover:shadow-[0_2px_0_rgb(222,225,231)] box-border text-[#000824] font-medium py-2 px-6 transition-all duration-200"
          >
            <Image src={googleLogo} alt="Google Icon" />
            &nbsp; Google
          </a>
          <a
            href="https://cloud.digitalocean.com/registrations/github"
            className="flex w-full sm:w-[80%] md:w-full xl:w-[100%] items-center justify-center self-center bg-white mb-2 border border-[#c0c2d3] rounded-lg shadow-[0_4px_0_rgb(222,225,231)] hover:shadow-[0_2px_0_rgb(222,225,231)] box-border text-[#000824] font-medium py-2 px-6 transition-all duration-200"
          >
            <Image src={githubLogo} alt="GitHub Icon" />
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
