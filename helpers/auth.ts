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
 * @returns a Datasnapshot object
 * Checks if a user with this username exists and returns a snapshot.
 */
export async function getUserSnapshot(emailOrUsername: string) {
  return await get(
    query(
      ref(projectDatabase, "users"),
      orderByChild("username"),
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
   * Register
   */
  if (err.code === "auth/email-already-in-use") {
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
  } else if (err.message.indexOf("offline") !== -1) {
    /**
     * Generic
     */
    setError("You don't have an internet connection.");
  } else {
    setError(err.message);
  }
}
