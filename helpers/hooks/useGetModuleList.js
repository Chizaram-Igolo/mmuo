import {
  collection,
  doc,
  limit,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { useState, useEffect } from "react";
import { projectFirestore } from "../../firebase/config";

export default function useGetModuleList() {
  const [loading, setLoading] = useState(true);
  const [docs, setDocs] = useState([]);
  const [error, setError] = useState(null);
  const [latestDoc, setLatestDoc] = useState(null);

  useEffect(() => {
    const q = query(
      collection(projectFirestore, "modules"),
      orderBy("date", "asc")
    );

    let unsubscribe = onSnapshot(
      q,
      (querySnapshot) => {
        const foundDocs = [];

        querySnapshot.forEach((doc) => {
          foundDocs.push(doc.data().title);
        });

        // .collection("modules")
        // .orderBy("createdAt", "desc")
        // .limit(5)
        // .onSnapshot(
        //   function (querySnapshot) {
        //     var lastVisible = querySnapshot.docs[querySnapshot.docs.length - 1];

        //     setLatestDoc(lastVisible);

        //     querySnapshot.forEach(function (doc) {
        //       if (!foundModules.find((item) => item.id === doc.id)) {
        //         foundModules.push({ ...doc.data(), id: doc.id });
        //       }
        //     });

        setDocs(foundDocs);
        setLoading(false);
      },
      (err) => {
        // Send email with error to developer
        setError(err);
      }
    );

    return unsubscribe;
  }, []);

  return { docs, error, loading, latestDoc };
}
