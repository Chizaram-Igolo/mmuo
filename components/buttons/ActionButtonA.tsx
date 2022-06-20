/**
 * React imports.
 */
import { ReactNode } from "react";

interface IActionButtonA {
  size?: "sm" | "md" | "lg";
  outlined?: boolean;
  children: ReactNode;
}

const ActionButtonA: React.FC<IActionButtonA> = ({
  size = "md",
  outlined,
  children,
}) => {
  return (
    <div
      className={`box-border relative inline-block w-full 
                  ${size === "lg" ? "h-16" : size === "md" ? "h-14" : "h-12"} 
                  rounded-md text-base leading-[30px] 
                  active:h-[50px]"`}
    >
      <span
        className={`block relative py-0 px-[30px] 
                    ${
                      size === "lg"
                        ? "leading-[50px]"
                        : size === "md"
                        ? "leading-[40px]"
                        : "leading-[36px]"
                    } 
                    rounded-md module-h3 ${
                      outlined
                        ? "text-cyan-800 bg-sky-100 " +
                          "shadow-[0px_4px_0px_rgb(124,150,187)] " +
                          "border-t border-l border-r border-[#c2c2ff] " +
                          "active:shadow-[0px_2px_0px_rgb(34,50,127)]"
                        : "text-white bg-[#26a34a] " +
                          "shadow-[0px_4px_0px_rgb(34,127,50)] " +
                          "active:shadow-[0px_2px_0px_rgb(34,127,50)]"
                    }  
                    active:relative active:top-1`}
      >
        {children}
      </span>
    </div>
  );
};

export default ActionButtonA;
