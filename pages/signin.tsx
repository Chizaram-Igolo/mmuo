/**
 * React imports.
 */
import { ReactElement } from "react";

/**
 * Developer-defined UI components/hooks/constants.
 */
import Layout from "@components/Layouts/layout";
import AuthLayout from "@components/Layouts/AuthLayout";
import SignInForm from "@components/Registration/SigninForm";

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
