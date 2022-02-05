import React from "react";
import ProjectCarousel from "../project-carousel/ProjectCarousel";
import { Project } from "../../types";
import lostPetsPic from "../../public/lost-pets.png";
import misCuentasPic from "../../public/mis-cuentas.jpg";
import piedraPapelTijeraPic from "../../public/piedra-papel-tijera.jpg";

export default function ProjectLayout() {
  const projects: Project[] = [
    {
      image: lostPetsPic,
      title: "Lost pets",
      description:
        "This is an app made with React and Typescript. Allows users to post missing pets and report found pets. Saves the data in a database made with PostgreSQL.",
      demoLink: "https://apx-desafio-m8.web.app/",
      repoLink: "https://github.com/rafalynch/lost-pets-react",
    },
    {
      image: misCuentasPic,
      title: "Personal budget",
      description:
        "In this personal bugdet app users can create, edit and delete records. In the home page they can ckeck their final balance and the last ten transactions made. It was made using technologies like Typescript, Node.js, Express, and Sequelize.",
      demoLink: "https://challenge-alkemy.herokuapp.com/",
      repoLink: "https://github.com/rafalynch/alkemy-budget-challenge",
    },
    {
      image: piedraPapelTijeraPic,
      title: "Piedra, papel o tijera",
      description:
        "This is a simple game of Piedra, Papel o Tijera. It was made using Firebase Realtime Database, allowing live multiplayer experience and game rooms",
      demoLink: "https://piedra-papel-o-tijera.herokuapp.com/",
      repoLink:
        "https://github.com/rafalynch/piedra-papel-o-tijera-multiplayer",
    },
  ];

  return (
    <div>
      <ProjectCarousel projects={projects}></ProjectCarousel>
    </div>
  );
}
