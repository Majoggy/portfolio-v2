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
  liveLink?: string | null;
  gitHubLink?: string | null;
}

export const ProjectCard = ({
  number,
  title,
  description,
  technologies,
  liveLink,
  gitHubLink,
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
        {liveLink && (
          <ProjectLink href={liveLink} target="_blank" rel="noopener noreferrer">
            Project
          </ProjectLink>
        )}
        {gitHubLink && (
          <ProjectLink href={gitHubLink} target="_blank" rel="noopener noreferrer">
            GitHub
          </ProjectLink>
        )}
      </Links>
    </Card>
  );
};
