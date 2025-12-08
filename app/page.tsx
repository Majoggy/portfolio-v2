import { getPortfolio } from '@/lib/api';
import { PortfolioClient } from './PortfolioClient';

// Static Site Generation: data fetched once at build time
export const revalidate = false;

export default async function Portfolio() {
  const { employments, projects, leftPanelData, isLoading } = await getPortfolio();

  return (
    <PortfolioClient
      employments={employments}
      projects={projects}
      leftPanelData={leftPanelData}
      isLoading={isLoading}
    />
  );
}
