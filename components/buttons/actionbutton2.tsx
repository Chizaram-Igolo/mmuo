import React from "react";
import styles from "./actionbutton2.module.css";

const ActionButton2: React.FC = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={`${styles["btn"]}`}>
          <span
            className={`${styles["left"]} ${styles["title"]} module-h3 text-white bg-emerald-500 shadow-[0px_4px_0px_rgb(0,144,108)]`}
          >
            {children}
          </span>
          {/* <span
            className={`${styles["right"]} ${styles["icon"]} ${styles["icon-tablet"]}`}
          ></span> */}
        </div>
      </div>
    </div>
  );
};

export default ActionButton2;
