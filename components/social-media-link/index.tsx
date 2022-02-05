import React from "react";
import styles from "./index.module.css";

export default function SocialMediaLink(props: any) {
  return (
    <div className={styles.rectangle}>
      <img className={styles.icon} src={props.icon} alt="icon" />
      <a className={styles.link} href={props.link}>
        {props.children}
      </a>
    </div>
  );
}
