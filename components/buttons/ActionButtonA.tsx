interface IActionButtonA {
  size?: "md" | "lg";
}

const ActionButtonA: React.FC<IActionButtonA> = ({ size = "md", children }) => {
  return (
    <div
      className={`box-border relative inline-block w-full 
                  ${size === "lg" ? "h-16" : "h-14"} 
                  rounded-md text-base leading-[30px] 
                  active:h-[50px]"`}
    >
      <span
        className={`block relative py-0 px-[30px] 
                    ${size === "lg" ? "leading-[50px]" : "leading-[40px]"} 
                    rounded-md module-h3 text-white bg-[#26a34a] 
                    shadow-[0px_4px_0px_rgb(34,127,50)] 
                    active:shadow-[0px_2px_0px_rgb(34,127,50)] 
                    active:relative active:top-1`}
      >
        {children}
      </span>
    </div>
  );
};

export default ActionButtonA;
