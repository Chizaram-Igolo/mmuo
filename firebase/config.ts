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

import { enableIndexedDbPersistence } from "firebase/firestore";

// if (process.env.NODE_ENV !== "production") {
//   import("firebase/analytics").then(() => {});
// }

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_DATABASE_URL,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID,
};

let app: FirebaseApp;

if (getApps().length) {
  app = getApp();
} else {
  app = initializeApp(firebaseConfig);
}

// Initialize Firebase Auth, Firestore, Storage and Functions
const auth = appAuth.getAuth(app);
const projectDatabase = getDatabase(app);
const projectFirestore = getFirestore(app);
const projectStorage = getStorage(app);
const projectFunctions = getFunctions(app);
const timestamp = serverTimestamp;
const dbTimestamp = dbServerTimestamp;

if (typeof window !== "undefined") {
  enableIndexedDbPersistence(projectFirestore).catch((err) => {
    if (err.code == "failed-precondition") {
      // Multiple tabs open, persistence can only be enabled
      // in one tab at a a time.
      // ...
    } else if (err.code == "unimplemented") {
      // The current browser does not support all of the
      // features required to enable persistence
      // ...
    }
  });
}

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
