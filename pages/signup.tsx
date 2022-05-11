import SignUpForm from "../components/signupform";
import { ReactElement } from "react";
import Layout from "../components/layout";
import AuthLayout from "../components/authlayout";

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
