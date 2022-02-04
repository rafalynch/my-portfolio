import React from "react";
import styles from "./index.module.css";
import { Project } from "../../types";

interface Props {
  project: Project;
}

export default function ProjectCard(props: Props) {
  const { project } = props;

  return (
    <div className={styles.rectangle}>
      <img className={styles.image} src={project.image} alt="project-image" />
      <div className={styles.info}>
        <h3 className={styles.info__title}>{project.title}</h3>
        <p className={styles.info__description}>{project.description}</p>
        <div className={styles.info__links}>
          <a href={project.demoLink} className={styles.button}>
            DEMO
          </a>
          <a href={project.repoLink} className={styles.button}>
            REPO
          </a>
        </div>
      </div>
    </div>
  );
}
