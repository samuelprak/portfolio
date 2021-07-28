import React, { FC } from "react";
import { ProjectProviderComponent } from "../../context/ProjectContext";
import { Project } from "../../data/projects";
import Layout from "../Layout";
import Metadata, { AppMetadata } from "../Metadata";
import ProjectAbout from "./ProjectAbout";
import ProjectHeader from "./ProjectHeader";
import ProjectSection from "./ProjectSectionItem";

export interface ProjectLayoutProps {
  project: Project;
}

const ProjectLayout: FC<ProjectLayoutProps> = ({ project }) => {
  const { title, about, sections } = project;

  const metadata: Partial<AppMetadata> = {
    title,
  };
  if (about) {
    metadata.description = about;
  }

  return (
    <Layout headerAbsolute>
      <Metadata metadata={metadata} />
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
