import { Section } from '../Section';
import { ProjectCard } from '../ProjectCard';
import { Project } from '@/lib/types';

interface Props {
  projects: Project[];
}

export const Projects = ({ projects }: Props) => {
  return (
    <Section heading="Personal Work" label="PROJECTS" id="projects">
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </Section>
  );
};
