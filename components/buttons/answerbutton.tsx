/**
 * Developer-defined UI components/hooks/constants.
 */
import ActionButtonC from "./ActionButtonC";

interface IAnswerButton {
  classNames: string;
  onClick?: () => void;
}

const AnswerButton: React.FC<IAnswerButton> = ({ children, ...rest }) => {
  return <ActionButtonC {...rest}>{children}</ActionButtonC>;
};

export default AnswerButton;
