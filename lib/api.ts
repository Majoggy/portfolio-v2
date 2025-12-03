import { apolloClient } from '@/lib/apollo-client';
import { GetPortfolioDataDocument, type GetPortfolioDataQuery } from '@/lib/graphql-types';
import { Employment, LeftPanelData, Project } from './types';
import { mapEmployment, mapProject } from './helpers';

export async function getPortfolio(): Promise<{
  leftPanelData: LeftPanelData | null;
  employments: Employment[];
  projects: Project[];
}> {
  const { data } = await apolloClient.query<GetPortfolioDataQuery>({
    query: GetPortfolioDataDocument,
  });

  if (!data?.portfolio) {
    return { leftPanelData: null, employments: [], projects: [] };
  }

  const { name, jobTitle, about, link, employment, project } = data.portfolio;

  const leftPanelData: LeftPanelData = {
    name,
    jobTitle,
    about: about || '',
    links: link?.filter((l): l is NonNullable<typeof l> => l !== null) ?? [],
  };

  const employments = (employment ?? [])
    .filter((emp): emp is NonNullable<typeof emp> => emp !== null)
    .map(mapEmployment);

  const projects = (project ?? [])
    .filter((p): p is NonNullable<typeof p> => p !== null)
    .map(mapProject)
    .sort((a, b) => b.order - a.order);

  return { leftPanelData, employments, projects };
}
