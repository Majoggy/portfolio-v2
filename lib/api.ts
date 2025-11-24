import { apolloClient } from '@/lib/apollo-client';
import { GetPortfolioDataDocument, type GetPortfolioDataQuery } from '@/lib/graphql-types';
import { Employment, LeftPanelData, Project } from './types';
import { formatPeriod } from './utils';

export async function getPortfolio(): Promise<{
  leftPanelData: LeftPanelData | null;
  employments: Employment[];
  projects: Project[];
}> {
  const { data } = await apolloClient.query<GetPortfolioDataQuery>({
    query: GetPortfolioDataDocument,
  });

  if (!data?.portfolio) {
    return {
      leftPanelData: null,
      employments: [],
      projects: [],
    };
  }

  const portfolio = data.portfolio;

  const leftPanelData: LeftPanelData = {
    name: portfolio.name,
    jobTitle: portfolio.jobTitle,
    about: portfolio.about || '',
    links:
      portfolio.link
        ?.filter((link) => link !== null)
        .map((link) => ({
          label: link!.label,
          href: link!.href,
          isExternal: link!.isExternal,
        })) ?? [],
  };

  const employments: Employment[] = portfolio.employment
    ? [
        {
          title: portfolio.employment.title || '',
          company: portfolio.employment.company || '',
          period: formatPeriod(portfolio.employment.startDate, portfolio.employment.endDate ?? ''),
          responsibilities: Array.isArray(portfolio.employment.responsibilities)
            ? portfolio.employment.responsibilities
            : [],
          technologies:
            portfolio.employment.technologies
              ?.map((tech) => tech?.name)
              .filter((name): name is string => !!name) ?? [],
        },
      ]
    : [];

  const projects: Project[] = (portfolio.project ?? [])
    .filter((project): project is NonNullable<typeof project> => project !== null)
    .map((project, index) => ({
      number: `PROJECT ${String(index + 1).padStart(2, '0')}`,
      title: project.title || '',
      description: project.description || '',
      liveLink: project.liveLink ?? null,
      gitHubLink: project.githubLink ?? null,
      order: project.order ?? 0,
      technologies:
        project.technologies?.map((tech) => tech?.name).filter((name): name is string => !!name) ??
        [],
    }))
    .sort((a, b) => b.order - a.order);

  return {
    leftPanelData,
    employments,
    projects,
  };
}
