import classNames from "classnames";
import React, { FC, HTMLProps } from "react";
import { OutboundLink } from "gatsby-plugin-google-analytics";

export interface LinkProps extends HTMLProps<HTMLAnchorElement> {
  color?: "primary" | "white";
}

const colors = {
  primary: "text-primary-600 hover:text-primary-800",
  white: "text-gray-200 hover:text-gray-400",
};

const ExternalLink: FC<LinkProps> = ({
  color = "white",
  className,
  ...rest
}) => {
  return (
    <OutboundLink
      className={classNames("transition", color && colors[color], className)}
      target="_blank"
      rel="noreferrer noopener"
      {...(rest as any)}
    />
  );
};

export default ExternalLink;
