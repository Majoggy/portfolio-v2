import { spacing } from '@/styles/utils';
import { Section } from '../Section';
import { ProjectCard } from './components/ProjectCard';
import { Project } from '@/lib/types';

interface Props {
  projects: Project[];
}

export const Projects = ({ projects }: Props) => {
  return (
    <Section mb={spacing.lg} label="Personal projects" id="projects">
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </Section>
  );
};
