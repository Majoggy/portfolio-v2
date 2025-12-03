import { Employment, EmploymentData, Project, ProjectData } from './types';
import { formatPeriod } from './utils';

export const getTechNames = (
  technologies?: Array<{ name?: string | null } | null> | null
): string[] =>
  technologies?.map((tech) => tech?.name).filter((name): name is string => !!name) ?? [];

export const mapEmployment = (employment: EmploymentData): Employment => ({
  title: employment.title || '',
  company: employment.company || '',
  period: formatPeriod(employment.startDate, employment.endDate ?? ''),
  responsibilities: Array.isArray(employment.responsibilities) ? employment.responsibilities : [],
  technologies: getTechNames(employment.technologies),
});

export const mapProject = (project: ProjectData, index: number): Project => ({
  number: `PROJECT ${String(index + 1).padStart(2, '0')}`,
  title: project.title || '',
  description: project.description || '',
  liveLink: project.liveLink ?? null,
  gitHubLink: project.githubLink ?? null,
  order: project.order ?? 0,
  technologies: getTechNames(project.technologies),
});
