import { getEmployments, getProjects } from '@/lib/api';
import { PortfolioClient } from './PortfolioClient';

export default async function Portfolio() {
  const employments = await getEmployments();
  const projects = await getProjects();

  return <PortfolioClient employments={employments} projects={projects} />;
}
