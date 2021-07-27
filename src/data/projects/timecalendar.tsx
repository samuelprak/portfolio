import React from "react";
import { Project } from ".";
import bg from "../../assets/img/projects/timecalendar/background.jpg";
import header from "../../assets/img/projects/timecalendar/header.png";
import logo from "../../assets/img/projects/timecalendar/logo.png";
import right from "../../assets/img/projects/timecalendar/phone.png";
import section1 from "../../assets/img/projects/timecalendar/section1.png";
import section2 from "../../assets/img/projects/timecalendar/section2.png";
import section3 from "../../assets/img/projects/timecalendar/section3.png";
import section4 from "../../assets/img/projects/timecalendar/section4.png";
import screen1 from "../../assets/img/projects/timecalendar/screen1.png";
import screen2 from "../../assets/img/projects/timecalendar/screen2.png";

export const timecalendarProject: Project = {
  backgroundSrc: bg,
  logoSrc: logo,
  rightSrc: right,
  headerSrc: header,
  title: "TimeCalendar",
  slug: "timecalendar",
  description: "Interface intuitive pour les emplois du temps universitaires",
  about:
    "TimeCalendar permet aux étudiants de consulter leur emploi du temps et recevoir des notifications lors de modifications du planning.",
  goal: "Faciliter l’accès et la lecture des emplois du temps universitaires, en proposant une interface intuitive.",
  technologies: ["TypeScript", "Angular", "Node.js, MySQL", "Flutter"],
  links: [
    {
      title: "Site internet",
      url: "https://timecalendar.app",
    },
  ],
  color: "#f72b61",
  featured: true,
  sections: [
    {
      light: true,
      image: section1,
      title: <>Répondre à un problème des étudiants</>,
      text: (
        <>
          <p>
            J'ai créé TimeCalendar en 2017 pendant mes études en informatique,
            lorsque les emplois du temps fournis par l'université étaient
            complexes à lire et utiliser. L'interface existante n'était pas
            intuitive à l'utilisation, et nous devions le consulter
            régulièrement pour être au courant des modifications du planning.
          </p>

          <p>
            J'ai donc créé un outil permettant aux étudiants d'exporter
            simplement leur emploi du temps dans leur application de calendrier
            préférée. Après écoute des retours, cet outil est aujourd'hui devenu
            une réelle application web et mobile de productivité.
          </p>
        </>
      ),
    },
    {
      reversed: true,
      image: section2,
      title: <>Améliorer la productivité</>,
      text: (
        <>
          <p>
            L'objectif est faciliter la vie des étudiants au quotidien en
            proposant une expérience simple mais complète. Il est ainsi possible
            d'importer un emploi du temps directement depuis l'application, en
            sélectionnant l'université, la formation et les groupes :
            TimeCalendar se connecte automatiquement aux serveurs de
            l'université.
          </p>

          <p>
            L'application détecte automatiquement les modifications ou
            suppressions de cours et envoie une notification pour prévenir les
            utilisateurs. Elle permet aussi sur smartphone de créer des rappels
            et de noter le travail à faire pour les prochains cours.
          </p>
        </>
      ),
    },
    {
      light: true,
      type: "media",
      media: [
        {
          type: "image",
          url: screen1,
        },
        {
          type: "image",
          url: screen2,
        },
      ],
    },
    {
      image: section3,
      title: <>Solution technique</>,
      text: (
        <>
          <p>
            Les universités donnent généralement aux étudiants la possibilité
            d'exporter leur emploi du temps au format ICal. L'application
            importe ces plannings pour les afficher sur une interface conçue
            pour les étudiants. Certains établissements proposent une API,
            simplifiant la connexion et la récupération des données.
          </p>

          <p>
            Pour notifier les utilisateurs en cas de changement, TimeCalendar
            met régulièrement à jour les emplois du temps et peut détecter s'il
            y a eu une modification.
          </p>
        </>
      ),
    },
    {
      light: true,
      reversed: true,
      image: section4,
      title: <>Perspectives</>,
      text: (
        <>
          <p>
            L'application est aujourd'hui déployée dans toute la France et
            disponible pour la majorité des étudiants. De nombreuses
            fonctionnalités sont encore à développer, comme la synchronisation
            entre appareils, ou le multi-calendrier, pour importer plusieurs
            emplois du temps sur le même appareil.
          </p>
        </>
      ),
    },
  ],
};
