import React, { Fragment, useEffect, useRef, useState } from "react";
import { useToasts } from "react-toast-notifications";

const ConnectivityListener = () => {
  useConnectivityListener();
  return null;
};

export function useConnectivityListener() {
  const { addToast, removeToast } = useToasts();
  const [isOnline, setOnline] = useState(
    typeof window !== "undefined" ? window.navigator.onLine : false
  );
  const toastId = useRef(null);

  useEffect(() => {
    const onlineHandler = () => setOnline(true);

    const offlineHandler = () => setOnline(false);

    // window.addEventListener("online", onlineHandler);
    // window.addEventListener("offline", offlineHandler);

    window.navigator.connection.addEventListener("change", async () => {
      try {
        const online = await fetch(
          "https://jsonplaceholder.typicode.com/todos/1"
        );
        if (online.ok) {
          onlineHandler();
        }
      } catch (err) {
        offlineHandler();
      }
    });

    return () => {
      window.removeEventListener("online", onlineHandler);
      window.removeEventListener("offline", offlineHandler);
    };
  }, []);

  useUpdateEffect(() => {
    const content = (
      <Fragment>
        <span className="toast-h3" style={{ fontSize: "1.1em" }}>
          {isOnline ? "Online" : "Offline"}
        </span>
        <div style={{ fontSize: "1.1em" }}>
          {isOnline ? "You are back online." : "You are currently offline."}
        </div>
      </Fragment>
    );

    // remove the existing offline notification if it exists, otherwise store
    // the added toast id for use later
    const callback = isOnline
      ? () => {
          // @ts-ignore
          removeToast(toastId.current);
          toastId.current = null;
        }
      : // @ts-ignore
        (id) => {
          toastId.current = id;
        };

    // add the applicable toast
    addToast(
      content,
      { appearance: isOnline ? "success" : "warning", autoDismiss: isOnline },
      callback
    );

    // @ts-ignore
  }, [isOnline]);
}

/**
 * A custom useEffect hook that only triggers on updates, not on initial mount
 * @param {Function} effect
 */

// @ts-ignore
function useUpdateEffect(effect, deps = []) {
  const initialMount = useRef(true);

  useEffect(() => {
    if (initialMount.current) {
      initialMount.current = false;
    } else {
      effect();
    }
  }, deps);
}

export default ConnectivityListener;
