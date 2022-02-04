import { ReactNode } from "react";
import styles from "./actionbutton.module.css";

interface IActionButton {
  classNames: string;
  children: ReactNode;
}

export default function ActiveButton(props: IActionButton) {
  return (
    <a href="#" className={`${styles["button-3d"]} ${props.classNames}`}>
      {props.children}
    </a>
  );
}
