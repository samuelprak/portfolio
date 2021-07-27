import React from "react";
import { Project } from ".";
import bg from "../../assets/img/projects/muca-ozer/background.jpg";
import header from "../../assets/img/projects/muca-ozer/header.png";
import section1 from "../../assets/img/projects/muca-ozer/section1.png";

export const mucaOzerProject: Project = {
  backgroundSrc: bg,
  headerSrc: header,
  title: "Müca Özer",
  slug: "muca-ozer",
  description: "Artiste et musicien",
  about:
    "Müca Özer est un musicien de musique électronique, sound designer et digital performer.",
  goal: "Réaliser un site permettant de présenter l'activité de Müca Özer.",
  technologies: ["HTML, CSS, Bootstrap", "PHP, JavaScript", "WordPress"],
  links: [
    {
      title: "Site internet",
      url: "https://www.muca-ozer.com/",
    },
  ],
  sections: [
    {
      light: true,
      title: "Présentation",
      image: section1,
      text: (
        <>
          Müca Özer est un musicien de musique électronique, sound designer et
          digital performer. Il se produit sur scène avec ses machines et
          synthés pour livrer des performances et lives entraînants et entêtants
          pour échanger des émotions, et son univers. Il réalise en plus des
          ateliers pour tous, permettant de découvrir le monde de la musique
          assistée par ordinateur (MAO).
        </>
      ),
    },
    {
      reversed: true,
      title: "Mes missions",
      text: (
        <>
          <ul className="list-disc ml-6">
            <li>Réalisation du design</li>
            <li>
              Intégration web, création d'un thème et de plugins WordPress
            </li>
          </ul>
        </>
      ),
    },
  ],
};
