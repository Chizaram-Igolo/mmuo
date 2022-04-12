import { useRouter } from "next/router";
import Head from "next/head";

const TopBarProgress = require("react-topbar-progress-indicator");

import { ToastProvider } from "react-toast-notifications";
import ConnectivityListener from "./ConnectivityListener";

import Navbar from "./navbar";
import Footer from "./footer";
import { useEffect, useState } from "react";

import { AuthProvider } from "../contexts/AuthContext";

TopBarProgress.config({
  barThickness: 4,
  barColors: {
    "0": "rgba(26,  188, 156, .7)",
    ".3": "rgba(41,  128, 185, .7)",
    "1.0": "rgba(231, 76,  60,  .7)",
  },
  shadowBlur: 5,
  shadowColor: "rgba(0, 0, 0, .5)",
});

const Layout: React.FC = ({ children }): JSX.Element => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

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
    <div className="">
      <AuthProvider>
        <ToastProvider>
          <ConnectivityListener />
          {/* {router.pathname.indexOf("sign") === -1 &&
        router.pathname.indexOf("exercise") === -1 &&
        router.pathname.indexOf("feed") === -1 && <Banner />} */}

          {loading && <TopBarProgress />}
          <Head>
            <title>Mmūō - Learn Languages the fun and easy way</title>
          </Head>

          {/* {router.pathname.indexOf("cms") === -1 && <Navbar />} */}
          <Navbar />

          {children}

          {/* {router.pathname.indexOf("cms") === -1 && <Footer />} */}
        </ToastProvider>
      </AuthProvider>
    </div>
  );
};

export default Layout;
