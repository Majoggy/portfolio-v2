import { Wrapper } from './styled';
import { Employment } from './components/Employment';
import { Projects } from './components/Projects';
import type { Employment as EmploymentType, Project as ProjectType } from '@/lib/types';
import { Contact } from './components/Contact';
import { Title } from '../LeftPanel/styled';

interface Props {
  employments: EmploymentType[];
  projects: ProjectType[];
  isLoading: boolean;
}

export const RightPanel = ({ employments, projects, isLoading }: Props) => {
  if (isLoading) {
    return (
      <Wrapper>
        <Title>Loading...</Title>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <Employment employments={employments} />
      <Projects projects={projects} />
      <Contact />
    </Wrapper>
  );
};
