import React, { FC } from "react";
import { ProjectMedia } from "../../data/projects";

export interface ProjectMediaItemProps {
  media: ProjectMedia;
}

const ProjectMediaItem: FC<ProjectMediaItemProps> = ({
  media: { type, url },
}) => {
  if (type === "image") {
    return (
      <div className="p-4">
        <img src={url} alt="" className="max-h-80" />
      </div>
    );
  }
  if (type === "youtube") {
    return (
      <div className="w-full">
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            src={url}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    );
  }
  return <div></div>;
};

export default ProjectMediaItem;
