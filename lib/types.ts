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
