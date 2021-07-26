import React from "react";
import { Project } from ".";
import bg from "../../assets/img/projects/anywhere/background.jpg";
import header from "../../assets/img/projects/anywhere/header.png";
import logo from "../../assets/img/projects/anywhere/logo.png";
import section1 from "../../assets/img/projects/anywhere/section1.png";
import section2 from "../../assets/img/projects/anywhere/section2.png";
import section3 from "../../assets/img/projects/anywhere/section3.png";
import section4 from "../../assets/img/projects/anywhere/section4.png";
// import screen1 from "../../assets/img/projects/timecalendar/screen1.png";
// import screen2 from "../../assets/img/projects/timecalendar/screen2.png";

export const anywhereProject: Project = {
  backgroundSrc: bg,
  logoSrc: logo,
  headerSrc: header,
  title: "Anywhere",
  titleNode: (
    <>
      Anywhere <span className="ml-1 text-3xl">by Living Parisian</span>
    </>
  ),
  slug: "anywhere",
  description:
    "La solution complète de gestion de vos hébergements touristiques",
  about:
    "Anywhere un channel manager permettant aux gestionnaires de locations saisonnières de gérer les réservations des voyageurs, en unifiant les sites de réservation en ligne sur une même application.",
  goal: "Synchroniser les informations entre les différents sites de réservation, en mettant à jour les tarifs et disponibilités des logements, et en unifiant les réservations des voyageurs.",
  technologies: [
    "TypeScript",
    "PHP, Node.js, MySQL",
    "Angular",
    "Linux, Docker",
  ],
  links: [
    {
      title: "Site internet",
      url: "https://livingparisian.com",
    },
  ],
  featured: true,
  sections: [
    {
      light: true,
      image: section1,
      title: <>Unifier les différents sites de réservation</>,
      text: (
        <>
          <p>
            J’ai rejoint Living Parisian en 2017 en tant qu’apprenti développeur
            full stack, pour développeur leur channel manager et intégrer les
            différents canaux de réservation. L’objectif est d’unifier les
            différents sites de réservation en ligne, comme Airbnb ou
            Booking.com, sur une même solution.
          </p>

          <p>
            Anywhere permet de synchroniser les tarifs et disponibilités des
            logements en temps réel sur les différents canaux de réservation.
            L’application récupère les réservations et les conversations des
            voyageurs et les rassemble sur une seule interface, pour une
            visibilité parfaite sur l’ensemble des logements.
          </p>
        </>
      ),
    },
    {
      reversed: true,
      image: section2,
      title: <>Faciliter la gestion des logements</>,
      text: (
        <>
          <p>
            Pour faciliter le quotidien des gestionnaires de biens saisonniers,
            la solution dispose de tous les outils nécessaires à l’activité :
            visibilité sur les arrivées et départs des voyageurs, tarifs et
            disponibilités de chaque logement, et données financières pour
            suivre l’évolution de l’activité.
          </p>

          <p>
            Anywhere propose aussi des outils de facturation avancés pour les
            gestionnaires, permettant aux hôtes pour le compte de tiers de
            facturer leurs clients directement depuis la solution. Un système de
            reporting complet est aussi disponible pour suivre les réservations
            à venir.
          </p>
        </>
      ),
    },
    {
      light: true,
      image: section3,
      title: <>Accueillir les voyageurs grâce au Online Check-in</>,
      text: (
        <>
          <p>
            Pour accueillir les voyageurs dans leur logement, Living Parisian
            propose aux gestionnaires de biens son système d’Online Check-in.
            Inspiré de l’enregistrement en ligne des compagnies aériennes, le
            voyageur peut y indiquer ses horaires d’arrivée et de départ,
            réserver une navette depuis l’aéroport, récupérer un guide de
            bienvenue, les possibilités sont infinies.
          </p>

          <p>
            Ce système a été conçu pour être le plus flexible possible, et
            s’adapte à tous types de logements. Le gestionnaire choisit les
            étapes d’enregistrement et peut personnaliser l’expérience voyageur,
            de sa réservation jusqu’à son départ, pour améliorer la satisfaction
            des clients.
          </p>
        </>
      ),
    },
    // {
    //   type: "media",
    //   media: [
    //     {
    //       type: "image",
    //       url: screen1,
    //     },
    //     {
    //       type: "image",
    //       url: screen2,
    //     },
    //   ],
    // },
    {
      // light: true,
      reversed: true,
      image: section4,
      title: <>Un challenge technique</>,
      text: (
        <>
          <p>
            Anywhere est une solution complexe qui implique de nombreux services
            qui communiquent entre eux. Nous avons mis en place un système de
            synchronisation fiable capable de s’adapter aux différents canaux de
            réservation exsitants. Nous avons ensuite imaginé et développé une
            interface utilisateur simple à utiliser, tout en étant riche en
            fonctionnalités.
          </p>
          <p>
            Le déploiement de ces services a aussi été l’une de nos missions, le
            but étant d’automatiser la création d’environnements clients et
            d’assurer une redondance de l’application et des données. Nous
            utilisons Docker et GitLab au quotidien pour le déploiement de nos
            services.
          </p>
        </>
      ),
    },
  ],
};
