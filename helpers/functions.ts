import { FirebaseError } from "firebase/app";
import { Dispatch, SetStateAction } from "react";

export function isEmail(email: string) {
  return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email);
}

/**
 *
 * @param errObj : FirebaseError
 * @param setError: Dispatch<SetStateAction<string>>
 */
export function registerErrorMessage(
  err: FirebaseError,
  setError: Dispatch<SetStateAction<string>>
) {
  if (err.code === "auth/wrong-password") {
    setError("The password is invalid or the user does not have a password.");
  } else if (err.code === "auth/network-request-failed") {
    setError("It seems your internet connection isn't very good right now.");
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
