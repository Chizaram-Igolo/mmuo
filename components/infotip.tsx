import { faLightbulb } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface IInfoTip {
  severity: string;
}

const InfoTip: React.FC<IInfoTip> = ({ children, severity }) => {
  let classNames = "";

  let icon = (
    <FontAwesomeIcon
      icon={faLightbulb}
      className="cursor-pointer text-[#222222]"
    />
  );

  if (severity === "warning") {
    classNames = "bg-orange-300 border border-orange-500";
  } else if (severity === "success") {
    classNames = "bg-green-300 border border-green-500";
  } else if (severity === "danger") {
    classNames = "bg-red-300 border border-red-500";
  }

  return (
    <div className={`${classNames} flex flex-row bg-orange-300`}>
      {icon}
      {children}
    </div>
  );
};

export default IInfoTip;
