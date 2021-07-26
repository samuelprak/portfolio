import classNames from "classnames";
import React, { FC, HTMLProps } from "react";

export interface ContainerProps extends HTMLProps<HTMLDivElement> {}

const Container: FC<ContainerProps> = ({ className, ...rest }) => {
  return (
    <div className={classNames("px-8 m-auto max-w-5xl", className)} {...rest} />
  );
};

export default Container;
