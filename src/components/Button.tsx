import classNames from "classnames";
import React, { FC } from "react";

const colors = {
  primary: "border-primary text-primary hover:text-black hover:bg-primary-400",
  white: "border-white text-white hover:text-black hover:bg-white",
  black: "border-black text-black hover:text-white hover:bg-black",
};

const sizes = {
  normal: "px-4 py-3",
  sm: "px-3 py-2",
};

export interface ButtonProps {
  color?: "primary" | "white" | "black";
  size?: "normal" | "sm";
  icon?: React.ReactNode;
  className?: string;
}

const Button: FC<ButtonProps> = ({
  color = "primary",
  size = "normal",
  children,
  icon,
  className = "",
}) => {
  return (
    <div
      className={classNames(
        `inline-block uppercase transition border cursor-pointer`,
        colors[color],
        sizes[size],
        className
      )}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </div>
  );
};

export default Button;
