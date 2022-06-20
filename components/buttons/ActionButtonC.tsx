/**
 * React imports.
 */
import { ReactNode } from "react";

interface IActionButton {
  classNames: string;
  onClick?: () => void;
  children: ReactNode;
}

const ActionButtonC: React.FC<IActionButton> = ({
  classNames,
  children,
  onClick,
}) => {
  return (
    <button
      className={`relative inline-block text-[#ecf0f1] rounded-md border 
                border-[#f39c12] bg-[#e67e22] text-center pt-[10px] 
                 pb-[8px] px-[18px] transition-all duration-100 
                 shadow-[0px_6px_0px_rgb(211,84,0)] ${classNames} 
                 active:shadow-[0px_2px_0px_rgb(211,84,0)] active:relative 
                 active:top-1`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default ActionButtonC;
