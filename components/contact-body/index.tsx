import React from "react";
import styles from "./index.module.css";
import SocialMediaLink from "../social-media-link";
import githubPic from "../../public/github.svg";
import gmailPic from "../../public/gmail.png";
import linkedinPic from "../../public/linkedin.svg";

export default function ContactBody() {
  return (
    <div className={styles.container}>
      <SocialMediaLink icon={githubPic} link="https://github.com/rafalynch">
        /rafalynch
      </SocialMediaLink>
      <SocialMediaLink icon={gmailPic} link="mailto:rafalynch.dev@gmail.com">
        rafalynch.dev@gmail.com
      </SocialMediaLink>
      <SocialMediaLink
        icon={linkedinPic}
        link="https://linkedin.com/in/rafaellynch"
      >
        /rafaellynch
      </SocialMediaLink>
    </div>
  );
}
