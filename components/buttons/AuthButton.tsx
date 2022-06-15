/**
 * Developer-defined UI components/hooks/constants.
 */
import ActionButtonB from "./ActionButtonB";

interface IAuthButton {
  loading: boolean;
}

const AuthButton: React.FC<IAuthButton> = ({ children, ...rest }) => {
  return (
    <ActionButtonB {...rest} softTransition>
      {children}
    </ActionButtonB>
  );
};

export default AuthButton;
