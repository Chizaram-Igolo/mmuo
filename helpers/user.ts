/**
 * Developer-defined UI components/hooks/constants.
 */
import { dbTimestamp, projectDatabase, ref, set } from "@firebase/config";
import { User } from "firebase/auth";

export async function updateDBRecord(user: User) {
  return await set(ref(projectDatabase, "users/" + user.uid), {
    email: user.email,
    username: user.displayName,
    photoURL: user.photoURL,
    showOnlineStatus: true,
    showLastSeenDate: true,
    creationDate: dbTimestamp(),
  });
}
