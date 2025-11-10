import { Section } from '../Section';
import { ProjectCard } from '../ProjectCard';
import { projects } from './data';

export const Projects = () => {
  return (
    <Section heading="Featured Work" label="PROJECTS">
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </Section>
  );
};
