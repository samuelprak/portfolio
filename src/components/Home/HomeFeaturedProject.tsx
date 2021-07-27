import { Link } from "gatsby";
import React, { FC } from "react";
import classNames from "classnames";
import { Project } from "../../data/projects";
import Button from "../Button";
import LineSvg from "../../assets/img/line.svg";
import LineBlackSvg from "../../assets/img/line_black.svg";
import HoverHeightEffect from "../HoverHeightEffect";

export interface HomeFeaturedProjectProps {
  project: Project;
}

const ViewMoreButton: FC<{ light?: boolean }> = ({ light }) => {
  const arrow = "absolute transition top-0 left-0";
  const show = "group-hover:opacity-0";
  const hide = "opacity-0 group-hover:opacity-100";

  return (
    <Button color={light ? "black" : "white"} size="sm" className="group">
      <div className="flex items-center space-x-4">
        <div>Voir plus</div>
        <div className="relative w-6 h-2">
          <span className={classNames(arrow, light ? hide : show)}>
            <LineSvg />
          </span>
          <span className={classNames(arrow, light ? show : hide)}>
            <LineBlackSvg />
          </span>
        </div>
      </div>
    </Button>
  );
};

const HomeFeaturedProject: FC<HomeFeaturedProjectProps> = ({ project }) => {
  const {
    backgroundSrc,
    description,
    slug,
    title,
    titleNode,
    logoSrc,
    rightSrc,
    light,
    color,
  } = project;

  return (
    <HoverHeightEffect color={color}>
      <Link to={`/projects/${slug}`}>
        <div
          className="relative overflow-hidden flex flex-col justify-between p-8 bg-cover bg-center h-96"
          style={{ backgroundImage: `url(${backgroundSrc})` }}
        >
          {rightSrc && (
            <img
              className="hidden md:block absolute right-10 top-10 z-0"
              style={{ maxWidth: "250px", width: "30%" }}
              src={rightSrc}
              alt={title}
            />
          )}
          <div>
            {logoSrc && <img src={logoSrc} alt={title} className="h-16" />}
          </div>
          <div className="space-y-4 z-10">
            <div>
              <div
                className={classNames(
                  "font-teko uppercase text-4xl",
                  light ? "text-black" : "text-shadow-hard"
                )}
              >
                {titleNode ?? title}
              </div>
              <div
                className={classNames(
                  light ? "text-black" : "text-shadow-hard"
                )}
              >
                {description}
              </div>
            </div>
            <div>
              <ViewMoreButton light={light} />
            </div>
          </div>
        </div>
      </Link>
    </HoverHeightEffect>
  );
};
export default HomeFeaturedProject;
