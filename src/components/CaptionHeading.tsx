import React, { FC } from "react";

export interface CaptionHeadingProps {}

const CaptionHeading: FC<CaptionHeadingProps> = ({ children }) => {
  return (
    <div className="text-gray-400 uppercase font-bold mb-1">{children}</div>
  );
};

export default CaptionHeading;
