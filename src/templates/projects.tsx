import { PageProps } from "gatsby";
import React, { FC } from "react";
import ProjectLayout from "../components/Project/ProjectLayout";
import { LocationProviderComponent } from "../context/LocationContext";
import { projects } from "../data/projects";

export interface ProjectsProps extends PageProps {
  pageContext: {
    slug: string;
  };
}

const Projects: FC<ProjectsProps> = ({ pageContext: { slug } }) => {
  const project = projects.find((p) => p.slug === slug);

  if (!project) return null;

  return <ProjectLayout project={project} />;
};

export default Projects;
