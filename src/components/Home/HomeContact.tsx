import { faEnvelope } from "@fortawesome/pro-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FC } from "react";
import Container from "../Container";
import ExternalLink from "../ExternalLink";
import Heading from "../Heading";

const HomeContact: FC = () => {
  return (
    <div className="bg-section-light">
      <Container className="py-16" id="contact">
        <Heading>Contact</Heading>
        <div className="space-y-8 text-center">
          <div className="text-gray-200">
            Je suis disponible pour un emploi, ou en freelance pour toute idée
            de projet.
          </div>
          <div className="text-xl">
            <ExternalLink href="mailto:me@samuelprak.fr" color="primary">
              <FontAwesomeIcon icon={faEnvelope} className="mr-2" />{" "}
              me@samuelprak.fr
            </ExternalLink>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HomeContact;
