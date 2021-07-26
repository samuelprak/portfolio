import { PageProps } from "gatsby";
import React, { FC } from "react";
import Hero from "../components/Home/Hero";
import HomeAboutMe from "../components/Home/HomeAboutMe";
import HomeProjects from "../components/Home/HomeProjects";
import Layout from "../components/Layout";

const Index: FC<PageProps> = () => {
  return (
    <Layout headerAbsolute>
      <Hero />
      <HomeAboutMe />
      <HomeProjects />
    </Layout>
  );
};

export default Index;
