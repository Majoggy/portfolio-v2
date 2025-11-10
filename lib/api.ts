import { apolloClient } from '@/lib/apollo-client';
import {
  GetEmploymentsDocument,
  GetProjectsDocument,
  type GetEmploymentsQuery,
  type GetProjectsQuery,
} from '@/lib/graphql-types';
import { Employment, Project } from './types';
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
