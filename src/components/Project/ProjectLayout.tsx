import React, { FC } from "react";
import { ProjectProviderComponent } from "../../context/ProjectContext";
import { Project } from "../../data/projects";
import Layout from "../Layout";
import ProjectAbout from "./ProjectAbout";
import ProjectHeader from "./ProjectHeader";
import ProjectSection from "./ProjectSectionItem";

export interface ProjectLayoutProps {
  project: Project;
}

const ProjectLayout: FC<ProjectLayoutProps> = ({ project, children }) => {
  const { sections } = project;

  return (
    <Layout headerAbsolute>
      <ProjectProviderComponent project={project}>
        <ProjectHeader />
        <ProjectAbout />
        {sections?.map((section, i) => (
          <ProjectSection key={i} section={section} />
        ))}
      </ProjectProviderComponent>
    </Layout>
  );
};

export default ProjectLayout;
