import React, { FC } from "react";
import { Helmet } from "react-helmet";
import profileImage from "../assets/img/photo.jpg";
import faviconImage from "../assets/img/favicon.png";

export interface AppMetadata {
  title: string;
  description: string;
  author: string;
  image: string;
}

export interface MetadataProps {
  metadata?: Partial<AppMetadata>;
}

const defaultMetadata: AppMetadata = {
  title: "Samuel Prak - Développeur web",
  description:
    "Etudiant en informatique, développeur web et passionné par les nouvelles technologies et la musique.",
  author: "Samuel Prak",
  image: profileImage,
};

const Metadata: FC<MetadataProps> = (props) => {
  const metadata = {
    ...defaultMetadata,
    ...(props.metadata ?? {}),
  };

  const { title, description, author, image } = metadata;

  const imageUrl = `https://samuelprak.fr${image}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="author" content={author} />
      <link rel="icon" href={faviconImage} />

      <meta property="og:title" content={title} />
      <meta property="og:site_name" content={author} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:url" content="https://samuelprak.fr" />

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
