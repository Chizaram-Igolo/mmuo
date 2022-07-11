/**
 * React imports.
 */
import Link from "next/link";

/**
 * Developer-defined UI components/hooks/constants.
 */
import ActionButtonA from "@Buttons/ActionButtonA";

interface IAuthButtonSection {
  className?: string;
}

const AuthButtonSection: React.FC<IAuthButtonSection> = ({ className }) => {
  return (
    <div
      className={`mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 
                  sm:space-x-2 ${className}`}
    >
      <div className="sm:w-1/2">
        <Link href="/auth/signin">
          <a>
            <ActionButtonA size="md" outlined>
              Sign in
            </ActionButtonA>
          </a>
        </Link>
      </div>

      <div className="sm:w-1/2">
        <Link href="/auth/signup">
          <a>
            <ActionButtonA size="md">Sign up</ActionButtonA>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default AuthButtonSection;
