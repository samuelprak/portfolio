import React from "react";
import { Project } from ".";
import bg from "../../assets/img/projects/brainquiz/background.jpg";
import header from "../../assets/img/projects/brainquiz/header.png";
import logo from "../../assets/img/projects/brainquiz/logo.png";

export const brainquizProject: Project = {
  backgroundSrc: bg,
  logoSrc: logo,
  headerSrc: header,
  title: "BrainQuiz",
  slug: "brainquiz",
  description: "Outil de création de quiz",
  about:
    "Brain Quiz est un outil permettant de créer et partager vos propres quiz.",
  goal: "Créer et partager des quiz pour animer une communauté.",
  technologies: ["TypeScript", "React", "Node.js, NestJS, MySQL"],
  links: [
    {
      title: "Site internet",
      url: "https://brainquiz.samuelprak.fr/",
    },
  ],
  color: "#147ee9",
  sections: [],
};
