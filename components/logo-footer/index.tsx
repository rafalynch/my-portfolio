import React from "react";
import styles from "./index.module.css";

export default function LogoFooter() {
  return (
    <>
      <span className={styles.span}>
        © Rafa Lynch - {new Date().getFullYear()}
      </span>
    </>
  );
}
