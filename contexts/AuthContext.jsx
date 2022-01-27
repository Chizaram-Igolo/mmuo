import { useEffect, useState, useContext, createContext } from "react";
import firebase, { auth, projectDatabase } from "../firebase/config";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userProfile, setUserProfile] = useState(null);

  // Create new user.
  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
  }

  function signin(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  function signout() {
    return auth.signOut();
  }

  function resetPassword(email) {
    return auth.sendPasswordResetEmail(email);
  }

  function updateEmail(email) {
    return user.updateEmail(email);
  }

  function updatePassword(password) {
    return user.updatePassword(password);
  }

  function updateProfile(details) {
    return user.updateProfile(details);
  }

  function reauthenticateUser(email, password) {
    const credential = firebase.auth.EmailAuthProvider.credential(
      email,
      password
    );
    return user.reauthenticateWithCredential(credential);
  }

  function deleteAccount() {
    return user.delete();
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
      const unsubscribe = projectDatabase
        .ref(`users/${user.uid}`)
        .on("value", (snap) => {
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
