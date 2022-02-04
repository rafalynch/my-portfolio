import React from "react";
import styles from "./index.module.css";

export default function LongText(props: any) {
  return <div className={styles.rectangle}>{props.children}</div>;
}
