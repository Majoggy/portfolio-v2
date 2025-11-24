import { getPortfolio } from '@/lib/api';
import { PortfolioClient } from './PortfolioClient';

export default async function Portfolio() {
  const { employments, projects, leftPanelData } = await getPortfolio();

  return (
    <PortfolioClient employments={employments} projects={projects} leftPanelData={leftPanelData} />
  );
}
