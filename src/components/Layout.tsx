import React, { FC } from "react";
import { SiteMetadataProviderComponent } from "../context/SiteMetadataContext";
import Footer from "./Footer";
import Header from "./Header";
import Metadata from "./Metadata";

export interface LayoutProps {
  headerAbsolute?: boolean;
}

const Layout: FC<LayoutProps> = ({ children, headerAbsolute = false }) => {
  return (
    <SiteMetadataProviderComponent>
      <div className="text-white text-lg relative h-full leading-relaxed">
        <Metadata />
        <Header headerAbsolute={headerAbsolute} />
        {children}
        <Footer />
      </div>
    </SiteMetadataProviderComponent>
  );
};

export default Layout;
