import React from "react";
import { Project } from ".";
import bg from "../../assets/img/projects/beesolve/background.jpg";
import header from "../../assets/img/projects/beesolve/header.png";
import logo from "../../assets/img/projects/beesolve/logo.png";
import section1 from "../../assets/img/projects/beesolve/section1.png";
import section2 from "../../assets/img/projects/beesolve/section2.png";
import ExternalLink from "../../components/ExternalLink";
// import screen1 from "../../assets/img/projects/timecalendar/screen1.png";
// import screen2 from "../../assets/img/projects/timecalendar/screen2.png";

export const beesolveProject: Project = {
  backgroundSrc: bg,
  logoSrc: logo,
  headerSrc: header,
  title: "BeeSolve",
  slug: "beesolve",
  description: "Trouvez le professionnel de votre choix",
  about:
    "BeeSolve est une plate-forme permettant aux clients de trouver le professionnel de leur choix et de prendre rendez-vous en ligne.",
  goal: "Simplifier la recherche de professionnels pour les clients, et faciliter le référencement des professionnels et la gestion de leur activité.",
  technologies: ["TypeScript", "React", "Node.js, NestJS, MongoDB", "Flutter"],
  links: [
    {
      type: "youtube",
      title: "Présentation vidéo",
      url: "https://www.youtube.com/watch?v=WgCRqX6pnoA",
    },
  ],
  color: "#F9A826",
  featured: true,
  sections: [
    {
      light: true,
      image: section1,
      title: <>Une unique plate-forme de recherche</>,
      text: (
        <>
          <p>
            Dans le cadre d’un projet d’école à l'ESIEE Paris, nous avons
            imaginé et développé à quatre (
            <ExternalLink
              href="https://www.linkedin.com/in/eddy-monnot-b0a071112/"
              color="primary"
            >
              Eddy
            </ExternalLink>
            ,{" "}
            <ExternalLink
              href="https://www.linkedin.com/in/tristan-laun%C3%A9-2138b8133/"
              color="primary"
            >
              Tristan
            </ExternalLink>
            ,{" "}
            <ExternalLink
              href="https://www.linkedin.com/in/smayur1/"
              color="primary"
            >
              Mayur
            </ExternalLink>{" "}
            et moi) une plate-forme de mise en relation de clients et de
            professionnels. Pour le client, BeeSolve permet de simplifier la
            recherche de professionnels, en centralisant les différents métiers
            sur un même site internet.
          </p>
          <p>
            Les professionnels peuvent assurer leur présence en ligne grâce à
            BeeSolve, en créant une page internet dédiée à son activité pour ses
            clients. La solution permet de gérer leur emploi du temps, leur
            permettant de suivre leurs rendez-vous au quotidien.
          </p>
        </>
      ),
    },
    {
      reversed: true,
      image: section2,
      title: <>Une gestion simple pour les professionnels</>,
      text: (
        <>
          <p>
            Pour les professionnels, BeeSolve met en place tous les outils
            nécessaires pour le bon fonctionnement de leur entreprise. Un
            calendrier interactif est disponible pour une vision globale de leur
            emploi du temps, ainsi qu’une application mobile à portée de mai
            pour gérer leurs rendez-vous plus facilement.
          </p>

          <p>
            La solution s’adapte à tous types d’activité, que le professionnel
            travaille dans ses locaux ou à domicile. Il suffit de définir les
            plages horaires de travail, ainsi que la durée moyenne d’un
            rendez-vous, et BeeSolve s’occupe de guider la journée. Il peut
            aussi valider lui-même les rendez-vous, ou les accepter
            automatiquement.
          </p>
        </>
      ),
    },
    {
      light: true,
      type: "media",
      media: [
        {
          type: "youtube",
          url: "https://www.youtube.com/embed/WgCRqX6pnoA",
        },
      ],
    },
    // {
    //   image: section3,
    //   title: <>Un site connecté aux canaux en ligne</>,
    //   text: (
    //     <>
    //       <p>
    //         Anytime est un outil complet pour gérer les réservations des
    //         voyageurs, et peut être connecté aux autres canaux de réservations
    //         comme Airbnb ou Booking.com. Le gestionnaire peut configurer son
    //         annonce une seule fois sur Anytime, et la publier automatiquement
    //         sur les autres sites de réservation, offrant un gain de temps
    //         considérable.
    //       </p>

    //       <p>
    //         Le site de réservation peut aussi être connecté à Anywhere, le
    //         channel manager de Living Parisian, pour une synchronisation
    //         complète des calendriers.
    //       </p>
    //     </>
    //   ),
    // },
    // {
    //   light: true,
    //   reversed: true,
    //   image: section4,
    //   title: <>Solution technique</>,
    //   text: (
    //     <>
    //       <p>
    //         La conception du projet a débuté par l’étude des besoins des
    //         différents acteurs : de quelles fonctionnalités les hôtes et
    //         voyageurs ont besoin pour simplifier leur quotidien. Nous avons
    //         conçu et imaginé l’interface utilisateur pour répondre à leurs
    //         besoins, tout en gardant une expérience intuitive à l’utilisation et
    //         agréable au quotidien pour les gestionnaires.
    //       </p>
    //       <p>
    //         Le moteur de réservation est l’un des modules les plus complexes de
    //         l’application, avec une recherche de logements possible avec de
    //         multiples critères : dates de séjour, nombre de voyageurs, ou
    //         disponibilité du logement. Un moteur dédié a été développé en
    //         JavaScript pour permettre aux voyageurs de trouver le bon logement
    //         pour eux.
    //       </p>
    //     </>
    //   ),
    // },
  ],
};
