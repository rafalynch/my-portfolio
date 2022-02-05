import React from "react";
import styles from "./index.module.css";

export default function MyCv() {
  return (
    <a
      className={styles.rectangle}
      href="/cv-rafael-lynch.pdf"
      title="Rafael Lynch CV"
      download
    >
      Get my CV
    </a>
  );
}
