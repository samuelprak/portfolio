import React from "react";
import { Project } from ".";
import bg from "../../assets/img/projects/footr/background.jpg";
import header from "../../assets/img/projects/footr/header.png";
import logo from "../../assets/img/projects/footr/logo.png";

export const footrProject: Project = {
  backgroundSrc: bg,
  logoSrc: logo,
  headerSrc: header,
  title: "Footr",
  slug: "footr",
  description: "Découvrez les alentours",
  about:
    "Footr est le moyen idéal pour vous de générer une balade en fonction de votre temps libre. Entrez votre temps, nous faisons le reste.",
  goal: "Découvrez les monuments et autres lieux près de chez vous, partagez votre balade avec vos amis et revenez sans tarder à votre point de départ.",
  technologies: ["Node.js"],
  links: [
    {
      title: "Site internet",
      url: "https://footr.joshuatabakhoff.com/",
    },
    {
      title: "Voir sur ProductHunt",
      url: "https://www.producthunt.com/posts/walk",
    },
  ],
  color: "#FF847C",
  sections: [
    {
      light: true,
      title: "Mes missions",
      text: (
        <>
          <ul className="list-disc ml-6">
            <li>Développement de l'architecture back-end de l'application</li>
            <li>Logique et algorithmes de génération de balade</li>
          </ul>
        </>
      ),
    },
  ],
};
