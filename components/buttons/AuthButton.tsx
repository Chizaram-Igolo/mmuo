/**
 * React imports.
 */
import { ReactNode } from "react";

/**
 * Developer-defined UI components/hooks/constants.
 */
import ActionButtonB from "./ActionButtonB";

interface IAuthButton {
  loading: boolean;
  children: ReactNode;
}

const AuthButton: React.FC<IAuthButton> = ({ children, ...rest }) => {
  return (
    <ActionButtonB {...rest} softTransition>
      {children}
    </ActionButtonB>
  );
};

export default AuthButton;
