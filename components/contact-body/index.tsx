import React from "react";
import styles from "./index.module.css";
import SocialMediaLink from "../social-media-link";

export default function ContactBody() {
  return (
    <div className={styles.container}>
      <SocialMediaLink icon="/github.svg" link="https://github.com/rafalynch">
        /rafalynch
      </SocialMediaLink>
      <SocialMediaLink icon="/gmail.png" link="mailto:rafalynch.dev@gmail.com">
        rafalynch.dev@gmail.com
      </SocialMediaLink>
      <SocialMediaLink
        icon="/linkedin.svg"
        link="https://linkedin.com/in/rafaellynch"
      >
        /rafaellynch
      </SocialMediaLink>
    </div>
  );
}
