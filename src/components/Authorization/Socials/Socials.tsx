import cn from "classnames";
import styles from "./socials.module.scss";

import Google from "images/icons/google.svg";
import Facebook from "images/icons/facebook.svg";

const Socials = () => {
  return (
    <>
      <div className={styles.separation}>
        <span className={styles.line}></span>
        <p className={styles.text}>або</p>
        <span className={styles.line}></span>
      </div>
      <div className={styles.container}>
        <div className={cn(styles.button, "button")}>
          <span className={styles.icon}>
            <Google />
          </span>
          Google
        </div>
        <div className={cn(styles.button, "button")}>
          <span className={styles.icon}>
            <Facebook />
          </span>
          Facebook
        </div>
      </div>
    </>
  );
};

export default Socials;
