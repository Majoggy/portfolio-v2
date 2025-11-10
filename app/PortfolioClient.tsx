'use client';

import { RightPanel } from './components/RightPanel';
import { LeftPanel } from './components/LeftPanel';
import { Container } from './styled';
import type { Employment, Project } from '@/lib/types';

interface Props {
  employments: Employment[];
  projects: Project[];
}

export function PortfolioClient({ employments, projects }: Props) {
  return (
    <Container>
      <LeftPanel />
      <RightPanel projects={projects} employments={employments} />
    </Container>
  );
}
