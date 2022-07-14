interface IH1 {
  classNames?: string;
  children: string;
}

const H1: React.FC<IH1> = ({ classNames, children }) => {
  return (
    <h1
      className={`text-4xl md:text-5xl leading-tight md:leading-snug 
                  tracking-tighter font-WorkSans_Bold ${classNames}`}
    >
      {children}
    </h1>
  );
};

export default H1;
