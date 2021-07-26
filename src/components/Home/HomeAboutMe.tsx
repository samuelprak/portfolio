import classNames from "classnames";
import React, { DetailedHTMLProps, FC, ImgHTMLAttributes } from "react";
import photoImage from "../../assets/img/photo.jpg";
import Button from "../Button";
import Container from "../Container";
import ExternalLink from "../ExternalLink";
import Heading from "../Heading";

const Image: FC<
  DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>
> = ({ className, ...rest }) => (
  <img
    src={photoImage}
    alt="Samuel Prak"
    className={classNames(
      "rounded-full border-primary-600 border-4",
      className
    )}
    {...rest}
  />
);

const HomeAboutMe: FC = () => {
  return (
    <Container className="pt-20 pb-8">
      <Heading>A propos de moi</Heading>
      <div className="flex space-x-8 items-center">
        <div className="flex-1 text-xl space-y-8">
          <div className="sm:hidden">
            <Image className="w-full m-auto" style={{ maxWidth: "200px" }} />
          </div>
          <div className="leading-relaxed">
            Je suis Samuel Prak, j'ai 20 ans et je suis étudiant en Informatique
            à l'ESIEE Paris. Je suis passionné par les nouvelles technologies et
            la musique. Dans la vie, j'aime voyager et jouer du piano.
          </div>
          <div className="text-center">
            <ExternalLink href="/cv_samuelprak.pdf">
              <Button>Voir mon CV</Button>
            </ExternalLink>
          </div>
        </div>
        <div className="hidden sm:block w-48">
          <Image />
        </div>
      </div>
    </Container>
  );
};

export default HomeAboutMe;
