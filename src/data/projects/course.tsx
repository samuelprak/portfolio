import { faFilePdf, faFolder } from "@fortawesome/pro-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Project } from ".";
import bg from "../../assets/img/projects/course/background.jpg";
import ExternalLink from "../../components/ExternalLink";

export const courseProject: Project = {
  backgroundSrc: bg,
  title: "Ressources de cours",
  slug: "course",
  description: "Mes cours",
  about: "Ressources de cours pendant mes années d'études.",
  sections: [
    {
      light: true,
      title: "DUT Informatique 1",
      text: (
        <>
          <h4 className="font-teko text-2xl">Semestre 1</h4>
          <ul className="list-disc ml-6">
            <li>
              Python :{" "}
              <ExternalLink
                href="https://uploads.samuelprak.fr/course/Python.pdf"
                color="primary"
              >
                <FontAwesomeIcon icon={faFilePdf} /> pdf
              </ExternalLink>{" "}
              (dernière modification : 20/12/2016)
            </li>
            <li>
              Maths :{" "}
              <ExternalLink
                href="https://uploads.samuelprak.fr/course/maths"
                color="primary"
              >
                <FontAwesomeIcon icon={faFolder} /> dossier
              </ExternalLink>{" "}
              (dernière modification : 08/01/2017)
            </li>
          </ul>
          <h4 className="font-teko text-2xl">Semestre 2</h4>
          <ul className="list-disc ml-6">
            <li>
              Langage C :{" "}
              <ExternalLink
                href="https://uploads.samuelprak.fr/course/C.pdf"
                color="primary"
              >
                <FontAwesomeIcon icon={faFilePdf} /> pdf
              </ExternalLink>{" "}
              (dernière modification : 08/02/2017)
            </li>
          </ul>
        </>
      ),
    },
  ],
};
