import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/pro-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FC } from "react";
import Button from "./Button";
import Container from "./Container";
import ExternalLink from "./ExternalLink";

const Footer: FC = () => {
  return (
    <Container>
      <div className="py-8 space-y-8">
        <div className="text-center space-x-4">
          <ExternalLink href="https://github.com/Herasus">
            <Button size="sm" icon={<FontAwesomeIcon icon={faGithub} />}>
              GitHub
            </Button>
          </ExternalLink>
          <ExternalLink href="https://www.linkedin.com/in/samuel-prak">
            <Button size="sm" icon={<FontAwesomeIcon icon={faLinkedinIn} />}>
              LinkedIn
            </Button>
          </ExternalLink>
          <ExternalLink href="mailto:me@samuelprak.fr">
            <Button size="sm" icon={<FontAwesomeIcon icon={faEnvelope} />}>
              Email
            </Button>
          </ExternalLink>
        </div>
        <div className="text-center">&copy; Samuel Prak 2021</div>
      </div>
    </Container>
  );
};

export default Footer;
