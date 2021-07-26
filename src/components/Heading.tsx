import React, { FC } from "react";

export interface HeadingProps {}

const Heading: FC<HeadingProps> = ({ children }) => {
  return (
    <h2 className="text-4xl font-bold uppercase text-center mb-8">
      {children}
    </h2>
  );
};

export default Heading;
