/**
 * React imports.
 */
import Link from "next/link";
import { useState } from "react";

/**
 * Vendor-defined UI components/hooks/utilities/etc.
 */
import { FirebaseError } from "firebase/app";

/**
 * Context provider containing application-wide state.
 */
import { useAuth } from "@contexts/AuthContext";

/**
 * Developer-defined UI components/hooks/constants.
 */
import { isEmail, authErrorMessage } from "@helpers/auth";
import TextInput from "@components/Inputs/TextInput";
import AuthButton from "@components/Buttons/AuthButton";
import FormHeader from "./FormHeader";

export default function ForgotPasswordForm() {
  const { resetPassword } = useAuth();

  const [emailOrUsername, setEmailOrUsername] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const [isEmailSent, setIsEmailSent] = useState(false);

  async function signInUser(e: React.FormEvent) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);

      if (isEmail(emailOrUsername)) {
        await resetPassword(emailOrUsername);
        setIsEmailSent(true);
      } else {
        setError("The email address is not valid.");
      }

      setEmailOrUsername("");
    } catch (err) {
      if (err instanceof FirebaseError) authErrorMessage(err, setError);
      else setError("Sorry, something went wrong");
    }

    setLoading(false);
  }

  return (
    <form onSubmit={signInUser}>
      {!isEmailSent && (
        <>
          <FormHeader
            text="Enter the email for your account. If an account exists with 
                  that email address, you will receive a password reset link."
            error={error}
          />

          <div className="relative inline-flex flex-col mt-4 w-full">
            <TextInput
              type="email"
              minLength={2}
              name="emailOrUsername"
              placeholder="Email address"
              value={emailOrUsername}
              onChangeFunc={(e) => setEmailOrUsername(e.target.value)}
              required
            />
          </div>

          <AuthButton loading={loading}>
            <span className="font-WorkSans_Bold">Reset password</span>
          </AuthButton>
        </>
      )}

      {isEmailSent && (
        <FormHeader
          success="A password reset link has been sent. Please, check 
                 your inbox for further instructions."
        />
      )}

      <hr className="mt-5" />
      <p
        className="text-slate-700 text-[0.875rem] leading-6 mt-4 mb-0 mx-0 
                   text-center"
      >
        <Link href="/auth/signin">
          <a className="underline underline-offset-4 decoration-1">
            Go back to Sign in
          </a>
        </Link>
        &nbsp; | &nbsp;
        <Link href="/">
          <a className="underline underline-offset-4 decoration-1">Go home</a>
        </Link>
      </p>
    </form>
  );
}
