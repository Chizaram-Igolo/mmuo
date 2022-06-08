/**
 * Vendor-defined UI components/utilites/etc.
 */
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
