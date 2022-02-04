import React from "react";
import ProjectCarousel from "../project-carousel/ProjectCarousel";
import { Project } from "../../types";
import styles from "./index.module.css";

export default function ProjectLayout() {
  const projects: Project[] = [
    {
      image: "/lost-pets.png",
      title: "Lost Pets",
      description: "This is the description",
      demoLink: "",
      repoLink: "",
    },
    {
      image: "/mis-cuentas.jpg",
      title: "Mis cuentas",
      description: "This was a challenge for alkemy acceleration",
      demoLink: "",
      repoLink: "",
    },
  ];

  return (
    <div>
      <ProjectCarousel projects={projects}></ProjectCarousel>
    </div>
  );
}
