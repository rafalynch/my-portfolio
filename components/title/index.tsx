import React from "react";
import styles from "./index.module.css";

export default function Title(props: any) {
  return (
    <div>
      <div className={styles.rectangle}>{props.children}</div>
    </div>
  );
}
