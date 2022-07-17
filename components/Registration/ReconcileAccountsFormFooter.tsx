import { useRouter } from "next/router";
import { useEffect, useState } from "react";

/**
 * Developer-defined UI components/hooks/constants.
 */
import SocialAuthButton from "@Buttons/SocialAuthButton";
import { useAuth } from "@contexts/AuthContext";
import { handleFacebookSignIn, handleGoogleSignIn } from "@helpers/auth";

interface IReconcileAccountsFormFooter {
  loginType: string | undefined;
  authText: React.ReactNode | string;
  termsText?: React.ReactNode | string;
  termsHyperLinkText?: string;
  setError: React.Dispatch<React.SetStateAction<string>>;
}

const ReconcileAccountsFormFooter: React.FC<IReconcileAccountsFormFooter> = ({
  loginType,
  authText,
  termsText,
  setError,
}) => {
  const router = useRouter();
  const { user, googleSignIn, facebookSignIn } = useAuth();

  const [googleLoading, setGoogleLoading] = useState(false);
  const [facebookLoading, setFacebookLoading] = useState(false);

  function onGoogleSignIn() {
    handleGoogleSignIn(setGoogleLoading, googleSignIn, setError);
  }

  function onFacebookSignIn() {
    handleFacebookSignIn(setFacebookLoading, facebookSignIn, setError);
  }

  useEffect(() => {
    if (user !== null) router.push("/feed");
  }, [user]);

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
          continue signin with
        </p>
        <div
          className="flex flex-col gap-2 lg:gap-2 xl:gap-4 sm:flex-row 
                     md:flex-col xl:flex-row justify-between"
        >
          {loginType?.toLowerCase() === "google" && (
            <SocialAuthButton
              type="Google"
              label="Google"
              onClick={onGoogleSignIn}
              loading={googleLoading}
            />
          )}

          {loginType?.toLowerCase() === "facebook" && (
            <SocialAuthButton
              type="Facebook"
              label="Facebook"
              onClick={onFacebookSignIn}
              loading={facebookLoading}
            />
          )}
        </div>

        {/* <hr className="mt-5" /> */}
        <p
          className="text-slate-700 text-[0.875rem] leading-6 mt-4 mb-0 mx-0 
                   text-center"
        >
          {authText}
        </p>
      </div>
      <hr className="mt-5" />
      {termsText && (
        <p
          className="text-[#535772] text-[0.875rem] leading-6 mt-4 mb-0 mx-0 
                 text-center"
        >
          {termsText}
        </p>
      )}
    </>
  );
};

export default ReconcileAccountsFormFooter;
