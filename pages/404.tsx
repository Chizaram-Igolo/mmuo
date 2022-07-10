import styles from "./404.module.css";

export default function Custom404() {
  return (
    <>
      <div className={`${styles.center} h-screen`}>
        <div className={styles.error}>
          <div className={styles.number}>4</div>
          <div className={styles.illustration}>
            <div className={styles.circle}></div>
            <div className={styles.clip}>
              <div className={styles.paper}>
                <div className={styles.face}>
                  <div className={styles.eyes}>
                    <div
                      className={`${styles.eye} ${styles["eye-left"]}`}
                    ></div>
                    <div
                      className={`${styles.eye} ${styles["eye-right"]}`}
                    ></div>
                  </div>
                  <div
                    className={`${styles.rosyCheeks} ${styles["rosyCheeks-left"]}`}
                  ></div>
                  <div
                    className={`${styles.rosyCheeks} ${styles["rosyCheeks-right"]}`}
                  ></div>
                  <div className={styles.mouth}></div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.number}>4</div>
        </div>

        <div className={styles.text}>
          Oops. The page you&apos;re looking for doesn&apos;t exist.
        </div>

        <div className="flex space-x-4">
          <a className={styles.button} href="#">
            Back
          </a>
          <a className={styles.button} href="#">
            Home
          </a>
        </div>
      </div>
    </>
  );
}
