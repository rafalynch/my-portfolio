import React from "react";
import styles from "./index.module.css";
import Image from "next/image";

function SocialMediaLink(props: any, ref: any) {
  return (
    <div ref={ref} className={styles.rectangle}>
      <div className={styles.icon}>
        <Image
          objectFit="cover"
          layout="responsive"
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

export default React.forwardRef(SocialMediaLink);
