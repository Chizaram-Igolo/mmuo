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
    <div className="flex flex-row space-x-2">
      <div>
        <Link href="/auth/signin">
          <a>
            <ActionButtonA size="sm" outlined>
              Sign in
            </ActionButtonA>
          </a>
        </Link>
      </div>

      <div>
        <Link href="/auth/signup">
          <a>
            <ActionButtonA size="sm">Sign up</ActionButtonA>
          </a>
        </Link>
      </div>
    </div>
  );
}
