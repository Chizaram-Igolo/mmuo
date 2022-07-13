/**
 * React imports.
 */
import { useRouter } from "next/router";
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
import { appAuth } from "@firebase/config";
import { authErrorMessage, isEmail } from "@helpers/auth";
import { updateDBRecord } from "@helpers/user";
import TextInput from "@Inputs/TextInput";
import AuthButton from "@Buttons/AuthButton";
import FormHeader from "./FormHeader";
import FormFooter from "./FormFooter";

export default function SignUpForm() {
  const { signup } = useAuth();
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function signUpUser(e: React.FormEvent) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);

      /**
       * 1. Firebase signs up the user using email and password first, and
       *    returns a user profile object.
       *
       * 2. We update their profile object with their provided username.
       *
       * 3. Finally, we update their database record with properties from the
       *    profile object and set other default values including the creation
       *    date of their account.
       */
      if (email && password && isEmail(email)) {
        const userCredential = await signup(email, password);
        const { user } = userCredential;

        await appAuth.updateProfile(user, {
          displayName: username,
        });

        await updateDBRecord(user, "Email");

        setUsername("");
        setEmail("");
        setPassword("");

        router.push("/feed");
      } else {
        setError(`Username '${username}' is already taken.`);
      }
    } catch (err: any) {
      if (err instanceof FirebaseError) authErrorMessage(err, setError);
      else setError("Sorry, something went wrong. Please try again.");
    }

    setLoading(false);
  }

  return (
    <form onSubmit={signUpUser}>
      <div>
        <FormHeader error={error} />

        <div className="relative inline-flex flex-col mt-4 w-full">
          <TextInput
            type="text"
            minLength={4}
            name="username"
            placeholder="Username"
            value={username}
            onChangeFunc={(e) => setUsername(e.target.value)}
            required
          />

          <TextInput
            type="email"
            minLength={12}
            name="email"
            placeholder="Email"
            value={email}
            onChangeFunc={(e) => setEmail(e.target.value)}
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

      <AuthButton loading={loading}>
        <span className="font-WorkSans_Bold">Sign up</span>
      </AuthButton>

      <FormFooter
        setError={setError}
        authText={
          <Link href="/auth/signin">
            <a className="underline underline-offset-4 decoration-1">
              Already have an account? Sign in.
            </a>
          </Link>
        }
        termsText={
          <>
            By signing up you agree to our{" "}
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
    </form>
  );
}
