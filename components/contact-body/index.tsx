import React, { useEffect, useRef } from "react";
import styles from "./index.module.css";
import SocialMediaLink from "../social-media-link";
import githubPic from "../../public/github.svg";
import gmailPic from "../../public/gmail.png";
import linkedinPic from "../../public/linkedin.svg";
import { gsap, ScrollTrigger } from "../../gsap.config";

export default function ContactBody(props: any) {
  let container = useRef<HTMLDivElement>(null);
  let socialMediaLink1 = useRef<HTMLDivElement>(null);
  let socialMediaLink2 = useRef<HTMLDivElement>(null);
  let socialMediaLink3 = useRef<HTMLDivElement>(null);
  let tl = useRef(gsap.timeline());

  useEffect(() => {
    tl.current.from(socialMediaLink1.current, {
      duration: 0.5,
      translateX: -100,
      opacity: 0,
    });

    tl.current.from(socialMediaLink2.current, {
      duration: 0.5,
      translateX: -100,
      opacity: 0,
    });

    tl.current.from(socialMediaLink3.current, {
      duration: 0.5,
      translateX: -100,
      opacity: 0,
    });

    ScrollTrigger.create({
      trigger: container.current,
      animation: tl.current,
      toggleActions: "play pause pause reset",
    });
  }, []);

  return (
    <div ref={container} className={styles.container}>
      <SocialMediaLink
        ref={socialMediaLink1}
        icon={githubPic}
        link="https://github.com/rafalynch"
      >
        /rafalynch
      </SocialMediaLink>
      <SocialMediaLink
        ref={socialMediaLink2}
        icon={gmailPic}
        link="mailto:rafalynch.dev@gmail.com"
      >
        rafalynch.dev@gmail.com
      </SocialMediaLink>
      <SocialMediaLink
        ref={socialMediaLink3}
        icon={linkedinPic}
        link="https://linkedin.com/in/rafaellynch"
      >
        /rafaellynch
      </SocialMediaLink>
    </div>
  );
}
