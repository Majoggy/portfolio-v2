import { getPortfolio } from '@/lib/api';
import { PortfolioClient } from './PortfolioClient';

// Enable ISR: revalidate every 15 minutes (900 seconds)
export const revalidate = 900;

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
