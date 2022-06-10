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
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  databaseURL: process.env.databaseURL,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.appId,
  measurementId: process.env.measurementId,
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

if (process.browser) {
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
