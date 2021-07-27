import React from "react";
import { Project } from ".";
import bg from "../../assets/img/projects/frogcreator/background.jpg";
import header from "../../assets/img/projects/frogcreator/header.png";
import logo from "../../assets/img/projects/frogcreator/logo.png";

export const frogcreatorProject: Project = {
  backgroundSrc: bg,
  logoSrc: logo,
  headerSrc: header,
  title: "FRoG Creator",
  slug: "frogcreator",
  description: "Moteur de jeu en 2D",
  about:
    "FRoG Creator est un moteur de jeu MMORPG dans un environnement 2D. Ce logiciel a pour but d'être simple d'utilisation, et permet de créer un jeu sans avoir besoin de savoir programmer.",
  goal: "Membre de la FRoG Team : développement de la version 0.6.3. Optimisation du logiciel et correction de bugs.",
  technologies: ["Logiciel : Visual Basic 6"],
  links: [
    {
      title: "GitHub",
      url: "https://github.com/Alexoune001/FRoG-Creator-OSE-V0.6.3/",
    },
  ],
  color: "#89B7CC",
  sections: [],
};
