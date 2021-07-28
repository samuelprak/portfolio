import React, { createContext, FC, useContext } from "react";
import useSiteMetadataQuery, {
  SiteMetadata,
} from "../hooks/useSiteMetadataQuery";

type SiteMetadataContextValue = {
  siteMetadata: SiteMetadata;
};

export const SiteMetadataContext = createContext<SiteMetadataContextValue>(
  {} as SiteMetadataContextValue
);

export const SiteMetadataProviderComponent: FC = ({ children }) => {
  const siteMetadata = useSiteMetadataQuery();

  return (
    <SiteMetadataContext.Provider value={{ siteMetadata }}>
      {children}
    </SiteMetadataContext.Provider>
  );
};

export const useSiteMetadata = () => useContext(SiteMetadataContext);
