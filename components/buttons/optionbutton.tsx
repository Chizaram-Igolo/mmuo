/**
 * React imports.
 */
import { ReactNode } from "react";

interface IOptionButton {
  classNames?: string;
  children: ReactNode;
}

const OptionButton: React.FC<IOptionButton> = ({ children, classNames }) => {
  return (
    <button
      id="option_button"
      type="submit"
      className={`w-full flex items-center bg-white 
                  border border-[#003f99] rounded-lg text-[#003f99] 
                  transition-all duration-[100ms] ${classNames} 
                  cursor-pointer shadow-[0px_4px_0px_rgb(0,54,153)] 
                  active:shadow-[0px_1px_0px_rgb(0,54,153)] text-base 
                  font-semibold justify-center py-[0.55rem] px-[1.5rem]`}
    >
      <h2 className="text-3xl">{children}</h2>
    </button>
  );
};

export default OptionButton;
