import { useEffect, useState, useContext, createContext } from "react";
import {
  auth,
  appAuth,
  projectDatabase,
  ref,
  onValue,
} from "../firebase/config";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userProfile, setUserProfile] = useState(null);

  // Create new user.
  function signup(email, password) {
    return appAuth.createUserWithEmailAndPassword(auth, email, password);
  }

  function signin(email, password) {
    return appAuth.signInWithEmailAndPassword(auth, email, password);
  }

  function signout() {
    return appAuth.signOut(auth);
  }

  function resetPassword(email) {
    return appAuth.sendPasswordResetEmail(auth, email);
  }

  function updateEmail(email) {
    return appAuth.updateEmail(user, email);
  }

  function updatePassword(password) {
    return appAuth.updatePassword(user, password);
  }

  function updateProfile(details) {
    return appAuth.updateProfile(user, details);
  }

  function reauthenticateUser(email, password) {
    const credential = appAuth.EmailAuthProvider.credential(email, password);
    return user.reauthenticateWithCredential(credential);
  }

  function deleteAccount() {
    return appAuth.deleteUser(user);
  }

  useEffect(() => {
    // Get the currently signed-in user.
    const unsubscribe = auth.onAuthStateChanged((u) => {
      setUser(u);
    });

    return unsubscribe;
  }, []);

  useEffect(() => {
    // Get the user's full profile details.

    if (user != null) {
      const unsubscribe = ref(projectDatabase, `users/${user.uid}`);
      onValue(unsubscribe, (snap) => {
        if (snap) {
          setUserProfile(snap.val());
        }
      });

      return unsubscribe;
    }
  }, [user]);

  const value = {
    user,
    userProfile,
    signup,
    signin,
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
