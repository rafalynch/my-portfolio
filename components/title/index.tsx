import React from "react";
import styles from "./index.module.css";

export default function Title(props: any) {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="200"
      className={styles.rectangle}
    >
      {props.children}
    </div>
  );
}
