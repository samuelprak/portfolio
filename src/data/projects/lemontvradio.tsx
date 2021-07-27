import React from "react";
import { Project } from ".";
import bg from "../../assets/img/projects/lemontvradio/background.jpg";
import header from "../../assets/img/projects/lemontvradio/header.png";
import logo from "../../assets/img/projects/lemontvradio/logo.png";
import section1 from "../../assets/img/projects/lemontvradio/section1.png";

export const lemontvradioProject: Project = {
  backgroundSrc: bg,
  logoSrc: logo,
  headerSrc: header,
  title: "LemonTVRadio",
  slug: "lemontvradio",
  description: "WebTV et WebRadio orientée culture geek",
  about:
    "LemonTVRadio était une WebRadio et WebTV associative axée sur les jeux vidéo et les nouvelles technologies. Les émissions sont basées sur les passions des animateurs.",
  goal: "Proposer des émissions pour les jeunes sur des thèmes variés.",
  technologies: ["HTML, CSS, JavaScript", "PHP, MySQL", "Java (Android)"],
  color: "#FDDB00",
  sections: [
    {
      light: true,
      image: section1,
      title: "Mes missions",
      text: (
        <>
          <ul className="list-disc ml-6">
            <li>Président de la Junior Association</li>
            <li>Responsable des ressources humaines</li>
            <li>Animation et réalisation d'émissions radiophoniques</li>
            <li>Mise en place de l'infrastructure</li>
            <li>Création et développement du site internet</li>
          </ul>
        </>
      ),
    },
  ],
};
