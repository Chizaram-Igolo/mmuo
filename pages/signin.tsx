import SignInForm from "../components/signinform";
import { ReactElement } from "react";
import Layout from "../components/Layouts/layout";
import AuthLayout from "../components/Layouts/AuthLayout";

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
