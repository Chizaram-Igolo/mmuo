/**
 * React imports.
 */
import Link from "next/link";

/**
 * Developer-defined UI components/hooks/constants.
 */
import ActionButtonA from "@Buttons/ActionButtonA";

export default function NavAuthSection() {
  return (
    <>
      <Link href="/auth/signin">
        <a className="mt-0 mr-2">
          <ActionButtonA size="sm" outlined>
            Sign in
          </ActionButtonA>
        </a>
      </Link>
      <Link href="/auth/signup">
        <a className="mt-0">
          <ActionButtonA size="sm">Sign up</ActionButtonA>
        </a>
      </Link>
    </>
  );
}
