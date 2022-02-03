import React, { useRef } from "react";

import styles from "./dropdown.module.css";
import { useDetectOutsideClick } from "../helpers/hooks/useDetectOutsideClick";
/*
 * Read the blog post here:
 * https://letsbuildui.dev/articles/building-a-dropdown-menu-component-with-react-hooks
 */
export default function Dropdown({ children }) {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const onClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={styles.container}>
      <div className={styles["menu-container"]}>
        <button onClick={onClick} className={styles["menu-trigger"]}>
          {children}
        </button>
        <nav
          ref={dropdownRef}
          className={`${styles["menu"]} ${
            isActive ? styles["active"] : styles["inactive"]
          }`}
        >
          <ul>
            <li>
              <a href="#">Messages</a>
            </li>
            <li>
              <a href="#">Trips</a>
            </li>
            <li>
              <a href="#">Saved</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
