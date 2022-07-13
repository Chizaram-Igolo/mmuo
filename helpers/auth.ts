/**
 * React imports.
 */
import { Dispatch, SetStateAction } from "react";

/**
 * Vendor-defined UI components/utilites/etc.
 */
import { FirebaseError } from "firebase/app";
import {
  ref,
  query,
  orderByChild,
  equalTo,
  limitToFirst,
  get,
  DataSnapshot,
} from "firebase/database";

/**
 * Developer-defined UI components/hooks/constants.
 */
import { projectDatabase } from "@firebase/config";

/**
 *
 * @param emailOrUsername
 * @param checkFor
 * @returns a Datasnapshot object
 * Checks if a user with this username or email exists and returns a snapshot.
 */
export async function getUserSnapshot(
  emailOrUsername: string,
  checkFor = "username"
) {
  let orderByField = checkFor === "username" ? "username" : "email";

  return await get(
    query(
      ref(projectDatabase, "users"),
      orderByChild(orderByField),
      equalTo(emailOrUsername),
      limitToFirst(1)
    )
  );
}

/**
 *
 * @param snapshot
 * @returns a Firebase User object
 */
export function getUserObject(snapshot: DataSnapshot) {
  const snapshotObj = snapshot.val();
  let userObj;

  for (var propName in snapshotObj) {
    if (snapshotObj.hasOwnProperty(propName)) {
      userObj = snapshotObj[propName];
    }
  }

  return userObj;
}

export function isEmail(email: string) {
  return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email);
}

/**
 *
 * @param errObj : FirebaseError
 * @param setError: Dispatch<SetStateAction<string>>
 */
export function authErrorMessage(
  err: FirebaseError,
  setError: Dispatch<SetStateAction<string>>
) {
  /**
   * Pop-up sign in (Google/Facebook)
   */
  if (
    err.code === "auth/popup-closed-by-user" ||
    err.code === "auth/cancelled-popup-request"
  ) {
    // Do nothing if the user intentionally closes the pop up.
  } else if (err.code === "auth/account-exists-with-different-credential") {
    setError(
      "This account has already been linked to another social auth provider." +
        " Please try the other auth provider."
    );
  } else if (err.code === "auth/popup-blocked") {
    setError(
      "The sign in request was blocked. Please adjust your browser settings and try again later."
    );
  } else if (err.code === "auth/email-already-in-use") {
    /**
     * Register
     */
    console.log(err.name);
    setError("Email address already in use.");
  } else if (err.code === "auth/wrong-password") {
    /**
     * Sign in
     */
    setError("The password is invalid or the user does not have a password.");
  } else if (err.code === "auth/network-request-failed") {
    setError("It seems your internet connection isn't very good right now.");
  } else if (err.code === "auth/too-many-requests") {
    setError(
      "Access to this account has been temporarily disabled due to too many " +
        "failed login attempts. You can immediately restore it by resetting " +
        "your password or you can try again later."
    );
  } else if (err.code === "auth/user-not-found") {
    setError("No user with this account exists.");
  } else if (
    err.hasOwnProperty("message") &&
    err.message.indexOf("offline") !== -1
  ) {
    /**
     * Generic
     */
    setError("You don't have an internet connection.");
  } else {
    setError(err.message);
  }
}
