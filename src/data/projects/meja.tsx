import React from "react";
import { Project } from ".";
import bg from "../../assets/img/projects/meja/background.jpg";
import header from "../../assets/img/projects/meja/header.png";
import logo from "../../assets/img/projects/meja/logo.png";

export const mejaProject: Project = {
  backgroundSrc: bg,
  logoSrc: logo,
  headerSrc: header,
  title: "Meja",
  slug: "meja",
  description: "Partage d'idées",
  about:
    "Meja est un site internet communautaire permettant de partager ses idées et obtenir des avis.",
  goal: "Meja est un lieu où l'on peut présenter des idées et obtenir des commentaires. Un endroit pour les personnes créatives comme vous.",
  technologies: ["Node.js, MySQL", "AngularJS"],
  links: [
    {
      title: "Voir sur ProductHunt",
      url: "https://www.producthunt.com/posts/meja",
    },
  ],
  color: "#A31FC9",
  sections: [],
};
