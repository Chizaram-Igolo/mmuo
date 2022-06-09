/**
 * React imports.
 */
import { ReactElement } from "react";

/**
 * Developer-defined UI components/hooks/constants.
 */
import Layout from "@components/Layouts/layout";
import AuthLayout from "@components/Layouts/AuthLayout";
import SignUpForm from "@components/Registration/SignupForm";

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
