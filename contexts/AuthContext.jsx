import { useEffect, useState, useContext, createContext } from "react";
import {
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithRedirect,
  signInWithPopup,
} from "firebase/auth";

import {
  auth,
  appAuth,
  projectDatabase,
  ref,
  onValue,
} from "../firebase/config";
import { getUserSnapshot } from "@helpers/auth";
import { updateDBRecord } from "@helpers/user";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [socialCredAccessToken, setSocialCredAccessToken] = useState(null);
  const [loading, setLoading] = useState(true);
  const [userProfile, setUserProfile] = useState(null);

  const googleSignIn = () => {
    // await updateDBRecord(user, "Google");

    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider)
      .then(async (result) => {
        /**
         * Check if this user exists already. If they do not,
         * create a record for them.
         */
        const snapshot = await getUserSnapshot(result.user.email, "email");

        if (!snapshot.exists()) {
          await updateDBRecord({ ...result.user }, "Google");
        }
      })
      .catch((error) => {
        return error;
      });
  };

  const facebookSignIn = () => {
    // await updateDBRecord(user, "Google");

    const provider = new FacebookAuthProvider();
    return signInWithPopup(auth, provider)
      .then(async (result) => {
        const credential = FacebookAuthProvider.credentialFromResult(result);
        const accessToken = credential.accessToken;
        setSocialCredAccessToken(accessToken);

        /**
         * Check if this user exists already. If they do not,
         * create a record for them.
         */
        const snapshot = await getUserSnapshot(result.user.email, "email");

        if (!snapshot.exists()) {
          await updateDBRecord(
            { ...result.user, socialCredAccessToken: socialCredAccessToken },
            "Facebook",
            result.user.photoURL + "?height=128&access_token=" + accessToken
          );
        }
      })
      .catch((error) => {
        return error;
      });
  };

  const signup = (email, password) =>
    appAuth.createUserWithEmailAndPassword(auth, email, password);

  const signin = (email, password) =>
    appAuth.signInWithEmailAndPassword(auth, email, password);

  const signout = () =>
    appAuth.signOut(auth).then(() => {
      setSocialCredAccessToken(null);
      setLoading(true);
    });

  const resetPassword = (email) => appAuth.sendPasswordResetEmail(auth, email);

  const updateEmail = (email) => appAuth.updateEmail(user, email);

  const updatePassword = (password) => appAuth.updatePassword(user, password);

  const updateProfile = (details) => appAuth.updateProfile(user, details);

  const reauthenticateUser = (email, password) => {
    const credential = appAuth.EmailAuthProvider.credential(email, password);
    return user.reauthenticateWithCredential(credential);
  };

  const deleteAccount = () => appAuth.deleteUser(user);

  useEffect(() => {
    // Get the currently signed-in user.
    const unsubscribe = auth.onAuthStateChanged((u) => {
      setUser(u);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  useEffect(() => {
    // Get the user's full profile details.

    if (user != null) {
      return onValue(ref(projectDatabase, `users/${user.uid}`), (snap) => {
        if (snap) {
          setUserProfile(snap.val());
        }
      });
    }
  }, [user]);

  const value = {
    user,
    loading,
    userProfile,
    signup,
    signin,
    googleSignIn,
    facebookSignIn,
    socialCredAccessToken,
    signout,
    resetPassword,
    updateEmail,
    updatePassword,
    updateProfile,
    reauthenticateUser,
    deleteAccount,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export function useAuth() {
  return useContext(AuthContext);
}
