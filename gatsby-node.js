const path = require("path");
const fs = require("fs");

exports.createPages = async ({ actions }) => {
  const { createPage } = actions;

  const projects = fs
    .readdirSync("./src/data/projects")
    .filter((file) => file.endsWith(".tsx") && !file.includes("index.tsx"))
    .map((file) => file.replace(".tsx", ""));

  const projectTemplate = path.resolve("./src/templates/projects.tsx");

  projects.forEach((project) => {
    createPage({
      path: `/projects/${project}`,
      component: projectTemplate,
      context: {
        slug: project,
      },
    });
  });
};
