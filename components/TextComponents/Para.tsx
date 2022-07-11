interface IPara {
  className?: string;
  children: string;
}

const Para: React.FC<IPara> = ({ className, children }) => {
  return <p className={`${className}`}>{children}</p>;
};

export default Para;
