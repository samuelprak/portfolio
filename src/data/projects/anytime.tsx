import React from "react";
import { Project } from ".";
import bg from "../../assets/img/projects/anytime/background.jpg";
import header from "../../assets/img/projects/anytime/header.png";
import logo from "../../assets/img/projects/anytime/logo.png";
import section1 from "../../assets/img/projects/anytime/section1.png";
import section2 from "../../assets/img/projects/anytime/section2.png";
import section3 from "../../assets/img/projects/anytime/section3.png";
import section4 from "../../assets/img/projects/anytime/section4.png";
// import screen1 from "../../assets/img/projects/timecalendar/screen1.png";
// import screen2 from "../../assets/img/projects/timecalendar/screen2.png";

export const anytimeProject: Project = {
  backgroundSrc: bg,
  logoSrc: logo,
  headerSrc: header,
  title: "Anytime",
  titleNode: (
    <>
      Anytime <span className="ml-1 text-3xl">by Living Parisian</span>
    </>
  ),
  slug: "anytime",
  description:
    "L’outil de création de site de réservation pour vos hébergements touristiques",
  about:
    "Anytime permet aux gestionnaires de biens saisonniers de créer leur propre site de réservation directe, permettant aux voyageurs de réserver un logement un ligne.",
  goal: "Assurer aux gestionnaires de logements une présence en ligne de leurs biens, en leur offrant une meilleure visibilité.",
  technologies: ["TypeScript", "Angular", "Node.js, MySQL"],
  links: [
    {
      title: "Site internet",
      url: "https://livingparisian.com",
    },
  ],
  color: "#3767DC",
  featured: true,
  sections: [
    {
      light: true,
      image: section1,
      title: <>Créer un site de réservation unique</>,
      text: (
        <>
          <p>
            Pour assurer la présence en ligne des logements saisonniers, Living
            Parisian a lancé Anytime, son outil de création de site de
            réservation. J’ai pu gérer ce projet dès sa création en 2019, et
            participer à sa conception et son développement.
          </p>

          <p>
            Anytime permet de construire simplement votre propre site de
            réservation, et propose tous les outils nécessaires à la gestion de
            l’établissement : calendrier des disponibilités et des prix, et
            messagerie intégrée pour les voyageurs.
          </p>
        </>
      ),
    },
    {
      reversed: true,
      image: section2,
      title: <>Gérer simplement le site</>,
      text: (
        <>
          <p>
            Anytime est personnalisable et s’adapte à tous les types
            d’établissements : appartements, hôtels, ou chambre d’hôtes. Le
            gestionnaire configure le site et ses logements, indique les
            équipements, photos, services proposés. Il choisit le thème et
            l’apparence du site parmi plusieurs modèles, peut changer les
            couleurs, le design, et les descriptions.
          </p>

          <p>
            Pour gérer l’activité, tous les outils nécessaires à la gestion de
            l’établissement sont disponibles au même endroit. Calendrier des
            prix et des disponibilités, réservations des voyageurs et messagerie
            intégrée, Anytime propose un panel d’outils complet.
          </p>
        </>
      ),
    },
    {
      light: true,
      image: section3,
      title: <>Un site connecté aux canaux en ligne</>,
      text: (
        <>
          <p>
            Anytime est un outil complet pour gérer les réservations des
            voyageurs, et peut être connecté aux autres canaux de réservations
            comme Airbnb ou Booking.com. Le gestionnaire peut configurer son
            annonce une seule fois sur Anytime, et la publier automatiquement
            sur les autres sites de réservation, offrant un gain de temps
            considérable.
          </p>

          <p>
            Le site de réservation peut aussi être connecté à Anywhere, le
            channel manager de Living Parisian, pour une synchronisation
            complète des calendriers.
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
      title: <>Solution technique</>,
      text: (
        <>
          <p>
            La conception du projet a débuté par l’étude des besoins des
            différents acteurs : de quelles fonctionnalités les hôtes et
            voyageurs ont besoin pour simplifier leur quotidien. Nous avons
            conçu et imaginé l’interface utilisateur pour répondre à leurs
            besoins, tout en gardant une expérience intuitive à l’utilisation et
            agréable au quotidien pour les gestionnaires.
          </p>
          <p>
            Le moteur de réservation est l’un des modules les plus complexes de
            l’application, avec une recherche de logements possible avec de
            multiples critères : dates de séjour, nombre de voyageurs, ou
            disponibilité du logement. Un moteur dédié a été développé en
            JavaScript pour permettre aux voyageurs de trouver le bon logement
            pour eux.
          </p>
        </>
      ),
    },
  ],
};
