import {
  Card,
  Description,
  Links,
  ProjectLink,
  ProjectNumber,
  TechStack,
  TechTag,
  Title,
} from './styled';

interface Props {
  number: string;
  title: string;
  description: string;
  technologies?: string[];
  liveLink?: string;
  githubLink?: string;
}

export const ProjectCard = ({
  number,
  title,
  description,
  technologies,
  liveLink,
  githubLink,
}: Props) => {
  return (
    <Card>
      <ProjectNumber>{number}</ProjectNumber>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <TechStack>
        {technologies && technologies.map((tech, index) => <TechTag key={index}>{tech}</TechTag>)}
      </TechStack>
      <Links>
        <Section>
          {liveLink && (
            <ProjectLink href={liveLink} target="_blank" rel="noopener noreferrer">
              View Project
            </ProjectLink>
          )}
        </Section>
        {githubLink && (
          <ProjectLink href={githubLink} target="_blank" rel="noopener noreferrer">
            GitHub
          </ProjectLink>
        )}
      </Links>
    </Card>
  );
};
