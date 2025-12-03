import { spacing } from '@/styles/utils';
import { Section } from '../Section';
import { EmploymentCard } from './components/EmploymentCard';
import type { Employment as EmploymentType } from '@/lib/types';

interface Props {
  employments: EmploymentType[];
}

export const Employment = ({ employments }: Props) => {
  return (
    <Section mb={spacing.xl} heading="Experience" label="EMPLOYMENT HISTORY" id="employment">
      {employments.map((job, index) => (
        <EmploymentCard key={index} {...job} />
      ))}
    </Section>
  );
};
