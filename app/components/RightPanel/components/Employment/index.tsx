import { Section } from '../Section';
import { EmploymentCard } from '../EmploymentCard';
import { employment } from './data';

export const Employment = () => {
  return (
    <Section heading="Experience" label="EMPLOYMENT HISTORY">
      {employment.map((job, index) => (
        <EmploymentCard key={index} {...job} />
      ))}
    </Section>
  );
};
