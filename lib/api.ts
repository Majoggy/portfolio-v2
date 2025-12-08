import { apolloClient } from '@/lib/apollo-client';
import { GetPortfolioDataDocument, type GetPortfolioDataQuery } from '@/lib/graphql-types';
import { Employment, LeftPanelData, Project } from './types';
import { mapEmployment, mapProject } from './helpers';

const FALLBACK_DATA = {
  leftPanelData: {
    name: 'Christian Baker',
    jobTitle: 'Full Stack Software Engineer',
    about: '',
    links: [],
  },
  employments: [],
  projects: [],
};

export async function getPortfolio(): Promise<{
  leftPanelData: LeftPanelData | null;
  employments: Employment[];
  projects: Project[];
  isLoading: boolean;
}> {
  try {
    const { data } = await apolloClient.query<GetPortfolioDataQuery>({
      query: GetPortfolioDataDocument,
    });

    if (!data?.portfolio) {
      return { ...FALLBACK_DATA, isLoading: true };
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
      .sort((a, b) => a.order - b.order);

    return { leftPanelData, employments, projects, isLoading: false };
  } catch (error) {
    console.error('Failed to fetch portfolio data from Strapi:', error);

    return { ...FALLBACK_DATA, isLoading: true };
  }
}
