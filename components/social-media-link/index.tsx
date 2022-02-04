import React from "react";
import styles from "./index.module.css";

export default function SocialMediaLink(props: any) {
  return (
    <div className={styles.rectangle}>
      <img src={props.icon} alt="icon" />
      <span>{props.children}</span>
    </div>
  );
}
