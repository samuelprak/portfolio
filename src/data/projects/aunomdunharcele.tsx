import React from "react";
import { Project } from ".";
import bg from "../../assets/img/projects/aunomdunharcele/background.jpg";
import header from "../../assets/img/projects/aunomdunharcele/header.png";
import logo from "../../assets/img/projects/aunomdunharcele/logo.png";

export const aunomdunharceleProject: Project = {
  backgroundSrc: bg,
  logoSrc: logo,
  headerSrc: header,
  title: "Au nom d'un harcelé",
  slug: "aunomdunharcele",
  description: "Site internet du livre",
  about:
    "Au nom d'un harcelé est un roman qui raconte l'histoire de Tom, un jeune qui vient de perdre tragiquement ses parents lors d'un accident de voiture.",
  goal: "Réaliser le site internet de présentation du livre.",
  technologies: ["HTML, CSS, Bootstrap", "JavaScript"],
  links: [
    {
      title: "Site internet (Web Archive)",
      url: "https://web.archive.org/web/20201101073300/https://aunomdunharcele.fr/",
    },
  ],
  color: "#ffdfca",
  sections: [],
};
