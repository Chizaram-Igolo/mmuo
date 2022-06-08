/**
 * React imports.
 */
import { useRouter } from "next/router";
import Head from "next/head";
import { useEffect, useState } from "react";

/**
 * This tracks page load progress and shows a progress bar at the
 * the top of the page when navigating to a new route.
 */
const TopBarProgress = require("react-topbar-progress-indicator");

/**
 * Vendor-defined UI components.
 */
import { ToastProvider } from "react-toast-notifications";

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
import Navbar from "@Navigation/navbar";
import Footer from "@Footer";

TopBarProgress.config(TopBarProgressConfig);

const Layout: React.FC = ({ children }): JSX.Element => {
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
        {loading && <TopBarProgress />}

        <Head>
          <title>Mmūō - Learn Languages the fun and easy way</title>
        </Head>

        <Navbar />
        {children}
        <Footer />
      </ToastProvider>
    </AuthProvider>
  );
};

export default Layout;
