import { Link } from "gatsby";
import React, { FC } from "react";
import { Project } from "../../data/projects";
import HoverHeightEffect from "../HoverHeightEffect";

export interface HomeProjectProps {
  project: Project;
}

const HomeProject: FC<HomeProjectProps> = ({ project }) => {
  const { slug, title, description, backgroundSrc, logoSrc, color } = project;

  return (
    <Link to={`/projects/${slug}`}>
      <HoverHeightEffect color={color}>
        <div
          className="h-56 flex flex-col justify-between p-4 bg-cover bg-center cursor-pointer"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(23, 23, 23, 0.8) 100%), url(${backgroundSrc})`,
          }}
        >
          <div>
            {logoSrc && <img src={logoSrc} alt={title} className="h-10" />}
          </div>
          <div>
            <h3 className="font-teko text-3xl uppercase">{title}</h3>
            <div className="text-sm">{description}</div>
          </div>
        </div>
      </HoverHeightEffect>
    </Link>
  );
};

export default HomeProject;
