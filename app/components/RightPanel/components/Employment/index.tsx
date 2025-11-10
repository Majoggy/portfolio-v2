import { Section } from '../Section';
import { EmploymentCard } from '../EmploymentCard';
import type { Employment as EmploymentType } from '@/lib/types';

interface Props {
  employments: EmploymentType[];
}

export const Employment = ({ employments }: Props) => {
  return (
    <Section heading="Experience" label="EMPLOYMENT HISTORY" id="employment">
      {employments.map((job, index) => (
        <EmploymentCard key={index} {...job} />
      ))}
    </Section>
  );
};
