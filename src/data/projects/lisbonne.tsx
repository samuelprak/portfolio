import React from "react";
import { Project } from ".";
import bg from "../../assets/img/projects/lisbonne/background.jpg";
import header from "../../assets/img/projects/lisbonne/header.png";
import logo from "../../assets/img/projects/lisbonne/logo.png";

export const lisbonneProject: Project = {
  backgroundSrc: bg,
  logoSrc: logo,
  headerSrc: header,
  title: "Lisbonne - Forum UNESCO",
  slug: "lisbonne",
  description: "Site de Médiation Culturelle et Numérique",
  about:
    "Ce projet consiste à élaborer et réaliser un site Internet portant sur le patrimoine culturel de l'UNESCO à Lisbonne : le Monastère des Hiéronymites et la tour de Belém.",
  goal: "Valoriser le patrimoine Portugais à travers une médiation numérique et culturelle. Accompagner l'utilisateur en lui proposant un contenu diversifié et adapté en fonction de ses besoins.",
  technologies: ["PHP, MySQL", "HTML / CSS / Bootstrap"],
  links: [
    {
      title: "Site internet",
      url: "https://lisbonne.samuelprak.fr/",
    },
  ],
  color: "#ea5b0c",
  sections: [],
};
