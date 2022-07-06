/**
 * React imports.
 */
import Link from "next/link";
import { useRouter } from "next/router";
import { useRef } from "react";

/**
 * This component's styles.
 */
import styles from "./Dropdown.module.css";

/**
 * Vendor-defined UI components/utilites/etc.
 */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb } from "@fortawesome/free-regular-svg-icons";

/**
 * Developer-defined UI components/hooks/constants.
 */
import { useDetectOutsideClick } from "@helpers/hooks/useDetectOutsideClick";
import ActionButtonA from "@Buttons/ActionButtonA";

/*
 * Read the blog post here:
 * https://letsbuildui.dev/articles/building-a-dropdown-menu-component-with-react-hooks
 */
export default function Dropdown({
  children,
  classNames,
  isAlpha,
  isGroup,
  langCode,
  docId,
}) {
  const router = useRouter();

  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);

  const onClick = () => {
    setIsActive(!isActive);
  };

  const navigateToIntro = () => {
    router.push({ pathname: `/feed/${langCode}/tips`, query: { docId } });
  };

  const navigateToQuest = () => {
    if (isAlpha) router.push({ pathname: `/feed/${langCode}/alpha` });
    else router.push({ pathname: `/feed/${langCode}/quest`, query: { docId } });
  };

  let classNamesStr = classNames ? classNames : "";
  let actionText = isAlpha ? "Go to Alphabet" : "Get Started";
  let positionObj = isGroup
    ? { marginTop: "-1.6rem", marginLeft: "-1rem" }
    : {};

  return (
    <div className={`${styles.container} md:w-fit ${classNamesStr}`}>
      <div className={`${styles["menu-container"]}`} ref={dropdownRef}>
        <div onClick={onClick} className={`${styles["menu-trigger"]}`}>
          {children}
        </div>
        <nav
          className={`${styles["menu"]} ${
            isActive ? styles["active"] : styles["inactive"]
          }`}
          style={positionObj}
        >
          <div className={styles.arrowHead}></div>
          <ul className="text-center">
            <li className="border-b border-b-[#dddddd]">
              <a className="font-bold" onClick={navigateToIntro}>
                <span className="heavy-span inline-block border-b-[0.15rem] last:border-b-0 py-[1.9rem] border-dotted border-[#282828] cursor-pointer px-3">
                  <strong>
                    Read Tips &nbsp;
                    <FontAwesomeIcon
                      icon={faLightbulb}
                      className="cursor-pointer text-[#222222]"
                    />
                  </strong>
                </span>
              </a>
            </li>
            <li>
              <a className="cursor-pointer" onClick={navigateToQuest}>
                {/* <ActionButton>{actionText}</ActionButton> */}
                <ActionButtonA size="lg">{actionText}</ActionButtonA>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
