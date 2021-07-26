import classNames from "classnames";
import React, { FC } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Metadata from "./Metadata";

export interface LayoutProps {
  headerAbsolute?: boolean;
}

const Layout: FC<LayoutProps> = ({ children, headerAbsolute = false }) => {
  return (
    <div className="text-white text-lg relative h-full leading-relaxed">
      <Metadata />
      <Header headerAbsolute={headerAbsolute} />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
