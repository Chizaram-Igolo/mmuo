import { useRouter } from "next/router";
import { useEffect } from "react";

/**
 * Developer-defined UI components/hooks/constants.
 */
import SocialAuthButton from "@Buttons/SocialAuthButton";
import { useAuth } from "@contexts/AuthContext";
import { FirebaseError } from "firebase/app";
import { authErrorMessage } from "@helpers/auth";

interface IFormFooter {
  authText: React.ReactNode | string;
  termsText?: React.ReactNode | string;
  termsHyperLinkText?: string;
  termsRoute?: string;
  setError: React.Dispatch<React.SetStateAction<string>>;
}

const FormFooter: React.FC<IFormFooter> = ({
  authText,
  termsText,
  termsRoute,
  setError,
}) => {
  const router = useRouter();
  const { user, googleSignIn, facebookSignIn } = useAuth();

  const handleGoogleSignIn = async () => {
    try {
      let err: FirebaseError = await googleSignIn();
      if (err) authErrorMessage(err, setError);
    } catch (err: any) {
      setError("Sorry, something went wrong. Please try again.");
    }
  };

  const handleFacebookSignIn = async () => {
    try {
      let err: FirebaseError = await facebookSignIn();
      if (err) authErrorMessage(err, setError);
    } catch (err: any) {
      setError("Sorry, something went wrong. Please try again.");
    }
  };

  // useEffect(() => {
  //   if (user !== null) router.push("/feed");
  // }, [user]);

  return (
    <>
      <div>
        <p
          className="relative text-center text-[#535772] text-sm leading-6 
                     mt-6 mb-5 mx-0 
                     before:block before:content-[''] before:w-1/4 
                     before:h-[1px] before:absolute before:top-1/2 
                     before:bg-[#c0c2d3] 
                     after:block after:content-[''] after:w-1/4 after:h-[1px]
                     after:absolute after:top-1/2 after:right-0 
                     after:bg-[#c0c2d3]"
        >
          or sign in with
        </p>
        <div
          className="flex flex-col gap-2 lg:gap-2 xl:gap-4 sm:flex-row 
                     md:flex-col xl:flex-row justify-between"
        >
          <SocialAuthButton
            type="Google"
            label="Google"
            onClick={handleGoogleSignIn}
          />
          <SocialAuthButton
            type="Facebook"
            label="Facebook"
            onClick={handleFacebookSignIn}
          />
        </div>
      </div>
      {termsText && termsRoute && (
        <p
          className="text-[#535772] text-[0.875rem] leading-6 mt-4 mb-0 mx-0 
                 text-center"
        >
          <a href={termsRoute} title="Terms of Service">
            {termsText}
          </a>
        </p>
      )}
      <hr className="mt-5" />
      <p
        className="text-slate-700 text-[0.875rem] leading-6 mt-4 mb-0 mx-0 
                   text-center"
      >
        {authText}
      </p>
    </>
  );
};

export default FormFooter;
