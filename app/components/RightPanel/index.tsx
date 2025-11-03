import styled from 'styled-components';
import { Wrapper } from './styled';
import { ProjectCard } from './components/ProjectCard';
import { projects } from './data';

export const RightPanel = () => {
  return (
    <Wrapper>
      <ProjectsGrid>
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </ProjectsGrid>
    </Wrapper>
  );
};

const ProjectsGrid = styled.div`
  display: grid;
  gap: 40px;
  max-width: 1200px;
`;
