import React, { FC } from "react";
import { projects } from "../../data/projects";
import Container from "../Container";
import Heading from "../Heading";
import HomeProject from "./HomeProject";

export interface HomeProjectsProps {}

const HomeProjects: FC<HomeProjectsProps> = () => {
  return (
    <Container className="py-20" id="projects">
      <Heading>Mes projets</Heading>
      <div className="space-y-8">
        {projects
          .filter((p) => p.featured)
          .map((project) => (
            <HomeProject key={project.slug} project={project} />
          ))}
      </div>
    </Container>
  );
};

export default HomeProjects;
