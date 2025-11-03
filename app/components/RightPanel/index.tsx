import styled from 'styled-components';
import { Wrapper } from './styled';
import { ProjectCard } from './components/ProjectCard';
import { projects } from './data';
import { Section } from './components/Section';

export const RightPanel = () => {
  return (
    <Wrapper>
      <Section heading="Projects" label="FEATURED WORK">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </Section>
      <Section heading="Projects" label="FEATURED WORK">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </Section>
      <Section heading="Projects" label="FEATURED WORK">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </Section>
    </Wrapper>
  );
};
