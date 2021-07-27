import React from "react";
import { anytimeProject } from "./anytime";
import { anywhereProject } from "./anywhere";
import { aunomdunharceleProject } from "./aunomdunharcele";
import { beesolveProject } from "./beesolve";
import { brainquizProject } from "./brainquiz";
import { courseProject } from "./course";
import { footrProject } from "./footr";
import { frogcreatorProject } from "./frogcreator";
import { lemontvradioProject } from "./lemontvradio";
import { lisbonneProject } from "./lisbonne";
import { mejaProject } from "./meja";
import { memoireHistoireProject } from "./memoire-histoire";
import { mucaOzerProject } from "./muca-ozer";
import { nocooldownProject } from "./nocooldown";
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
  headerSrc?: string;
  title: string;
  titleNode?: React.ReactNode;
  description: string;
  about?: string;
  aboutNode?: React.ReactNode;
  goal?: string;
  technologies?: string[];
  links?: ProjectLink[];
  featured?: boolean;
  sections?: ProjectSection[];
  light?: boolean;
  color?: string;
}

export const projects: Project[] = [
  timecalendarProject,
  anywhereProject,
  anytimeProject,
  beesolveProject,
  footrProject,
  brainquizProject,
  lisbonneProject,
  mejaProject,
  mucaOzerProject,
  aunomdunharceleProject,
  nocooldownProject,
  lemontvradioProject,
  memoireHistoireProject,
  frogcreatorProject,
  courseProject,
];
