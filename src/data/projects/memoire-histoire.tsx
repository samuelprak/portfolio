import React from "react";
import { Project } from ".";
import bg from "../../assets/img/projects/memoire-histoire/background.jpg";
import header from "../../assets/img/projects/memoire-histoire/header.png";
import logo from "../../assets/img/projects/memoire-histoire/logo.png";
import ExternalLink from "../../components/ExternalLink";

export const memoireHistoireProject: Project = {
  backgroundSrc: bg,
  logoSrc: logo,
  headerSrc: header,
  title: "Mémoire & Histoire",
  slug: "memoire-histoire",
  description: "Site d'actualités historiques",
  about:
    "Mémoire & Histoire est un site d'actualités culturelles et historiques créé par Maxime Coupeau. Le projet a débuté en juillet 2016.",
  aboutNode: (
    <>
      Mémoire &amp; Histoire est un site d'actualités culturelles et historiques
      créé par{" "}
      <ExternalLink
        href="https://www.linkedin.com/in/maxime-coupeau-03b51b152/"
        color="primary"
      >
        Maxime Coupeau
      </ExternalLink>
      . Le projet a débuté en juillet 2016.
    </>
  ),
  goal: "Proposer des articles sur des moments marquants de l'Histoire.",
  technologies: ["Blog : HTML, CSS, WordPress"],
  links: [
    {
      title: "Site internet",
      url: "https://memoire-histoire.fr/",
    },
  ],
  color: "#ff2f2f",
  sections: [],
};
