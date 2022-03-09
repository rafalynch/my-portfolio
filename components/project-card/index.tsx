import React, { useEffect, useState } from "react";
import styles from "./index.module.css";
import { Project } from "../../types";
import Image from "next/image";
import { getAsset } from "../../services/api";

interface Props {
  project: Project;
}

export default function ProjectCard(props: Props) {
  const { project } = props;

  return (
    <div className={styles.rectangle}>
      <Image
        className={styles.image}
        layout={"fill"}
        src={project.image}
        alt="project-image"
      />

      <div className={styles.info}>
        <h3 className={styles.info__title}>{project.title}</h3>
        <p className={styles.info__description}>{project.description}</p>
        <div className={styles.info__links}>
          <a
            target="_blank"
            rel="noreferrer"
            href={project.demoLink}
            className={styles.button}
          >
            DEMO
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href={project.repoLink}
            className={styles.button}
          >
            REPO
          </a>
        </div>
      </div>
    </div>
  );
}
