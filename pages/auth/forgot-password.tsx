/**
 * React imports.
 */
import { ReactElement } from "react";

/**
 * Developer-defined UI components/hooks/constants.
 */
import Layout from "@Layouts/layout";
import AuthLayout from "@Layouts/AuthLayout";
import ForgotPasswordForm from "@Registration/ForgotPasswordForm";

export default function ForgotPassword() {
  return <ForgotPasswordForm />;
}

ForgotPassword.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <AuthLayout>{page}</AuthLayout>
    </Layout>
  );
};
