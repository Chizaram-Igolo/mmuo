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
  const [loading, setLoading] = useState(true);
  const [userProfile, setUserProfile] = useState(null);

  const signup = (email, password) =>
    appAuth.createUserWithEmailAndPassword(auth, email, password);

  const signin = (email, password) =>
    appAuth.signInWithEmailAndPassword(auth, email, password);

  const signout = () => appAuth.signOut(auth).then(() => setLoading(true));

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
