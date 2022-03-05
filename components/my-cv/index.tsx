import React, { useEffect, useRef, useState } from "react";
import styles from "./index.module.css";
import { gsap } from "../../gsap.config";

export default function MyCv() {
  const link = useRef<HTMLAnchorElement>(null);
  const rotateTl = useRef(gsap.timeline({ paused: true, reversed: true }));
  const [isHovered, setIsHovered] = useState(false);

  function rotateEffect(state: boolean) {
    setIsHovered(state);
  }

  useEffect(() => {
    rotateTl.current.to(link.current, {
      rotate: -10,
    });
  }, []);

  useEffect(() => {
    isHovered ? rotateTl.current.play() : rotateTl.current.reverse();
  }, [isHovered]);

  return (
    <a
      onMouseEnter={() => rotateEffect(true)}
      onMouseLeave={() => rotateEffect(false)}
      ref={link}
      className={styles.rectangle}
      href="/cv-rafael-lynch.pdf"
      title="Rafael Lynch CV"
      download
    >
      Get my CV
    </a>
  );
}
