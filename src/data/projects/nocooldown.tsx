import React from "react";
import { Project } from ".";
import bg from "../../assets/img/projects/nocooldown/background.jpg";
import header from "../../assets/img/projects/nocooldown/header.png";
import logo from "../../assets/img/projects/nocooldown/logo.png";
import section1 from "../../assets/img/projects/nocooldown/section1.png";
import section2 from "../../assets/img/projects/nocooldown/section2.png";

export const nocooldownProject: Project = {
  backgroundSrc: bg,
  logoSrc: logo,
  headerSrc: header,
  title: "NoCooldown",
  slug: "nocooldown",
  description: "Webradio associative",
  about:
    "NoCooldown était une webradio associative ayant pour objectif de proposer un contenu varié et interactif.",
  goal: "Proposer des émissions radiophoniques aux thèmes variés : musique, sport, cinéma, jeux-vidéo.",
  technologies: [
    "Site internet : HTML, CSS, JavaScript",
    "Infrastructure : PHP, MySQL",
    "Communications (dédicaces, chat en ligne, flux radio) : Node.js",
    "Applications : Java (Android), jQuery Mobile",
  ],
  color: "#0088EC",
  sections: [
    {
      light: true,
      image: section1,
      title: "Présentation",
      text: (
        <>
          <p>
            J'ai créé la webradio associative NoCooldown en 2015, avec pour
            objectif de proposer des émissions radiophoniques variées et
            interactives. Les émissions diffusées sont différentes les unes des
            autres, et beaucoup de thèmes sont abordés (musique, sport, cinéma,
            jeux-vidéo, ...), afin de donner un maximum de choix aux auditeurs.
          </p>
          <p>
            Notre réseau est composé de différentes structures accessibles sur
            de multiples plateformes que ce soit sur internet, sur notre site
            web ou encore sur les réseaux sociaux. En plus de notre site, une
            application Android est disponible afin de nous écouter et consulter
            les informations relatives à notre projet.
          </p>
        </>
      ),
    },
    {
      reversed: true,
      image: section2,
      title: "Mes missions",
      text: (
        <>
          <ul className="list-disc ml-6">
            <li>Président de l'association</li>
            <li>Animation et réalisation d'émissions radiophoniques</li>
            <li>Développement intégral de l'infrastructure</li>
            <li>
              Création et développement du site internet et de l'application
              Android
            </li>
          </ul>
        </>
      ),
    },
  ],
};
