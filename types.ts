import { Asset, ContentfulClientApi } from "contentful";

export interface Project {
  id: string;
  image: string;
  title: string;
  description: string;
  demoLink: string;
  repoLink: string;
}
