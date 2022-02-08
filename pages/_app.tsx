import "../styles/globals.css";
import type { AppProps } from "next/app";

import Layout from "../components/layout";

import { ToastProvider } from "react-toast-notifications";
import { AuthProvider } from "../contexts/AuthContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <ToastProvider>
        <Layout>
          <Component {...pageProps} />{" "}
        </Layout>
      </ToastProvider>
    </AuthProvider>
  );
}

export default MyApp;
