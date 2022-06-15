const ActionButtonA: React.FC = ({ children }) => {
  return (
    <div
      className={`box-border relative inline-block 
                     overflow-hidden w-full h-16 rounded-md text-base 
                     leading-[30px] active:h-[50px]`}
    >
      <span
        className={`block relative leading-[50px] py-0 px-[30px] rounded-md
                    module-h3 text-white bg-[#26a34a] 
                    shadow-[0px_4px_0px_rgb(34,127,50)]`}
      >
        {children}
      </span>
    </div>
  );
};

export default ActionButtonA;
