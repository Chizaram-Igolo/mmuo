/**
 * Developer-defined UI components/hooks/constants.
 */
import { dbTimestamp, projectDatabase, ref, set } from "@firebase/config";
import { User } from "firebase/auth";

type accountLoginTypeT = "Email" | "Google" | "Facebook";

export async function updateDBRecord(
  user: User,
  accountLoginType: accountLoginTypeT,
  customPhotoURLPath: string | null = null
) {
  return await set(ref(projectDatabase, "users/" + user.uid), {
    email: user.email,
    username: user.displayName,
    photoURL: customPhotoURLPath ? customPhotoURLPath : user.photoURL,
    showOnlineStatus: true,
    showLastSeenDate: true,
    creationDate: dbTimestamp(),
    accountLoginType: accountLoginType,
    // @ts-ignore
    socialCredAccessToken: user.socialCredAccessToken
      ? // @ts-ignore
        user.socialCredAccessToken
      : "",
  });
}
