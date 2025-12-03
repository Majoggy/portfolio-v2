import { Wrapper } from './styled';
import { Employment } from './components/Employment';
import { Projects } from './components/Projects';
import type { Employment as EmploymentType, Project as ProjectType } from '@/lib/types';

interface Props {
  employments: EmploymentType[];
  projects: ProjectType[];
}

export const RightPanel = ({ employments, projects }: Props) => {
  console.log(projects);
  return (
    <Wrapper>
      <Employment employments={employments} />
      <Projects projects={projects} />
    </Wrapper>
  );
};
