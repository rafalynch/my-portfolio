import React from "react";
import styles from "./index.module.css";

export default function MyCv() {
  return (
    <a
      data-aos="flip-left"
      data-aos-duration="500"
      className={styles.rectangle}
      href="/cv-rafael-lynch.pdf"
      title="Rafael Lynch CV"
      download
    >
      Get my CV
    </a>
  );
}
