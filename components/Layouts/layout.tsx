/**
 * React imports.
 */
import { useRouter } from "next/router";
import Head from "next/head";
import { ReactNode, useEffect, useState } from "react";

/**
 * Vendor-defined UI components/hooks/utilities/etc.
 * `TopBarProgress` tracks page load progress and shows a progress bar at the
 * the top of the page when navigating to a new route.
 */
import { ToastProvider } from "react-toast-notifications";
const TopBarProgress = require("react-topbar-progress-indicator");

/**
 * This checks on user internet connectivity and lets them know when
 * they are disconnected.
 */
import ConnectivityListener from "@ConnectivityListener/ConnectivityListener";

/**
 * Context provider containing application-wide state.
 */
import { AuthProvider } from "@contexts/AuthContext";

/**
 * Developer-defined UI components/hooks/constants.
 */
import { TopBarProgressConfig } from "@utils/constants";
import Navbar from "@components/Navigation/Navbar";
import Footer from "@Footer";
import RouteGuard from "@components/RouteGuard";

TopBarProgress.config(TopBarProgressConfig);

interface ILayout {
  children: ReactNode;
}

const Layout: React.FC<ILayout> = ({ children }): JSX.Element => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  /**
   * Hook into router events to show or hide the progress bar
   * when the user navigates to another route.
   */
  useEffect(() => {
    const showTopbar = () => setLoading(true);
    const hideTopbar = () => setLoading(false);

    router.events.on("routeChangeStart", showTopbar);
    router.events.on("routeChangeComplete", hideTopbar);

    return () => {
      router.events.off("routeChangeStart", showTopbar);
      router.events.off("routeChangeComplete", hideTopbar);
    };
  }, [router.events]);

  return (
    <AuthProvider>
      <ToastProvider>
        <ConnectivityListener />
        {/* <RouteGuard> */}
        {loading && <TopBarProgress />}

        <Head>
          <title>Mmūō - Learn Languages the fun and easy way</title>
        </Head>

        <Navbar />
        {children}
        <Footer />
        {/* </RouteGuard> */}
      </ToastProvider>
    </AuthProvider>
  );
};

export default Layout;
