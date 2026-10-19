import React from "react";
import styles from "./index.module.css";
import Image from "next/image";

export default function SocialMediaLink(props: any) {
  return (
    <div
      className={styles.rectangle}
      data-aos="fade-up"
      data-aos-duration="500"
    >
      <div className={styles.icon}>
        <Image
          style={{ width: "100%", height: "auto", objectFit: "cover" }}
          src={props.icon}
          alt="icon"
        />
      </div>
      <a className={styles.link} href={props.link}>
        {props.children}
      </a>
    </div>
  );
}
