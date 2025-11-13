import { apolloClient } from '@/lib/apollo-client';
import {
  GetEmploymentsDocument,
  GetLeftPanelDocument,
  GetProjectsDocument,
  type GetEmploymentsQuery,
  type GetLeftPanelQuery,
  type GetProjectsQuery,
} from '@/lib/graphql-types';
import { Employment, LeftPanelData, Project } from './types';
import { formatPeriod } from './utils';

export async function getEmployments(): Promise<Employment[]> {
  const { data } = await apolloClient.query<GetEmploymentsQuery>({
    query: GetEmploymentsDocument,
  });

  if (!data?.employments) {
    return [];
  }

  return data.employments.map((job) => ({
    title: job?.title || '',
    company: job?.company || '',
    period: formatPeriod(job?.startDate, job?.endDate ?? ''),
    responsibilities: job?.responsibilities ?? [],
    technologies:
      job?.technologies?.map((tech) => tech?.name).filter((name): name is string => !!name) ?? [],
  }));
}

export async function getProjects(): Promise<Project[]> {
  const { data } = await apolloClient.query<GetProjectsQuery>({
    query: GetProjectsDocument,
  });

  if (!data?.projects) {
    return [];
  }

  return data.projects.map((project, index) => ({
    number: `PROJECT ${String(index + 1).padStart(2, '0')}`,
    title: project?.title || '',
    description: project?.description || '',
    liveLink: project?.liveLink ?? null,
    gitHubLink: project?.gitHubLink ?? null,
    order: project?.order ?? 0,
    technologies:
      project?.technologies?.map((tech) => tech?.name).filter((name): name is string => !!name) ??
      [],
  }));
}

export async function getLeftPanel(): Promise<LeftPanelData | null> {
  const { data } = await apolloClient.query<GetLeftPanelQuery>({
    query: GetLeftPanelDocument,
  });

  if (!data?.leftPanel) {
    return null;
  }

  return {
    name: data.leftPanel.name,
    jobTitle: data.leftPanel.jobTitle,
    about: data.leftPanel.about || '',
    links:
      data.leftPanel.link
        ?.filter((link) => link !== null)
        .map((link) => ({
          label: link!.label,
          href: link!.href,
          isExternal: link!.isExternal,
        })) ?? [],
  };
}
