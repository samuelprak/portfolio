import classNames from "classnames";
import React, { FC } from "react";
import styled from "styled-components";
import { ProjectSection } from "../../data/projects";
import Container from "../Container";
import ProjectMediaItem from "./ProjectMediaItem";

export interface ProjectSectionItemProps {
  section: ProjectSection;
}

const ProjectSectionItem: FC<ProjectSectionItemProps> = ({
  section: { title, text, light, image, reversed, type = "text", media },
}) => {
  return (
    <div className={classNames("py-16", light && "bg-section-light")}>
      <Container>
        <h3 className="font-teko uppercase text-4xl mb-4">{title}</h3>
        {type === "text" && (
          <div
            className={classNames(
              "flex items-center flex-col space-y-8 md:space-y-0 md:flex-row md:space-x-12",
              reversed && "md:flex-row-reverse md:space-x-reverse"
            )}
          >
            <div className="space-y-4">
              <div className="space-y-4 text-base">{text}</div>
            </div>
            {image && (
              <div className="w-full max-w-xs">
                <img src={image} alt="" />
              </div>
            )}
          </div>
        )}
        {type === "media" && (
          <div className="flex flex-wrap justify-center">
            {media?.map((m, i) => (
              <ProjectMediaItem key={i} media={m} />
            ))}
          </div>
        )}
      </Container>
    </div>
  );
};

export default ProjectSectionItem;
