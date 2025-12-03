import { TechTag } from '../ProjectCard/styled';
import {
  Card,
  Company,
  Period,
  Responsibilities,
  Responsibility,
  TechStack,
  Title,
} from './styled';

interface Props {
  title: string;
  company: string;
  period: string;
  responsibilities: string[];
  technologies: string[];
}

export const EmploymentCard = ({
  title,
  company,
  period,
  responsibilities,
  technologies,
}: Props) => {
  return (
    <Card>
      <Title>{title}</Title>
      <Company>{company}</Company>
      <Period>{period}</Period>
      <Responsibilities>
        {responsibilities.map((responsibility, index) => (
          <Responsibility key={index}>{responsibility}</Responsibility>
        ))}
      </Responsibilities>
      <TechStack>
        {technologies && technologies.map((tech, index) => <TechTag key={index}>{tech}</TechTag>)}
      </TechStack>
    </Card>
  );
};
