import { breakpoints, colors, spacing } from '@/styles/utils';
import styled from 'styled-components';

export const SectionWrapper = styled.section`
  margin-bottom: 6.25rem;
  animation: fadeInUp 0.6s ease;

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(1.875rem);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const SectionLabel = styled.div`
  font-size: 0.9rem;
  color: ${colors.darkBlue}
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 1rem;
`;

export const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 2.5rem;
  color: ${colors.white};
`;

export const SectionContent = styled.div`
  display: grid;
  gap: ${spacing.xl};

  @media (min-width: ${breakpoints.ultrawide}) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
