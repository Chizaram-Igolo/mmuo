/**
 * React imports.
 */
import { ReactNode } from "react";

/**
 * Developer-defined UI components/hooks/constants.
 */
import ButtonLoader from "@Loaders/ButtonLoader";

interface IActionButton {
  loading?: boolean;
  classNames?: string;
  softTransition?: boolean;
  children: ReactNode;
}

const ActionButtonB: React.FC<IActionButton> = ({
  children,
  classNames,
  loading,
  softTransition,
}) => {
  return (
    <button
      disabled={loading}
      id="variant_2"
      type="submit"
      className={`w-full flex items-center bg-blue-100 
                  border border-[#003f99] rounded-lg text-[#003f99]  
                  ${softTransition ? " transition-all duration-[100ms]" : ""}
                   ${classNames} ${
        loading
          ? "cursor-default shadow-[0px_4px_0px_rgb(120,124,183)]"
          : "cursor-pointer shadow-[0px_4px_0px_rgb(0,54,153)] " +
            "active:shadow-[0px_1px_0px_rgb(0,54,153)]"
      } cursor-pointer text-base justify-center 
        py-[0.55rem] px-[1.5rem] ${
          softTransition ? " transition-all duration-[100ms]" : ""
        }`}
    >
      {loading ? <ButtonLoader /> : children}
    </button>
  );
};

export default ActionButtonB;
