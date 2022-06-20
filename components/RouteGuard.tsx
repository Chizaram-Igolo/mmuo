import { useAuth } from "@contexts/AuthContext";
import { useRouter } from "next/router";
import { ReactNode, useEffect } from "react";

interface IRouteGuard {
  children: ReactNode;
}

const RouteGuard: React.FC<IRouteGuard> = ({ children }) => {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/auth/signin");
    }
  }, [user, loading, router]);

  return <>{children}</>;
};

export default RouteGuard;
