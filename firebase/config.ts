import getConfig from "next/config";

import { initializeApp, getApp, getApps, FirebaseApp } from "firebase/app";
import * as appAuth from "firebase/auth";
import {
  getFirestore,
  serverTimestamp,
  query,
  collection,
  where,
  getDocs,
} from "firebase/firestore";
import {
  getDatabase,
  serverTimestamp as dbServerTimestamp,
  query as dbQuery,
  ref,
  set,
  onValue,
} from "firebase/database";
import { getStorage } from "firebase/storage";
import { getFunctions } from "firebase/functions";

const { serverRuntimeConfig } = getConfig();

// if (process.env.NODE_ENV !== "production") {
//   import("firebase/analytics").then(() => {});
// }

const firebaseConfig = {
  apiKey: serverRuntimeConfig.apiKey,
  authDomain: serverRuntimeConfig.authDomain,
  databaseURL: serverRuntimeConfig.databaseURL,
  projectId: serverRuntimeConfig.projectId,
  storageBucket: serverRuntimeConfig.storageBucket,
  messagingSenderId: serverRuntimeConfig.messagingSenderId,
  appId: serverRuntimeConfig.appId,
};

let app: FirebaseApp;

if (getApps().length) {
  app = getApp();
} else {
  app = initializeApp({
    apiKey:
      process.env.NODE_ENV === "development"
        ? "AIzaSyCJ3lxll_vqXZDPnOqItJS9NmtOUocwDBE"
        : "AIzaSyBQTs7yWw7_FJGWcqwBUbY6HZhPL0NFD2I",
    authDomain:
      process.env.NODE_ENV === "development"
        ? "dev-39f7d.firebaseapp.com"
        : "prod-54f22.firebaseapp.com",
    databaseURL:
      process.env.NODE_ENV === "development"
        ? "https://dev-39f7d-default-rtdb.firebaseio.com"
        : "https://prod-54f22-default-rtdb.firebaseio.com",
    projectId:
      process.env.NODE_ENV === "development" ? "dev-39f7d" : "prod-54f22",
    storageBucket:
      process.env.NODE_ENV === "development"
        ? "dev-39f7d.appspot.com"
        : "prod-54f22.appspot.com",
    messagingSenderId:
      process.env.NODE_ENV === "development" ? "914004719772" : "623659292042",
    appId:
      process.env.NODE_ENV === "development"
        ? "1:914004719772:web:a224ab20fb9adb59261559"
        : "1:623659292042:web:d1b7b226cc852e1e072473",
    measurementId: process.env.NODE_ENV === "development" ? "" : "G-VDECR433R7",
  });
}

// Initialize Firebase Auth, Firestore, Storage and Functions
const auth = appAuth.getAuth(app);
const projectDatabase = getDatabase(app);
const projectFirestore = getFirestore(app);
const projectStorage = getStorage(app);
const projectFunctions = getFunctions(app);
const timestamp = serverTimestamp;
const dbTimestamp = dbServerTimestamp;

export default app;
export {
  auth,
  appAuth,
  projectDatabase,
  projectFirestore,
  projectStorage,
  projectFunctions,
  query,
  collection,
  where,
  getDocs,
  dbQuery,
  ref,
  set,
  onValue,
  timestamp,
  dbTimestamp,
};
