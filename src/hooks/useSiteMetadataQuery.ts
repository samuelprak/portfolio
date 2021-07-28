import { graphql, useStaticQuery } from "gatsby";

export interface SiteMetadata {
  siteUrl: string;
  title: string;
}

const useSiteMetadataQuery = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            siteUrl
            title
          }
        }
      }
    `
  );
  return site.siteMetadata as SiteMetadata;
};

export default useSiteMetadataQuery;
