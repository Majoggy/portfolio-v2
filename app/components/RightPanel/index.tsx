import { Wrapper } from './styled';
import { Employment } from './components/Employment';
import { Projects } from './components/Projects';
import type { Employment as EmploymentType, Project as ProjectType } from '@/lib/types';
import { Contact } from './components/Contact';

interface Props {
  employments: EmploymentType[];
  projects: ProjectType[];
}

export const RightPanel = ({ employments, projects }: Props) => {
  return (
    <Wrapper>
      <Employment employments={employments} />
      <Projects projects={projects} />
      <Contact />
    </Wrapper>
  );
};
