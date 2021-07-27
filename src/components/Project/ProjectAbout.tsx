import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/pro-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FC } from "react";
import { useProjectContext } from "../../context/ProjectContext";
import { ProjectLink } from "../../data/projects";
import CaptionHeading from "../CaptionHeading";
import Container from "../Container";
import ExternalLink from "../ExternalLink";

const ProjectAboutCol: FC = ({ children }) => (
  <div className="flex-1 text-base space-y-4">{children}</div>
);

const ProjectAboutItem: FC<{ title: string; text: React.ReactNode }> = ({
  title,
  text,
}) => {
  return (
    <div>
      <CaptionHeading>{title}</CaptionHeading>
      <div className="text-gray-300">{text}</div>
    </div>
  );
};

const iconsByType = {
  web: faGlobe,
  youtube: faYoutube,
};

const ProjectLinkItem: FC<{ link: ProjectLink }> = ({ link }) => {
  const { url, title, type = "web" } = link;

  return (
    <div>
      <ExternalLink href={url} color="primary">
        <FontAwesomeIcon icon={iconsByType[type]} className="mr-2" />
        {title}
      </ExternalLink>
    </div>
  );
};

const ProjectAbout: FC = () => {
  const { about, aboutNode, goal, technologies, links } = useProjectContext();

  return (
    <Container className="flex flex-col sm:flex-row py-8 space-y-4 sm:space-y-0 sm:space-x-4">
      {about && (
        <ProjectAboutCol>
          <ProjectAboutItem title="À propos" text={aboutNode ?? about} />
        </ProjectAboutCol>
      )}
      {goal && (
        <ProjectAboutCol>
          <ProjectAboutItem title="Objectif" text={goal} />
        </ProjectAboutCol>
      )}
      {(technologies || links) && (
        <ProjectAboutCol>
          {technologies && (
            <ProjectAboutItem
              title="Technologies"
              text={
                <>
                  <ul className="list-disc ml-6">
                    {technologies.map((tech) => (
                      <li key={tech}>{tech}</li>
                    ))}
                  </ul>
                </>
              }
            />
          )}
          {links && (
            <ProjectAboutItem
              title="Liens"
              text={
                <div className="space-y-1">
                  {links.map((link) => (
                    <ProjectLinkItem key={link.url} link={link} />
                  ))}
                </div>
              }
            />
          )}
        </ProjectAboutCol>
      )}
    </Container>
  );
};

export default ProjectAbout;
