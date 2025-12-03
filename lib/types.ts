import { GetPortfolioDataQuery } from './graphql-types';

export type PortfolioData = NonNullable<GetPortfolioDataQuery['portfolio']>;
export type EmploymentData = NonNullable<NonNullable<PortfolioData['employment']>[number]>;
export type ProjectData = NonNullable<NonNullable<PortfolioData['project']>[number]>;

export type Employment = {
  title: string;
  company: string;
  period: string;
  responsibilities: string[];
  technologies: string[];
};

export type Project = {
  number: string;
  title: string;
  description: string;
  liveLink: string | null;
  gitHubLink: string | null;
  order: number;
  technologies: string[];
};

export type LeftPanelLink = {
  label: string;
  href: string;
  isExternal: boolean;
};

export type LeftPanelData = {
  name: string;
  jobTitle: string;
  about: string;
  links: LeftPanelLink[];
};
