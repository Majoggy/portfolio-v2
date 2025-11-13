import { getEmployments, getLeftPanel, getProjects } from '@/lib/api';
import { PortfolioClient } from './PortfolioClient';

export default async function Portfolio() {
  const employments = await getEmployments();
  const projects = await getProjects();
  const leftPanelData = await getLeftPanel();

  return (
    <PortfolioClient employments={employments} projects={projects} leftPanelData={leftPanelData} />
  );
}
