import React from "react";
import { anytimeProject } from "./anytime";
import { anywhereProject } from "./anywhere";
import { beesolveProject } from "./beesolve";
import { timecalendarProject } from "./timecalendar";

export interface ProjectLink {
  title: string;
  url: string;
  type?: "web" | "youtube";
}

export interface ProjectMedia {
  type: "image" | "youtube";
  url: string;
}

export interface ProjectSection {
  type?: "text" | "media";
  title?: React.ReactNode;
  text?: React.ReactNode;
  image?: string;
  light?: boolean;
  reversed?: boolean;
  media?: ProjectMedia[];
}

export interface Project {
  slug: string;
  backgroundSrc: string;
  rightSrc?: string;
  logoSrc?: string;
  headerSrc: string;
  title: string;
  titleNode?: React.ReactNode;
  description: string;
  about?: string;
  goal?: string;
  technologies?: string[];
  links?: ProjectLink[];
  featured?: boolean;
  sections?: ProjectSection[];
  light?: boolean;
}

export const projects: Project[] = [
  timecalendarProject,
  anywhereProject,
  anytimeProject,
  beesolveProject,
];
