import { faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FC } from "react";
import styled from "styled-components";
import heroImage from "../../assets/img/hero.jpg";
import ExternalLink from "../ExternalLink";

const HeroWrapper = styled.div`
  background-image: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.0992) 0%,
      rgba(0, 0, 0, 0.31) 100%
    ),
    url(${heroImage});
  @media (min-width: 640px) {
    background-image: none;
    min-height: 750px;
  }
`;

const HeroInfo = styled.div`
  @media (min-width: 640px) {
    padding-top: max(12vh, 64px);
  }
`;

const HeroInfoTitle = styled.div`
  @media (min-width: 640px) {
    width: 150%;
  }
`;

const Hero: FC = () => {
  return (
    <HeroWrapper className="sm:h-full bg-hero px-8 bg-cover bg-center">
      <div className="max-w-4xl m-auto flex h-full flex-col">
        <div className="h-32"></div>
        <div className="flex-1 flex flex-row-reverse">
          <div className="flex-1 hidden sm:block">
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${heroImage})` }}
            ></div>
          </div>
          <HeroInfo className="flex-1 space-y-10">
            <HeroInfoTitle className="space-y-10">
              <div className="uppercase text-5xl font-extrabold text-shadow-hard">
                Samuel Prak
              </div>
              <div className="text-3xl font-semibold sm:font-bold text-shadow-hard">
                Développeur web et passionné par les nouvelles technologies.
              </div>
            </HeroInfoTitle>
            <div className="border-b-2 border-white sm:border-gray-500 w-24 h-0.5"></div>
            <div className="text-white sm:text-gray-400 font-normal pr-4">
              Je suis Samuel Prak, j'ai 20 ans et je suis étudiant en
              Informatique à l'ESIEE Paris.
            </div>
            <div className="space-x-6 text-gray-200">
              <ExternalLink href="https://www.linkedin.com/in/samuel-prak/">
                <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
              </ExternalLink>
              <ExternalLink href="https://www.instagram.com/samuelprak/">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </ExternalLink>
            </div>
          </HeroInfo>
        </div>
        <div className="h-20 sm:h-32"></div>
      </div>
    </HeroWrapper>
  );
};

export default Hero;
