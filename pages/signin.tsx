import SignInForm from "../components/signinform";
import { ReactElement } from "react";
import Layout from "../components/layout";
import AuthLayout from "../components/authlayout";

export default function SignIn() {
  return <SignInForm />;
}

SignIn.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <AuthLayout>{page}</AuthLayout>
    </Layout>
  );
};
