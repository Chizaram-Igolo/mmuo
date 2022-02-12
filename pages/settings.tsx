import React, { ReactElement } from "react";
import Layout from "../components/layout";

export default function Settings() {
  return <div></div>;
}

Settings.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
