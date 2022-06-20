import { faLightbulb } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactNode } from "react";

interface IInfoTip {
  severity: string;
  className: string;
  children: ReactNode;
}

const InfoTip: React.FC<IInfoTip> = ({ children, severity, className }) => {
  let classNames = className + " ";

  let icon = (
    <span className="px-2 pr-5">
      <FontAwesomeIcon
        icon={faLightbulb}
        className="cursor-pointer text-orange-700"
      />
    </span>
  );

  if (severity === "warning") {
    classNames += "bg-orange-200 border border-orange-300";
  } else if (severity === "success") {
    classNames += "bg-green-300 border border-green-500";
  } else if (severity === "danger") {
    classNames += "bg-red-300 border border-red-500";
  }

  return (
    <div
      className={`${classNames} flex flex-row p-2 text-orange-700 roundedmax-w-[100%]`}
    >
      {icon}
      {children}
    </div>
  );
};

export default InfoTip;
