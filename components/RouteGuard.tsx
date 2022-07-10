import { useRouter } from "next/router";
import { ReactNode, useEffect } from "react";

import { useAuth } from "@contexts/AuthContext";

interface IRouteGuard {
  children: ReactNode;
}

const RouteGuard: React.FC<IRouteGuard> = ({ children }) => {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    /**
     * Authentication check is done, user is not signed in, and
     * user is trying to access page other than home page.
     */
    if (
      !loading &&
      !user &&
      router.pathname !== "/" &&
      router.pathname !== "/auth/signin"
    ) {
      router.push("/auth/signin");
    }

    /**
     * Authentication check is done, user is signed in, and
     * user is trying to access the home page.
     */
    if (!loading && user && router.pathname === "/") {
      router.push("/feed/ig");
    }
  }, [user, loading, router]);

  /**
   * Present loading screen while checking to see if user is signed in.
   */
  return <>{children}</>;
};

export default RouteGuard;
