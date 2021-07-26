import { useLocation } from "@reach/router";
import classNames from "classnames";
import { Link } from "gatsby";
import React, { FC } from "react";
import { Link as ScrollLink } from "react-scroll";

export interface HeaderProps {
  headerAbsolute: boolean;
}

const Header: FC<HeaderProps> = ({ headerAbsolute }) => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div className={classNames("w-full px-8", headerAbsolute && "absolute")}>
      <nav className="flex items-center justify-between h-20 max-w-5xl m-auto uppercase">
        <Link to="/">
          <h1 className="font-bold text-lg">Samuel Prak</h1>
        </Link>
        {isHome && (
          <div className="hidden sm:flex space-x-8">
            <ScrollLink to="projects" smooth>
              <div className="cursor-pointer">Projets</div>
            </ScrollLink>
            <ScrollLink to="contact" smooth>
              <div className="cursor-pointer">Contact</div>
            </ScrollLink>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Header;
