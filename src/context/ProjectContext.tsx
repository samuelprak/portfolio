import React, { createContext, FC, useContext } from "react";
import { Project } from "../data/projects";

type Context = {
  project: Project;
};

export const ProjectContext = createContext({} as Context);

export interface ProjectProviderComponentProps {
  project: Project;
}

export const ProjectProviderComponent: FC<ProjectProviderComponentProps> = ({
  project,
  children,
}) => {
  return (
    <ProjectContext.Provider value={{ project }}>
      {children}
    </ProjectContext.Provider>
  );
};

export const useProjectContext = () => useContext(ProjectContext).project;
