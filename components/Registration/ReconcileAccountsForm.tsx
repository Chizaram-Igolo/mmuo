/**
 * React imports.
 */
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

/**
 * Developer-defined UI components/hooks/constants.
 */
import FormHeader from "./FormHeader";
import ReconcileAccountsFormFooter from "./ReconcileAccountsFormFooter";
import type { serverTimestamp } from "firebase/database";

export interface IUserCred {
  username: string;
  showOnlineStatus: boolean;
  showLastSeenDate: boolean;
  photoURL: string;
  email: string;
  creationDate: typeof serverTimestamp;
  accountLoginType?: string;
  socialCredAccessToken?: string;
}

interface IReconcileAccountsForm {
  userCred: IUserCred;
}

const ReconcileAccountsForm: React.FC<IReconcileAccountsForm> = ({
  userCred,
}) => {
  const [error, setError] = useState("");

  return (
    <div>
      <div>
        <FormHeader error={error} />

        <h3 className="text-xl font-WorkSans_SemiBold text-center">
          Looks like your account was created using {userCred?.accountLoginType}
          !
        </h3>

        <div className="relative inline-flex flex-col mt-8 w-full">
          {userCred?.photoURL && (
            <div className="block w-[64px] h-[70px] mx-auto">
              <Image
                src={userCred.photoURL}
                alt="Profile Picture"
                width={64}
                height={64}
                className="rounded-full"
              />
            </div>
          )}

          {/* Only retrieve first name of their social media profile where possible. */}
          <div className="w-full h-auto mx-auto px-4 text-center">
            <span className="font-WorkSans_SemiBold">
              {userCred?.username?.split(" ")[0]}
            </span>
          </div>
        </div>
      </div>

      <ReconcileAccountsFormFooter
        loginType={userCred?.accountLoginType}
        setError={setError}
        authText={
          <Link href="/auth/signin">
            <a className="underline underline-offset-4 decoration-1">
              Or Sign in to another account.
            </a>
          </Link>
        }
        termsText={
          <>
            By signing in you agree to our{" "}
            <Link href="/terms-of-service">
              <a className="underline underline-offset-4 decoration-1">
                Terms of Service
              </a>
            </Link>{" "}
            and{" "}
            <Link href="/privacy-policy">
              <a className="underline underline-offset-4 decoration-1">
                Privacy Policy.
              </a>
            </Link>
          </>
        }
      />
    </div>
  );
};

export default ReconcileAccountsForm;
