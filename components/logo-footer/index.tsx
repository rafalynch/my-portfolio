import React from "react";
import styles from "./index.module.css";

export default function LogoFooter() {
  return (
    <>
      <span className={styles.span}>Designed and created by</span>
      <div className={styles.rectangle}>RAFA LYNCH</div>
      <span className={styles.span}>2022</span>
    </>
  );
}
