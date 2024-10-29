import React from "react";
import styles from "./index.module.css";

export default function HomeText() {
  return (
    <div
      className={styles.container}
      data-aos="fade-right"
      data-aos-duration="500"
    >
      <div className={styles["title-container"]}>
        <h1 className={styles.title}>
          <span className={styles.hello}>Hello!</span>
          <span className={styles.name}>I&apos;m Rafa Lynch</span>
        </h1>
        <p className={styles.subtitle}>
          a web developer from Buenos Aires, Argentina.
        </p>
      </div>
      <div className={styles.info}>
        I have a passion for clean and well written code and for creating
        amazing user experiences. I consider myself a team worker, a problem
        solver and a fast learner with high attention to detail. I am interested
        in working with positive people who can contribute to the improvement of
        my skills.
      </div>
    </div>
  );
}
