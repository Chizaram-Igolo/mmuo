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
export default function Dropdown({ children, classNames, isAlpha }) {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const onClick = () => {
    setIsActive(!isActive);
  };

  let cNs = "";
  let actionText = "Get Started";

  if (classNames) {
    cNs = classNames;
  }

  if (isAlpha) {
    actionText = "Go to Alphabets";
  }

  return (
    <div className={`${styles.container} w-[100%] ${cNs}`}>
      <div className={`${styles["menu-container"]}`}>
        <div onClick={onClick} className={`${styles["menu-trigger"]}`}>
          {children}
        </div>
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
                <a className="font-bold">
                  <span className="heavy-span inline-block border-b-[0.15rem] py-[1.9rem] border-dotted border-[#282828] cursor-pointer px-3">
                    <strong>
                      Read Tips &nbsp;
                      <FontAwesomeIcon
                        icon={faLightbulb}
                        className="cursor-pointer text-[#222222]"
                      />
                    </strong>
                  </span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="alpha">
                <a>
                  <ActionButton>{actionText} </ActionButton>
                </a>
              </Link>
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
