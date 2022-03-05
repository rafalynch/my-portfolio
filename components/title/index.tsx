import React, { useEffect, useRef } from "react";
import styles from "./index.module.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function Title(props: any) {
  gsap.registerPlugin(ScrollTrigger);
  let container: any = useRef();

  useEffect(() => {
    gsap.from(container, {
      duration: 0.5,
      opacity: 0,
      translateY: 20,
      delay: 0.3,
      scrollTrigger: {
        trigger: container,
        toggleActions: "play pause pause reset",
      },
    });
  }, []);

  return (
    <div ref={(el) => (container = el)} className={styles.rectangle}>
      {props.children}
    </div>
  );
}
