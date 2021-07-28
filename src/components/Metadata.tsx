import React, { FC } from "react";
import { Helmet } from "react-helmet";
import { useSiteMetadata } from "../context/SiteMetadataContext";

export interface AppMetadata {
  title: string;
  description: string;
  author: string;
}

export interface MetadataProps {
  metadata?: Partial<AppMetadata>;
}

const defaultMetadata: AppMetadata = {
  title: "Samuel Prak - Développeur web",
  description:
    "Développeur web et passionné par les nouvelles technologies et la musique.",
  author: "Samuel Prak",
};

const Metadata: FC<MetadataProps> = (props) => {
  const {
    siteMetadata: { siteUrl },
  } = useSiteMetadata();

  const metadata = {
    ...defaultMetadata,
    ...(props.metadata ?? {}),
  };

  const { title: metadataTitle, description, author } = metadata;
  const title =
    metadataTitle !== defaultMetadata.title
      ? `${metadataTitle} - Samuel Prak`
      : metadataTitle;
  const image = "/assets/img/photo.jpg";

  const imageUrl = `${siteUrl}${image}`;

  return (
    <Helmet htmlAttributes={{ lang: "fr" }}>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="author" content={author} />
      <link rel="icon" href="/assets/img/favicon.png" />

      <meta property="og:title" content={title} />
      <meta property="og:site_name" content={author} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:type" content="website" />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:site" content="@samuelprak_" />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      <link rel="image_src" type="image/jpeg" href={imageUrl} />
    </Helmet>
  );
};

export default Metadata;
