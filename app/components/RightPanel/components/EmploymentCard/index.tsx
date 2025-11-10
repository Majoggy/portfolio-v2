import { Card, Company, Period, Responsibilities, Responsibility, Title } from './styled';

interface Props {
  title: string;
  company: string;
  period: string;
  responsibilities: string[];
}

export const EmploymentCard = ({ title, company, period, responsibilities }: Props) => {
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
    </Card>
  );
};
