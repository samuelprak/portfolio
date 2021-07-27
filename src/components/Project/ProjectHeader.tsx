import React, { FC } from "react";
import { useProjectContext } from "../../context/ProjectContext";
import Container from "../Container";

const ProjectHeader: FC = () => {
  const { backgroundSrc, headerSrc, title, titleNode, description } =
    useProjectContext();

  return (
    <div
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.34) 0%, rgba(23, 23, 23, 0.81) 100%), url(${backgroundSrc})`,
      }}
      className="bg-cover bg-center pt-20"
    >
      <Container className="pt-12 flex flex-col justify-between h-full space-y-12">
        <div className="space-y-4">
          <h2 className="font-teko text-5xl uppercase text-shadow-hard">
            {titleNode ?? title}
          </h2>
          <div className="font-semibold text-xl text-shadow-hard">
            {description}
          </div>
        </div>
        <div className="self-center">
          {headerSrc && <img src={headerSrc} alt={title} />}
        </div>
      </Container>
    </div>
  );
};

export default ProjectHeader;
