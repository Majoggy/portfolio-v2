'use client';

import { RightPanel } from './components/RightPanel';
import { LeftPanel } from './components/LeftPanel';
import { Container } from './styled';
import type { Employment, LeftPanelData, Project } from '@/lib/types';

interface Props {
  employments: Employment[];
  projects: Project[];
  leftPanelData: LeftPanelData | null;
}

export function PortfolioClient({ employments, projects, leftPanelData }: Props) {
  return (
    <Container>
      <LeftPanel data={leftPanelData} />
      <RightPanel projects={projects} employments={employments} />
    </Container>
  );
}
