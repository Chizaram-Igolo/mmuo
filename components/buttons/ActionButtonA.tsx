interface IActionButtonA {
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
  outlined?: boolean;
  children: React.ReactNode;
}

const ActionButtonA: React.FC<IActionButtonA> = ({
  size = "md",
  outlined,
  children,
  onClick,
}) => {
  return (
    <button
      className={`w-full text-center 
        ${size === "lg" ? "h-12" : size === "md" ? "h-10" : "h-9"} 
        rounded-md text-lg leading-[30px]block relative py-0 px-[30px] 
        module-h3 ${
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
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default ActionButtonA;
