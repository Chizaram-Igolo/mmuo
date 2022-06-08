import SignUpForm from "../components/signupform";
import { ReactElement } from "react";
import Layout from "../components/Layouts/layout";
import AuthLayout from "../components/Layouts/AuthLayout";

export default function SignUp() {
  return <SignUpForm />;
}

SignUp.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <AuthLayout>{page}</AuthLayout>
    </Layout>
  );
};
