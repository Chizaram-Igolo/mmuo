/**
 * React imports.
 */
import { ReactNode } from "react";

interface IToast {
  heading?: string;
  children: ReactNode;
}

const Toast: React.FC<IToast> = ({ heading, children }) => {
  return (
    <>
      {heading && <strong style={{ fontSize: "1.1em" }}>{heading}</strong>}
      <div style={{ fontSize: "1.1em" }}>{children}</div>
    </>
  );
};

export default Toast;
