import { ReactNode } from "react";
import styles from "./answerbutton.module.css";

interface IActionButton {
  classNames: string;
  children: ReactNode;
  onClick?: () => void;
}

export default function AnswerButton(props: IActionButton) {
  return (
    <a
      className={`${styles["button-3d"]} ${props.classNames}`}
      onClick={props.onClick}
    >
      {props.children}
    </a>
  );
}
