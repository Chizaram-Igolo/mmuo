/**
 * React imports.
 */
import { useRouter } from "next/router";
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
import {
  isEmail,
  authErrorMessage,
  getUserObject,
  getUserSnapshot,
} from "@helpers/auth";
import TextInput from "@components/Inputs/TextInput";
import AuthButton from "@components/Buttons/AuthButton";
import FormHeader from "./FormHeader";
import FormFooter from "./FormFooter";

export default function SignInForm() {
  const { signin } = useAuth();
  const router = useRouter();

  const [emailOrUsername, setEmailOrUsername] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function signInUser(e: React.FormEvent) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);

      /**
       * 1. Check if an email is provided, then sign in the user.
       *
       * 2. If a username is provided instead, try to see if a user with
       *    that username exists by getting a snapshot of the user, then
       *    sign up using the users email from the database and their
       *    password.
       */

      if (isEmail(emailOrUsername)) {
        await signin(emailOrUsername, password);
      } else {
        const snapshot = await getUserSnapshot(emailOrUsername);

        if (snapshot.exists()) {
          await signin(getUserObject(snapshot).email, password);
        } else {
          throw new Error("No account exists with this username.");
        }
      }

      setEmailOrUsername("");
      setPassword("");

      router.push("/feed");
    } catch (err) {
      if (err instanceof FirebaseError) authErrorMessage(err, setError);
      else setError("Sorry, something went wrong");
    }

    setLoading(false);
  }

  return (
    <form onSubmit={signInUser}>
      <div>
        <FormHeader text="Sign in to get started!" error={error} />

        <div className="relative inline-flex flex-col mt-4 w-full">
          <TextInput
            type="text"
            minLength={2}
            name="emailOrUsername"
            placeholder="Email or Username"
            value={emailOrUsername}
            onChangeFunc={(e) => setEmailOrUsername(e.target.value)}
            required
          />

          <TextInput
            type="password"
            minLength={8}
            name="password"
            placeholder="Password"
            value={password}
            onChangeFunc={(e) => setPassword(e.target.value)}
            required
          />
        </div>
      </div>

      <AuthButton loading={loading} />

      <FormFooter
        authRoute="/auth/signup"
        authText="New here? Sign up for Mmuo."
      />
    </form>
  );
}
