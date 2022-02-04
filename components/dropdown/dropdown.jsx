import Link from "next/link";
import { useRef } from "react";

import styles from "./dropdown.module.css";
import { useDetectOutsideClick } from "../../helpers/hooks/useDetectOutsideClick";
import ActionButton from "../buttons/actionbutton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb } from "@fortawesome/free-regular-svg-icons";

/*
 * Read the blog post here:
 * https://letsbuildui.dev/articles/building-a-dropdown-menu-component-with-react-hooks
 */
export default function Dropdown({ children, classNames }) {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const onClick = () => {
    setIsActive(!isActive);
  };

  let cNs = "";

  if (classNames) {
    cNs = classNames;
  }

  return (
    <div className={styles.container}>
      <div className={styles["menu-container"]}>
        <button
          onClick={onClick}
          className={`${styles["menu-trigger"]} ${cNs}`}
        >
          {children}
        </button>
        <nav
          ref={dropdownRef}
          className={`${styles["menu"]} ${
            isActive ? styles["active"] : styles["inactive"]
          }`}
        >
          <div className={styles.arrowHead}></div>
          <ul>
            <li>
              <Link href="tips">
                <a>
                  Read Tips &nbsp;
                  <FontAwesomeIcon
                    icon={faLightbulb}
                    className="cursor-pointer text-[#222222]"
                  />
                </a>
              </Link>
            </li>
            <li>
              <a href="#">
                <ActionButton>Get Started </ActionButton>
              </a>
            </li>
            {/* <li>
              <a href="#">
                <ActiveButton>Get Started</ActiveButton>
              </a>
            </li> */}
          </ul>
        </nav>
      </div>
    </div>
  );
}
